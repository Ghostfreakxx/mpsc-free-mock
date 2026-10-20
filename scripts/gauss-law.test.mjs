import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-gauss-law-lecture.json'));

test('Gauss lesson preserves five audio chapters and complete bounded captions',()=>{
  const timing=JSON.parse(read('app/data/jee-gauss-law-timings.json'));
  assert.equal(data.chapters.length,5);
  assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/gauss-law/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/gauss-law/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('Gauss examples preserve normal angles, net charge and geometry factors',()=>{
  assert.ok(Math.abs(200*0.03*Math.cos(Math.PI/3)-3)<1e-12);
  assert.ok(Math.abs((2-0.5)*1e-9/8.85e-12-169.491525)<1e-6);
  assert.ok(Math.abs(9e9*2e-9/0.2**2-450)<1e-12);
  assert.equal(2*9e9*2e-9/0.1,360);
  assert.ok(Math.abs(1.77e-9/(2*8.85e-12)-100)<1e-12);
  const answers=['3 N m squared/C','169.5 N m squared/C','450 N/C','360 N/C','100 N/C','Net electric flux through it is zero'];
  data.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
  assert.match(data.chapters[1].script,/zero net flux, not necessarily zero field/);
  assert.match(data.chapters[2].script,/uses symmetry, not zero flux alone/);
  assert.match(data.chapters[3].script,/much smaller than the distance to either end/);
  assert.match(data.chapters[4].script,/particular conductor face/);
});
