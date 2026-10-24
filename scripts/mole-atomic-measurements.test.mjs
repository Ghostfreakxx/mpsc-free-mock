import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { hydrogen2sRadial as s, hydrogen2pRadial as p } from '../app/jee/classes/excited-radial-functions.ts';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const mole=read('mole-concept'),atomic=read('atomic-structure');
const answer=(lesson,i)=>lesson.quiz[i].options[lesson.quiz[i].answer];
const near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<t,`${a} != ${b}`);
test('trace concentration and mixture fractions retain their denominators',()=>{
 assert.equal(answer(mole,24),(3/1.2).toFixed(2)+' ppm');assert.equal(answer(mole,25),'1000 mass-based ppb');
 const n=[2,1],M=[4,28],masses=n.map((v,i)=>v*M[i]),totalMass=masses.reduce((a,b)=>a+b),totalN=n.reduce((a,b)=>a+b);
 assert.equal(answer(mole,26),`${n[0]/totalN*3} bar`);assert.equal(answer(mole,27),'2/9');
 near(masses[0]/totalMass,2/9);assert.equal(totalMass/totalN,12);
 near(n.map(v=>v/totalN*3).reduce((a,b)=>a+b),3);
});
test('precipitation leaves conserved reactant and spectator amounts',()=>{
 const silver=.025*.100,chloride=.040*.0500,precipitated=Math.min(silver,chloride),remaining=silver-precipitated;
 assert.equal(answer(mole,28),(precipitated*143.5).toFixed(3)+' g');
 assert.equal(answer(mole,29),(remaining/(.025+.040)).toFixed(5)+' M');
 near(remaining+precipitated,silver);near(precipitated,chloride);
 // Remaining dissolved charge: Ag+ + Na+ balances NO3− in the complete-precipitation model.
 near(remaining+chloride,silver);
});
test('atom economy, isolated yield and balanced ester atom counts stay distinct',()=>{
 assert.deepEqual({C:2+2,H:4+6,O:2+1},{C:4,H:8+2,O:2+1});
 assert.equal(answer(mole,30),(88/(60+46)*100).toFixed(1)+'%');
 assert.equal(answer(mole,31),(88*.8).toFixed(1)+' g');
 assert.equal(60+46,88+18);
});
test('head-on alpha turning distance follows energy conservation without becoming a nuclear radius',()=>{
 const Z=79,K=5,r=2*Z*1.44/K;
 assert.equal(answer(atomic,26),r.toFixed(1)+' fm');near(2*Z*1.44/r,K);
 near(2*Z*1.44/(2*K),r/2);assert.equal(answer(atomic,27),'Half the original');
});
test('plotted excited radial distributions are nonnegative, normalized and have the stated node topology',()=>{
 assert.equal(s(2),0);assert.ok(s(1.99)>0&&s(2.01)>0);assert.equal(p(0),0);assert.ok(p(2)>0);
 let areaS=0,areaP=0;const dx=.001;
 for(let x=dx/2;x<50;x+=dx){assert.ok(s(x)>=0&&p(x)>0);areaS+=s(x)*dx;areaP+=p(x)*dx;}
 near(areaS,1,1e-8);near(areaP,1,1e-8);
 assert.ok(p(4)>p(3.99)&&p(4)>p(4.01));
 assert.equal(answer(atomic,28),'x=2');assert.match(answer(atomic,29),/one radial node.*angular nodal plane/);
});
test('equal-energy matter waves and photon collection use independent momentum and energy balances',()=>{
 const electronMass=1,protonMass=1836,K=2;
 const electronP=Math.sqrt(2*electronMass*K),protonP=Math.sqrt(2*protonMass*K);
 assert.equal(answer(atomic,30),(protonP/electronP).toFixed(1));assert.equal(answer(atomic,31),String(protonMass/electronMass));
 const e=1.60e-19,energy=4*e,power=.004,photonRate=power/energy,current=e*.2*photonRate;
 near(photonRate/1e15,6.25);near(current*1000,.2);
 assert.equal(answer(atomic,32),'6.25×10^15 s^−1');assert.equal(answer(atomic,33),(current*1000).toFixed(3)+' mA');
});
