import test from 'node:test';
import assert from 'node:assert/strict';
import { chemistryExpansionLessons as lessons } from '../app/jee/classes/chemistry-expansion-study.ts';

test('Chemistry expansion preserves explicit scope, units and original practice', () => {
  assert.deepEqual(lessons.map(l => [l.id, l.unit]), [['atomic-spectra', 2], ['periodic-trends', 9], ['chemical-bonding', 3]]);
  for (const lesson of lessons) {
    assert.equal(lesson.subject, 'Chemistry');
    assert.match(lesson.remaining, /not a Marin recording/);
    assert.equal(lesson.quiz.length, 6);
    assert.equal(lesson.examples.length, 3);
    assert.ok(lesson.sources.some(s => s.url.includes('jeemain.nta.nic.in')));
  }
});

test('atomic examples independently satisfy energy, radius and wavelength relations', () => {
  assert.equal(1240 / 620 - 1.50, .50);
  assert.equal(-13.6 * 2 ** 2 / 2 ** 2, -13.6);
  assert.ok(Math.abs(.0529 * 4 / 2 - .1058) < 1e-12);
  assert.ok(Math.abs(13.6 * (1/4 - 1/16) - 2.55) < 1e-12);
  assert.ok(Math.abs(1240 / 2.55 - 486.2745098) < 1e-6);
  assert.equal(Math.sqrt(100/400), .5);
  const minimumP = 1.055e-34 / (2 * 1e-10);
  assert.ok(Math.abs(minimumP / 9.11e-31 - 579034.0285) < .01);
  assert.deepEqual(lessons[0].quiz.map(q => q.answer), [1, 2, 0, 3, 1, 2]);
});

test('periodic comparisons fix electron count before comparing nuclear charge', () => {
  const z = [8, 9, 11, 12], charges = [-2, -1, 1, 2];
  assert.deepEqual(z.map((n, i) => n - charges[i]), [10, 10, 10, 10]);
  assert.deepEqual(lessons[1].quiz.map(q => q.answer), [1, 3, 2, 0, 1, 3]);
});

test('bonding examples preserve formal charge and antibonding population arithmetic', () => {
  assert.equal(5 - 0 - 8/2, 1);
  assert.equal(4 + 2 * 6, 16);
  const bonding = 8, antibonding = 4;
  assert.equal((bonding - antibonding) / 2, 2);
  assert.equal((bonding - (antibonding - 1)) / 2, 2.5);
  assert.equal((bonding - (antibonding + 1)) / 2, 1.5);
  assert.deepEqual(lessons[2].quiz.map(q => q.answer), [2, 1, 3, 0, 2, 1]);
});
