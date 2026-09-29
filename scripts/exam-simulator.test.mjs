import test from 'node:test';
import assert from 'node:assert/strict';
import { getReviewedQuestions } from '../app/data/reviewed-content.ts';
import {
  addToHistory, attemptOnArrival, clearAnswer, examConfigs, statusCounts, summarize, goTo, maxLength, questionStatus, restoreAttempt, scoreAttempt,
  selectAnswer, selectQuestions, startAttempt, submitAttempt, toggleMark, formatClock,
} from '../app/lib/exam-simulator.ts';

const jee = examConfigs.jee;
const jeePool = getReviewedQuestions('jee');
const byId = new Map(jeePool.map(question => [question.id, question]));
const wrongOption = question => question.options.find(option => option !== question.answer);

test('papers are balanced by subject weight, reproducible and within the bank', () => {
  for (const config of Object.values(examConfigs)) {
    const pool = getReviewedQuestions(config.stream);
    for (const length of config.lengths) {
      const paper = selectQuestions(config, pool, length, 7);
      assert.equal(paper.length, Math.min(length, pool.length), `${config.id} ${length}`);
      assert.equal(new Set(paper.map(question => question.id)).size, paper.length, `${config.id} duplicates`);
      assert.ok(length <= maxLength(config, pool) || paper.length === pool.length);
    }
  }
  const paper = selectQuestions(jee, jeePool, 30, 42);
  const counts = paper.reduce((all, question) => ({ ...all, [question.subject]: (all[question.subject] ?? 0) + 1 }), {});
  assert.deepEqual(counts, { Physics: 10, Chemistry: 10, Mathematics: 10 });
  assert.deepEqual(selectQuestions(jee, jeePool, 30, 42).map(q => q.id), paper.map(q => q.id));
  assert.notDeepEqual(selectQuestions(jee, jeePool, 30, 43).map(q => q.id), paper.map(q => q.id));

  // NEET weights Biology double; when a subject runs short, the others fill the gap.
  const neet = selectQuestions(examConfigs.neet, getReviewedQuestions('neet'), 40, 1);
  const neetCounts = neet.reduce((all, question) => ({ ...all, [question.subject]: (all[question.subject] ?? 0) + 1 }), {});
  assert.deepEqual(neetCounts, { Physics: 10, Chemistry: 10, Biology: 20 });
  assert.deepEqual([...new Set(neet.map(q => q.subject))], ['Physics', 'Chemistry', 'Biology']);
  const tiny = [...jeePool.filter(q => q.subject === 'Physics').slice(0, 2), ...jeePool.filter(q => q.subject !== 'Physics').slice(0, 20)];
  assert.equal(selectQuestions(jee, tiny, 12, 1).filter(q => q.subject === 'Physics').length, 2);
  assert.equal(selectQuestions(jee, tiny, 12, 1).length, 12);
});

test('time limit follows the per-question budget and time is banked per question', () => {
  const paper = selectQuestions(jee, jeePool, 15, 3);
  let attempt = startAttempt(jee, 'nta', paper, 1_000);
  assert.equal(attempt.deadline - attempt.startedAt, 15 * 144 * 1000);
  attempt = goTo(attempt, 4, 31_000);
  attempt = goTo(attempt, 0, 41_000);
  assert.equal(attempt.responses[paper[0].id].timeMs, 30_000);
  assert.equal(attempt.responses[paper[4].id].timeMs, 10_000);
  // Time after the deadline is never counted.
  attempt = submitAttempt(attempt, attempt.deadline + 60_000);
  assert.equal(attempt.submittedAt, attempt.deadline);
  assert.equal(attempt.responses[paper[0].id].timeMs, 30_000 + (attempt.deadline - 41_000));
});

test('palette statuses follow the CBT convention', () => {
  const paper = selectQuestions(jee, jeePool, 15, 3);
  let attempt = startAttempt(jee, 'nta', paper, 0);
  assert.equal(questionStatus(attempt.responses[paper[1].id]), 'not-visited');
  assert.equal(questionStatus(attempt.responses[paper[0].id]), 'not-answered');
  attempt = toggleMark(attempt, 1);
  assert.equal(questionStatus(attempt.responses[paper[0].id]), 'marked');
  attempt = selectAnswer(attempt, paper[0].answer, 2);
  assert.equal(questionStatus(attempt.responses[paper[0].id]), 'answered-marked');
  attempt = toggleMark(attempt, 3);
  assert.equal(questionStatus(attempt.responses[paper[0].id]), 'answered');
  attempt = clearAnswer(attempt, 4);
  assert.equal(questionStatus(attempt.responses[paper[0].id]), 'not-answered');
});

test('scoring applies +4/-1, counts answered-and-marked, and ignores changes after submission', () => {
  const paper = selectQuestions(jee, jeePool, 15, 5);
  let attempt = startAttempt(jee, 'nta', paper, 0);
  // 6 correct (one of them marked for review), 3 wrong, 6 skipped.
  for (let i = 0; i < 9; i += 1) {
    attempt = goTo(attempt, i, i * 100_000);
    attempt = selectAnswer(attempt, i < 6 ? paper[i].answer : wrongOption(paper[i]), i * 100_000 + 90_000);
  }
  attempt = goTo(attempt, 2, 1_000_000);
  attempt = toggleMark(attempt, 1_000_001);
  attempt = submitAttempt(attempt, 1_100_000);
  const frozen = selectAnswer(attempt, wrongOption(paper[0]), 1_200_000);
  assert.deepEqual(frozen, attempt);

  const result = scoreAttempt(attempt, jee, byId);
  assert.equal(result.score, 6 * 4 - 3);
  assert.equal(result.max, 60);
  assert.deepEqual([result.correct, result.wrong, result.skipped], [6, 3, 6]);
  assert.equal(result.accuracy, 67);
  assert.equal(result.bySubject.reduce((sum, subject) => sum + subject.score, 0), result.score);
});

test('fast wrong answers are reported as likely guesses with the score if skipped', () => {
  const paper = selectQuestions(jee, jeePool, 15, 9);
  let attempt = startAttempt(jee, 'nta', paper, 0);
  let now = 0;
  const answer = (index, option, seconds) => {
    attempt = goTo(attempt, index, now);
    now += seconds * 1000;
    attempt = selectAnswer(attempt, option, now);
  };
  answer(0, paper[0].answer, 100);
  answer(1, wrongOption(paper[1]), 10);  // fast and wrong: a likely guess
  answer(2, wrongOption(paper[2]), 20);  // fast and wrong
  answer(3, wrongOption(paper[3]), 120); // slow and wrong: not a guess
  attempt = goTo(attempt, 4, now);
  attempt = submitAttempt(attempt, now);
  const result = scoreAttempt(attempt, jee, byId);
  assert.equal(result.guesses.thresholdMs, 48_000);
  assert.equal(result.guesses.count, 2);
  assert.equal(result.guesses.marksLost, 2);
  assert.equal(result.score, 4 - 3);
  assert.equal(result.guesses.scoreIfSkipped, 3);
  assert.equal(result.slowest[0].question.id, paper[3].id);
});

test('answer changes are classified by first and final choice', () => {
  const paper = selectQuestions(jee, jeePool, 15, 11);
  let attempt = startAttempt(jee, 'nta', paper, 0);
  attempt = selectAnswer(attempt, paper[0].answer, 1);
  attempt = selectAnswer(attempt, wrongOption(paper[0]), 2);
  attempt = goTo(attempt, 1, 3);
  attempt = selectAnswer(attempt, wrongOption(paper[1]), 4);
  attempt = selectAnswer(attempt, paper[1].answer, 5);
  attempt = submitAttempt(attempt, 6);
  const result = scoreAttempt(attempt, jee, byId);
  assert.deepEqual(result.changes, { toCorrect: 1, fromCorrect: 1 });
});

test('MPSC negative marking options score fractional penalties exactly', () => {
  const config = examConfigs.mpsc;
  const pool = getReviewedQuestions('mpsc');
  const mpscById = new Map(pool.map(question => [question.id, question]));
  const paper = selectQuestions(config, pool, 25, 2);
  for (const [markingId, expected] of [['none', 2], ['quarter', 1.25], ['third', 1]]) {
    let attempt = startAttempt(config, markingId, paper, 0);
    attempt = selectAnswer(attempt, paper[0].answer, 1);
    attempt = goTo(attempt, 1, 2);
    attempt = selectAnswer(attempt, paper[1].answer, 3);
    for (const index of [2, 3, 4]) {
      attempt = goTo(attempt, index, 4);
      attempt = selectAnswer(attempt, wrongOption(paper[index]), 5);
    }
    assert.equal(scoreAttempt(submitAttempt(attempt, 6), config, mpscById).score, expected, markingId);
  }
});

test('saved attempts restore only when they still match the bank', () => {
  const paper = selectQuestions(jee, jeePool, 15, 13);
  let attempt = startAttempt(jee, 'nta', paper, 0);
  attempt = selectAnswer(attempt, paper[0].answer, 5);
  assert.deepEqual(restoreAttempt(JSON.stringify(attempt), byId), attempt);
  assert.equal(restoreAttempt(null, byId), null);
  assert.equal(restoreAttempt('not json', byId), null);
  assert.equal(restoreAttempt(JSON.stringify({ ...attempt, questionIds: ['gone-1'] }), byId), null);
  const staleAnswer = { ...attempt, responses: { ...attempt.responses, [paper[0].id]: { ...attempt.responses[paper[0].id], answer: 'Removed option' } } };
  assert.equal(restoreAttempt(JSON.stringify(staleAnswer), byId), null);
});

test('clock formatting', () => {
  assert.equal(formatClock(0), '0:00');
  assert.equal(formatClock(61_000), '1:01');
  assert.equal(formatClock(3 * 3600_000), '3:00:00');
  assert.equal(formatClock(59_001), '1:00');
});

test('full-length NEET follows the real 45/45/90 split', () => {
  const paper = selectQuestions(examConfigs.neet, getReviewedQuestions('neet'), 180, 21);
  const counts = paper.reduce((all, question) => ({ ...all, [question.subject]: (all[question.subject] ?? 0) + 1 }), {});
  assert.deepEqual(counts, { Physics: 45, Chemistry: 45, Biology: 90 });
  assert.ok(examConfigs.neet.lengths.includes(180));
});

test('submit summary counts are disjoint and add up to the paper length', () => {
  const paper = selectQuestions(jee, jeePool, 15, 17);
  let attempt = startAttempt(jee, 'nta', paper, 0);
  attempt = selectAnswer(attempt, paper[0].answer, 1);        // answered
  attempt = goTo(attempt, 1, 2); attempt = toggleMark(attempt, 3);  // marked
  attempt = goTo(attempt, 2, 4); attempt = selectAnswer(attempt, paper[2].answer, 5); attempt = toggleMark(attempt, 6); // answered and marked
  attempt = goTo(attempt, 3, 7);                              // not answered
  const counts = statusCounts(attempt);
  assert.deepEqual(counts, { 'not-visited': 11, 'not-answered': 1, answered: 1, marked: 1, 'answered-marked': 1 });
  assert.equal(Object.values(counts).reduce((a, b) => a + b, 0), paper.length);
});

test('history records each attempt once, newest first, capped at ten', () => {
  const paper = selectQuestions(jee, jeePool, 15, 19);
  const attempt = submitAttempt(startAttempt(jee, 'nta', paper, 1000), 5000);
  const summary = summarize(attempt, scoreAttempt(attempt, jee, byId));
  let history = addToHistory([], summary);
  history = addToHistory(history, summary);
  assert.equal(history.length, 1);
  const legacy = { examId: 'jee', finishedAt: 1, score: 0, max: 60, count: 15, accuracy: null };
  history = addToHistory([legacy], summary);
  assert.deepEqual(history.map(item => item.startedAt), [1000, undefined]);
  for (let i = 0; i < 12; i += 1) history = addToHistory(history, { ...summary, startedAt: 2000 + i });
  assert.equal(history.length, 10);
  assert.equal(history[0].startedAt, 2011);
});

test('a link to a specific exam replaces a finished paper but never an unfinished one', () => {
  const paper = selectQuestions(jee, jeePool, 15, 23);
  const running = startAttempt(jee, 'nta', paper, 0);
  const finished = submitAttempt(running, 10);
  assert.equal(attemptOnArrival(finished, 'neet'), null);
  assert.equal(attemptOnArrival(finished, null), finished);
  assert.equal(attemptOnArrival(finished, 'unknown-exam'), finished);
  assert.equal(attemptOnArrival(running, 'neet'), running);
  assert.equal(attemptOnArrival(null, 'neet'), null);
});
