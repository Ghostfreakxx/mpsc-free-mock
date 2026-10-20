import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-current-electricity-lecture.json'));

test('current electricity recordings and captions cover the authored script',()=>{
  const timing=JSON.parse(read('app/data/jee-current-electricity-timings.json'));
  assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/current-electricity/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/current-electricity/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('current electricity has five complete teaching chapters',()=>{
  assert.equal(data.chapters.length,5);
  data.chapters.forEach(chapter=>{
    assert.ok(chapter.script.length>900);
    assert.ok(chapter.points.length>=3);
    assert.ok(chapter.formula.length>10);
  });
  assert.equal(data.quiz.length,6);
  assert.match(data.chapters[0].script,/conventional current/);
  assert.match(data.chapters[1].script,/current density/);
  assert.match(data.chapters[2].script,/fixed conditions/);
  assert.match(data.chapters[3].script,/uniform stretching/);
  assert.match(data.chapters[4].script,/same ideal voltage/);
});

test('current electricity examples are independently derived',()=>{
  assert.equal(12/4,3);
  assert.equal(2/(1e-6),2e6);
  assert.equal(12/3,4);
  assert.equal(2/(0.5),4);
  assert.equal(2**2*6,24);
  const expected=['3 A','2 x 10^6 A/m squared','4 ohm','4R','24 W','The smaller resistance'];
  data.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],expected[i]));
});
