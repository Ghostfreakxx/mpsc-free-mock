import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText,f);
const {selectNeetFullMock}=require('../app/lib/neet-full-mock.ts');
const read=n=>JSON.parse(fs.readFileSync(`app/data/${n}.json`,'utf8'));
const base=read('neet-full-mock'),extra=read('neet-challenge-batch9');
const harder=['neet-challenge-mock','neet-challenge-expansion','neet-challenge-rotation',...Array.from({length:6},(_,i)=>`neet-challenge-batch${i+4}`)].flatMap(read),pool=[...base,...harder];
test('all units have five reachable challenge choices and foundation selection remains unchanged',()=>{
  assert.equal(extra.length,25);assert.equal(harder.length,250);assert.equal(pool.length,877);
  assert.equal(new Set(pool.map(q=>q.id)).size,877);assert.equal(new Set(pool.map(q=>q.question.trim().toLowerCase())).size,877);
  const categories=new Set(harder.map(q=>q.category));assert.equal(categories.size,50);
  for(const c of categories)assert.equal(harder.filter(q=>q.category===c).length,5,c);
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
test('independent calculations validate added numerical and conditional keys',()=>{
  const a=(s,u)=>extra.find(q=>q.subject===s&&q.unit===u).answer;
  assert.equal(a('Physics',11),`${2*3/(2+3)*10} μC and ${12/2} V`);
  assert.equal(a('Physics',12),`${10*2/(1/2)} Ω and ${20**2/40} W`);
  assert.equal(a('Physics',14),`${(0.2*0.5*4).toFixed(2)} V and ${((0.2*0.5*4)**2/2).toFixed(3)} W`);
  assert.equal(a('Physics',16),'√3 and 60°');assert(Math.abs(Math.sin(Math.PI/3)/Math.sin(Math.PI/6)-Math.sqrt(3))<1e-12);
  assert.equal(a('Physics',17),`${(4.14e-15*5e14).toFixed(2)} eV and ${(4.14e-15*(8e14-5e14)).toFixed(2)} V`);
  assert.equal(a('Physics',18),`${238-2*4} and ${92-2*2+1}`);
  assert.equal(a('Physics',19),`${0.5*10/100*1000} mA and ${(0.5*(10/100)**2*100).toFixed(2)} W`);
  assert.equal(a('Physics',20),`${15/10} and ${6-6/(15/10)} cm`);
  assert.equal(a('Chemistry',12),'Zero charge, +2, six');assert.equal(2-2,0);
  assert.equal(a('Chemistry',17),'Secondary alcohol with nine carbons');assert.equal(7+2,9);
  assert.equal(a('Chemistry',20),`${((10.2-0.2)/1000*0.02*2.5/0.025).toFixed(4)} mol/L and ${((10.2-0.2)/1000*0.02*2.5*2).toFixed(5)} mol`);
  assert.equal(a('Biology',6),'Four, eight and eight');assert.equal(4*2,8);assert.equal(16/2,8);
  assert.equal(a('Biology',7),'Zero and 1/3');assert.equal(0.25/(1-0.25),1/3);
  assert.equal(a('Biology',10),'Richness is equal; A has greater evenness');
  assert(40**2+40**2+20**2<90**2+5**2+5**2);
});
