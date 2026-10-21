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
  assert.equal(new Set(studyLessons.map(lesson => lesson.id)).size, 36);
  for (const subject of subjects) assert.equal(studyLessons.filter(lesson => lesson.subject === subject).length, subject === 'Physics' ? 12 : subject === 'Chemistry' ? 22 : 2);
  for (const lesson of studyLessons) {
    assert.ok(courseUnits[lesson.subject][lesson.unit - 1]);
    const newFoundation = lesson.id === 'chemistry-foundations';
    const expansion = ['atomic-spectra', 'periodic-trends', 'chemical-bonding', 'chemical-thermodynamics', 'solutions', 'equilibrium', 'redox-electrochemistry', 'chemical-kinetics', 'coordination-compounds', 'organic-principles', 'hydrocarbons', 'organic-halogens', 'organic-oxygen', 'organic-nitrogen', 'biomolecules', 'purification-analysis', 'p-block', 'd-f-block', 'practical-chemistry'].includes(lesson.id);
    const sections = { 'atomic-spectra': 6, 'periodic-trends': 6, 'chemical-bonding': 7, 'chemical-thermodynamics': 7, solutions: 7, equilibrium: 8, 'redox-electrochemistry': 8, 'chemical-kinetics': 8, 'coordination-compounds': 8, 'organic-principles': 8, hydrocarbons: 8, 'organic-halogens': 8, 'organic-oxygen': 8, 'organic-nitrogen': 8, biomolecules: 8, 'purification-analysis': 8, 'p-block': 8, 'd-f-block': 8, 'practical-chemistry': 8 };
    const extendedElectrochemistry = lesson.id === 'redox-electrochemistry';
    const expandedPractice = ['equilibrium', 'redox-electrochemistry', 'chemical-kinetics', 'coordination-compounds', 'organic-principles'].includes(lesson.id);
    const organicReactions = ['hydrocarbons','organic-halogens'].includes(lesson.id);
    const organicExpansion = lesson.id === 'organic-principles';
    const kineticsCoordination = ['chemical-kinetics', 'coordination-compounds'].includes(lesson.id);
    const physicalApplications = ['chemical-thermodynamics', 'solutions'].includes(lesson.id);
    assert.equal(lesson.sections.length, organicReactions ? 13 : organicExpansion ? 16 : kineticsCoordination ? 13 : physicalApplications ? 12 : extendedElectrochemistry ? 10 : newFoundation ? 8 : expansion ? sections[lesson.id] : 5);
    assert.equal(lesson.examples.length, organicReactions ? 6 : organicExpansion ? 11 : kineticsCoordination ? 10 : physicalApplications ? 6 : expandedPractice ? 7 : newFoundation ? 4 : 3);
    assert.equal(lesson.quiz.length, organicReactions ? 16 : organicExpansion ? 20 : kineticsCoordination ? 18 : physicalApplications || expandedPractice ? 12 : newFoundation ? 8 : expansion ? 6 : 5);
    assert.ok(lesson.remaining.length > 50);
    assert.ok(lesson.sections.flatMap(section => section.paragraphs).join(' ').split(/\s+/).length > 400);
    for (const question of lesson.quiz) {
      assert.equal(new Set(question.options).size, 4);
      assert.ok(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < 4);
      assert.ok(question.explanation.length > (newFoundation || expansion ? 30 : 60));
    }
    assert.ok(statSync(new URL(`../public/lectures/foundations/${lesson.id}.${newFoundation || expansion ? 'svg' : 'png'}`, import.meta.url)).size > (newFoundation || expansion ? 1000 : 5000));
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
  const [forces, atom, quadratic] = studyLessons.slice(3);
  assert.equal(correct(forces, 0), `${(15 - 6) / 3} m/s² right`);
  assert.equal(correct(forces, 2), '4 N');
  assert.equal(correct(atom, 0), String(12 - 2));
  assert.equal(correct(atom, 2), String(2 * (2 * 1 + 1)));
  assert.equal(correct(quadratic, 1), String(3 ** 2 - 4 * 2 * 5));
  assert.equal(correct(quadratic, 2), String(7 ** 2 - 2 * 10));
});
