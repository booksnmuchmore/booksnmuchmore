// supabase/functions/generate-og-image/index.ts
//
// GET /functions/v1/generate-og-image?slug=<book-slug>
//
// Generates a 1200x630 Open Graph / Twitter card image for a book:
//   - Brand gradient background (matches site hero: #3D2010 -> #7A4A1A)
//   - The book's full cover, letterboxed (never cropped)
//   - A small "Books 'n' Much More" logo badge, bottom-right (~9% width)
//   - A subtle "booksnmuchmore.com" footer strip
//
// Results are cached in the public `og-images` storage bucket, keyed by
// slug + a short hash of cover_url, so a cover change auto-busts the
// cache and repeat requests are served straight from Storage/CDN.
//
// Falls back to https://booksnmuchmore.com/og-default.jpg if the book
// isn't found or has no cover.

import { createClient } from "jsr:@supabase/supabase-js@2";
import { Image } from "https://deno.land/x/imagescript@1.3.0/mod.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const FALLBACK_IMAGE = "https://booksnmuchmore.com/og-default.jpg";
const FRAME_URL = "https://booksnmuchmore.com/assets/og-frame.png";
const BUCKET = "og-images";

const W = 1200;
const H = 630;
const DARK = [61, 32, 16] as const; // #3D2010
const SIENNA = [122, 74, 26] as const; // #7A4A1A

// cached across warm invocations of this isolate
let framePngBytes: Uint8Array | null = null;

async function getFrame(): Promise<Uint8Array> {
  if (framePngBytes) return framePngBytes;
  const res = await fetch(FRAME_URL);
  if (!res.ok) throw new Error(`failed to fetch frame overlay: ${res.status}`);
  framePngBytes = new Uint8Array(await res.arrayBuffer());
  return framePngBytes;
}

async function shortHash(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .slice(0, 6)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function redirect(url: string): Response {
  return new Response(null, {
    status: 302,
    headers: { Location: url, "Cache-Control": "public, max-age=3600" },
  });
}

Deno.serve(async (req) => {
  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get("slug");
    if (!slug) return redirect(FALLBACK_IMAGE);

    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    const { data: book, error } = await supabase
      .from("books")
      .select("slug, title, cover_url")
      .eq("slug", slug)
      .eq("live", true)
      .maybeSingle();

    if (error || !book || !book.cover_url) {
      return redirect(FALLBACK_IMAGE);
    }

    const hash = await shortHash(book.cover_url);
    const objectName = `${book.slug}-${hash}.jpg`;

    // ── Cache hit: serve straight from storage ──
    const { data: existing } = await supabase.storage
      .from(BUCKET)
      .list("", { search: objectName });
    if (existing && existing.length > 0) {
      const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(objectName);
      return redirect(pub.publicUrl);
    }

    // ── Cache miss: generate ──
    const coverRes = await fetch(book.cover_url);
    if (!coverRes.ok) return redirect(FALLBACK_IMAGE);
    const coverBytes = new Uint8Array(await coverRes.arrayBuffer());

    const [cover, frame] = await Promise.all([
      Image.decode(coverBytes),
      Image.decode(await getFrame()),
    ]);

    // brand gradient background, matches site hero gradient
    const bg = new Image(W, H);
    bg.fill((_x: number, y: number) => {
      const t = y / H;
      const r = Math.round(DARK[0] + (SIENNA[0] - DARK[0]) * t);
      const g = Math.round(DARK[1] + (SIENNA[1] - DARK[1]) * t);
      const b = Math.round(DARK[2] + (SIENNA[2] - DARK[2]) * t);
      return Image.rgbaToColor(r, g, b, 255);
    });

    // fit cover fully inside a safe box, no cropping (contain, not cover)
    const maxW = 760;
    const maxH = 560;
    const scale = Math.min(maxW / cover.width, maxH / cover.height, 1);
    const targetW = Math.round(cover.width * scale);
    const targetH = Math.round(cover.height * scale);
    const coverResized = cover.resize(targetW, targetH);

    const cx = Math.round((W - targetW) / 2);
    const cy = Math.round((H - targetH) / 2) - 8;

    // soft shadow behind the cover for depth
    const shadow = new Image(W, H);
    shadow.fill(0x00000000);
    shadow.drawBox(cx - 10, cy - 10, targetW + 20, targetH + 20, Image.rgbaToColor(0, 0, 0, 90));
    bg.composite(shadow, 0, 0);

    bg.composite(coverResized, cx, cy);
    bg.composite(frame, 0, 0); // branding: footer strip + logo badge

    const jpegBytes = await bg.encodeJPEG(90);

    // best-effort cache write; don't fail the request if this errors
    supabase.storage
      .from(BUCKET)
      .upload(objectName, jpegBytes, { contentType: "image/jpeg", upsert: true })
      .catch((e) => console.error("cache upload failed:", e));

    return new Response(jpegBytes, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (e) {
    console.error("generate-og-image error:", e);
    return redirect(FALLBACK_IMAGE);
  }
});
