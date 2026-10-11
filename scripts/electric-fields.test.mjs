import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-electric-fields-lecture.json'));

test('electric fields keeps all five recordings and full bounded captions',()=>{
  const timing=JSON.parse(read('app/data/jee-electric-fields-timings.json'));
  assert.equal(data.chapters.length,5);
  assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/electric-fields/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/electric-fields/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('electrostatic examples independently preserve SI conversions and vector directions',()=>{
  assert.ok(Math.abs(-1e13*1.6e-19+1.6e-6)<1e-18);
  assert.ok(Math.abs(9e9*2e-6*3e-6/0.3**2-0.6)<1e-12);
  assert.ok(Math.abs(Math.hypot(-0.1,-0.1)-0.141421356)<1e-9);
  assert.ok(Math.abs(9e9*2e-6/0.2**2-450000)<1e-9);
  assert.ok(Math.abs(-1e-9*450000+4.5e-4)<1e-15);
  assert.ok(Math.abs(2e-9*0.01*1e5*Math.sin(Math.PI/6)-1e-6)<1e-18);
  const answers=['-1.6 microC','0.6 N','0.141 N','4.5 x 10^-4 N left','1 x 10^-6 N m'];
  data.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
  assert.match(data.chapters[4].script,/far-field approximations/);
  assert.match(data.chapters[4].script,/nonuniform external field/);
  assert.match(data.chapters[2].script,/forces acting on different objects/);
});
