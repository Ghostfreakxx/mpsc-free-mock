import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {hydrogen3sRadial as radial,illustrativeBondPotential as potential} from '../app/jee/classes/atomic-bonding-evidence-functions.ts';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const a=read('atomic-structure'),b=read('chemical-bonding');
const answer=(lesson,i)=>lesson.quiz[i].options[lesson.quiz[i].answer];
const near=(x,y,t=1e-9)=>assert.ok(Math.abs(x-y)<t,`${x} != ${y}`);
test('displayed 3s function has exactly the expected two positive node crossings and nonnegative radial probability',()=>{
 const roots=[(9-3*Math.sqrt(3))/2,(9+3*Math.sqrt(3))/2];
 for(const root of roots){near(radial(root),0);assert.ok(radial(root-.001)*radial(root+.001)<0);}
 let crossings=0;for(let x=.01;x<30;x+=.01){if(radial(x)*radial(x+.01)<0)crossings++;assert.ok(x*x*radial(x)**2>=0);}
 assert.equal(crossings,2);assert.equal(radial(0),27);
 assert.equal(answer(a,34),'1.90 and 7.10 a₀');assert.match(answer(a,35),/r² factor/);
});
test('isotope ratio tends toward the infinite-mass result and retains reciprocal wavelength',()=>{
 const reducedRatio=M=>M/(M+1),ratio=reducedRatio(3670)/reducedRatio(1836);
 near(ratio,1.0002721086013024,1e-9);assert.ok(reducedRatio(1836)<reducedRatio(3670)&&reducedRatio(3670)<1);
 near(ratio*(1/ratio),1);assert.equal(answer(a,37),ratio.toFixed(6));
 assert.match(answer(a,36),/higher frequency and shorter/);
});
test('kinetic-energy bound and photoelectric inverse fit preserve units and thresholds',()=>{
 const energy=dx=>1.055e-34**2/(8*9.11e-31*dx**2)/1.602e-19;
 near(energy(1e-10),.95330976921,.000001);near(energy(.5e-10)/energy(1e-10),4);
 assert.match(answer(a,38),/factor of 4 upward/);assert.equal(answer(a,39),energy(1e-10).toFixed(4)+' eV');
 const frequencies=[6e14,8e14],kinetic=[.4816,1.3088],slope=(kinetic[1]-kinetic[0])/(frequencies[1]-frequencies[0]);
 near(slope/1e-15,4.136);for(let i=0;i<2;i++)near(slope*frequencies[i]-kinetic[i],2);
 near(2/slope/1e14,4.83558994197);assert.equal(answer(a,40),'2.000 eV');assert.match(answer(a,41),/no single-photon emission/);
});
test('HF valence occupancy and nitrogen dioxide electron parity distinguish paired and odd-electron species',()=>{
 const occupancies=[2,2,2,2,0];assert.equal(occupancies.reduce((s,n)=>s+n),1+7);
 assert.ok(occupancies.every(n=>n%2===0));assert.equal((occupancies[1]-occupancies[4])/2,1);
 assert.equal(answer(b,34),'F 2p_z');assert.match(answer(b,35),/order 1; all occupied orbitals paired/);
 const counts=[5+2*6-1,5+2*6,5+2*6+1];assert.deepEqual(counts,[16,17,18]);
 assert.equal(counts[1]%2,1);assert.equal(answer(b,38),counts.join(', '));assert.match(answer(b,39),/bent paramagnetic radical/);
});
test('displayed bond curve has a stable minimum and its dissociation levels retain their reference',()=>{
 near(potential(1),-450);assert.ok(potential(.99)>potential(1)&&potential(1.01)>potential(1));
 const derivative=r=>(potential(r+.00001)-potential(r-.00001))/.00002;
 near(derivative(1),0,.00001);assert.ok(derivative(.8)<0&&derivative(1.2)>0);
 near(potential(20),0);assert.equal(answer(b,36),`${450-25} kJ/mol`);assert.match(answer(b,37),/force is zero/);
});
test('positional dipoles follow independent Cartesian vector sums including unequal opposed vectors',()=>{
 const magnitude=(angle,m1=1.5,m2=1.5)=>Math.hypot(m1+m2*Math.cos(angle*Math.PI/180),m2*Math.sin(angle*Math.PI/180));
 near(magnitude(60),1.5*Math.sqrt(3));near(magnitude(120),1.5);near(magnitude(180),0);
 assert.equal(answer(b,40),'√3μ : μ : 0');assert.equal(answer(b,41),magnitude(180,1.5,1).toFixed(1)+' D');
});
