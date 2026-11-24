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
