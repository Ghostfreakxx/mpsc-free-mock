const CACHE_NAME = "mpsc-free-mock-v14";
// Hashed build files get their own capped cache: each deploy adds new names, so drop the oldest
// entries instead of letting old builds fill the phone's storage.
const STATIC_CACHE = "mpsc-free-mock-static";
const STATIC_LIMIT = 150;
const LESSON_PREFIX = "mpsc-free-mock-lesson-v1-";
const LESSON_READY = "/lectures/__offline_ready__";

const publicNavigation = /^\/(?:study-room|laboratory|neet|jee|law|trading|nursing|terms)(?:\/|$)/;
const cacheableResponse = response => response.status === 200 && response.type === "basic" &&
  !response.redirected && !/(?:^|,)\s*(?:private|no-store)\b/i.test(response.headers.get("Cache-Control") ?? "");

async function savedLessonFile(request, ignoreSearch = false) {
  const names = (await caches.keys()).filter(name => name.startsWith(LESSON_PREFIX));
  for (const name of names) {
    const cache = await caches.open(name);
    const file = await cache.match(request, { ignoreSearch });
    if (file && cacheableResponse(file) && await cache.match(LESSON_READY)) return file;
  }
}

async function mediaRange(request, response) {
  const range = request.headers.get("range");
  if (!range) return response;
  const match = /^bytes=(\d*)-(\d*)$/.exec(range);
  const data = await response.blob();
  const size = data.size;
  const start = match?.[1] ? Number(match[1]) : Math.max(0, size - Number(match?.[2]));
  const end = match?.[1] && match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
  if (!match || !Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= size) {
    return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
  }
  const headers = new Headers(response.headers);
  headers.delete("Content-Encoding");
  headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
  headers.set("Content-Length", String(end - start + 1));
  headers.set("Accept-Ranges", "bytes");
  return new Response(data.slice(start, end + 1), { status: 206, headers });
}

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
    caches.open(CACHE_NAME).then(async cache => {
      await Promise.allSettled(urlsToCache.map(async url => {
        const response = await fetch(url, { credentials: "omit", redirect: "error" });
        if (cacheableResponse(response)) await cache.put(url, response);
      }));
      await self.skipWaiting();
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith("mpsc-free-mock-") && cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE && !cacheName.startsWith(LESSON_PREFIX))
          .map((cacheName) => caches.delete(cacheName)),
      ),
    ).then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || request.headers.has("Authorization") || request.cache === "no-store" || new URL(request.url).origin !== self.location.origin) {
    return;
  }

  if (new URL(request.url).pathname.startsWith("/api/")) {
    return;
  }

  const url = new URL(request.url);
  const packPage = /^\/jee\/offline-packs\/[a-z0-9-]+$/.test(url.pathname);
  if (packPage) {
    if (request.mode === "navigate" && !url.search && request.headers.get("RSC") !== "1") {
      event.respondWith(fetch(request).catch(async () => (await savedLessonFile(request)) ?? Response.error()));
    }
    return;
  }
  const packCaptions = /^\/jee\/offline-packs\/[a-z0-9-]+\/captions$/.test(url.pathname);
  if (!url.search && (packCaptions || (url.pathname.startsWith("/lectures/")
    && (["audio", "video", "track"].includes(request.destination) || request.headers.has("range"))))) {
    event.respondWith(savedLessonFile(request).then(response => response ? mediaRange(request, response) : fetch(request)));
    return;
  }
  // Build assets under /_next/static/ have content-hashed names and never change, so serve them
  // from the cache first: repeat visits start faster and work offline.
  if (url.pathname.startsWith("/_next/static/") && !url.search) {
    event.respondWith(
      caches.match(request, { cacheName: STATIC_CACHE }).then((cached) => cached || fetch(request).then(async (response) => {
        if (cacheableResponse(response)) {
          const cache = await caches.open(STATIC_CACHE);
          await cache.put(request, response.clone()).catch(() => {});
          event.waitUntil(trimCache(cache, STATIC_LIMIT));
        }
        return response;
      }).catch(async () => (await savedLessonFile(request)) ?? Response.error())),
    );
    return;
  }
  // Question banks and classroom lessons: show the saved copy straight away and refresh it in the background, so a
  // returning student does not wait on slow mobile data. A new deploy reaches them on the next visit.
  if ((url.pathname.startsWith("/question-bank/") || url.pathname === "/study-room/lesson-data") && !url.search) {
    event.respondWith(caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(request);
      const refresh = fetch(request).then(async (response) => {
        if (cacheableResponse(response)) await cache.put(request, response.clone()).catch(() => {});
        return response;
      });
      if (cached) {
        event.waitUntil(refresh.catch(() => {}));
        return cached;
      }
      return refresh;
    }));
    return;
  }
  // Cache public page navigations and static assets, not API or RSC payloads.
  // Navigations with a query string (e.g. /exam-simulator?exam=jee) are served
  // network-first too, and fall back to the cached page for the same path offline.
  const navigation = request.mode === "navigate";
  if (navigation && !urlsToCache.includes(url.pathname) && !publicNavigation.test(url.pathname)) return;
  const cacheable = (navigation || !url.search) && (navigation || url.pathname.startsWith("/downloads/") || url.pathname === "/study-room-poster.webp" || urlsToCache.includes(url.pathname));
  if (!cacheable || request.headers.get("RSC") === "1") return;
  event.respondWith(
    fetch(request).then(async (response) => {
      if (cacheableResponse(response) && !url.search) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone()).catch(() => {});
      }
      return response;
    }).catch(async () => {
      const saved = navigation && await savedLessonFile(request, true);
      if (saved) return saved;
      const cached = await caches.match(request, { cacheName: CACHE_NAME, ignoreSearch: navigation });
      if (cached) return cached;
      if (request.mode === "navigate" && !url.pathname.startsWith("/downloads/")) {
        const home = await caches.match("/", { cacheName: CACHE_NAME });
        if (home) return home;
      }
      return Response.error();
    }),
  );
});
