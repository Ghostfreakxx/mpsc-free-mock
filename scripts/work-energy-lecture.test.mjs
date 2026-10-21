import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const lesson=JSON.parse(read('app/data/jee-work-energy-lecture.json'));
const timing=JSON.parse(read('app/data/jee-work-energy-timings.json'));
test('energy audio and caption chapters preserve the full authored lesson',()=>{
  assert.equal(lesson.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  for(let i=0;i<5;i++){
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.ok(cues.length>5);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(lesson.chapters[i].script));
    assert.ok(fs.statSync(new URL(`../public/lectures/work-energy/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  }
  for(let i=0;i<timing.cues.length;i++){
    const cue=timing.cues[i];
    assert.ok(cue.start>=0 && cue.end>cue.start && cue.end<=timing.duration);
    if(i) assert.ok(cue.start>=timing.cues[i-1].end-0.02);
  }
  assert.equal((read('public/lectures/work-energy/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});
test('energy worked examples and quiz answers agree with calculations',()=>{
  assert.ok(Math.abs(10*3*Math.cos(Math.PI/3)-15)<1e-10);
  assert.equal(Math.sqrt(2*50/4),5);
  assert.equal((0.5*2*10**2)/5,20);
  assert.ok(Math.abs(Math.sqrt(2*10*10)-14.1421)<0.001);
  assert.equal(lesson.quiz[0].options[lesson.quiz[0].answer],'15 J');
  assert.equal(lesson.quiz[2].options[lesson.quiz[2].answer],'5 m/s');
  assert.equal(lesson.quiz[3].options[lesson.quiz[3].answer],'20 N');
});
