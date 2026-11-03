import test from'node:test';import assert from'node:assert/strict';import fs from'node:fs';import{createHash}from'node:crypto';
const d=JSON.parse(fs.readFileSync('app/data/neet-cell-unit-life-lecture.json'));const answer=i=>d.quiz[i].options[d.quiz[i].answer];
test('cell teaching distinguishes structures that are commonly confused',()=>{
 assert.equal(answer(3),'It is a differentiated eukaryotic cell');assert.equal(answer(7),'Facilitated diffusion');assert.equal(answer(8),'Vacuole');assert.equal(answer(13),'Mitochondrion');assert.match(answer(19),/Ribosome lacks a surrounding membrane/);
 assert.match(d.chapters[9].script,/not added arithmetically/);assert.match(d.scope,/Biomolecules, full cell division/);
});
test('axoneme and chromosome counting use groups and centromeres correctly',()=>{
 assert.equal(Number(answer(22)),9*2+2);assert.equal(9*3,27);assert.equal(answer(23),'Nine peripheral triplets');assert.equal(answer(27),`${4} chromosomes and ${4*2} chromatids`);
 assert.match(d.chapters[11].script,/central pair consists of two individual/);assert.match(d.chapters[13].script,/before sister separation/);
});
test('every chapter has actual audio provenance and complete ordered readable captions',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/neet-cell-unit-life-timings.json'));assert.equal(d.chapters.length,15);assert.equal(t.chapters.length,15);assert.equal(d.quiz.length,30);assert.ok(t.duration>600&&t.duration<1800);
 const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
 for(const[i,c]of d.chapters.entries()){
  assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.points.length,4);assert.equal(c.board.lines.length,4);
  const stem='public/lectures/neet-cell-unit-life/chapter-'+String(i+1).padStart(2,'0');assert.ok(fs.statSync(stem+'.mp3').size>100000);
  const hash=createHash('sha256').update(JSON.stringify({script:c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);
  const chapter=t.chapters[i];assert.ok(chapter.end>chapter.start);if(i)assert.equal(chapter.start,t.chapters[i-1].end);
  const cues=t.cues.filter(x=>x.chapter===i);assert.equal(normalize(cues.map(x=>x.text).join(' ')),normalize(c.script));assert.ok(cues.length>10);
  for(const[j,cue]of cues.entries()){assert.ok(cue.end>cue.start&&cue.start>=chapter.start&&cue.end<=chapter.end+.001);assert.ok(cue.text.length<=100);if(j)assert.ok(cue.start>=cues[j-1].end-.02);}
 }
});
test('NEET routes isolate progress and heavy data from the shared player and slim boards',()=>{
 const lesson=fs.readFileSync('app/neet/classes/cell-lesson.ts','utf8'),page=fs.readFileSync('app/neet/classes/cell-unit-life/page.tsx','utf8'),diagram=fs.readFileSync('app/neet/classes/cell-diagram.tsx','utf8'),player=fs.readFileSync('app/jee/classes/lecture-player.tsx','utf8');
 assert.match(lesson,/neet\.cell-unit-life\.lecture\.v1/);assert.match(page,/exam="NEET"/);assert.doesNotMatch(diagram,/neet-cell-unit-life-lecture\.json|cell-lesson/);assert.match(player,/dynamic\(\(\) => import\("\.\.\/\.\.\/neet\/classes\/cell-diagram"\)\)/);
 const ranks=d.quiz.map(q=>q.answer);assert.ok(new Set(ranks).size===4);for(const q of d.quiz){assert.equal(new Set(q.options).size,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation.length>15);}
});
