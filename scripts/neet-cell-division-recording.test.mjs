import test from'node:test';import assert from'node:assert/strict';import fs from'node:fs';import{createHash}from'node:crypto';
const d=JSON.parse(fs.readFileSync('app/data/neet-cell-cycle-division-lecture.json'));const answer=i=>d.quiz[i].options[d.quiz[i].answer];
test('chromosome examples separate replication, sister separation and per-pole counts',()=>{
 const diploid=4;assert.equal(answer(4),`${diploid} chromosomes and ${diploid*2} chromatids`);assert.equal(answer(10),`${diploid*2} in the cell and ${diploid} per pole`);assert.equal(answer(21),`${diploid/2} replicated chromosomes`);assert.equal(answer(30),`${diploid*2} and ${diploid}`);
 assert.equal(answer(5),'2n,2C → 2n,4C');assert.equal(answer(22),'n,2C');assert.equal(answer(24),'n,1C');assert.match(d.chapters[5].script,/whole undivided cell/);assert.match(d.chapters[10].script,/without splitting sisters/);
});
test('meiotic events, possibility counts and cell counts stay distinct',()=>{
 assert.equal(answer(18),'Leptotene → zygotene → pachytene → diplotene → diakinesis');assert.equal(answer(19),'Pachytene and diplotene');assert.equal(2**3,8);assert.equal(answer(15),'Eight');assert.equal(answer(26),'Eight');assert.match(answer(27),/^Incorrect/);
 assert.match(answer(23),/No new S phase/);assert.match(d.chapters[13].script,/does not mean one meiosis physically produces eight/);assert.match(answer(1),/not metabolically inactive/);assert.match(answer(17),/Not necessarily mature gametes/);
 assert.equal(answer(28),'46 chromosomes and 92 chromatids');assert.equal(answer(29),'23 chromosomes and 46 chromatids');
});
test('all division chapters have matching audio provenance and complete ordered captions',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/neet-cell-cycle-division-timings.json'));assert.equal(d.chapters.length,16);assert.equal(d.quiz.length,32);assert.equal(t.chapters.length,16);assert.ok(t.duration>600&&t.duration<1800);const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
 for(const[i,c]of d.chapters.entries()){
  assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.points.length,4);const stem='public/lectures/neet-cell-cycle-division/chapter-'+String(i+1).padStart(2,'0');assert.ok(fs.statSync(stem+'.mp3').size>100000);
  const hash=createHash('sha256').update(JSON.stringify({script:c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);
  const ch=t.chapters[i];assert.ok(ch.end>ch.start);if(i)assert.equal(ch.start,t.chapters[i-1].end);const cues=t.cues.filter(x=>x.chapter===i);assert.equal(normalize(cues.map(x=>x.text).join(' ')),normalize(c.script));assert.ok(cues.length>10);
  for(const[j,cue]of cues.entries()){assert.ok(cue.end>cue.start&&cue.start>=ch.start&&cue.end<=ch.end+.001);assert.ok(cue.text.length<=100);if(j)assert.ok(cue.start>=cues[j-1].end-.02);}
 }
});
test('the division class isolates progress and uses slim diagram data',()=>{
 const lesson=fs.readFileSync('app/neet/classes/cell-division-lesson.ts','utf8'),diagram=fs.readFileSync('app/neet/classes/cell-division-diagram.tsx','utf8'),page=fs.readFileSync('app/neet/classes/cell-cycle-division/page.tsx','utf8');assert.match(lesson,/neet\.cell-cycle-division\.lecture\.v1/);assert.match(page,/exam="NEET"/);assert.doesNotMatch(diagram,/neet-cell-cycle-division-lecture\.json|cell-division-lesson/);
 for(const q of d.quiz){assert.equal(new Set(q.options).size,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation.length>15);}for(let i=0;i<4;i++)assert.equal(d.quiz.filter(q=>q.answer===i).length,8);
});
