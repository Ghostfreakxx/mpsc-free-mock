import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {studyLessons} from '../app/jee/classes/study-lessons.ts';
import {chemistryExpansionLessons} from '../app/jee/classes/chemistry-expansion-study.ts';
const written=[...studyLessons,...chemistryExpansionLessons];
for(const [id,count] of [['biomolecules',33],['purification-analysis',33],['practical-chemistry',37]]){
 const lesson=JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
 test(`${id}: substantive chapters, quiz parity and reviewed audio provenance`,()=>{
  assert.equal(lesson.chapters.length,count);assert.equal(lesson.quiz.length,id==='practical-chemistry'?64:56);
  const companion=written.find(l=>l.id===id);
  assert.deepEqual(lesson.quiz.slice(0,companion.quiz.length),companion.quiz);
  for(const [i,c] of lesson.chapters.entries()){
   assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.board.rows.length,3);
   const expected=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:lesson.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');
   assert.equal(fs.readFileSync(`public/lectures/${id}/chapter-${String(i+1).padStart(2,'0')}.sha256`,'utf8'),expected);
  }
 });
 test(`${id}: full transcript has readable, ordered captions for every chapter`,()=>{
  const t=JSON.parse(fs.readFileSync(`app/data/jee-${id}-timings.json`));
  assert.equal(t.chapters.length,count);assert.ok(t.duration>400 && t.duration<count*90);
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
test('biomolecule and analytical practice has independent numerical checks',()=>{
 const read=id=>JSON.parse(fs.readFileSync('app/data/jee-'+id+'-lecture.json'));
 const answer=(l,i)=>l.quiz[i].options[l.quiz[i].answer];
 assert.equal(answer(read('biomolecules'),7),((100-2*30)/2)+'%');
 assert.equal(answer(read('purification-analysis'),6),(10-2)+' g');
 assert.equal(answer(read('purification-analysis'),7),(3/5).toFixed(2));
 assert.equal(answer(read('practical-chemistry'),6),(0.100*20/0.0800).toFixed(1)+' mL');
 assert.equal(answer(read('practical-chemistry'),7),String.fromCharCode(8722)+(100*4.18*2/.0200/1000).toFixed(1)+' kJ/mol');
});
