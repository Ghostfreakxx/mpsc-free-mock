import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const lesson=JSON.parse(read('app/data/jee-elasticity-lecture.json'));
const timing=JSON.parse(read('app/data/jee-elasticity-timings.json'));
test('elasticity captions preserve all five scripts with valid audio boundaries',()=>{
  assert.equal(lesson.chapters.length,5);
  assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  for(let i=0;i<5;i++){
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.ok(cues.length>5);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(lesson.chapters[i].script));
    assert.ok(fs.statSync(new URL(`../public/lectures/elasticity/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
  }
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.start>=0 && cue.end>cue.start && cue.end<=timing.duration);
    assert.ok(cue.text.length<=110);
    if(i) assert.ok(cue.start>=timing.cues[i-1].end-0.02);
  });
  assert.equal((read('public/lectures/elasticity/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});
test('elasticity examples use area conversion, linear strain and triangular work',()=>{
  const F=100,L=2,A=1e-6,Y=2e11;
  const stress=F/A,strain=stress/Y,x=F*L/(A*Y);
  assert.equal(stress,1e8);
  assert.equal(strain,0.0005);
  assert.equal(x,0.001);
  assert.equal(strain*L,x);
  assert.equal(0.5*F*x,0.05);
  assert.equal((F*(2*L)/(4*A*Y))/x,0.5);
  const answers=['Elastic recovery','100 million Pa','1 mm','Half as large','0.05 J'];
  lesson.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
});
