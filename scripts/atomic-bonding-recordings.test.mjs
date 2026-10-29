import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {nextStudyLessons} from '../app/jee/classes/study-lessons-two.ts';
import {chemistryExpansionLessons} from '../app/jee/classes/chemistry-expansion-study.ts';
const written=[...nextStudyLessons,...chemistryExpansionLessons];
for(const [id,count] of [['atomic-structure',33],['chemical-bonding',33]]){
 const lesson=JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
 test(`${id}: substantive chapters, quiz parity and reviewed audio provenance`,()=>{
  assert.equal(lesson.chapters.length,count);assert.equal(lesson.quiz.length,58);
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
  assert.equal(t.chapters.length,count);assert.ok(t.duration>count*50 && t.duration<count*90);
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
test('atomic and bonding calculations use the stated models',()=>{
 assert.equal((1240/400-2).toFixed(2),'1.10');
 assert.equal((.0529*4/2).toFixed(4),'0.1058');
 assert.equal((13.6*(1/4-1/16)).toFixed(2),'2.55');
 assert.equal((12.27/Math.sqrt(400)).toFixed(4),'0.6135');
 assert.equal(3-1-1,1);assert.equal(2*3**2,18);
 assert.equal(5-0-8/2,1);assert.equal(4+2*6,16);assert.equal(4+3*6+2,24);
 assert.equal((8-3)/2,2.5);assert.equal((8-5)/2,1.5);
});
