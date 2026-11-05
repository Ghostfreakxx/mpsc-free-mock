import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import fs from 'node:fs';
import ts from 'typescript';

const source = fs.readFileSync('app/neet/classes/biology-practice/questions.ts', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const exports = {};
new Function('exports', compiled)(exports);
const { sets } = exports;
assert.equal(sets.length, 6);
assert.equal(sets.flatMap(s => s.quiz).length, 32);
// Independent arithmetic checks: trophic transfers, Hardy–Weinberg and ideal PCR.
assert.equal(sets[3].quiz[0].options[sets[3].quiz[0].answer], `${10000 * 0.1 ** 2 | 0} kJ`);
assert.equal(sets[5].quiz[1].options[sets[5].quiz[1].answer], (2 * Math.sqrt(0.09) * (1 - Math.sqrt(0.09))).toFixed(2));
assert.equal(sets[5].quiz[3].options[sets[5].quiz[3].answer], String(2 ** 5));
const base = process.env.TEST_URL || 'http://localhost:3000';
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'msedge' });
try {
  const page = await browser.newPage({ viewport: { width: 360, height: 800 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(`${base}/neet/classes`);
  await page.getByRole('link', { name: 'Open Biology diagram and mixed practice' }).click();
  await page.waitForURL('**/biology-practice');
  assert.equal(await page.locator('fieldset').count(), 32);
  assert.equal(await page.locator('main svg[role="img"]').count(), 4);
  for (const id of ['chloroplast', 'circulation', 'embryo-sac', 'energy-flow']) {
    const figure = page.locator(`#${id} figure`);
    assert((await figure.locator('svg desc').textContent()).length > 100);
    await figure.locator('summary').click();
    assert(await figure.locator('details p').isVisible());
  }
  for (const set of sets) {
    const section = page.locator(`#${set.id}`);
    for (let i = 0; i < set.quiz.length; i++) {
      const field = section.locator('fieldset').nth(i);
      await field.getByRole('radio').nth(set.quiz[i].answer).check();
      await field.getByRole('status').filter({ hasText: 'Correct.' }).waitFor();
    }
    assert((await section.innerText()).includes(`${set.quiz.length} / ${set.quiz.length} answered · ${set.quiz.length} correct`));
  }
  await page.reload();
  await page.getByText('Loading saved answers...', { exact: true }).first().waitFor({ state: 'hidden' });
  assert.equal(await page.locator('input:checked').count(), 32);
  await page.locator('#chloroplast').getByRole('button', { name: 'Retry practice' }).click();
  assert.equal(await page.locator('input:checked').count(), 28);
  const field = page.locator('#chloroplast fieldset').first();
  await field.getByRole('radio').nth(0).check();
  assert.match(await field.getByRole('status').innerText(), /Not quite.*granum/is);
  await page.reload();
  await page.locator('#chloroplast input:checked').waitFor();
  assert.match(await page.locator('#chloroplast fieldset').first().innerText(), /Not quite/);
  for (const theme of ['light', 'dark']) {
    await page.evaluate(t => { localStorage.setItem('mpsc-theme', t); }, theme);
    await page.reload();
    for (const width of [320, 360, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${theme} overflow at ${width}`);
    }
    await page.setViewportSize({ width: 360, height: 900 });
    await page.screenshot({ path: `tmp/neet-biology-practice-${theme}.png`, fullPage: true });
  }
  const links = await page.locator('main a[href^="/neet/classes/"]').evaluateAll(a => a.map(n => n.getAttribute('href')));
  for (const href of new Set(links)) assert.equal((await page.request.get(base + href)).status(), 200, href);
  assert.deepEqual(errors, []);
  console.log('PASS: 4 accessible diagrams, 32 answers, independent calculations, wrong-answer feedback, reload, isolated reset, class links and responsive themes');
} finally { await browser.close(); }
