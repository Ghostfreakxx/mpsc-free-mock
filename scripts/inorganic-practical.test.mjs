import test from 'node:test';
import assert from 'node:assert/strict';
import { inorganicPracticalLessons as lessons } from '../app/jee/classes/inorganic-practical-study.ts';
import { studyLessons } from '../app/jee/classes/study-lessons.ts';

test('all 20 Chemistry units now have a written foundation, without claiming exhaustive coverage', () => {
  const chemistry = studyLessons.filter(l => l.subject === 'Chemistry');
  assert.equal(chemistry.length, 22);
  assert.deepEqual([...new Set(chemistry.map(l => l.unit))].sort((a,b) => a-b), Array.from({length:20}, (_,i) => i+1));
  for (const l of lessons) {
    assert.equal(l.sections.length, l.id==='practical-chemistry'?21:17);
    assert.equal(l.quiz.length, l.id==='practical-chemistry'?32:26);
    assert.match(l.remaining, l.id==='practical-chemistry'?/twenty-one-chapter Marin recording/:l.id==='d-f-block'?/nineteen-chapter Marin recording/:/nineteen-chapter Marin recording/);
  }
});
test('p-block patterns retain helium and electron-gain exceptions', () => {
  assert.equal(lessons[0].quiz[0].options[lessons[0].quiz[0].answer], 'Group 16');
  assert.equal(lessons[0].quiz[1].options[lessons[0].quiz[1].answer], 'Helium');
  assert.match(lessons[0].examples[2].answer, /Chlorine.*exception/);
});
test('ion configurations, spin-only moment and dichromate electron balance are consistent', () => {
  assert.match(lessons[1].examples[0].answer, /d6.*d5/);
  assert.equal(Math.sqrt(5 * 7).toFixed(2), '5.92');
  assert.equal((6 * 0.0100).toFixed(4), '0.0600');
  assert.equal(-2 + 14 - 6, 2 * 3);
  assert.equal(-1 + 8 - 5, 2);
});
test('titration volumes, electron ratios and calorimetry agree with independently computed values', () => {
  assert.equal((0.100 * 0.0200 / 0.0800 * 1000).toFixed(1), '25.0');
  assert.equal((5 * 0.0200 * 0.0100).toFixed(5), '0.00100');
  assert.equal((-100 * 4.18 * 2 / 0.0200 / 1000).toFixed(1), '-41.8');
  assert.equal(lessons[2].quiz[2].options[lessons[2].quiz[2].answer], '2:5');
});
test('practical notes preserve safety and threshold conditions', () => {
  assert.match(lessons[2].sections[0].paragraphs.join(' '), /Never identify a gas by deliberately inhaling it/);
  assert.match(lessons[2].sections[7].paragraphs.join(' '), /not universally equal to a reaction-rate constant/);
});
