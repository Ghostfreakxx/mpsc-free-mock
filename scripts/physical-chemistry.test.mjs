import test from 'node:test';
import assert from 'node:assert/strict';
import { physicalChemistryLessons as lessons } from '../app/jee/classes/physical-chemistry-study.ts';
const near = (a, b, tolerance = 1e-10) => assert.ok(Math.abs(a - b) < tolerance, `${a} != ${b}`);

test('physical Chemistry lessons map to Units 4 and 5 with recorded companion scope', () => {
  assert.deepEqual(lessons.map(l => [l.id, l.unit]), [['chemical-thermodynamics', 4], ['solutions', 5]]);
  for (const lesson of lessons) {
    assert.equal(lesson.subject, 'Chemistry');
    assert.equal(lesson.sections.length, 17);
    assert.equal(lesson.examples.length, 9);
    assert.equal(lesson.quiz.length, 18);
    assert.match(lesson.remaining, /fifteen-chapter Marin recording/);
    assert.ok(lesson.sources.some(s => s.url.includes('jeemain.nta.nic.in')));
  }
});

test('thermochemistry arithmetic preserves Chemistry work signs, Hess cancellation and entropy units', () => {
  near(500 - 2 * 1 * 100, 300);
  near(-394 + 283, -111);
  near(-40 - 300 * (-100/1000), -10);
  near(-40 - 500 * (-100/1000), 10);
  near((-40)/(-.100), 400);
  near(Math.exp(5744/(8.314*300)), 10, .005);
  assert.deepEqual(lessons[0].quiz.slice(0,6).map(q => q.answer), [1, 2, 0, 3, 1, 2]);
});

test('solution calculations use solvent mass and solution volume in the correct places', () => {
  near(100 * 20/(20+180), 10);
  near((20/100)/(.180), 10/9);
  near(1.86 * (.0100/.100), .186);
  near(.1 * .082057 * 300, 2.46171);
  near(2 * .082057 * 300/.246, 200.1390243902439);
  near(.5*80 + .5*40, 60);
  near((.5*80)/60, 2/3);
  assert.deepEqual(lessons[1].quiz.slice(0,6).map(q => q.answer), [2, 0, 3, 1, 2, 0]);
});

test('particle accounting reproduces dissociation and association limits', () => {
  const dissociation = (alpha, particles) => 1 + alpha * (particles - 1);
  const association = (alpha, size) => 1 - alpha * (1 - 1/size);
  near(dissociation(0, 2), 1);
  near(dissociation(1, 2), 2);
  near(dissociation(.8, 2), 1.8);
  near(association(.5, 2), .75);
  near(association(1, 2), .5);
  near(180/.75, 240);
});

test('extended applications agree with independent heat, entropy and solution balances', () => {
  const selected=(unit,i)=>lessons[unit].quiz[i].options[lessons[unit].quiz[i].answer];
  const energy=(-394 + 2*(-286))-(-75);
  assert.equal(selected(0,6),`${energy} kJ/mol`.replace('-','−'));
  assert.equal(selected(0,7),'+30 kJ/mol');near(780-750,30);
  assert.equal(selected(0,8),'1000 J');near((100*4.2+80)*2,1000);
  assert.equal(selected(0,9),'+20 J/(mol K)');near(6000/300,20);
  assert.equal(selected(0,10),'20.8 J/(mol K)');near(30*Math.log(600/300),20.8,.01);
  assert.equal(selected(0,11),'−3 kJ/mol');near(-6-300*(-.010),-3);
  assert.equal(selected(1,6),'980 g');near(1000*1.04-60,980);
  assert.equal(selected(1,7),'1.02 mol/kg');near(1/.980,1.02,.001);
  assert.equal(selected(1,8),'5 × 10⁻⁵');near(2/40000,.00005);
  assert.equal(selected(1,9),'Have the same composition');
  assert.equal(selected(1,10),'180 g/mol');near(1.8/((.052/.52)*.1),180);
  assert.equal(selected(1,11),'0.80');near((2.6-1)/2,.8);
  near(2.6*(.1/2.6),.1);
});

test('new thermodynamic and solution quiz answers agree with independent balances', () => {
 const selected=(unit,i)=>lessons[unit].quiz[i].options[lessons[unit].quiz[i].answer];
 assert.deepEqual(lessons[0].quiz.slice(12).map(q=>q.answer),[2,3,0,1,2,3]);
 assert.deepEqual(lessons[1].quiz.slice(12).map(q=>q.answer),[0,2,3,1,0,2]);
 near(-8.314*300*Math.log(4/2)/1000,-1.729,.001);
 near(300*2**(2/3),476.2,.03);
 near(-100+50*(398-298)/1000,-95);
 near(2*193-(192+3*131),-199);
 near(-92-298*(-199/1000),-32.7,.01);
 near(-560+(0-3)*.008314*300,-567.48,.01);
 near(27/1.1,24.55,.005);
 near(1.86*(.0100+2*.0200)/.100,.930);
 near(2*(1-60/80),.5);
 near(.082057*300*(.200-.100),2.46,.002);
 assert.ok(3 > .082057*300*(.200-.100));
 assert.match(selected(0,12),/1.729/);assert.match(selected(1,12),/24.55/);
});
