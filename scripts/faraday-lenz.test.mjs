import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-faraday-lenz-lecture.json'));

test('Faraday and Lenz retain five complete recordings and bounded English captions',()=>{
  const timing=JSON.parse(read('app/data/jee-faraday-lenz-timings.json'));
  assert.equal(data.chapters.length,5); assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/faraday-lenz/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/faraday-lenz/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('Induction examples preserve normal angles, linkage, slopes and right-hand signs',()=>{
  const near=(a,b)=>assert.ok(Math.abs(a-b)<Math.abs(b)*1e-10+1e-20);
  near(0.4*0.02*Math.cos(Math.PI/3),0.004);
  near(80*0.005*0.3/0.2,0.6); near(0.6/6,0.1);
  const emf=(N,start,end,dt)=>-N*(end-start)/dt;
  near(emf(50,0,0.006,0.3),-1);
  near(emf(50,0.006,0.006,0.3),0);
  near(emf(50,0.006,0,0.6),0.5);
  assert.ok(emf(1,-0.1,-0.2,1)>0);
  assert.ok(emf(1,-0.2,-0.1,1)<0);
  const B=t=>0.1+0.2*t*t;
  near(-40*0.03*0.4*2,-0.96); near(0.96/8,0.12);
  near(-40*0.03*(B(2)-B(0))/2,-0.48);
  const expected=['0.004 Wb','0.6 V','Counterclockwise','Clockwise','+0.5 V','-0.96 V'];
  assert.equal(data.quiz.length,6);
  data.quiz.forEach((quiz,i)=>assert.equal(quiz.options[quiz.answer],expected[i]));
  assert.match(data.chapters[0].script,/Not the angle with the plane/);
  assert.match(data.chapters[1].script,/inductive effects are negligible/);
  assert.match(data.chapters[2].script,/not always the magnetic field itself/);
  assert.match(data.chapters[3].script,/would not multiply by N again/);
  assert.match(data.chapters[4].script,/Differentiate before substituting/);
});
