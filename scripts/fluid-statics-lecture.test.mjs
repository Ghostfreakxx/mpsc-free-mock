import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const lesson=JSON.parse(read('app/data/jee-fluid-statics-lecture.json'));
const timing=JSON.parse(read('app/data/jee-fluid-statics-timings.json'));
test('fluid chapters have complete ordered captions and separate recordings',()=>{
  assert.equal(lesson.chapters.length,5);
  assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  for(let i=0;i<5;i++){
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.ok(cues.length>5);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(lesson.chapters[i].script));
    assert.ok(fs.statSync(new URL(`../public/lectures/fluid-statics/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
  }
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.start>=0 && cue.end>cue.start && cue.end<=timing.duration);
    assert.ok(cue.text.length<=110);
    if(i) assert.ok(cue.start>=timing.cues[i-1].end-0.02);
  });
  assert.equal((read('public/lectures/fluid-statics/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});
test('fluid examples and new voice direction are consistent',()=>{
  assert.equal(200/0.02,10000);
  assert.equal(1000*10*2,20000);
  assert.equal(1000*10*0.002,20);
  assert.equal(600/1000,0.6);
  assert.equal(3*10-1000*10*0.002,10);
  const answers=['10000 Pa','20000 Pa','20 N','0.6','10 N'];
  lesson.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
  assert.equal(lesson.voice,'marin');
  assert.match(lesson.voiceInstructions,/General American/);
  assert.match(lesson.voiceInstructions,/playful/);
});
