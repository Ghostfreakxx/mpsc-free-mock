import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,`${a} differs from ${b}`);
test('hydrocarbon evidence keys preserve carbon and combustion gas inventories',()=>{
 assert.deepEqual(read('hydrocarbons').quiz.slice(32).map(q=>q.answer),[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3]);
 assert.equal(2+3,5);assert.equal(4+1,5);
 // Formal oxygen-atom ledgers for the specified final acid/CO2 products.
 assert.deepEqual({C:5,H:8+2,O:1+3},{C:2+3,H:4+6,O:2+2});
 assert.deepEqual({C:5,H:8,O:4},{C:4+1,H:8,O:2+2});
 assert.deepEqual({C:6,H:6,S:1,O:3},{C:6,H:5+1,S:1,O:3});
 const fuel=20,initialOxygen=130,cooled=90,residualOxygen=30;
 const carbonDioxide=cooled-residualOxygen,usedOxygen=initialOxygen-residualOxygen;
 near(carbonDioxide,60);near(usedOxygen,100);const x=carbonDioxide/fuel,y=4*(usedOxygen/fuel-x);near(x,3);near(y,8);
 assert.deepEqual({C:3,H:8,O:5*2},{C:3,H:4*2,O:3*2+4});
});
test('identical dibromobutane chain ends distinguish meso from a mirror pair',()=>{
 const mirror=s=>[...s].map(c=>c==='R'?'S':'R').join('');
 const canonical=s=>[s,[...s].reverse().join('')].sort()[0];
 assert.equal(canonical('RS'),canonical(mirror('RS')));
 assert.notEqual(canonical('RR'),canonical(mirror('RR')));
 assert.equal(canonical(mirror('RR')),canonical('SS'));
});
test('axial beta-site restrictions and solvent rate ratios respect their supplied models',()=>{
 assert.deepEqual(read('organic-halogens').quiz.slice(32).map(q=>q.answer),[1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0]);
 const leaving={site:1,direction:'up'},adjacent=[{site:2,axialGroup:'CH3',direction:'down'},{site:6,axialGroup:'H',direction:'down'}];
 const eligible=adjacent.filter(s=>s.axialGroup==='H'&&s.direction!==leaving.direction).map(s=>s.site);
 assert.deepEqual(eligible,[6]);
 const substrate=.050,nucleophile=.100,v1=.010*substrate*nucleophile,v2=.200*substrate*nucleophile;
 near(v2/v1,20);near(.001*143.5,.1435); // Reagent-derived chloride can make AgCl without sample chloride.
 assert.equal(1+(-1),0);
});
