import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(`${process.env.PLAYWRIGHT_MODULE}/index.mjs`).href : 'playwright');
const base = process.env.TEST_URL || 'http://localhost:3105';

(async () => {
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  try {
    const page = await browser.newPage({ serviceWorkers: 'block' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(`${base}/jee/classes`);
    assert.equal(await page.getByRole('heading', { name: 'Physics classes', exact: true }).count(), 1);
    assert.equal(await page.getByRole('link', { name: 'Open class' }).count(), 2);
    for (const width of [1440, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      await page.screenshot({ path: `${process.env.SCREENSHOT_DIR || '.'}/library-${width}.png`, fullPage: true });
    }
    for (const id of ['units', 'measurements']) {
      await page.goto(`${base}/jee/classes/${id}`);
      await page.waitForFunction(() => document.querySelector('audio')?.readyState >= 1);
      const duration = await page.locator('audio').evaluate(audio => audio.duration);
      assert.ok(duration > 250);
      await page.getByLabel('Playback speed').selectOption('1.25');
      assert.equal(await page.locator('audio').evaluate(audio => audio.playbackRate), 1.25);
      const chapters = page.getByRole('complementary', { name: 'Class chapters' }).getByRole('button');
      await chapters.nth(2).click();
      assert.equal(await chapters.nth(2).getAttribute('aria-current'), 'step');
      await page.getByRole('button', { name: 'English subtitles', exact: true }).click();
      assert.equal(await page.locator('div[aria-label="English subtitles"]').textContent(), 'Subtitles off');
      await page.getByRole('button', { name: 'English subtitles', exact: true }).click();
      const saved = await page.locator('audio').evaluate(audio => audio.currentTime);
      await page.reload();
      await page.waitForFunction(value => Math.abs(document.querySelector('audio').currentTime - value) < 1, saved);
      await chapters.last().click();
      assert.equal(await page.getByRole('button', { name: 'Next chapter' }).isDisabled(), true);
      const initial = await page.locator('audio').evaluate(audio => audio.currentTime);
      await page.locator('audio').evaluate(audio => audio.play());
      await page.waitForFunction(value => document.querySelector('audio').currentTime > value + .5, initial);
      await page.locator('audio').evaluate(audio => audio.pause());
      await page.getByRole('button', { name: 'Restart class' }).click();
      assert.ok(await page.locator('audio').evaluate(audio => audio.currentTime < 1));
      await page.locator('fieldset').first().getByRole('radio').first().check();
      assert.ok((await page.getByRole('status').textContent()).length > 40);
      await page.reload();
      await page.waitForFunction(() => document.querySelector('fieldset input')?.checked);
      assert.equal(await page.locator('fieldset').first().getByRole('radio').first().isChecked(), true);
      await page.waitForFunction(() => document.querySelector('audio')?.readyState >= 1);
      await chapters.nth(2).click();
      const positionBeforeRetry = await page.locator('audio').evaluate(audio => audio.currentTime);
      await page.getByRole('link', { name: 'JEE classes', exact: true }).click();
      const row = page.locator('article').filter({ has: page.locator(`a[href="/jee/classes/${id}"]`) });
      await row.getByRole('link', { name: 'Resume class' }).waitFor();
      assert.match(await row.textContent(), /Practice: 1 \/ 3 answered/);
      await row.getByRole('link', { name: 'Resume class' }).click();
      await page.waitForFunction(value => Math.abs(document.querySelector('audio')?.currentTime - value) < 1, positionBeforeRetry);
      await page.getByRole('button', { name: 'Retry practice' }).click();
      assert.equal(await page.locator('input[type="radio"]:checked').count(), 0);
      assert.ok(Math.abs(await page.locator('audio').evaluate(audio => audio.currentTime) - positionBeforeRetry) < 1);
      await page.reload();
      await page.getByText('Answers saved on this browser', { exact: true }).waitFor();
      assert.equal(await page.locator('input[type="radio"]:checked').count(), 0);
      const downloadEvent = page.waitForEvent('download');
      await page.getByRole('button', { name: 'Download notes' }).click();
      const download = await downloadEvent;
      assert.equal(download.suggestedFilename(), `jee-${id}-notes.txt`);
      for (const width of [1440, 390, 320]) {
        await page.setViewportSize({ width, height: 900 });
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${id} overflow ${width}`);
        await page.screenshot({ path: `${process.env.SCREENSHOT_DIR || '.'}/${id}-${width}.png`, fullPage: true });
      }
      console.log(`${id}: ${duration.toFixed(3)}s, playback, resume, captions, speed, chapters, quiz, notes, responsive checks passed`);
    }
    const failurePage = await browser.newPage({ serviceWorkers: 'block' });
    failurePage.on('pageerror', error => errors.push(error.message));
    await failurePage.route('**/lectures/measurements/**', route => route.abort());
    await failurePage.goto(`${base}/jee/classes/measurements`);
    const audioError = failurePage.getByRole('alert').filter({ hasText: 'The recording could not load' });
    await audioError.waitFor();
    await failurePage.unroute('**/lectures/measurements/**');
    await failurePage.getByRole('button', { name: 'Retry audio' }).click();
    await failurePage.waitForFunction(() => document.querySelector('audio')?.readyState >= 3);
    assert.equal(await audioError.count(), 0);
    const privatePage = await browser.newPage({ serviceWorkers: 'block' });
    await privatePage.addInitScript(() => {
      Storage.prototype.getItem = () => { throw new Error('Storage blocked'); };
      Storage.prototype.setItem = () => { throw new Error('Storage blocked'); };
    });
    await privatePage.goto(`${base}/jee/classes/measurements`);
    await privatePage.locator('fieldset').first().getByRole('radio').first().check();
    await privatePage.getByText('Answers cannot be saved in this browser. This attempt is temporary.', { exact: true }).waitFor();
    assert.equal(await privatePage.locator('fieldset').first().getByRole('radio').first().isChecked(), true);
    assert.deepEqual(errors, []);
    console.log('Library and both lessons passed. No browser exceptions.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
