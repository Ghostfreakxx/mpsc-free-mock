import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-cells-emf-lecture.json'));

test('cell recordings and captions retain all authored teaching text',()=>{
  const timing=JSON.parse(read('app/data/jee-cells-emf-timings.json'));
  assert.equal(data.chapters.length,5); assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/cells-emf/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/cells-emf/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('cell examples conserve power and use consistent terminal-voltage signs',()=>{
  const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10);
  const E=12,r=1,R=5,I=E/(R+r);
  near(I,2); near(E-I*r,10); near(I*R,10);
  near(E*I,I**2*(R+r)); near(I**2*R,20); near(I**2*r,4);
  near(E+1*r,13); near(-((8-10)/(4-2)),1);
  const power=load=>E**2*load/(load+r)**2;
  near(power(r),36);
  for(const load of [0.01,0.1,0.5,2,5,100])assert.ok(power(load)<power(r));
  near(r/(r+r),0.5);
  near(3/(2+1),1); near(1.5/(2+0.25),2/3);
  near(3/(0.5+1),1.5/(0.5+0.25));
  const expected=['Volt','10 V','13 V','R = r','2/3 A','1 ohm'];
  data.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],expected[i]));
  assert.match(data.chapters[2].script,/charging current is negative/);
  assert.match(data.chapters[4].script,/Unequal E M Fs in parallel can drive circulating current/);
});
