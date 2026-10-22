const CACHE_NAME = "mpsc-free-mock-v12";
// Hashed build files get their own capped cache: each deploy adds new names, so drop the oldest
// entries instead of letting old builds fill the phone's storage.
const STATIC_CACHE = "mpsc-free-mock-static";
const STATIC_LIMIT = 150;

async function trimCache(cache, limit) {
  const keys = await cache.keys();
  await Promise.all(keys.slice(0, Math.max(0, keys.length - limit)).map((key) => cache.delete(key)));
}

const urlsToCache = [
  "/",
  "/mock-test",
  "/mizo",
  "/college-notes",
  "/neet",
  "/jee",
  "/cuet-pg",
  "/downloads",
  "/exam-simulator",
  "/manifest.webmanifest",
  "/mizoram-study.webp",
  "/icon-192.png",
  "/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith("mpsc-free-mock-") && cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE)
          .map((cacheName) => caches.delete(cacheName)),
      ),
    ).then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) {
    return;
  }

  if (new URL(request.url).pathname.startsWith("/api/")) {
    return;
  }

  const url = new URL(request.url);
  // Build assets under /_next/static/ have content-hashed names and never change, so serve them
  // from the cache first: repeat visits start faster and work offline.
  if (url.pathname.startsWith("/_next/static/") && !url.search) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).then(async (response) => {
        if (response.ok && response.type === "basic") {
          const cache = await caches.open(STATIC_CACHE);
          await cache.put(request, response.clone()).catch(() => {});
          event.waitUntil(trimCache(cache, STATIC_LIMIT));
        }
        return response;
      })),
    );
    return;
  }
  // Cache public page navigations and static assets, not API or RSC payloads.
  // Navigations with a query string (e.g. /exam-simulator?exam=jee) are served
  // network-first too, and fall back to the cached page for the same path offline.
  const navigation = request.mode === "navigate";
  const cacheable = (navigation || !url.search) && (navigation || url.pathname.startsWith("/downloads/") || url.pathname.startsWith("/question-bank/") || urlsToCache.includes(url.pathname));
  if (!cacheable || request.headers.get("RSC") === "1") return;
  event.respondWith(
    fetch(request).then(async (response) => {
      if (response.ok && response.type === "basic" && !url.search) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone()).catch(() => {});
      }
      return response;
    }).catch(async () => {
      const cached = await caches.match(request, { ignoreSearch: navigation });
      if (cached) return cached;
      if (request.mode === "navigate" && !url.pathname.startsWith("/downloads/")) {
        const home = await caches.match("/");
        if (home) return home;
      }
      return Response.error();
    }),
  );
});
