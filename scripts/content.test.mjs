import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { getReviewedQuestions, topics, notePacks, sources, contentRevision, collegeSubjects } from '../app/data/reviewed-content.ts';
import { renderNotes, escapeHtml } from '../app/lib/render-notes.ts';
import { additionalQuestions } from '../app/data/additional-questions.ts';
import { additionalQuotas, practiceExpansion } from '../app/data/expanded-practice.ts';
import { numeric } from '../app/data/question-builders.ts';
import { jeeTopics } from '../app/data/jee-topics.ts';
import { neetTopics } from '../app/data/neet-topics.ts';

const foundationTopics = [...jeeTopics, ...neetTopics];
const foundationCount = stream => foundationTopics.filter(topic => topic.streams.includes(stream)).reduce((total, topic) => total + topic.questions.length, 0);

test('each stream retains its published expansion quota', () => {
  for (const [stream, released] of Object.entries({mpsc: 29, neet: 9, jee: 9, 'cuet-pg': 24})) {
    const original = released + foundationCount(stream);
    const quota = Object.values(additionalQuotas[stream]).reduce((a, b) => a + b, 0);
    assert.equal(getReviewedQuestions(stream).length, original + quota, stream);
    assert.equal(quota, stream === 'mpsc' ? 471 : 200);
  }
});

test('numerical options do not reveal the answer by always making it the smallest', () => {
  const [, options, index] = numeric('Test', 10, '', '10', 'Test', 2);
  assert.equal(options[index], '10');
  assert.ok(options.some(option => Number(option) < 10));
  assert.ok(options.some(option => Number(option) > 10));
});

test('numerical answers are not guessable from their rank among the options', () => {
  for (const stream of ['mpsc', 'neet', 'jee', 'cuet-pg']) {
    const ranks = [0, 0, 0, 0];
    const numerical = getReviewedQuestions(stream).filter(q => q.sourceLocation.includes('numerical variant'));
    for (const q of numerical) {
      const values = q.options.map(option => parseFloat(option)).sort((a, b) => a - b);
      ranks[values.indexOf(parseFloat(q.answer))]++;
    }
    for (const count of ranks) assert.ok(count <= numerical.length * 0.4, `${stream} answer ranks are skewed: ${ranks}`);
  }
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
  assert.deepEqual(Object.keys(additionalQuestions).sort(), topics.filter(topic => !foundationTopics.includes(topic)).map(topic => topic.id).sort());
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

test('JEE foundation topics extend all three subjects with sourced, balanced questions', () => {
  const bank = getReviewedQuestions('jee');
  for (const subject of ['Physics', 'Chemistry', 'Mathematics']) {
    const added = jeeTopics.filter(topic => topic.subject === subject);
    assert.ok(added.length >= 3, subject);
    assert.ok(added.reduce((total, topic) => total + topic.questions.length, 0) >= 30, subject);
  }
  for (const topic of jeeTopics) {
    assert.ok(topic.questions.length >= 6 && topic.notes.length > 0 && topic.pitfall, topic.id);
    assert.equal(new URL(sources[topic.sourceId].url).hostname, 'openstax.org', topic.id);
    const published = bank.filter(question => question.id.startsWith(`${topic.id}-`));
    assert.equal(published.length, topic.questions.length, topic.id);
    const positions = new Set(published.map(question => question.options.indexOf(question.answer)));
    assert.ok(positions.size >= 3, `${topic.id} answers cluster in one option position`);
  }
});

test('JEE foundation worked answers are independently recomputed', () => {
  const answer = id => getReviewedQuestions('jee').find(question => question.id === id).answer;
  assert.equal(answer('jee-kinematics-4'), `${20 ** 2 / (2 * 5)} m`);
  assert.equal(answer('jee-kinematics-11'), `${0.5 * 4 * 3 ** 2 - 0.5 * 4 * 2 ** 2} m`);
  assert.equal(answer('jee-projectile-7'), `${(20 ** 2 * Math.sin(Math.PI / 3) / 10).toFixed(1)} m`);
  assert.equal(answer('jee-work-energy-8'), `${0.5 * 2 * 10 ** 2 / 5} N`);
  assert.equal(answer('jee-work-energy-11'), `${Math.sqrt(2 * 10 * 10).toFixed(1)} m/s`);
  assert.equal(answer('jee-mole-concept-2'), `${88 / (12 + 2 * 16)} mol`);
  assert.equal(answer('jee-molarity-6'), `${(1 * 600) / 12} mL`);
  assert.equal(answer('jee-ideal-gas-9'), `${Math.round((2 * 24.63) / (0.0821 * 300))} mol`);
  assert.equal(answer('jee-arithmetic-sequences-1'), String(3 + 9 * 4));
  assert.equal(answer('jee-geometric-sequences-2'), String(2 * 3 ** 5));
  assert.equal(answer('jee-counting-4'), String((7 * 6 * 5) / (3 * 2 * 1)));
  assert.equal(answer('jee-counting-6'), String(120 / 4));
  assert.equal(answer('jee-differentiation-4'), String(3 * 2 ** 2));
});

test('generated discriminant questions are recomputed and not all the same answer', () => {
  const answers = [];
  for (const [prompt, options, answer] of practiceExpansion.mathematics.filter(([prompt]) => prompt.startsWith('Find the discriminant'))) {
    const [, b, c] = prompt.match(/x\^2 - (\d+)x \+ (\d+) = 0/).map(Number);
    assert.equal(Number(options[answer]), b * b - 4 * c, prompt);
    answers.push(options[answer]);
  }
  assert.equal(new Set(answers).size, answers.length);
});

test('NEET Biology foundation topics are sourced, balanced and rebalance the NEET bank', () => {
  const bank = getReviewedQuestions('neet');
  const biology = bank.filter(question => question.subject === 'Biology').length;
  assert.ok(biology >= 130, `NEET Biology has ${biology} questions`);
  for (const topic of neetTopics) {
    assert.ok(topic.questions.length >= 9 && topic.notes.length > 0 && topic.pitfall, topic.id);
    assert.equal(new URL(sources[topic.sourceId].url).hostname, 'openstax.org', topic.id);
    const published = bank.filter(question => question.id.startsWith(`${topic.id}-`));
    assert.equal(published.length, topic.questions.length, topic.id);
    assert.ok(new Set(published.map(question => question.options.indexOf(question.answer))).size >= 3, topic.id);
  }
  // Shared Physics and Chemistry topics are published in both streams.
  for (const id of ['jee-kinematics-1', 'jee-mole-concept-1']) assert.ok(bank.some(question => question.id === id), id);
  assert.ok(!bank.some(question => question.id.startsWith('jee-logarithms-')));
});

test('NEET Biology worked answers are independently recomputed', () => {
  const answer = id => getReviewedQuestions('neet').find(question => question.id === id).answer;
  assert.equal(answer('neet-dna-structure-4'), `${Number((3.4 / 10).toFixed(2))} nm`);
  assert.equal(answer('neet-dna-structure-6'), `${(100 - 2 * 30) / 2}%`);
  assert.equal(answer('neet-meiosis-4'), String(8 / 2));
  assert.equal(answer('neet-dna-replication-8'), `1/${2 ** 3 / 2}`);
  assert.equal(answer('neet-inheritance-8'), '2/3');
  assert.ok(2 ** 23 > 8e6 && 2 ** 23 < 8.5e6);
});
