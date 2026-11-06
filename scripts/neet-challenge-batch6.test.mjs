import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText,f);
const {selectNeetFullMock}=require('../app/lib/neet-full-mock.ts');
const read=n=>JSON.parse(fs.readFileSync(`app/data/${n}.json`,'utf8'));
const base=read('neet-full-mock'),extra=read('neet-challenge-batch6');
const harder=[...read('neet-challenge-mock'),...read('neet-challenge-expansion'),...read('neet-challenge-rotation'),...read('neet-challenge-batch4'),...read('neet-challenge-batch5'),...extra],pool=[...base,...harder];

test('batch 6 rotates through balanced full papers while preserving foundation selection',()=>{
  assert.equal(extra.length,25);assert.equal(harder.length,175);assert.equal(pool.length,802);
  assert.equal(new Set(pool.map(q=>q.id)).size,802);assert.equal(new Set(pool.map(q=>q.question.trim().toLowerCase())).size,802);
  const counts=[...new Set(harder.map(q=>q.category))].map(c=>harder.filter(q=>q.category===c).length);
  assert.equal(counts.filter(n=>n===3).length,25);assert.equal(counts.filter(n=>n===4).length,25);
  const seen=new Set();
  for(let seed=0;seed<100;seed++){
    const paper=selectNeetFullMock(pool,seed,true);
    assert.equal(paper.length,180);assert.equal(paper.filter(q=>q.challenge).length,50);
    assert.equal(new Set(paper.filter(q=>q.challenge).map(q=>q.category)).size,50);
    assert.deepEqual(['Physics','Chemistry','Biology'].map(s=>paper.filter(q=>q.subject===s).length),[45,45,90]);
    paper.forEach(q=>seen.add(q.id));assert.deepEqual(selectNeetFullMock(pool,seed),selectNeetFullMock(base,seed));
  }
  for(const q of extra){assert(seen.has(q.id),q.id);assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert(q.options.includes(q.answer));assert(q.explanation.length>120,q.id);}
});

test('independent multistep checks validate the added numerical answers',()=>{
  const a=(s,u)=>extra.find(q=>q.subject===s&&q.unit===u).answer;
  assert.equal(a('Physics',1),`${(0.1+0.1).toFixed(1)} cm and ${(0.1+0.1)/(10-9)*100}%`);
  assert.equal(a('Physics',3),`${12} N and ${(20-0.5*2*10)/2} m/s²`);
  assert.equal(a('Physics',5),'1/4 and 4');assert.equal((1/12+1/4)/(1/12),4);
  assert.equal(a('Physics',7),`${8*(0.5/4)} mm and 1/4`);
  assert.equal(a('Physics',9),'√5 and 1');assert.equal(20/4,5);
  assert.equal(a('Physics',15),'9 and 9/2');assert.equal(3**2/2,4.5);
  assert.equal(a('Physics',17),'1 and 1836');
  assert.equal(a('Physics',19),`${((5-0.7)/430*1000).toFixed(0)} mA and ${(0.7*0.01*1000).toFixed(0)} mW`);
  assert.equal(a('Chemistry',1),'Five and 36%');assert(Math.abs((2.5-1.6)/18/(1.6/160)-5)<1e-12);assert(Math.abs((2.5-1.6)/2.5*100-36)<1e-12);
  assert.equal(a('Chemistry',5),`${0.5*20+0.5*50} kPa and 5/7`);
  assert.equal(a('Chemistry',7),`${(0.635/63.5*2*108).toFixed(3)} g`);
  assert.equal(a('Chemistry',11),`${(0.01*6).toFixed(3)} mol Fe²⁺ and ${(0.01*14).toFixed(3)} mol H⁺`);
  assert.equal(a('Chemistry',13),`${3/8} and ${3/8*12} cm`);
  assert.equal(a('Chemistry',17),`${(0.04/2).toFixed(3)} mol alcohol and ${(0.04/2).toFixed(3)} mol benzoate`);
  assert.equal(a('Chemistry',19),'Sucrose; 0.020 mol');assert.equal(0.01*2,0.02);
  assert.equal(a('Biology',3),`${120*2/(4+2)} and ${120} units`);
  assert.equal(a('Biology',5),`${(125-124)*1440/1000} L/day and ${(124/125*100).toFixed(1)}%`);
  assert.equal(a('Biology',7),'1/2 and 1/4');assert.equal(0.5*0.5,0.25);
  assert.equal(a('Biology',9),'Linear: 1000, 3000, 2000 bp; circular: 3000, 3000 bp');assert.equal(1000+3000+2000,6000);assert.equal(4000-1000,6000-4000+1000);
});
