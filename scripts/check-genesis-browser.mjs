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
    await page.goto(base + "/jee/classes/units");
    await page.waitForFunction(() => navigator.serviceWorker.controller);
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

  console.log("Genesis checks passed: three viewport sizes, both themes, classroom offline reload, offline lecture reload, partial audio, playback, seek, captions and removal.");
} finally {
  await browser.close();
}
