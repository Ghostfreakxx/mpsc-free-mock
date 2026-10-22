import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Browser code must not import the full question bank or the Mizo translation engine: they would be
// bundled into every page's JavaScript. Pages get their stream's questions from /question-bank/<stream>
// (built from app/data/practice-data.ts) and small Mizo constants from app/data/mizo-meta.ts.
// The same goes for the JEE class data (every lecture's cues and every written lesson): the class
// library gets slim summaries from app/jee/classes/library-summary.ts through its server page.
const heavy = /^(?:\.\.?\/)+(?:data\/)?(reviewed-content|mizo-translations|mizo-concepts|mizo-manual|practice-data|additional-questions|expanded-practice|[a-z-]*-topics|lessons|study-lessons(?:-two)?|library-summary|[a-z-]*-study|[a-z-]*-additions)(?:\.ts)?$|^(?:\.\.?\/)+data\/jee-[a-z-]+\.json$/;

function* sourceFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* sourceFiles(full);
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) yield full;
  }
}

test('client components import no question-bank, Mizo-engine or JEE class-data modules at runtime', () => {
  const offenders = [];
  for (const file of sourceFiles(fileURLToPath(new URL('../app', import.meta.url)))) {
    const source = fs.readFileSync(file, 'utf8');
    if (!/^\s*["']use client["']/.test(source)) continue;
    for (const match of source.matchAll(/^import\s+(?!type\b)[^;]*?from\s+["']([^"']+)["']/gm)) {
      if (heavy.test(match[1])) offenders.push(`${path.relative(process.cwd(), file)} imports ${match[1]}`);
    }
  }
  assert.deepEqual(offenders, [], 'Use `import type`, props from a server component, or /question-bank instead');
});

test('the lecture player loads class diagrams on demand', () => {
  const source = fs.readFileSync(new URL('../app/jee/classes/lecture-player.tsx', import.meta.url), 'utf8');
  const staticDiagrams = [...source.matchAll(/^import\s+(?!type\b)[^;]*?from\s+["'](\.\/[^"']*diagram[^"']*)["']/gm)].map(match => match[1]);
  assert.deepEqual(staticDiagrams, [], 'Load each diagram with next/dynamic, e.g. const WaveDiagram = dynamic(() => import("./wave-diagram"))');
  assert.match(source, /dynamic\(\(\) => import\("\.\/kinetics-diagram"\)\)/);
});

test('the rule catches a runtime import and allows a type-only one', () => {
  assert.ok(heavy.test('./data/reviewed-content'));
  assert.ok(heavy.test('../data/mizo-translations'));
  assert.ok(heavy.test('../data/batch-four-topics'));
  assert.ok(heavy.test('./lessons'));
  assert.ok(heavy.test('./study-lessons'));
  assert.ok(heavy.test('./chemistry-core-study.ts'));
  assert.ok(heavy.test('../../data/jee-units-lecture.json'));
  assert.ok(!heavy.test('./data/mizo-meta'));
  assert.ok(!heavy.test('./study-download'));
  assert.ok(!heavy.test('./practice-quiz'));
  assert.ok(!/^import\s+(?!type\b)/.test('import type { PracticeQuestion } from "./data/practice-data";'));
});
