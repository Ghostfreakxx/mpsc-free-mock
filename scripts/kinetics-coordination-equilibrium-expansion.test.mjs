import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const k=read('chemical-kinetics'),c=read('coordination-compounds'),e=read('equilibrium');
const a=(l,i)=>l.quiz[i].options[l.quiz[i].answer];const near=(actual,expected,tolerance=1e-10)=>assert.ok(Math.abs(actual-expected)<tolerance,`${actual} != ${expected}`);
test('new rate questions preserve axis conventions, order units, amount and branch balances',()=>{
 assert.deepEqual(k.quiz.slice(18).map(q=>q.answer),[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,1,2,3,0,1,2,3,0]);
 assert.equal(a(k,18),`${6000*8.314/1000} kJ/mol`);assert.equal(a(k,20),'1/2');near(Math.log(2)/Math.log(4),.5);
 assert.equal(a(k,21),'M⁻¹ᐟ² s⁻¹');near(1-(.5+1),-.5);
 assert.equal(a(k,22),'0.100 mol A');assert.equal(a(k,23),'0.0250 M');near(.100*Math.exp(-Math.log(2))/2,.025);
 assert.equal(a(k,24),(.020+.030).toFixed(3));assert.equal(a(k,25),(.030/(.020+.030)).toFixed(2));
 near(Math.log(2)/(.020+.030),13.862943611198904);
});
test('coordination problems independently count charge, outer chloride and split-orbital energies',()=>{
 assert.deepEqual(c.quiz.slice(18).map(q=>q.answer),[1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,0,1,2,3,0,1,2,3,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0]);
 assert.equal(a(c,19),'+3');assert.equal(3+6*(-1),-3);
 assert.equal(a(c,20),`${(.0100*3*143.5).toFixed(3)} g`);assert.equal(a(c,21),String(5+1));
 near(3*(-.4),-1.2);near(2*(-.6)+.4,-.8);near(18000*4/9,8000);
 assert.equal(a(c,24),'6');assert.equal(2+4,6);assert.equal(a(c,25),`${(.0200*.0100/.0250).toFixed(5)} M`);
});
test('equilibrium calculations respect quotient powers, phase conventions and mass balance',()=>{
 assert.deepEqual(e.quiz.slice(18).map(q=>q.answer),[1,2,3,0,1,2,3,0,2,3,0,1,2,3,0,1,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3]);
 assert.equal(a(e,18),String(Math.sqrt(16)));assert.equal(a(e,19),String(5*4));
 assert.equal(a(e,20),`${(.200*1).toFixed(3)} bar`);
 const C=.001,Kb=.0001,x=(-Kb+Math.sqrt(Kb*Kb+4*Kb*C))/2;
 near(x*x/(C-x),Kb);assert.ok(x/C>.05);near(14+Math.log10(x),10.43,.005);
 assert.equal(a(e,22),`${x.toFixed(6)} M`);assert.equal(a(e,23),`${Math.round(100*x/C)}%`);
 near(1e-10/.0100,1e-8);near(1e-8/.0100,1e-6);near((1-(1e-10/1e-6)/.0100)*100,99);
 assert.equal(a(e,25),'99%');
});
