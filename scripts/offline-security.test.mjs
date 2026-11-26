import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const source = readFileSync(new URL("../public/sw.js", import.meta.url), "utf8");

test("the worker leaves authenticated, private-route and network-only requests outside its cache", () => {
  const handlers = {};
  runInNewContext(source, { self: {
    location: { origin: "http://localhost" },
    addEventListener(name, callback) { handlers[name] = callback; },
  }, URL });
  const request = { method: "GET", url: "http://localhost/study-room", cache: "default", mode: "navigate", headers: new Headers() };
  for (const candidate of [
    { ...request, headers: new Headers({ Authorization: "Basic fixture" }) },
    { ...request, url: "http://localhost/api/admin/teacher-usage" },
    { ...request, url: "http://localhost/fixture/private" },
    { ...request, cache: "no-store" },
  ]) {
    handlers.fetch({
      request: candidate, respondWith() { assert.fail("Request entered the offline cache path."); },
    });
  }
});

test("only full public same-origin responses are eligible for offline storage", () => {
  const context = { self: { addEventListener() {} } };
  const eligible = runInNewContext(source + "\ncacheableResponse", context);
  const response = { status: 200, type: "basic", redirected: false, headers: new Headers() };
  assert.equal(eligible(response), true);
  assert.equal(eligible({ ...response, status: 206 }), false);
  assert.equal(eligible({ ...response, redirected: true }), false);
  for (const directive of ["private, max-age=0", "public, no-store"]) {
    assert.equal(eligible({ ...response, headers: new Headers({ "Cache-Control": directive }) }), false);
  }
});

test("explicit downloads reject private, incomplete, or misidentified responses before writing", async t => {
  Object.defineProperty(globalThis, "location", { configurable: true, value: { origin: "http://localhost" } });
  t.after(() => { delete globalThis.location; });
  const { cachePublicFile } = await import("../app/jee/classes/offline-file.ts");
  const cache = { put: t.mock.fn(async () => {}) };
  let headers = new Headers({ "Content-Type": "audio/mpeg", "Content-Length": "16" });
  const upstream = t.mock.method(globalThis, "fetch", async (_path, options) => {
    assert.equal(options.credentials, "omit");
    assert.equal(options.redirect, "error");
    return { status: 200, type: "basic", redirected: false, headers };
  });
  const signal = new AbortController().signal;
  await assert.rejects(cachePublicFile(cache, "/api/admin/teacher-usage", "html", signal));
  await assert.rejects(cachePublicFile(cache, "//other.invalid/audio.mp3", "audio", signal));
  assert.equal(upstream.mock.callCount(), 0);
  headers.set("Cache-Control", "private, no-store");
  await assert.rejects(cachePublicFile(cache, "/lectures/fixture.mp3", "audio", signal, 16));
  headers.delete("Cache-Control");
  await assert.rejects(cachePublicFile(cache, "/lectures/fixture.mp3", "audio", signal, 20));
  headers.set("Content-Type", "text/html");
  await assert.rejects(cachePublicFile(cache, "/lectures/fixture.mp3", "audio", signal, 16));
  assert.equal(cache.put.mock.callCount(), 0);
  headers.set("Content-Type", "audio/mpeg");
  await cachePublicFile(cache, "/lectures/fixture.mp3", "audio", signal, 16);
  assert.equal(cache.put.mock.callCount(), 1);
});

test("initial precache fetches public pages without credentials and skips private responses", async () => {
  const handlers = {};
  const stored = [];
  const self = {
    addEventListener(name, callback) { handlers[name] = callback; },
    async skipWaiting() {},
  };
  runInNewContext(source, {
    self,
    caches: { async open() { return { async put(url) { stored.push(url); } }; } },
    async fetch(url, options) {
      assert.equal(options.credentials, "omit");
      assert.equal(options.redirect, "error");
      return { status: 200, type: "basic", redirected: false,
        headers: new Headers({ "Cache-Control": url === "/" ? "private, no-store" : "public" }) };
    },
  });
  let install;
  handlers.install({ waitUntil(promise) { install = promise; } });
  await install;
  assert.ok(stored.includes("/jee"));
  assert.ok(!stored.includes("/"));
});
