import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import ts from 'typescript';
const require = createRequire(import.meta.url);
require.extensions['.ts'] = (m, f) => m._compile(ts.transpileModule(fs.readFileSync(f, 'utf8'), { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText, f);
const { selectNeetFullMock } = require('../app/lib/neet-full-mock.ts');
const { examConfigs, startAttempt, selectAnswer, goTo, submitAttempt, scoreAttempt, restoreAttempt } = require('../app/lib/exam-simulator.ts');
const { lectures } = require('../app/jee/classes/lessons.ts');
const pool = JSON.parse(fs.readFileSync('app/data/neet-full-mock.json', 'utf8'));
const blueprint = JSON.parse(fs.readFileSync('app/data/neet-mock-blueprint.json', 'utf8'));

test('every seeded paper spans all 50 units with exact 45/45/90 quotas and no duplicates', () => {
  assert.equal(blueprint.length, 50);
  assert.equal(blueprint.reduce((n, u) => n + u.count, 0), pool.length);
  for (const seed of [0, 1, 2, 19, 20, 42, 999, 2147483647]) {
    const paper = selectNeetFullMock(pool, seed);
    assert.equal(paper.length, 180);
    assert.equal(new Set(paper.map(q => q.id)).size, 180);
    assert.equal(new Set(paper.map(q => q.question)).size, 180);
    for (const [subject, quota] of [['Physics', 45], ['Chemistry', 45], ['Biology', 90]]) assert.equal(paper.filter(q => q.subject === subject).length, quota);
    for (const u of blueprint) {
      const count = paper.filter(q => q.category === u.category).length;
      assert(u.subject === 'Biology' ? count === 9 : count === 2 || count === 3, u.category);
    }
  }
  assert.deepEqual(selectNeetFullMock(pool, 7), selectNeetFullMock(pool, 7));
  assert.notDeepEqual(selectNeetFullMock(pool, 7), selectNeetFullMock(pool, 8));
});

test('all published answers retain exact class provenance and are standalone', () => {
  for (const q of pool) {
    const slug = q.lessonHref.split('/').at(-1);
    if (q.authored) { assert.equal(q.sourceIndex, null); assert(q.id.startsWith("neet-mock-measurement-new-")); continue; }
    const original = q.lessonHref.includes('/shared/') ? lectures.find(l => l.id === slug).quiz[q.sourceIndex]
      : JSON.parse(fs.readFileSync(`app/data/neet-${slug}-lecture.json`, 'utf8')).quiz[q.sourceIndex];
    assert.deepEqual([q.question, q.options, q.answer, q.explanation], [original.question, original.options, original.options[original.answer], original.explanation], q.id);
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options).size, 4);
    assert(q.options.includes(q.answer));
    assert(!/\b(that|those|these|stated|same|this|specified|above|shown|previous|sequential|newly)\b/i.test(q.question), q.id);
  }
});

test('incomplete or corrupt pools fail rather than silently losing unit coverage', () => {
  assert.throws(() => selectNeetFullMock(pool.filter(q => q.category !== blueprint[0].category), 1), /coverage/);
  assert.throws(() => selectNeetFullMock([...pool, pool[0]], 1), /Duplicate/);
  assert.throws(() => selectNeetFullMock(pool.map(q => ({ ...q, options: [] })), 1), /Incomplete/);
});

test('full paper has a 180-minute deadline, 720 maximum and +4/−1/0 marking after restore', () => {
  const paper = selectNeetFullMock(pool, 12), byId = new Map(pool.map(q => [q.id, q]));
  let a = startAttempt(examConfigs.neet, 'nta', paper, 1000);
  assert.equal(a.deadline - a.startedAt, 180 * 60000);
  a = selectAnswer(a, paper[0].answer, 2000);
  a = goTo(a, 1, 3000);
  a = selectAnswer(a, paper[1].options.find(o => o !== paper[1].answer), 4000);
  a = restoreAttempt(JSON.stringify(a), byId);
  const result = scoreAttempt(submitAttempt(a, a.deadline + 60000), examConfigs.neet, byId);
  assert.equal(result.score, 3); assert.equal(result.max, 720);
  assert.deepEqual([result.correct, result.wrong, result.skipped], [1, 1, 178]);
  assert.equal(result.timeUsedMs, 180 * 60000);
});

test('new measurement questions have independent arithmetic checks', () => {
  const q = JSON.parse(fs.readFileSync('app/data/neet-mock-measurements.json', 'utf8'));
  assert.equal(q.length, 6);
  assert.equal(q[0].answer, `${(2.46 - 0.03).toFixed(2)} cm`);
  assert.equal(q[1].answer, `${1 + 2 * 2 + 1}%`);
  assert.equal(q[2].answer, `${(1 - 9 / 10).toFixed(1)} mm`);
  assert.equal(q[4].answer, `${(12.11 + 0.3).toFixed(1)} cm`);
  assert.equal(q[5].answer, `${2 + 3 * 1}%`);
});
