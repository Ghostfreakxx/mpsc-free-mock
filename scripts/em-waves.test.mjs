import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-em-waves-lecture.json'));

test('Electromagnetic waves preserves five recordings and complete bounded English captions',()=>{
  const timing=JSON.parse(read('app/data/jee-em-waves-timings.json'));
  assert.equal(data.chapters.length,5); assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/em-waves/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/em-waves/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('EM examples independently preserve displacement current, cross-product direction and medium frequency',()=>{
  const near=(a,b)=>assert.ok(Math.abs(a-b)<Math.abs(b)*1e-9+1e-20);
  const epsilon0=8.8541878128e-12,area=0.01,gap=0.005,voltageSlope=5e5;
  const C=epsilon0*area/gap;
  near(epsilon0*area*voltageSlope/gap,C*voltageSlope);
  near(2e-9*5e5,1e-3); near(2e-9*0,0);
  const c=3e8,f=6e14,n=1.5;
  near(90/c,3e-7); near(c/f,500e-9);
  near(c/n,2e8); near((c/n)/f,500e-9/n); near((c/n)/((c/n)/f),f);
  near(c/3e9,0.1); near(c/3e14,1e-6);
  const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  const E=[0,90,0],B=[0,0,3e-7],forward=cross(E,B);
  assert.ok(forward[0]>0); near(forward[1],0); near(forward[2],0);
  cross(E.map(v=>-v),B.map(v=>-v)).forEach((v,i)=>near(v,forward[i]));
  const expected=['1 mA','0.3 microT','+x','500 nm','Frequency unchanged; wavelength about 333 nm','Radio, microwave, IR, visible, UV, X ray, gamma'];
  assert.equal(data.quiz.length,6);
  data.quiz.forEach((quiz,i)=>assert.equal(quiz.options[quiz.answer],expected[i]));
  assert.match(data.chapters[0].script,/not electrons flying across the vacuum gap/);
  assert.match(data.chapters[1].script,/in phase/);
  assert.match(data.chapters[2].script,/classifications ordinarily quote vacuum wavelength/);
  assert.match(data.chapters[3].script,/not a linear frequency scale/);
  assert.match(data.chapters[3].script,/production mechanisms/);
});
