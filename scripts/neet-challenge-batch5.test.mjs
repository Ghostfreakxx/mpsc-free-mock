import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText,f);
const {selectNeetFullMock}=require('../app/lib/neet-full-mock.ts');
const read=n=>JSON.parse(fs.readFileSync(`app/data/${n}.json`,'utf8'));
const base=read('neet-full-mock'),extra=read('neet-challenge-batch5');
const harder=[...read('neet-challenge-mock'),...read('neet-challenge-expansion'),...read('neet-challenge-rotation'),...read('neet-challenge-batch4'),...extra],pool=[...base,...harder];

test('all units have three reachable challenge choices with exact quotas and preserved foundation papers',()=>{
  assert.equal(extra.length,25);assert.equal(harder.length,150);assert.equal(pool.length,777);
  assert.equal(new Set(pool.map(q=>q.id)).size,777);assert.equal(new Set(pool.map(q=>q.question.trim().toLowerCase())).size,777);
  const categories=new Set(harder.map(q=>q.category));assert.equal(categories.size,50);
  for(const c of categories)assert.equal(harder.filter(q=>q.category===c).length,3,c);
  const seen=new Set();
  for(let seed=0;seed<100;seed++){
    const paper=selectNeetFullMock(pool,seed,true);
    assert.equal(paper.length,180);assert.equal(paper.filter(q=>q.challenge).length,50);
    assert.equal(new Set(paper.filter(q=>q.challenge).map(q=>q.category)).size,50);
    assert.deepEqual(['Physics','Chemistry','Biology'].map(s=>paper.filter(q=>q.subject===s).length),[45,45,90]);
    paper.forEach(q=>seen.add(q.id));assert.deepEqual(selectNeetFullMock(pool,seed),selectNeetFullMock(base,seed));
  }
  for(const q of harder)assert(seen.has(q.id),q.id);
  for(const q of extra){assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert(q.options.includes(q.answer));assert(q.explanation.length>120,q.id);}
});

test('independent multistep arithmetic supports the new answer keys',()=>{
  const a=(s,u)=>extra.find(q=>q.subject===s&&q.unit===u).answer;
  assert.equal(a('Physics',11),`${(4e-6*3*200*1000).toFixed(1)} mC and 3`);
  assert(Math.abs(5*(60/50-1)-1)<1e-12);assert.equal(a('Physics',12),'1 Ω and 5/6');
  assert.equal(a('Physics',14),`${100*0.02*(0.5-0.1)/0.2} V and 2 A`);
  assert.equal(a('Physics',15),`${3e8/2e8} and ${2e8/1e8} m`);
  assert.equal(1/(1/10-1/20),20);assert.equal(a('Physics',16),'+20 cm and +60 cm');
  assert.equal(a('Physics',17),`${0.25*0.002/5*1e6} μA and ${5-2} V`);
  assert.equal(a('Physics',18),`${(0.08*931.5).toFixed(2)} MeV and ${(0.08*931.5/10).toFixed(3)} MeV`);
  assert.equal(a('Physics',19),`${5+(0.1/5+5/1000)*200} V`);
  assert.equal(a('Physics',20),`${((1.4-0.6)/(0.3-0.1)).toFixed(0)} Ω and +0.20 V`);
  assert.equal(a('Chemistry',11),`${(0.02*5).toFixed(3)} mol and ${(0.02*8).toFixed(3)} mol`);
  assert.equal(a('Chemistry',13),`${(1/(1+4*50/100)**2).toFixed(3)} g approximately`);
  assert.equal((2*5+2-8)/2,2);assert.equal(a('Chemistry',14),'Two; no');
  assert.equal(a('Chemistry',17),`${(0.01*2*108).toFixed(2)} g`);
  assert(Math.abs(-Math.log10((0.015-0.01)/0.1)-1.30103)<1e-5);
  assert.equal(a('Chemistry',19),String(600*2+400*3));
  assert.equal(a('Chemistry',20),`${((20.2-0.2)/1000*0.02*5/0.025).toFixed(4)} mol/L`);
  assert.equal(a('Biology',7),String(1000*0.2));
  assert.equal(a('Biology',9),'Three from linear DNA and two from circular DNA');
  assert.equal(a('Biology',10),`${0.5*100*(1-100/200)} individuals/yr; yes`);
});
