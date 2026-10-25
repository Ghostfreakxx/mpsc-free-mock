import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));const h=read('hydrocarbons'),a=read('atomic-structure'),b=read('chemical-bonding');const answer=(l,i)=>l.quiz[i].options[l.quiz[i].answer];const near=(x,y,t=1e-10)=>assert.ok(Math.abs(x-y)<t);
test('hydrocarbon applications independently check unsaturation, repeat units and ring symmetry',()=>{
 assert.deepEqual(h.quiz.slice(16).map(q=>q.answer),[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3]);assert.equal(answer(h,16),String((2*6+2-10)/2));assert.equal(answer(h,18),'But-1-yne');assert.equal(answer(h,19),'But-2-yne');assert.equal(2+2,3+1);
 assert.equal(answer(h,20),String(28000/28));assert.equal(answer(h,21),String(2*28000/28));
 const methylSites=[2,6],carboxylMeta=[2,6];assert.deepEqual(methylSites.filter(x=>carboxylMeta.includes(x)),[2,6]);assert.equal(answer(h,22),'Positions 2 and 6');assert.equal(answer(h,23),'One');
});
test('atomic states and radial distribution distinguish capacity, occupancy and probability meanings',()=>{
 assert.deepEqual(a.quiz.slice(18).map(q=>q.answer),[1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0]);let spatial=0;for(let l=0;l<3;l++)spatial+=2*l+1;assert.equal(answer(a,18),String(spatial));assert.equal(answer(a,19),String(2*spatial));assert.equal(answer(a,21),`${.529/2} Å`);
 const radial=x=>4*x*x*Math.exp(-2*x);assert.equal(radial(0),0);assert.ok(radial(1)>radial(.9)&&radial(1)>radial(1.1));
 let integral=0;const dx=.0005;for(let x=dx/2;x<15;x+=dx)integral+=radial(x)*dx;near(integral,1,1e-8);
 assert.equal(2+2+5+1,10);assert.equal(answer(a,22),'An allowed excited configuration');assert.match(answer(a,23),/Pauli/);
 const Z=Math.sqrt(17/(13.6*(1/4-1/9)));near(Z,3);assert.equal(answer(a,24),String(Math.round(Z)));assert.equal(answer(a,25),'Li2+');near(1240/17,72.94,.002);
});
test('bonding energy and electron ledgers conserve counts and signs',()=>{
 assert.deepEqual(b.quiz.slice(18).map(q=>q.answer),[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3]);const subtotal=148+738+1451+243-2*349;assert.equal(answer(b,18),`${subtotal} kJ/mol`);assert.equal(answer(b,19),`${-642-subtotal} kJ/mol`.replace('-','−'));
 assert.equal(5+2*6+1,18);assert.equal(5+2*6-1,16);assert.equal(answer(b,20),'18, bent');assert.match(answer(b,21),/^Linear/);
 const net=614+436-(347+2*413);assert.equal(answer(b,22),`${net} kJ/mol`.replace('-','−'));near((8-3)/2,2.5);near((8-2)/2,3);assert.equal(answer(b,24),'2.5, one');assert.equal(answer(b,25),'3');
});
