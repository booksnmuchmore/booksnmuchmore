# Social preview (Open Graph) upgrade — file bundle

I don't have push access to the repo, so drop these files in at the
matching paths and commit. Everything is additive/mechanical — no
existing feature was touched.

## New files
- `assets/og-frame.png` — the branding overlay (footer strip + logo
  badge) composited onto every generated cover image.
- `generate-og-pages.js` — build script, generates `/books/<slug>.html`
  for every live book. Same zero-dependency style as `build-sitemap.js`.
- `.github/workflows/generate-og-pages.yml` — runs the script daily +
  on manual trigger, commits the output.
- `supabase-functions/generate-og-image/index.ts` — reference copy of
  the Edge Function. **Already deployed live** — this file is just for
  your repo's records; no action needed unless you want to edit/redeploy it.

## Changed files (only the lesson-link URLs, nothing else)
- `books.html`, `index.html`, `lessons.html`, `lessons-book.html`,
  `my-library.html`, `rdpd-india-perspective.html` — every internal
  link that pointed to `lessons-book.html?book=<slug>` now points to
  `books/<slug>.html` instead. The actual app at `lessons-book.html`
  is unchanged; the new pages just redirect straight into it.

## One-time setup after merging
1. **GitHub secret**: add repo secret `SUPABASE_ANON_KEY` =
   `sb_publishable_P6kjf7686KpEmyJLuEtbXw_QV2kRJll` (same public key
   already shipped in `auth.js`, safe to reuse).
2. **Generate the pages once manually** (don't want to wait for the
   nightly cron the first time):
   ```
   SUPABASE_ANON_KEY=sb_publishable_P6kjf7686KpEmyJLuEtbXw_QV2kRJll node generate-og-pages.js
   git add books/ && git commit -m "Generate initial OG landing pages" && git push
   ```
   Or just trigger the "Generate OG landing pages" workflow manually
   from the Actions tab — same effect.

## Already done on the Supabase side (no action needed)
- Storage bucket `og-images` (public) created, for caching generated images.
- `generate-og-image` Edge Function deployed and live at:
  `https://dcewvfkszrpknxdwyual.supabase.co/functions/v1/generate-og-image?slug=<book-slug>`

## Validating
Once `books/*.html` is live and `assets/og-frame.png` is deployed
(the Edge Function fetches it from `https://booksnmuchmore.com/assets/og-frame.png`,
so it needs to be live for images to render correctly):

- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
  → paste `https://booksnmuchmore.com/books/atomic-habits.html`, click "Scrape Again"
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
- X Card Validator: https://cards-dev.twitter.com/validator (may need re-auth per X's current rules)
- WhatsApp: just paste the `/books/<slug>.html` link into a chat — no debugger needed,
  but WhatsApp caches aggressively, so test with a slug you haven't shared before

If a card looks stale, it's almost always the platform's own cache — the
debugger tools above force a re-scrape.
