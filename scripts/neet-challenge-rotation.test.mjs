import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText,f);
const {selectNeetFullMock}=require('../app/lib/neet-full-mock.ts');
const read=n=>JSON.parse(fs.readFileSync(`app/data/${n}.json`,'utf8'));
const base=read('neet-full-mock'), first=read('neet-challenge-mock'), second=read('neet-challenge-expansion'), extra=read('neet-challenge-rotation');
const harder=[...first,...second,...extra], pool=[...base,...harder];

test('every unit has two reachable challenge choices and foundation selection is unchanged',()=>{
  assert.equal(extra.length,25);assert.equal(harder.length,100);assert.equal(pool.length,727);
  assert.equal(new Set(pool.map(q=>q.id)).size,727);
  assert.equal(new Set(pool.map(q=>q.question.toLowerCase().trim())).size,727);
  const categories=new Set(harder.map(q=>q.category));assert.equal(categories.size,50);
  for(const category of categories)assert.equal(harder.filter(q=>q.category===category).length,2,category);
  const seen=new Set();
  for(let seed=0;seed<100;seed++){
    const paper=selectNeetFullMock(pool,seed,true);
    assert.equal(paper.length,180);assert.equal(paper.filter(q=>q.challenge).length,50);
    assert.equal(new Set(paper.filter(q=>q.challenge).map(q=>q.category)).size,50);
    assert.deepEqual(['Physics','Chemistry','Biology'].map(s=>paper.filter(q=>q.subject===s).length),[45,45,90]);
    paper.forEach(q=>seen.add(q.id));
    assert.deepEqual(selectNeetFullMock(pool,seed),selectNeetFullMock(base,seed));
  }
  for(const q of harder)assert(seen.has(q.id),q.id);
  for(const q of extra){assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert(q.options.includes(q.answer));assert(q.explanation.length>120,q.id);}
});

test('independent calculations validate uncertainty, fields, spectra, electronics and electron counts',()=>{
  const a=(s,u)=>extra.find(q=>q.subject===s&&q.unit===u).answer;
  assert.equal(a('Physics',1),`${20*10} cm² ± ${200*(0.2/20+0.1/10)} cm²`);
  assert.equal(a('Physics',9),`${Math.sqrt(4)} and ${4}`);
  assert(Math.abs(2e-7*3*4/0.1-2.4e-5)<1e-15);assert.equal(a('Physics',13),'2.4 × 10⁻⁵ N/m; attractive');
  assert.equal(a('Physics',14),`${120/30} A and ${120/30*50} V`);
  assert.equal(a('Physics',15),`${3e8*2e-6} V/m; intensity becomes one quarter`);
  assert.equal(a('Physics',16),`${(600e-9*2/0.0005*1000).toFixed(1)} mm and ${(3*600e-9*2/0.0005*1000).toFixed(1)} mm`);
  const energy=13.6*(1/4-1/9);assert.equal(a('Physics',18),`${energy.toFixed(2)} eV and ${Math.round(1240/energy)} nm`);
  assert.equal(a('Physics',19),'5 mA and 0 V');assert.equal(5/1000*1000,5);
  assert.equal(a('Physics',20),`${4*60/40} Ω and ${100*4/(4+6)} cm`);
  assert.equal(7+8-1,14);assert.equal(a('Chemistry',3),'14 electrons; bond order 3; diamagnetic');
  assert.equal(a('Chemistry',11),`Mn²⁺: ${Math.sqrt(5*7).toFixed(2)}; Zn²⁺: 0`);
  assert.equal(a('Chemistry',14),'Four stereoisomers and two pairs');assert.equal(2**2,4);
  assert.equal(a('Chemistry',19),'Four water molecules and five α-amino groups');assert.equal(5-1,4);
});
