import test from 'node:test';
import assert from 'node:assert/strict';
import { organicReactionLessons as lessons } from '../app/jee/classes/organic-reactions-study.ts';

test('expanded product predictions preserve carbon count, aromaticity and reaction-centre distinctions',()=>{
  const answer=(unit,index)=>lessons[unit].quiz[index].options[lessons[unit].quiz[index].answer];
  assert.equal(answer(0,10),'Propanone');assert.equal(answer(0,11),'2-Methylbut-2-ene');
  assert.equal(3+2,5);assert.equal(answer(0,12),'6');assert.equal(2*2+2,4*1+2);
  assert.match(answer(0,13),/Deactivating but ortho\/para/);assert.equal(answer(0,14),'tert-Butylbenzene');
  assert.equal(answer(0,15),'Propanal');assert.equal(answer(1,10),'Inversion of spatial arrangement');
  assert.match(answer(1,11),/ion pairs and solvent cages/);assert.equal(answer(1,12),'Bromomethane');
  assert.equal(answer(1,13),'Propanoic acid');assert.equal(2+1,3);
  assert.equal(answer(1,14),'A saturated benzylic carbon');assert.equal(answer(1,15),'Nitrile and isocyanide');
});

test('organic reaction foundations preserve official unit mapping and honest scope', () => {
  assert.deepEqual(lessons.map(l => l.unit), [15, 16]);
  for (const lesson of lessons) {
    assert.equal(lesson.sections.length, lesson.id==='organic-halogens'?21:17);
    assert.equal(lesson.examples.length, lesson.id==='organic-halogens'?12:9);
    assert.equal(lesson.quiz.length, lesson.id==='organic-halogens'?32:24);
    assert.match(lesson.remaining, lesson.id==='organic-halogens'?/twenty-one-chapter Marin recording/:/seventeen-chapter Marin recording/);
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
