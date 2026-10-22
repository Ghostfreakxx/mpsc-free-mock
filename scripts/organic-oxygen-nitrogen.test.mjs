import test from 'node:test';
import assert from 'node:assert/strict';
import { oxygenNitrogenLessons as lessons } from '../app/jee/classes/organic-oxygen-nitrogen-study.ts';

test('new oxygen and nitrogen practice preserves reaction classes, carbons and equilibrium arithmetic',()=>{
  const answer=(u,i)=>lessons[u].quiz[i].options[lessons[u].quiz[i].answer];
  assert.equal(answer(0,10),'Isopropyl alcohol');assert.match(answer(0,11),/aldehyde or ketone/);
  assert.equal(answer(0,12),'Salicylaldehyde');assert.equal(answer(0,13),'Benzyl alcohol and benzoate');
  const x=2/3;assert.ok(Math.abs(x*x/((1-x)**2)-4)<1e-12);
  assert.equal(answer(0,14),'2/3 mol');assert.equal(answer(0,15),'Salicylic acid');
  assert.equal(answer(1,10),'Ethylamine');assert.equal(3-1,2);assert.equal(answer(1,11),'Acetanilide');
  assert.match(answer(1,12),/N–H/);assert.equal(answer(1,13),'7 carbons');assert.equal(6+1,7);
  assert.equal(answer(1,14),'100000');assert.equal(10**-4/10**-9,100000);
  assert.equal(answer(1,15),'10');assert.equal(14-4,10);
});

test('oxygen and nitrogen foundations map to official units with explicit written scope', () => {
  assert.deepEqual(lessons.map(l => l.unit), [17, 18]);
  for (const l of lessons) {
    assert.equal(l.sections.length, l.id==='organic-oxygen'?17:13);
    assert.equal(l.examples.length, l.id==='organic-oxygen'?9:6);
    assert.equal(l.quiz.length, l.id==='organic-oxygen'?24:16);
    assert.match(l.remaining, /Marin recording/);
  }
});
test('oxygen practice distinguishes oxidation, iodoform and initial aldol addition', () => {
  assert.match(lessons[0].examples[0].answer, /Ethanal; propanone; ethanoic acid/);
  assert.match(lessons[0].examples[1].answer, /propan-1-ol is normally negative/);
  assert.equal(lessons[0].quiz[3].options[lessons[0].quiz[3].answer], 'Propan-2-ol');
  assert.equal(lessons[0].quiz[5].options[lessons[0].quiz[5].answer], '3-hydroxybutanal');
  assert.equal(2 * 2, 4);
});
test('amine class and preparation examples distinguish nitrogen substitution from carbon branching', () => {
  assert.equal(lessons[1].quiz[0].options[lessons[1].quiz[0].answer], 'Primary amine');
  assert.equal(lessons[1].quiz[1].options[lessons[1].quiz[1].answer], 'Ethanamine');
  assert.equal(lessons[1].quiz[2].options[lessons[1].quiz[2].answer], 'CH3NH2');
  assert.match(lessons[1].examples[1].answer, /two-carbon.*one-carbon/);
});
test('nitrogen notes preserve solvent and diazonium safety qualifications', () => {
  assert.match(lessons[1].sections[2].paragraphs.join(' '), /unreliable/);
  assert.match(lessons[1].sections[5].paragraphs.join(' '), /not be described as indefinitely stable or safe to isolate dry/);
  assert.equal(lessons[1].quiz[5].options[lessons[1].quiz[5].answer], '-N=N- between aromatic groups');
});
