import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const o=read('organic-principles'),a=read('purification-analysis');
const answer=(lesson,i)=>lesson.quiz[i].options[lesson.quiz[i].answer];
const near=(x,y)=>assert.ok(Math.abs(x-y)<1e-10);
test('CIP neighbour lists compare lexicographically rather than by their total atomic-number sum',()=>{
 const groups={CHO:[8,8,1],CH2OH:[8,1,1],ethyl:[6,1,1],methyl:[1,1,1]};
 const compare=(x,y)=>{for(let i=0;i<x.length;i++)if(x[i]!==y[i])return y[i]-x[i];return 0;};
 assert.deepEqual(Object.keys(groups).sort((x,y)=>compare(groups[x],groups[y])),['CHO','CH2OH','ethyl','methyl']);
 assert.match(answer(o,28),/–CHO because O,O,H/);assert.equal(answer(o,29),'Deuterium 2H');
});
test('symmetric two-centre assignments reduce the formal maximum to three stereoisomers',()=>{
 const assignments=['RR','RS','SR','SS'];
 // For this symmetric 2,3-dibromobutane connectivity, RS and SR are one meso form.
 const distinct=new Set(assignments.map(s=>s==='SR'?'RS':s));
 assert.equal(distinct.size,3);assert.equal(answer(o,30),'Three');
 assert.match(answer(o,31),/achiral molecular structure.*equal mixture/);
 const dihedral=(a,b)=>Math.min((Math.abs(a-b)%360),360-(Math.abs(a-b)%360));
 assert.equal(dihedral(-90,90),180);assert.equal(dihedral(-90,-30),60);
 assert.equal(answer(o,32),`${dihedral(-90,90)}°`);assert.match(answer(o,33),/Both are staggered/);
});
test('defined C4H10O alcohol and ether enumeration excludes reversed ether duplicates',()=>{
 const alcohols=['butan-1-ol','butan-2-ol','2-methylpropan-1-ol','2-methylpropan-2-ol'];
 const etherGroups=[['methyl','n-propyl'],['methyl','isopropyl'],['ethyl','ethyl']];
 const canonical=pair=>pair.toSorted().join('|');
 const ethers=new Set(etherGroups.flatMap(pair=>[canonical(pair),canonical(pair.toReversed())]));
 assert.equal(alcohols.length+ethers.size,7);
 assert.equal(alcohols.length+ethers.size-1+2,8);
 assert.match(answer(o,34),/Seven total/);assert.match(answer(o,35),/^Eight, because butan-2-ol/);
});
test('analytical interference and mixed-halide equations conserve charge and independent measured totals',()=>{
 assert.equal(2*1-2,0);assert.equal(answer(a,24),'It contributes chloride ions itself');assert.equal(answer(a,25),'Two');
 const total=.003,mass=.475,MCl=143.5,MBr=188,bromide=(mass-total*MCl)/(MBr-MCl),chloride=total-bromide;
 near(bromide,.001);near(chloride,.002);near(chloride*MCl+bromide*MBr,mass);
 assert.equal(answer(a,26),(bromide*1000).toFixed(2)+' mmol');assert.match(answer(a,27),/cannot determine both halide amounts/);
});
test('selective crystallization tracks desired material and impurity independently through a fresh wash',()=>{
 const initialA=10,initialB=2,water=50,ACold=4,BCold=8;
 const crystalsA=initialA-water*ACold/100,crystalsB=Math.max(0,initialB-water*BCold/100);
 assert.equal(crystalsB,0);assert.equal(answer(a,28),crystalsA.toFixed(1)+' g');
 const afterWash=crystalsA-10*ACold/100;
 assert.equal(answer(a,29),(100*afterWash/initialA).toFixed(1)+'%');near(afterWash,7.6);
});
test('distillation pressure and vapour fraction use separate liquid and gas composition balances',()=>{
 const xA=.25,xB=1-xA,partialA=xA*100,partialB=xB*40,total=partialA+partialB,yA=partialA/total;
 assert.equal(answer(a,30),`${total} kPa`);near(yA,5/11);assert.ok(yA>xA&&yA<1);
 assert.equal(answer(a,31),'5/11, approximately 0.455');near(yA+partialB/total,1);
});
