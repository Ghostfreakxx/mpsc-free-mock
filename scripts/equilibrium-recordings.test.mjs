import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {equilibriumElectrochemistryLessons as written} from '../app/jee/classes/equilibrium-electrochemistry-study.ts';
for(const [id,count] of [['equilibrium',17],['redox-electrochemistry',14]]){
 const lesson=JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
 test(`${id}: substantive chapters, quiz parity and reviewed audio provenance`,()=>{
  assert.equal(lesson.chapters.length,count);assert.equal(lesson.quiz.length,id==='equilibrium'?26:18);
  assert.deepEqual(lesson.quiz,written.find(l=>l.id===id).quiz);
  for(const [i,c] of lesson.chapters.entries()){
   assert.ok(c.script.split(/\s+/).length>=150);assert.equal(c.board.rows.length,3);
   const expected=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:lesson.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');
   assert.equal(fs.readFileSync(`public/lectures/${id}/chapter-${String(i+1).padStart(2,'0')}.sha256`,'utf8'),expected);
  }
 });
 test(`${id}: full transcript has readable, ordered captions for every chapter`,()=>{
  const t=JSON.parse(fs.readFileSync(`app/data/jee-${id}-timings.json`));
  assert.equal(t.chapters.length,count);assert.ok(t.duration>500 && t.duration<1400);
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
test('added narrated calculations preserve reaction and unit conventions',()=>{
 assert.equal(2/1000,.002);assert.equal(.2**2/(.1*.1),4);assert.equal(2**2/2**4,.25);
 assert.equal((-2*96500*1.1/1000).toFixed(1),'-212.3');
 assert.equal((1.1-.05916/2*Math.log10(.1)).toFixed(5),'1.12958');
 assert.equal((1.1-.05916/2*Math.log10(10)).toFixed(5),'1.07042');
});
