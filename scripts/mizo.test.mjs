import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { getReviewedQuestions } from "../app/data/reviewed-content.ts";
import { getMizoTranslation, mizoCategories } from "../app/data/mizo-translations.ts";
import { mizoManual } from "../app/data/mizo-manual.ts";

const questions = getReviewedQuestions("mpsc");

test("English source bank is unchanged; source edits require translation review", () => {
  assert.equal(createHash("sha256").update(JSON.stringify(questions)).digest("hex"), "314ac3e497d47eeb40c20827cfb89f9fd873f0c759de620d7d776a2b1c79b690");
});

test("all 250 questions and ten categories have complete draft translations", () => {
  assert.equal(questions.length, 250);
  for (const q of questions) {
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
  assert.equal(new Set(questions.map(q => q.category)).size, 10);
  assert.ok(Object.keys(mizoManual).every(id => questions.some(q => q.id === id)));
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

test("unknown questions and non-MPSC questions do not receive guessed translations", () => {
  const unknown = { ...questions[0], id: "future-1", question: "A new question?", sourceLocation: "New content" };
  assert.equal(getMizoTranslation(unknown), undefined);
  assert.equal(getMizoTranslation({ ...questions[0], streams: ["neet"] }), undefined);
  const concept = questions.find(q => q.sourceLocation.endsWith("original recall variant"));
  assert.equal(getMizoTranslation({ ...concept, options: ["Unknown concept", ...concept.options.slice(1)] }), undefined);
});
