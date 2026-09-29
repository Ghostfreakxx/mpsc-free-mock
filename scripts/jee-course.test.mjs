import test from 'node:test';
import assert from 'node:assert/strict';
import { statSync } from 'node:fs';
import { courseUnits, subjects } from '../app/jee/classes/course.ts';
import { studyLessons } from '../app/jee/classes/study-lessons.ts';

test('course map preserves all 54 baseline units across three subjects', () => {
  assert.deepEqual(subjects, ['Physics', 'Chemistry', 'Mathematics']);
  assert.equal(courseUnits.Physics.length, 20);
  assert.equal(courseUnits.Chemistry.length, 20);
  assert.equal(courseUnits.Mathematics.length, 14);
});

test('published written lessons have substantive content, practice and figures', () => {
  assert.equal(new Set(studyLessons.map(lesson => lesson.id)).size, 3);
  for (const lesson of studyLessons) {
    assert.ok(courseUnits[lesson.subject][lesson.unit - 1]);
    assert.equal(lesson.sections.length, 5);
    assert.equal(lesson.examples.length, 3);
    assert.equal(lesson.quiz.length, 5);
    assert.ok(lesson.remaining.length > 50);
    assert.ok(lesson.sections.flatMap(section => section.paragraphs).join(' ').split(/\s+/).length > 400);
    for (const question of lesson.quiz) {
      assert.equal(new Set(question.options).size, 4);
      assert.ok(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < 4);
      assert.ok(question.explanation.length > 60);
    }
    assert.ok(statSync(new URL(`../public/lectures/foundations/${lesson.id}.png`, import.meta.url)).size > 5000);
  }
});

test('numerical quiz keys match independently computed answers', () => {
  const [physics, chemistry, math] = studyLessons;
  const correct = (lesson, index) => lesson.quiz[index].options[lesson.quiz[index].answer];
  assert.equal(correct(physics, 0), `+${(60 - 20) / 10} m/s`);
  assert.equal(correct(physics, 2), `${0.5 * 3 * 2 ** 2} m`);
  assert.equal(correct(chemistry, 0), `${36 / 18} mol`);
  assert.equal(correct(chemistry, 1), `${(2 * 0.25).toFixed(2)} mol`);
  assert.equal(correct(chemistry, 3), `${Math.min(2 / 1, 3 / 3) * 2} mol`);
  assert.equal(correct(math, 0), String(2 ** 3));
  assert.equal(correct(math, 1), String(12 + 9 - 4));
  assert.equal(correct(math, 4), String(2 * 2 + 3));
});
