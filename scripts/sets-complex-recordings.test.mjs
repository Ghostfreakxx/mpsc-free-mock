import fs from 'node:fs';import assert from 'node:assert/strict';import test from 'node:test';import{createHash}from'node:crypto';
import{studyLessons}from'../app/jee/classes/study-lessons.ts';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`,'utf8'));
const sets=read('sets-and-functions'),complex=read('quadratic-equations');
const answer=(d,i)=>d.quiz[i].options[d.quiz[i].answer];
for(const[id,sectionCount]of[['sets-and-functions',12],['quadratic-equations',11]]){
 test(`${id}: complete recorded/written parity and preserved original question keys`,()=>{
  const d=read(id),l=studyLessons.find(l=>l.id===id);assert.equal(d.chapters.length,10);assert.equal(l.sections.length,sectionCount);assert.equal(l.examples.length,9);assert.equal(d.quiz.length,21);assert.deepEqual(d.quiz,l.quiz);
  assert.deepEqual(d.quiz.slice(0,5).map(q=>q.answer),id==='sets-and-functions'?[2,0,2,1,0]:[1,1,2,1,2]);
  d.chapters.forEach(c=>{assert.ok(c.script.split(/\s+/).length>=180);assert.equal(c.board.length,4);});assert.match(l.remaining,/timed practice/);
 });
 test(`${id}: narration fingerprints, contiguous timing and readable captions`,()=>{
  const d=read(id),t=JSON.parse(fs.readFileSync(`app/data/jee-${id}-timings.json`,'utf8'));assert.equal(t.chapters.length,10);assert.ok(t.duration>600);assert.ok(fs.readFileSync(`public/lectures/${id}/english.vtt`,'utf8').startsWith('WEBVTT'));
  d.chapters.forEach((c,i)=>{const stem=`public/lectures/${id}/chapter-${String(i+1).padStart(2,'0')}`,hash=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);assert.ok(fs.statSync(stem+'.mp3').size>50000);const cues=t.cues.filter(q=>q.chapter===i);assert.ok(cues.length>1);assert.equal(cues.map(q=>q.text).join(' '),c.script);cues.forEach(q=>{assert.ok(q.text.length<=140);assert.ok(q.end>q.start);});assert.ok(t.chapters[i].end>t.chapters[i].start);assert.ok(Math.abs(t.chapters[i].start-(i?t.chapters[i-1].end:0))<.001);});
 });
}
test('Set algebra, inclusion-exclusion and finite-map counts agree with enumerations',()=>{
 const u=[1,2,3,4,5,6],a=[1,2,3],b=[3,4],difference=a.filter(x=>!b.includes(x));assert.deepEqual(difference,[1,2]);assert.deepEqual(u.filter(x=>![...a,...b].includes(x)),u.filter(x=>!a.includes(x)&&!b.includes(x)));assert.equal(answer(sets,5),String(2**4-1));assert.equal(40-(24+19-8),5);assert.equal(answer(sets,8),'5');assert.equal(20+18+15-8-7-6+3,35);assert.equal(answer(sets,9),'35');
 const maps=Array.from({length:8},(_,i)=>[i&1,(i>>1)&1,(i>>2)&1]);assert.equal(maps.filter(m=>new Set(m).size===2).length,6);assert.equal(answer(sets,16),'6');assert.equal(answer(sets,17),'6');
});
test('Equivalence modulo three passes quantified checks and classes form a partition',()=>{
 const values=Array.from({length:13},(_,i)=>i-6),related=(a,b)=>(a-b)%3===0;
 for(const a of values){assert.ok(related(a,a));for(const b of values){assert.equal(related(a,b),related(b,a));for(const c of values)if(related(a,b)&&related(b,c))assert.ok(related(a,c));}}
 assert.ok(related(-1,2));assert.equal(answer(sets,12),'−1 and 2');assert.equal(answer(sets,11),'Reflexive, symmetric and transitive');
});
test('Function classification, composition and inverse examples respect domains',()=>{
 const f=x=>2*x+1,g=x=>x*x;for(const x of [-2,0,3])assert.equal(f(g(x)),2*x*x+1);assert.notEqual(f(g(2)),g(f(2)));assert.equal(answer(sets,18),'2x²+1');
 for(const x of [0,2,5])assert.equal(Math.sqrt((x*x-4)+4),x);for(const y of [-4,0,5])assert.equal(Math.sqrt(y+4)**2-4,y);assert.equal(answer(sets,20),'√(y+4)');assert.equal(answer(sets,13),'[1,3)∪(3,∞)');assert.equal(answer(sets,19),'[0,1)∪(1,∞)');
});
const mul=([a,b],[c,d])=>[a*c-b*d,a*d+b*c];
test('Complex algebra, conjugate division and nonreal roots are independently correct',()=>{
 assert.deepEqual(mul([2,3],[1,-1]),[5,1]);assert.deepEqual(mul([-1,2],[1,-2]),[3,4]);assert.equal(answer(complex,6),'−1+2i');assert.deepEqual(mul([2,1],[2,1]),[3,4]);assert.equal(answer(complex,12),'±(2+i)');
 for(const z of [[1,2],[1,-2]]){const square=mul(z,z);assert.deepEqual([square[0]-2*z[0]+5,square[1]-2*z[1]],[0,0]);}assert.equal(answer(complex,11),'1±2i');
 let power=[1,0];for(let i=0;i<23;i++)power=mul(power,[0,1]);assert.equal(Math.abs(power[0]),0);assert.equal(power[1],-1);assert.equal(answer(complex,5),'−i');
});
test('Argand distance and argument checks include quadrant and zero exceptions',()=>{
 assert.equal(Math.hypot(3,4),5);assert.ok(Math.abs(Math.atan2(1,-1)-3*Math.PI/4)<1e-12);assert.equal(answer(complex,8),'3π/4');assert.equal(answer(complex,10),'Undefined');for(const theta of [0,Math.PI/2,Math.PI])assert.ok(Math.abs(Math.hypot(2+3*Math.cos(theta)-2,3*Math.sin(theta))-3)<1e-12);
});
test('Quadratic parameter, transformed-root and strict-boundary examples match direct substitution',()=>{
 for(const k of [-3,-1,0,1,2,4]){const d=4*k*k-4*(k+2);assert.equal(d>=0,k<=-1||k>=2);}assert.equal(answer(complex,13),'k≤−1 or k≥2');assert.equal((5/2)**2-2,17/4);assert.equal(answer(complex,14),'17/4');
 for(const x of [3,4])assert.equal(x*x-7*x+12,0);for(const x of [.5,1/3])assert.ok(Math.abs(6*x*x-5*x+1)<1e-12);assert.equal(2*(-.5)+1,0);assert.equal(answer(complex,16),'6x²−5x+1=0');assert.equal(answer(complex,17),'x=−1/2');
 for(const k of [4,5,5.5,8,9,10]){const d=36-4*k,valid=d>=0&&(6-Math.sqrt(d))/2>1&&(6+Math.sqrt(d))/2>1;assert.equal(valid,k>5&&k<=9);}assert.equal(answer(complex,18),'k=3');assert.equal(answer(complex,19),'5<k≤9');assert.equal(answer(complex,20),'[2,3]');
});
