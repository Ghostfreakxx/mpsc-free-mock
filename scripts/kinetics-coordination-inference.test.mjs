import test from 'node:test';
import assert from 'node:assert/strict';
import {d7FieldStates} from '../app/jee/classes/d7-field-data.ts';
const close=(a,b,tolerance=1e-10)=>assert.ok(Math.abs(a-b)<tolerance,`${a} differs from ${b}`);
test('Arrhenius fitted doubling predicts a smaller subsequent ten-kelvin multiplier',()=>{
 const R=8.314,Ea=R*Math.log(2)/(1/300-1/310);
 close(Ea/1000,53.5944,.001);
 const k=T=>Math.exp(-Ea/(R*T));
 close(k(310)/k(300),2);close(k(320)/k(310),2**(300/320));
 assert.ok(k(320)/k(310)<2);assert.equal((k(320)/k(310)).toFixed(3),'1.915');
});
test('inert-gas pressure reconstruction conserves ideal-gas reaction inventories at all conversions',()=>{
 for(const f of [0,.1,.5,.9,1]){const x=80*f,pA=80-x,pB=2*x,pI=40,total=pA+pB+pI;
  close(pA,2*80+40-total);close(pA+pB/2,80);close(total,120+x);
 }
 const k=Math.log(2)/100;close(80*Math.exp(-k*100),40);close(2*80+40-160,40);
 assert.notEqual(2*120-160,40);
});
test('first-order inverse bounds cover every allowed fraction with reversed endpoint ordering',()=>{
 const lo=-Math.log(.52)/100,hi=-Math.log(.48)/100;
 for(let j=0;j<=100;j++){const f=.48+.04*j/100,k=-Math.log(f)/100;assert.ok(k>=lo-1e-12&&k<=hi+1e-12);close(Math.exp(-k*100),f);}
 assert.equal((Math.log(2)/hi).toFixed(1),'94.4');assert.equal((Math.log(2)/lo).toFixed(0),'106');
});
test('pre-equilibrium mechanism cancels the catalyst and intermediate without losing rate dependence',()=>{
 const step1={A:-1,B:-1,I:1,C:0,P:0},step2={A:0,B:1,I:-1,C:-1,P:1};
 assert.deepEqual(Object.fromEntries(Object.keys(step1).map(k=>[k,step1[k]+step2[k]])),{A:-1,B:0,I:0,C:-1,P:1});
 const K=4,k2=3,A=.2,B=.01,C=.5,I=K*A*B;
 close(k2*I*C,k2*K*A*B*C);close((k2*K*(2*A)*(2*B)*(2*C))/(k2*K*A*B*C),8);
 assert.equal(-step1.A-step1.B,2);assert.equal(-step2.I-step2.C,2);
});
test('mixed-ligand naming separates counterion charge, oxidation state and donor count',()=>{
 const bound=[{name:'ammine',charge:0,count:4},{name:'aqua',charge:0,count:1},{name:'chlorido',charge:-1,count:1}];
 const complexCharge=2,ligandCharge=bound.reduce((s,l)=>s+l.charge*l.count,0);
 assert.equal(complexCharge-ligandCharge,3);assert.equal(bound.reduce((s,l)=>s+l.count,0),6);
 assert.deepEqual(bound.map(l=>l.name).sort(),['ammine','aqua','chlorido']);assert.equal(-2-6*(-1),4);
});
test('square and tetrahedron vertex-pair geometry gives different MA2B2 classes',()=>{
 const square=[[1,0,0],[0,1,0],[-1,0,0],[0,-1,0]],tetra=[[1,1,1],[1,-1,-1],[-1,1,-1],[-1,-1,1]];
 const distances=points=>new Set(points.flatMap((p,i)=>points.slice(i+1).map(q=>p.reduce((s,x,j)=>s+(x-q[j])**2,0))));
 assert.deepEqual([...distances(square)].sort((a,b)=>a-b),[2,4]);assert.deepEqual([...distances(tetra)],[8]);
 assert.equal(Math.sqrt(2*(2+2)).toFixed(2),'2.83');assert.equal(Math.sqrt(0*(0+2)),0);
});
test('actual d7 diagram occupancies preserve seven electrons and yield the stated pairs, spins and energies',()=>{
 for(const state of d7FieldStates){const orbitals=[...state.lower,...state.upper];assert.equal(orbitals.reduce((s,n)=>s+n,0),7);
  assert.equal(orbitals.filter(n=>n===1).length,state.unpaired);assert.equal(orbitals.filter(n=>n===2).length,state.pairs);
  const field=-.4*state.lower.reduce((s,n)=>s+n,0)+.6*state.upper.reduce((s,n)=>s+n,0);close(field,state.field);
 }
 const energies=d7FieldStates.map(s=>s.field*220+s.pairs*160);close(energies[1]-energies[0],-60);
 assert.equal(Math.sqrt(3*5).toFixed(2),'3.87');assert.equal(Math.sqrt(1*3).toFixed(2),'1.73');
});
test('conditional EDTA model satisfies free metal and ligand-form relations in both regimes',()=>{
 const beta=1e8,pool=1e-4,totalMetal=1e-7;
 for(const alpha of [1e-4,1e-2]){const Y=alpha*pool,ratio=beta*Y,freeMetal=totalMetal/(1+ratio),complex=ratio*freeMetal;
  close(complex+freeMetal,totalMetal);close(complex/(freeMetal*Y),beta,1e-6);
  close(complex/totalMetal,ratio/(1+ratio));assert.ok(pool+complex>pool);
 }
 close(beta*1e-4*pool,1);close((beta*1e-2*pool)/(1+beta*1e-2*pool),100/101);
});
