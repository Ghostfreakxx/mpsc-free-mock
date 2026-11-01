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
import { highYieldTopics } from '../app/data/high-yield-topics.ts';
import { patternBatchTopics } from '../app/data/pattern-batch-topics.ts';
import { batchThreeTopics } from '../app/data/batch-three-topics.ts';
import { batchFourTopics } from '../app/data/batch-four-topics.ts';
import { batchFiveTopics } from '../app/data/batch-five-topics.ts';
import { batchSixTopics } from '../app/data/batch-six-topics.ts';
import { batchSevenTopics } from '../app/data/batch-seven-topics.ts';
import { getMizoTranslation, mizoPendingTopicIds } from '../app/data/mizo-translations.ts';

const foundationTopics = [...jeeTopics, ...neetTopics, ...highYieldTopics, ...patternBatchTopics, ...batchThreeTopics, ...batchFourTopics, ...batchFiveTopics, ...batchSixTopics, ...batchSevenTopics];
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

test('high-yield topics are sourced, balanced and published to the intended streams', () => {
  for (const topic of highYieldTopics) {
    assert.ok(topic.questions.length >= 7 && topic.notes.length > 0 && topic.pitfall, topic.id);
    assert.ok(new URL(sources[topic.sourceId].url).protocol === 'https:', topic.id);
    for (const stream of topic.streams) {
      const published = getReviewedQuestions(stream).filter(question => question.id.startsWith(`${topic.id}-`));
      assert.equal(published.length, topic.questions.length, `${topic.id} in ${stream}`);
      assert.ok(new Set(published.map(question => question.options.indexOf(question.answer))).size >= 3, topic.id);
    }
  }
  // Only the polity topic reaches MPSC, in English while its Mizo draft is pending.
  const mpscHighYield = new Set(getReviewedQuestions('mpsc').filter(question => highYieldTopics.some(topic => question.id.startsWith(`${topic.id}-`))).map(question => question.id.replace(/-\d+$/, '')));
  assert.deepEqual([...mpscHighYield], ['union-polity']);
  assert.ok(mizoPendingTopicIds.has('union-polity'));
});

test('high-yield worked answers are independently recomputed', () => {
  const answer = (stream, id) => getReviewedQuestions(stream).find(question => question.id === id).answer;
  assert.equal(answer('jee', 'ohms-law-3'), `${9 / 0.5} ohm`);
  assert.equal(answer('neet', 'resistor-circuits-2'), `${1 / (1 / 6 + 1 / 3)} ohm`);
  assert.equal(answer('jee', 'resistor-circuits-9'), `${12 / ((6 * 12) / (6 + 12))} A`);
  assert.equal(answer('neet', 'photoelectric-effect-4'), `${6 - 4} eV`);
  assert.equal(answer('jee', 'matter-waves-5'), `${Math.round(6.6e-34 / 3.3e-24 / 1e-10)} x 10^-10 m`);
  assert.equal(answer('jee', 'determinants-1'), String(3 * 4 - 2 * 1));
  assert.equal(answer('jee', 'determinants-4'), String((5 * -1 - 1 * 1) / (2 * -1 - 1 * 1)));
  assert.equal(answer('jee', 'vectors-3'), String(2 * 4 + 3 * -1));
  assert.equal(answer('jee', 'vectors-7'), String(12 / 3));
  const choose = (n, k) => { let r = 1; for (let i = 1; i <= k; i += 1) r = (r * (n - k + i)) / i; return r; };
  assert.equal(answer('jee', 'binomial-theorem-2'), String(choose(5, 3)));
  assert.equal(answer('jee', 'binomial-theorem-6'), String(choose(8, 3)));
  assert.equal(answer('jee', 'binomial-theorem-9'), String(choose(3, 2) * 2));
  assert.equal(answer('neet', 'coordination-compounds-7'), `+${-4 + 6}`);
});

test('pattern batch topics are sourced, balanced and published to the intended streams', () => {
  const ids = new Set(topics.map(topic => topic.id));
  assert.equal(ids.size, topics.length, 'topic ids are unique');
  for (const topic of patternBatchTopics) {
    assert.ok(topic.questions.length >= 7 && topic.notes.length > 0 && topic.pitfall, topic.id);
    const url = new URL(sources[topic.sourceId].url);
    assert.ok(url.protocol === 'https:' && (url.hostname === 'openstax.org' || topic.sourceId === 'constitution'), topic.id);
    for (const stream of topic.streams) {
      const published = getReviewedQuestions(stream).filter(question => question.id.startsWith(`${topic.id}-`));
      assert.equal(published.length, topic.questions.length, `${topic.id} in ${stream}`);
      assert.ok(new Set(published.map(question => question.options.indexOf(question.answer))).size >= 3, topic.id);
      for (const question of published) assert.ok(question.sourceLocation && question.explanation, question.id);
    }
  }
  // Every MPSC question from this batch has a draft Mizo translation, except the polity topic, which is pending.
  for (const question of getReviewedQuestions('mpsc').filter(q => patternBatchTopics.some(topic => q.id.startsWith(`${topic.id}-`)))) {
    if (question.id.startsWith('local-government-')) assert.equal(getMizoTranslation(question), undefined, question.id);
    else assert.ok(getMizoTranslation(question), question.id);
  }
  // Each new stream gets fresh questions.
  for (const [stream, minimum] of Object.entries({ mpsc: 20, neet: 90, jee: 80, 'cuet-pg': 50 })) {
    const fresh = getReviewedQuestions(stream).filter(question => patternBatchTopics.some(topic => question.id.startsWith(`${topic.id}-`)));
    assert.ok(fresh.length >= minimum, `${stream} has ${fresh.length} pattern-batch questions`);
  }
});

test('pattern batch worked answers are independently recomputed', () => {
  const answer = (stream, id) => getReviewedQuestions(stream).find(question => question.id === id).answer;
  const k = 9e9;
  assert.equal(answer('jee', 'coulombs-law-3'), `${Number((k * 2e-6 * 3e-6 / 0.3 ** 2).toFixed(2))} N, repulsive`);
  assert.equal(answer('neet', 'coulombs-law-8'), `${16 / 4 ** 2} N`);
  assert.equal(answer('jee', 'thin-lenses-1'), `${Math.round(1 / (1 / 20 - 1 / 30))} cm from the lens, on the opposite side`);
  assert.equal(answer('neet', 'thin-lenses-3'), `+${1 / 0.25} D`);
  assert.equal(answer('jee', 'first-law-thermodynamics-1'), `+${500 - 200} J`);
  assert.equal(answer('jee', 'first-law-thermodynamics-2'), `+${-50 - -150} J`);
  assert.equal(answer('neet', 'faraday-induction-1'), `${(0.5 - 0.1) / 0.2} V`);
  assert.equal(answer('neet', 'faraday-induction-2'), `${(100 * 0.02) / 0.1} V`);
  assert.equal(answer('jee', 'faraday-induction-6'), `${Number((0.4 * 0.05).toFixed(3))} Wb`);
  assert.equal(answer('jee', 'enthalpy-hess-5'), `${-394 - -283} kJ`);
  assert.equal(answer('neet', 'enthalpy-hess-7'), `${(-394 + 2 * -286) - -75} kJ`);
  assert.equal(answer('jee', 'definite-integrals-1'), String(2 ** 3 - 0));
  assert.equal(answer('jee', 'definite-integrals-2'), String((3 ** 2 + 3) - (1 ** 2 + 1)));
  assert.equal(answer('jee', 'definite-integrals-9'), `${(2 / 3) * 4 ** 1.5 * 3}/3`);
  assert.equal(answer('jee', 'lines-planes-3d-3'), String(Math.abs(-14) / Math.sqrt(4 + 9 + 36)));
  assert.equal(answer('jee', 'lines-planes-3d-6'), `3x - y + 2z = ${3 * 1 - 0 + 2 * 2}`);
  assert.equal(answer('jee', 'lines-planes-3d-8'), String((10 - 4) / 2));
  assert.equal(answer('jee', 'lines-planes-3d-9'), String(Math.hypot(3, 4, 12)));
  assert.equal(1 * 1 + 1 * -1 + 1 * 0, 0, 'lines-planes-3d-5 normals are perpendicular');
  assert.equal(answer('neet', 'ecosystem-energy-2'), `${(10000 * 0.1 * 0.1).toLocaleString('en-US')} kJ`);
  assert.equal(answer('neet', 'plant-water-transport-9'), `${Number((-0.7 + 0.3).toFixed(1))} MPa`);
  assert.equal(answer('cuet-pg', 'price-elasticity-7'), `${(40 / 100) / (4 / 10)} (unitary)`);
  assert.equal(answer('mpsc', 'percentages-1'), String((12 / 100) * 250));
  assert.equal(answer('mpsc', 'percentages-11'), `${((50 - 40) / 40) * 100}%`);
  assert.equal(answer('mpsc', 'percentages-15'), `${((400 - 300) / 400) * 100}%`);
  assert.equal(answer('mpsc', 'simple-interest-1'), `Rs ${(2000 * 5 * 3) / 100}`);
  assert.equal(answer('mpsc', 'simple-interest-5'), `Rs ${1000 + (1000 * 6 * 4) / 100}`);
  assert.equal(answer('cuet-pg', 'simple-interest-10'), `${(720 * 100) / (3000 * 3)}%`);
});

test('third batch topics are sourced, balanced and published to the intended streams', () => {
  for (const topic of batchThreeTopics) {
    assert.ok(topic.questions.length >= 8 && topic.notes.length > 0 && topic.pitfall, topic.id);
    assert.equal(new URL(sources[topic.sourceId].url).protocol, 'https:', topic.id);
    for (const stream of topic.streams) {
      const published = getReviewedQuestions(stream).filter(question => question.id.startsWith(`${topic.id}-`));
      assert.equal(published.length, topic.questions.length, `${topic.id} in ${stream}`);
      assert.ok(new Set(published.map(question => question.options.indexOf(question.answer))).size >= 3, topic.id);
    }
    // MPSC topics are either templated into Mizo or explicitly marked as pending, never guessed.
    if (topic.streams.includes('mpsc')) {
      for (const question of getReviewedQuestions('mpsc').filter(q => q.id.startsWith(`${topic.id}-`))) {
        assert.equal(Boolean(getMizoTranslation(question)), !mizoPendingTopicIds.has(topic.id), question.id);
      }
    }
  }
  for (const [stream, minimum] of Object.entries({ mpsc: 150, neet: 60, jee: 50, 'cuet-pg': 90 })) {
    const fresh = getReviewedQuestions(stream).filter(question => batchThreeTopics.some(topic => question.id.startsWith(`${topic.id}-`)));
    assert.ok(fresh.length >= minimum - 30, `${stream} has ${fresh.length} third-batch questions`);
  }
});

test('third batch worked answers are independently recomputed', () => {
  const answer = (stream, id) => getReviewedQuestions(stream).find(question => question.id === id).answer;
  assert.equal(answer('jee', 'magnetic-force-motion-8'), `${Number((1.6e-19 * 2e6 * 0.5 / 1e-13).toFixed(2))} x 10^-13 N`);
  assert.equal(answer('neet', 'chemical-equilibrium-10'), String(Number((0.4 ** 2 / 0.2).toFixed(2))));
  assert.equal(answer('neet', 'chemical-equilibrium-7'), String(1 / 4));
  assert.equal(answer('jee', 'cell-potentials-4'), `${(0.80 - -2.37).toFixed(2)} V`);
  assert.equal(answer('jee', 'cell-potentials-7'), `${(0.34 - -0.76).toFixed(2)} V`);
  assert.equal(answer('neet', 'wave-motion-2'), `${50 * 2} m/s`);
  assert.equal(answer('jee', 'wave-motion-5'), `${8 / 4} m/s`);
  assert.equal(answer('jee', 'wave-motion-8'), `${340 / 170} m`);
  assert.equal(answer('neet', 'wave-motion-9'), `${1 / 25} s`);
  assert.equal(answer('jee', 'probability-8'), `1/${36 / 6}`);
  assert.equal(answer('jee', 'probability-9'), `${(3 * 2) / 2}/${(8 * 7) / 2}`);
  assert.equal(answer('jee', 'probability-7'), String(Number((0.5 + 0.4 - 0.1).toFixed(2))));
  assert.equal(answer('jee', 'complex-numbers-7'), String(3 ** 2 + 4 ** 2));
  assert.equal(23 % 4, 3, 'complex-numbers-6: i^23 = i^3 = -i');
  assert.equal(answer('mpsc', 'averages-1'), String((4 + 8 + 15 + 21) / 4));
  assert.equal(answer('cuet-pg', 'averages-8'), String(4 * 10 - (8 + 12 + 6)));
  assert.equal(answer('mpsc', 'ratio-proportion-3'), `Rs ${(1200 * 5) / 8}`);
  assert.equal(answer('mpsc', 'ratio-proportion-5'), `Rs ${(60 / 4) * 7}`);
  assert.equal(answer('mpsc', 'discount-tax-commission-4'), `Rs ${640 - 640 * 0.125}`);
  assert.equal(answer('mpsc', 'discount-tax-commission-5'), `Rs ${500 * 1.08}`);
  assert.equal(answer('cuet-pg', 'discount-tax-commission-8'), `Rs ${20000 * 0.04}`);
});

test('fourth batch topics are sourced, balanced and published to the intended streams', () => {
  for (const topic of batchFourTopics) {
    assert.ok(topic.questions.length >= 8 && topic.notes.length > 0 && topic.pitfall, topic.id);
    assert.equal(new URL(sources[topic.sourceId].url).protocol, 'https:', topic.id);
    for (const stream of topic.streams) {
      const published = getReviewedQuestions(stream).filter(question => question.id.startsWith(`${topic.id}-`));
      assert.equal(published.length, topic.questions.length, `${topic.id} in ${stream}`);
      assert.ok(new Set(published.map(question => question.options.indexOf(question.answer))).size >= 3, topic.id);
    }
    if (topic.streams.includes('mpsc')) {
      for (const question of getReviewedQuestions('mpsc').filter(q => q.id.startsWith(`${topic.id}-`))) {
        assert.equal(Boolean(getMizoTranslation(question)), !mizoPendingTopicIds.has(topic.id), question.id);
      }
    }
  }
  for (const [stream, minimum] of Object.entries({ mpsc: 130, neet: 55, jee: 55, 'cuet-pg': 110 })) {
    const fresh = getReviewedQuestions(stream).filter(question => batchFourTopics.some(topic => question.id.startsWith(`${topic.id}-`)));
    assert.ok(fresh.length >= minimum, `${stream} has ${fresh.length} fourth-batch questions`);
  }
});

test('fourth batch worked answers are independently recomputed', () => {
  const answer = (stream, id) => getReviewedQuestions(stream).find(question => question.id === id).answer;
  assert.equal(answer('jee', 'acids-bases-ph-3'), String(-Math.log10(1e-3)));
  assert.equal(answer('neet', 'acids-bases-ph-5'), String(14 - 4));
  assert.equal(answer('mpsc', 'acids-bases-ph-8'), String(14 - -Math.log10(1e-2)));
  assert.equal(answer('neet', 'gravitation-8'), `${60 * 1.6} N`);
  assert.equal(answer('jee', 'integrated-rate-laws-3'), `${Math.round(0.693 / 0.0693)} s`);
  assert.equal(answer('neet', 'integrated-rate-laws-5'), `${100 / 2 ** 3} g`);
  assert.equal(answer('jee', 'limit-laws-1'), String(2 ** 2 + 3 * 2));
  assert.equal(answer('jee', 'limit-laws-7'), String(3 * 2 ** 2 - 5));
  const product = [[1 * 2 + 2 * 1, 1 * 0 + 2 * 3], [3 * 2 + 4 * 1, 3 * 0 + 4 * 3]];
  assert.equal(answer('jee', 'matrix-operations-5'), `[${product[0].join(' ')}; ${product[1].join(' ')}]`);
  assert.equal(answer('jee', 'parabola-1'), `(${12 / 4}, 0)`);
  assert.equal(answer('neet', 'hardy-weinberg-3'), String(Number((2 * 0.7 * 0.3).toFixed(2))));
  assert.equal(answer('neet', 'hardy-weinberg-4'), String(Math.sqrt(0.16)));
  assert.equal(answer('neet', 'hardy-weinberg-8'), String(Math.round(0.1 ** 2 * 1000)));
  assert.equal(answer('mpsc', 'speed-distance-time-1'), `${180 / 3} km/h`);
  assert.equal(answer('mpsc', 'speed-distance-time-7'), `${300 / 60} hours`);
  assert.equal(answer('cuet-pg', 'profit-loss-markup-1'), `${((500 - 400) / 400) * 100}%`);
  assert.equal(answer('mpsc', 'profit-loss-markup-6'), `Rs ${960 * 0.75}`);
  assert.equal(answer('mpsc', 'profit-loss-markup-10'), `Rs ${640 * 1.25}`);
});

test('fifth batch topics are sourced, balanced and published to the intended streams', () => {
  for (const topic of batchFiveTopics) {
    assert.ok(topic.questions.length >= 10 && topic.notes.length > 0 && topic.pitfall, topic.id);
    assert.equal(new URL(sources[topic.sourceId].url).protocol, 'https:', topic.id);
    for (const stream of topic.streams) {
      const published = getReviewedQuestions(stream).filter(question => question.id.startsWith(`${topic.id}-`));
      assert.equal(published.length, topic.questions.length, `${topic.id} in ${stream}`);
      assert.ok(new Set(published.map(question => question.options.indexOf(question.answer))).size >= 3, topic.id);
    }
    // Every MPSC topic in this batch is general studies, published in English with Mizo pending.
    if (topic.streams.includes('mpsc')) {
      assert.ok(mizoPendingTopicIds.has(topic.id), topic.id);
      for (const question of getReviewedQuestions('mpsc').filter(q => q.id.startsWith(`${topic.id}-`))) assert.equal(getMizoTranslation(question), undefined, question.id);
    }
  }
  for (const [stream, minimum] of Object.entries({ mpsc: 120, neet: 90, jee: 80, 'cuet-pg': 100 })) {
    const fresh = getReviewedQuestions(stream).filter(question => batchFiveTopics.some(topic => question.id.startsWith(`${topic.id}-`)));
    assert.ok(fresh.length >= minimum, `${stream} has ${fresh.length} fifth-batch questions`);
  }
});

test('fifth batch worked answers are independently recomputed', () => {
  const answer = (stream, id) => getReviewedQuestions(stream).find(question => question.id === id).answer;
  assert.equal(answer('mpsc', 'national-income-3'), String(60 + 20 + 15 + (10 - 12)));
  assert.equal(answer('mpsc', 'national-income-5'), `Rs ${(220 * 100) / 110} lakh crore`);
  assert.equal(answer('cuet-pg', 'national-income-10'), `Rs ${(5000 / 2).toLocaleString('en-IN')}`);
  assert.equal(answer('mpsc', 'inflation-3'), String((440 * 100) / 400));
  assert.equal(answer('mpsc', 'inflation-4'), `${((126 - 120) / 120) * 100}%`);
  assert.equal(answer('mpsc', 'inflation-7'), `${9 - 5}%`);
  assert.equal(answer('jee', 'newtons-laws-3'), `${5 * 4} N`);
  assert.equal(answer('neet', 'newtons-laws-5'), `${10 * 9.8} N`);
  assert.equal(answer('jee', 'newtons-laws-6'), `${(8 - 3) / 5} m/s^2 east`);
  assert.equal(answer('neet', 'newtons-laws-11'), `${60 * (10 + 2)} N`);
  assert.equal(answer('jee', 'newtons-laws-12'), `${2 * 3} kg m/s`);
  assert.equal(answer('jee', 'rotational-dynamics-1'), `${2 * 0.5 ** 2} kg m^2`);
  assert.equal(answer('jee', 'rotational-dynamics-3'), `${0.5 * 2 * 3 ** 2} J`);
  assert.equal(answer('neet', 'rotational-dynamics-7'), `${(3 * 2 ** 2) / 12 + 3 * (2 / 2) ** 2} kg m^2`);
  assert.equal(answer('jee', 'capacitance-3'), `${1 / (1 / 3 + 1 / 6)} μF`);
  assert.equal(answer('neet', 'capacitance-5'), `${0.5 * 4 * 10 ** 2} μJ`);
  assert.equal(answer('jee', 'capacitance-10'), `${6 ** 2 / (2 * 3)} μJ`);
  assert.equal(answer('jee', 'quantum-numbers-1'), String(2 * 3 ** 2));
  assert.equal(answer('neet', 'quantum-numbers-10'), String(2 * (2 * 3 + 1)));
  assert.equal(answer('jee', 'quadratic-equations-3'), String(-12 / 3));
  assert.equal(answer('jee', 'quadratic-equations-7'), `(3, ${3 ** 2 - 6 * 3 + 5})`);
  assert.equal(answer('jee', 'quadratic-equations-9'), String(5 ** 2 - 2 * 6));
  assert.equal(answer('jee', 'circles-1'), `(2, -3) and ${Math.sqrt(2 ** 2 + 3 ** 2 + 12)}`);
  assert.equal(answer('jee', 'circles-6'), String(Math.sqrt(5 ** 2 - 9)));
  assert.equal(answer('neet', 'population-ecology-3'), `${0.2 * 500 * (1 - 500 / 1000)} individuals per year`);
  assert.equal(answer('neet', 'population-ecology-5'), String((40 * 50) / 10));
  assert.equal(answer('neet', 'population-ecology-10'), `${0.1 * 200} individuals per year`);
  assert.ok(Math.abs(Math.cos(Math.PI / 12) - (Math.sqrt(6) + Math.sqrt(2)) / 4) < 1e-12, 'trigonometric-identities-8');
});

test('sixth batch topics are sourced, balanced and published to the intended streams', () => {
  for (const topic of batchSixTopics) {
    assert.ok(topic.questions.length >= 10 && topic.notes.length > 0 && topic.pitfall, topic.id);
    assert.equal(new URL(sources[topic.sourceId].url).protocol, 'https:', topic.id);
    for (const stream of topic.streams) {
      const published = getReviewedQuestions(stream).filter(question => question.id.startsWith(`${topic.id}-`));
      assert.equal(published.length, topic.questions.length, `${topic.id} in ${stream}`);
      assert.ok(new Set(published.map(question => question.options.indexOf(question.answer))).size >= 3, topic.id);
    }
    // Every MPSC topic in this batch is published in English with Mizo pending.
    if (topic.streams.includes('mpsc')) {
      assert.ok(mizoPendingTopicIds.has(topic.id), topic.id);
      for (const question of getReviewedQuestions('mpsc').filter(q => q.id.startsWith(`${topic.id}-`))) assert.equal(getMizoTranslation(question), undefined, question.id);
    }
  }
  for (const [stream, minimum] of Object.entries({ mpsc: 140, neet: 70, jee: 70, 'cuet-pg': 110 })) {
    const fresh = getReviewedQuestions(stream).filter(question => batchSixTopics.some(topic => question.id.startsWith(`${topic.id}-`)));
    assert.ok(fresh.length >= minimum, `${stream} has ${fresh.length} sixth-batch questions`);
  }
});

test('sixth batch worked answers are independently recomputed', () => {
  const answer = (stream, id) => getReviewedQuestions(stream).find(question => question.id === id).answer;
  const byPrompt = (stream, prompt) => getReviewedQuestions(stream).find(question => question.question === prompt).answer;
  assert.equal(byPrompt('mpsc', 'A can finish a job in 6 days and B can finish it in 12 days. Working together, how many days will they take?'), `${(6 * 12) / (6 + 12)} days`);
  assert.equal(byPrompt('mpsc', '8 workers can finish a job in 9 days. How many days will 12 workers take, working at the same rate?'), `${(8 * 9) / 12} days`);
  assert.equal(byPrompt('cuet-pg', 'One tap fills a tank in 10 hours and a drain empties it in 15 hours. With both open, how long does the empty tank take to fill?'), `${(10 * 15) / (15 - 10)} hours`);
  assert.equal(byPrompt('mpsc', 'Find the compound interest on Rs 2000 at 5% per year for 2 years, compounded annually.'), `Rs ${2000 * 1.05 * 1.05 - 2000}`);
  assert.equal(byPrompt('mpsc', 'Rs 2500 is invested at 8% per year, compounded annually. What is the amount after 2 years?'), `Rs ${Math.round(2500 * 1.08 * 1.08)}`);
  assert.equal(byPrompt('cuet-pg', 'What is the difference between compound interest and simple interest on Rs 5000 at 4% per year for 2 years?'), `Rs ${Math.round(5000 * 0.04 * 0.04)}`);
  assert.equal(answer('mpsc', 'government-budget-4'), `Rs ${1000 - (700 + 50)} crore`);
  assert.equal(answer('mpsc', 'government-budget-6'), `Rs ${500 - 200} crore`);
  assert.equal(answer('cuet-pg', 'balance-of-payments-4'), `A deficit of Rs ${420 - 300} crore`);
  assert.equal(answer('jee', 'alternating-current-1'), `${Math.round(220 * Math.SQRT2)} V`);
  assert.equal(answer('neet', 'alternating-current-4'), `${Math.hypot(3, 4)} ohm`);
  assert.equal(answer('jee', 'alternating-current-9'), `${(220 * 500) / 100} V`);
  assert.equal(answer('neet', 'optical-instruments-4'), `+${1 / 0.5} D`);
  assert.equal(answer('jee', 'optical-instruments-6'), String(1 + 25 / 5));
  assert.equal(answer('jee', 'optical-instruments-8'), String(100 / 5));
  assert.equal(answer('neet', 'colligative-properties-2'), `${1.86 * 0.5} K`);
  assert.equal(answer('jee', 'continuity-2'), String((2 ** 2 - 1 - 1) / 2));
  assert.equal(answer('jee', 'ellipse-hyperbola-1'), `(±${Math.sqrt(25 - 9)}, 0)`);
  assert.equal(answer('jee', 'ellipse-hyperbola-5'), `(±${Math.sqrt(16 + 9)}, 0)`);
  assert.equal(answer('jee', 'straight-lines-4'), String(Math.abs(-10) / Math.hypot(3, 4)));
  assert.equal(answer('jee', 'straight-lines-7'), String(Math.abs(5 - -10) / Math.hypot(3, 4)));
});

test('seventh batch topics are sourced, balanced and published to the intended streams', () => {
  for (const topic of batchSevenTopics) {
    assert.ok(topic.questions.length >= 10 && topic.notes.length > 0 && topic.pitfall, topic.id);
    assert.equal(new URL(sources[topic.sourceId].url).protocol, 'https:', topic.id);
    for (const stream of topic.streams) {
      const published = getReviewedQuestions(stream).filter(question => question.id.startsWith(`${topic.id}-`));
      assert.equal(published.length, topic.questions.length, `${topic.id} in ${stream}`);
      assert.ok(new Set(published.map(question => question.options.indexOf(question.answer))).size >= 3, topic.id);
    }
    // Every MPSC topic in this batch is published in English with Mizo pending.
    if (topic.streams.includes('mpsc')) {
      assert.ok(mizoPendingTopicIds.has(topic.id), topic.id);
      for (const question of getReviewedQuestions('mpsc').filter(q => q.id.startsWith(`${topic.id}-`))) assert.equal(getMizoTranslation(question), undefined, question.id);
    }
  }
  for (const [stream, minimum] of Object.entries({ mpsc: 125, neet: 80, jee: 80, 'cuet-pg': 100 })) {
    const fresh = getReviewedQuestions(stream).filter(question => batchSevenTopics.some(topic => question.id.startsWith(`${topic.id}-`)));
    assert.ok(fresh.length >= minimum, `${stream} has ${fresh.length} seventh-batch questions`);
  }
});

test('seventh batch worked answers are independently recomputed', () => {
  const answer = (stream, id) => getReviewedQuestions(stream).find(question => question.id === id).answer;
  const byPrompt = (stream, prompt) => getReviewedQuestions(stream).find(question => question.question === prompt).answer;
  // Boats and streams: downstream = b + s, upstream = b - s.
  assert.equal(byPrompt('mpsc', 'A boat goes downstream at 20 km/h and upstream at 12 km/h. What is the speed of the stream?'), `${(20 - 12) / 2} km/h`);
  assert.equal(byPrompt('cuet-pg', 'A boat goes downstream at 22 km/h and upstream at 14 km/h. What is its speed in still water?'), `${(22 + 14) / 2} km/h`);
  assert.equal(byPrompt('mpsc', 'A boat moves at 12 km/h in still water and the stream flows at 3 km/h. How many hours does it take to go 75 km downstream?'), `${75 / (12 + 3)} hours`);
  assert.equal(byPrompt('mpsc', 'A boat moves at 9 km/h in still water against a stream of 2 km/h. How far upstream does it go in 5 hours?'), `${(9 - 2) * 5} km`);
  // Mixtures: weighted strength, alligation, and water added with the milk unchanged.
  assert.equal(byPrompt('mpsc', '2 litres of 20% acid solution is mixed with 3 litres of 50% acid solution. What is the acid percentage of the mixture?'), `${(2 * 20 + 3 * 50) / 5}%`);
  assert.equal(byPrompt('cuet-pg', 'Rice costing Rs 40 per kg is mixed with rice costing Rs 60 per kg to make a mixture worth Rs 52 per kg. How many kg of the cheaper rice go with 12 kg of the dearer rice?'), `${(12 * (60 - 52)) / (52 - 40)} kg`);
  assert.equal(byPrompt('mpsc', 'A mixture of 60 litres of milk and water is 10% water. How many litres of water must be added to make it 25% water?'), `${(60 * 0.9) / 0.75 - 60} litres`);
  // Physics.
  assert.equal(answer('jee', 'nuclei-radioactivity-1'), `1/${2 ** (15 / 5)}`);
  assert.equal(answer('neet', 'nuclei-radioactivity-2'), `${8 / Math.log2(64 / 4)} hours`);
  assert.equal(answer('jee', 'simple-harmonic-motion-3'), `${Math.sqrt(50 / 0.5)} rad/s`);
  assert.equal(answer('neet', 'simple-harmonic-motion-10'), `${5 ** 2 * 0.2} m/s^2`);
  assert.equal(answer('jee', 'electric-potential-2'), `${Math.round((9e9 * 2e-9) / 0.3)} V`);
  assert.equal(answer('neet', 'electric-potential-3'), `${2 * 12} J`);
  assert.equal(answer('jee', 'electric-potential-9'), `${500 * 0.02} V`);
  // Oxidation numbers from the overall charge.
  assert.equal(answer('jee', 'redox-reactions-2'), `+${0 - 1 + 4 * 2}`);
  assert.equal(answer('neet', 'redox-reactions-3'), `+${(0 - 2 + 7 * 2) / 2}`);
  assert.equal(answer('jee', 'redox-reactions-12'), `+${4 * 2}/3`);
  // Mathematics.
  const f = x => x ** 3 - 3 * x;
  assert.ok(f(-1) > f(-1.01) && f(-1) > f(-0.99), 'derivative-applications-1: x = -1 is a local maximum');
  assert.equal(answer('jee', 'derivative-applications-1'), 'x = -1');
  assert.equal(answer('jee', 'derivative-applications-2'), String(3 ** 2 - 6 * 3 + 10));
  assert.equal(answer('jee', 'derivative-applications-12'), `${2 * 5 * 2} pi cm^2/s`);
  const data = [2, 4, 6, 8, 10], mean = data.reduce((a, b) => a + b) / data.length;
  const variance = data.reduce((total, x) => total + (x - mean) ** 2, 0) / data.length;
  assert.equal(answer('jee', 'statistics-dispersion-1'), String(mean));
  assert.equal(answer('jee', 'statistics-dispersion-2'), String(variance));
  assert.equal(Math.sqrt(variance), 2 * Math.SQRT2, 'statistics-dispersion-3');
  assert.equal(answer('jee', 'statistics-dispersion-9'), `${(2 / 10) * 100}%`);
});
