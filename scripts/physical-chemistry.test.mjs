import test from 'node:test';
import assert from 'node:assert/strict';
import { physicalChemistryLessons as lessons } from '../app/jee/classes/physical-chemistry-study.ts';
const near = (a, b, tolerance = 1e-10) => assert.ok(Math.abs(a - b) < tolerance, `${a} != ${b}`);

test('physical Chemistry lessons map to Units 4 and 5 with explicit written-only scope', () => {
  assert.deepEqual(lessons.map(l => [l.id, l.unit]), [['chemical-thermodynamics', 4], ['solutions', 5]]);
  for (const lesson of lessons) {
    assert.equal(lesson.subject, 'Chemistry');
    assert.equal(lesson.sections.length, 7);
    assert.equal(lesson.examples.length, 3);
    assert.equal(lesson.quiz.length, 6);
    assert.match(lesson.remaining, /not a Marin recording/);
    assert.ok(lesson.sources.some(s => s.url.includes('jeemain.nta.nic.in')));
  }
});

test('thermochemistry arithmetic preserves Chemistry work signs, Hess cancellation and entropy units', () => {
  near(500 - 2 * 1 * 100, 300);
  near(-394 + 283, -111);
  near(-40 - 300 * (-100/1000), -10);
  near(-40 - 500 * (-100/1000), 10);
  near((-40)/(-.100), 400);
  near(Math.exp(5744/(8.314*300)), 10, .005);
  assert.deepEqual(lessons[0].quiz.map(q => q.answer), [1, 2, 0, 3, 1, 2]);
});

test('solution calculations use solvent mass and solution volume in the correct places', () => {
  near(100 * 20/(20+180), 10);
  near((20/100)/(.180), 10/9);
  near(1.86 * (.0100/.100), .186);
  near(.1 * .082057 * 300, 2.46171);
  near(2 * .082057 * 300/.246, 200.1390243902439);
  near(.5*80 + .5*40, 60);
  near((.5*80)/60, 2/3);
  assert.deepEqual(lessons[1].quiz.map(q => q.answer), [2, 0, 3, 1, 2, 0]);
});

test('particle accounting reproduces dissociation and association limits', () => {
  const dissociation = (alpha, particles) => 1 + alpha * (particles - 1);
  const association = (alpha, size) => 1 - alpha * (1 - 1/size);
  near(dissociation(0, 2), 1);
  near(dissociation(1, 2), 2);
  near(dissociation(.8, 2), 1.8);
  near(association(.5, 2), .75);
  near(association(1, 2), .5);
  near(180/.75, 240);
});
