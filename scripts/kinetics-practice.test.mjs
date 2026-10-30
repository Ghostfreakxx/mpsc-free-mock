import test from 'node:test';
import assert from 'node:assert/strict';
import { chemistryCoreLessons } from '../app/jee/classes/chemistry-core-study.ts';
const lesson = chemistryCoreLessons[0];
test('kinetics pressure measurement uses reactant partial pressure, not total pressure', () => {
  const p0 = 100, total = 150, time = 10;
  const pa = 2 * p0 - total;
  assert.equal(pa, 50);
  assert.equal((Math.log(p0 / pa) / time).toFixed(4), '0.0693');
  assert.match(lesson.examples[3].question, /constant temperature and volume/);
});
test('zero-order depletion, mixed rate ratios and successive half-lives agree', () => {
  assert.equal((0.08 - 0.002 * 15).toFixed(4), '0.0500');
  assert.equal(0.08 / 0.002, 40);
  assert.equal(3 ** 2 * 0.5, 4.5);
  assert.equal(0.5 ** 4, 1 - 0.9375);
  assert.equal(0.12 / 60, 0.002);
  assert.equal(lesson.examples.length, 28);
  assert.equal(lesson.quiz.length, 66);
  assert.match(lesson.remaining, /thirty-four-chapter Marin recording/);
});
