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

test('the class library counts saved answers from hashes exactly as readAnswers does', async () => {
  const { quizFingerprint, readAnswerFingerprints } = await import('../app/jee/classes/progress.ts');
  const quiz = [
    { question: 'What is the SI unit of force?', options: ['newton', 'joule', 'watt', 'pascal'], answer: 0 },
    { question: 'Which quantity is a vector?', options: ['mass', 'speed', 'velocity', 'energy'], answer: 2 },
    { question: 'Unanswered question?', options: ['a', 'b', 'c', 'd'], answer: 1 },
  ];
  const cases = [
    JSON.stringify([{ question: quiz[0].question, option: 'joule' }, { question: quiz[1].question, option: 'velocity' }]),
    JSON.stringify([{ question: quiz[1].question, option: 'not an option' }, { question: 'Another lesson', option: 'newton' }]),
    JSON.stringify([{ question: quiz[2].question, option: 'b' }, null, 7, { question: 1, option: 'a' }]),
    'not json', null, '{}',
  ];
  const fingerprints = JSON.parse(JSON.stringify(quizFingerprint(quiz)));
  for (const raw of cases) assert.deepEqual(readAnswerFingerprints(raw, fingerprints), readAnswers(raw, quiz), String(raw));
});
