import test from 'node:test';
import assert from 'node:assert/strict';
import { inductionApplicationsLesson as lesson } from '../app/jee/classes/induction-applications-study.ts';
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-9*Math.max(1,Math.abs(b)));
test('Sliding rod conserves mechanical and electrical power',()=>{const b=.5,l=.4,v=3,r=2,e=b*l*v,i=e/r,f=b*i*l;close(e,.6);close(f,.06);close(f*v,i*i*r);close(f*v,.18);});
test('Rotating rod integrates speed and conserves torque power',()=>{const b=.4,w=20,l=.5,r=5,e=b*w*l*l/2,i=e/r,t=b*i*l*l/2;close(e,1);close(t,.01);close(t*w,i*i*r);assert.ok(lesson.examples[1].answer.includes('0.010 N m'));});
test('RL growth and stored energy have correct limits',()=>{const l=.5,r=5,e=10,tau=l/r;close(tau,.1);const current=t=>e/r*(1-Math.exp(-t/tau));close(current(0),0);close(current(tau),2*(1-Math.exp(-1)));close(l*(e/r)**2/2,1);});
test('Resonance distinguishes source and reactive voltages',()=>{const l=.2,c=20e-6,r=10,v=20,w=1/Math.sqrt(l*c),i=v/r;close(w,500);close(w*l,1/(w*c));close(i*w*l,200);close(i*i*r,40);});
test('Half-power endpoints have exact bandwidth and geometric mean',()=>{const l=.2,c=20e-6,r=10,d=Math.sqrt(r*r+4*l/c),low=(d-r)/(2*l),high=(d+r)/(2*l);close(high-low,r/l);close(low*high,1/(l*c));for(const w of [low,high])close(Math.abs(w*l-1/(w*c)),r);});
