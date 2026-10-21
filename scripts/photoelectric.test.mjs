import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read = path => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const lesson = JSON.parse(read('app/data/jee-photoelectric-lecture.json'));
test('Photoelectric examples and answer keys are consistent', () => {
  assert.equal(1240/400-2,1.1);
  assert.equal(1240/2,620);
  assert.ok(1240/700<2);
  assert.ok(Math.abs(4.14e-15*8e14-2-1.312)<1e-12);
  const expected=['No photoelectric emission','1.1 eV','620 nm','Stopping potential','1.1 V','1.312 V'];
  lesson.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],expected[i]));
  assert.match(lesson.chapters[4].script,/not a physical branch/);
});
test('Photoelectric audio and captions cover every teaching chapter',()=>{
  const timing=JSON.parse(read('app/data/jee-photoelectric-timings.json'));
  assert.equal(lesson.voice,'marin');assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  timing.chapters.forEach((t,i)=>{
    assert.ok(t.end>t.start);
    if(i)assert.ok(Math.abs(t.start-timing.chapters[i-1].end)<.001);
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(lesson.chapters[i].script));
    assert.ok(cues[0].start>=t.start && cues.at(-1).end<=t.end+.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/photoelectric/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((c,i)=>{
    assert.ok(c.end>c.start && c.start>=0 && c.end<=timing.duration);
    assert.ok(c.text.length<=110);
    if(i)assert.ok(c.start>=timing.cues[i-1].end-.02);
  });
  assert.equal((read('public/lectures/photoelectric/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
  assert.match(read('app/jee/classes/photoelectric/page.tsx'),/LecturePlayer/);
});
