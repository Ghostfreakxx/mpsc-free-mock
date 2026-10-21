import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const lesson=JSON.parse(read('app/data/jee-fluid-flow-lecture.json'));
const timing=JSON.parse(read('app/data/jee-fluid-flow-timings.json'));
test('flow recordings and captions preserve five full teaching chapters',()=>{
  assert.equal(lesson.chapters.length,5);
  assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  for(let i=0;i<5;i++){
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.ok(cues.length>5);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(lesson.chapters[i].script));
    assert.ok(fs.statSync(new URL(`../public/lectures/fluid-flow/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
  }
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.start>=0 && cue.end>cue.start && cue.end<=timing.duration);
    assert.ok(cue.text.length<=110);
    if(i) assert.ok(cue.start>=timing.cues[i-1].end-0.02);
  });
  assert.equal((read('public/lectures/fluid-flow/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});
test('hydraulic work, continuity and Bernoulli examples conserve their quantities',()=>{
  const force=50*10,travel=0.20/10;
  assert.equal(force,500);
  assert.equal(travel,0.02);
  assert.equal(50*0.20,force*travel);
  const area1=4e-4,area2=1e-4,v1=2,v2=area1*v1/area2;
  assert.equal(v2,8);
  assert.equal(area1*v1*1000,0.8);
  const p1=120000,rho=1000,p2=p1-0.5*rho*(4**2-2**2);
  assert.equal(p2,114000);
  assert.equal(p1+0.5*rho*2**2,p2+0.5*rho*4**2);
  assert.equal(Math.sqrt(2*10*1.25),5);
  const answers=['500 N','0.02 m','8 m/s','6000 Pa','5 m/s'];
  lesson.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
});
