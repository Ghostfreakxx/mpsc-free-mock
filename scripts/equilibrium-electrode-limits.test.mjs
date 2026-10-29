import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {selectivePrecipitationModel as p,conductometricModel as c,titrationConductivity} from '../app/jee/classes/electrode-limits-data.ts';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`)),e=read('equilibrium'),r=read('redox-electrochemistry');const answer=(l,i)=>l.quiz[i].options[l.quiz[i].answer];const near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<t,`${a} != ${b}`);
test('inert addition at fixed volume leaves partial pressures; expansion scales Q by stoichiometric gas difference',()=>{
 const n={reactant:1,product:2},RT=1,V=2;const Q=v=>(n.product*RT/v)**2/(n.reactant*RT/v),initial=Q(V);near(Q(V),initial);near(Q(2*V),initial/2);const zeroDelta=(2/4)*(4/2);near(zeroDelta,1);assert.match(answer(e,42),/partial pressures and Q/);assert.equal(answer(e,43),'K/2');
});
test('buffer stoichiometry conserves conjugate inventory and distinguishes capacity from starting ratio',()=>{
 const acidAdded=.005,solve=initial=>({base:initial-acidAdded,acid:initial+acidAdded,pH:5+Math.log10((initial-acidAdded)/(initial+acidAdded))});const small=solve(.01),large=solve(.1);near(small.base+small.acid,.02);near(large.base+large.acid,.2);near(small.base/small.acid,1/3);assert.ok(Math.abs(large.pH-5)<Math.abs(small.pH-5));near(small.pH,4.52287874528,1e-9);assert.equal(answer(e,44),'1/3');assert.match(answer(e,45),/larger conjugate-pair inventory/);
});
test('selective precipitation residual fails 99.9 percent target before chloride saturation',()=>{
 const silverAtCl=p.kspChloride/p.chloride,silverAtBr=p.kspBromide/p.bromide,residual=p.kspBromide/silverAtCl;assert.ok(silverAtBr<silverAtCl);near(residual,5e-5);near(100*(1-residual/p.bromide),99.5);assert.ok(p.kspBromide/(p.bromide*.001)>silverAtCl);assert.equal(answer(e,46),'5e−5 M');assert.equal(answer(e,47),'99.5%');
});
test('indicator ratios follow mass action across pKa plus or minus one',()=>{
 for(const [ph,ratio]of [[8,.1],[9,1],[10,10]])near(10**(ph-9),ratio);assert.equal(answer(e,48),'10');assert.match(answer(e,49),/steep pH change/);
});
test('current efficiency conserves electrons across products with distinct electron stoichiometries',()=>{
 const total=.05,silverElectrons=total*.8,hydrogenElectrons=total*.2,silver=silverElectrons,hydrogen=hydrogenElectrons/2;near(silver+2*hydrogen,total);near(silver*108,4.32);near(hydrogen,.005);assert.equal(answer(r,42),'4.32 g');assert.equal(answer(r,43),'.0050 mol');
});
test('hypothetical selective electrode equality is concentration dependent',()=>{
 const potential=a=>.600+.0592*Math.log10(a),other=.304;near(potential(.01),.4816);near(potential(1e-5),other);assert.ok(potential(1e-4)>other);assert.ok(potential(1e-6)<other);assert.equal(answer(r,44),'.4816 V');assert.equal(answer(r,45),'1e−5');
});
test('conductivity model uses varying solution volume and retains NaCl at equivalence',()=>{
 const equivalence=c.acidVolumeML*c.acidMolarity/c.baseMolarity;near(equivalence,50);near(titrationConductivity(0),.0426);near(titrationConductivity(25),.0184);near(titrationConductivity(equivalence),.0063);near(titrationConductivity(75),.0100);assert.ok(titrationConductivity(49)>titrationConductivity(50));assert.ok(titrationConductivity(51)>titrationConductivity(50));assert.equal(answer(r,46),'50 mL');assert.equal(answer(r,47),'.0063 S/cm');
});
test('standard potential slope gives entropy via an independent finite Gibbs derivative',()=>{
 const n=2,F=96500,T=300,E=.3,slope=-.0002,g=t=>-n*F*(E+slope*(t-T)),entropy=-(g(T+.01)-g(T-.01))/.02;near(entropy,n*F*slope,1e-6);near(g(T),-57900);near(g(T)+T*entropy,-69480,.001);assert.equal(answer(r,48),'−38.6 J/mol K');assert.equal(answer(r,49),'−69.48 kJ/mol');
});
