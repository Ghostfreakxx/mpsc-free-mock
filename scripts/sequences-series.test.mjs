import fs from'node:fs';import assert from'node:assert/strict';import test from'node:test';import{createHash}from'node:crypto';
import{sequencesSeriesLesson as study}from'../app/jee/classes/sequences-series-study.ts';
import{sequenceBoards}from'../app/jee/classes/sequences-series-boards.ts';
const d=JSON.parse(fs.readFileSync('app/data/jee-sequences-series-lecture.json','utf8')),answer=i=>d.quiz[i].options[d.quiz[i].answer];
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,`${a} differs from ${b}`);
test('Unit 6 has ten substantive recorded chapters, eight examples and twenty questions with written parity',()=>{
 assert.equal(study.subject,'Mathematics');assert.equal(study.unit,6);assert.equal(d.chapters.length,10);assert.equal(study.sections.length,10);assert.equal(study.examples.length,8);assert.equal(d.quiz.length,20);assert.deepEqual(d.quiz,study.quiz);d.chapters.forEach((c,i)=>{assert.ok(c.script.split(/\s+/).length>=180);assert.equal(c.board.length,4);assert.deepEqual(sequenceBoards[i].lines,c.board);assert.equal(study.sections[i].paragraphs[0],c.script);});assert.match(study.remaining,/convergence conditions/);assert.match(study.remaining,/not exhaustive/);
});
test('AP terms, paired sums, term counts and partial-sum recovery agree with direct enumeration',()=>{
 const terms=Array.from({length:10},(_,i)=>2+3*i);assert.equal(terms[2],8);assert.equal(terms[7],23);assert.equal(terms[9],29);assert.equal(terms.reduce((s,v)=>s+v,0),155);assert.equal(answer(2),'3');assert.equal(answer(3),'29');assert.equal(answer(4),'155');assert.equal(Array.from({length:10},(_,i)=>2*i+1).reduce((s,v)=>s+v,0),100);assert.equal(answer(5),'100');assert.deepEqual(Array.from({length:30},(_,i)=>i+1).filter(n=>Array.from({length:n},(_,i)=>2+3*i).reduce((s,v)=>s+v,0)===155),[10]);
 const S=n=>3*n*n+2*n;let sum=0;for(let n=1;n<=10;n++){const a=6*n-1;assert.equal(S(n)-S(n-1),a);sum+=a;assert.equal(sum,S(n));}assert.equal(answer(0),'14');assert.equal(answer(1),'6n−1');
});
test('Inserted means use four transitions and enforce the positive GP branch',()=>{
 const ap=[2,6,10,14,18],gp=[2,6,18,54,162];for(let i=1;i<5;i++){assert.equal(ap[i]-ap[i-1],4);assert.equal(gp[i]/gp[i-1],3);}assert.equal(gp[4]/gp[0],3**4);assert.equal((-3)**4,81);assert.ok([2,-6,18,-54,162].some(v=>v<0));assert.equal(answer(6),'6,10,14');assert.equal(answer(7),'10');assert.equal(answer(12),'6,18,54');assert.equal(answer(13),'8');
});
test('Finite GP powers and sums handle negative ratios and the ratio-one case',()=>{
 const gp=[];let term=3;for(let i=0;i<6;i++){gp.push(term);term*=2;}assert.deepEqual(gp,[3,6,12,24,48,96]);assert.equal(gp.reduce((s,v)=>s+v,0),189);assert.equal(answer(8),'96');assert.equal(answer(10),'189');let negative=2;const alt=[];for(let i=0;i<4;i++){alt.push(negative);negative*=-3;}assert.deepEqual(alt,[2,-6,18,-54]);assert.equal(answer(9),'−54');assert.equal(Array(8).fill(7).reduce((s,v)=>s+v,0),56);assert.equal(answer(11),'56');
});
test('The AM-GM identity and reconstruction examples hold for their stated positive domain',()=>{
 for(const u of[.25,1,4,10,16])for(const v of[.25,1,4,10,16]){const A=(u+v)/2,G=Math.sqrt(u*v);assert.ok(A+1e-12>=G);near(A*A-G*G,(u-v)**2/4);if(u===v)near(A,G);}assert.equal((4+16)/2,10);assert.equal(Math.sqrt(4*16),8);assert.equal(answer(14),'4 and 16');assert.equal(answer(15),'u=v');
});
test('AM-GM bounds have attainable equality cases under the original restrictions',()=>{
 for(const u of[.5,2,5,10,15,19.5]){const v=20-u;assert.ok(u>0&&v>0);assert.ok(u*v<=100);}assert.equal(10*10,100);for(const x of[.1,1,2,3,6,30])assert.ok(x+9/x>=6-1e-12);assert.equal(3+9/3,6);assert.equal(answer(16),'100');assert.equal(answer(17),'6');
});
test('Positive and alternating convergent GPs approach their stated sums while ratio minus one oscillates',()=>{
 const partial=(r,n)=>Array.from({length:n},(_,k)=>3*r**k).reduce((s,v)=>s+v,0);near(partial(.5,50),6);near(partial(-.5,50),2);assert.deepEqual([1,2,3,4].map(n=>partial(-1,n)),[3,0,3,0]);assert.equal(answer(18),'6');assert.equal(answer(19),'2');assert.match(d.chapters[9].formula,/\|r\|<1/);assert.match(d.chapters[9].script,/all zero sequence is a separate trivial exception/);
});
test('Narration fingerprints, contiguous timings and complete readable captions validate every chapter',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/jee-sequences-series-timings.json','utf8'));assert.equal(t.chapters.length,10);assert.ok(t.duration>600);assert.ok(fs.readFileSync('public/lectures/sequences-series/english.vtt','utf8').startsWith('WEBVTT'));d.chapters.forEach((c,i)=>{const stem=`public/lectures/sequences-series/chapter-${String(i+1).padStart(2,'0')}`,hash=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);assert.ok(fs.statSync(stem+'.mp3').size>50000);const cues=t.cues.filter(q=>q.chapter===i);assert.ok(cues.length>1);assert.equal(cues.map(q=>q.text).join(' '),c.script);cues.forEach(q=>{assert.ok(q.text.length<=140);assert.ok(q.end>q.start);});assert.ok(t.chapters[i].end>t.chapters[i].start);assert.ok(Math.abs(t.chapters[i].start-(i?t.chapters[i-1].end:0))<.001);});
});
