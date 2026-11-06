import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText,f);
const {selectNeetFullMock}=require('../app/lib/neet-full-mock.ts');
const read=n=>JSON.parse(fs.readFileSync(`app/data/${n}.json`,'utf8'));
const base=read('neet-full-mock'),extra=read('neet-challenge-batch7');
const harder=[...read('neet-challenge-mock'),...read('neet-challenge-expansion'),...read('neet-challenge-rotation'),...read('neet-challenge-batch4'),...read('neet-challenge-batch5'),...read('neet-challenge-batch6'),...extra],pool=[...base,...harder];

test('every unit has four reachable challenge choices with exact quotas and preserved foundation papers',()=>{
  assert.equal(extra.length,25);assert.equal(harder.length,200);assert.equal(pool.length,827);
  assert.equal(new Set(pool.map(q=>q.id)).size,827);assert.equal(new Set(pool.map(q=>q.question.trim().toLowerCase())).size,827);
  const categories=new Set(harder.map(q=>q.category));assert.equal(categories.size,50);
  for(const c of categories)assert.equal(harder.filter(q=>q.category===c).length,4,c);
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

test('independent numerical checks support new multistep keys',()=>{
  const a=(s,u)=>extra.find(q=>q.subject===s&&q.unit===u).answer;
  const time=Math.sqrt(2*20/10);
  assert.equal(a('Physics',2),`${15*time} m and ${Math.sqrt(15**2+(10*time)**2)} m/s`);
  assert.equal(a('Physics',4),`${Math.sqrt(200*0.2**2/2).toFixed(0)} m/s and ${(0.5*200*0.2**2/(0.1*2*10)).toFixed(0)} m`);
  assert.equal(a('Physics',8),`${900*(1-300/600)} J and ${Math.round(900*(1-400/600))} J`);
  assert.equal(a('Physics',10),'1.0 s and 2');assert.equal(Math.sqrt(2/(1/2)),2);
  assert.equal(a('Physics',12),`${10/5+10/10} A and zero`);
  assert.equal(a('Physics',14),`${100/Math.hypot(30,40)} A and ${(100/50)**2*30} W`);
  assert.equal(a('Physics',16),'45°; total internal reflection');assert(Math.abs(Math.asin(1/Math.sqrt(2))*180/Math.PI-45)<1e-12);
  assert.equal(a('Physics',18),'1/3 and 1/4');assert.equal(0.5**(6/2)/0.5**(6/6),1/4);
  const temp=(50*4*80+(50*4+100)*20)/(50*4+50*4+100);
  assert.equal(a('Physics',20),`${temp}°C and ${100*(temp-20)} J`);
  assert.equal(a('Chemistry',2),'Ten electrons and zero radial nodes');assert.equal(2*(2*2+1),10);assert.equal(3-2-1,0);
  assert.equal(a('Chemistry',4),`Approximately +${(10-2*8.314*300/1000).toFixed(2)} kJ`);
  assert.equal(a('Chemistry',6),`${(5+0.477).toFixed(2)}`);
  assert.equal(a('Chemistry',8),'Two and 0.20 L mol⁻¹ s⁻¹');assert(Math.abs(0.002/0.1**2-0.2)<1e-12);
  assert.equal(a('Chemistry',14),`${75-25}% and +${0.75*20-0.25*20}°`);
  assert.equal(a('Chemistry',20),`${((20.2-0.2)/1000*0.1/2/0.025).toFixed(4)} mol/L and ${(0.001*254).toFixed(3)} g`);
  assert.equal(a('Biology',8),`${(200-20)/200*100}%; less oxygen demand for biodegradation`);
  assert.equal(a('Biology',10),`${0.5*80*(1-80/160)} individuals/yr and zero`);
});
