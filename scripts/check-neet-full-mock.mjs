import assert from 'node:assert/strict';
import fs from 'node:fs';
import { chromium } from 'playwright';
const pool = [...JSON.parse(fs.readFileSync('app/data/neet-full-mock.json', 'utf8')), ...JSON.parse(fs.readFileSync('app/data/neet-challenge-mock.json', 'utf8')), ...JSON.parse(fs.readFileSync('app/data/neet-challenge-expansion.json', 'utf8')), ...JSON.parse(fs.readFileSync('app/data/neet-challenge-rotation.json', 'utf8')), ...JSON.parse(fs.readFileSync('app/data/neet-challenge-batch4.json', 'utf8')), ...JSON.parse(fs.readFileSync('app/data/neet-challenge-batch5.json', 'utf8')), ...JSON.parse(fs.readFileSync('app/data/neet-challenge-batch6.json', 'utf8')), ...JSON.parse(fs.readFileSync('app/data/neet-challenge-batch7.json', 'utf8')), ...JSON.parse(fs.readFileSync('app/data/neet-challenge-batch8.json', 'utf8'))];
const byId = new Map(pool.map(q => [q.id, q]));
const key = 'neet-full-mock:attempt:v1';
const base = process.env.TEST_URL || 'http://localhost:3000';
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'msedge' });
try {
  const page = await browser.newPage({ viewport: { width: 360, height: 900 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(`${base}/neet/classes`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  const bankReady = page.waitForResponse(r => r.url().endsWith('/question-bank/neet-full-mock-v9'));
  await page.getByRole('link', { name: 'Open NEET full-syllabus timed mock' }).click();
  const liveBank = await (await bankReady).json();
  assert.equal(liveBank.length, 852);
  assert.equal(liveBank.filter(q => q.id.startsWith('neet-challenge-b2-')).length, 25);
  assert.equal(liveBank.filter(q => q.id.startsWith('neet-challenge-b3-')).length, 25);
  assert.equal(liveBank.filter(q => q.id.startsWith('neet-challenge-b4-')).length, 25);
  assert.equal(liveBank.filter(q => q.id.startsWith('neet-challenge-b5-')).length, 25);
  assert.equal(liveBank.filter(q => q.id.startsWith('neet-challenge-b6-')).length, 25);
  assert.equal(liveBank.filter(q => q.id.startsWith('neet-challenge-b7-')).length, 25);
  assert.equal(liveBank.filter(q => q.id.startsWith('neet-challenge-b8-')).length, 25);
  const challengeUnits = new Map();
  for (const q of liveBank.filter(q => q.challenge)) challengeUnits.set(q.category, (challengeUnits.get(q.category) || 0) + 1);
  assert.equal(challengeUnits.size, 50);
  assert.equal([...challengeUnits.values()].filter(count => count === 4).length, 25);
  assert.equal([...challengeUnits.values()].filter(count => count === 5).length, 25);
  await page.waitForURL('**/neet/mock-test', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Start 180-question NEET UG paper' }).waitFor();
  const legacy = '{"keep":"other simulator attempt"}';
  await page.evaluate(value => localStorage.setItem('exam-simulator:attempt:v1', value), legacy);
  for (const theme of ['light', 'dark']) {
    await page.evaluate(t => localStorage.setItem('mpsc-theme', t), theme);
    await page.reload({ waitUntil: 'domcontentloaded', timeout: 60000 });
    for (const width of [320, 360, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `Setup ${theme} ${width}`);
    }
  }
  await page.setViewportSize({ width: 360, height: 900 });
  await page.getByRole('button', { name: 'Start 180-question NEET UG paper' }).click();
  await page.getByText('Question 1 of 180', { exact: true }).waitFor();
  let attempt = JSON.parse(await page.evaluate(k => localStorage.getItem(k), key));
  assert.equal(attempt.deadline - attempt.startedAt, 180 * 60000);
  assert.equal(attempt.practiceMode, "challenge");
  const originalDeadline = attempt.deadline;
  const paper = attempt.questionIds.map(id => byId.get(id));
  assert.equal(new Set(paper.map(q => q.category)).size, 50);
  assert.equal(paper.filter(q => q.challenge).length, 50);
  assert.equal(new Set(paper.filter(q => q.challenge).map(q => q.category)).size, 50);
  assert.deepEqual(['Physics', 'Chemistry', 'Biology'].map(s => paper.filter(q => q.subject === s).length), [45, 45, 90]);
  assert.equal(await page.getByRole('heading', { name: /You scored/ }).count(), 0);
  await page.getByRole('group', { name: 'Answer options' }).getByRole('button').nth(paper[0].options.indexOf(paper[0].answer)).click();
  await page.getByRole('button', { name: 'Mark for review & next', exact: true }).click();
  const wrong = paper[1].options.findIndex(o => o !== paper[1].answer);
  await page.getByRole('group', { name: 'Answer options' }).getByRole('button').nth(wrong).click();
  await page.reload({ waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.getByText('Question 2 of 180', { exact: true }).waitFor();
  assert.equal(await page.getByRole('group', { name: 'Answer options' }).locator('[aria-pressed="true"]').count(), 1);
  attempt = JSON.parse(await page.evaluate(k => localStorage.getItem(k), key));
  assert.equal(attempt.responses[paper[0].id].marked, true);
  assert.equal(await page.evaluate(() => localStorage.getItem('exam-simulator:attempt:v1')), legacy);
  assert.equal(attempt.deadline, originalDeadline);
  await page.getByRole('timer', { name: /Time left 2:59:/ }).waitFor();
  await page.getByRole('button', { name: 'Submit', exact: true }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Back to exam' }).click();
  assert.equal(await page.getByRole('dialog').count(), 0);
  // Exercise time-up via the browser clock; do not wait three hours or change production timing.
  await page.clock.install();
  await page.clock.fastForward(181 * 60000);
  await page.getByRole('heading', { name: 'You scored 3 out of 720', exact: true }).waitFor();
  await page.getByText('Unit-by-unit review · 50 units', { exact: true }).click();
  assert.equal(await page.getByRole('region', { name: 'Syllabus unit review' }).locator('li').count(), 50);
  assert.match(await page.getByRole('region', { name: 'Score summary' }).innerText(), /178/);
  await page.reload({ waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.getByRole('heading', { name: 'You scored 3 out of 720', exact: true }).waitFor();
  for (const theme of ['light', 'dark']) {
    await page.evaluate(t => localStorage.setItem('mpsc-theme', t), theme); await page.reload({ waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.getByRole('heading', { name: 'You scored 3 out of 720', exact: true }).waitFor();
    for (const width of [320, 360, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `Result ${theme} ${width}`);
    }
    await page.setViewportSize({ width: 360, height: 900 });
    await page.screenshot({ path: `tmp/neet-full-mock-result-${theme}.png` });
  }
  await page.getByRole('button', { name: 'New paper, same settings' }).click();
  await page.getByText('Question 1 of 180', { exact: true }).waitFor();
  const next = JSON.parse(await page.evaluate(k => localStorage.getItem(k), key));
  assert.notDeepEqual(next.questionIds, attempt.questionIds);
  assert.equal(await page.evaluate(() => localStorage.getItem('exam-simulator:attempt:v1')), legacy);
  for (const theme of ['light', 'dark']) {
    await page.evaluate(t => localStorage.setItem('mpsc-theme', t), theme); await page.reload({ waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.getByText('Question 1 of 180', { exact: true }).waitFor();
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    await page.screenshot({ path: `tmp/neet-full-mock-running-${theme}.png` });
  }
  assert.equal(next.practiceMode, 'challenge');
  assert.equal(next.questionIds.filter(id => byId.get(id).challenge).length, 50);
  // Switch only after completing the paper: no settings change can replace a running attempt.
  const foundation = await browser.newPage();
  await foundation.goto(`${base}/neet/mock-test`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await foundation.getByRole('button', { name: 'Foundation', exact: true }).click();
  await foundation.getByRole('button', { name: 'Start 180-question NEET UG paper' }).click();
  await foundation.getByText('Question 1 of 180', { exact: true }).waitFor();
  const basic = JSON.parse(await foundation.evaluate(k => localStorage.getItem(k), key));
  assert.equal(basic.questionIds.filter(id => byId.get(id).challenge).length, 0);
  await foundation.close();
  assert.deepEqual(errors, []);
  console.log('PASS: discovery, 180 questions, 50 units, subject quotas, timer, mark/reload, isolated storage, auto-submit, +4/−1 score, saved results, new paper and mobile themes');
} finally { await browser.close(); }
