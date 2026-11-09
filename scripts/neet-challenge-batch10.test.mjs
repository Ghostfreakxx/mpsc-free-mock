import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText,f);
const {selectNeetFullMock}=require('../app/lib/neet-full-mock.ts');
const read=n=>JSON.parse(fs.readFileSync(`app/data/${n}.json`,'utf8'));
const base=read('neet-full-mock'),extra=read('neet-challenge-batch10');
const harder=['neet-challenge-mock','neet-challenge-expansion','neet-challenge-rotation',...Array.from({length:7},(_,i)=>`neet-challenge-batch${i+4}`)].flatMap(read),pool=[...base,...harder];
test('all 50 units remain represented and the 25 expanded units gain a sixth reachable choice',()=>{
  assert.equal(extra.length,25);assert.equal(harder.length,275);assert.equal(pool.length,902);
  assert.equal(new Set(pool.map(q=>q.id)).size,902);assert.equal(new Set(pool.map(q=>q.question.trim().toLowerCase())).size,902);
  const categories=new Set(harder.map(q=>q.category));assert.equal(categories.size,50);
  for(const c of categories){const n=harder.filter(q=>q.category===c).length;assert([5,6].includes(n),`${c}: ${n}`);}
  for(const q of extra){assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert(q.options.includes(q.answer));assert(q.explanation.length>120,q.id);assert(q.challenge);}
  const seen=new Set();
  for(let seed=0;seed<100;seed++){
    const paper=selectNeetFullMock(pool,seed,true);
    assert.equal(paper.length,180);assert.equal(paper.filter(q=>q.challenge).length,50);
    assert.equal(new Set(paper.filter(q=>q.challenge).map(q=>q.category)).size,50);
    assert.deepEqual(['Physics','Chemistry','Biology'].map(s=>paper.filter(q=>q.subject===s).length),[45,45,90]);
    paper.forEach(q=>seen.add(q.id));assert.deepEqual(selectNeetFullMock(pool,seed),selectNeetFullMock(base,seed));
  }
  for(const q of harder)assert(seen.has(q.id),q.id);
});
test('independent calculations validate added keys',()=>{
  const a=(s,u)=>extra.find(q=>q.subject===s&&q.unit===u).answer;
  assert.equal(a('Physics',1),'u cos θ and u² cos² θ/g');
  assert.equal(a('Physics',2),'v/2 and 8T');
  assert.equal(a('Physics',3),'2⁻²ᐟ³ and 2⁻⁵ᐟ³');
  assert.equal(a('Physics',6),'u = 3f/2 and v = 3f');
  assert.equal(a('Physics',7),'Kmax increases by 2 eV; photon flux becomes 5/7 of its former value');
  assert.equal(a('Physics',8),'24 days');
  assert.equal(a('Physics',9),'4.3 mA and 3.01 mW');
  assert.equal(a('Physics',10),'R/16');
  assert.equal(a('Chemistry',1),'10.2 eV');
  assert.equal(a('Chemistry',3),'1/√5');assert(Math.abs(Math.sqrt(1/5)-0.4472135955)<1e-9);
  assert.equal(a('Chemistry',5),'36 kPa');assert.equal(a('Chemistry',6),'−0.059 V');
  assert.equal(a('Chemistry',7),'53.6 kJ mol⁻¹');
  assert.equal(a('Chemistry',8),'Geometrical cis–trans; octahedral');
  assert.equal(a('Chemistry',10),'4.00 mol L⁻¹');
  assert.equal(a('Biology',1),'16 chromosomes and 32 chromatids');
  assert.equal(a('Biology',3),'100');assert.equal(a('Biology',4),'1/2');assert.equal(a('Biology',5),'20 kJ');
});
