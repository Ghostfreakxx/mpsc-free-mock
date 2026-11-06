// Build-time only: reuse published class questions, preserving answer/explanation provenance.
import fs from 'node:fs';
import ts from 'typescript';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
require.extensions['.ts'] = (m, f) => m._compile(ts.transpileModule(fs.readFileSync(f, 'utf8'), { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText, f);
const { lectures } = require('../app/jee/classes/lessons.ts');
const map = JSON.parse(fs.readFileSync('app/data/neet-physics-chemistry-map.json', 'utf8'));
const units = [];
const questions = [];
const seen = new Set();
function add(subject, number, title, candidates, limit) {
  const category = `${subject} ${number}: ${title}`;
  const local = new Set();
  const eligible = candidates.filter(q => {
    if (q.options.length !== 4 || new Set(q.options).size !== 4 || !q.options.includes(q.answer)) return false;
    if (/\b(that|those|these|stated|same|this|specified|above|shown|previous|sequential|newly)\b/i.test(q.question)) return false;
    const key = q.question.trim().toLowerCase();
    if (seen.has(key) || local.has(key)) return false;
    local.add(key); return true;
  });
  const size = Math.min(limit, eligible.length);
  const unique = Array.from({ length: size }, (_, i) => eligible[Math.floor(i * eligible.length / size)]);
  unique.forEach(q => seen.add(q.question.trim().toLowerCase()));
  const minimum = subject === 'Biology' ? 9 : 3;
  if (unique.length < minimum) throw new Error(`${category}: only ${unique.length} unique questions`);
  units.push({ subject, number, title, category, count: unique.length });
  questions.push(...unique.map(q => ({ ...q, subject, category })));
}
for (const u of map.units) {
  const candidates = u.ids.flatMap(id => {
    const lesson = lectures.find(l => l.id === id);
    const recording = map.recordings.find(r => r.id === id);
    const paired = lesson.quiz.length === lesson.segments.length * 2;
    return lesson.quiz.flatMap((q, i) => {
      const chapter = paired ? Math.floor(i / 2) + 1 : null;
      if (chapter && !recording.focus.some(c => c.number === chapter)) return [];
      // These multi-topic legacy quizzes are not chapter-paired; curate the NEET core below.
      if (u.subject === 'Chemistry' && i >= 24) return [];
      if (id === 'p-block' && ![0, 1, 2, 3, 4, 6, 11].includes(i)) return [];
      return [{ id: `neet-mock-${id}-${i + 1}`, question: q.question, options: q.options, answer: q.options[q.answer], explanation: q.explanation,
        lessonHref: `/neet/classes/shared/${id}`, sourceIndex: i, ...(chapter ? { chapter } : {}) }];
    });
  });
  if (u.subject === "Physics" && u.unit === 1) candidates.push(...JSON.parse(fs.readFileSync("app/data/neet-mock-measurements.json", "utf8")).map((q, i) => ({ ...q, id: `neet-mock-measurement-new-${i + 1}`, lessonHref: "/neet/classes/shared/measurements", sourceIndex: null, authored: true })));
  add(u.subject, u.unit, u.title, candidates, 12);
}
const biology = [
  [1, 'Diversity in Living World', ['diversity-living-world']],
  [2, 'Structural Organisation in Animals and Plants', ['structural-organisation']],
  [3, 'Cell Structure and Function', ['cell-unit-life', 'biomolecules', 'cell-cycle-division']],
  [4, 'Plant Physiology', ['plant-physiology']], [5, 'Human Physiology', ['human-physiology']],
  [6, 'Reproduction', ['reproduction']], [7, 'Genetics and Evolution', ['genetics-evolution']],
  [8, 'Biology and Human Welfare', ['human-welfare']], [9, 'Biotechnology and Its Applications', ['biotechnology']],
  [10, 'Ecology and Environment', ['ecology']],
];
for (const [number, title, slugs] of biology) {
  // Round-robin across classes within a unit, so Cell Unit 3 includes all three recordings.
  const groups = slugs.map(slug => {
    const d = JSON.parse(fs.readFileSync(`app/data/neet-${slug}-lecture.json`, 'utf8'));
    return d.quiz.map((q, i) => ({ id: `neet-mock-bio-${slug}-${i + 1}`, question: q.question, options: q.options, answer: q.options[q.answer], explanation: q.explanation,
      lessonHref: `/neet/classes/${slug}`, sourceIndex: i, ...(d.quiz.length === d.chapters.length * 2 ? { chapter: Math.floor(i / 2) + 1 } : {}) }));
  });
  const candidates = Array.from({ length: Math.max(...groups.map(g => g.length)) }, (_, i) => groups.flatMap(g => g[i] ? [g[i]] : [])).flat();
  add('Biology', number, title, candidates, 18);
}
function write(path, value) { fs.writeFileSync(path + '.pending', JSON.stringify(value, null, 2) + '\n'); fs.renameSync(path + '.pending', path); }
write('app/data/neet-full-mock.json', questions);
write('app/data/neet-mock-blueprint.json', units);
console.log(`${questions.length} questions; ${units.length} syllabus units`);
for (const u of units) console.log(`${u.category}: ${u.count}`);
