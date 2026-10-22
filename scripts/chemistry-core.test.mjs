import test from 'node:test';
import assert from 'node:assert/strict';
import { chemistryCoreLessons as lessons } from '../app/jee/classes/chemistry-core-study.ts';

test('new Chemistry foundations map to official units and distinguish written scope from recordings', () => {
  assert.deepEqual(lessons.map(l => l.unit), [8, 12, 14]);
  for (const l of lessons) {
    assert.equal(l.sections.length, l.id === 'organic-principles' ? 16 : 17);
    assert.equal(l.examples.length, l.id === 'organic-principles' ? 11 : 13);
    assert.equal(l.quiz.length, l.id === 'organic-principles' ? 20 : 26);
    assert.match(l.remaining, l.id === 'organic-principles' ? /thirteen-chapter Marin recording/ : /fourteen-chapter Marin recording/);
  }
});
test('initial-rate orders, first-order times and Arrhenius example agree independently', () => {
  assert.equal(Math.log(0.008 / 0.002) / Math.log(2), 2);
  assert.equal(Math.log(0.004 / 0.002) / Math.log(2), 1);
  assert.ok(Math.abs(0.002 / (0.1 ** 2 * 0.1) - 2) < 1e-12);
  assert.equal(0.5 ** 3, 0.125);
  assert.equal((Math.log(10) / (Math.log(2) / 10)).toFixed(1), '33.2');
  assert.equal((8.314 * Math.log(2) / (1 / 300 - 1 / 310) / 1000).toFixed(1), '53.6');
});
test('coordination charges, donor counts, spin moment and field energy are consistent', () => {
  assert.equal(-4 - 6 * (-1), 2);
  assert.equal(3 * 2, 6);
  assert.equal(Math.sqrt(4 * 6).toFixed(2), '4.90');
  assert.ok(Math.abs(4 * (-0.4) + 2 * 0.6 - (-0.4)) < 1e-12);
  assert.match(lessons[1].examples[2].answer, /4 unpaired/);
  assert.equal(lessons[1].quiz[4].options[lessons[1].quiz[4].answer], '0');
});
test('organic examples preserve bond counting and geometrical-isomer conditions', () => {
  assert.match(lessons[2].examples[0].answer, /5 sigma bonds and 1 pi bond/);
  assert.match(lessons[2].examples[2].answer, /CH2=CHCl cannot/);
  assert.equal(lessons[2].quiz[4].options[lessons[2].quiz[4].answer], 'But-2-ene');
  assert.equal(lessons[2].quiz[1].options[lessons[2].quiz[1].answer], 'NH3');
});

test('extended kinetics questions agree with stoichiometry and independent logarithmic calculations', () => {
  const answer=i=>lessons[0].quiz[i].options[lessons[0].quiz[i].answer];
  assert.equal(answer(12),'0.0020 M/s');assert.equal(.004/2,.002);assert.equal(.002*4,.008);
  assert.equal(answer(13),'0.010 s⁻¹');assert.equal(.020*.50,.010);
  assert.equal(answer(14),'23.1 min');assert.equal((Math.log(2)/.030).toFixed(1),'23.1');
  assert.equal(answer(15),'99.7 min');assert.equal((10*Math.log(1000)/Math.log(2)).toFixed(1),'99.7');
  assert.equal(answer(16),'110 kJ/mol');assert.equal(80-(-30),110);assert.equal(60-(-30),90);
  assert.equal(80-110,-30);assert.equal(60-90,-30);
  assert.match(answer(17),/approximately constant/);
});

test('coordination geometry, charges and formation constants agree independently', () => {
  const answer=i=>lessons[1].quiz[i].options[lessons[1].quiz[i].answer];
  const dot=(a,b)=>a.reduce((sum,x,i)=>sum+x*b[i],0);
  const pairs=v=>[dot(v[0],v[1]),dot(v[0],v[2]),dot(v[1],v[2])];
  assert.deepEqual(pairs([[1,0,0],[0,1,0],[0,0,1]]),[0,0,0]);
  assert.deepEqual(pairs([[1,0,0],[-1,0,0],[0,0,1]]),[-1,0,0]);
  assert.equal(answer(12),'Linkage isomerism');assert.equal(answer(13),'Three cis pairs');
  assert.equal(answer(14),'One');assert.equal(answer(15),'6 and +3');assert.equal(3*2,6);
  assert.equal(3-1,2);assert.equal(3-2,1);assert.equal(1+2*(-1),-1);
  assert.equal(answer(16),'10^7');assert.equal(1e4*1e3,1e7);
  assert.match(answer(17),/Chlorophyll: Mg; haem: Fe; vitamin B12: Co/);
});
