import assert from 'node:assert/strict';
import { reviewedQuestions, getReviewedQuestions, sources, notePacks, topics } from '../app/data/reviewed-content.ts';

const ids = new Set();
const prompts = new Set();
assert.ok(reviewedQuestions.length > 0, 'Published bank must not be empty');
for (const question of reviewedQuestions) {
  assert.ok(!ids.has(question.id), `Duplicate ID: ${question.id}`);
  ids.add(question.id);
  const prompt = question.question.toLowerCase().replace(/\s+/g, ' ').trim();
  assert.ok(prompt && !prompts.has(prompt), `Missing or duplicate prompt: ${question.id}`);
  prompts.add(prompt);
  assert.equal(question.options.length, 4, question.id);
  assert.equal(new Set(question.options.map(option => option.trim().toLowerCase())).size, 4, question.id);
  assert.ok(question.options.every(option => option.trim()), question.id);
  assert.equal(question.options.filter(option => option === question.answer).length, 1, question.id);
  assert.ok(question.explanation.trim() && question.sourceLocation.trim(), question.id);
  assert.equal(new URL(sources[question.sourceId].url).protocol, 'https:');
  assert.equal(question.kind, 'original', 'PYQs require a separate paper/final-key matching workflow');
  assert.match(question.reviewedOn, /^\d{4}-\d{2}-\d{2}$/);
  assert.ok(question.streams.length > 0);
}
for (const stream of ['mpsc', 'neet', 'jee', 'cuet-pg']) {
  const bank = getReviewedQuestions(stream);
  assert.ok(bank.length > 0, `${stream} cannot silently validate zero questions`);
  console.log(`${stream}: ${bank.length} published questions`);
}
assert.equal(new Set(notePacks.map(pack => pack.id)).size, notePacks.length);
for (const pack of notePacks) {
  assert.ok(pack.topicIds.length > 0);
  for (const id of pack.topicIds) assert.ok(topics.some(topic => topic.id === id), `${pack.id}: missing topic ${id}`);
}
console.log(`Validated structure and references for ${ids.size} unique questions and ${notePacks.length} note packs. Factual review is a separate editorial check.`);
