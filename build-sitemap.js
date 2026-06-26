#!/usr/bin/env node
// ============================================================
// build-sitemap.js
// Fetches the live sitemap XML from the generate-sitemap Edge
// Function and writes it to sitemap.xml in the repo root, so
// GitHub Pages can serve it as a real static file.
//
// Run this:
//   - right after adding/removing/unpublishing any book
//   - before each deploy, if you want to be extra safe
//
// Usage:
//   node build-sitemap.js
//
// Requires Node 18+ (built-in fetch). No npm install needed.
// ============================================================

const SITEMAP_FUNCTION_URL =
  "https://dcewvfkszrpknxdwyual.supabase.co/functions/v1/generate-sitemap";

const fs = require("fs");
const path = require("path");

async function main() {
  console.log(`Fetching sitemap from ${SITEMAP_FUNCTION_URL} ...`);

  const res = await fetch(SITEMAP_FUNCTION_URL);

  if (!res.ok) {
    console.error(`Failed to fetch sitemap: HTTP ${res.status}`);
    process.exit(1);
  }

  const xml = await res.text();

  if (!xml.includes("<urlset")) {
    console.error("Response doesn't look like valid sitemap XML. Aborting — not overwriting sitemap.xml.");
    console.error("First 200 chars of response:", xml.slice(0, 200));
    process.exit(1);
  }

  const outPath = path.join(__dirname, "sitemap.xml");
  fs.writeFileSync(outPath, xml, "utf8");

  const urlCount = (xml.match(/<url>/g) || []).length;
  console.log(`✅ Wrote ${urlCount} URLs to ${outPath}`);
  console.log("Don't forget to git add/commit/push sitemap.xml.");
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
