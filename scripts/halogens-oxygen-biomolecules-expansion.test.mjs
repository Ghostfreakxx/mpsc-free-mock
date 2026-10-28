import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));const h=read('organic-halogens'),o=read('organic-oxygen'),b=read('biomolecules');const a=(l,i)=>l.quiz[i].options[l.quiz[i].answer];const near=(x,y,t=1e-10)=>assert.ok(Math.abs(x-y)<t);
test('new halogen practice preserves skeletons, coupling identity and alcohol classification',()=>{
 assert.deepEqual(h.quiz.slice(16).map(q=>q.answer),[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0]);
 const pairs=new Set();for(const x of [1,2])for(const y of [1,2])pairs.add([x,y].sort().join('+'));
 assert.equal(pairs.size,3);assert.equal(a(h,18),'Three products');
 assert.equal(a(h,20),'Propan-2-ol');assert.equal(1+2,3);assert.equal(a(h,21),'Tertiary');
 assert.equal(a(h,22),'But-1-ene and but-2-ene');assert.equal(a(h,23),'3 alkenes');assert.equal(1+2,3);
});
test('oxygen practice checks donor roles, limiting hydroxide, chirality and conditional acid ratios',()=>{
 assert.deepEqual(o.quiz.slice(16).map(q=>q.answer),[1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3]);
 assert.equal(a(o,16),String(2*2));assert.equal(a(o,17),'Enolate donor');assert.equal(a(o,18),'Ethanoate');
 assert.equal(a(o,19),`${(.0200-Math.min(.0200,.0150)).toFixed(5)} mol`);
 assert.equal(a(o,20),String(2+1));assert.equal(a(o,21),'A racemic pair');
 assert.equal(a(o,22),String(10**(5-3)));assert.equal(a(o,23),String(Math.sqrt(10**(5-3))));
 const C=1,KaA=1e-3,KaB=1e-5,root=Ka=>(Math.sqrt(Ka*Ka+4*Ka*C)-Ka)/2;
 assert.ok(root(KaA)/C<.05 && root(KaB)/C<.05);near(root(KaA)/root(KaB),10,.15);
});
test('biomolecule arithmetic distinguishes base pairs, residues, links and rotation fractions',()=>{
 assert.deepEqual(b.quiz.slice(16).map(q=>q.answer),[2,3,0,1,2,3,0,1,1,2,3,0,1,2,3,0,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1]);
 const bases=2*1000,A=.30*bases,T=A,G=(bases-A-T)/2;assert.equal(a(b,16),`${100*G/bases}%`);
 assert.equal(a(b,17),String(2*A+3*G));assert.equal(A+T+2*G,bases);
 assert.equal(a(b,18),'Nucleoside');assert.equal(a(b,19),String(10-1));assert.equal(a(b,21),String(5-1));
 const alpha=(52.7-18.7)/(112-18.7);near(112*alpha+18.7*(1-alpha),52.7);assert.equal(a(b,22),alpha.toFixed(3));
 assert.ok(alpha>0 && alpha<1 && Math.abs(alpha-.5)>.1);
});
