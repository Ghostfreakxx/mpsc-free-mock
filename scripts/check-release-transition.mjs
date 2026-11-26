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
assert.notEqual(main.port, candidate.port);
let upstream = main;
const proxy = createServer((incoming, outgoing) => {
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
  const chapter = "/jee/offline-packs/gravity-chapter-1-v1";
  const pack = "mpsc-free-mock-lesson-v1-pack-gravity-chapter-1-v1";
  const ready = "/lectures/__offline_ready__";
  const media = "/lectures/gravity/chapter-01.mp3";
  const hasPack = () => page.evaluate(async ({ pack, ready }) => Boolean(await caches.match(ready, { cacheName: pack })), { pack, ready });
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
  assert.ok(await hasPack());

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

  await switchBuild(candidate, "mpsc-free-mock-v14", "mpsc-free-mock-v13");
  await assertRestored();
  assert.ok(await hasPack());
  await context.setOffline(true);
  await assertRestored();
  const replay = await page.evaluate(async ({ chapter, media }) => {
    const captions = await fetch(`${chapter}/captions`);
    const clip = await fetch(media, { headers: { Range: "bytes=0-15" } });
    return [await captions.text(), clip.status, (await clip.arrayBuffer()).byteLength];
  }, { chapter, media });
  assert.match(replay[0], /^WEBVTT/);
  assert.deepEqual(replay.slice(1), [206, 16]);
  const response = await page.goto(origin + chapter);
  assert.match(response.headers()["content-security-policy"], /default-src 'none'/);
  await page.getByLabel("Narration with captions").waitFor();
  await context.setOffline(false);

  // This is an observed rollback limitation, so protect it as an explicit release gate.
  await switchBuild(main, "mpsc-free-mock-v13", "mpsc-free-mock-v14");
  await assertRestored();
  await page.waitForFunction(async ({ pack, ready }) => !(await caches.match(ready, { cacheName: pack })), { pack, ready });
  assert.ok(!await hasPack(), "v13 is expected to retire the candidate pack contents");
  await context.setOffline(true);
  await assertRestored();
  await context.setOffline(false);

  await switchBuild(candidate, "mpsc-free-mock-v14", "mpsc-free-mock-v13");
  await assertRestored();
  assert.ok(!await hasPack());
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
