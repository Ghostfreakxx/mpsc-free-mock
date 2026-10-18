import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {studyLessons} from '../app/jee/classes/study-lessons.ts';
import {chemistryExpansionLessons} from '../app/jee/classes/chemistry-expansion-study.ts';
const written=[...studyLessons,...chemistryExpansionLessons];
for(const [id,count] of [['mole-concept',8],['periodic-trends',8]]){
 const lesson=JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
 test(`${id}: substantive chapters, quiz parity and reviewed audio provenance`,()=>{
  assert.equal(lesson.chapters.length,count);assert.equal(lesson.quiz.length,10);
  const companion=written.find(l=>l.id===id);
  assert.deepEqual(lesson.quiz.slice(0,companion.quiz.length),companion.quiz);
  for(const [i,c] of lesson.chapters.entries()){
   assert.ok(c.script.split(/\s+/).length>=150);assert.equal(c.board.rows.length,3);
   const expected=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:lesson.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');
   assert.equal(fs.readFileSync(`public/lectures/${id}/chapter-${String(i+1).padStart(2,'0')}.sha256`,'utf8'),expected);
  }
 });
 test(`${id}: full transcript has readable, ordered captions for every chapter`,()=>{
  const t=JSON.parse(fs.readFileSync(`app/data/jee-${id}-timings.json`));
  assert.equal(t.chapters.length,count);assert.ok(t.duration>400 && t.duration<1100);
  const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
  for(const [i,ch] of t.chapters.entries()){
   assert.equal(ch.start,i?t.chapters[i-1].end:0);
   const cues=t.cues.filter(c=>c.chapter===i);assert.ok(cues.length>10);
   assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(lesson.chapters[i].script));
   for(const [j,c] of cues.entries()){
    assert.ok(c.end>c.start && c.start>=ch.start && c.end<=ch.end+.001);
    assert.ok(c.text.length<=100);if(j)assert.ok(c.start>=cues[j-1].end-.02);
   }
  }
  assert.equal(t.chapters.at(-1).end,t.duration);
  assert.ok(fs.statSync(`public/lectures/${id}/narration-marin.mp3`).size>1e6);
 });
}
test('mole conversions, yield and isoelectronic counts are consistent',()=>{
 assert.equal(40+2*(16+1),74);
 assert.equal(180/(12+2+16),6);
 assert.equal(2*28+3*2,2*17+28);
 assert.ok(Math.abs(10*.8/100*44-3.52)<1e-12);
 assert.equal(2.816/3.52*100,80);
 assert.equal(.40*50/200,.10);
 assert.equal(5*.8/24*24*.75,3);
 assert.deepEqual([8,9,11,12,13].map((z,i)=>z-[-2,-1,1,2,3][i]),[10,10,10,10,10]);
});
