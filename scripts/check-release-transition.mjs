import assert from "node:assert/strict";
import { createServer, request } from "node:http";
import { chromium } from "playwright";

function localBuild(value) {
  const url = new URL(value);
  assert.equal(url.hostname, "127.0.0.1");
  assert.equal(url.protocol, "http:");
  assert.equal(url.href, `${url.origin}/`);
  assert.ok(url.port);
  return url;
}

const main = localBuild(process.env.RELEASE_MAIN_URL);
const candidate = localBuild(process.env.RELEASE_CANDIDATE_URL);
const recovery = localBuild(process.env.RELEASE_RECOVERY_URL);
assert.equal(new Set([main.port, candidate.port, recovery.port]).size, 3);
const chapter = "/jee/offline-packs/gravity-chapter-1-v1";
const individual = "/jee/classes/units";
const standardLesson = "/jee/classes/measurements";
const clip = "/lectures/gravity/chapter-01.mp3";
const protectedFiles = new Set([chapter, chapter + "/captions", clip, "/lectures/units/english-marin-v3.vtt"]);
let blockedFetches = 0;
let forbidDownload = false;
let upstream = main;
const proxy = createServer((incoming, outgoing) => {
  const path = new URL(incoming.url, "http://127.0.0.1").pathname;
  if (forbidDownload && protectedFiles.has(path)) {
    blockedFetches++;
    outgoing.writeHead(503, { "Cache-Control": "no-store" }).end();
    return;
  }
  if (/^\/jee\/offline-packs\/rollback-fixture-[a-z-]+-v1$/.test(path)) {
    const headers = { "Content-Type": "text/html" };
    if (path.endsWith("-private-v1")) headers["Cache-Control"] = "private, no-store";
    if (path.endsWith("-vary-v1")) headers.Vary = "Authorization";
    const missing = path.endsWith("-missing-track-v1") ? '<track src="/lectures/fixture/missing.vtt">' : "";
    outgoing.writeHead(200, headers).end(`<video src="${clip}"><track src="/lectures/units/english-marin-v3.vtt">${missing}</video>`);
    return;
  }
  const forward = request({
    hostname: upstream.hostname,
    port: upstream.port,
    path: incoming.url,
    method: incoming.method,
    headers: incoming.headers,
  }, response => {
    outgoing.writeHead(response.statusCode, response.headers);
    response.pipe(outgoing);
  });
  forward.on("error", () => outgoing.writeHead(502).end());
  incoming.pipe(forward);
});

const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL });
try {
  await new Promise(resolve => proxy.listen(0, "127.0.0.1", resolve));
  const origin = `http://127.0.0.1:${proxy.address().port}`;
  const context = await browser.newContext({ viewport: { width: 360, height: 800 }, reducedMotion: "reduce" });
  const page = await context.newPage();
  const exam = "/exam-simulator?exam=mpsc";
  const pack = "mpsc-free-mock-lesson-v1-pack-gravity-chapter-1-v1";
  const lesson = "mpsc-free-mock-lesson-v1-" + encodeURIComponent(individual) + "-captions-v3";
  const standardSave = "mpsc-free-mock-lesson-v1-" + encodeURIComponent(standardLesson);
  const savedNames = [pack, lesson, standardSave];
  const ready = "/lectures/__offline_ready__";
  const media = clip;
  const hasSaved = name => page.evaluate(async ({ name, ready }) => Boolean(await caches.match(ready, { cacheName: name })), { name, ready });
  const status = () => page.evaluate(async () => ({
    controller: Boolean(navigator.serviceWorker.controller),
    caches: await caches.keys(),
  }));
  const storage = () => page.evaluate(() => ({
    practice: localStorage.getItem("mpsc.practice.responses.v1"),
    attempt: JSON.parse(localStorage.getItem("exam-simulator:attempt:v1")),
    history: localStorage.getItem("exam-simulator:history:v1"),
  }));

  async function switchBuild(build, expected, evicted) {
    await page.goto(origin + "/robots.txt");
    upstream = build;
    await page.evaluate(async () => {
      const registration = await navigator.serviceWorker.ready;
      const changed = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error("Replacement worker did not claim the client")), 20_000);
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          clearTimeout(timeout);
          resolve();
        }, { once: true });
      });
      await Promise.all([registration.update(), changed]);
    });
    await page.waitForFunction(async ({ expected, evicted }) => {
      const names = await caches.keys();
      const worker = navigator.serviceWorker.controller;
      return worker?.state === "activated" && names.includes(expected) && !names.includes(evicted);
    }, { expected, evicted });
    const worker = await status();
    assert.equal(worker.controller, true);
    assert.ok(worker.caches.includes(expected));
  }

  await page.goto(origin + "/mock-test");
  await page.waitForFunction(() => Boolean(navigator.serviceWorker.controller));
  assert.ok((await status()).caches.includes("mpsc-free-mock-v13"));
  await page.reload();
  await page.locator(".practice-option").first().click();
  await page.locator(".practice-result").waitFor();
  await page.goto(origin + exam);
  const start = page.getByRole("button", { name: /Start 25-question MPSC/ });
  await start.press("Enter");
  await page.getByRole("button", { name: "Submit", exact: true }).press("Enter");
  await page.getByRole("button", { name: "Submit exam", exact: true }).press("Enter");
  await page.getByRole("heading", { name: /You scored .* out of 25/ }).waitFor();
  // Create a second paper through the old UI so its persisted schema comes from main.
  await page.evaluate(() => localStorage.removeItem("exam-simulator:attempt:v1"));
  await page.reload();
  await start.press("Enter");
  const answers = page.getByRole("group", { name: "Answer options" });
  await answers.getByRole("button").first().press("Enter");
  await page.getByRole("button", { name: /Mark for review/ }).press("Enter");
  const second = page.getByRole("region", { name: "Question 2", exact: true });
  await second.waitFor();
  const original = await storage();
  assert.ok(Object.keys(JSON.parse(original.practice)).length);
  assert.equal(JSON.parse(original.history)[0].examId, "mpsc");
  assert.equal(original.attempt.current, 1);
  assert.equal(original.attempt.submittedAt, undefined);

  // Main predates the pack UI. Seed its profile from the candidate's actual public pack files
  // while the v13 worker still controls it. This models a browser that already has a saved pack.
  upstream = candidate;
  await page.evaluate(async ({ pack, paths, ready }) => {
    const cache = await caches.open(pack);
    for (const path of paths) await cache.add(new Request(path, { credentials: "omit", cache: "no-store" }));
    await cache.put(ready, new Response("saved"));
  }, { pack, paths: [chapter, `${chapter}/captions`, media], ready });
  upstream = main;
  assert.ok(await hasSaved(pack));

  async function assertRestored() {
    await page.goto(origin + exam);
    await second.waitFor();
    await page.getByRole("timer").waitFor();
    const restored = await storage();
    assert.equal(restored.practice, original.practice);
    assert.equal(restored.history, original.history);
    assert.equal(restored.attempt.startedAt, original.attempt.startedAt);
    assert.equal(restored.attempt.deadline, original.attempt.deadline);
    assert.deepEqual(restored.attempt.questionIds, original.attempt.questionIds);
    assert.deepEqual(restored.attempt.responses, original.attempt.responses);
  }

  async function assertPlayback(path, selector) {
    const response = await page.goto(origin + path);
    assert.equal(response.status(), 200);
    if (path === chapter) assert.match(response.headers()["content-security-policy"], /default-src 'none'/);
    const player = page.locator(selector);
    await player.waitFor();
    await player.evaluate(element => { element.muted = true; element.load(); });
    await page.waitForFunction(selector => document.querySelector(selector)?.readyState >= 1, selector);
    await player.evaluate(async element => {
      element.textTracks[0].mode = "hidden";
      await element.play();
    });
    await page.waitForFunction(selector => document.querySelector(selector)?.currentTime > 0.1, selector);
    await page.waitForFunction(selector => document.querySelector(selector)?.textTracks[0]?.cues?.length > 0, selector);
    const nearEnd = await player.evaluate(element => {
      if (!Number.isFinite(element.duration) || element.duration < 30) throw new Error("Incomplete recording");
      element.currentTime = element.duration - 2;
      return element.duration - 2;
    });
    await page.waitForFunction(({ selector, nearEnd }) => {
      const player = document.querySelector(selector);
      return !player?.seeking && player?.currentTime >= nearEnd;
    }, { selector, nearEnd });
    await player.evaluate(element => element.pause());
  }

  const mediaDigests = () => page.evaluate(async names => {
    const result = {};
    for (const name of names) {
      const cache = await caches.open(name);
      for (const request of await cache.keys()) {
        if (!/\.mp3$|\.vtt$|\/captions$/.test(request.url)) continue;
        const response = await cache.match(request);
        const bytes = await response.arrayBuffer();
        const hash = await crypto.subtle.digest("SHA-256", bytes);
        result[request.url] = [bytes.byteLength, Array.from(new Uint8Array(hash))];
      }
    }
    return result;
  }, savedNames);

  await switchBuild(candidate, "mpsc-free-mock-v14", "mpsc-free-mock-v13");
  await assertRestored();
  assert.ok(await hasSaved(pack));
  await context.setOffline(true);
  await assertRestored();
  const replay = await page.evaluate(async ({ chapter, media }) => {
    const captions = await fetch(`${chapter}/captions`);
    const clip = await fetch(media, { headers: { Range: "bytes=0-15" } });
    return [await captions.text(), clip.status, (await clip.arrayBuffer()).byteLength];
  }, { chapter, media });
  assert.match(replay[0], /^WEBVTT/);
  assert.deepEqual(replay.slice(1), [206, 16]);
  await assertPlayback(chapter, "video");
  await context.setOffline(false);

  const downloadArea = page.getByRole("region", { name: "Offline lesson download" });
  for (const [route, name] of [[individual, lesson], [standardLesson, standardSave]]) {
    await page.goto(origin + route);
    await downloadArea.getByRole("button", { name: "Save lesson for offline use" }).click();
    await downloadArea.getByRole("status").getByText("Lesson saved on this device.").waitFor();
    assert.ok(await hasSaved(name));
  }
  const savedBytes = await mediaDigests();
  assert.equal(Object.keys(savedBytes).length, 6);
  for (const url of Object.keys(savedBytes)) protectedFiles.add(new URL(url).pathname);

  const discard = await page.evaluate(async ({ chapter, media, ready }) => {
    const prefix = "mpsc-free-mock-lesson-v1-pack-rollback-fixture-";
    const captionsPath = "/lectures/units/english-marin-v3.vtt";
    const [audio, captions, chapterPage] = await Promise.all([media, captionsPath, chapter].map(path => fetch(path)));
    const names = [];
    for (const reason of ["missing-marker", "bad-marker", "missing-audio", "missing-track", "private", "vary", "auth", "foreign", "api"]) {
      const id = "rollback-fixture-" + reason + "-v1";
      const name = prefix + reason + "-v1";
      names.push(name);
      const cache = await caches.open(name);
      const packPath = "/jee/offline-packs/" + id;
      const headers = reason === "auth" ? { Authorization: "Basic local-test-fixture" } : {};
      const request = new Request(packPath, { headers });
      await cache.put(request, await fetch(request));
      if (reason !== "missing-audio") await cache.put(media, audio.clone());
      await cache.put(captionsPath, captions.clone());
      if (reason !== "missing-marker") await cache.put(ready, new Response(reason === "bad-marker" ? "incomplete" : "saved"));
      if (reason === "foreign") await cache.put("https://example.invalid/lectures/foreign.mp3", audio.clone());
      if (reason === "api") await cache.put("/api/admin/teacher-usage", chapterPage.clone());
    }
    const obsolete = "mpsc-free-mock-v1";
    await (await caches.open(obsolete)).put("/old", new Response("obsolete"));
    await (await caches.open("mpsc-free-mock-static")).put("/api/admin/teacher-usage", chapterPage.clone());
    return [...names, obsolete];
  }, { chapter, media, ready });

  forbidDownload = true;
  for (const [build, expected, old] of [
    [recovery, "mpsc-free-mock-v14-recovery", "mpsc-free-mock-v14"],
    [candidate, "mpsc-free-mock-v14", "mpsc-free-mock-v14-recovery"],
  ]) {
    await switchBuild(build, expected, old);
    await assertRestored();
    await page.waitForFunction(async obsolete => !(await caches.keys()).some(name => obsolete.includes(name)), [...discard, old]);
    assert.equal(await page.evaluate(async () => Boolean(await caches.match("/api/admin/teacher-usage"))), false);
    for (const name of savedNames) assert.ok(await hasSaved(name), name);
    assert.deepEqual(await mediaDigests(), savedBytes);
    await context.setOffline(true);
    await assertRestored();
    await assertPlayback(chapter, "video");
    await assertPlayback(individual, "audio");
    await assertPlayback(standardLesson, "audio");
    await context.setOffline(false);
  }
  assert.equal(blockedFetches, 0, "A saved media or pack request reached the network during recovery");
  forbidDownload = false;
  console.log("Safe recovery passed: v13 → v14 → recovery → v14. Saved chapter and individual media are byte-identical, with offline playback, seeking and captions; unsafe and obsolete caches were removed.");

  // This is an observed rollback limitation, so protect it as an explicit release gate.
  await switchBuild(main, "mpsc-free-mock-v13", "mpsc-free-mock-v14");
  await assertRestored();
  await page.waitForFunction(async ({ pack, ready }) => !(await caches.match(ready, { cacheName: pack })), { pack, ready });
  for (const name of savedNames) assert.ok(!await hasSaved(name), `v13 unexpectedly retained ${name}`);
  await context.setOffline(true);
  await assertRestored();
  await context.setOffline(false);

  await switchBuild(candidate, "mpsc-free-mock-v14", "mpsc-free-mock-v13");
  await assertRestored();
  assert.ok(!await hasSaved(pack));
  await page.goto(origin + "/jee/offline-learning");
  const packCard = page.getByRole("article").filter({ hasText: /Gravitation · Chapter 1 with narration/ });
  await packCard.getByRole("button", { name: "Save offline pack" }).click();
  await packCard.getByText("Offline pack saved. Open the pack to study.").waitFor();
  await context.setOffline(true);
  await page.goto(origin + chapter);
  await page.getByLabel("Narration with captions").waitFor();
  console.log("Release transition passed: v13 → v14 → v13 → v14. Practice, history and the live deadline survived. v13 removes saved lecture packs; redeploying v14 requires an online re-download.");

  await context.setOffline(false);
  await page.goto(origin + "/neet/classes/written/nephron-neuron-diagrams");
  const recording = page.getByRole("link", { name: "Watch the recorded class" });
  const notes = page.getByRole("button", { name: /Download.*notes/i });
  const figure = page.getByRole("figure");
  const image = figure.getByRole("img", { name: /presynaptic terminal.*postsynaptic membrane/i });
  await image.waitFor();
  assert.ok(await figure.locator("figcaption").innerText());
  await page.getByRole("link", { name: /NEET classes/ }).focus();
  await page.keyboard.press("Tab");
  assert.ok(await recording.evaluate(element => element.matches(":focus-visible")));
  await page.keyboard.press("Tab");
  assert.ok(await notes.evaluate(element => element.matches(":focus-visible")));
  const download = page.waitForEvent("download");
  await page.keyboard.press("Enter");
  await download;

  for (const theme of ["light", "dark"]) {
    const evidence = await figure.locator("figcaption").evaluate((caption, theme) => {
      document.documentElement.dataset.theme = theme;
      const style = getComputedStyle(caption);
      const foreground = style.color;
      let background = "rgb(255, 255, 255)";
      for (let node = caption; node; node = node.parentElement) {
        const color = getComputedStyle(node).backgroundColor;
        if (color.startsWith("rgb(")) {
          background = color;
          break;
        }
      }
      const luminance = color => color.match(/\d+/g).slice(0, 3).map(Number).map(value => {
        const channel = value / 255;
        return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
      }).reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
      const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
      const text = document.querySelector("main section p");
      const size = parseFloat(getComputedStyle(text).fontSize);
      text.style.fontSize = `${size * 2}px`;
      const fits = document.documentElement.scrollWidth <= innerWidth;
      text.style.removeProperty("font-size");
      return { contrast: (values[0] + 0.05) / (values[1] + 0.05), fits, reduced: matchMedia("(prefers-reduced-motion: reduce)").matches };
    }, theme);
    assert.ok(evidence.contrast >= 4.5, `${theme} caption contrast: ${evidence.contrast}`);
    assert.ok(evidence.fits && evidence.reduced);
    console.log(`${theme} caption contrast ${evidence.contrast.toFixed(2)}:1. 360px layout fit with doubled lesson text.`);
  }

  const chat = await page.evaluate(async () => {
    const reply = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [{ role: "user", content: "What is democracy?" }] }),
    });
    return [reply.status, reply.headers.get("Cache-Control"), (await reply.json()).mode];
  });
  assert.deepEqual(chat, [200, "no-store", "offline"]);
  const adminPath = "/api/admin/teacher-usage";
  const admin = await page.goto(origin + adminPath);
  assert.equal(admin.status(), 404);
  assert.match(admin.headers()["cache-control"], /private, no-store/);
  assert.match(admin.headers()["content-security-policy"], /default-src 'none'/);
  assert.ok(admin.headers().vary.toLowerCase().split(/,\s*/).includes("authorization"));
  assert.deepEqual(await page.evaluate(async adminPath => [
    Boolean(await caches.match("/question-bank/mpsc")),
    Boolean(await caches.match(adminPath)),
  ], adminPath), [true, false]);
  console.log("Credential-free chat returned offline/no-store. The dashboard was unavailable, private and absent from Cache Storage; the public MPSC bank remained cached.");
} finally {
  await browser.close();
  proxy.close();
}
