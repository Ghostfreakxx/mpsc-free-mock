import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {oxygenCarbonLedgers} from '../app/jee/classes/oxygen-carbon-ledger-data.ts';
const d=JSON.parse(fs.readFileSync('app/data/jee-organic-oxygen-lecture.json'));const answer=i=>d.quiz[i].options[d.quiz[i].answer];
test('beta positions and double-bond substituent identities give three unrearranged butenes',()=>{
 const beta=[1,3];const products=beta.map(site=>({bond:[Math.min(2,site),Math.max(2,site)],forms:site===1?[['H','H'],['H','ethyl']]:[['H','methyl'],['H','methyl']]}));
 const count=products.reduce((n,p)=>n+(p.forms.every(s=>new Set(s).size===2)?2:1),0);assert.equal(count,3);assert.equal(answer(42),String(count));assert.match(answer(43),/two identical hydrogens/);
});
test('ester reaction diagram conserves carbon for both independent molecular ledgers',()=>{
 for(const ledger of oxygenCarbonLedgers)assert.equal(ledger.inputs.reduce((s,v)=>s+v.carbons,0),ledger.outputs.reduce((s,v)=>s+v.carbons,0));
 const ester={acyl:2,alkoxy:2},incoming={count:2,carbonEach:1};assert.equal(ester.acyl+incoming.count*incoming.carbonEach,4);assert.equal(ester.alkoxy,2);assert.match(answer(44),/tert-Butanol and ethanol/);
 const methylPropanoate={acyl:3,alkoxy:1};assert.equal(methylPropanoate.acyl+methylPropanoate.alkoxy,4);assert.deepEqual(oxygenCarbonLedgers[1].outputs.map(v=>v.carbons),Object.values(methylPropanoate));assert.match(answer(48),/Propan-1-ol and methanol/);
});
test('acid-base quench precedes the supplied ideal limiting-reagent addition',()=>{
 const reagent=12,protons=3,ketone=10;const quenched=Math.min(reagent,protons),extent=Math.min(ketone,reagent-quenched);assert.equal(quenched,3);assert.equal(extent,9);assert.equal(ketone-extent,1);assert.equal(answer(46),`${extent} mmol`);assert.equal(answer(47),'Methane');
});
test('phenol acylation atom balance includes the acid rather than transferring both acyl groups',()=>{
 const add=(a,b)=>a.map((v,i)=>v+b[i]);assert.deepEqual(add([6,6,1],[4,6,3]),add([8,8,2],[2,4,2]));assert.match(answer(50),/Phenyl ethanoate and ethanoic acid/);assert.match(answer(51),/ring–O bond stays/);
});
test('keto-enol forms conserve formula while changing proton connectivity',()=>{
 const keto={C:3,H:6,O:1,OH:0,COdouble:1,CCdouble:0},enol={C:3,H:6,O:1,OH:1,COdouble:0,CCdouble:1};for(const atom of ['C','H','O'])assert.equal(keto[atom],enol[atom]);assert.notEqual(keto.OH,enol.OH);assert.equal(keto.COdouble,enol.CCdouble);assert.match(answer(52),/hydrogen changes/);assert.match(answer(53),/rate/);
});
test('haloform equation balances every atom and charge, and iodine is limiting',()=>{
 // Coordinate order: C,H,O,I,charge. Coefficients are the supplied methyl-ketone equation.
 const species={acetone:[3,6,1,0,0],iodine:[0,0,0,2,0],hydroxide:[0,1,1,0,-1],acetate:[2,3,2,0,-1],iodoform:[1,1,0,3,0],iodide:[0,0,0,1,-1],water:[0,2,1,0,0]};
 const sum=terms=>Array.from({length:5},(_,i)=>terms.reduce((s,[n,name])=>s+n*species[name][i],0));assert.deepEqual(sum([[1,'acetone'],[3,'iodine'],[4,'hydroxide']]),sum([[1,'acetate'],[1,'iodoform'],[3,'iodide'],[3,'water']]));
 const extent=Math.min(10,24/3);assert.equal(extent,8);assert.equal(extent*4,32);assert.equal(answer(54),`${extent} mmol`);assert.equal(answer(55),'4');
});
test('Lucas evidence retains benzylic exception and observation limits',()=>{assert.match(answer(40),/Benzyl alcohol/);assert.match(answer(41),/Temperature, solubility/);assert.match(d.chapters[27].script,/not an instruction/);});
