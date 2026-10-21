import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-motional-emf-lecture.json'));

test('Motional emf retains five validated recordings and complete bounded captions',()=>{
  const timing=JSON.parse(read('app/data/jee-motional-emf-timings.json'));
  assert.equal(data.chapters.length,5); assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/motional-emf/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/motional-emf/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('Moving-rod examples independently preserve polarity, energy balance and overlap geometry',()=>{
  const near=(a,b)=>assert.ok(Math.abs(a-b)<Math.abs(b)*1e-10+1e-20);
  const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  const B=0.5,l=0.4,v=3,R=2;
  const chargeForce=cross([v,0,0],[0,0,-B]); near(chargeForce[1],1.5);
  const emf=B*l*v,I=emf/R,F=I*l*B;
  near(emf,0.6); near(I,0.3); near(F,0.06);
  const rodForce=cross([0,I*l,0],[0,0,-B]); near(rodForce[0],-0.06);
  near(F*v,0.18); near(F*v,I*I*R);
  near((B*l*2*v/R)/(B*l*v/R),2);
  near((B*l*2*v)**2/R/(emf**2/R),4);
  const overlap=(x,width,left,right)=>Math.max(0,Math.min(x+width,right)-Math.max(x,left));
  const h=1e-5,rate=x=>(overlap(x+h,0.5,0,2)-overlap(x-h,0.5,0,2))/(2*h);
  assert.ok(Math.abs(rate(-0.25)-1)<1e-8);
  assert.ok(Math.abs(rate(0.75))<1e-8);
  assert.ok(Math.abs(rate(1.75)+1)<1e-8);
  near(0.4*0.3*2,0.24); near(0.24/1.2,0.2);
  const expected=['Positive','0.6 V','0.3 A','0.18 W','Zero','They interrupt large conducting paths'];
  assert.equal(data.quiz.length,6);
  data.quiz.forEach((quiz,i)=>assert.equal(quiz.options[quiz.answer],expected[i]));
  assert.match(data.chapters[0].script,/no sustained circulating current/);
  assert.match(data.chapters[1].script,/negligible self-inductive effects/);
  assert.match(data.chapters[3].script,/Opposite-side motional contributions cancel/);
  assert.match(data.chapters[4].script,/stationary ordinary conductor in a static field/);
});
