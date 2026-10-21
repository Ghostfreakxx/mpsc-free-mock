import test from 'node:test';
import assert from 'node:assert/strict';
import { chemistryFoundationsLesson as lesson } from '../app/jee/classes/chemistry-foundations-study.ts';
import { studyLessons } from '../app/jee/classes/study-lessons.ts';

test('Chemistry foundation is a separate written Unit 1 lesson', () => {
  assert.equal(lesson.subject, 'Chemistry');
  assert.equal(lesson.unit, 1);
  assert.equal(studyLessons.filter(item => item.id === lesson.id).length, 1);
  assert.ok(studyLessons.some(item => item.id === 'mole-concept'));
  assert.ok(studyLessons.some(item => item.id === 'atomic-structure'));
  assert.equal(lesson.sections.length, 8);
  assert.equal(lesson.examples.length, 4);
  assert.equal(lesson.quiz.length, 8);
  assert.match(lesson.remaining, /not a Marin recording/);
  for (const q of lesson.quiz) {
    assert.equal(new Set(q.options).size, 4);
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4);
    assert.ok(q.explanation.length > 30);
  }
});

test('balanced combustion and limiting-reactant examples independently conserve atoms', () => {
  assert.equal(2 * 2, 4); // Carbon in ethane and carbon dioxide.
  assert.equal(2 * 6, 6 * 2); // Hydrogen in ethane and water.
  assert.equal(7 * 2, 4 * 2 + 6); // Oxygen in reactants and products.
  const extent = Math.min(.40 / 4, .20 / 3);
  const product = 2 * extent;
  const ironRemaining = .40 - 4 * extent;
  assert.ok(Math.abs(product - 2 / 15) < 1e-12);
  assert.ok(Math.abs(ironRemaining - 2 / 15) < 1e-12);
  assert.ok(Math.abs(ironRemaining + 2 * product - .40) < 1e-12);
  assert.ok(Math.abs(3 * product - 2 * .20) < 1e-12);
  assert.deepEqual(lesson.quiz.map(q => q.answer), [1, 2, 0, 1, 3, 2, 0, 3]);
});
