import type { StudyLesson } from './course';
import { practicalPreparationsAdditions as a } from './practical-preparations-additions.ts';
export function extendPracticalPreparationsLesson(l: StudyLesson) {
  if (l.id !== 'practical-chemistry') return;
  l.sections.push(...a.chapters.map(c => ({ title: c.title, formula: c.formula, paragraphs: [c.script] })));
  l.quiz.push(...a.quiz.map(q => ({ ...q, options: [...q.options] })));
  l.examples.push(...a.examples.map(e => ({ ...e, steps: [...e.steps] })));
  l.sources.push(...a.sources.filter(s => !l.sources.some(old => old.url === s.url)));
  l.remaining = 'Fifty-one recorded chapters with original practice. The prescribed preparations and experiment principles now have focused explanations, including aniline-yellow connectivity, hydrate ledgers, sol preparation clock stoichiometry, nitrate/sulfide confirmation, fusion detection and functional-group evidence. Further mixed practical-data questions and multication interference practice remain. This is not exhaustive problem coverage or official PYQs.';
}
