import test from 'node:test';
import assert from 'node:assert/strict';
import { readAnswers, readPosition, serializeAnswers } from '../app/jee/classes/progress.ts';

const quiz = [{ question: 'One?', options: ['A', 'B'] }, { question: 'Two?', options: ['C', 'D'] }];

test('saved answers survive reordering and ignore changed questions or choices', () => {
  const saved = serializeAnswers({ 0: 1, 1: 0 }, quiz);
  assert.deepEqual(readAnswers(saved, quiz), { 0: 1, 1: 0 });
  assert.deepEqual(readAnswers(saved, [...quiz].reverse()), { 0: 0, 1: 1 });
  assert.deepEqual(readAnswers(saved, [{ question: 'One?', options: ['B', 'A'] }]), { 0: 0 });
  assert.deepEqual(readAnswers(saved, [{ question: 'Changed?', options: ['A', 'B'] }]), {});
  assert.deepEqual(readAnswers(saved, [{ question: 'One?', options: ['X', 'Y'] }]), {});
});

test('invalid saved answers are ignored; an empty attempt clears the score', () => {
  for (const raw of [null, '', '{', 'null', 'true', '{}', '[null, 2, "x"]', '[{"question":"One?","option":1}]']) {
    assert.deepEqual(readAnswers(raw, quiz), {});
  }
  assert.deepEqual(readAnswers(serializeAnswers({}, quiz), quiz), {});
  assert.deepEqual(readAnswers(serializeAnswers({ 0: 100 }, quiz), quiz), {});
});

test('playback positions are bounded, including small encoder padding at the end', () => {
  for (const raw of [null, '-1', 'NaN', 'Infinity', 'hello', '9999']) assert.equal(readPosition(raw, 100), 0);
  assert.equal(readPosition('42.5', 100), 42.5);
  assert.equal(readPosition('100.03', 100), 100);
});
