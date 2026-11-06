import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText,f);
const {selectNeetFullMock}=require('../app/lib/neet-full-mock.ts');
const read=n=>JSON.parse(fs.readFileSync(`app/data/${n}.json`,'utf8'));
const base=read('neet-full-mock'), extra=read('neet-challenge-batch4');
const harder=[...read('neet-challenge-mock'),...read('neet-challenge-expansion'),...read('neet-challenge-rotation'),...extra],pool=[...base,...harder];

test('expanded papers retain subject quotas, all units and unchanged foundation selection',()=>{
  assert.equal(extra.length,25);assert.equal(harder.length,125);assert.equal(pool.length,752);
  assert.equal(new Set(pool.map(q=>q.id)).size,752);assert.equal(new Set(pool.map(q=>q.question.trim().toLowerCase())).size,752);
  const counts=[...new Set(harder.map(q=>q.category))].map(c=>harder.filter(q=>q.category===c).length);
  assert.equal(counts.filter(n=>n===2).length,25);assert.equal(counts.filter(n=>n===3).length,25);
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

test('independent calculation checks support the new multistep answer keys',()=>{
  const a=(s,u)=>extra.find(q=>q.subject===s&&q.unit===u).answer;
  assert.equal(a('Physics',1),`${1+2*0.5}% and ${(9.8*0.02).toFixed(3)} m/s²`);
  assert.equal(a('Physics',2),`${100/8+100/4} s and 16/3 m/s`);assert(Math.abs(200/37.5-16/3)<1e-12);
  assert.equal(a('Physics',3),`${(30-0.2*5*10)/5} m/s² and ${2*4+0.2*2*10} N`);
  assert.equal(a('Physics',4),`${2*3+3**2} J and √15 m/s`);
  assert.equal(a('Physics',5),`${6/2*4} rad/s and ${0.5*6/2*4**2} rad`);
  assert.equal(a('Physics',8),`${(3e5-1e5)*(3-1)*1e-3} J and 400 J`);
  assert.equal(a('Physics',9),`${4} and ${Math.sqrt(4)}`);
  assert.equal(a('Physics',10),`${50*Math.sqrt(4)/2} Hz and ${Math.sqrt(4)}`);
  assert.equal(a('Chemistry',1),`${(0.6/3*2).toFixed(2)} mol NH₃ and ${(0.25-0.6/3).toFixed(2)} mol N₂`);
  assert.equal(a('Chemistry',2),`${2**2}a₀ and −${13.6/2**2} eV`);
  assert.equal(a('Chemistry',4),`+${-2*(50-80)} kJ`);
  assert.equal(a('Chemistry',5),`${(6/600*0.08314*300).toFixed(4)} and ${(6/600/2*0.08314*300).toFixed(4)} bar`);
  assert.equal(Math.sqrt(1e-10),1e-5);assert.equal(1e-10/0.01,1e-8);
  assert.equal(a('Chemistry',7),`+${-2*96500*(-0.1)/1000} kJ/mol; no`);
  assert.equal(a('Chemistry',8),'1/8 and 15 min');assert.equal(0.5**(45/15),1/8);
  assert.equal(a('Biology',3),'6 chromosomes, 12 chromatids, 4C');
});
