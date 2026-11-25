import assert from "node:assert/strict";
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const base = process.env.TEST_URL || "http://127.0.0.1:3000";
const screenshots = process.env.SCREENSHOT_DIR;
if (screenshots) await mkdir(screenshots, { recursive: true });
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL });
try {
  for (const width of [360, 768, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: "reduce" });
    try {
      await page.goto(base + "/study-room");
      const heading = page.getByRole("heading", { name: "Reviewed classroom lessons" });
      await page.getByLabel("Subject and topic").waitFor();
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      if (screenshots) {
        await heading.scrollIntoViewIfNeeded();
        await page.screenshot({ path: path.join(screenshots, `after-classroom-${width}.png`) });
      }
      await page.evaluate(() => localStorage.setItem("mpsc-theme", "light"));
      await page.reload();
      await page.getByLabel("Subject and topic").waitFor();
      assert.equal(await page.locator("html").getAttribute("data-theme"), "light");
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      await page.goto(base + "/laboratory");
      await page.getByRole("slider", { name: "Launch speed" }).waitFor();
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      if (screenshots) await page.screenshot({ path: path.join(screenshots, `laboratory-${width}.png`) });
      const circuit = page.getByRole("article").filter({ has: page.getByRole("heading", { name: "Resistors in series and parallel" }) });
      await circuit.getByLabel("Connection").selectOption("parallel");
      await circuit.getByText(/Equivalent resistance 3.00 Ω/).waitFor();
      await circuit.getByRole("slider", { name: "Supply voltage" }).press("End");
      await circuit.getByText(/Supply current 8.00 A/).waitFor();
      if (screenshots) await circuit.screenshot({ path: path.join(screenshots, `circuit-${width}.png`) });
      await circuit.getByRole("button", { name: "Reset circuit" }).click();
      await circuit.getByText(/Equivalent resistance 12.00 Ω/).waitFor();
      const atomic = page.getByRole("article").filter({ has: page.getByRole("heading", { name: "Chemistry · Isotopes and ions" }) });
      await atomic.getByRole("slider", { name: "Neutrons" }).press("ArrowRight");
      await atomic.getByText("C-13", { exact: true }).waitFor();
      const peas = page.getByRole("article").filter({ has: page.getByRole("heading", { name: "Biology · Pea-seed inheritance" }) });
      await peas.getByLabel("First pea plant").selectOption("yy");
      await peas.getByText("50% yellow · 50% green.").waitFor();
      const graph = page.getByRole("article").filter({ has: page.getByRole("heading", { name: "Mathematics · Quadratic graphs" }) });
      await graph.getByRole("slider", { name: "Vertical shift k" }).press("ArrowRight");
      await graph.getByText(/Real roots: 0.00/).waitFor();
      if (screenshots && width === 360) {
        for (const [panel, name] of [[atomic, "isotopes"], [peas, "pea-inheritance"], [graph, "quadratic"]]) {
          await panel.screenshot({ path: path.join(screenshots, name + "-360.png") });
        }
      }
      await graph.getByRole("button", { name: "Reset experiment" }).click();
      await graph.getByText(/Real roots: -1.00, 1.00/).waitFor();
      const civic = page.getByRole("article").filter({ has: page.getByRole("heading", { name: "Political Science · Simple-majority votes" }) });
      await civic.getByRole("slider", { name: "Yes votes" }).press("Home");
      await civic.getByText(/The motion does not pass/).waitFor();
      const geography = page.getByRole("article").filter({ has: page.getByRole("heading", { name: "Geography · Distance along a meridian" }) });
      await geography.getByRole("slider", { name: "First latitude" }).press("Home");
      await geography.getByText(/67° apart/).waitFor();
      if (screenshots && width === 360) {
        await civic.screenshot({ path: path.join(screenshots, "majority-360.png") });
        await geography.screenshot({ path: path.join(screenshots, "meridian-360.png") });
      }
    } finally {
      await page.close();
    }
  }

  const context = await browser.newContext({ reducedMotion: "reduce" });
  try {
    const page = await context.newPage();
    let classroomRequests = 0;
    page.on("request", request => {
      if (new URL(request.url()).pathname === "/api/chat") classroomRequests++;
    });
    await page.goto(base + "/study-room");
    await page.waitForFunction(() => navigator.serviceWorker.controller);
    await page.reload();
    const privateResult = await page.evaluate(async () => {
      const response = await fetch("/api/admin/teacher-usage", { headers: { Authorization: "Basic fixture" } });
      return { status: response.status, control: response.headers.get("Cache-Control"), policy: response.headers.get("Content-Security-Policy"),
        cached: Boolean(await caches.match("/api/admin/teacher-usage")) };
    });
    assert.ok([401, 404].includes(privateResult.status));
    assert.match(privateResult.control, /no-store/);
    assert.equal(privateResult.cached, false);
    assert.match(privateResult.policy, /default-src 'none'/);
    await page.getByLabel("Subject and topic").waitFor();
    await page.waitForFunction(async () => {
      const cache = await caches.open("mpsc-free-mock-v14");
      return Boolean(await cache.match("/study-room") && await cache.match("/study-room/lesson-data"));
    });
    await context.setOffline(true);
    await page.reload();
    const room = page.getByRole("region", { name: "Reviewed classroom lessons" });
    await room.getByRole("heading", { name: "Rights and constitutional remedies" }).waitFor();
    await room.getByLabel("Teaching mode").selectOption("revision");
    await room.getByRole("list").waitFor();
    await room.getByLabel("Teaching mode").selectOption("questions");
    await room.getByLabel("Ask Zorami a question").fill("Article 14");
    await room.getByRole("button", { name: "Find a reviewed lesson" }).click();
    await room.getByRole("status").getByText(/Related lesson:/).waitFor();
    await room.getByRole("button", { name: "Try the related quiz" }).click();
    await room.getByRole("radio", { name: "Every person" }).check();
    await room.getByRole("button", { name: "Check answer" }).click();
    await room.getByRole("status").getByText(/Correct/).waitFor();
    assert.equal(classroomRequests, 0);
    await context.setOffline(false);
    await room.getByLabel("Teaching mode").selectOption("explain");
    await room.getByLabel("Subject and topic").selectOption({ label: "Physics · Net force and acceleration" });
    await room.getByRole("button", { name: "Open related recording" }).click();
    const companion = room.getByLabel("Related class narration");
    await companion.evaluate(item => item.load());
    await page.waitForFunction(() => Array.from(document.querySelectorAll("audio")).some(item =>
      item.getAttribute("aria-label") === "Related class narration" && item.readyState >= 1));
    await page.goto(base + "/jee/classes");
    const subjectDownload = page.waitForEvent("download");
    await page.getByRole("link", { name: "Download JEE Physics transcripts" }).click();
    const subjectFile = await subjectDownload;
    assert.equal(subjectFile.suggestedFilename(), "jee-physics-transcripts.txt");
    assert.match(await readFile(await subjectFile.path(), "utf8"), /JEE Physics recorded class transcripts/);
    await page.goto(base + "/jee/classes/units");
    await page.waitForFunction(() => navigator.serviceWorker.controller);
    const presentation = page.getByRole("region", { name: "Tochhawng lecture classroom" });
    await presentation.getByRole("button", { name: "Show Zorami’s classroom" }).click();
    const presentationBoard = presentation.getByRole("region", { name: "Lecture blackboard" });
    await presentationBoard.getByText("Tochhawng Zorami · Reviewed course material").waitFor();
    const onlineChapters = page.getByRole("complementary", { name: "Class chapters" });
    const oldTopic = await presentationBoard.locator("p").first().textContent();
    await page.waitForFunction(() => document.querySelector("audio")?.readyState >= 1);
    await onlineChapters.getByRole("button").nth(2).click();
    await presentationBoard.locator("p").first().filter({ hasNotText: oldTopic }).waitFor();
    if (screenshots) await presentationBoard.screenshot({ path: path.join(screenshots, "lecture-blackboard.png") });
    const chapterDownload = page.waitForEvent("download");
    await page.getByRole("button", { name: "Download current chapter notes" }).click();
    const chapterFile = await chapterDownload;
    assert.equal(chapterFile.suggestedFilename(), "jee-units-chapter-3-notes.txt");
    const chapterText = await readFile(await chapterFile.path(), "utf8");
    assert.match(chapterText, /3\. Convert without guessing/);
    assert.doesNotMatch(chapterText, /^1\. /m);
    await page.evaluate(() => {
      const put = Cache.prototype.put;
      Cache.prototype.put = function (request, response) {
        if (typeof request === "string" && request.endsWith(".mp3")) {
          return Promise.reject(new DOMException("Storage quota exceeded.", "QuotaExceededError"));
        }
        return put.call(this, request, response);
      };
    });
    const download = page.getByRole("region", { name: "Offline lesson download" });
    await download.getByRole("button", { name: "Save lesson for offline use" }).click();
    await download.getByRole("status").getByText("Storage quota exceeded.").waitFor();
    const partialPacks = await page.evaluate(async () =>
      (await caches.keys()).filter(name => name.startsWith("mpsc-free-mock-lesson-v1-")));
    assert.deepEqual(partialPacks, []);
    await page.reload();
    await page.getByRole("button", { name: "Save lesson for offline use" }).click();
    await page.getByRole("status").getByText("Lesson saved on this device.").waitFor({ timeout: 90_000 });
    const audio = page.getByLabel("Class narration");
    await page.waitForFunction(() => document.querySelector("audio")?.readyState >= 1);
    const audioPath = new URL(await audio.getAttribute("src"), base).pathname;
    await page.evaluate(() => caches.delete("mpsc-free-mock-static"));
    await context.setOffline(true);
    await page.reload();
    await page.getByRole("button", { name: "Remove offline lesson" }).waitFor();
    await page.waitForFunction(() => document.querySelector("audio")?.readyState >= 1);
    const range = await page.evaluate(async url => {
      const response = await fetch(url, { headers: { range: "bytes=0-15" } });
      return { status: response.status, length: (await response.arrayBuffer()).byteLength };
    }, audioPath);
    assert.deepEqual(range, { status: 206, length: 16 });
    const chapters = page.getByRole("complementary", { name: "Class chapters" });
    await chapters.getByRole("button").nth(2).click();
    await page.waitForFunction(() => document.querySelector("audio")?.currentTime > 10);
    await audio.evaluate(async item => { await item.play(); });
    await page.waitForFunction(() => document.querySelector("audio")?.readyState >= 3);
    await page.getByLabel("English subtitles", { exact: true }).filter({ visible: true }).first().waitFor();
    await page.waitForFunction(() => document.querySelector('[class*="caption"][aria-label="English subtitles"]')?.textContent?.trim() !== "English subtitles");
    await audio.evaluate(item => item.pause());
    await page.getByRole("button", { name: "Remove offline lesson" }).click();
    await page.getByRole("status").getByText(/Offline lesson removed/).waitFor();
    await context.setOffline(false);
    await page.goto(base + "/jee/offline-learning");
    await page.waitForFunction(() => navigator.serviceWorker.controller);
    const chapterPack = page.getByRole("article").filter({ hasText: /Gravitation · Chapter 1 with narration/ });
    await chapterPack.getByRole("button", { name: "Save offline pack" }).click();
    await chapterPack.getByText("Offline pack saved. Open the pack to study.").waitFor();
    const chapterUrl = await chapterPack.getByRole("link").getAttribute("href");
    const packName = "mpsc-free-mock-lesson-v1-pack-gravity-chapter-1-v1";
    await context.setOffline(true);
    const clipRange = await page.evaluate(async url => {
      const result = await fetch(url, { headers: { Range: "bytes=0-15" } });
      return [result.status, (await result.arrayBuffer()).byteLength];
    }, "/lectures/gravity/chapter-01.mp3");
    assert.deepEqual(clipRange, [206, 16]);
    const vtt = await page.evaluate(async url => (await fetch(url + "/captions")).text(), chapterUrl);
    assert.match(vtt, /^WEBVTT\n\n00:00:00.000 -->/);
    const cachedPage = await page.goto(base + chapterUrl);
    assert.match(cachedPage.headers()["content-security-policy"], /default-src 'none'/);
    await page.getByRole("heading", { name: "One force law, from apples to planets" }).waitFor();
    const recording = page.getByLabel("Narration with captions");
    assert.equal(await recording.getAttribute("src"), "/lectures/gravity/chapter-01.mp3");
    await recording.evaluate(item => item.load());
    await page.waitForFunction(() => document.querySelector("video")?.readyState >= 1);
    const duration = await recording.evaluate(item => item.duration);
    assert.ok(Math.abs(duration - 75) < 0.25, `Chapter clip duration ${duration} differs from cues`);
    await recording.evaluate(item => { item.currentTime = 30; });
    await page.waitForFunction(() => document.querySelector("video")?.currentTime >= 30);
    await page.getByText("Read the transcript and notes", { exact: true }).click();
    await recording.evaluate(async item => { await item.play(); });
    await page.waitForFunction(() => { const item = document.querySelector("video"); return item && item.currentTime > 30 && !item.seeking; });
    await page.waitForFunction(() => (document.querySelector("video")?.textTracks[0]?.cues?.length ?? 0) > 0);
    await recording.evaluate(item => item.pause());
    if (screenshots) await page.screenshot({ path: path.join(screenshots, "offline-gravity-pack.png") });
    await context.setOffline(false);
    await page.goto(base + "/jee/offline-learning");
    await chapterPack.getByRole("button", { name: "Remove offline pack" }).click();
    await chapterPack.getByText("Offline pack removed.").waitFor();
    assert.equal(await page.evaluate(name => caches.has(name), packName), false);
    const gravityTiming = JSON.parse(await readFile(new URL("../app/data/jee-gravity-timings.json", import.meta.url), "utf8"));
    for (const [i, timing] of gravityTiming.chapters.entries()) {
      await page.goto(base + "/jee/offline-packs/gravity-chapter-" + (i + 1) + "-v1");
      const media = page.getByLabel("Narration with captions");
      await media.evaluate(item => item.load());
      await page.waitForFunction(() => document.querySelector("video")?.readyState >= 1);
      const actual = await media.evaluate(item => item.duration);
      assert.ok(Math.abs(actual - (timing.end - timing.start)) < 0.25,
        `Gravity chapter ${i + 1} has ${actual}s audio and ${timing.end - timing.start}s cues`);
    }
    await page.goto(base + "/jee/offline-learning");

    const subjectPack = page.getByRole("article").filter({ has: page.getByRole("heading", { name: "JEE Mathematics recorded lessons" }) });
    await subjectPack.getByRole("button", { name: "Save offline pack" }).click();
    await subjectPack.getByText("Offline pack saved. Open the pack to study.").waitFor({ timeout: 180_000 });
    const subjectUrl = await subjectPack.getByRole("link").getAttribute("href");
    await context.setOffline(true);
    await page.goto(base + subjectUrl);
    await page.getByRole("heading", { name: "JEE Mathematics recorded lessons" }).waitFor();
    assert.ok(await page.locator("video").count() > 10);
    await page.locator("video").first().evaluate(item => item.load());
    await page.waitForFunction(() => document.querySelector("video")?.readyState >= 1);
    await context.setOffline(false);
    await page.goto(base + "/jee/offline-learning");
    await subjectPack.getByRole("button", { name: "Remove offline pack" }).click();
    await subjectPack.getByText("Offline pack removed.").waitFor();
  } finally {
    await context.close();
  }

  console.log("Genesis checks passed: three viewport sizes, both themes, classroom offline reload, synchronized lecture blackboard, offline lecture reload, partial audio, playback, seek, captions, individual/chapter/subject removal, and eight lab activities.");
} finally {
  await browser.close();
}
