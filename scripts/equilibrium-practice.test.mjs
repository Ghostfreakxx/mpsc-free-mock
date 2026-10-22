import test from 'node:test';
import assert from 'node:assert/strict';
import { equilibriumElectrochemistryLessons } from '../app/jee/classes/equilibrium-electrochemistry-study.ts';

const lesson = equilibriumElectrochemistryLessons.find(l => l.id === 'equilibrium');
test('expanded equilibrium practice preserves the original foundation', () => {
  assert.equal(lesson.sections.length, 17);
  assert.equal(lesson.examples.length, 13);
  assert.equal(lesson.quiz.length, 26);
  assert.match(lesson.remaining, /Marin recording and written notes, not complete unit coverage/);
});
test('buffer reaction precedes its equilibrium calculation', () => {
  const acid = 0.0200 + 0.00500;
  const base = 0.0300 - 0.00500;
  assert.ok(Math.abs(4.76 + Math.log10(base / acid) - 4.76) < 1e-12);
  assert.equal(lesson.quiz[6].options[lesson.quiz[6].answer], '1');
  assert.match(lesson.examples[3].steps[0], /first consumes/);
});
test('salt hydrolysis and dilution calculations match the worked answers', () => {
  const kb = 1e-14 / 1e-5;
  assert.ok(Math.abs(14 + Math.log10(Math.sqrt(kb * 0.1)) - 9) < 1e-12);
  const ion = 2e-5 * 0.05 / 0.1;
  assert.ok(Math.abs(ion * ion / 1e-10 - 1) < 1e-12);
  assert.match(lesson.examples[5].answer, /exactly saturated/);
  assert.ok(Math.abs(Math.cbrt(4e-12 / 4) - 1e-4) < 1e-12);
});
test('quadratic solution satisfies the acid mass balance instead of the invalid shortcut', () => {
  const ka = 0.001, c = 0.001;
  const x = (-ka + Math.sqrt(ka * ka + 4 * ka * c)) / 2;
  assert.ok(Math.abs(x * x / (c - x) - ka) < 1e-12);
  assert.equal((-Math.log10(x)).toFixed(3), '3.209');
  assert.ok(x / c > 0.6);
  assert.match(lesson.examples[6].answer, /quadratic/);
});
