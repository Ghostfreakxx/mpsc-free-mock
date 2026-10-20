import test from 'node:test';
import assert from 'node:assert/strict';
import { capacitorApplicationsLesson as lesson } from '../app/jee/classes/capacitor-applications-study.ts';
test('Charge-sharing charge and energy balances', () => {
  const c1=2, c2=4, v1=12, v2=0;
  const vf=(c1*v1+c2*v2)/(c1+c2);
  assert.equal(vf,4);
  assert.equal(c1*vf+c2*vf,24);
  assert.equal((c1*v1*v1+c2*v2*v2-(c1+c2)*vf*vf)/2,96);
  assert.ok(lesson.examples[0].answer.includes('96 microJ'));
});
test('Area filling has correct empty and full limits', () => {
  const ratio=(f,k)=>1-f+k*f;
  assert.equal(ratio(0,3),1); assert.equal(ratio(1,3),3);
  assert.equal(ratio(.5,3),2); assert.equal(ratio(.7,1),1);
});
test('Thickness filling differs from area filling', () => {
  const ratio=(g,k)=>1/(1-g+g/k);
  assert.equal(ratio(0,3),1); assert.equal(ratio(1,3),3);
  assert.equal(ratio(.5,3),1.5); assert.equal(ratio(.7,1),1);
});
test('Battery work and external work close energy balance', () => {
  const source=10**2*(6-2), deltaU=source/2, external=deltaU-source;
  assert.equal(source,400); assert.equal(external,-200);
  assert.equal(source+external,deltaU);
  assert.equal(lesson.quiz[3].options[lesson.quiz[3].answer],'-200 microJ');
});
test('Initially charged floating node has unequal capacitor charges', () => {
  const vb=(6+2*12)/(2+4);
  assert.equal(vb,5); assert.equal(2*(vb-12)+4*vb,6);
  assert.equal(Math.abs(2*(vb-12)),14); assert.equal(4*vb,20);
});
