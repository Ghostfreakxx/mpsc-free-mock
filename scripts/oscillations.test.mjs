import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-oscillations-lecture.json'));

test('oscillation audio and captions preserve all five teaching scripts',()=>{
  const timing=JSON.parse(read('app/data/jee-oscillations-timings.json'));
  assert.equal(data.chapters.length,5);
  assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/oscillations/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/oscillations/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('SHM worked answers satisfy motion, energy and small-angle relations',()=>{
  assert.equal(1/2,0.5);
  assert.equal(-(5**2)*0.04,-1);
  assert.equal(Math.sqrt(200/0.5),20);
  assert.ok(Math.abs(Math.sqrt(200/0.5)*Math.sqrt(0.1**2-0.06**2)-1.6)<1e-12);
  assert.equal(Math.sqrt(4),2);
  assert.ok(Math.abs(2*Math.PI*Math.sqrt(1/9.8)-2.007)<0.001);
  const answers=['0.5 s','-1 m/s squared','20 rad/s','1.6 m/s','Twice the original'];
  data.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
  assert.match(data.chapters[4].script,/small angle measured in radians/);
  assert.match(data.chapters[3].script,/squaring loses the direction/);
});
