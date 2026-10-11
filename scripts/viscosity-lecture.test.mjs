import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const lesson=JSON.parse(read('app/data/jee-viscosity-surface-tension-lecture.json'));
const timing=JSON.parse(read('app/data/jee-viscosity-surface-tension-timings.json'));
test('viscosity captions retain complete scripts and stay inside each audio chapter',()=>{
  assert.equal(lesson.chapters.length,5);
  assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  for(let i=0;i<5;i++){
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.ok(cues.length>5);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(lesson.chapters[i].script));
    assert.ok(fs.statSync(new URL(`../public/lectures/viscosity-surface-tension/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
  }
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.start>=0 && cue.end>cue.start && cue.end<=timing.duration);
    assert.ok(cue.text.length<=110);
    if(i) assert.ok(cue.start>=timing.cues[i-1].end-0.02);
  });
  assert.equal((read('public/lectures/viscosity-surface-tension/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});
test('viscous drag balances effective weight and surface examples count interfaces',()=>{
  assert.equal(0.5*0.02*(1/0.01),1);
  const r=0.001,eta=1,rhoFluid=1000,rhoSphere=5500,g=10;
  const speed=2*r*r*(rhoSphere-rhoFluid)*g/(9*eta);
  assert.ok(Math.abs(speed-0.01)<1e-12);
  const volume=4*Math.PI*r**3/3;
  assert.ok(Math.abs(6*Math.PI*eta*r*speed-(rhoSphere-rhoFluid)*volume*g)<1e-12);
  assert.ok(rhoFluid*speed*2*r/eta<0.1);
  assert.ok(Math.abs((2*0.03*0.1)*0.01-60e-6)<1e-12);
  assert.equal(2*0.03/0.001,60);
  assert.equal(4*0.03/0.001,120);
  assert.equal(2*0.075/(1000*10*0.0005),0.03);
  const answers=['1 N','Four times the original','0.006 N','120 Pa','3 cm'];
  lesson.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
});
