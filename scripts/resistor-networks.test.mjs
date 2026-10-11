import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-resistor-networks-lecture.json'));

test('resistor network recordings retain complete bounded captions',()=>{
  const timing=JSON.parse(read('app/data/jee-resistor-networks-timings.json'));
  assert.equal(data.chapters.length,5);
  assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/resistor-networks/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/resistor-networks/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('mixed resistor network independently conserves voltage, current and power',()=>{
  const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10);
  const parallel=1/(1/6+1/3), total=4+parallel, current=12/total;
  const voltage=current*parallel, i6=voltage/6, i3=voltage/3;
  near(parallel,2); near(total,6); near(current,2); near(voltage,4);
  near(i6,2/3); near(i3,4/3); near(i6+i3,current);
  near(current*4+voltage,12);
  near(current**2*4+i6**2*6+i3**2*3,12*current);
  near(1/(1/4+1/12),3); near(18/(3+6)*6,12);
  const expected=['Share the same two nodes','12 V','3 ohm','4/3 A','24 W','Zero'];
  data.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],expected[i]));
  assert.match(data.chapters[1].script,/no extra conducting branch/);
  assert.match(data.chapters[4].script,/voltage across the gap need not be zero/);
  assert.match(data.chapters[4].script,/inconsistent zero-resistance ideal circuit/);
});
