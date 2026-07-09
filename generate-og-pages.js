#!/usr/bin/env node
// ============================================================
// generate-og-pages.js
// Generates one static, crawlable HTML file per live book at
// /books/<slug>.html. Each file carries real og:*/twitter:* meta
// tags baked in at build time — something GitHub Pages can never
// do at request time, since it can't vary content by query string
// — and redirects real visitors straight into the interactive app
// at lessons-book.html?book=<slug>.
//
// This is the same "static shell for bots, redirect for humans"
// pattern needed because lessons-book.html?book=X can't carry
// per-book meta tags on static hosting (crawlers don't run the JS
// that fills them in today).
//
// Run this:
//   - right after adding/removing/unpublishing any book
//   - it also runs automatically via
//     .github/workflows/generate-og-pages.yml
//
// Usage:
//   SUPABASE_ANON_KEY=... node generate-og-pages.js
//
// Requires Node 18+ (built-in fetch). No npm install needed —
// same convention as build-sitemap.js.
// ============================================================

const fs = require("fs");
const path = require("path");

const SUPABASE_URL = "https://dcewvfkszrpknxdwyual.supabase.co";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SITE = "https://booksnmuchmore.com";
const OUT_DIR = path.join(__dirname, "books");

if (!SUPABASE_ANON_KEY) {
  console.error("Missing SUPABASE_ANON_KEY env var.");
  process.exit(1);
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderPage(book) {
  const title = `${book.title} — Top 10 Lessons | Books 'n' Much More`;
  const desc = `Top 10 life-changing lessons from ${book.title} by ${book.author} — Hindi & English में | Books 'n' Much More`;
  const pageUrl = `${SITE}/books/${book.slug}.html`;
  const appUrl = `${SITE}/lessons-book.html?book=${book.slug}`;
  const ogImage = `${SUPABASE_URL}/functions/v1/generate-og-image?slug=${book.slug}`;

  const t = escapeHtml(title);
  const d = escapeHtml(desc);

  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${t}</title>
  <meta name="description" content="${d}"/>

  <meta property="og:type"        content="book"/>
  <meta property="og:site_name"   content="Books 'n' Much More"/>
  <meta property="og:title"       content="${t}"/>
  <meta property="og:description" content="${d}"/>
  <meta property="og:image"       content="${ogImage}"/>
  <meta property="og:image:width"  content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:url"         content="${pageUrl}"/>
  <link rel="canonical" href="${pageUrl}"/>

  <meta name="twitter:card"        content="summary_large_image"/>
  <meta name="twitter:title"       content="${t}"/>
  <meta name="twitter:description" content="${d}"/>
  <meta name="twitter:image"       content="${ogImage}"/>

  <!-- Send real visitors straight into the app. Crawlers/bots don't
       execute this, so they only ever see the meta tags above. -->
  <meta http-equiv="refresh" content="0; url=${appUrl}"/>
  <script>window.location.replace(${JSON.stringify(appUrl)});</script>

  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet"/>
  <style>
    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:'Lora',Georgia,serif;background:#FDF6EC;color:#3D2010;
         min-height:100vh;display:flex;flex-direction:column;align-items:center;
         justify-content:center;text-align:center;padding:2rem;}
    img{max-width:220px;border-radius:8px;box-shadow:0 8px 24px rgba(61,32,16,.25);margin-bottom:1.5rem;}
    h1{font-family:'Playfair Display',serif;font-size:1.4rem;margin-bottom:.6rem;}
    p{opacity:.75;margin-bottom:1.4rem;}
    a.cta{background:#C07A2A;color:#fff;text-decoration:none;padding:.7rem 1.6rem;
          border-radius:24px;font-size:.95rem;}
    footer{margin-top:2.5rem;font-size:.72rem;opacity:.55;max-width:480px;}
  </style>
</head>
<body>
  <noscript>
    <img src="${escapeHtml(book.cover_url || `${SITE}/og-default.jpg`)}" alt="${t}"/>
    <h1>${t}</h1>
    <p>${d}</p>
    <a class="cta" href="${appUrl}">Read the lessons →</a>
  </noscript>
  <footer>This site contains summaries and personal takeaways. All book titles and content belong to their respective authors and publishers.</footer>
</body>
</html>
`;
}

async function main() {
  console.log("Fetching live books ...");

  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_all_live_books`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  if (!res.ok) {
    console.error(`Failed to fetch books: HTTP ${res.status}`);
    console.error(await res.text());
    process.exit(1);
  }

  const books = await res.json();

  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const book of books) {
    const html = renderPage(book);
    const filePath = path.join(OUT_DIR, `${book.slug}.html`);
    fs.writeFileSync(filePath, html, "utf8");
    console.log("wrote", filePath);
  }

  console.log(`Generated ${books.length} book landing pages in /books/`);
}

main();
