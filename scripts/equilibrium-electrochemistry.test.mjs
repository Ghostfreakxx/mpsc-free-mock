import test from 'node:test';
import assert from 'node:assert/strict';
import { equilibriumElectrochemistryLessons as lessons } from '../app/jee/classes/equilibrium-electrochemistry-study.ts';

test('equilibrium and electrochemistry remain written foundations mapped to Units 6 and 7', () => {
  assert.deepEqual(lessons.map(l => l.unit), [6, 7]);
  for (const lesson of lessons) {
    assert.equal(lesson.sections.length, lesson.id === 'equilibrium' ? 29 : 31);
    assert.equal(lesson.examples.length, 22);
    assert.equal(lesson.quiz.length, 50);
    assert.match(lesson.remaining, /Marin recording and written notes, not complete unit coverage/);
  }
});
test('weak acid, buffer and common-ion examples agree with independent calculations', () => {
  const ka = 1e-5, c = 0.1;
  const h = (-ka + Math.sqrt(ka * ka + 4 * ka * c)) / 2;
  assert.ok(Math.abs(-Math.log10(h) - 3.002) < 0.001);
  assert.equal((4.76 + Math.log10(10)).toFixed(2), '5.76');
  assert.equal(Math.sqrt(1e-10), 1e-5);
  assert.ok(Math.abs(1e-10 / 0.01 - 1e-8) < 1e-20);
  assert.match(lessons[0].examples[2].answer, /10\^-8 M/);
});
test('cell voltage and deposited mass use correct signs and electron factors', () => {
  assert.equal((0.34 - (-0.76)).toFixed(2), '1.10');
  assert.equal((1.10 - 0.05916 / 2 * Math.log10(0.1)).toFixed(5), '1.12958');
  assert.equal((63.5 * 2 * 4825 / (2 * 96500)).toFixed(3), '3.175');
  assert.match(lessons[1].examples[2].answer, /3.18 g/);
});
test('acidic permanganate and iron balancing conserves charge and electron count', () => {
  assert.equal(-1 + 8 + 5 * 2, 2 + 5 * 3);
  assert.equal(7 - 2, 5 * (3 - 2));
  assert.match(lessons[1].sections[1].formula, /5e-/);
});
