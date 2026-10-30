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
    const sections = { 'atomic-spectra': 6, 'periodic-trends': 6, 'chemical-bonding': 7, 'chemical-thermodynamics': 7, solutions: 7, equilibrium: 8, 'redox-electrochemistry': 8, 'chemical-kinetics': 8, 'coordination-compounds': 8, 'organic-principles': 8, hydrocarbons: 8, 'organic-halogens': 8, 'organic-oxygen': 8, 'organic-nitrogen': 8, biomolecules: 8, 'purification-analysis': 8, 'p-block': 25, 'd-f-block': 8, 'practical-chemistry': 8 };
    const extendedElectrochemistry = lesson.id === 'redox-electrochemistry';
    const expandedEquilibrium = lesson.id === 'equilibrium';
    const moleAnalysisDF = ['mole-concept','purification-analysis','d-f-block'].includes(lesson.id);
    const moleAnalysisSections = {'mole-concept':22,'purification-analysis':25,'d-f-block':25};
    const atomicBondingPeriodic = ['atomic-structure','chemical-bonding','periodic-trends'].includes(lesson.id);
    const atomicBondingSections = {'atomic-structure':26,'chemical-bonding':28,'periodic-trends':23};
    const expandedPractice = ['equilibrium', 'redox-electrochemistry', 'chemical-kinetics', 'coordination-compounds', 'organic-principles'].includes(lesson.id);
    const extendedChemistry = ['hydrocarbons','organic-halogens','organic-oxygen','organic-nitrogen','biomolecules','practical-chemistry'].includes(lesson.id);
    const organicExpansion = lesson.id === 'organic-principles';
    const kineticsCoordination = ['chemical-kinetics', 'coordination-compounds'].includes(lesson.id);
    const physicalApplications = ['chemical-thermodynamics', 'solutions'].includes(lesson.id);
    assert.equal(lesson.sections.length, ['chemical-thermodynamics','solutions'].includes(lesson.id)?37:lesson.id==='equilibrium'?33:lesson.id==='redox-electrochemistry'?35:lesson.id==='atomic-structure'?30:lesson.id==='chemical-bonding'?32:['chemical-kinetics','practical-chemistry'].includes(lesson.id)?33:['organic-halogens','organic-nitrogen'].includes(lesson.id)?33:['hydrocarbons','biomolecules'].includes(lesson.id)?33:lesson.id==='periodic-trends'?27:lesson.id==='coordination-compounds'?33: lesson.id==='mole-concept'?26:lesson.id==='organic-principles'?32: ['p-block','d-f-block'].includes(lesson.id)?33: lesson.id==='equilibrium'?29:lesson.id==='redox-electrochemistry'?31: ['chemical-thermodynamics','solutions'].includes(lesson.id)?33: lesson.id==='organic-oxygen'?33: ['purification-analysis','practical-chemistry'].includes(lesson.id)?29: ['organic-nitrogen','biomolecules'].includes(lesson.id)?29: ['hydrocarbons','organic-halogens'].includes(lesson.id)?29: ['organic-oxygen','organic-nitrogen','biomolecules','practical-chemistry','hydrocarbons','organic-halogens'].includes(lesson.id)?25:["organic-halogens","organic-oxygen","organic-nitrogen","biomolecules","hydrocarbons","practical-chemistry"].includes(lesson.id) ? 21 : moleAnalysisDF ? moleAnalysisSections[lesson.id] : atomicBondingPeriodic ? atomicBondingSections[lesson.id] : ['hydrocarbons','organic-halogens','organic-oxygen','biomolecules','organic-nitrogen','practical-chemistry'].includes(lesson.id) ? 17 : extendedChemistry ? 13 : organicExpansion ? 28 : kineticsCoordination ? 29 : physicalApplications ? 29 : extendedElectrochemistry ? 27 : expandedEquilibrium ? 25 : newFoundation ? 8 : expansion ? sections[lesson.id] : 5);
    assert.equal(lesson.examples.length, ['chemical-thermodynamics','solutions'].includes(lesson.id)?24:['equilibrium','redox-electrochemistry'].includes(lesson.id)?25:lesson.id==='chemical-kinetics'?25:['atomic-structure','chemical-bonding','practical-chemistry'].includes(lesson.id)?21:['organic-halogens','organic-nitrogen'].includes(lesson.id)?21:['hydrocarbons','biomolecules'].includes(lesson.id)?21:lesson.id==='periodic-trends'?18:lesson.id==='coordination-compounds'?25: lesson.id==='mole-concept'?18:lesson.id==='organic-principles'?23: ['p-block','d-f-block'].includes(lesson.id)?21: ['equilibrium','redox-electrochemistry'].includes(lesson.id)?22: ['chemical-thermodynamics','solutions'].includes(lesson.id)?21: lesson.id==='organic-oxygen'?21: ['atomic-structure','chemical-bonding'].includes(lesson.id)?18: ['purification-analysis','practical-chemistry'].includes(lesson.id)?18: ['organic-nitrogen','biomolecules'].includes(lesson.id)?18: ['hydrocarbons','organic-halogens'].includes(lesson.id)?18: lesson.id==='organic-principles'?20:lesson.id==='mole-concept'?15:['p-block','d-f-block'].includes(lesson.id)?15:['atomic-structure','chemical-bonding','periodic-trends','purification-analysis'].includes(lesson.id)?15:['organic-oxygen','organic-nitrogen','biomolecules','practical-chemistry','hydrocarbons','organic-halogens'].includes(lesson.id)?15:["organic-halogens","organic-oxygen","organic-nitrogen","biomolecules","hydrocarbons","practical-chemistry"].includes(lesson.id) ? 12 : lesson.id === 'p-block' ? 12 : ['mole-concept','atomic-structure','chemical-bonding','periodic-trends'].includes(lesson.id) ? 12 : moleAnalysisDF ? (['purification-analysis','d-f-block'].includes(lesson.id)?12:9) : atomicBondingPeriodic ? 9 : ['hydrocarbons','organic-halogens','organic-oxygen','biomolecules','organic-nitrogen','practical-chemistry'].includes(lesson.id) ? 9 : extendedChemistry ? 6 : organicExpansion ? 17 : kineticsCoordination ? 22 : physicalApplications ? 18 : expandedEquilibrium ? 19 : extendedElectrochemistry ? 19 : expandedPractice ? 7 : newFoundation ? 4 : 3);
    assert.equal(lesson.quiz.length, ['chemical-thermodynamics','solutions'].includes(lesson.id)?58:['equilibrium','redox-electrochemistry'].includes(lesson.id)?58:['atomic-structure','chemical-bonding','chemical-kinetics'].includes(lesson.id)?58:lesson.id==='practical-chemistry'?56:['organic-halogens','organic-nitrogen'].includes(lesson.id)?56:['hydrocarbons','biomolecules'].includes(lesson.id)?56:lesson.id==='periodic-trends'?48:lesson.id==='coordination-compounds'?58: lesson.id==='mole-concept'?48:lesson.id==='organic-principles'?52: ['p-block','d-f-block'].includes(lesson.id)?58: ['equilibrium','redox-electrochemistry'].includes(lesson.id)?50: ['chemical-thermodynamics','solutions'].includes(lesson.id)?50: lesson.id==='organic-oxygen'?56: ['atomic-structure','chemical-bonding'].includes(lesson.id)?50: ['purification-analysis','practical-chemistry'].includes(lesson.id)?48: ['organic-nitrogen','biomolecules'].includes(lesson.id)?48: ['hydrocarbons','organic-halogens'].includes(lesson.id)?48: lesson.id==='organic-principles'?44:lesson.id==='mole-concept'?40:['p-block','d-f-block'].includes(lesson.id)?42:['periodic-trends','purification-analysis'].includes(lesson.id)?40:['organic-oxygen','organic-nitrogen','biomolecules','practical-chemistry','hydrocarbons','organic-halogens'].includes(lesson.id)?40:["organic-halogens","organic-oxygen","organic-nitrogen","biomolecules","hydrocarbons","practical-chemistry"].includes(lesson.id) ? 32 : lesson.id === 'p-block' ? 34 : ['atomic-structure','chemical-bonding'].includes(lesson.id) ? 42 : ['mole-concept','periodic-trends'].includes(lesson.id) ? 32 : moleAnalysisDF ? (lesson.id==='d-f-block'?34:lesson.id==='purification-analysis'?32:24) : atomicBondingPeriodic ? (lesson.id==='periodic-trends'?24:26) : ['hydrocarbons','organic-halogens','organic-oxygen','biomolecules','organic-nitrogen','practical-chemistry'].includes(lesson.id) ? 24 : extendedChemistry ? 16 : organicExpansion ? 36 : kineticsCoordination ? 50 : expandedEquilibrium ? 42 : extendedElectrochemistry ? 42 : physicalApplications ? 42 : expandedPractice ? 12 : newFoundation ? 8 : expansion ? 6 : 5);
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
