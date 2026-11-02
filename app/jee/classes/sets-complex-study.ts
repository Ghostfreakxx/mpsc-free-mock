import type { StudyLesson } from './course';
import { setsFunctionsAdditions as sets } from './sets-functions-additions.ts';
import { complexQuadraticsAdditions as complex } from './complex-quadratics-additions.ts';

export function extendSetsComplexLesson(lesson:StudyLesson) {
  const additions=lesson.id==='sets-and-functions'?sets:lesson.id==='quadratic-equations'?complex:undefined;
  if(!additions)return;
  lesson.sections.push(...additions.sections);
  lesson.examples.push(...additions.examples);
  lesson.quiz.push(...additions.quiz);
  lesson.sources.push(...additions.sources.filter(s=>!lesson.sources.some(old=>old.url===s.url)));
  if(lesson.id==='sets-and-functions'){
    lesson.title='Sets, relations and functions: classification, composition and inverses';
    lesson.summary='Set algebra and counting, relation properties, equivalence classes, one-one/onto functions, composition and inverse restrictions.';
    lesson.remaining='Companion to the ten-chapter Marin recording for Mathematics Unit 1. Core headings include set algebra, equivalence relations, function classification and composition; inverses and finite-map counts support their application. Further mixed, proof-based and timed practice remains. Original questions, not official PYQs; availability is not exhaustive syllabus completion.';
  }else{
    lesson.title='Complex numbers and quadratics: Argand geometry, roots and parameters';
    lesson.summary='Complex algebra, conjugates, modulus and argument, Argand geometry, real/complex quadratic roots, Vieta and parameter checks.';
    lesson.remaining='Companion to the ten-chapter Marin recording for Mathematics Unit 2. Covers the core complex-number and quadratic headings, with supporting common-root, degree-change and root-location examples. Wider mixed parameter cases and timed practice remain. Original questions, not official PYQs; this is not a claim of exhaustive problem coverage.';
  }
}
