import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { LAW_SUBJECTS, MOCK_LENGTH, MOCK_SECONDS } from '../app/law/mjs/syllabus.ts';
import { lawQuestionProblems, promptKey, publish, similarity } from '../app/law/mjs/bank-rules.ts';
import { allocate, buildPaper, paperSeconds, restoreAttempt, scoreAttempt, isPublishedLawBank } from '../app/law/mjs/mock.ts';

// The Mizoram Judicial Service (Civil Judge) prelims bank: app/data/law-mjs/<subject>.json.
const files = Object.fromEntries(LAW_SUBJECTS.map(subject => [subject.id, JSON.parse(fs.readFileSync(new URL(`../app/data/law-mjs/${subject.id}.json`, import.meta.url), 'utf8'))]));
const all = LAW_SUBJECTS.flatMap(subject => files[subject.id]);

test('the syllabus plan is 600 questions and the mock blueprint is 100', () => {
  assert.equal(LAW_SUBJECTS.length, 11);
  assert.equal(LAW_SUBJECTS.reduce((sum, subject) => sum + subject.target, 0), 600);
  assert.equal(LAW_SUBJECTS.reduce((sum, subject) => sum + subject.mockShare, 0), MOCK_LENGTH);
  assert.equal(MOCK_SECONDS, 7200);
});

test('every question is well formed and filed under its own subject', () => {
  for (const subject of LAW_SUBJECTS) {
    assert.ok(Array.isArray(files[subject.id]), `${subject.id}.json must be an array`);
    const problems = files[subject.id].flatMap(question => lawQuestionProblems(question, subject.id));
    assert.deepEqual(problems, [], `${subject.id}.json`);
  }
});

test('ids are unique and no subject exceeds its planned size', () => {
  const ids = all.map(question => question.id);
  assert.equal(new Set(ids).size, ids.length, 'duplicate question id');
  for (const subject of LAW_SUBJECTS) assert.ok(files[subject.id].length <= subject.target, `${subject.id} has more than ${subject.target} questions`);
});

test('a complete subject keeps the difficulty mix near 30% easy, 50% medium, 20% hard', () => {
  for (const subject of LAW_SUBJECTS) {
    const questions = files[subject.id];
    if (questions.length < subject.target) continue;
    const share = level => questions.filter(question => question.difficulty === level).length / questions.length;
    assert.ok(Math.abs(share('easy') - 0.3) <= 0.05, `${subject.id}: easy share ${share('easy')}`);
    assert.ok(Math.abs(share('medium') - 0.5) <= 0.05, `${subject.id}: medium share ${share('medium')}`);
    assert.ok(Math.abs(share('hard') - 0.2) <= 0.05, `${subject.id}: hard share ${share('hard')}`);
  }
});

test('no repeated or near-duplicate questions', () => {
  const seen = new Map();
  for (const question of all) {
    const key = promptKey(question.question);
    assert.ok(!seen.has(key), `${question.id} repeats ${seen.get(key)}`);
    seen.set(key, question.id);
  }
  const near = [];
  for (let i = 0; i < all.length; i += 1) for (let j = i + 1; j < all.length; j += 1) {
    if (all[i].subject === all[j].subject && similarity(all[i].question, all[j].question) >= 0.8) near.push(`${all[i].id} ~ ${all[j].id}`);
  }
  assert.deepEqual(near, [], 'near-duplicate prompts');
});

test('flagged questions stay off the student bank until a reviewer clears them', () => {
  const base = { subject: 'coi', difficulty: 'easy', question: 'Which Article of the Constitution deals with this example?', options: ['A', 'B', 'C', 'D'], answerIndex: 0, explanation: 'An explanation that is long enough to pass the length check.' };
  const flag = { kind: 'supreme-court-judgment', note: 'Check the ruling.' };
  const published = publish([{ ...base, id: 'coi-901' }, { ...base, id: 'coi-902', review: { flags: [flag] } }, { ...base, id: 'coi-903', review: { flags: [flag], clearedOn: '2026-11-02' } }]);
  assert.deepEqual(published.map(question => question.id), ['coi-901', 'coi-903']);
  assert.ok(published.every(question => !('review' in question)), 'reviewer notes must not reach the browser');
  assert.ok(isPublishedLawBank(published));
  assert.deepEqual(lawQuestionProblems({ ...base, id: 'coi-904', review: { flags: [] } }, 'coi'), ['coi-904: review needs at least one flag']);
  assert.ok(lawQuestionProblems({ ...base, id: 'cpc-001' }, 'coi').length > 0, 'id prefix must match the file');
  const published_ = publish(all);
  const held = all.length - published_.length;
  console.log(`Law bank: ${all.length} questions written, ${published_.length} published, ${held} waiting for review`);
});

// A synthetic full bank, for the mock-test rules.
const fake = LAW_SUBJECTS.flatMap(subject => Array.from({ length: subject.target }, (_, index) => ({
  id: `${subject.id}-${String(index + 1).padStart(3, '0')}`, subject: subject.id, difficulty: 'medium',
  question: `Question ${index}`, options: ['a', 'b', 'c', 'd'], answerIndex: index % 4, explanation: 'x',
})));
const byId = new Map(fake.map(question => [question.id, question]));

test('a full mock follows the syllabus blueprint: 100 questions in 2 hours', () => {
  const paper = buildPaper(fake, 7);
  assert.equal(paper.length, 100);
  assert.equal(new Set(paper).size, 100);
  assert.equal(paperSeconds(paper.length), 7200);
  for (const subject of LAW_SUBJECTS) assert.equal(paper.filter(id => id.startsWith(`${subject.id}-`)).length, subject.mockShare, subject.id);
  assert.deepEqual(buildPaper(fake, 7), paper, 'same seed, same paper');
  // Subject order follows the syllabus.
  const order = [...new Set(paper.map(id => id.split('-')[0]))];
  assert.deepEqual(order, LAW_SUBJECTS.map(subject => subject.id));
});

test('while the bank grows, the mock uses what exists and moves the shortfall', () => {
  assert.deepEqual(Object.values(allocate({ coi: 30 })).reduce((a, b) => a + b, 0), 30);
  const partial = allocate({ coi: 60, cpc: 60, bnss: 4 });
  assert.equal(partial.bnss, 4);
  assert.equal(partial.coi + partial.cpc + partial.bnss, 100);
  assert.equal(paperSeconds(30), 2160);
});

test('scoring is +1 per correct answer with no negative marking, per subject', () => {
  const paper = buildPaper(fake, 3);
  const answers = {};
  paper.forEach((id, index) => {
    if (index % 3 === 0) answers[id] = byId.get(id).answerIndex; // correct
    else if (index % 3 === 1) answers[id] = (byId.get(id).answerIndex + 1) % 4; // wrong
  });
  const result = scoreAttempt({ questionIds: paper, answers }, byId);
  assert.equal(result.total, 100);
  assert.equal(result.correct, 34);
  assert.equal(result.wrong, 33);
  assert.equal(result.unanswered, 33);
  assert.equal(result.score, 34, 'wrong answers cost nothing');
  assert.equal(result.subjects.length, 11);
  assert.equal(result.subjects.reduce((sum, row) => sum + row.correct, 0), 34);
});

test('a saved attempt is restored only when every field checks out', () => {
  const paper = buildPaper(fake, 5);
  const good = { version: 1, questionIds: paper, answers: { [paper[0]]: 2 }, current: 1, startedAt: 1000, deadline: 1000 + 7200 * 1000 };
  assert.deepEqual(restoreAttempt(JSON.stringify(good), byId), good);
  assert.equal(restoreAttempt('not json', byId), null);
  assert.equal(restoreAttempt(null, byId), null);
  assert.equal(restoreAttempt(JSON.stringify({ ...good, answers: { [paper[0]]: 7 } }), byId), null);
  assert.equal(restoreAttempt(JSON.stringify({ ...good, answers: { 'coi-999': 1 } }), byId), null);
  assert.equal(restoreAttempt(JSON.stringify({ ...good, questionIds: [...paper.slice(1), 'zzz-001'] }), byId), null);
  assert.equal(restoreAttempt(JSON.stringify({ ...good, current: 100 }), byId), null);
  assert.equal(restoreAttempt(JSON.stringify({ ...good, deadline: good.startedAt + 9 * 3600 * 1000 }), byId), null, 'cannot extend the time limit');
});
