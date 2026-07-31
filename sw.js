// Books 'n' Much More — Service Worker
// Strategy: runtime caching (no big precache list to maintain by hand).
// - HTML pages: network-first, falls back to cache, falls back to offline.html
// - Static assets (css/js/images/fonts): stale-while-revalidate
// - Supabase API calls: network-only (never cache live data/auth)

const CACHE_VERSION = "bnmm-v3";
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const PAGES_CACHE = `${CACHE_VERSION}-pages`;
const OFFLINE_URL = "/offline.html";

const PRECACHE_URLS = [
  "/",
  "/offline.html",
  "/manifest.json"
];

// Don't let the SW touch Supabase, Razorpay, or analytics traffic
const NETWORK_ONLY_HOSTS = [
  "supabase.co",
  "razorpay.com",
  "google-analytics.com",
  "googletagmanager.com"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(PAGES_CACHE).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("bnmm-") && !key.startsWith(CACHE_VERSION))
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

function isNetworkOnly(url) {
  return NETWORK_ONLY_HOSTS.some((host) => url.hostname.includes(host));
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (isNetworkOnly(url)) return; // let it pass straight through, no SW handling

  // HTML navigations: network-first
  if (request.mode === "navigate" || request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(PAGES_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached || caches.match(OFFLINE_URL);
        })
    );
    return;
  }

  // Static assets (css, js, images, fonts): stale-while-revalidate
  if (["style", "script", "image", "font"].includes(request.destination)) {
    event.respondWith(
      caches.open(STATIC_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        const networkFetch = fetch(request)
          .then((response) => {
            if (response.ok) cache.put(request, response.clone());
            return response;
          })
          .catch(() => cached);
        return cached || networkFetch;
      })
    );
    return;
  }
});

// --- Push notifications (wired to a future Supabase Edge Function sender) ---
self.addEventListener("push", (event) => {
  if (!event.data) return;
  let payload;
  try {
    payload = event.data.json();
  } catch {
    payload = { title: "Books 'n' Much More", body: event.data.text() };
  }

  const options = {
    body: payload.body || "New lesson available",
    icon: "/assets/icons/icon-192.png",
    badge: "/assets/icons/icon-192.png",
    data: { url: payload.url || "/" },
    vibrate: [100, 50, 100]
  };

  event.waitUntil(
    self.registration.showNotification(payload.title || "Books 'n' Much More", options)
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || "/";
  event.waitUntil(
    self.clients.matchAll({ type: "window" }).then((clients) => {
      const existing = clients.find((c) => c.url === targetUrl);
      if (existing) return existing.focus();
      return self.clients.openWindow(targetUrl);
    })
  );
});
