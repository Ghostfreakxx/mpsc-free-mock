import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-electric-potential-lecture.json'));

test('potential lesson retains five recordings and complete bounded captions',()=>{
  const timing=JSON.parse(read('app/data/jee-electric-potential-timings.json'));
  assert.equal(data.chapters.length,5);
  assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/electric-potential/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/electric-potential/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('potential examples independently preserve charge signs, references and energy',()=>{
  assert.ok(Math.abs(2e-6*(10-30)+40e-6)<1e-15);
  assert.ok(Math.abs(9e9*(2e-9-1e-9)/0.2-45)<1e-12);
  const V=x=>100-20*x;
  assert.ok(Math.abs(-(V(1.001)-V(1))/0.001-20)<1e-8);
  assert.equal(9e9*1e-9/0.1,90);
  assert.ok(Math.abs(9e9*2e-6*(-3e-6)/0.3+0.18)<1e-12);
  assert.ok(Math.abs(2*2e-11*1e5-4e-6)<1e-18);
  assert.ok(Math.abs(-2e-6*(-300*0.2)-120e-6)<1e-15);
  const answers=['-40 microJ','45 V','+20 N/C','90 V','-0.18 J','+4 microJ'];
  data.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
  assert.match(data.chapters[1].script,/zero potential does not prove zero field/);
  assert.match(data.chapters[3].script,/no external sources/);
  assert.match(data.chapters[4].script,/each distinct pair/);
});
