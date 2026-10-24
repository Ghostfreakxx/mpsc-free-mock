import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const h=read('hydrocarbons'),p=read('practical-chemistry');
const answer=(lesson,i)=>lesson.quiz[i].options[lesson.quiz[i].answer];
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-12);
test('hydration and strong cleavage preserve carbons with the specified functional classes',()=>{
 assert.equal(answer(h,24),'Propan-1-ol');assert.match(answer(h,25),/^Syn,.*avoiding a free carbocation/);
 assert.equal(answer(h,26),'Ethanoic acid and carbon dioxide');
 assert.equal(answer(h,27),'Propanone and ethanoic acid');
 const products=[{substrate:3,carbons:[2,1]},{substrate:5,carbons:[3,2]}];
 for(const row of products)assert.equal(row.carbons.reduce((sum,n)=>sum+n,0),row.substrate);
 assert.match(h.chapters[18].script,/Cold dilute permanganate.*vicinal diol/);
});
test('common-product enthalpy subtraction and mixed Wurtz pairings are independently reconstructed',()=>{
 const final=-200,dA=-120,dB=-116,startA=final-dA,startB=final-dB;
 assert.equal(startA-startB,4);assert.equal(answer(h,28),`B starts ${startA-startB} kJ/mol lower in enthalpy`);
 assert.match(answer(h,29),/common product.*matched stoichiometry/);
 const groupCarbons=[1,2],skeletons=new Set();
 for(const a of groupCarbons)for(const b of groupCarbons)skeletons.add(a+b);
 assert.deepEqual([...skeletons],[2,3,4]);
 assert.equal(answer(h,30),'Ethane, propane and butane');assert.match(answer(h,31),/Self and cross coupling/);
});
test('carbonate endpoints solve the two independent proton balances',()=>{
 const c=.100,first=.010,total=.026,carbonate=c*first,bicarbonate=c*total-2*carbonate;
 near(carbonate,.001);near(bicarbonate,.0006);near(2*carbonate+bicarbonate,c*total);
 assert.equal(answer(p,26),(1000*bicarbonate).toFixed(3)+' mmol');
 assert.equal(answer(p,27),((total-first)*1000).toFixed(2)+' mL');
 assert.match(answer(p,24),/conjugate base hydrolyses/);assert.equal(Number(answer(p,25)),4.76);
 // A negative bicarbonate amount is incompatible with the carbonate/bicarbonate-only model.
 assert.ok(c*.015-2*carbonate<0);
});
test('whole-sample assay restores flask factor without changing titration stoichiometry',()=>{
 const titre=.01000,oxidant=.0200,ironAliquot=5*titre*oxidant,factor=.2500/.02500;
 assert.equal(answer(p,28),(ironAliquot*factor*1000).toFixed(1)+' mmol');
 const sampleMass=1,percent=ironAliquot*factor*56/sampleMass*100;
 assert.equal(answer(p,29),percent.toFixed(1)+'%');
 near(ironAliquot,.001);assert.equal(factor,10);
});
test('iodine clock conserves sulfur, charge and threshold conversion before comparing time',()=>{
 assert.deepEqual({S:2*2,O:2*3,I:2,charge:2*(-2)},{S:4,O:6,I:2,charge:-2+2*(-1)});
 const thiosulfate=1,threshold=thiosulfate/2;
 assert.equal(answer(p,30),threshold.toFixed(3)+' mmol');
 assert.equal((threshold/20)/(threshold/40),2);assert.equal(answer(p,31),'A factor of 2 increase');
 assert.match(p.chapters[20].script,/not automatically an instantaneous rate constant/);
});
