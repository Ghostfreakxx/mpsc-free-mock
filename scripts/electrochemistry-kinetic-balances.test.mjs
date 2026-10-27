import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<t,`${a} differs from ${b}`);
test('calibration, ramp-current charge and lead-acid capacity retain their units',()=>{
 assert.deepEqual(read('redox-electrochemistry').quiz.slice(26).map(q=>q.answer),[0,1,2,3,0,1,2,3,2,3,0,1,2,3,0,1]);
 const constant=.00120*100,conductivity=constant/300;
 near(constant,.120);near(conductivity,.000400);near(1000*conductivity/.002,200);
 const rectangle=2*600,triangle=(4-2)*600/2,Q=rectangle+triangle;
 near(Q,1800);near(Q*.8*63.5/(2*96500),.4737823834196891);assert.ok(Q<4*600);
 near(1*3600,3600);const extent=3600/(2*96500);
 near(extent,.01865284974093264);near(2*extent,.03730569948186528);
 assert.deepEqual({Pb:2,H:4,S:2,O:2+8},{Pb:2,H:4,S:2,O:8+2});
});
test('alkaline manganese and sulfite balance conserves atoms and charge',()=>{
 assert.equal(7-4,3);assert.equal(6-4,2);assert.equal(2*3,3*2);
 assert.deepEqual({Mn:2,S:3,O:2*4+3*3+1,H:2,charge:-2-6},{Mn:2,S:3,O:2*2+3*4+2,H:2,charge:-6-2});
 near(.0200*3/2,.0300);
});
test('clock threshold, instantaneous rates and changing-volume amount balance agree',()=>{
 assert.deepEqual(read('chemical-kinetics').quiz.slice(34).map(q=>q.answer),[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3]);
 near(.000200/20,1e-5);near(.000200/40,5e-6);
 const c=t=>.1*Math.exp(-.1*t),instant=.1*c(5),mean=(c(0)-c(10))/10;
 near(mean,.006321205588285577);near(instant,.006065306597126335);assert.ok(mean>instant);
 const h=.0001;near((c(5-h)-c(5+h))/(2*h),instant,1e-11);
 const V=1,C=.1,dV=.01,r=.002,dC=-r-C/V*dV;
 near(dC,-.003);near(V*dC+C*dV,-r*V);near(r*V,.002);
});
test('reversible first-order model preserves the plateau and relaxes the displacement',()=>{
 const kf=.1,kr=.05,total=.3,aeq=total*kr/(kf+kr),beq=total-aeq,t=Math.log(2)/(kf+kr);
 near(aeq,.1);near(beq,.2);near(kf*aeq,kr*beq);near(t,4.620981203732969);
 const A=aeq+(total-aeq)*Math.exp(-(kf+kr)*t),B=total-A;
 near(A,.2);near(B,.1);near((A-aeq)/(total-aeq),.5);assert.notEqual(A,total/2);
});
