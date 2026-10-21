import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { getReviewedQuestions } from "../app/data/reviewed-content.ts";
import { getMizoTranslation, mizoCategories, mizoPendingTopicIds } from "../app/data/mizo-translations.ts";
import { mizoManual } from "../app/data/mizo-manual.ts";

const questions = getReviewedQuestions("mpsc");
const topicOf = q => q.id.replace(/-\d+$/, "");
const pending = questions.filter(q => mizoPendingTopicIds.has(topicOf(q)));
const translatable = questions.filter(q => !mizoPendingTopicIds.has(topicOf(q)));
const batchThree = /^(union-polity|local-government|union-judiciary|public-finance|sixth-schedule|constitution-making|gandhi-national-movement|revolt-of-1857|india-location|climate-agreements|biodiversity-agreements|nutrition-vitamins|averages|ratio-proportion|discount-tax-commission)-\d+$/;

test("English source bank is unchanged; source edits require translation review", () => {
  // 2026-09-29: numerical distractor order changed; numerical translations reuse English options, so no text needs review.
  // 2026-10-20: percentage and simple-interest topics added with templated draft translations; the earlier 500 are unchanged.
  // 2026-10-21: third batch added (general studies in English, Mizo pending; aptitude templated); the earlier 526 are unchanged.
  assert.equal(createHash("sha256").update(JSON.stringify(questions)).digest("hex"), "10571f30938bb7315051539169889d6f3f3fa3a9df6430d522a64a8a03fb1e78");
  const earlier = questions.filter(q => !batchThree.test(q.id));
  assert.equal(createHash("sha256").update(JSON.stringify(earlier)).digest("hex"), "5756812783ab74e762df8e32e0f74127d3b141a55a90e6001d7edaf9ecc11f01");
  const first = earlier.filter(q => !/^(percentages|simple-interest)-/.test(q.id));
  assert.equal(createHash("sha256").update(JSON.stringify(first)).digest("hex"), "6fc03ee19174ee8614f96edf5146063182813a4ff4a61d43d970c82363d6da82");
});

test("all 556 translatable questions and fifteen categories have complete draft translations", () => {
  assert.equal(questions.length, 678);
  assert.equal(translatable.length, 556);
  for (const q of translatable) {
    const original = structuredClone(q);
    const translated = getMizoTranslation(q);
    assert.ok(translated, q.id);
    assert.equal(translated.status, "draft");
    assert.ok(translated.question.trim(), q.id);
    assert.ok(translated.explanation.trim(), q.id);
    assert.notEqual(translated.question, q.question, q.id);
    assert.equal(translated.options.length, 4, q.id);
    assert.equal(new Set(translated.options).size, 4, q.id);
    assert.ok(translated.options.every(option => option.trim()), q.id);
    assert.ok(mizoCategories[q.category], q.category);
    assert.deepEqual(q, original, "Translation must not mutate scoring or source data");
    assert.equal(translated.answer, undefined, "English bank remains the only answer key");
  }
  assert.equal(new Set(translatable.map(q => q.category)).size, 15);
  assert.ok(Object.keys(mizoManual).every(id => questions.some(q => q.id === id)));
});

test("general-studies topics awaiting a fluent Mizo writer get no guessed translation", () => {
  assert.equal(pending.length, 122);
  for (const q of pending) assert.equal(getMizoTranslation(q), undefined, q.id);
  // Only whole topics are pending, and none of the earlier translated bank is.
  assert.ok(pending.every(q => batchThree.test(q.id)));
});

test("known answer positions remain aligned in both languages", () => {
  const samples = {
    "political-science-1": "Mi zawng zawng tan",
    "mizoram-1": "20 February 1987",
    "mizoram-2": "1986-ah remna thuthlung, 1987-ah state",
    "mizoram-5": "Schedule 6-na",
    "economics-2": "Lei duh zat leh hralh tur pek chhuah zat",
    "history-2": "La chhiar chhuah theih a ni lo",
    "geography-2": "Chhim lam",
  };
  for (const [id, expected] of Object.entries(samples)) {
    const q = questions.find(q => q.id === id);
    assert.equal(getMizoTranslation(q).options[q.options.indexOf(q.answer)], expected, id);
  }
});

test("English grammar choices and tested sentences are preserved", () => {
  for (const q of questions.filter(q => q.subject === "English")) {
    const translated = getMizoTranslation(q);
    assert.deepEqual(translated.options, q.options);
    const sentence = q.question.match(/'(.+)'$/)?.[1];
    if (sentence) assert.ok(translated.question.includes(sentence));
  }
});

test("numerical translations retain the worked answer and numeric choices", () => {
  for (const q of questions.filter(q => q.sourceLocation.endsWith("original numerical variant"))) {
    const translated = getMizoTranslation(q);
    assert.deepEqual(translated.options, q.options, q.id);
    assert.ok(translated.explanation.includes(q.answer), q.id);
  }
});

test("percentage and interest translations keep the numeric choices and show the keyed answer", () => {
  const templated = questions.filter(q => /^(percentages|simple-interest|averages|ratio-proportion|discount-tax-commission)-/.test(q.id));
  assert.equal(templated.length, 56);
  for (const q of templated) {
    const translated = getMizoTranslation(q);
    assert.deepEqual(translated.options, q.options, q.id);
    assert.ok(translated.explanation.endsWith(`${q.answer}.`) || translated.explanation.includes(`= ${q.answer}.`), q.id);
    for (const number of q.question.match(/\d+(\.\d+)?/g)) assert.ok(translated.question.includes(number), `${q.id} keeps ${number}`);
  }
});

test("unknown questions and non-MPSC questions do not receive guessed translations", () => {
  const unknown = { ...questions[0], id: "future-1", question: "A new question?", sourceLocation: "New content" };
  assert.equal(getMizoTranslation(unknown), undefined);
  assert.equal(getMizoTranslation({ ...questions[0], streams: ["neet"] }), undefined);
  const concept = questions.find(q => q.sourceLocation.endsWith("original recall variant"));
  assert.equal(getMizoTranslation({ ...concept, options: ["Unknown concept", ...concept.options.slice(1)] }), undefined);
});
