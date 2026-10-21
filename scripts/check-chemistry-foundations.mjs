import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { chemistryFoundationsLesson } from '../app/jee/classes/chemistry-foundations-study.ts';
import { chemistryExpansionLessons } from '../app/jee/classes/chemistry-expansion-study.ts';
import { physicalChemistryLessons } from '../app/jee/classes/physical-chemistry-study.ts';
import { equilibriumElectrochemistryLessons } from '../app/jee/classes/equilibrium-electrochemistry-study.ts';
import { chemistryCoreLessons } from '../app/jee/classes/chemistry-core-study.ts';
import { organicReactionLessons } from '../app/jee/classes/organic-reactions-study.ts';
import { oxygenNitrogenLessons } from '../app/jee/classes/organic-oxygen-nitrogen-study.ts';
import { biomoleculesAnalysisLessons } from '../app/jee/classes/biomolecules-analysis-study.ts';
import { inorganicPracticalLessons } from '../app/jee/classes/inorganic-practical-study.ts';
const lessons = [chemistryFoundationsLesson, ...chemistryExpansionLessons, ...physicalChemistryLessons, ...equilibriumElectrochemistryLessons, ...chemistryCoreLessons, ...organicReactionLessons, ...oxygenNitrogenLessons, ...biomoleculesAnalysisLessons, ...inorganicPracticalLessons];
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(`${process.env.PLAYWRIGHT_MODULE}/index.mjs`).href : 'playwright');
const base = process.env.TEST_URL || 'http://localhost:3173';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  const page = await browser.newPage({ serviceWorkers: 'block' });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  assert.equal((await page.goto(`${base}/jee/classes`)).status(), 200);
  await page.getByRole('button', { name: 'Chemistry', exact: true }).click();
  for (const lesson of lessons) {
  await page.getByRole('heading', { name: lesson.title, exact: true }).waitFor();
  }
  for (const lesson of lessons) {
  assert.equal((await page.goto(`${base}/jee/classes/study/${lesson.id}`)).status(), 200);
  assert.equal(await page.locator('fieldset').count(), lesson.quiz.length);
  assert.equal(await page.locator('audio').count(), 0);
  await page.locator('figure img').evaluate(img => {
    if (img.complete && img.naturalWidth > 0) return;
    return new Promise((resolve, reject) => { img.onload = resolve; img.onerror = reject; });
  });
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({ path: `tmp/${lesson.id}-${width}.png`, fullPage: true });
  }
  const pending = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download notes' }).click();
  const download = await pending;
  const notes = await readFile(await download.path(), 'utf8');
  assert.ok(notes.includes(lesson.title) && notes.includes('ANSWER KEY'));
  assert.ok(notes.includes(lesson.sections[0].paragraphs[0]));
  for (const [i, q] of lesson.quiz.entries()) {
    await page.locator('fieldset').nth(i).getByRole('radio').nth(q.answer).check();
  }
  assert.equal(await page.getByRole('status').filter({ hasText: /^Correct\./ }).count(), lesson.quiz.length);
  console.log(`${lesson.id}: diagram, MCQs, download and responsive layouts passed`);
  }
  for (const id of ['mole-concept', 'atomic-structure']) assert.equal((await page.goto(`${base}/jee/classes/study/${id}`)).status(), 200);
  assert.deepEqual(errors, []);
  console.log('All twenty added Chemistry lessons and both original Chemistry routes passed.');
} finally { await browser.close(); }
