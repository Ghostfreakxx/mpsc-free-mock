import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const lesson=JSON.parse(read('app/data/jee-rotation-lecture.json'));
const timing=JSON.parse(read('app/data/jee-rotation-timings.json'));
test('rotation preserves five chapters with complete ordered captions and audio',()=>{
  assert.equal(lesson.chapters.length,5);
  assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  for(let i=0;i<5;i++){
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.ok(cues.length>5);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(lesson.chapters[i].script));
    assert.ok(fs.statSync(new URL(`../public/lectures/rotation/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
  }
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.start>=0 && cue.end>cue.start && cue.end<=timing.duration);
    assert.ok(cue.text.length<=110);
    if(i) assert.ok(cue.start>=timing.cues[i-1].end-0.02);
  });
  assert.equal((read('public/lectures/rotation/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});
test('rotation worked examples agree with quiz results',()=>{
  const inertia=0.5*2*0.5**2;
  assert.equal(inertia,0.25);
  assert.equal(1/inertia*3,12);
  assert.equal(0.5*inertia*12**2,18);
  const translation=0.5*2*2**2;
  assert.equal(translation+0.5*inertia*(2/0.5)**2,6);
  assert.equal(translation+0.5*(2*0.5**2)*(2/0.5)**2,8);
  const answers=['2 m/s','5 N m','4','12 rad/s','6 J'];
  lesson.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
});
