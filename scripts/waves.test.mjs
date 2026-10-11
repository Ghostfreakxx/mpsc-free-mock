import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-waves-lecture.json'));

test('waves preserves five independent recordings and complete bounded captions',()=>{
  const timing=JSON.parse(read('app/data/jee-waves-timings.json'));
  assert.equal(data.chapters.length,5);
  assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/waves/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/waves/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('wave examples independently satisfy speed, phase, boundary and beat relations',()=>{
  assert.equal(40*0.5,20);
  assert.ok(Math.abs(Math.sqrt(8/(0.004/2))-63.24555)<0.00001);
  assert.ok(Math.abs(2*2*Math.abs(Math.cos(Math.PI/3))-2)<1e-12);
  assert.equal(3*100/(2*1),150);
  assert.equal(3*340/(4*0.5),510);
  assert.equal(Math.abs(260-256),4);
  const answers=['20 m/s','63.2 m/s','2 cm','150 Hz','510 Hz','4'];
  data.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
  assert.match(data.chapters[4].script,/pressure and displacement have opposite node patterns/);
  assert.match(data.chapters[4].script,/end correction/);
  assert.match(data.chapters[0].script,/not the speed of a marked particle/);
});
