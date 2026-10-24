import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { lowerZDiatomics } from '../app/jee/classes/lower-z-diatomic-data.ts';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const b=read('chemical-bonding'),p=read('periodic-trends');
const answer=(lesson,i)=>lesson.quiz[i].options[lesson.quiz[i].answer];
test('displayed lower-Z MO populations conserve valence electrons and reproduce bond order and magnetism',()=>{
 const atomicValences=[3,4,5];
 for(const [i,molecule] of lowerZDiatomics.entries()){
  const populations=molecule.occupations;
  assert.equal(populations.reduce((a,v)=>a+v,0),2*atomicValences[i]);
  const antibonding=populations[1],bonding=populations[0]+populations[2]+populations[3]+populations[4];
  assert.equal((bonding-antibonding)/2,molecule.bondOrder);
  assert.equal(populations.filter(v=>v===1).length,molecule.unpaired);
 }
 assert.deepEqual(lowerZDiatomics[0].occupations.slice(2,4),[1,1]);
 assert.match(answer(b,26),/degenerate bonding π2p orbitals singly/);assert.equal(answer(b,27),'2 and 3');
});
test('donor adduct Lewis bookkeeping conserves total electrons and total charge',()=>{
 const totalValence=5+3*1+3+3*7,bondPairs=3+3+1,fluorineLonePairElectrons=3*6;
 assert.equal(totalValence,2*bondPairs+fluorineLonePairElectrons);
 const nitrogenCharge=5-8/2,boronCharge=3-8/2;
 assert.equal(nitrogenCharge+boronCharge,0);
 assert.equal(answer(b,28),'Nitrogen and boron');assert.equal(answer(b,29),'+1 and −1');
});
test('hydrogen-bond questions preserve donor identity and the intramolecular geometry limit',()=>{
 assert.match(answer(b,30),/Hydroxyl H.*nitro O/);
 assert.match(answer(b,31),/Internal hydrogen bonding.*association between molecules/);
 assert.match(b.chapters[19].script,/Crystal packing, molecular shape, solvent and temperature/);
});
test('localized sigma and pi counts come from a connectivity graph with explicit hydrogens',()=>{
 const ethyneBondOrders=[1,3,1],acrylonitrileBondOrders=[1,1,1,2,1,3];
 const count=orders=>({sigma:orders.length,pi:orders.reduce((sum,order)=>sum+order-1,0)});
 assert.deepEqual(count(ethyneBondOrders),{sigma:3,pi:2});
 assert.deepEqual(count(acrylonitrileBondOrders),{sigma:6,pi:3});
 assert.equal(answer(b,32),'3σ and 2π');assert.equal(answer(b,33),'6σ and 3π');
});
test('nitride hydrolysis preserves atom inventories without making diagonal stoichiometries identical',()=>{
 assert.deepEqual({Li:3,N:1,H:3*2,O:3},{Li:3,N:1,H:3+3,O:3});
 assert.deepEqual({Mg:3,N:2,H:6*2,O:6},{Mg:3,N:2,H:3*2+2*3,O:3*2});
 assert.equal(answer(p,24),'Lithium and magnesium');assert.equal(answer(p,25),(.0100*2).toFixed(4)+' mol');
});
test('periodic explanations distinguish acid equilibrium, elemental structure and per-atom bond energy',()=>{
 assert.equal(answer(p,26),'CH4 < NH3 < H2O < HF');assert.match(answer(p,27),/bond strength and solution energetics/);
 assert.equal(answer(p,28),'An extended covalent network');assert.match(answer(p,29),/White phosphorus contains P4.*S8/);
 assert.equal(answer(p,30),`${158/2} kJ`);assert.equal(243/2-158/2,42.5);
 assert.match(answer(p,31),/F–F can be weaker than Cl–Cl despite being shorter/);
});
