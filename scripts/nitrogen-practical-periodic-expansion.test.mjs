import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));const n=read('organic-nitrogen'),p=read('practical-chemistry'),t=read('periodic-trends');const a=(l,i)=>l.quiz[i].options[l.quiz[i].answer];
test('amine questions retain substrate limits, dry gas units and nitrogen ledgers',()=>{
 assert.deepEqual(n.quiz.slice(16).map(q=>q.answer),[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3]);
 assert.equal(a(n,16),'Ethylamine');assert.match(a(n,17),/not an ordinary backside/);
 const gasAmount=100*.0240/(8.314*300);assert.equal(a(n,18),`${gasAmount.toFixed(6)} mol`);assert.equal(a(n,19),`${(gasAmount/.0250).toFixed(4)} M`);
 assert.match(a(n,20),/adjacent carbonyl/);assert.equal(a(n,21),'Oxygen');assert.equal(a(n,22),'Two');assert.equal(a(n,23),String(6+6));
});
test('practical calculations conserve target mass, hydrate formula units and titration electrons',()=>{
 assert.deepEqual(p.quiz.slice(16).map(q=>q.answer),[1,2,3,0,1,2,3,0]);
 const dissolved=5*50/100,recovered=10-dissolved;assert.equal(a(p,16),`${dissolved.toFixed(2)} g`);assert.equal(a(p,17),`${100*recovered/10}%`);
 const formalC=(3.92/392)/.250;assert.equal(a(p,18),`${formalC.toFixed(4)} M`);assert.equal(a(p,19),`${(formalC*.0250/5/.0200*1000).toFixed(1)} mL`);
 assert.equal(a(p,21),`${(123-1).toFixed(1)} °C`);assert.equal(a(p,22),'Cations');
 const inverse=[50,1,.1].map(x=>1/x);assert.deepEqual(inverse.map(x=>x/inverse[0]),[1,50,500]);assert.equal(a(p,23),'1 : 50 : 500');
});
test('periodic arithmetic preserves neutral versus ionic identity and both electron-gain signs',()=>{
 assert.deepEqual(t.quiz.slice(16).map(q=>q.answer),[2,3,0,1,2,3,0,1]);
 assert.equal(a(t,16),'Period 3, group 15');assert.equal(a(t,17),String(10+2+3));assert.equal(a(t,19),`${17}, ${37-17}, ${17+1}`);
 assert.equal(a(t,20),`+${-141+744} kJ/mol`);assert.match(a(t,21),/other energy contributions/);
 assert.equal(a(t,22),`${(5*96.485).toFixed(3)} kJ/mol`);assert.equal(a(t,23),`${1240/5} nm`);assert.ok(1240/200>5 && 1240/300<5);
});
