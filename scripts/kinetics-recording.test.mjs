import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {chemistryCoreLessons} from '../app/jee/classes/chemistry-core-study.ts';
const lesson=JSON.parse(fs.readFileSync('app/data/jee-chemical-kinetics-lecture.json'));
test('kinetics recording preserves experimental and integrated-law examples',()=>{
 assert.equal(lesson.subject,'Chemistry');assert.equal(lesson.unit,8);
 assert.equal(lesson.chapters.length,34);assert.equal(lesson.quiz.length,66);
 assert.deepEqual(lesson.quiz,chemistryCoreLessons.find(l=>l.id==='chemical-kinetics').quiz);
 for(const [i,c]of lesson.chapters.entries()){
  const hash=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:lesson.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');
  assert.equal(fs.readFileSync('public/lectures/chemical-kinetics/chapter-'+String(i+1).padStart(2,'0')+'.sha256','utf8'),hash);
  if(i>=5){assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.board.rows.length,3);}
 }
 assert.ok(Math.abs(.002/(.1**2*.1)-2)<1e-10);
 assert.equal((.08-.002*15).toFixed(3),'0.050');assert.equal(.08/.002,40);
 assert.equal(.5**3,.125);assert.equal((Math.log(10)/(Math.log(2)/10)).toFixed(1),'33.2');
 assert.equal(2*100-150,50);assert.equal((Math.log(2)/10).toFixed(4),'0.0693');
 assert.equal((8.314*Math.log(2)/(1/300-1/310)/1000).toFixed(1),'53.6');
 assert.match(lesson.chapters[3].script,/no other gases or reactions/);
 assert.match(lesson.chapters[4].script,/does not change the equilibrium constant/);
});
test('all thirty-four chapters have complete, bounded and readable captions',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/jee-chemical-kinetics-timings.json'));
 assert.equal(t.chapters.length,34);assert.ok(t.duration>850 && t.duration<34*90);
 const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
 for(const [i,ch] of t.chapters.entries()){
  assert.equal(ch.start,i?t.chapters[i-1].end:0);
  const cues=t.cues.filter(c=>c.chapter===i);
  assert.ok(cues.length>10);
  assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(lesson.chapters[i].script));
  for(const [j,c]of cues.entries()){
   assert.ok(c.end>c.start && c.start>=ch.start && c.end<=ch.end+.001);
   assert.ok(c.text.length<=100);if(j)assert.ok(c.start>=cues[j-1].end-.02);
  }
 }
 assert.equal(t.chapters.at(-1).end,t.duration);
 assert.ok(fs.statSync('public/lectures/chemical-kinetics/narration-marin.mp3').size>1e6);
});
