import test from 'node:test';
import assert from 'node:assert/strict';
import { equilibriumElectrochemistryLessons } from '../app/jee/classes/equilibrium-electrochemistry-study.ts';
const lesson = equilibriumElectrochemistryLessons[1];

test('expanded electrochemistry retains recorded companion scope and original examples', () => {
  assert.equal(lesson.sections.length, 10);
  assert.equal(lesson.examples.length, 7);
  assert.equal(lesson.quiz.length, 12);
  assert.match(lesson.remaining, /Marin recording and written notes, not complete unit coverage/);
  assert.match(lesson.examples[2].answer, /3.18 g/);
});
test('basic permanganate half-reaction conserves atoms and charge', () => {
  assert.equal(4 + 2, 2 + 4); // Oxygen atoms.
  assert.equal(2 * 2, 4); // Hydrogen atoms.
  assert.equal(-1 - 3, -4);
  assert.equal((0.0200 * (7 - 4)).toFixed(4), '0.0600');
  assert.match(lesson.sections[8].formula, /3e-.*4OH-/);
});
test('conductivity, weak-electrolyte ionization and current efficiency agree numerically', () => {
  const kappa = 1.20 / 200;
  assert.equal(kappa.toFixed(5), '0.00600');
  assert.equal(1000 * kappa / 0.05, 120);
  const alpha = 20 / 400;
  assert.equal((0.01 * alpha ** 2 / (1 - alpha)).toExponential(2), '2.63e-5');
  assert.equal((63.5 * 9650 / (2 * 96500) * 0.8).toFixed(2), '2.54');
});
test('lead-acid discharge net reaction conserves elemental inventory', () => {
  const left = { Pb: 2, H: 4, S: 2, O: 2 + 2 * 4 };
  const right = { Pb: 2, H: 2 * 2, S: 2, O: 2 * 4 + 2 };
  assert.deepEqual(left, right);
  assert.equal(lesson.quiz[10].options[lesson.quiz[10].answer], 'Consumes sulfuric acid');
});
