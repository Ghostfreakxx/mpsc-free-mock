import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(`${process.env.PLAYWRIGHT_MODULE}/index.mjs`).href : 'playwright');
const base = process.env.TEST_URL || 'http://localhost:3107';
const screenshots = process.env.SCREENSHOT_DIR || '.';
const browser = await chromium.launch({ headless: true, ...(process.env.PLAYWRIGHT_CHANNEL === 'chromium' ? {} : { channel: process.env.PLAYWRIGHT_CHANNEL || 'msedge' }) });
try {
  const page = await browser.newPage({ serviceWorkers: 'block' });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const cases = [
    ['Physics', 'straight-line-motion', 20, [1, 2, 1, 2, 1]],
    ['Chemistry', 'mole-concept', 20, [1, 2, 1, 1, 2]],
    ['Mathematics', 'sets-and-functions', 14, [2, 0, 2, 1, 0]],
  ];
  for (const [subject, slug, count, answers] of cases) {
    await page.goto(`${base}/jee/classes`);
    await page.getByRole('button', { name: subject, exact: true }).click();
    assert.equal(await page.getByRole('region', { name: `${subject} course map` }).locator('li').count(), count);
    await page.getByRole('link', { name: 'Read lesson', exact: true }).click();
    await page.waitForURL(`**/study/${slug}`);
    await page.getByRole('img').waitFor();
    await page.waitForFunction(() => [...document.images].every(image => image.complete && image.naturalWidth > 0));
    assert.equal(await page.locator('audio').count(), 0);
    assert.equal(await page.locator('fieldset').count(), 5);
    for (const [index, answer] of answers.entries()) await page.locator('fieldset').nth(index).getByRole('radio').nth(answer).check();
    assert.match(await page.getByRole('region', { name: 'Lesson practice' }).textContent(), /5 \/ 5 answered · 5 correct/);
    await page.reload();
    await page.waitForFunction(() => document.querySelectorAll('input:checked').length === 5);
    assert.equal(await page.locator('fieldset input:disabled').count(), 20);
    const downloadEvent = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download notes' }).click();
    const download = await downloadEvent;
    assert.equal(download.suggestedFilename(), `jee-${slug}-notes.txt`);
    const notes = await readFile(await download.path(), 'utf8');
    assert.ok(notes.includes('ANSWER KEY') && notes.includes('UNIT COVERAGE') && notes.includes('REFERENCES'));
    await page.getByRole('button', { name: 'Retry practice' }).click();
    assert.equal(await page.locator('input:checked').count(), 0);
    assert.equal(await page.locator('fieldset input:disabled').count(), 0);
    for (const width of [1440, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${slug} overflow at ${width}`);
      await page.screenshot({ path: `${screenshots}/study-${slug}-${width}.png`, fullPage: true });
    }
    await page.locator('#section-0').screenshot({ path: `${screenshots}/study-${slug}-reading.png` });
    console.log(`${subject}: map, lesson, figure, answer keys, persistence, reset, download and responsive checks passed`);
  }
  const response = await page.goto(`${base}/jee/classes/study/does-not-exist`);
  assert.equal(response.status(), 404);
  assert.deepEqual(errors, []);
} finally { await browser.close(); }
