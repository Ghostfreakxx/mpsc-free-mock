import test from 'node:test';
import assert from 'node:assert/strict';
import { chemistryCoreLessons } from '../app/jee/classes/chemistry-core-study.ts';
const lesson = chemistryCoreLessons.find(l => l.id === 'coordination-compounds');
test('precipitation uses outer chloride and preserves cobalt charge balance', () => {
  assert.equal((0.0100 * 2 * 143.5).toFixed(2), '2.87');
  assert.match(lesson.examples[3].question, /coordination sphere remains intact/);
  assert.match(lesson.examples[3].answer, /2.87 g/);
  assert.equal(lesson.quiz[6].options[lesson.quiz[6].answer], '2');
  assert.equal(lesson.quiz[7].options[lesson.quiz[7].answer], '+3');
});
test('nickel and paired d6 examples retain correct model distinctions', () => {
  assert.equal(Math.sqrt(2 * (2 + 2)).toFixed(2), '2.83');
  assert.match(lesson.examples[5].answer, /tetrahedral, 2 unpaired/);
  const high = -0.4 * 250 + 180, low = -2.4 * 250 + 3 * 180;
  assert.equal(low - high, -140);
  assert.match(lesson.examples[6].answer, /lower by 140/);
  assert.equal(lesson.quiz[10].options[lesson.quiz[10].answer], '-2 Delta_o + 2P');
});
test('expanded practice includes naming and fac geometry with written scope', () => {
  assert.equal(lesson.examples.length, 28);
  assert.equal(lesson.quiz.length, 66);
  assert.equal(lesson.quiz[8].options[lesson.quiz[8].answer], 'Ammine');
  assert.equal(lesson.quiz[11].options[lesson.quiz[11].answer], 'All three A-A pairs cis');
  assert.match(lesson.remaining, /thirty-four-chapter Marin recording/);
});
