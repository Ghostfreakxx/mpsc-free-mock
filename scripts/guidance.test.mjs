import test from 'node:test';
import assert from 'node:assert/strict';
import { offlineGuidance } from '../app/lib/study-guidance.ts';

const firstLink = prompt => offlineGuidance(prompt).links[0].href;

test('exam names route to that exam before generic practice words', () => {
  assert.equal(firstLink('NEET mock test'), '/neet');
  assert.equal(firstLink('CUET PG practice questions'), '/cuet-pg');
  assert.equal(firstLink('JEE maths practice'), '/jee');
  assert.equal(firstLink('help with neet biology'), '/neet');
  assert.equal(firstLink('calculus doubt'), '/jee');
  assert.equal(firstLink('Where can I practice MPSC questions?'), '/mock-test');
});

test('shared science subjects offer both NEET and JEE', () => {
  assert.deepEqual(offlineGuidance('physics doubt').links.map(link => link.href), ['/jee', '/neet']);
});

test('method advice links to the exam the student named', () => {
  assert.equal(firstLink('How do I improve my accuracy in NEET?'), '/neet');
  assert.equal(firstLink('How do I improve my accuracy?'), '/mock-test');
  assert.deepEqual(offlineGuidance('plan my JEE study today').links.map(link => link.href), ['/', '/jee']);
});

test('time-sensitive questions are never answered with guessed details', () => {
  for (const prompt of ['NEET exam date', 'MPSC syllabus', 'latest current affairs']) {
    assert.match(offlineGuidance(prompt).reply, /official notice/);
  }
});
