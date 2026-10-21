import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const lesson=JSON.parse(read('app/data/jee-thermal-expansion-lecture.json'));
const timing=JSON.parse(read('app/data/jee-thermal-expansion-timings.json'));

test('thermal captions cover scripts and stay within validated audio chapters',()=>{
  assert.equal(lesson.chapters.length,5);
  assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  for(let i=0;i<5;i++){
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.ok(cues.length>5);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(lesson.chapters[i].script));
    assert.ok(fs.statSync(new URL(`../public/lectures/thermal-expansion/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
  }
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.start>=0 && cue.end>cue.start && cue.end<=timing.duration);
    assert.ok(cue.text.length<=110);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
  });
  assert.equal((read('public/lectures/thermal-expansion/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('thermal worked examples and quiz keys match independent calculations',()=>{
  assert.ok(Math.abs(12e-6*2*50*1000-1.2)<1e-12);
  assert.ok(Math.abs(0.003/(20e-6+10e-6)-100)<1e-12);
  assert.ok(Math.abs(10*(1+20e-6*100)-10.02)<1e-12);
  assert.ok(Math.abs(500*(1e-3-3e-5)*20-9.7)<1e-12);
  assert.equal((1000/1.01).toFixed(1),'990.1');
  const answers=['1.2 mm','100 K','10.02 mm','9.7 mL','990.1 kg/m cubed'];
  lesson.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
  assert.ok(lesson.sources.some(s=>s.url==='https://jeemain.nta.nic.in/document/syllabus-2026/'));
});
