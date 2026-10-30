import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const near=(a,b,t=1e-9)=>assert.ok(Math.abs(a-b)<t,`${a} differs from ${b}`);
test('Born-Haber signs, integrated heat capacity and mixing entropy close independently',()=>{
 const data=read('chemical-thermodynamics');
 assert.deepEqual(data.quiz.slice(26).map(q=>q.answer),[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,1,2,3,0,1,2,3,0]);
 const ionPreparation=108+496+244/2-349,formation=-411;
 near(ionPreparation,377);near(formation-ionPreparation,-788);near(ionPreparation-formation,788);
 const correction=10*(500-300)+.020/2*(500**2-300**2);
 near(correction,3600);near(-50+correction/1000,-46.4);
 // A midpoint-rule integration cross-check is exact for the stated linear function.
 let sum=0;for(let t=300.5;t<500;t++)sum+=10+.020*t;near(sum,correction);
 const entropy=-8.314*(Math.log(.5)+Math.log(.5));
 near(entropy,11.52565131835,.0000001);near(-300*entropy/1000,-3.4576953955,.0000001);
 const dg=-8.314*300*Math.log(9);near(Math.exp(-2*dg/(8.314*300)),81);near(Math.exp(dg/(8.314*300)),1/9);
});
test('component, membrane, partial-pressure and solvent inventories remain conserved',()=>{
 const data=read('solutions');
 assert.deepEqual(data.quiz.slice(26).map(q=>q.answer),[1,2,3,0,1,2,3,0,2,3,0,1,2,3,0,1,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0]);
 const A=6-.8,B=4-.2;near(A+B,9);near(A/(A+B),.5777777777777778);
 const C=(.010+.020)/.200,left=.010/C,right=.020/C;
 near(C,.150);near(left+right,.200);near(.100-left,right-.100);near(.010/left,.020/right);
 near(right,.1333333333333333);near(.250*(5-.040),1.24);near(1.24/20000,.000062);
 near(.0100/((200-50)/1000),1/15);near(1.86*.0100/.150,.124);near(1.86*.0100/.200,.093);
});
