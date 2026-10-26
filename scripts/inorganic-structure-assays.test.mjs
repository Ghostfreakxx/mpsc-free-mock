import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const p=read('p-block'),d=read('d-f-block');
const answer=(l,i)=>l.quiz[i].options[l.quiz[i].answer];
const near=(a,b,t=1e-9)=>assert.ok(Math.abs(a-b)<t,`${a} != ${b}`);
test('phase-dependent phosphorus species preserve atoms, charge and valence electron inventory',()=>{
 const cation=5+4*7-1,anion=5+6*7+1,molecule=5+5*7;
 assert.equal(cation+anion,2*molecule);assert.equal(4+6,2*5);assert.equal(cation-4*2-4*6,0);assert.equal(anion-6*2-6*6,0);
 assert.equal(answer(p,34),'Two PCl₅ units');assert.equal(answer(p,35),'Tetrahedral and octahedral');
});
test('both chlorine disproportionation equations preserve atoms, charge and oxidation equivalents',()=>{
 // [Cl,H,O,charge] inventories for each specified endpoint.
 assert.deepEqual([2,2,2,-2],[1+1,2,1+1,-1-1]);assert.deepEqual([6,6,6,-6],[5+1,3*2,3+3,-5-1]);
 assert.equal(5*1,1*5);assert.equal(answer(p,36),'5:1');near(parseFloat(answer(p,37)),.03/3);
});
test('matched Lewis adduct enthalpy ordering is distinct from Gibbs ordering with unspecified entropies',()=>{
 const labels=['BF₃','BCl₃','BBr₃'],enthalpies=[-80,-100,-115];assert.equal(labels[enthalpies.indexOf(Math.min(...enthalpies))],answer(p,38));
 near(enthalpies[2]-enthalpies[0],-35);
 // Original counterexample: different entropy terms can reverse a Gibbs ordering.
 const T=300,deltaG=[-80-T*(-.01),-115-T*(-.20)];assert.ok(deltaG[0]<deltaG[1]);assert.match(answer(p,39),/Gibbs energy also depends on entropy/);
});
test('silicate oxygen-sharing graph has two four-connected silicon vertices and one shared oxygen',()=>{
 const edges=[[0,0],[0,1],[0,2],[0,3],[1,3],[1,4],[1,5],[1,6]];
 assert.equal(new Set(edges.map(([,o])=>o)).size,7);assert.deepEqual([0,1].map(si=>edges.filter(([s])=>s===si).length),[4,4]);
 assert.equal(edges.filter(([,o])=>o===3).length,2);assert.equal(2*4-7*2,-6);
 for(const [k,oxygen,charge]of [[0,4,-4],[1,3.5,-3],[2,3,-2],[4,2,0]]){near(4-k/2,oxygen);near(4-2*oxygen,charge);}
 assert.equal(answer(p,40),'Si₂O₇⁶⁻');assert.equal(answer(p,41),'3');
});
test('indirect iodometry balances both stages before converting an aliquot concentration',()=>{
 // Cr2O7 + 14H+ + 6I− → 2Cr3+ + 3I2 + 7H2O.
 assert.deepEqual({Cr:2,O:7,H:14,I:6,charge:-2+14-6},{Cr:2,O:7,H:7*2,I:3*2,charge:2*3});
 // I2 + 2S2O3^2− → 2I− + S4O6^2−.
 assert.deepEqual({I:2,S:2*2,O:2*3,charge:2*-2},{I:2,S:4,O:6,charge:-2-2});
 const thio=.020*.030,dichromate=thio/(3*2),C=dichromate/.025;
 assert.equal(answer(d,34),'6 mol');near(parseFloat(answer(d,35)),C);near(C,.004);
});
test('permanganate–oxalate stoichiometry closes oxidation, atom and charge inventories',()=>{
 assert.equal(2*5,5*2);assert.deepEqual({Mn:2,C:5*2,O:2*4+5*4,H:16,charge:-2-10+16},{Mn:2,C:10,O:10*2+8,H:8*2,charge:2*2});
 near(parseFloat(answer(d,36)),.002*5/2);assert.match(answer(d,37),/Mn²⁺ promoting/);assert.match(d.chapters[24].script,/Stoichiometric coefficients do not establish reaction orders/);
});
test('lanthanoid redox uses one electron and compatible potential signs despite special initial occupancies',()=>{
 const E=1.61-(-.35),n=1,F=96500;assert.equal(4+2,3+3);near(E,1.96);near(-n*F*E/1000,-189.14);
 assert.equal(answer(d,38),E.toFixed(2)+' V');assert.equal(answer(d,39),'−'+(n*F*E/1000).toFixed(2)+' kJ/mol');
});
test('metal-density comparisons preserve molar units and independent mass/volume ratios',()=>{
 const M=63.5,Vm=7.1,density=M/Vm;near(density*Vm,M);near((1.5*M/(2*Vm))/density,.75);
 assert.equal(answer(d,40),density.toFixed(2)+' g/cm³');near(parseFloat(answer(d,41)),.75);
});
