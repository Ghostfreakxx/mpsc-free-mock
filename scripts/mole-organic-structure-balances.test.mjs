import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {idealRecycleModel,idealRecycleFlows,axialFace,chairPosition} from '../app/jee/classes/mole-chair-balances-data.ts';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`)),m=read('mole-concept'),o=read('organic-principles');const answer=(l,i)=>l.quiz[i].options[l.quiz[i].answer];const near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<t,`${a} != ${b}`);
test('wet gas calculation subtracts water pressure and conserves total gas moles',()=>{
 const totalP=1,waterP=.03,V=2.45,RT=24.5,dry=(totalP-waterP)*V/RT,water=waterP*V/RT;near(dry,.097);near(dry+water,totalP*V/RT);assert.equal(answer(m,40),'.970 atm');assert.equal(answer(m,41),'.0970 mol');
});
test('equal mass noble gas mixture agrees under reciprocal mass and direct mole weighting',()=>{
 const mass=[10,10],M=[4,20],n=mass.map((v,i)=>v/M[i]),total=n.reduce((a,b)=>a+b,0),mean=mass.reduce((a,b)=>a+b,0)/total;near(mean,20/3);near(1/(.5/4+.5/20),mean);near(n.reduce((s,v,i)=>s+v/total*M[i],0),mean);near(n[0]/total,5/6);assert.equal(answer(m,42),'20/3 g/mol');assert.equal(answer(m,43),'5/6');
});
test('mixed CO and CO2 combustion closes carbon hydrogen oxygen and total mass',()=>{
 const products={co2:.75,co:.25,water:2},oxygen=(2*products.co2+products.co+products.water)/2;near(products.co2+products.co,1);near(2*products.water,4);near(oxygen,1.875);near(16+32*oxygen,44*products.co2+28*products.co+18*products.water);assert.equal(answer(m,44),'1.875 mol');assert.match(answer(m,45),/Some carbon ends in CO/);
});
test('ideal recycle closes independent mixer reactor separator and external boundaries',()=>{
 const f=idealRecycleFlows(),x=idealRecycleModel.singlePassConversion;near(f.fresh+f.recycle,f.reactor);near(f.reactor*x,f.product);near(f.reactor*(1-x),f.recycle);near(f.fresh,f.product);near(f.recycle/f.fresh,1.5);assert.equal(answer(m,46),'250 mol/h');assert.equal(answer(m,47),'150 and100 mol/h');
});
test('neighboring methyl C-H inventory excludes hydrogens directly on charged carbon',()=>{
 const adjacentHydrogens=[[],[3],[3,3],[3,3,3]].map(sites=>sites.reduce((n,v)=>n+v,0));assert.deepEqual(adjacentHydrogens,[0,3,6,9]);assert.equal(answer(o,44),'3');assert.equal(answer(o,45),'9');
});
test('ring flip exchanges each position while preserving prescribed face',()=>{
 for(let carbon=1;carbon<=6;carbon++){assert.notEqual(axialFace(carbon,false),axialFace(carbon,true));for(const face of ['up','down'])assert.notEqual(chairPosition(carbon,face,false),chairPosition(carbon,face,true));}
 assert.equal(chairPosition(1,'up',false),'axial');assert.equal(chairPosition(1,'up',true),'equatorial');const ratio=Math.exp(7500/(8.314*300));assert.ok(ratio>20&&ratio<21);assert.equal(answer(o,46),'Equatorial-up');assert.match(answer(o,47),/Relative equilibrium populations/);
});
test('same-face and opposite-face substituted chairs follow numbered axial alternation',()=>{
 const pair=(positions,faces,flip)=>positions.map((carbon,i)=>chairPosition(carbon,faces[i],flip));assert.deepEqual(pair([1,2],['up','up'],false),['axial','equatorial']);assert.deepEqual(pair([1,2],['up','up'],true),['equatorial','axial']);assert.deepEqual(pair([1,2],['up','down'],false),['axial','axial']);assert.deepEqual(pair([1,2],['up','down'],true),['equatorial','equatorial']);assert.deepEqual(pair([1,3],['up','up'],true),['equatorial','equatorial']);assert.equal(answer(o,48),'One axial and one equatorial');assert.equal(answer(o,49),'trans-1,2 and cis-1,3');
});
test('simple allene axial distinction requires unequal substituents at both termini',()=>{
 const distinctEnds=ends=>ends.every(pair=>new Set(pair).size===2);assert.ok(distinctEnds([['H','CH3'],['H','CH3']]));assert.ok(!distinctEnds([['H','H'],['H','H']]));assert.ok(!distinctEnds([['H','CH3'],['H','H']]));assert.match(answer(o,50),/axis of chirality/);assert.match(answer(o,51),/identical hydrogens/);
});
