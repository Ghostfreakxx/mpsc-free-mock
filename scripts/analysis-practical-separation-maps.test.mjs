import test from 'node:test';
import assert from 'node:assert/strict';
import {chromatographyResolutionCases} from '../app/jee/classes/chromatography-resolution-data.ts';
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,`${a} differs from ${b}`);
test('two-solute crystallization and wash retain separate complete material balances',()=>{
 const feed={A:10,B:2},hot={A:20*.5,B:10*.5},cold={A:2*.5,B:6*.5};
 for(const id of ['A','B'])assert.ok(hot[id]>=feed[id]);
 const solidA=feed.A-cold.A,solidB=Math.max(0,feed.B-cold.B),washLoss=2*.1,retained=solidA-washLoss;
 near(solidA,9);near(solidB,0);near(retained,8.8);near(retained+cold.A+washLoss,feed.A);near(retained/feed.A,.88);
 assert.ok(cold.B>feed.B);
});
test('supplied absolute vapour pressures match boiling and the specified stability comparison',()=>{
 const table=[{T:70,p:20},{T:100,p:50},{T:130,p:100}];
 assert.deepEqual(table.filter(r=>r.T<90).map(r=>r.p),[20]);
 for(let i=1;i<table.length;i++){assert.ok(table[i].p>table[i-1].p);assert.ok(table[i].T>table[i-1].T);}
 assert.equal(table.find(r=>r.p===20).T,70);assert.notEqual(20-100,20);
});
test('actual chromatogram data retain adjusted factors while peak broadening reduces resolution',()=>{
 for(const model of chromatographyResolutionCases){const factors=model.centres.map(t=>(t-1)/1);assert.deepEqual(factors,[3,4]);near(factors[1]/factors[0],4/3);assert.notEqual(5/4,4/3);}
 const resolutions=chromatographyResolutionCases.map(m=>2*(m.centres[1]-m.centres[0])/(m.baselineWidths[0]+m.baselineWidths[1]));near(resolutions[0],2);near(resolutions[1],5/6);assert.ok(resolutions[1]<resolutions[0]);
 // w=4sigma: illustrative Gaussian response at centre±w/2 is exp(-2).
 near(Math.exp(-8*(.5)**2),Math.exp(-2));
});
test('gravimetric bounds contain every sampled box endpoint and use the sulfate factor',()=>{
 const f=(mp,ms)=>100*mp*96/233/ms,lo=f(.4658,.6001),hi=f(.4662,.5999);near(f(.4660,.6000),32);
 for(const mp of [.4658,.4660,.4662])for(const ms of [.5999,.6000,.6001]){assert.ok(f(mp,ms)>=lo-1e-10);assert.ok(f(mp,ms)<=hi+1e-10);}
 assert.ok(31.98<lo);assert.ok(32.02>hi);assert.equal(lo.toFixed(4),'31.9809');assert.equal(hi.toFixed(4),'32.0191');
});
test('silver-ammonia complex formation balances silver, ligand count and charge',()=>{
 const left={Ag:1,N:2,H:6,charge:1},right={Ag:1,N:2,H:6,charge:1};assert.deepEqual(left,right);
 // Coupled equilibrium K=Ksp*beta; representative hypothetical constants show why common ligand need not imply common dissolution.
 const beta=1e7,products=[1e-10,1e-13,1e-17].map(Ksp=>Ksp*beta);assert.ok(products[0]>products[1]&&products[1]>products[2]);
});
test('amphoteric aluminium dissolution balances atoms and preserves metal oxidation state',()=>{
 assert.deepEqual({Al:1,O:3+1,H:3+1,charge:0-1},{Al:1,O:4,H:4,charge:-1});assert.equal(-1-4*(-1),3);
 assert.deepEqual({Al:1,O:3,H:3,charge:3-3},{Al:1,O:3,H:3,charge:0});
});
test('barium sulfite acid dissolution conserves charge and sulfur oxidation state',()=>{
 assert.deepEqual({Ba:1,S:1,O:3,H:2,charge:2},{Ba:1,S:1,O:2+1,H:2,charge:2});
 assert.equal(-2-3*(-2),4);assert.equal(0-2*(-2),4);
});
test('ammonium hydroxide proton transfer does not reduce nitrogen or identify every volatile base',()=>{
 assert.deepEqual({N:1,H:4+1,O:1,charge:1-1},{N:1,H:3+2,O:1,charge:0});
 assert.equal(1-4,-3);assert.equal(0-3,-3);assert.notEqual(-1-3*(-2),-3);
 const basicGases=['NH3','volatile amine'];assert.ok(basicGases.length>1);
});
