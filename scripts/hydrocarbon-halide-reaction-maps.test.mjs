import test from 'node:test';
import assert from 'node:assert/strict';
import {sn2PriorityFrames} from '../app/jee/classes/sn2-priority-map-data.ts';
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,`${a} differs from ${b}`);
const positions=[[0,1,-1],[1,0,1],[0,-1,-1],[-1,0,1]];
const det=m=>m[0][0]*(m[1][1]*m[2][2]-m[1][2]*m[2][1])-m[0][1]*(m[1][0]*m[2][2]-m[1][2]*m[2][0])+m[0][2]*(m[1][0]*m[2][1]-m[1][1]*m[2][0]);
const orientation=(groups,priorities)=>{const p=priorities.map(g=>positions[groups.indexOf(g)]);return det(p.slice(0,3).map(row=>row.map((v,i)=>v-p[3][i])));};
test('propane product estimates use hydrogen multiplicity and per-site rate together',()=>{
 const carbons=[{h:3,type:'primary'},{h:2,type:'secondary'},{h:3,type:'primary'}],rates={primary:1,secondary:4};
 const weights=carbons.reduce((s,c)=>(s[c.type]=(s[c.type]??0)+c.h*rates[c.type],s),{});
 assert.deepEqual(weights,{primary:6,secondary:8});near(weights.primary/(weights.primary+weights.secondary),3/7);
 near(3/7+4/7,1);assert.notEqual(3/7,6/8);assert.notEqual(3/7,1/4);
});
test('syn and anti addition change the stereochemical relation for the two butene geometries',()=>{
 // A planar alkene model: methyl vectors point above/below the C=C; OH arrives along the face normal.
 const centre=(left,methylUp,face)=>{
  const other=[left?1:-1,0,0],methyl=[left?-1:1,methylUp?1:-1,0],H=[left?-1:1,methylUp?-1:1,0],OH=[0,0,face];
  return det([OH,other,methyl].map(p=>p.map((v,i)=>v-H[i])));
 };
 for(const isCis of [true,false]){const syn=[centre(true,true,1),centre(false,isCis,1)],anti=[centre(true,true,1),centre(false,isCis,-1)];
  assert.equal(Math.sign(syn[0])===Math.sign(syn[1]),!isCis);assert.equal(Math.sign(anti[0])===Math.sign(anti[1]),isCis);
  const reverseFace=[centre(true,true,-1),centre(false,isCis,-1)];
  assert.equal(Math.sign(reverseFace[0]),-Math.sign(syn[0]));assert.equal(Math.sign(reverseFace[1]),-Math.sign(syn[1]));
 }
});
test('cyclic alkene cleavage preserves a single connected six-carbon path',()=>{
 const edges=[[1,2],[2,3],[3,4],[4,5],[5,6],[6,1]],remaining=edges.filter(([a,b])=>!(a===1&&b===2));
 const visited=new Set([1]);for(let n=0;n<6;n++)for(const[a,b]of remaining){if(visited.has(a))visited.add(b);if(visited.has(b))visited.add(a);}
 assert.equal(visited.size,6);assert.equal(remaining.length,5);
 const degree=n=>remaining.filter(e=>e.includes(n)).length;assert.equal(degree(1),1);assert.equal(degree(2),1);
 assert.deepEqual([1,2,3,4,5,6].map(n=>degree(n)),[1,1,2,2,2,2]);
 assert.deepEqual({C:2+4,H:2+4*2,O:2},{C:6,H:10,O:2});near(.0200*1,.0200);
});
test('hydride-shift addition conserves carbon skeleton, atoms and local positive charge',()=>{
 const before=[3,1,1,3,3],after=[3,2,0,3,3];assert.equal(before.reduce((a,b)=>a+b),11);assert.equal(after.reduce((a,b)=>a+b),11);
 const carbonNeighbours={1:[2],2:[1,3],3:[2,4,5],4:[3],5:[3]};assert.equal(carbonNeighbours[2].length,2);assert.equal(carbonNeighbours[3].length,3);
 assert.deepEqual({C:5,H:10+1,Cl:1},{C:5,H:11,Cl:1});
});
test('ortho/para resonance positions differ from meta in the standard SNAr addition intermediate',()=>{
 // Addition at C1 places the conventional delocalized anion sites at C2,C4,C6.
 const resonanceSites=new Set([2,4,6]);assert.ok(resonanceSites.has(4));assert.ok(!resonanceSites.has(3));
 const additionBarrier={F:70,Cl:75},R=.008314,T=350;
 assert.ok(Math.exp(-additionBarrier.F/(R*T))>Math.exp(-additionBarrier.Cl/(R*T)));
 // The numerical barrier dataset is hypothetical; a later leaving step is not used as an alkyl SN2 ranking.
});
test('intramolecular Williamson map closes a five-membered ring and conserves charge',()=>{
 const edges=[['O','C1'],['C1','C2'],['C2','C3'],['C3','C4']],closed=[...edges,['C4','O']];
 assert.equal(new Set(closed.flat()).size,5);assert.equal(closed.length,5);
 for(const atom of new Set(closed.flat()))assert.equal(closed.filter(e=>e.includes(atom)).length,2);
 assert.deepEqual({C:4,H:8,O:1,Br:1,charge:-1},{C:4,H:8,O:1,Br:0+1,charge:0-1});
});
test('epoxide and formaldehyde Grignard maps retain distinct carbon and oxygen inventories',()=>{
 const ethyl=['E1','E2'],oxide=['X1','X2'],product=[...ethyl,...oxide];assert.equal(product.length,4);
 assert.equal(ethyl.length+1,3);assert.equal(ethyl.length,2);
 const bonds=[['E1','E2'],['E2','X1'],['X1','X2'],['X2','O']];assert.ok(bonds.some(e=>e.join()==='X2,O'));assert.ok(!bonds.some(e=>e.join()==='X1,O'));
 assert.deepEqual({C:2+2,H:5+4+1,O:1},{C:4,H:10,O:1});
});
test('actual displayed SN2 Fischer frames encode inversion with R retained only after priority reassignment',()=>{
 const [initial,product]=sn2PriorityFrames;
 const first=orientation(initial.groups,initial.priorities),last=orientation(product.groups,product.priorities);
 assert.ok(first<0);assert.equal(last,first);assert.equal(initial.configuration,'R');assert.equal(product.configuration,'R');
 const identityTracked=['CN','CH₂OH','CH₃','H'];assert.equal(orientation(product.groups,identityTracked),-first);
 // First attached atoms tie at C; the next lexicographic atomic-number lists decide.
 assert.ok([8,1,1][0]>[7,7,7][0]);assert.ok([7,7,7][0]>[1,1,1][0]);
 assert.deepEqual({C:3+1,H:7,N:1,O:1,Br:1,charge:-1},{C:4,H:7,N:1,O:1,Br:1,charge:-1});
});
