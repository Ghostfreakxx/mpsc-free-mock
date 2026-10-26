import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {acidDistributionRatio as distribution,organicInventoryFraction as fraction} from '../app/jee/classes/weak-acid-extraction-model.ts';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const p=read('periodic-trends'),a=read('purification-analysis');
const answer=(l,i)=>l.quiz[i].options[l.quiz[i].answer];
const near=(x,y,t=1e-9)=>assert.ok(Math.abs(x-y)<t,`${x} != ${y}`);
test('oxygen-unit charges preserve full formula electron inventories and distinguish odd superoxide occupancy',()=>{
 assert.deepEqual([-2,-2/2,-1/2],[-2,-1,-.5]);
 assert.equal(2*3+8,2*2+10);assert.equal(2*11+2*8,2*10+18);assert.equal(19+2*8,18+17);
 const superoxideValence=[2,2,2,2,2,2,1],peroxideValence=[2,2,2,2,2,2,2];
 assert.equal(superoxideValence.reduce((s,n)=>s+n),13);assert.equal(superoxideValence.filter(n=>n===1).length,1);
 assert.equal(peroxideValence.reduce((s,n)=>s+n),14);assert.ok(peroxideValence.every(n=>n%2===0));
 assert.equal(answer(p,32),'−2, −1, −½');assert.equal(answer(p,33),'KO₂');
});
test('halogen displacement signs reverse while electron coefficients stay fixed',()=>{
 const potentials=[1.36,1.07,.54];near(potentials[0]-potentials[1],.29);near(potentials[1]-potentials[2],.53);near(potentials[2]-potentials[0],-.82);
 assert.equal(answer(p,34),'+'+(potentials[0]-potentials[1]).toFixed(2).replace(/^0/,'')+' V');
 near(parseFloat(answer(p,35)),2*.0100);
});
test('divalent hydroxide dissolution closes its cubic ion product rather than a square-root shortcut',()=>{
 for(const k of [2.56e-4,1.08e-11]){const s=Math.cbrt(k/4);near(s*(2*s)**2/k,1);}
 near(Math.cbrt(2.56e-4/4),.04);assert.equal(answer(p,36),'4s³');near(parseFloat(answer(p,37)),.04);
});
test('carbonate endpoint conserves atoms and mass and carbon dioxide raises the decomposition quotient',()=>{
 assert.deepEqual({Ca:1,C:1,O:3},{Ca:1,C:1,O:1+2});assert.deepEqual({Li:2,C:1,O:3},{Li:2,C:1,O:1+2});
 const n=5/100,residue=n*56,gas=n*44;near(residue+gas,5);assert.equal(answer(p,38),residue.toFixed(2)+' g');assert.match(answer(p,39),/Oppose/);
});
test('displayed extraction curve agrees with independent species balances and maintains total acid inventory',()=>{
 const P=10,Va=.100,Vo=.050,pKa=4;
 let previous=1;
 for(let pH=1;pH<=7;pH+=.02){
  const ratio=10**(pH-pKa),neutralAq=1/(Va*(1+ratio)+P*Vo),ionAq=ratio*neutralAq,neutralOrg=P*neutralAq;
  const organic=neutralOrg*Vo,aqueous=(neutralAq+ionAq)*Va;
  near(organic+aqueous,1);near(distribution(P,pH,pKa),neutralOrg/(neutralAq+ionAq));
  const f=fraction(distribution(P,pH,pKa),Va,Vo);near(f,organic);assert.ok(f<previous&&f>0&&f<1);previous=f;
 }
 near(fraction(distribution(10,4,4),100,50),5/7);near(fraction(distribution(10,6,4),100,50),5/106);
 assert.equal(answer(a,32),String(distribution(10,4,4)));assert.equal(answer(a,33),'5/7');
});
test('normal-phase retention questions use a shared front and the stated adsorption mechanism',()=>{
 near(1.25/5,.25);near(3.75/5,.75);assert.equal(parseFloat(answer(a,34)),1.25/5);assert.equal(answer(a,35),'A smaller Rf');
 assert.match(a.chapters[22].script,/stationary liquid/);assert.match(a.chapters[22].script,/mixed interactions/);
});
test('combustion blank and original moisture corrections close the dry CHO inventory',()=>{
 const dry=.5000-.0500,co2=.6800-.0200,reactionWater=.3290-.0090-.0500,C=co2*12/44,H=reactionWater*2/18,O=dry-C-H;
 near(dry,.45);near(C,.18);near(H,.03);near(O,.24);near(C+H+O,dry);near(C/dry*100,40);
 const atoms=[C/12,H/1,O/16];near(atoms[1]/atoms[0],2);near(atoms[2]/atoms[0],1);
 assert.equal(answer(a,36),(C/dry*100).toFixed(1)+'%');assert.equal(answer(a,37),'CH₂O');
});
test('assayed sublimation recovery excludes the impurity mass from the desired product',()=>{
 const collected=1.5,purity=.96,analyte=collected*purity,impurity=collected-analyte,original=2;
 near(analyte+impurity,collected);near(analyte,1.44);near(impurity,.06);assert.equal(answer(a,38),analyte.toFixed(2)+' g');assert.equal(answer(a,39),(analyte/original*100).toFixed(1)+'%');
});
