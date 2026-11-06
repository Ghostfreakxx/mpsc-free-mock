import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText,f);
const {selectNeetFullMock}=require('../app/lib/neet-full-mock.ts');
const read=n=>JSON.parse(fs.readFileSync(`app/data/${n}.json`,'utf8'));
const base=read('neet-full-mock'),extra=read('neet-challenge-batch8');
const harder=['neet-challenge-mock','neet-challenge-expansion','neet-challenge-rotation',...Array.from({length:5},(_,i)=>`neet-challenge-batch${i+4}`)].flatMap(read),pool=[...base,...harder];

test('new questions rotate in balanced full papers without changing foundation papers',()=>{
  assert.equal(extra.length,25);assert.equal(harder.length,225);assert.equal(pool.length,852);
  assert.equal(new Set(pool.map(q=>q.id)).size,852);assert.equal(new Set(pool.map(q=>q.question.trim().toLowerCase())).size,852);
  const counts=[...new Set(harder.map(q=>q.category))].map(c=>harder.filter(q=>q.category===c).length);
  assert.equal(counts.filter(n=>n===4).length,25);assert.equal(counts.filter(n=>n===5).length,25);
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

test('independent calculations support the new multistep keys',()=>{
  const a=(s,u)=>extra.find(q=>q.subject===s&&q.unit===u).answer;
  assert.equal(a('Physics',1),`${10**2/5} W and ${(20*(2*0.01+0.02)).toFixed(1)} W`);
  const x=t=>t**3-6*t**2+9*t;assert.equal(a('Physics',2),`${Math.abs(x(1)-x(0))+Math.abs(x(3)-x(1))} m and zero`);
  const v=0.01*100/(0.01+0.99);assert.equal(a('Physics',4),`${v*v/(2*10)*100} cm and ${0.5*1*v*v/(0.5*0.01*100**2)*100}%`);
  const inertia=3*2**2/12+3*0.5**2;assert.equal(a('Physics',5),`${inertia} kg m² and ${3.5/inertia} rad/s²`);
  assert.equal(a('Physics',6),'g/4 and g/2');
  assert.equal(a('Physics',7),`${Math.sqrt(2*10*5)} m/s and ${Math.sqrt(2*10*5)*Math.sqrt(2*20/10)} m`);
  assert.equal(a('Physics',8),`${500-300} J and ${300+100} J`);
  assert.equal(a('Physics',10),'T/12 and 3/4');assert(Math.abs(Math.asin(0.5)/(2*Math.PI)-1/12)<1e-12);
  assert.equal(a('Chemistry',1),'CH₂O and C₆H₁₂O₆');assert.equal(180/(12+2+16),6);
  assert.equal(a('Chemistry',4),`${0.02*60000/(100*4)}.0 K and −1.20 kJ`);
  const i=0.372/(1.86*(2/50/0.1));assert(Math.abs(i-0.5)<1e-12);assert(Math.abs(2*(1-i)-1)<1e-12);assert.equal(a('Chemistry',5),'0.5 and 100%');
  assert.equal(a('Chemistry',6),'10⁻⁹ and 5');assert.equal(-Math.log10(Math.sqrt(1e-9*0.1)),5);
  assert.equal(a('Chemistry',7),`${1000*0.001/0.1} and ${1000*0.0002/0.01} S cm²/mol`);
  assert.equal(a('Chemistry',8),`${(8.314*0.693/(1/300-1/310)/1000).toFixed(1)} kJ/mol`);
  assert.equal(a('Biology',3),`${50*5/(5+5)} units; no`);
  assert.equal(a('Biology',4),`${6*3-12} ATP; cyclic photophosphorylation`);
  assert.equal(a('Biology',5),`${0.95*20} mL/100 mL and ${Math.round((0.95-0.75)*20*5000/100)} mL/min`);
});
