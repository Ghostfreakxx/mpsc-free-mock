import test from 'node:test';
import assert from 'node:assert/strict';
import {pSpinOrbitals,p2Occupations,multicentreFillings} from '../app/jee/classes/atomic-multicentre-data.ts';
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,`${a} differs from ${b}`);
test('orbital angular-momentum magnitudes differ from their allowed projections',()=>{
 assert.deepEqual([0,1,2].map(l=>l*(l+1)),[0,2,6]);
 const projections=Array.from({length:5},(_,i)=>i-2);assert.deepEqual(projections,[-2,-1,0,1,2]);
 for(const m of projections)assert.ok(Math.abs(m)<Math.sqrt(6));assert.equal(Math.sqrt(0),0);
});
test('actual Pauli diagram enumerates15 unique unordered p2 occupations with3 same-orbital pairs',()=>{
 assert.equal(pSpinOrbitals.length,6);assert.equal(new Set(pSpinOrbitals.map(x=>`${x.ml},${x.ms}`)).size,6);
 const keys=p2Occupations.map(p=>[p.first,p.second].map(x=>`${x.ml}:${x.ms}`).sort().join('|'));
 assert.equal(keys.length,15);assert.equal(new Set(keys).size,15);assert.equal(p2Occupations.filter(p=>p.sameSpatial).length,3);
 for(const pair of p2Occupations){assert.notDeepEqual(pair.first,pair.second);if(pair.sameSpatial)assert.equal(pair.first.ms+pair.second.ms,0);}
 assert.equal(p2Occupations.filter(p=>!p.sameSpatial).length,12);
});
test('collision thresholds preserve energy without imposing whole-photon absorption on an electron',()=>{
 const E=n=>-13.6/n**2,gap2=E(2)-E(1),gap3=E(3)-E(1);near(gap2,10.2);near(11-gap2,.8);
 assert.ok(gap3>11&&13.6>11);near(gap3,13.6*8/9);
 const boundGaps=Array.from({length:99},(_,i)=>E(i+2)-E(1));assert.ok(!boundGaps.some(gap=>Math.abs(gap-11)<1e-8));
});
test('stated electric-dipole selection conditions distinguish angular channels and magnetic sublevels',()=>{
 const allowed=(a,b)=>Math.abs(a.l-b.l)===1&&Math.abs(a.m-b.m)<=1&&a.s===b.s;
 const s={l:0,m:0,s:.5},p={l:1,m:0,s:.5},d={l:2,m:0,s:.5};
 assert.ok(allowed(p,s));assert.ok(allowed(d,p));assert.ok(!allowed(s,s));assert.ok(!allowed(d,s));
 assert.ok(!allowed({l:2,m:2,s:.5},{l:1,m:-1,s:.5}));assert.ok(!allowed(p,{...s,s:-.5}));
});
test('phase sums and differences have distinct midpoint density while global sign leaves density invariant',()=>{
 const A=x=>Math.exp(-Math.abs(x+1)),B=x=>Math.exp(-Math.abs(x-1));
 near(A(0)-B(0),0);assert.ok((A(0)+B(0))**2>0);
 for(const x of [-2,-1,0,1,2]){near((A(x)+B(x))**2,A(x)**2+B(x)**2+2*A(x)*B(x));near((-(A(x)+B(x)))**2,(A(x)+B(x))**2);}
});
test('diborane electron ledger cannot assign an ordinary pair to every bridging contact',()=>{
 const total=2*3+6,terminalPairs=4,bridges=2;assert.equal(total,12);assert.equal(total-terminalPairs*2,4);
 assert.equal(terminalPairs*2+bridges*2,total);assert.ok(terminalPairs*2+bridges*2*2>total);assert.equal(4+2,6);
});
test('actual three-centre fillings fit three independent model combinations with different electron totals',()=>{
 const H=[[0,-1,0],[-1,0,-1],[0,-1,0]],root=Math.sqrt(2),vectors=[[.5,root/2,.5],[1/root,0,-1/root],[.5,-root/2,.5]],energies=[-root,0,root];
 vectors.forEach((v,i)=>{near(v.reduce((s,x)=>s+x*x,0),1);H.forEach((row,j)=>near(row.reduce((s,x,k)=>s+x*v[k],0),energies[i]*v[j]));});
 for(const filling of multicentreFillings){assert.equal(filling.occupancies.reduce((a,b)=>a+b),filling.electrons);assert.equal(filling.occupancies.length,3);assert.equal(filling.occupancies[2],0);}
 assert.deepEqual([...multicentreFillings[0].occupancies],[2,0,0]);assert.deepEqual([...multicentreFillings[1].occupancies],[2,2,0]);near((2-0)/2/2,.5);
});
test('fixed proton connectivity changes the dominant resonance averages and total charges',()=>{
 const carbonate=[[2,1,1],[1,2,1],[1,1,2]],bicarbonate=[[1,2,1],[1,1,2]],average=rows=>[0,1,2].map(j=>rows.reduce((s,row)=>s+row[j],0)/rows.length);
 average(carbonate).forEach(v=>near(v,4/3));assert.deepEqual(average(bicarbonate),[1,1.5,1.5]);
 for(const row of bicarbonate){assert.equal(row[0],1);assert.equal(row.reduce((a,b)=>a+b),4);}
 const carbonateOcharges=[0,-1,-1],bicarbonateOcharges=[0,0,-1];assert.equal(carbonateOcharges.reduce((a,b)=>a+b),-2);assert.equal(bicarbonateOcharges.reduce((a,b)=>a+b),-1);
});
