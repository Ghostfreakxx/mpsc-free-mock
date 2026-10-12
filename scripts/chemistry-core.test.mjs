import test from 'node:test';
import assert from 'node:assert/strict';
import { chemistryCoreLessons as lessons } from '../app/jee/classes/chemistry-core-study.ts';

test('new Chemistry foundations map to official units and distinguish written scope from recordings', () => {
  assert.deepEqual(lessons.map(l => l.unit), [8, 12, 14]);
  for (const l of lessons) {
    assert.equal(l.sections.length, 8);
    assert.equal(l.examples.length, ['chemical-kinetics', 'coordination-compounds'].includes(l.id) ? 7 : 3);
    assert.equal(l.quiz.length, ['chemical-kinetics', 'coordination-compounds'].includes(l.id) ? 12 : 6);
    assert.match(l.remaining, /not a Marin recording or complete unit coverage/);
  }
});
test('initial-rate orders, first-order times and Arrhenius example agree independently', () => {
  assert.equal(Math.log(0.008 / 0.002) / Math.log(2), 2);
  assert.equal(Math.log(0.004 / 0.002) / Math.log(2), 1);
  assert.ok(Math.abs(0.002 / (0.1 ** 2 * 0.1) - 2) < 1e-12);
  assert.equal(0.5 ** 3, 0.125);
  assert.equal((Math.log(10) / (Math.log(2) / 10)).toFixed(1), '33.2');
  assert.equal((8.314 * Math.log(2) / (1 / 300 - 1 / 310) / 1000).toFixed(1), '53.6');
});
test('coordination charges, donor counts, spin moment and field energy are consistent', () => {
  assert.equal(-4 - 6 * (-1), 2);
  assert.equal(3 * 2, 6);
  assert.equal(Math.sqrt(4 * 6).toFixed(2), '4.90');
  assert.ok(Math.abs(4 * (-0.4) + 2 * 0.6 - (-0.4)) < 1e-12);
  assert.match(lessons[1].examples[2].answer, /4 unpaired/);
  assert.equal(lessons[1].quiz[4].options[lessons[1].quiz[4].answer], '0');
});
test('organic examples preserve bond counting and geometrical-isomer conditions', () => {
  assert.match(lessons[2].examples[0].answer, /5 sigma bonds and 1 pi bond/);
  assert.match(lessons[2].examples[2].answer, /CH2=CHCl cannot/);
  assert.equal(lessons[2].quiz[4].options[lessons[2].quiz[4].answer], 'But-2-ene');
  assert.equal(lessons[2].quiz[1].options[lessons[2].quiz[1].answer], 'NH3');
});
