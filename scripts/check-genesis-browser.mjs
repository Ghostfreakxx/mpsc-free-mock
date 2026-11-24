import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
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
    await page.getByLabel("Subject and topic").waitFor();
    await page.waitForFunction(async () => {
      const cache = await caches.open("mpsc-free-mock-v13");
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
  } finally {
    await context.close();
  }

  console.log("Genesis checks passed: three viewport sizes, both themes, classroom offline reload, synchronized lecture blackboard, offline lecture reload, partial audio, playback, seek, captions and removal.");
} finally {
  await browser.close();
}
