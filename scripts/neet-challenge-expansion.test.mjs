import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
require.extensions['.ts'] = (m,f) => m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'), { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText,f);
const {selectNeetFullMock} = require('../app/lib/neet-full-mock.ts');
const read = name => JSON.parse(fs.readFileSync(`app/data/${name}.json`,'utf8'));
const extra=read('neet-challenge-expansion'), first=read('neet-challenge-mock'), base=read('neet-full-mock');
const pool=[...base,...first,...extra];

test('all additional questions enter balanced challenge papers while foundation papers remain unchanged',()=>{
  assert.equal(extra.length,25); assert.equal(pool.length,702);
  assert.equal(new Set(pool.map(q=>q.id)).size,pool.length);
  assert.equal(new Set(pool.map(q=>q.question.trim().toLowerCase())).size,pool.length);
  const seen=new Set();
  for(let seed=0;seed<100;seed++){
    const paper=selectNeetFullMock(pool,seed,true);
    assert.equal(paper.length,180); assert.equal(paper.filter(q=>q.challenge).length,50);
    assert.equal(new Set(paper.filter(q=>q.challenge).map(q=>q.category)).size,50);
    assert.deepEqual(['Physics','Chemistry','Biology'].map(s=>paper.filter(q=>q.subject===s).length),[45,45,90]);
    paper.forEach(q=>seen.add(q.id));
    assert.deepEqual(selectNeetFullMock(pool,seed),selectNeetFullMock(base,seed));
  }
  extra.forEach(q=>{assert(seen.has(q.id),q.id);assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert(q.options.includes(q.answer));assert(q.explanation.length>120,q.id);});
});

test('independent numerical checks support new multistep keys',()=>{
  const a=(s,u)=>extra.find(q=>q.subject===s&&q.unit===u).answer;
  assert.equal(a('Physics',3),`${60*(10+2)} N and ${60*2} N upward`);
  assert.equal(a('Physics',4),`${2*6/3} m/s and ${0.5*2*36-0.5*3*16} J`);
  assert.equal(a('Physics',5),`${4*3/2} rad/s and ${0.5*2*36-0.5*4*9} J`);
  assert.equal(a('Physics',7),`${(0.05*800*10*0.0002/2).toFixed(3)} N/m and ${5/2} cm`);
  assert.equal(a('Physics',8),`${(800-500)/800*100}% and ${600/(800-500)}`);
  assert.equal(a('Physics',10),`${256-252} Hz and ${1/(256-252)} s`);
  assert.equal(a('Physics',11),`${120*2} V and ${(3e-6*120**2).toFixed(4)} J`);
  assert.equal(a('Chemistry',1),`${1.76/44*100/10*100}% and ${(1.76/44*2).toFixed(3)} mol`);
  assert.equal(a('Chemistry',2),`${(13.6*4*(1-1/4)).toFixed(1)} eV; four times hydrogen`);
  assert.equal(a('Chemistry',5),`${(1.86*0.1).toFixed(3)} K and ${(3*1.86*0.1).toFixed(3)} K`);
  assert.equal(a('Chemistry',7),`${(1.93*1000/96500/2*63.5).toFixed(3)} g and ${(1.93*1000/96500).toFixed(3)} mol`);
  assert.equal(a('Chemistry',8),`${0.08/(2*0.002)} min and ${0.08/0.002} min`);
  assert.equal(a('Chemistry',20),`${((20.3-0.3)*0.1/2/10).toFixed(3)} mol/L`);
  assert.equal(a('Biology',3),'10 then 20'); assert.equal(a('Biology',6),'12, 24 and 36');
  assert(Math.abs(2*0.6*0.4/(1-0.16)-4/7)<1e-12);
  assert.equal(a('Biology',7),'4/7');
  assert.equal(a('Biology',9),`${3*2**5/2} per tube; ordinary PCR amplification cannot proceed`);
  assert.equal(a('Biology',10),`${20000*0.1**2 | 0} and 10,000 kJ m⁻² yr⁻¹`);
});
