import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const root = new URL('../', import.meta.url);
const read = file => fs.readFileSync(new URL(file, root), 'utf8');
const lesson = JSON.parse(read('app/data/jee-straight-line-lecture.json'));
const timing = JSON.parse(read('app/data/jee-straight-line-timings.json'));
test('all five separately replaceable audio chapters exist', () => {
  assert.equal(lesson.chapters.length, 5);
  for(let i=1;i<=5;i++) assert.ok(fs.statSync(new URL(`public/lectures/straight-line-motion/chapter-0${i}.mp3`,root)).size>100000);
  assert.ok(timing.duration>300 && timing.duration<400);
});
test('captions preserve the full authored script with bounded, monotonic timing', () => {
  const normalize = s => s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  for(let i=0;i<5;i++) {
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(lesson.chapters[i].script));
    assert.ok(cues.length>10);
  }
  for(let i=0;i<timing.cues.length;i++) {
    const c=timing.cues[i];
    assert.ok(c.end>c.start && c.end<=timing.duration);
    assert.ok(c.text.length<=100);
    if(i) assert.ok(c.start>=timing.cues[i-1].end-0.02);
  }
  const vtt=read('public/lectures/straight-line-motion/english.vtt');
  assert.ok(vtt.startsWith('WEBVTT'));
  assert.equal((vtt.match(/-->/g)||[]).length,timing.cues.length);
});
test('recorded and written routes both remain available', () => {
  assert.ok(read('app/jee/classes/straight-line-motion/page.tsx').includes('LecturePlayer'));
  assert.ok(read('app/jee/classes/study-lessons.ts').includes('straight-line-motion'));
  assert.equal(lesson.quiz.length,5);
});
