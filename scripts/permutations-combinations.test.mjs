import fs from'node:fs';import assert from'node:assert/strict';import test from'node:test';import{createHash}from'node:crypto';
import{permutationsCombinationsLesson as study}from'../app/jee/classes/permutations-combinations-study.ts';
import{countingBoards}from'../app/jee/classes/permutations-combinations-boards.ts';
const d=JSON.parse(fs.readFileSync('app/data/jee-permutations-combinations-lecture.json','utf8'));
const answer=i=>d.quiz[i].options[d.quiz[i].answer];
function lists(items,r=items.length){if(r===0)return[[]];return items.flatMap((x,i)=>lists(items.filter((_,j)=>j!==i),r-1).map(rest=>[x,...rest]));}
const subsets=(items,r)=>Array.from({length:2**items.length},(_,mask)=>items.filter((_,i)=>mask&(1<<i))).filter(a=>a.length===r);
test('Unit 4 has ten substantive narrated chapters, eight examples and twenty matching questions',()=>{
 assert.equal(study.subject,'Mathematics');assert.equal(study.unit,4);assert.equal(d.chapters.length,10);assert.equal(study.sections.length,10);assert.equal(study.examples.length,8);assert.equal(d.quiz.length,20);assert.deepEqual(d.quiz,study.quiz);
 d.chapters.forEach((c,i)=>{assert.ok(c.script.split(/\s+/).length>=180);assert.equal(c.board.length,4);assert.deepEqual(countingBoards[i].lines,c.board);assert.equal(study.sections[i].paragraphs[0],c.script);});assert.match(study.remaining,/Further overlapping constraints/);assert.match(study.remaining,/not exhaustive/);
});
test('Ordered and unordered counts agree with exhaustive lists and subsets',()=>{
 const objects=[0,1,2,3,4,5,6];assert.equal(lists(objects,3).length,210);assert.equal(subsets(objects,3).length,35);assert.equal(lists(objects,0).length,1);assert.equal(answer(0),'12');assert.equal(answer(1),'7');assert.equal(answer(2),'210');assert.equal(answer(3),'1');assert.equal(answer(4),'35');
 assert.equal(subsets(objects,3).length,subsets(objects,4).length);assert.equal(subsets(objects,3).length,subsets(objects.slice(1),2).length+subsets(objects.slice(1),3).length);
});
test('Repeated-letter arrangements are counted by visible strings rather than labelled copies',()=>{
 assert.equal(new Set(lists([... 'BANANA']).map(a=>a.join(''))).size,60);assert.equal(new Set(lists(['A','A','B']).map(a=>a.join(''))).size,3);assert.equal(answer(6),'60');assert.equal(answer(7),'3');
});
test('Block and gap results match enumeration of distinct labelled rows',()=>{
 const rows=lists(['A','B','C','D','E']);assert.equal(rows.filter(r=>Math.abs(r.indexOf('A')-r.indexOf('B'))===1).length,48);assert.equal(rows.filter(r=>Math.abs(r.indexOf('A')-r.indexOf('B'))>1).length,72);
 assert.equal(rows.filter(r=>{const p=['A','B','C'].map(x=>r.indexOf(x));return Math.max(...p)-Math.min(...p)===2;}).length,36);
 const separated=lists(['A','B','C','D','X','Y','Z']).filter(r=>r.every((x,i)=>i===0||!('XYZ'.includes(x)&&'XYZ'.includes(r[i-1]))));assert.equal(separated.length,1440);assert.equal(answer(8),'48');assert.equal(answer(9),'36');assert.equal(answer(10),'72');assert.equal(answer(11),'1440');
});
test('Circular rotation convention produces 120 classes and 48 adjacent-pair classes',()=>{
 const circles=lists(['B','C','D','E','F']).map(r=>['A',...r]);assert.equal(circles.length,120);assert.equal(circles.filter(r=>r[1]==='B'||r[5]==='B').length,48);assert.equal(lists(['A','B','C','D','E','F']).length,720);assert.equal(answer(12),'120');assert.equal(answer(13),'720');
});
test('Leading-zero and even-digit constraints agree with an exhaustive digit search',()=>{
 const numbers=lists([0,1,2,3,4],3).filter(r=>r[0]!==0);assert.equal(numbers.length,48);assert.equal(numbers.filter(r=>r[2]%2===0).length,30);assert.equal(answer(14),'48');assert.equal(answer(15),'30');
});
test('Committee requirements and identical-ball distributions match exhaustive outcomes',()=>{
 const committees=subsets([0,1,2,3,4,5,6,7,8],3);assert.equal(committees.length,84);assert.equal(committees.filter(c=>c.some(p=>p<5)).length,80);assert.equal(committees.filter(c=>c.filter(p=>p<5).length===2).length,40);assert.equal(committees.length*3,252);assert.equal(answer(16),'80');assert.equal(answer(17),'40');
 const triples=[];for(let x=0;x<=5;x++)for(let y=0;y<=5;y++)for(let z=0;z<=5;z++)if(x+y+z===5)triples.push([x,y,z]);assert.equal(triples.length,21);assert.equal(triples.filter(t=>t.every(n=>n>0)).length,6);assert.equal(answer(18),'21');assert.equal(answer(19),'6');
});
test('Audio fingerprints, contiguous timings and complete readable captions validate every chapter',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/jee-permutations-combinations-timings.json','utf8'));assert.equal(t.chapters.length,10);assert.ok(t.duration>600);assert.ok(fs.readFileSync('public/lectures/permutations-combinations/english.vtt','utf8').startsWith('WEBVTT'));
 d.chapters.forEach((c,i)=>{const stem=`public/lectures/permutations-combinations/chapter-${String(i+1).padStart(2,'0')}`,hash=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);assert.ok(fs.statSync(stem+'.mp3').size>50000);const cues=t.cues.filter(q=>q.chapter===i);assert.ok(cues.length>1);assert.equal(cues.map(q=>q.text).join(' '),c.script);cues.forEach(q=>{assert.ok(q.text.length<=140);assert.ok(q.end>q.start);});assert.ok(t.chapters[i].end>t.chapters[i].start);assert.ok(Math.abs(t.chapters[i].start-(i?t.chapters[i-1].end:0))<.001);});
});
