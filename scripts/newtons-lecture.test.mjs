import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { nextStudyLessons } from '../app/jee/classes/study-lessons-two.ts';
const read = file => fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-newtons-lecture.json'));
const times=JSON.parse(read('app/data/jee-newtons-timings.json'));
test('Newton chapters and subtitles preserve the complete script',()=>{
  assert.equal(data.chapters.length,5);
  assert.equal(times.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  for(let i=0;i<5;i++) {
    const cues=times.cues.filter(c=>c.chapter===i);
    assert.ok(cues.length>10);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(data.chapters[i].script));
    assert.ok(fs.statSync(new URL(`../public/lectures/newtons-laws/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  }
  for(let i=0;i<times.cues.length;i++) {
    const c=times.cues[i];
    assert.ok(c.end>c.start && c.start>=0 && c.end<=times.duration);
    if(i)assert.ok(c.start>=times.cues[i-1].end-0.02);
  }
  assert.equal((read('public/lectures/newtons-laws/english.vtt').match(/-->/g)||[]).length,times.cues.length);
});
test('worked force examples agree with independent calculations',()=>{
  const normal=4*10,staticLimit=0.5*normal,kinetic=0.3*normal;
  assert.ok(12<staticLimit);
  assert.equal((28-kinetic)/4,4);
  assert.ok(Math.abs(10*Math.sin(Math.PI/6)-5)<1e-10);
  const quiz=nextStudyLessons[0].quiz;
  assert.equal(quiz[0].options[quiz[0].answer],`${(15-6)/3} m/s² right`);
  assert.equal(quiz[4].answer,1);
});
