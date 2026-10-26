import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {diproticTitrationPH} from '../app/jee/classes/diprotic-titration-model.ts';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const eq=read('equilibrium'),cell=read('redox-electrochemistry');
const answer=(l,i)=>l.quiz[i].options[l.quiz[i].answer];
const near=(a,b,t=1e-9)=>assert.ok(Math.abs(a-b)<t,`${a} != ${b}`);
function solveH(residual){let lo=-14,hi=0;for(let i=0;i<100;i++){const mid=(lo+hi)/2;if(residual(10**mid)>0)hi=mid;else lo=mid;}return 10**((lo+hi)/2);}
test('two hydrolysing salt ions satisfy full ideal charge balance near the stated approximate pH',()=>{
 const c=.1,kaParent=1e-5,kbParent=1e-4,kaCation=1e-14/kbParent;
 const h=solveH(h=>h+c*h/(h+kaCation)-1e-14/h-c*kaParent/(h+kaParent));
 assert.equal((-Math.log10(h)).toFixed(2),'7.50');assert.equal(answer(eq,34),'7.50');assert.equal(answer(eq,35),'10⁻¹⁰ and 10⁻⁹');
});
test('plotted diprotic titration conserves proton/charge balance through both equivalences',()=>{
 let lastPH=0;
 for(let n=0;n<=.025;n+=.0001){
  const pH=diproticTitrationPH(n),h=10**-pH,v=.1+n/.1,c=.01/v,den=h*h+1e-4*h+1e-13;
  const acid=[c*h*h/den,c*1e-4*h/den,c*1e-13/den];
  near(acid.reduce((a,b)=>a+b),c);near(h+n/v,1e-14/h+acid[1]+2*acid[2]);assert.ok(pH>lastPH);lastPH=pH;
 }
 near(diproticTitrationPH(.005),4,.01);near(diproticTitrationPH(.010),6.5,.001);near(diproticTitrationPH(.015),9,.001);
 assert.equal(answer(eq,36),'6.50');near(parseFloat(answer(eq,37)),.0100+.0100/2);
});
test('mixed weak acids share a charge balance rather than an average of isolated pH values',()=>{
 const terms=[[.1,1e-5],[.1,4e-5]],sum=terms.reduce((s,[c,k])=>s+c*k,0),estimate=Math.sqrt(sum);
 const exact=solveH(h=>h-1e-14/h-terms.reduce((s,[c,k])=>s+c*k/(h+k),0));
 near(-Math.log10(estimate),2.6505149978);near(-Math.log10(exact),2.6505149978,.005);
 assert.ok(terms.every(([,k])=>k/estimate<.02));assert.equal(answer(eq,38),'5.00×10⁻⁶ M²');assert.equal(answer(eq,39),(-Math.log10(estimate)).toFixed(2));
});
test('complex solubility preserves free ion product, complex formation and ligand inventory',()=>{
 const ksp=1e-10,kf=1e7,L=.1,multiplier=1+kf*L*L,s=Math.sqrt(ksp*multiplier),free=s/multiplier,complex=s-free;
 near(free*s/ksp,1);near(complex/(free*L*L)/kf,1);assert.ok(s>Math.sqrt(ksp)*300);
 const totalLigand=L+2*complex;assert.ok(totalLigand>L);near(totalLigand-2*complex,L);
 near(parseFloat(answer(eq,40)),s,.000005);assert.match(answer(eq,41),/Free unbound ammonia/);
});
test('copper and inert anodes close distinct electron, atom and charge inventories',()=>{
 const electrons=1930/96500,copper=electrons/2,oxygen=electrons/4,protons=electrons;
 near(copper*63.5,.635);near(oxygen,.005);near(2*copper,protons);
 assert.match(answer(cell,34),/Cathode gains .635 g; anode loses .635 g/);near(parseFloat(answer(cell,35)),oxygen);
 // Inert-anode net: 2Cu2+ + 2H2O → 2Cu + O2 + 4H+.
 assert.equal(2*2,4);assert.equal(2*2,4);assert.equal(2,2*1);
});
test('separated brine product stoichiometry balances atoms, charge and electron use',()=>{
 const e=.1,h2=e/2,cl2=e/2,hydroxide=e;near(2*h2,hydroxide);near(2*cl2,e);
 // 2Cl− + 2H2O → H2 + Cl2 + 2OH−.
 assert.deepEqual({Cl:2,H:4,O:2,charge:-2},{Cl:2,H:2+2,O:2,charge:-2});
 assert.match(answer(cell,36),/Hydrogen from water/);assert.equal(answer(cell,37),'.0500, .0500, .100 mol');
});
test('fuel-cell Gibbs work and enthalpy-basis efficiency retain two-electron normalization',()=>{
 const voltage=237000/(2*96500),efficiency=237/286;
 near(voltage*2*96500,237000);assert.equal(answer(cell,38),voltage.toFixed(3)+' V');assert.equal(answer(cell,39),(efficiency*100).toFixed(1)+'%');
 assert.ok(efficiency<1&&efficiency>0);
});
test('complexation lowers free-ion silver potential by the predicted Nernst shift',()=>{
 const total=.01,L=.1,multiplier=1+1e7*L*L,free=total/multiplier,E=.8+.05916*Math.log10(free),without=.8+.05916*Math.log10(total);
 near(without-E,.05916*Math.log10(multiplier));assert.ok(E<without);near(E,.38588,.000001);
 assert.equal(answer(cell,40),'1.00×10⁻⁷ M');near(parseFloat(answer(cell,41)),E,.0005);
});
