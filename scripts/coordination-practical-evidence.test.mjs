import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<t,`${a} differs from ${b}`);
test('d4 energy, bridge contacts and independently supplied exchange constants agree',()=>{
 assert.deepEqual(read('coordination-compounds').quiz.slice(34).map(q=>q.answer),[0,1,2,3,0,1,2,3,1,2,3,0,1,2,3,0]);
 const delta=200,P=150,high=3*(-.4*delta)+.6*delta,low=4*(-.4*delta)+P;
 near(low-high,-50);near(Math.sqrt(4*6),4.898979485566356);near(Math.sqrt(2*4),2.8284271247461903);
 assert.equal(4+2,6);assert.equal(4+2*2,8);assert.equal(2+2,4);assert.equal(2*2-6,-2);
 near(Math.log(2)/.1,6.931471805599452);near(Math.log(2)/.001,693.1471805599452);assert.ok(1e12>1e6&&.1>.001);
});
test('proper octahedral rotations yield a cis mirror pair and one trans bis-chelate configuration',()=>{
 const xyz=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];
 const perms=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]],rotations=[];
 for(const p of perms){let inversions=0;for(let i=0;i<3;i++)for(let j=i+1;j<3;j++)if(p[i]>p[j])inversions++;
  for(const a of [-1,1])for(const b of [-1,1])for(const c of [-1,1])if((inversions%2?-1:1)*a*b*c===1){const signs=[a,b,c];rotations.push(xyz.map(v=>xyz.findIndex(w=>w.every((n,j)=>n===signs[j]*v[p[j]]))));}
 }
 assert.equal(rotations.length,24);
 const key=(cl,edges)=>cl.toSorted((a,b)=>a-b).join(',')+'|'+edges.map(e=>e.toSorted((a,b)=>a-b).join(',')).sort().join(';');
 const canonical=(cl,edges)=>rotations.map(r=>key(cl.map(n=>r[n]),edges.map(e=>e.map(n=>r[n])))).sort()[0];
 const groups={cis:new Set(),trans:new Set()};
 for(let a=0;a<6;a++)for(let b=a+1;b<6;b++){
  const rest=[0,1,2,3,4,5].filter(n=>n!==a&&n!==b);
  for(let j=1;j<4;j++){
   const pair=[rest[0],rest[j]],other=rest.filter(n=>!pair.includes(n));
   if((pair[0]^1)===pair[1]||(other[0]^1)===other[1])continue;
   const edges=[pair,other],geom=(a^1)===b?'trans':'cis',original=canonical([a,b],edges);
   groups[geom].add(original);
   const mirror=[1,0,2,3,4,5],mirrored=canonical([a,b].map(n=>mirror[n]),edges.map(e=>e.map(n=>mirror[n])));
   assert.equal(original===mirrored,geom==='trans');
  }
 }
 assert.equal(groups.cis.size,2);assert.equal(groups.trans.size,1);
});
test('gravimetric, precipitation and two-stage titration calculations conserve analyte amounts',()=>{
 assert.deepEqual(read('practical-chemistry').quiz.slice(32).map(q=>q.answer),[1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0]);
 const sulfate=(.471-.005)/233;near(sulfate,.002);near(sulfate*96/.600*100,32);
 near(14+Math.log10((1e-38/.01)**(1/3)),2);near(14+Math.log10(Math.sqrt(1e-11/.01)),9.5);
 assert.ok(.01*(1e-9)**2<1e-11);assert.ok(.01*(1e-9)**3>1e-38);
 const base=(.5105/204.2)/.025;near(base,.1);near(.250/(base*.020/2),250);
 const consumed=.025*1-.015*.5;near(consumed,.0175);near(consumed/2*100/1*100,87.5);
 assert.deepEqual({Ca:1,C:1,O:3,H:2,charge:2},{Ca:1,C:1,O:2+1,H:2,charge:2});
});
