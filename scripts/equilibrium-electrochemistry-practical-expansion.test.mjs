import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const eq=read('equilibrium'),cell=read('redox-electrochemistry'),practical=read('practical-chemistry');
const answer=(lesson,index)=>lesson.quiz[index].options[lesson.quiz[index].answer];
test('new equilibrium answers follow gas mole balance, dilution and amphiprotic assumptions',()=>{
 assert.equal(answer(eq,12),(.100*.08314*300).toFixed(4));
 assert.equal(answer(eq,13),'1/3');
 const alpha=.2;assert.ok(Math.abs(4*alpha**2/(1-alpha**2)-1/6)<1e-12);
 assert.equal(answer(eq,17),'1/6');
 assert.equal(answer(eq,14),(-Math.log10((.0025-.002)/.045)).toFixed(2));
 assert.equal(answer(eq,15),'1.8×10^−8 M');
 assert.equal(answer(eq,16),((6.3+10.3)/2).toFixed(1));
});
test('new cell answers use electron count, limiting conductance and current efficiency',()=>{
 assert.equal(answer(cell,12),(.05916/2*Math.log10(.1/.001)).toFixed(5)+' V');
 assert.equal(answer(cell,13),String(10**(2*.11832/.05916)));
 assert.equal(answer(cell,14),`${426+91-126} S cm²/mol`);
 const copper=1930/96500/2*63.5;
 assert.equal(answer(cell,15),copper.toFixed(3)+' g');
 assert.equal(answer(cell,16),(copper*.8).toFixed(3)+' g');
});
test('new practical answers include the blank, first-order bounds and vessel heat capacity',()=>{
 assert.equal(answer(practical,10),(21.50-3.10-.40).toFixed(2)+' mL');
 assert.equal(answer(practical,11),(5*.0200*(21.50-3.10-.40)/25).toFixed(4)+' M');
 assert.equal(answer(practical,12),(.20+.10+.15).toFixed(2)+'%');
 assert.equal(answer(practical,14),((100*80+(200+84/4.2)*20)/(300+84/4.2)).toFixed(2)+' °C');
});
