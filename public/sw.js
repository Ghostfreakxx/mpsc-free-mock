const CACHE_NAME = "mpsc-free-mock-v8";

const urlsToCache = [
  "/",
  "/mock-test",
  "/college-notes",
  "/neet",
  "/jee",
  "/cuet-pg",
  "/downloads",
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
          .filter((cacheName) => cacheName.startsWith("mpsc-free-mock-") && cacheName !== CACHE_NAME)
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
  // Cache public page navigations and static assets, not API or RSC payloads.
  const cacheable = !url.search && (request.mode === "navigate" || url.pathname.startsWith("/_next/static/") || url.pathname.startsWith("/downloads/") || urlsToCache.includes(url.pathname));
  if (!cacheable || request.headers.get("RSC") === "1") return;
  event.respondWith(
    fetch(request).then(async (response) => {
      if (response.ok && response.type === "basic") {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone()).catch(() => {});
      }
      return response;
    }).catch(async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      if (request.mode === "navigate" && !url.pathname.startsWith("/downloads/")) {
        const home = await caches.match("/");
        if (home) return home;
      }
      return Response.error();
    }),
  );
});
