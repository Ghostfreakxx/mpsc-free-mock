import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const atomic=read('atomic-structure'),bond=read('chemical-bonding'),periodic=read('periodic-trends');
const answer=(l,i)=>l.quiz[i].options[l.quiz[i].answer];
test('new atomic keys agree with state enumeration and energy bounds',()=>{
 assert.equal(answer(atomic,12),(13.6/2**2).toFixed(1)+' eV');
 const pairs=[];for(let upper=2;upper<=4;upper++)for(let lower=1;lower<upper;lower++)pairs.push([upper,lower]);
 assert.equal(answer(atomic,13),String(pairs.length));
 let states=0;for(const l of [2,3])for(let ml=-l;ml<=l;ml++)states+=2;
 assert.equal(answer(atomic,14),String(states));
 assert.equal(answer(atomic,15),`${4-2-1} and ${2}`);
 const minimum=1.055e-34/(2*9.11e-31*1e-10);
 assert.equal(answer(atomic,16),(minimum/1e5).toFixed(2)+'×10^5 m/s');
 const zeroMagnetic=[0,1,2].filter(l=>-l<=0&&0<=l).length;
 assert.equal(answer(atomic,17),String(zeroMagnetic));
});
test('new bonding keys preserve cycle signs, electron populations and vector addition',()=>{
 const lattice=-411-(108+496+122-349);
 assert.equal(answer(bond,12),String(lattice).replace('-','−')+' kJ/mol');
 assert.equal(answer(bond,13),String((10-1-4)/2));
 assert.equal(answer(bond,15),'4/3');
 const a=60*Math.PI/180;
 const x=1.5*Math.sin(a)-1.5*Math.sin(a),y=1.5*Math.cos(a)+1.5*Math.cos(a);
 assert.equal(answer(bond,16),Math.hypot(x,y).toFixed(2)+' D');
});
test('new periodic keys use cumulative removals and compatible process definitions',()=>{
 const ie=[578,1817,2745,11577];const gaps=ie.slice(1).map((value,i)=>value-ie[i]);
 assert.equal(answer(periodic,10),String(gaps.indexOf(Math.max(...gaps))+1));
 assert.equal(answer(periodic,11),ie.slice(0,3).reduce((a,b)=>a+b,0)+' kJ/mol');
 assert.equal(answer(periodic,12),(349-328)+' kJ/mol more');
 assert.equal(answer(periodic,13),(198/2)+' pm');
 // Al2O3 + 2OH− + 3H2O conserves charge, oxygen and hydrogen.
 assert.equal(3+2+3,2*4);assert.equal(2+3*2,2*4);assert.equal(-2,2*-1);
 assert.equal(answer(periodic,14),'(2,3)');
 const potentials={Li:-3.04,Na:-2.71,K:-2.93};
 assert.equal(answer(periodic,15),Object.keys(potentials).sort((a,b)=>potentials[a]-potentials[b])[0]);
});
