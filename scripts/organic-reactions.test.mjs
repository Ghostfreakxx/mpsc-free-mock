import test from 'node:test';
import assert from 'node:assert/strict';
import { organicReactionLessons as lessons } from '../app/jee/classes/organic-reactions-study.ts';

test('organic reaction foundations preserve official unit mapping and honest scope', () => {
  assert.deepEqual(lessons.map(l => l.unit), [15, 16]);
  for (const lesson of lessons) {
    assert.equal(lesson.sections.length, 8);
    assert.equal(lesson.examples.length, 3);
    assert.equal(lesson.quiz.length, 6);
    assert.match(lesson.remaining, /eight-chapter Marin recording/);
  }
});
test('HBr orientation and reductive ozonolysis practice keys retain reaction conditions', () => {
  assert.equal(lessons[0].quiz[0].options[lessons[0].quiz[0].answer], '2-bromopropane');
  assert.match(lessons[0].examples[0].answer, /With suitable peroxides: mainly 1-bromopropane/);
  assert.equal(lessons[0].quiz[2].options[lessons[0].quiz[2].answer], 'Two ethanal molecules');
  assert.match(lessons[0].examples[1].answer, /either geometrical isomer/);
  assert.equal((2 * 6 + 2 - 6) / 2, 4);
});
test('substitution rate changes follow both concentrations and mechanism scope', () => {
  const k = 3, substrate = 0.2, nucleophile = 0.4;
  assert.equal(k * (2 * substrate) * (2 * nucleophile) / (k * substrate * nucleophile), 4);
  assert.match(lessons[1].examples[0].answer, /four times/);
  assert.equal(lessons[1].quiz[2].options[lessons[1].quiz[2].answer], 'No direct change');
  assert.match(lessons[1].sections[2].paragraphs.join(' '), /does not always mean an R label becomes S/);
});
test('elimination and Grignard examples preserve carbon skeletons and quenching', () => {
  assert.match(lessons[1].examples[1].answer, /ethanol.*ethene/);
  assert.match(lessons[1].examples[2].answer, /Ethane; the reagent is quenched/);
  assert.equal(lessons[1].quiz[4].options[lessons[1].quiz[4].answer], 'Quenches it by proton transfer');
});
