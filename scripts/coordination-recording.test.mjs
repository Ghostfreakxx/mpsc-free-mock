import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {chemistryCoreLessons} from '../app/jee/classes/chemistry-core-study.ts';
const lesson=JSON.parse(fs.readFileSync('app/data/jee-coordination-compounds-lecture.json'));
test('narrated worked examples preserve charge, precipitate and spin energy results',()=>{
 assert.equal(lesson.subject,'Chemistry'); assert.equal(lesson.unit,12);
 assert.equal(lesson.chapters.length,26); assert.equal(lesson.quiz.length,50);
 assert.deepEqual(lesson.quiz,chemistryCoreLessons.find(l=>l.id==='coordination-compounds').quiz);
 for(const [i,c]of lesson.chapters.entries()){
  const hash=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:lesson.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');
  assert.equal(fs.readFileSync('public/lectures/coordination-compounds/chapter-'+String(i+1).padStart(2,'0')+'.sha256','utf8'),hash);
  if(i>=5){assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.board.rows.length,3);}
 }
 assert.equal((.01*2*143.5).toFixed(2),'2.87');
 assert.match(lesson.chapters[1].script,/sphere intact/);
 assert.match(lesson.chapters[1].script,/two point eight seven/);
 assert.equal((-2*250+2*180),-140);
 assert.match(lesson.chapters[3].script,/negative one hundred forty/);
 assert.equal(Math.sqrt(4*6).toFixed(2),'4.90');
 assert.equal(Math.sqrt(2*4).toFixed(2),'2.83');
 assert.match(lesson.chapters[4].script,/square planar and all paired/);
});
test('recording captions match every chapter and remain within audio bounds',()=>{
 const timings=JSON.parse(fs.readFileSync('app/data/jee-coordination-compounds-timings.json'));
 assert.ok(timings.duration>850 && timings.duration<2200);
 assert.equal(timings.chapters.length,26);
 const words=t=>t.toLowerCase().replace(/[^a-z0-9]/g,'');
 for(const [i,chapter] of timings.chapters.entries()){
  assert.equal(chapter.start,i?timings.chapters[i-1].end:0);
  const cues=timings.cues.filter(c=>c.chapter===i);
  assert.ok(cues.length>10);
  assert.equal(words(cues.map(c=>c.text).join(' ')),words(lesson.chapters[i].script));
  for(const [j,c] of cues.entries()){
   assert.ok(c.end>c.start && c.start>=chapter.start && c.end<=chapter.end+.001);
   assert.ok(c.text.length<=100);
   if(j)assert.ok(c.start>=cues[j-1].end-.02);
  }
 }
 assert.equal(timings.chapters.at(-1).end,timings.duration);
 assert.ok(fs.statSync('public/lectures/coordination-compounds/narration-marin.mp3').size>1e6);
});
