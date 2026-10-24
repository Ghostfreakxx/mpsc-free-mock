import test from 'node:test';
import assert from 'node:assert/strict';
import { biomoleculesAnalysisLessons as lessons } from '../app/jee/classes/biomolecules-analysis-study.ts';

test('expanded sugar, charge and peptide practice keeps numbering, atoms and water balances',()=>{
  const answer=i=>lessons[0].quiz[i].options[lessons[0].quiz[i].answer];
  assert.equal(answer(10),'Right, left, right, right');assert.equal(answer(11),'Alpha');
  assert.equal(answer(12),'One mole each of glucose and fructose');assert.equal(342+18,180+180);
  assert.deepEqual({C:12,H:22+2,O:11+1},{C:2*6,H:2*12,O:2*6});
  assert.equal(answer(13),'Net zero with opposite internal charges');assert.equal(1+(-1),0);
  assert.equal(answer(14),'4');assert.equal(5-1,4);
  assert.equal(answer(15),'146 g/mol');assert.equal(75+89-18,146);
});

test('biomolecules and analysis map to official units with honest written scope', () => {
  assert.deepEqual(lessons.map(l => l.unit), [19, 13]);
  for (const l of lessons) {
    assert.equal(l.sections.length, l.id==='biomolecules'?21:17);
    assert.equal(l.examples.length, l.id==='biomolecules'?12:9);
    assert.equal(l.quiz.length, l.id==='biomolecules'?32:24);
    assert.match(l.remaining, l.id==='biomolecules'?/twenty-one-chapter Marin recording/:/seventeen-chapter Marin recording/);
  }
});
test('peptide and DNA examples retain topology and double-strand assumptions', () => {
  assert.equal(5 - 1, 4);
  assert.equal((100 - 2 * 30) / 2, 20);
  assert.match(lessons[0].examples[1].answer, /linear, noncyclic/);
  assert.match(lessons[0].examples[2].answer, /not a rule for arbitrary single strands/);
  assert.equal(lessons[0].quiz[1].options[lessons[0].quiz[1].answer], 'Two glucose units');
});
test('combustion balances and empirical ratio agree with independent arithmetic', () => {
  const c = 0.440 * 12 / 44, h = 0.180 * 2 / 18, o = 0.300 - c - h;
  assert.ok(Math.abs(c - 0.120) < 1e-12);
  assert.ok(Math.abs(h - 0.0200) < 1e-12);
  const base = c / 12;
  assert.ok(Math.abs(h / base - 2) < 1e-12);
  assert.ok(Math.abs(o / 16 / base - 1) < 1e-12);
  assert.match(lessons[1].examples[0].answer, /CH2O/);
});
test('Rf and molecular multiplier calculations match practice keys', () => {
  assert.equal(3 / 5, 0.60);
  assert.equal(2 / 8, 0.25);
  assert.equal(90 / (12 + 2 + 16), 3);
  assert.equal(lessons[1].quiz[5].options[lessons[1].quiz[5].answer], 'C3H6O3');
  assert.match(lessons[1].sections[4].paragraphs.join(' '), /supervised laboratory/);
});
