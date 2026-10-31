import assert from "node:assert/strict";
import test from "node:test";
import { getReviewedQuestions } from "../app/data/reviewed-content.ts";
import { getMizoTranslation } from "../app/data/mizo-translations.ts";
import { aptitudeTemplates } from "../app/data/aptitude-templates.ts";
import { aptitudeMizo } from "../app/data/mizo-aptitude.ts";
import { makeVariant, presentQuestion } from "../app/lib/question-presentation.ts";
import { CORRECT_TO_CLEAR, emptyProgress, readProgress, recordProgress, weakestTopic } from "../app/lib/practice-progress.ts";
import { advanceRotation, createRotation, restoreRotation } from "../app/lib/question-rotation.ts";

const mpsc = getReviewedQuestions("mpsc");
const templateOf = prompt => aptitudeTemplates.find(template => template.parse(prompt));
const aptitudeQuestions = [...mpsc, ...getReviewedQuestions("cuet-pg")].filter((question, index, all) => templateOf(question.question) && all.findIndex(other => other.id === question.id) === index);
const seeds = Array.from({ length: 60 }, (_, index) => index * 7919 + 13);

test("every aptitude question in the bank is rebuilt exactly by its template", () => {
  assert.ok(aptitudeQuestions.length >= 70, `${aptitudeQuestions.length} aptitude questions recognised`);
  for (const question of aptitudeQuestions) {
    const template = templateOf(question.question);
    const [prompt, answer, distractors, explanation, location] = template.build(template.parse(question.question));
    assert.equal(prompt, question.question, question.id);
    assert.equal(answer, question.answer, question.id);
    assert.deepEqual(new Set([answer, ...distractors]), new Set(question.options), question.id);
    assert.equal(explanation, question.explanation, question.id);
    assert.equal(location, question.sourceLocation, question.id);
  }
});

test("fresh-number versions are new, well-formed and self-consistent", () => {
  for (const question of aptitudeQuestions) {
    let made = 0;
    for (const seed of seeds) {
      const variant = makeVariant(question.question, seed, true);
      if (!variant) continue;
      made += 1;
      assert.notEqual(variant.question, question.question, question.id);
      assert.equal(variant.options.length, 4, question.id);
      assert.equal(new Set(variant.options.map(option => option.toLowerCase())).size, 4, `${question.id}: ${variant.options}`);
      assert.ok(variant.options.includes(variant.answer), question.id);
      assert.ok(variant.options.every(option => !/NaN|Infinity|(^|\s)-\d/.test(option)), `${question.id}: ${variant.options}`);
      // The same template reads the new prompt back and computes the same answer.
      const template = templateOf(variant.question);
      assert.equal(template, templateOf(question.question), question.id);
      assert.equal(template.build(template.parse(variant.question))[1], variant.answer, question.id);
      // Mizo is drafted for exactly the templates that have Mizo in the bank.
      assert.equal(Boolean(variant.mizo), Boolean(aptitudeMizo(question.question, question.answer)), question.id);
      if (variant.mizo) assert.ok(variant.mizo.explanation.includes(variant.answer), question.id);
    }
    assert.ok(made >= seeds.length * 0.9, `${question.id}: only ${made} of ${seeds.length} seeds gave a variant`);
  }
});

test("fresh numbers stay clean: whole rupees, kilometres and hours where the bank uses them", () => {
  for (const question of aptitudeQuestions) {
    for (const seed of seeds.slice(0, 20)) {
      const variant = makeVariant(question.question, seed);
      if (!variant) continue;
      assert.match(variant.answer, /^(Rs )?\d+(\.\d{1,2})?( km\/h| km| hours|%)?$/, `${question.id}: ${variant.answer}`);
    }
  }
});

test("the same template draft in Mizo is used for the bank and for fresh numbers", () => {
  for (const question of mpsc.filter(q => templateOf(q.question))) {
    const bank = getMizoTranslation(question);
    const shared = aptitudeMizo(question.question, question.answer);
    if (!bank) continue;
    assert.ok(shared, question.id);
    assert.equal(bank.question, shared.question, question.id);
    assert.equal(bank.explanation, shared.explanation, question.id);
  }
});

test("options are reshuffled per showing, reproducibly, and translations can follow the order", () => {
  const question = mpsc.find(q => !templateOf(q.question));
  const asWritten = presentQuestion(question, undefined, true);
  assert.deepEqual(asWritten.options, question.options, "saved states without a seed show the question as written");
  const orders = new Set();
  const answerPositions = new Set();
  for (const seed of seeds) {
    const shown = presentQuestion(question, seed, false);
    assert.deepEqual(presentQuestion(question, seed, false), shown, "same seed, same order");
    assert.deepEqual([...shown.options].sort(), [...question.options].sort());
    assert.deepEqual(shown.order.map(index => question.options[index]), shown.options);
    assert.equal(shown.answer, question.answer);
    assert.equal(shown.variant, null);
    orders.add(shown.options.join("|"));
    answerPositions.add(shown.options.indexOf(shown.answer));
  }
  assert.ok(orders.size >= 10, `${orders.size} different orders`);
  assert.equal(answerPositions.size, 4, "the answer lands in every position");
  // Non-aptitude questions never get fresh numbers.
  assert.equal(presentQuestion(question, seeds[0], true).variant, null);
  const aptitude = aptitudeQuestions[0];
  assert.ok(presentQuestion(aptitude, seeds[0], true).variant, "aptitude questions do when they come back");
  assert.equal(presentQuestion(aptitude, seeds[0], false).variant, null, "but not on their first showing");
});

test("rotation gives each showing a new seed and accepts states saved before seeds existed", () => {
  const ids = ["a", "b", "c", "d"];
  let random = 0.1;
  const next = () => (random = (random * 9301 + 0.49297) % 1);
  let state = createRotation(ids, next);
  const seen = new Set([state.seed]);
  for (let step = 0; step < 6; step += 1) {
    state = advanceRotation(state, ids, next);
    assert.ok(Number.isInteger(state.seed), "every showing has a seed");
    seen.add(state.seed);
  }
  assert.ok(seen.size >= 6, "seeds change between showings");
  const { seed: _unused, ...legacy } = createRotation(ids, next);
  const restored = restoreRotation(JSON.stringify(legacy), ids, next);
  assert.equal(restored.activeId, legacy.activeId);
  assert.equal(restored.seed, undefined);
  assert.equal(restoreRotation(JSON.stringify({ ...legacy, seed: -4 }), ids, next).activeId !== undefined, true, "a corrupt seed rebuilds the rotation");
});

test("the mistakes set adds misses, clears after two correct answers in a row, and validates saved data", () => {
  const q = { id: "percentages-3", category: "Percentages" };
  let progress = recordProgress(emptyProgress(), q, false);
  assert.equal(progress.mistakes[q.id], 0);
  progress = recordProgress(progress, q, true);
  assert.equal(progress.mistakes[q.id], 1);
  progress = recordProgress(progress, q, false);
  assert.equal(progress.mistakes[q.id], 0, "a miss resets the streak");
  for (let i = 0; i < CORRECT_TO_CLEAR; i += 1) progress = recordProgress(progress, q, true);
  assert.equal(q.id in progress.mistakes, false, "two in a row clears it");
  assert.deepEqual(progress.topics.Percentages, { answered: 5, correct: 3 });
  assert.equal(recordProgress(emptyProgress(), q, true).mistakes[q.id], undefined, "a first correct answer is not a mistake");

  assert.equal(readProgress(null), null);
  assert.equal(readProgress("not json"), null);
  assert.equal(readProgress("[1,2]"), null);
  assert.deepEqual(readProgress(JSON.stringify({
    mistakes: { good: 1, negative: -1, tooHigh: 9, text: "0" },
    topics: { Good: { answered: 4, correct: 3 }, Impossible: { answered: 1, correct: 2 }, Broken: null },
  })), { mistakes: { good: 1 }, topics: { Good: { answered: 4, correct: 3 } } });
});

test("the round-end suggestion picks the weakest topic, or an untried one, never the current topic", () => {
  const topics = ["Percentages", "History", "Geography", "Economics"];
  const stats = { Percentages: { answered: 10, correct: 9 }, History: { answered: 6, correct: 2 }, Geography: { answered: 2, correct: 0 } };
  assert.deepEqual(weakestTopic(stats, topics, "All"), { topic: "History", accuracy: 33 });
  // Geography has too few answers to judge; a topic never tried is suggested instead.
  assert.deepEqual(weakestTopic(stats, topics, "History"), { topic: "Economics", accuracy: null });
  assert.deepEqual(weakestTopic({ History: { answered: 5, correct: 5 } }, ["History", "Geography"], "All"), { topic: "Geography", accuracy: null });
  assert.equal(weakestTopic({}, ["History"], "History"), null);
});
