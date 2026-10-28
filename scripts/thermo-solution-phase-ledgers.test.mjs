import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {phaseEnthalpyModel as m,idealDewModel as d,idealDewPressure} from '../app/jee/classes/phase-ledger-data.ts';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`)),t=read('chemical-thermodynamics'),s=read('solutions');const answer=(l,i)=>l.quiz[i].options[l.quiz[i].answer];const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,`${a} != ${b}`);
test('combustion cycles cancel identical endpoint vectors with reversed signs',()=>{
 // Coordinates: A,B,O2,CO2,H2O. Same-formula hypothetical isomers.
 const a=[-1,0,-3,2,3],b=[0,-1,-3,2,3];assert.deepEqual(a.map((v,i)=>v-b[i]),[-1,1,0,0,0]);const delta=-3000-(-2980);assert.equal(delta,-20);assert.equal(answer(t,42),`${delta} kJ/mol`.replace('-','−'));assert.match(answer(t,43),/lower in enthalpy/);
});
test('water phase correction uses stoichiometric water amount and matched-temperature vaporization',()=>{const water=4/2,liquid=-890,vaporization=44;assert.equal(liquid+water*vaporization,-802);assert.equal(answer(t,44),`${liquid+water*vaporization} kJ/mol`.replace('-','−'));assert.match(answer(t,45),/Moles of water/);});
test('Gibbs useful work is non-PV and delivered-work magnitude reverses the on-system sign',()=>{const deltaG=-40,onReversible=deltaG,deliveredMax=-onReversible,actualDelivered=25;assert.equal(deliveredMax,40);assert.ok(actualDelivered<deliveredMax);assert.equal(answer(t,46),`${deliveredMax} kJ`);assert.match(answer(t,47),/Pressure–volume/);});
test('phase-crossing Kirchhoff result also closes an independent endpoint Hess path',()=>{
 const below=(m.cpSolidB-m.cpSolidA)*50/1000,above=(m.cpSolidB-m.cpLiquidA)*50/1000,piecewise=m.initial+below-m.fusion+above;
 // From A(l,400): cool liquid, freeze, cool solid, react at300, heat B(s).
 const endpoint= -m.cpLiquidA*50/1000-m.fusion-m.cpSolidA*50/1000+m.initial+m.cpSolidB*100/1000;
 near(piecewise,endpoint);assert.equal(piecewise,15);assert.equal(answer(t,48),`${piecewise} kJ/mol`);assert.match(answer(t,49),/Reactant enthalpy rises/);
});
test('dew pressure satisfies Raoult and Dalton for both components and normalizes the drop',()=>{
 const p=idealDewPressure(d.vaporA,d.pureA,d.pureB),xA=d.vaporA*p/d.pureA,xB=(1-d.vaporA)*p/d.pureB;near(xA+xB,1);near(xA*d.pureA,d.vaporA*p);near(xB*d.pureB,(1-d.vaporA)*p);near(p,400/7);near(xA,2/7);assert.equal(answer(s,42),'400/7 kPa');assert.equal(answer(s,43),'2/7');
});
test('two-solute mass inversion is unique only with independent constraints',()=>{
 const M1=60,M2=180,total=.04,mass=4.8,n2=(mass-M1*total)/(M2-M1),n1=total-n2;near(n1,.02);near(n2,.02);near(M1*n1+M2*n2,mass);assert.notEqual(M2-M1,0);assert.equal(answer(s,44),'.0200 mol');assert.match(answer(s,45),/total mass/);
});
test('sealed Henry gas balance partitions conserved amount and tests dilute approximation error',()=>{
 const total=.05,V=1,RT=25,solvent=10,kH=1000,p=total/(V/RT+solvent/kH),gas=p*V/RT,diss=p*solvent/kH;near(gas+diss,total);near(p,1);near(diss/total,.2);
 const exactDiss=solvent*p/(kH-p);assert.ok(Math.abs(exactDiss-diss)/diss<.002);assert.equal(answer(s,46),'1 bar');assert.equal(answer(s,47),'20%');
});
test('anhydrous solute precipitation removes solute but no solvent',()=>{const totalMass=20,water=100,solubility=10,MM=100,dissolved=Math.min(totalMass,solubility*water/100),solid=totalMass-dissolved,molality=(dissolved/MM)/(water/1000);assert.equal(dissolved+solid,totalMass);assert.equal(solid,10);assert.equal(molality,1);near(1.86*molality,1.86);assert.equal(answer(s,48),'1.0 m');assert.match(answer(s,49),/Anhydrous solute crystals/);});
