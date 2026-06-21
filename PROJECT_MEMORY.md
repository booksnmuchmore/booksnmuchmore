# Books 'n' Much More — Project Memory

> Drop this file in the repo root (e.g. `PROJECT_MEMORY.md`). It exists so
> that any future session — with Claude, another AI, or a human developer
> — can get full context fast without re-deriving it from scratch.
>
> Last updated: 2026-06-21

---

## 1. What this site is

A bilingual (Hindi + English) book-summary / motivational-storytelling
site at **booksnmuchmore.com**, hosted on **GitHub Pages**
(`github.com/booksnmuchmore/booksnmuchmore`, branch `main`, no build step —
files are served as-is). Brand tagline: "पढ़ते रहिए, बढ़ते रहिए".

Core product: short bilingual "lessons" extracted from bestselling books,
gated behind a freemium model — some lessons free, others unlockable via
one-time payment or subscription.

---

## 2. Tech stack

| Layer | Tech |
|---|---|
| Hosting | GitHub Pages (static, no build step) |
| Auth | Supabase Auth — email OTP (`signInWithOtp` / `verifyOtp`) |
| Database | Supabase Postgres, RLS enabled on all tables |
| Serverless | Supabase Edge Functions (Deno) |
| Payments | Razorpay (Standard Checkout + server-verified Orders) |
| Email | Brevo (newsletter / lead magnet automation — separate from auth emails, which Supabase sends itself) |
| Analytics | Google Analytics, `G-TYDPW03BMW` |

**Supabase project ID:** `dcewvfkszrpknxdwyual`
**Supabase project URL:** `https://dcewvfkszrpknxdwyual.supabase.co`

---

## 3. Key files

| File | Purpose |
|---|---|
| `auth.js` | Shared Supabase Auth module + login modal. Include on any page needing login. |
| `payments.js` | Razorpay Checkout integration. Requires `auth.js` loaded first. |
| `affiliate-links.js` | Single source of truth for Amazon affiliate links (IN/US/CA/GB/DE). |
| `lessons.html` | Book catalog/browse page. No login UI itself — just loads `auth.js` to fetch `get_all_live_books`. |
| `lessons-book.html` | Individual book's lesson list. Has login UI, entitlement-gated lesson display, unlock buttons. |
| `books.html` | (Also uses `affiliate-links.js`.) |

---

## 4. Auth architecture — IMPORTANT gotcha already solved

`auth.js` uses Supabase's `onAuthStateChange`, which fires its **initial
event only once**, asynchronously, very early — often **before** a page's
own inline `<script>` block has even run (since `auth.js` loads and
executes first via a blocking `<script src>` tag).

**This caused a real bug**: any page logic that registered a listener via
`BNMAuth.onAuthChange(callback)` *after* that one-time initial event had
already fired would simply never be called — meaning "is the user logged
in" checks and content-render calls silently never ran. No console error,
no network request, just a page stuck not knowing its own auth state.

**The fix, already implemented:** `auth.js` tracks an `authReady` flag.
`onAuthChange()` immediately invokes the callback with the current known
state if `authReady` is already `true` at registration time — catching up
late listeners instead of only waiting for future events.

### Public API (`window.BNMAuth`)

```js
BNMAuth.supabase          // the raw Supabase client, reusable by other scripts
BNMAuth.getUser()          // async, returns current user or null (cached)
BNMAuth.requireLogin(cb)   // runs cb() if logged in, else opens login modal then runs cb()
BNMAuth.logout()
BNMAuth.openModal() / BNMAuth.closeModal()
BNMAuth.initAuthUI({ loginBtnId, accountElId })  // auto-show/hide two separate elements
BNMAuth.onAuthChange(cb)   // cb(user) on every login/logout AND immediately if auth already resolved
```

**Rule of thumb for any new page:** always wire up nav/UI auth state via
`BNMAuth.onAuthChange(...)`, never a one-shot call at the bottom of the
script. If you see a page stuck not reflecting login state, this is the
first thing to check.

---

## 5. Entitlement / unlock logic

Gating logic lives **server-side**, in a Postgres RPC function —
**not** duplicated in client JS. This is intentional: it can't be bypassed
by editing browser code.

**Key RPC: `get_lessons_for_book(p_book_slug)`**
Returns every lesson for a book with `out_unlocked` (boolean) and
`out_content` (text, `null` if locked). Checks, in order:
1. `lessons.is_free = true` → unlocked for everyone
2. Active, non-expired row in `subscriptions` for this user → unlocked
3. Paid row in `purchases` (`type='book'`, matching `book_id`) → unlocked
4. Paid row in `purchases` (`type='lesson'`, matching `lesson_id`) → unlocked

Other relevant RPCs: `get_book_by_slug`, `get_all_live_books`,
`get_affiliate_links`, `get_my_plan` (reads `subscribers.plan` — **note:**
`subscribers` table is currently unused/empty; real subscription state
lives in `subscriptions`, checked by `get_lessons_for_book`. These two
tables represent the same concept but aren't reconciled — known
inconsistency, harmless until subscription-tier-specific gating is built.)

### Schema (`public` schema)

| Table | Key columns | Purpose |
|---|---|---|
| `books` | `id`, `slug`, `title`, `price_rs`, `live` | Catalog |
| `lessons` | `id`, `book_id`, `order_num`, `is_free`, `price_rs`, `content` | Catalog |
| `purchases` | `user_id`, `type` (`lesson`/`book`), `lesson_id`, `book_id`, `amount_rs`, `razorpay_payment_id`, `status` (`pending`/`paid`/`failed`) | One-off unlocks |
| `subscriptions` | `user_id`, `razorpay_subscription_id`, `status`, `started_at`, `expires_at` | Subscription access — **this is the table `get_lessons_for_book` actually checks** |
| `subscribers` | `user_id`, `email`, `plan` (`reader`/`seeker`/`scholar`), `status` | Plan/tier tracking — currently empty, not wired into gating yet |
| `profiles` | `id`, `email`, `phone`, `created_at` | Auto-populated on signup (see §6) |
| `payments` | `user_id`, `plan`, `status` | Raw Razorpay payment log. RLS enabled, **zero policies** — inert via API by design, written server-side only |

**RLS — critical security note:** `purchases` and `subscriptions` have
**no client-side INSERT policy**. They were originally insertable by the
authenticated user themselves (`auth.uid() = user_id`), which was a real
exploit: anyone could insert a fake `'paid'` row from the browser console
without ever paying. Those policies were removed. **Only the
`razorpay-webhook` Edge Function (via `service_role`, which bypasses RLS)
should ever write a `'paid'` row.** Do not re-add a client insert policy
to these tables.

---

## 6. Signup → profile auto-creation

Supabase email OTP treats signup and login identically — same call
(`signInWithOtp`), no separate "Sign Up" UI needed. A Postgres trigger
(`on_auth_user_created` → `handle_new_user()`) automatically inserts a
matching row into `public.profiles` whenever a new row appears in
`auth.users`. This function's direct REST execute permission is revoked
for `anon`/`authenticated` — it's only reachable via the trigger.

---

## 7. Payment flow (production-grade, real money, LIVE mode)

**Do NOT trust client-side payment confirmation.** The original
`payments.js` design (client inserts a `'paid'` row after Razorpay's
`handler` callback fires) is a free-unlock exploit in production — fixed.

### Current flow

1. Frontend (`payments.js`) calls `BNMAuth.requireLogin`, then POSTs to
   the `create-razorpay-order` Edge Function with `notes` describing what's
   being purchased (`purchase_type`: `lesson`/`book`/`subscription`, plus
   `lesson_id`/`book_id`/`tier`).
2. **`create-razorpay-order`** looks up the **real price itself** —
   `lessons.price_rs` / `books.price_rs` from the DB, or a hardcoded
   `SUBSCRIPTION_TIER_PRICES_RS` map for `seeker`/`scholar` tiers — and
   creates a Razorpay Order server-side using `RAZORPAY_KEY_SECRET`. The
   frontend's requested amount is **never trusted**; this closes both the
   "fake a paid row" exploit and a secondary "request a too-low price for
   a real item" exploit.
3. Frontend opens Razorpay Checkout against the returned `order_id`.
4. On successful payment, Razorpay calls **`razorpay-webhook`** directly
   (server-to-server). That function verifies the `X-Razorpay-Signature`
   header via HMAC-SHA256 using `RAZORPAY_WEBHOOK_SECRET`, then — and only
   then — inserts the `purchases`/`subscriptions` row using
   `SUPABASE_SERVICE_ROLE_KEY` (bypasses RLS).
5. Frontend's `handler` callback (`payments.js`) does **not** write
   anything; it just waits ~2.5s for the webhook to land, then reloads the
   page so `get_lessons_for_book` re-fetches and shows the unlock.

### Edge Functions deployed

| Function | `verify_jwt` | Purpose |
|---|---|---|
| `create-razorpay-order` | `true` (caller must be a logged-in Supabase user) | Looks up real price, creates Razorpay Order |
| `razorpay-webhook` | `false` (Razorpay has no Supabase session) | Verifies signature, writes purchase/subscription row |

### Secrets required (set in Supabase Dashboard → Edge Functions → Secrets)

- `RAZORPAY_KEY_ID` — safe-for-frontend key, currently `rzp_live_T4LAxwgkat6d6L` (also hardcoded in `payments.js`, which is fine — this key is meant to be public)
- `RAZORPAY_KEY_SECRET` — **never** put this in any frontend file or in chat/repo. Server secret only.
- `RAZORPAY_WEBHOOK_SECRET` — generated when the webhook is created in the Razorpay dashboard
- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` — auto-available to every Edge Function, no manual setup needed

### Razorpay dashboard setup (one-time, already done)

- Webhook URL: `https://dcewvfkszrpknxdwyual.supabase.co/functions/v1/razorpay-webhook`
- Subscribed event: `payment.captured`

### Pricing (verified live, 2026-06-21)

- Lessons: ₹1 each (136 paid lessons; 34 marked `is_free`, some of which still carry a stale `price_rs=1` — harmless, `is_free` is checked first and always wins)
- Books (full unlock): ₹7 each (17 books)
- Subscription tiers: `seeker` ₹99, `scholar` ₹299 — **hardcoded in `create-razorpay-order`**, not read from a table. This is the one price point that needs a manual Edge Function edit + redeploy if it changes. (A `subscription_tiers` table could be added later to make this fully data-driven too, like lessons/books already are.)

**Verified working end-to-end** with two real live-mode transactions
(different Gmail accounts, one lesson unlock + one book unlock) — order
creation, webhook signature verification, DB write, and live entitlement
unlock on the page all confirmed working as of 2026-06-21.

---

## 8. Known loose ends / things to revisit

- **OTP vs magic link inconsistency**: the login modal's copy says "8-digit code," but at least one user received a magic link instead. This is a Supabase Authentication → Email Templates setting (Magic Link template vs OTP template), not a code bug. Worth checking/aligning if it matters for UX consistency.
- **`subscribers` vs `subscriptions` duplication**: two tables represent overlapping concepts (plan/tier tracking). Not yet reconciled. `get_my_plan()` reads `subscribers` (currently empty); `get_lessons_for_book` reads `subscriptions` (has real data). If tier-specific gating (e.g. `scholar` gets X but `seeker` doesn't) is ever built, reconcile these first.
- **Subscription tier pricing isn't data-driven** — see §7. Consider a `subscription_tiers` table if this needs to change often.
- **`affiliate-links.js` pending task** (from earlier project history): originally meant to be the single source of truth for Amazon links extracted out of `lessons-data.js`/`books.html` — verify current repo state before assuming this is fully done or still needs finishing.
- **Mobile app**: not started. Decision pending on PWA vs. Capacitor-wrapped webview vs. full native rebuild — see conversation history for tradeoffs. Plan is to fully test the website's existing flows first.
- **GitHub repo access**: no GitHub MCP connector was available as of this writing; repo files were read via direct `raw.githubusercontent.com` fetches in `bash_tool` (reliable) rather than `web_fetch` (unreliable/rate-limited for this use case) or the GitHub REST API (rate-limited on shared sandbox IPs).

---

## 9. Standing instructions

- Whenever updating any booksnmuchmore.com page, add a copyright
  disclaimer footer if not already present:
  > *"This site contains summaries and personal takeaways. All book titles
  > and content belong to their respective authors and publishers."*
- Never put `RAZORPAY_KEY_SECRET` or `RAZORPAY_WEBHOOK_SECRET` in any
  frontend file, chat message, or commit. Server-side secrets only,
  managed in Supabase Dashboard → Edge Functions → Secrets.
