import assert from 'node:assert/strict';
import test from 'node:test';
import { practiceBankFile, practiceQuestions, mpscTranslations, downloadPacks, packContents } from '../app/data/practice-data.ts';
import { expandBank } from '../app/lib/question-bank-format.ts';

const used = ({ id, subject, category, question, options, answer, explanation, sourceLocation, reviewedOn, source, hint, wrongExplanations }) =>
  ({ id, subject, category, question, options, answer, explanation, sourceLocation, reviewedOn, source, ...(hint ? { hint } : {}), ...(wrongExplanations ? { wrongExplanations } : {}) });

test('the compact bank file expands to exactly the fields practice uses', () => {
  for (const stream of ['mpsc', 'neet', 'jee', 'cuet-pg']) {
    const file = JSON.parse(JSON.stringify(practiceBankFile(stream)));
    assert.equal(file.format, 2);
    assert.deepEqual(expandBank(file), practiceQuestions(stream).map(used), stream);
    // Each source is listed once, not repeated on every question.
    assert.ok(Object.keys(file.sources).length < file.questions.length / 5, stream);
    assert.ok(file.questions.every(question => !('streams' in question) && !('kind' in question) && !('source' in question)), stream);
    assert.ok(JSON.stringify(file).length < JSON.stringify(practiceQuestions(stream)).length * 0.75, `${stream} file is at least a quarter smaller`);
  }
});

test('older cached files and the Mizo map pass through; a broken file does not', () => {
  const legacy = practiceQuestions('jee');
  assert.equal(expandBank(legacy), legacy);
  const mizo = mpscTranslations(practiceQuestions('mpsc'));
  assert.equal(expandBank(mizo), mizo);
  assert.equal(expandBank({ format: 2, sources: {}, questions: 'x' }), null);
  assert.deepEqual(expandBank({ format: 2, reviewedOn: '2026-01-01', sources: {}, questions: [{ id: 'a', sourceId: 'missing' }] }), [null]);
});

test('the downloads list stays small and every pack has its contents file', () => {
  const packs = downloadPacks();
  // Titles only: the notes themselves load on demand.
  assert.ok(JSON.stringify(packs).length < 40_000, `${JSON.stringify(packs).length} bytes of pack listing`);
  for (const pack of packs) {
    const contents = packContents(pack.id);
    assert.deepEqual(contents.map(topic => topic.id), pack.topics.map(topic => topic.id), pack.id);
    assert.ok(contents.every(topic => topic.notes.length && topic.pitfall && topic.source.url.startsWith('https://')), pack.id);
  }
  assert.equal(packContents('no-such-pack'), null);
});
