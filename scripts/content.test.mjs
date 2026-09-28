import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { getReviewedQuestions, topics, notePacks, sources, contentRevision, collegeSubjects } from '../app/data/reviewed-content.ts';
import { renderNotes, escapeHtml } from '../app/lib/render-notes.ts';
import { additionalQuestions } from '../app/data/additional-questions.ts';
import { additionalQuotas, practiceExpansion } from '../app/data/expanded-practice.ts';
import { numeric } from '../app/data/question-builders.ts';

test('each stream retains its published expansion quota', () => {
  for (const [stream, original] of Object.entries({mpsc: 29, neet: 9, jee: 9, 'cuet-pg': 24})) {
    const quota = Object.values(additionalQuotas[stream]).reduce((a, b) => a + b, 0);
    assert.equal(getReviewedQuestions(stream).length, original + quota, stream);
    assert.equal(quota, stream === 'mpsc' ? 221 : 200);
  }
});

test('numerical options do not reveal the answer by always making it the smallest', () => {
  const [, options, index] = numeric('Test', 10, '', '10', 'Test', 2);
  assert.equal(options[index], '10');
  assert.ok(options.some(option => Number(option) < 10));
  assert.ok(options.some(option => Number(option) > 10));
});

test('independently recompute the science numerical expansion from its question text', () => {
  for (const [prompt, options, answer] of practiceExpansion.physics) {
    let expected;
    const numbers = [...prompt.matchAll(/\b\d+(?:\.\d+)?\b/g)].map(match => Number(match[0]));
    if (prompt.startsWith('A constant-mass')) expected = numbers[0] * numbers[1];
    else if (prompt.startsWith('A net force')) expected = numbers[0] / numbers[1];
    else if (prompt.startsWith('An object accelerates')) expected = numbers[2] / numbers[0];
    else if (prompt.startsWith('At g')) expected = numbers[0] * numbers[2];
    else if (prompt.startsWith('Horizontal forces')) expected = (numbers[0] - numbers[1]) / numbers[2];
    else if (prompt.startsWith('A body accelerates')) expected = 2 * numbers[0];
    else if (prompt.startsWith('A ') && prompt.includes('supported')) expected = (numbers[1] - numbers[0] * numbers[2]) / numbers[0];
    else assert.fail(`Missing arithmetic check: ${prompt}`);
    assert.equal(parseFloat(options[answer]), expected, prompt);
  }
  for (const [prompt, options, answer] of practiceExpansion.chemistry) {
    const n = [...prompt.matchAll(/-?\d+/g)].map(match => Number(match[0]));
    let expected;
    if (prompt.startsWith('A nucleus')) expected = n[1] - n[0];
    else if (prompt.startsWith('An atom contains')) expected = n[0] + n[1];
    else if (prompt.startsWith('An atom has mass')) expected = n[0] - n[1];
    else if (prompt.startsWith('An ion')) expected = n[0] - n[1];
    else if (prompt.startsWith('A neutral atom has')) expected = n[0];
    else if (prompt.startsWith('Two isotopes')) expected = n[1] - n[0];
    else if (prompt.startsWith('A neutral atom contains')) expected = 2 * n[0] + n[1];
    else assert.fail(`Missing arithmetic check: ${prompt}`);
    assert.equal(Number(options[answer]), expected, prompt);
  }
});

test('the expansion covers every topic and uses valid answer indices', () => {
  assert.deepEqual(Object.keys(additionalQuestions).sort(), topics.map(topic => topic.id).sort());
  for (const [id, questions] of Object.entries(additionalQuestions)) {
    assert.ok(questions.length >= 3, id);
    for (const [, options, answer] of questions) {
      assert.ok(Number.isInteger(answer) && answer >= 0 && answer < options.length, id);
    }
  }
});

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
