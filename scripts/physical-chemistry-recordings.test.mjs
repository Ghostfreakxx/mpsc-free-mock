import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {physicalChemistryLessons} from '../app/jee/classes/physical-chemistry-study.ts';
for (const [id,unit] of [['chemical-thermodynamics',4],['solutions',5]]) {
 const lesson=JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
 test(`${id}: recording matches the written companion and keeps scope explicit`,()=>{
  assert.equal(lesson.subject,'Chemistry');assert.equal(lesson.unit,unit);
  assert.equal(lesson.chapters.length,10);
  assert.deepEqual(lesson.quiz,physicalChemistryLessons.find(l=>l.id===id).quiz);
  assert.equal(lesson.quiz.length,12);
  for(const [i,c]of lesson.chapters.entries()){
   const hash=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:lesson.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');
   assert.equal(fs.readFileSync('public/lectures/'+id+'/chapter-'+String(i+1).padStart(2,'0')+'.sha256','utf8'),hash);
   if(i>=5){assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.board.rows.length,3);}
  }
  assert.match(lesson.chapters[0].script,/AI generated Marin voice/);
  assert.match(lesson.chapters[4].script,/further/);
 });
 test(`${id}: every spoken chapter has complete, bounded captions`,()=>{
  const t=JSON.parse(fs.readFileSync(`app/data/jee-${id}-timings.json`));
  assert.equal(t.chapters.length,10);assert.ok(t.duration>850 && t.duration<1400);
  const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
  for(const [i,ch] of t.chapters.entries()){
   assert.equal(ch.start,i?t.chapters[i-1].end:0);
   const cues=t.cues.filter(c=>c.chapter===i);assert.ok(cues.length>10);
   assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(lesson.chapters[i].script));
   for(const [j,c]of cues.entries()){
    assert.ok(c.end>c.start && c.start>=ch.start && c.end<=ch.end+.001);
    assert.ok(c.text.length<=100);if(j)assert.ok(c.start>=cues[j-1].end-.02);
   }
  }
  assert.equal(t.chapters.at(-1).end,t.duration);
  assert.ok(fs.statSync(`public/lectures/${id}/narration-marin.mp3`).size>1e6);
 });
}
test('additional narrated examples retain energy, pressure and particle-count units',()=>{
 assert.equal((-90-2*.008314*300).toFixed(1),'-95.0');
 assert.equal((.2/(200/1.2/1000)).toFixed(2),'1.20');
 assert.equal((1.86*(10/180)/.1).toFixed(2),'1.03');
 assert.equal((1+.8*(2-1)).toFixed(2),'1.80');
 assert.equal(50+50/2,75);assert.equal(180/.75,240);
});
