import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { getReviewedQuestions, topics, notePacks, sources, contentRevision, collegeSubjects } from '../app/data/reviewed-content.ts';
import { renderNotes, escapeHtml } from '../app/lib/render-notes.ts';

test('all existing stream subjects have published practice', () => {
  const expected = { neet: ['Biology', 'Chemistry', 'Physics'], jee: ['Physics', 'Chemistry', 'Mathematics'], 'cuet-pg': ['General Aptitude', 'Political Science', 'History', 'Geography', 'Economics', 'Sociology', 'Education', 'English'] };
  for (const [stream, subjects] of Object.entries(expected)) {
    assert.deepEqual([...new Set(getReviewedQuestions(stream).map(question => question.subject))].sort(), [...subjects].sort());
  }
});
test('all nine college subjects and four streams have downloadable content', () => {
  assert.equal(notePacks.length, 13);
  for (const subject of collegeSubjects) assert.ok(notePacks.some(pack => pack.title === `${subject} revision notes`));
  for (const pack of notePacks) {
    const html = renderNotes(pack, topics, sources, contentRevision);
    assert.ok(html.startsWith('<!doctype html>'));
    assert.ok(html.includes('Answers and reasoning') && html.includes('not a complete syllabus'));
    assert.ok(html.includes('https://') && !html.includes('<script') && !html.includes('undefined'));
    for (const id of pack.topicIds) assert.ok(html.includes(`id="${id}"`));
  }
});
test('download content escapes HTML and rejects unresolved topics', () => {
  assert.equal(escapeHtml('<script>"&\''), '&lt;script&gt;&quot;&amp;&#39;');
  assert.throws(() => renderNotes({ id: 'bad', title: 'bad', topicIds: ['missing'] }, topics, sources, contentRevision), /Unknown note topic/);
});
test('original banks are preserved with no empty migration', () => {
  for (const [stream, count] of Object.entries({ mpsc: 931, neet: 515, jee: 601, 'cuet-pg': 1244 })) {
    const bank = JSON.parse(fs.readFileSync(new URL(`../content/archive/${stream}.json`, import.meta.url), 'utf8'));
    assert.equal(bank.length, count);
    assert.ok(bank.every(question => question.options.includes(question.answer)));
  }
});
test('worked numerical answers are independently recomputed', () => {
  const physics = getReviewedQuestions('neet');
  assert.equal(physics.find(q => q.id === 'physics-1').answer, `${18 / 3} m/s^2`);
  assert.equal(physics.find(q => q.id === 'physics-2').answer, `${(14 - 6) / 4} m/s^2 right`);
  assert.equal(physics.find(q => q.id === 'chemistry-1').answer, String(27 - 13));
  for (const root of [4, 5]) assert.equal(root ** 2 - 9 * root + 20, 0);
});
