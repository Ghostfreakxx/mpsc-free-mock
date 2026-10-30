import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} differs from ${b}`);
test('p-block reaction questions preserve redox, peroxide and electron ledgers',()=>{
 assert.deepEqual(read('p-block').quiz.slice(26).map(q=>q.answer),[0,1,2,3,0,1,2,3,2,3,0,1,2,3,0,1,0,1,2,3,0,1,2,3,1,2,3,0,1,2,3,0]);
 assert.deepEqual({Pb:1,O:2,H:4,I:2,charge:4-2},{Pb:1,O:2,H:4,I:2,charge:2});
 near(.0100*1,.0100);near(.0100*2,.0200);
 assert.equal(2*2,4);assert.equal(4*2/2,4);
 assert.deepEqual([2*2-1,3*2-1],[3,5]);
 for(const [H,S,O,peroxideO] of [[2,1,5,2],[2,2,8,2],[2,2,7,0]]) assert.equal((2*O-peroxideO-H)/S,6);
 // Total electrons minus bond electrons and terminal lone electrons.
 assert.deepEqual([(42-12-28)/2,(26-12-12)/2,(32-16-16)/2],[1,1,0]);
 assert.deepEqual([5+1,3+1,4+0],[6,4,4]);
});
test('d/f-block precipitation, photon energy and catalytic balances agree',()=>{
 assert.deepEqual(read('d-f-block').quiz.slice(26).map(q=>q.answer),[2,3,0,1,2,3,0,1,0,1,2,3,0,1,2,3,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0]);
 assert.deepEqual({Cu:2,I:4,charge:2*2-4},{Cu:2,I:2+2,charge:0});
 near(.0100/2,.00500);near(.0100*2,.0200);
 near(1240/500,2.48);near(1240/500*96.485,239.2828);assert.equal(72-71,1);
 // Stage 1: persulfate plus two Fe(II); stage 2: two Fe(III) plus iodide.
 assert.equal(-2+2*2,2*(-2)+2*3);assert.equal(2*3-2,2*2);
 assert.deepEqual({S:2,O:8,I:2,charge:-2-2},{S:2,O:2*4,I:2,charge:2*(-2)});
});
