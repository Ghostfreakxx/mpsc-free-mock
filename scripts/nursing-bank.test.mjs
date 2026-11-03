import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { DIFFICULTY_TARGET, MOCK_MINUTES, MOCK_QUESTIONS, QUESTIONS_PER_CATEGORY, nursingCategories } from '../app/nursing/types.ts';
import {
  awaitsReview, isNursingQuestion, mockMinutes, readAttempt, readStats, recordPractice, scoreMock, seededRandom, selectMockQuestions, startMock,
  visibleQuestions,
} from '../app/nursing/nursing-logic.ts';
import { HIDE_UNREVIEWED_QUESTIONS } from '../app/data/nursing-config.ts';

// The Nursing bank: one file per category in app/data/nursing/<prefix>.json, 50 questions each when
// complete (15 easy, 25 medium, 10 hard). These checks run on every file, full or still filling.

const files = nursingCategories.map(category => ({
  category,
  questions: JSON.parse(fs.readFileSync(new URL(`../app/data/nursing/${category.prefix}.json`, import.meta.url), 'utf8')),
}));
const bank = files.flatMap(file => file.questions);

const normalise = text => text.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
const stop = new Set('the a an of in on to for and or is are was be by with which what most following who when how does do not at from as its it this that during should first nurse nurses patient patients'.split(' '));
const words = text => new Set(normalise(text).split(' ').filter(word => word.length > 2 && !stop.has(word)));
const overlap = (a, b) => {
  let shared = 0;
  for (const word of a) if (b.has(word)) shared += 1;
  return shared / Math.min(a.size, b.size);
};

test('every question is well formed and sits in its own category file, numbered in order', () => {
  for (const { category, questions } of files) {
    assert.ok(Array.isArray(questions), `${category.prefix}.json must be an array`);
    assert.ok(questions.length <= QUESTIONS_PER_CATEGORY, `${category.prefix}.json has more than ${QUESTIONS_PER_CATEGORY} questions`);
    questions.forEach((question, index) => {
      assert.ok(isNursingQuestion(question), `${category.prefix}.json item ${index + 1} is malformed: ${JSON.stringify(question).slice(0, 160)}`);
      assert.equal(question.category, category.name, `${question.id} is in the wrong file`);
      assert.equal(question.id, `${category.prefix}-${String(index + 1).padStart(3, '0')}`, `ids in ${category.prefix}.json must run 001, 002, ... in order`);
      const options = question.options.map(normalise);
      assert.equal(new Set(options).size, 4, `${question.id} repeats an option`);
      const sentences = question.explanation.split(/(?<=[.!?])\s+(?=[A-Z0-9])/).length;
      assert.ok(sentences >= 2 && sentences <= 3, `${question.id}: the explanation should be 2-3 sentences (found ${sentences})`);
    });
  }
});

test('a complete category has the agreed difficulty mix', () => {
  for (const { category, questions } of files) {
    if (questions.length < QUESTIONS_PER_CATEGORY) continue;
    const counts = { easy: 0, medium: 0, hard: 0 };
    for (const question of questions) counts[question.difficulty] += 1;
    assert.deepEqual(counts, DIFFICULTY_TARGET, `${category.prefix}.json difficulty mix`);
  }
});

test('no question is repeated or nearly repeated anywhere in the bank', () => {
  const seen = new Map();
  for (const question of bank) {
    const key = normalise(question.question);
    assert.ok(!seen.has(key), `${question.id} repeats ${seen.get(key)}`);
    seen.set(key, question.id);
  }
  // Same question and same right answer, worded a little differently.
  const items = bank.map(question => ({ id: question.id, stem: words(question.question), answer: normalise(question.options[question.answer]) }));
  for (let i = 0; i < items.length; i += 1) {
    for (let j = i + 1; j < items.length; j += 1) {
      const a = items[i], b = items[j];
      if (a.answer !== b.answer || Math.min(a.stem.size, b.stem.size) < 3) continue;
      assert.ok(overlap(a.stem, b.stem) < 0.8, `${a.id} and ${b.id} look like the same question`);
    }
  }
});

// --- Mock test logic, on a made-up full bank ---

const fake = nursingCategories.flatMap(category => Array.from({ length: QUESTIONS_PER_CATEGORY }, (_, index) => ({
  id: `${category.prefix}-${String(index + 1).padStart(3, '0')}`,
  category: category.name,
  difficulty: index < 15 ? 'easy' : index < 40 ? 'medium' : 'hard',
  question: `${category.name} sample ${index}`,
  options: ['A', 'B', 'C', 'D'],
  answer: index % 4,
  explanation: 'One. Two.',
})));
const fakeById = new Map(fake.map(question => [question.id, question]));

test('the made-up questions pass the format check', () => {
  assert.ok(fake.every(isNursingQuestion));
  assert.ok(!isNursingQuestion({ ...fake[0], id: 'aap-001' }), 'id prefix must match the category');
  assert.ok(!isNursingQuestion({ ...fake[0], answer: 4 }));
  assert.ok(!isNursingQuestion({ ...fake[0], options: ['A', 'B', 'C'] }));
});

test('a full mock has 100 different questions in 90 minutes, spread evenly', () => {
  for (let seed = 1; seed <= 20; seed += 1) {
    const paper = selectMockQuestions(fake, seededRandom(seed));
    assert.equal(paper.length, MOCK_QUESTIONS);
    assert.equal(new Set(paper.map(question => question.id)).size, MOCK_QUESTIONS);
    const per = nursingCategories.map(category => paper.filter(question => question.category === category.name).length);
    assert.ok(per.every(count => count === 9 || count === 10), `uneven spread ${per}`);
  }
  assert.equal(mockMinutes(MOCK_QUESTIONS), MOCK_MINUTES);
  const attempt = startMock(fake, 7, 1000);
  assert.equal(attempt.deadline - attempt.startedAt, MOCK_MINUTES * 60_000);
});

test('a small bank gives a shorter mock at the same pace, filling seats from other categories', () => {
  const small = fake.slice(0, 153); // three full categories and 3 questions of the fourth
  const paper = selectMockQuestions(small, seededRandom(3));
  assert.equal(paper.length, MOCK_QUESTIONS);
  assert.equal(paper.filter(question => question.category === nursingCategories[3].name).length, 3);
  assert.equal(selectMockQuestions(fake.slice(0, 20), seededRandom(3)).length, 20);
  assert.equal(mockMinutes(20), 18);
  assert.equal(startMock([], 1, 0), null);
});

test('scoring counts category scores and NORCET-style negative marking', () => {
  const attempt = startMock(fake, 11, 0);
  const first = fakeById.get(attempt.questionIds[0]);
  const second = fakeById.get(attempt.questionIds[1]);
  attempt.answers[0] = first.answer;
  attempt.answers[1] = (second.answer + 1) % 4;
  const result = scoreMock(attempt, fakeById);
  assert.equal(result.correct, 1);
  assert.equal(result.wrong, 1);
  assert.equal(result.attempted, 2);
  assert.equal(result.negativeMarked, 0.67);
  assert.equal(result.byCategory.reduce((sum, score) => sum + score.total, 0), MOCK_QUESTIONS);
});

test('saved attempts and stats are checked before use', () => {
  const attempt = startMock(fake, 5, 0);
  assert.deepEqual(readAttempt(JSON.stringify(attempt), fakeById), attempt);
  for (const bad of [null, '', '{', '[]', JSON.stringify({ ...attempt, version: 2 }),
    JSON.stringify({ ...attempt, questionIds: ['xyz-001', ...attempt.questionIds.slice(1)] }),
    JSON.stringify({ ...attempt, answers: attempt.answers.map(() => 7) }),
    JSON.stringify({ ...attempt, orders: attempt.orders.map(() => [0, 0, 1, 2]) }),
    JSON.stringify({ ...attempt, deadline: attempt.startedAt + 10 * 60 * 60_000 })]) {
    assert.equal(readAttempt(bad, fakeById), null);
  }
  assert.deepEqual(readStats('garbage'), { version: 1, categories: {}, mistakes: [] });
  const stats = readStats(JSON.stringify({ version: 1, categories: { fundamentals: { attempted: 3, correct: 2 }, bogus: { attempted: 1, correct: 1 }, anatomy: { attempted: 1, correct: 5 } }, mistakes: ['fon-001', 42, '<b>'] }));
  assert.deepEqual(stats, { version: 1, categories: { fundamentals: { attempted: 3, correct: 2 } }, mistakes: ['fon-001'] });
  const after = recordPractice(stats, fake[0], true);
  assert.deepEqual(after.mistakes, []);
  assert.deepEqual(after.categories.fundamentals, { attempted: 4, correct: 3 });
  assert.deepEqual(recordPractice(after, fake[1], false).mistakes, ['fon-002']);
});

// --- Hiding flagged questions until a reviewer has checked them ---

test('only flagged questions can be marked reviewed, and the filter hides exactly the unreviewed ones', () => {
  const base = fake[0];
  const flagged = { ...base, reviewNote: 'Sources differ.' };
  assert.ok(isNursingQuestion({ ...flagged, reviewed: true }));
  assert.ok(!isNursingQuestion({ ...base, reviewed: true }), 'reviewed needs a reviewNote');
  assert.ok(!isNursingQuestion({ ...flagged, reviewed: 'yes' }), 'reviewed must be true');
  assert.ok(!isNursingQuestion({ ...flagged, reviewed: false }), 'leave reviewed out instead of false');
  assert.ok(awaitsReview(flagged));
  assert.ok(!awaitsReview({ ...flagged, reviewed: true }));
  assert.ok(!awaitsReview(base));
  const list = [base, flagged, { ...flagged, id: 'fon-003', reviewed: true }];
  assert.deepEqual(visibleQuestions(list, true).map(question => question.id), [base.id, 'fon-003']);
  assert.equal(visibleQuestions(list, false).length, 3);
});

test('with the switch on, the visible bank still fills a full 100-question mock from every category', () => {
  const visible = visibleQuestions(bank, HIDE_UNREVIEWED_QUESTIONS);
  for (const category of nursingCategories) {
    assert.ok(visible.some(question => question.category === category.name), `${category.prefix}: every question is hidden`);
  }
  if (bank.length >= MOCK_QUESTIONS) assert.ok(visible.length >= MOCK_QUESTIONS, `only ${visible.length} visible questions`);
});
