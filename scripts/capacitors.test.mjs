import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-capacitors-lecture.json'));

test('capacitors retain five independent recordings and full bounded captions',()=>{
  const timing=JSON.parse(read('app/data/jee-capacitors-timings.json'));
  assert.equal(data.chapters.length,5);
  assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/capacitors/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/capacitors/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('capacitor examples independently preserve network and fixed-quantity constraints',()=>{
  const near=(actual,expected)=>assert.ok(Math.abs(actual-expected)<Math.abs(expected)*1e-10+1e-20);
  near(3e-6*4,12e-6);
  near(8.85e-12*0.02/0.001,177e-12);
  const series=1/(1/2e-6+1/3e-6), charge=series*10;
  near(series,1.2e-6); near(charge/2e-6,6); near(charge/3e-6,4);
  const C0=2e-6,V0=10,Q0=C0*V0,U0=C0*V0**2/2,Cnew=3*C0;
  near(U0,100e-6); near(Q0/Cnew,10/3); near(Q0**2/(2*Cnew),U0/3);
  near(Cnew*V0,60e-6); near(Cnew*V0**2/2,300e-6);
  near(Q0**2/(2*(C0/2)),2*U0); near((C0/2)*V0**2/2,U0/2);
  const answers=['12 microC','177 pF','6 V','100 microJ','3.33 V','300 microJ'];
  data.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
  assert.match(data.chapters[2].script,/isolated neutral intermediate node/);
  assert.match(data.chapters[4].script,/completely fill/);
  assert.match(data.chapters[4].script,/average gap field stays V over d/);
});
