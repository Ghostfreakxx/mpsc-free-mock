import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {peroxideRedoxPaths,magneticMixtureModel,spinOnlySquare,mixtureMomentSquare} from '../app/jee/classes/inorganic-redox-measurements-data.ts';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`)),p=read('p-block'),d=read('d-f-block');const answer=(l,i)=>l.quiz[i].options[l.quiz[i].answer];const near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<t,`${a} != ${b}`);
const sum=(species,terms)=>Array.from({length:Object.values(species)[0].length},(_,i)=>terms.reduce((v,[n,s])=>v+n*species[s][i],0));
test('both phosphorus complete hydrolysis equations conserve atoms without changing P oxidation state',()=>{
 // Coordinates P,Cl,H,O.
 const s={p3:[1,3,0,0],p5:[1,5,0,0],water:[0,0,2,1],a3:[1,0,3,3],a4:[1,0,3,4],hcl:[0,1,1,0]};assert.deepEqual(sum(s,[[1,'p3'],[3,'water']]),sum(s,[[1,'a3'],[3,'hcl']]));assert.deepEqual(sum(s,[[1,'p5'],[4,'water']]),sum(s,[[1,'a4'],[5,'hcl']]));assert.equal(3*2-3,3);assert.equal(4*2-3,5);assert.equal(answer(p,42),'H3PO3');assert.match(answer(p,43),/two O–H/);
});
test('sulfur oxidation and comproportionation balances conserve atoms and electron changes',()=>{
 const s={so2:[1,0,2,0,0],br2:[0,2,0,0,0],water:[0,0,1,2,0],sulfate:[1,0,4,0,-2],h:[0,0,0,1,1],br:[0,1,0,0,-1]};assert.deepEqual(sum(s,[[1,'so2'],[1,'br2'],[2,'water']]),sum(s,[[1,'sulfate'],[4,'h'],[2,'br']]));assert.equal(6-4,2);assert.equal((0-(-2))*2,4-0);assert.match(answer(p,44),/reducing agent/);assert.match(answer(p,45),/Comproportionation/);
});
test('peroxide diagram electron paths and acidic permanganate equation agree',()=>{
 assert.deepEqual(peroxideRedoxPaths.map(v=>v.oxygenState),[-2,0]);assert.deepEqual(peroxideRedoxPaths.map(v=>v.electronsAccepted),[2,-2]);
 // Coordinates Mn,O,H,charge.
 const s={mn:[1,4,0,-1],peroxide:[0,2,2,0],h:[0,0,1,1],mn2:[1,0,0,2],o2:[0,2,0,0],water:[0,1,2,0]};assert.deepEqual(sum(s,[[2,'mn'],[5,'peroxide'],[6,'h']]),sum(s,[[2,'mn2'],[5,'o2'],[8,'water']]));near(.01*2/5,.004);assert.equal(answer(p,46),'−1 to−2');assert.equal(answer(p,47),'.004 mol');
});
test('iodate–iodide equation and limiting extent conserve iodine, oxygen, hydrogen and charge',()=>{
 const s={iodate:[1,3,0,-1],iodide:[1,0,0,-1],h:[0,0,1,1],iodine:[2,0,0,0],water:[0,1,2,0]};assert.deepEqual(sum(s,[[1,'iodate'],[5,'iodide'],[6,'h']]),sum(s,[[3,'iodine'],[3,'water']]));const extent=Math.min(2,8/5);near(3*extent,4.8);near(2-extent,.4);assert.equal(answer(p,48),'4.8 mmol');assert.equal(answer(p,49),'.4 mmol');
});
test('acidic permanganate pH coefficient follows explicit half-reaction Q',()=>{
 const direct=ph=>1.51-.0592/5*Math.log10(1/(10**(-ph))**8),linear=ph=>1.51-8*.0592/5*ph;near(direct(2),linear(2));near(direct(2),1.32056);assert.equal(answer(d,42),'1.32056 V');assert.match(answer(d,43),/Different manganese products/);
});
test('back titration subtracts residual electron capacity before assigning sample iron',()=>{
 const initialCr=.003,residualFe=.004,sampleFe=6*initialCr-residualFe;near(sampleFe,.014);near(sampleFe*56,.784);near(sampleFe*56/1*100,78.4);assert.equal(answer(d,44),'14 mmol');assert.equal(answer(d,45),'78.4%');
});
test('corrected magnetic mixture adds squares rather than magnitudes',()=>{
 const a=spinOnlySquare(magneticMixtureModel.feIIUnpaired),b=spinOnlySquare(magneticMixtureModel.feIIIUnpaired),f=(30.6-a)/(b-a);assert.equal(a,24);assert.equal(b,35);near(f,.6);near(mixtureMomentSquare(f),30.6);assert.ok(Math.abs(Math.sqrt(mixtureMomentSquare(f))-((1-f)*Math.sqrt(a)+f*Math.sqrt(b)))>.01);assert.equal(answer(d,46),'.60');assert.match(answer(d,47),/squared moments/);
});
test('Beer Lambert concentration, dilution and logarithmic transmission are distinct',()=>{
 const A=.4,b=1,epsilon=2000,measured=A/(epsilon*b),original=5*measured,T=10**(-A);near(measured,.0002);near(original,.001);near(-Math.log10(T),A);assert.equal((100*T).toFixed(1),'39.8');assert.notEqual(T,1-A);assert.equal(answer(d,48),'1e−3 M');assert.equal(answer(d,49),'39.8%');
});
