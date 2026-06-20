// ============================================================
// migrate-affiliate-links.js
// One-time script: pushes BOOK_LINKS from affiliate-links.js
// into the new `affiliate_links` JSONB column on `books`.
//
// SETUP: same env vars as migrate.js
//   export SUPABASE_URL="https://YOUR_PROJECT.supabase.co"
//   export SUPABASE_SERVICE_ROLE_KEY="sb_secret_xxxxx"
//
// USAGE:
//   node migrate-affiliate-links.js
//
// Place this file in the same folder as your real
// affiliate-links.js (the one currently deployed on your site).
// ============================================================

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Load BOOK_LINKS from your real affiliate-links.js file
// (expects it in the same directory as this script)
const raw = fs.readFileSync('./affiliate-links.js', 'utf8');
const moduleObj = { exports: {} };
const wrapped = raw + '\nmoduleObj.exports = BOOK_LINKS;';
eval(wrapped);
const BOOK_LINKS = moduleObj.exports;

async function migrateLinks() {
  const slugs = Object.keys(BOOK_LINKS);
  console.log(`Found ${slugs.length} books with affiliate links.\n`);

  for (const slug of slugs) {
    const { error } = await supabase
      .from('books')
      .update({ affiliate_links: BOOK_LINKS[slug] })
      .eq('slug', slug);

    if (error) {
      console.error(`✗ ${slug}:`, error.message);
    } else {
      console.log(`✓ ${slug}`);
    }
  }
  console.log('\nDone. Books not found in BOOK_LINKS (e.g. cant-hurt-me) were left untouched —');
  console.log('add their affiliate links separately, see ADD_AFFILIATE_LINK.md');
}

migrateLinks().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
