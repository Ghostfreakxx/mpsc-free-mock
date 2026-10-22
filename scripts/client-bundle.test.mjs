import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Browser code must not import the full question bank or the Mizo translation engine: they would be
// bundled into every page's JavaScript. Pages get their stream's questions from /question-bank/<stream>
// (built from app/data/practice-data.ts) and small Mizo constants from app/data/mizo-meta.ts.
const heavy = /^(?:\.\.?\/)+(?:data\/)?(reviewed-content|mizo-translations|mizo-concepts|mizo-manual|practice-data|additional-questions|expanded-practice|[a-z-]*-topics)(?:\.ts)?$/;

function* sourceFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* sourceFiles(full);
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) yield full;
  }
}

test('client components import no question-bank or Mizo-engine modules at runtime', () => {
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

test('the rule catches a runtime import and allows a type-only one', () => {
  assert.ok(heavy.test('./data/reviewed-content'));
  assert.ok(heavy.test('../data/mizo-translations'));
  assert.ok(heavy.test('../data/batch-four-topics'));
  assert.ok(!heavy.test('./data/mizo-meta'));
  assert.ok(!/^import\s+(?!type\b)/.test('import type { PracticeQuestion } from "./data/practice-data";'));
});
