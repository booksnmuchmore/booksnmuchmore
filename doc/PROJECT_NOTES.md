# Books 'n' Much More — Project Reference

Internal documentation for the monetization + database system. Keep this in the repo root or `/docs` so future work (by Prashant, Copilot, or anyone else) has full context without re-explaining the architecture.

---

## 1. Stack Overview

| Layer | Tech |
|---|---|
| Frontend | Vanilla HTML/CSS/JS, data-driven via `site-data.js` |
| Database | Supabase (Postgres), free tier, **Singapore region** |
| Auth | Supabase Auth (email/phone OTP) |
| Payments | Razorpay |
| Mobile | Capacitor (WebView wrapper, planned — Android + iOS) |

---

## 2. Pricing Model

| Tier | Price | Scope |
|---|---|---|
| Per-lesson unlock | ₹1 | Single lesson (lessons 3–10 of any book) |
| Per-book unlock | ₹7 | All 10 lessons of one book |
| Subscription | ₹99/month | All books, all lessons, unlimited |

**Free tier:** Lessons 1–2 of every book are always free (`is_free = true`). Lessons 3–10 are locked behind one of the three paid tiers above.

---

## 3. Database Schema

Tables (see `01_schema.sql`):
- `books` — slug, title, author, genre, cover_url, description, price_rs (₹7), featured, live
- `lessons` — book_id, order_num (1–10), title, teaser, content, is_free, price_rs (₹1)
- `profiles` — mirrors `auth.users`, auto-populated via trigger (see `04_auto_create_profile.sql`)
- `purchases` — user_id, type (`lesson`/`book`), lesson_id/book_id, amount_rs, razorpay_payment_id, status
- `subscriptions` — user_id, razorpay_subscription_id, status, started_at, expires_at

## 4. SQL Migration Files (run in this exact order, once, in Supabase SQL Editor)

1. `01_schema.sql` — creates all tables
2. `02_rls_policies.sql` — Row-Level Security policies (users only see their own purchases/profile)
3. `03_paywall_function.sql` — `get_lessons_for_book(slug)` — **the actual paywall enforcement**, server-side
4. `04_auto_create_profile.sql` — trigger: auto-creates a `profiles` row whenever someone signs up via Supabase Auth
5. `05_fix_service_role_grants.sql` — **required on newer Supabase projects** using `sb_secret_...` style API keys. Without this, the service_role key gets "permission denied" even though it should bypass RLS. Run once.

## 5. The Paywall Logic (how it actually works)

The frontend never queries the `lessons` table directly. It calls the Postgres function:

```sql
select * from get_lessons_for_book('atomic-habits');
```

This function checks, server-side:
- Is `is_free = true`? → show content
- Does the user have an active subscription? → show content
- Did the user buy the whole book? → show content
- Did the user buy this specific lesson? → show content
- Otherwise → `content` returns `null`, only `title`/`teaser`/`price_rs` are shown

This means the paywall **cannot be bypassed by editing frontend JS** — the gate is in the database, not the browser.

## 6. Adding New Books (ongoing workflow)

To add a new book in the future:

1. Open `source-data.js`
2. Copy an existing book object, fill in:
   - `slug`, `title`, `author`, `genre`, `cover`, `desc`
   - `featured: true` only for the one book you want full-width on homepage (currently "Think and Grow Rich")
   - `live: true` (or `false` for "Coming Soon")
   - `lessons[]` — exactly 10 lessons, `order_num` 1–10
     - Lessons 1–2: no `price_rs` needed (auto free)
     - Lessons 3–10: `price_rs: 1`
3. Run:
   ```bash
   export SUPABASE_URL="https://YOUR_PROJECT.supabase.co"
   export SUPABASE_SERVICE_ROLE_KEY="sb_secret_xxxxx"   # service_role key, NOT publishable
   node migrate.js
   ```
4. The script `upsert`s on `slug` (books) and `book_id + order_num` (lessons) — re-running is always safe, never creates duplicates.

**No schema changes needed for new books.** This is fully seamless.

## 7. Key Gotchas / Lessons Learned

- **Use the `service_role` (secret) key for `migrate.js`**, never the `anon`/`publishable` key — the publishable key is subject to RLS and will fail with "permission denied."
- **New Supabase projects with `sb_secret_...` key format** sometimes need explicit grants (`05_fix_service_role_grants.sql`) even though service_role is supposed to bypass RLS by default. If you ever spin up a *new* Supabase project, run this file too.
- Supabase free-tier projects **auto-pause** after ~7 days of inactivity. Just click "Restore" in the dashboard — data is preserved, nothing is lost.
- Supabase region is **Singapore** — fine for an India-based audience (low latency); would matter more if the audience were US/EU-heavy.
- Always run `export` commands and `node migrate.js` / `node test-connection.js` **in the same terminal session** — env vars don't persist across tabs/windows.

## 8. Current Status (as of this writing)

- ✅ Homepage restructured (hybrid: compact hero → lessons grid → stories → books → about → subscribe) — on a feature branch
- ✅ Supabase schema + RLS + paywall function — built and deployed
- ✅ 16 books, 160 lessons migrated into Supabase (real content, not placeholders)
- ✅ `profiles` auto-populated via trigger on signup
- ⏳ **Pending:** Auth UI (login/signup flow on the actual website)
- ⏳ **Pending:** Razorpay integration (₹1 / ₹7 / ₹99 checkout flows + webhook to mark purchases as `paid`)
- ⏳ **Pending:** Rewire `lessons-book.html` to call `get_lessons_for_book()` instead of rendering static `site-data.js` content
- 📋 **Future:** Capacitor mobile app wrapping the website, Play Store + App Store submission

## 9. File Manifest

| File | Purpose |
|---|---|
| `01_schema.sql` | Table definitions |
| `02_rls_policies.sql` | Row-level security |
| `03_paywall_function.sql` | Server-side paywall gate |
| `04_auto_create_profile.sql` | Auth → profiles trigger |
| `05_fix_service_role_grants.sql` | Permission fix for new-style keys |
| `06_grant_books_read.sql` | Public read access to books catalog |
| `07_grant_authenticated_access.sql` | INSERT/SELECT grants for purchases/subscriptions/profiles/lessons |
| `08_book_metadata_functions.sql` | `get_book_by_slug()` + `get_all_live_books()` |
| `source-data.js` | All book/lesson content (16 books × 10 lessons) |
| `migrate.js` | Pushes `source-data.js` into Supabase (safe to re-run) |
| `test-connection.js` | Debug script — verifies Supabase credentials/connection |
| `auth.js` | Email OTP login modal, session management |
| `payments.js` | Razorpay checkout — lesson/book/subscription tiers |
| `index.html` | Homepage (content-first, includes subscription promo) |
| `lessons-book.html` | Per-book lesson page, fully Supabase-driven, paywalled |

## 10. Go-Live Checklist (before merging feature branch → main)

These are the items flagged during development that must be resolved before real visitors hit this with real money:

- [ ] **Server-side payment verification** — currently `payments.js` trusts the Razorpay frontend `handler` callback alone to mark a purchase as `'paid'`. This is fine for testing but is NOT secure for production — a malicious user could fake success without paying. Before going live: build a Supabase Edge Function that creates the Razorpay Order server-side, and a second Edge Function (triggered by Razorpay's webhook) that verifies the payment signature using the Key Secret before writing to `purchases`/`subscriptions`. See the `PRODUCTION NOTE` comment block at the bottom of `payments.js` for the exact flow.
- [ ] **Razorpay KYC** — switch from Test Mode to Live Mode requires PAN + bank details (personal PAN is fine for sole proprietorship). Test Mode API keys (`rzp_test_...`) must be swapped for Live keys (`rzp_live_...`) in `payments.js` once this is done.
- [ ] **Brevo domain verification** — finish SPF/DKIM DNS records for `booksnmuchmore.com` so OTP emails send from `noreply@booksnmuchmore.com` reliably (currently may be using a temporary verified sender address).
- [ ] **"✓ Subscribed" badge** — nav currently shows only Login/Logout; a visual indicator for active subscribers is a planned follow-up, not yet built.
- [ ] **`titleHtml` styling gap** — original `lessons-book.html` supported italic sub-styling in the H1 (e.g. "Atomic *Habits*"). The Supabase `books` table only stores plain `title` for now; cosmetic only, not blocking.
- [ ] **Retire `lessons-data.js`** — no longer loaded by the rewired `lessons-book.html`, but confirm no other page still depends on it before deleting it from the repo.
- [ ] **Confirm `affiliate-links.js` is present** — `lessons-book.html` still depends on this file (unrelated to the Supabase work); make sure it's deployed alongside.

