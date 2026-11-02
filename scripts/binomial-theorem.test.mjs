import fs from'node:fs';import assert from'node:assert/strict';import test from'node:test';import{createHash}from'node:crypto';
import{binomialTheoremLesson as study}from'../app/jee/classes/binomial-theorem-study.ts';
import{binomialBoards}from'../app/jee/classes/binomial-theorem-boards.ts';
const d=JSON.parse(fs.readFileSync('app/data/jee-binomial-theorem-lecture.json','utf8'));
const answer=i=>d.quiz[i].options[d.quiz[i].answer];
function multiply(a,b){const out=Array(a.length+b.length-1).fill(0);a.forEach((v,i)=>b.forEach((w,j)=>out[i+j]+=v*w));return out;}
function power(a,n){let out=[1];for(let i=0;i<n;i++)out=multiply(out,a);return out;}
function laurent(n){let out=new Map([[0,1]]);for(let i=0;i<n;i++){const next=new Map();for(const[k,v]of out)for(const shift of[2,-1])next.set(k+shift,(next.get(k+shift)??0)+v);out=next;}return out;}
test('Unit 5 has ten narrated chapters, eight examples and twenty questions with written parity',()=>{
 assert.equal(study.subject,'Mathematics');assert.equal(study.unit,5);assert.equal(d.chapters.length,10);assert.equal(study.sections.length,10);assert.equal(study.examples.length,8);assert.equal(d.quiz.length,20);assert.deepEqual(d.quiz,study.quiz);
 d.chapters.forEach((c,i)=>{assert.ok(c.script.split(/\s+/).length>=180);assert.equal(c.board.length,4);assert.deepEqual(binomialBoards[i].lines,c.board);assert.equal(study.sections[i].paragraphs[0],c.script);});assert.match(study.remaining,/positive integral indices/);assert.match(study.remaining,/not exhaustive/);
});
test('Repeated polynomial multiplication independently checks coefficients and negative bases',()=>{
 assert.deepEqual(power([1,1],4),[1,4,6,4,1]);assert.equal(power([1,1],7).length,8);const coefficients=power([-3,2],5);assert.equal(coefficients[3],720);assert.equal(coefficients[4],-240);assert.equal(answer(1),'6');assert.equal(answer(2),'Third term');assert.equal(answer(3),'720');
});
test('Laurent multiplication confirms constant terms and invalid noninteger indices',()=>{
 assert.equal(laurent(6).get(0),15);assert.equal(laurent(6).get(3),20);assert.equal(laurent(5).has(0),false);assert.equal(answer(4),'15');assert.equal(answer(5),'No constant term');assert.match(d.chapters[2].formula,/x≠0/);
});
test('Middle term positions and complete weighted terms use the correct indices',()=>{
 const even=power([1,1],8),odd=power([1,2],7);assert.equal(even.length,9);assert.equal(even[4],70);assert.equal(odd.length,8);assert.equal(odd[3],280);assert.equal(odd[4],560);assert.equal(answer(6),'5');assert.equal(answer(7),'280x³ and 560x⁴');
});
test('Ordinary, alternating, parity and weighted coefficient sums agree with computed rows',()=>{
 const six=power([1,1],6),five=power([1,1],5);assert.equal(six.reduce((s,v)=>s+v,0),64);assert.equal(six.filter((_,r)=>r%2===0).reduce((s,v)=>s+v,0),32);assert.equal(five.reduce((s,v,r)=>s+r*v,0),80);assert.equal(five.reduce((s,v,r)=>s+r*(r-1)*v,0),160);assert.equal(five.reduce((s,v,r)=>s+r*r*v,0),240);const signed=power([2,-3],4);assert.equal(signed.reduce((s,v)=>s+v,0),1);assert.equal(signed.reduce((s,v,r)=>s+(-1)**r*v,0),625);assert.equal(answer(8),'64');assert.equal(answer(9),'32');assert.equal(answer(10),'80');assert.equal(answer(11),'240');
});
test('Greatest numerical terms and product coefficients are independently enumerated',()=>{
 const row=power([1,1],5),terms=row.map((v,r)=>v*2**r);assert.equal(Math.max(...row),10);assert.deepEqual(terms,[1,10,40,80,80,32]);assert.deepEqual(terms.flatMap((v,i)=>v===Math.max(...terms)?[i+1]:[]),[4,5]);assert.equal(multiply(power([1,1],4),power([1,1],5))[3],84);assert.equal(multiply(power([1,2],3),power([1,-1],2))[2],1);assert.equal(answer(12),'10');assert.equal(answer(13),'T₄ and T₅, each 80');assert.equal(answer(14),'84');assert.equal(answer(15),'1');
});
test('Integer and sign restrictions, finite approximation bounds and remainders are valid',()=>{
 assert.deepEqual(Array.from({length:20},(_,i)=>i+1).filter(n=>power([1,1],n)[2]===45),[10]);assert.equal(answer(16),'n=10');for(const a of[-2,2])assert.equal(power([1,a],4)[2],24);assert.equal(answer(17),'a=±2');assert.equal(1+5*.02,1.1);assert.ok(Math.abs(1.02**5-1.1040808032)<1e-12);const bound=10*.02**3+5*.02**4+.02**5;assert.ok(Math.abs(bound-.0000808032)<1e-14);for(const t of[0,.005,.01,.015,.02]){const remainder=10*t**3+5*t**4+t**5;assert.ok(remainder>=0&&remainder<=bound+1e-15);}assert.equal(5**5%16,5);assert.equal(answer(18),'1.10');assert.equal(answer(19),'5');
});
test('Audio provenance, chapter boundaries and complete readable captions validate the recording',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/jee-binomial-theorem-timings.json','utf8'));assert.equal(t.chapters.length,10);assert.ok(t.duration>600);assert.ok(fs.readFileSync('public/lectures/binomial-theorem/english.vtt','utf8').startsWith('WEBVTT'));
 d.chapters.forEach((c,i)=>{const stem=`public/lectures/binomial-theorem/chapter-${String(i+1).padStart(2,'0')}`,hash=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);assert.ok(fs.statSync(stem+'.mp3').size>50000);const cues=t.cues.filter(q=>q.chapter===i);assert.ok(cues.length>1);assert.equal(cues.map(q=>q.text).join(' '),c.script);cues.forEach(q=>{assert.ok(q.text.length<=140);assert.ok(q.end>q.start);});assert.ok(t.chapters[i].end>t.chapters[i].start);assert.ok(Math.abs(t.chapters[i].start-(i?t.chapters[i-1].end:0))<.001);});
});
