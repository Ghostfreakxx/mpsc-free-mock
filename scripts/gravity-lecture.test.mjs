import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const lesson=JSON.parse(read('app/data/jee-gravity-lecture.json'));
const timing=JSON.parse(read('app/data/jee-gravity-timings.json'));
test('gravity captions preserve every chapter and stay within audio boundaries',()=>{
  assert.equal(lesson.chapters.length,5);
  assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  for(let i=0;i<5;i++){
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.ok(cues.length>5);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(lesson.chapters[i].script));
    assert.ok(fs.statSync(new URL(`../public/lectures/gravity/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
  }
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.start>=0 && cue.end>cue.start && cue.end<=timing.duration);
    assert.ok(cue.text.length<=110);
    if(i) assert.ok(cue.start>=timing.cues[i-1].end-0.02);
  });
  assert.equal((read('public/lectures/gravity/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});
test('gravity worked examples use centre radius and consistent orbital energy',()=>{
  const g=10,R=6.4e6,GM=g*R**2;
  assert.equal(GM/(2*R)**2,2.5);
  assert.equal(Math.sqrt(GM/R),8000);
  assert.equal(Math.sqrt(GM/(4*R)),4000);
  assert.equal(Math.sqrt(4**3),8);
  assert.ok(Math.abs(Math.sqrt(2*GM/R)/1000-11.3137085)<1e-6);
  const deltaU=-GM/(2*R)-(-GM/R);
  assert.equal(deltaU,GM/(2*R));
  const answers=['F/4','2.5 m/s squared','GMm/(2R)','8 times the inner period','sqrt(2)'];
  lesson.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
});
