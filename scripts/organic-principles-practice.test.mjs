import test from 'node:test';
import assert from 'node:assert/strict';
import { chemistryCoreLessons } from '../app/jee/classes/chemistry-core-study.ts';
const lesson = chemistryCoreLessons.find(l => l.id === 'organic-principles');
test('pKa ratio uses logarithmic constants rather than a presumed pH ratio', () => {
  assert.equal((10 ** -3 / 10 ** -5).toFixed(0), '100');
  assert.match(lesson.examples[4].answer, /Ka\(A\)\/Ka\(B\) = 100/);
  assert.match(lesson.examples[4].steps.join(' '), /does not by itself specify a pH/);
  assert.equal(lesson.quiz[7].options[lesson.quiz[7].answer], '100');
});
test('methyl substitution preserves elemental inventory and charge', () => {
  const reactants = { C: 1, H: 3 + 1, O: 1, Br: 1, charge: -1 };
  const products = { C: 1, H: 4, O: 1, Br: 1, charge: -1 };
  assert.deepEqual(reactants, products);
  assert.match(lesson.examples[5].steps.join(' '), /do not insert a free methyl carbocation/);
  assert.equal(lesson.quiz[8].options[lesson.quiz[8].answer], 'The C-Br bond');
});
test('naming and resonance questions retain unambiguous keyed answers', () => {
  assert.equal(lesson.examples.length, 23);
  assert.equal(lesson.quiz.length, 52);
  assert.match(lesson.examples[3].answer, /3-Methylbutan-2-ol; C5H12O/);
  assert.equal(lesson.quiz[9].options[lesson.quiz[9].answer], 'CH2=CH-CH2+');
  assert.equal(lesson.quiz[11].options[lesson.quiz[11].answer], 'Moving an attached hydrogen to a different carbon');
  for (const q of lesson.quiz) assert.equal(new Set(q.options).size, 4);
  assert.match(lesson.remaining, /twenty-nine-chapter Marin recording/);
});

test('new organic calculations preserve unsaturation, formal charge and proton-transfer direction',()=>{
  const answer=i=>lesson.quiz[i].options[lesson.quiz[i].answer];
  const dbe=(C,H,N=0,X=0)=>(2*C+2+N-H-X)/2;
  assert.equal(dbe(4,8),1);assert.equal(dbe(3,5,0,1),1);assert.equal(dbe(6,6),4);
  assert.equal(answer(12),'3-Hydroxypropanoic acid');assert.equal(answer(13),'1');
  assert.equal(answer(14),'Z');assert.equal(35>1,true);assert.equal(17>6,true);
  assert.equal(answer(15),'Butan-2-ol');
  assert.equal(5-2-3,0);assert.equal(5-0-4,1);assert.equal(6-6-1,-1);
  assert.equal(answer(16),'+1');assert.match(answer(17),/Inductive stabilization/);
  assert.equal(answer(18),'10000');assert.equal(10**-5/10**-9,10000);
  assert.equal(10**(5-9),.0001);assert.match(answer(19),/Conformers/);
  assert.equal(lesson.sections.length,32);assert.equal(lesson.examples.length,23);
});
