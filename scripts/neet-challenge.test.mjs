import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
require.extensions['.ts'] = (m, f) => m._compile(ts.transpileModule(fs.readFileSync(f, 'utf8'), { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText, f);
const { selectNeetFullMock } = require('../app/lib/neet-full-mock.ts');
const foundation = JSON.parse(fs.readFileSync('app/data/neet-full-mock.json', 'utf8'));
const harder = JSON.parse(fs.readFileSync('app/data/neet-challenge-mock.json', 'utf8'));
const pool = [...foundation, ...harder];

test('challenge papers guarantee one new application question per unit without changing foundation selection', () => {
  assert.equal(harder.length, 50);
  assert.equal(new Set(harder.map(q => q.category)).size, 50);
  for (const seed of [0, 1, 19, 42, 999]) {
    const paper = selectNeetFullMock(pool, seed, true);
    assert.equal(paper.length, 180);
    assert.equal(paper.filter(q => q.challenge).length, 50);
    assert.equal(new Set(paper.filter(q => q.challenge).map(q => q.category)).size, 50);
    assert.deepEqual(['Physics','Chemistry','Biology'].map(s => paper.filter(q => q.subject === s).length), [45,45,90]);
    assert.deepEqual(selectNeetFullMock(pool, seed), selectNeetFullMock(foundation, seed));
  }
  assert.throws(() => selectNeetFullMock(pool.filter(q => q.id !== harder[0].id), 1, true), /Missing challenge/);
});

test('new question choices are unique, answers exist, and explanations include reasoning', () => {
  assert.equal(new Set(pool.map(q => q.question.toLowerCase().trim())).size, pool.length);
  for (const q of harder) {
    assert.equal(q.options.length, 4); assert.equal(new Set(q.options).size, 4);
    assert(q.options.includes(q.answer)); assert(q.explanation.length > 120, q.id);
    assert(q.lessonHref.startsWith('/neet/classes/'));
  }
});

test('independent multistep calculation checks support numerical answer keys', () => {
  const answer = (s, u) => harder.find(q => q.subject === s && q.unit === u).answer;
  assert.equal(answer('Physics', 2), `${0.5 * 10 * 10} m and ${50 / 10} m/s`);
  assert.equal(answer('Physics', 3), `${(10 - 4) / 3} m/s² and ${10 - 2} N`);
  assert.equal(answer('Physics', 4), `${Math.sqrt(2 * 10 * 5)} m/s and ${50 / 2.5} m`);
  assert.equal(answer('Physics', 8), `${2.5 * 8.3 * 100} J and ${Math.round(8.3 * 100)} J`);
  assert.equal(answer('Physics', 12), `${12 - 12 / 6} V and 5/6`);
  assert.equal(answer('Physics', 14), `${200 / 10} V and ${(40 / 200).toFixed(2)} A`);
  assert.equal(answer('Physics', 19), '6 mA and 36 mW');
  assert.equal(((12 - 6) / 500 - 6 / 1000) * 1000, 6);
  assert.equal(answer('Physics', 20), `${Math.round(2 * (0.49 - 0.15) * 500)} m/s and ${Math.round(((0.49 - 0.15) / 2 - 0.15) * 100)} cm`);
  assert.equal(answer('Chemistry', 1), `${(16 / 32) * 2 * 18} g water; ${4 - (16 / 32) * 2 * 2} g H₂ remain`);
  assert.equal(answer('Chemistry', 2), `${(13.6 * (1 - 1 / 9)).toFixed(2)} eV and 3`);
  assert.equal(answer('Chemistry', 5), `${(0.279 / (1.86 * 0.1)).toFixed(1)} and 0.50`);
  assert.equal(answer('Chemistry', 7), `${(0.30 - 0.0592 / 2 * Math.log10(100)).toFixed(4)} V; negative`);
  assert.equal(answer('Chemistry', 8), `${20 / 2 * 4} min`);
  assert.equal(answer('Chemistry', 20), `${((20.20 - 0.20) * 0.1 / 25).toFixed(4)} mol/L`);
  assert.equal(answer('Biology', 7), '1/2');
  assert.equal(answer('Biology', 9), `${2 * 2 ** 6}; it tolerates repeated high-temperature denaturation steps`);
  assert.equal(answer('Biology', 10), `${160 - 100 - 30 + 10 + 5}`);
});
