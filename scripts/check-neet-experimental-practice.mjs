import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import fs from 'node:fs';
import ts from 'typescript';

const source = fs.readFileSync('app/neet/classes/physics-chemistry/practice/questions.ts', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const exports = {};
new Function('exports', compiled)(exports);
const { sets } = exports;
assert.equal(sets.length, 4);
assert.equal(sets.flatMap(s => s.quiz).length, 32);
// Independent numerical checks for error propagation, combustion and calorimetry.
assert.equal(sets[0].quiz[1].options[sets[0].quiz[1].answer], `${1 + 2 * 2 + 1}%`);
const atoms = [0.88 / 44, 0.36 / 18 * 2, (0.60 - 0.88 * 12 / 44 - 0.36 * 2 / 18) / 16];
assert.deepEqual(atoms.map(n => Math.round(n / atoms[0])), [1, 2, 1]);
assert.equal(sets[1].quiz[4].options[sets[1].quiz[4].answer], `−${(4.18 / 0.05).toFixed(1)} kJ/mol`);
const base = process.env.TEST_URL || 'http://localhost:3000';
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'msedge' });
try {
  const page = await browser.newPage({ viewport: { width: 360, height: 800 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(`${base}/neet/classes/physics-chemistry`);
  await page.getByRole('link', { name: 'Open the practice companion' }).click();
  await page.waitForURL('**/physics-chemistry/practice');
  assert.equal(await page.locator('fieldset').count(), 32);
  for (const set of sets) {
    const section = page.locator(`#${set.id}`);
    for (let i = 0; i < set.quiz.length; i++) {
      const field = section.locator('fieldset').nth(i);
      await field.getByRole('radio').nth(set.quiz[i].answer).check();
      await field.getByRole('status').filter({ hasText: 'Correct.' }).waitFor();
    }
    assert.match(await section.innerText(), /8 \/ 8 answered · 8 correct/);
  }
  await page.reload();
  await page.getByText('Loading saved answers...', { exact: true }).first().waitFor({ state: 'hidden' });
  assert.equal(await page.locator('input:checked').count(), 32);
  await page.locator('#physics-experimental').getByRole('button', { name: 'Retry practice' }).click();
  assert.equal(await page.locator('input:checked').count(), 24);
  const field = page.locator('#physics-experimental fieldset').first();
  await field.getByRole('radio').nth(0).check();
  assert.match(await field.getByRole('status').innerText(), /Not quite.*2.43 cm/s);
  await page.reload();
  await page.locator('#physics-experimental input:checked').waitFor();
  assert.match(await page.locator('#physics-experimental fieldset').first().innerText(), /Not quite/);
  for (const theme of ['light', 'dark']) {
    await page.evaluate(t => { localStorage.setItem('mpsc-theme', t); }, theme);
    await page.reload();
    for (const width of [320, 360, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${theme} overflow at ${width}`);
    }
    await page.setViewportSize({ width: 360, height: 900 });
    await page.screenshot({ path: `tmp/neet-experimental-${theme}.png`, fullPage: true });
  }
  const links = await page.locator('main a[href^="/neet/classes/shared/"]').evaluateAll(a => a.map(n => n.getAttribute('href')));
  for (const href of new Set(links)) assert.equal((await page.request.get(base + href)).status(), 200, href);
  assert.deepEqual(errors, []);
  console.log('PASS: 32 answers, independent calculations, wrong-answer feedback, reload, isolated reset, class links and responsive themes');
} finally { await browser.close(); }
