import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-magnetic-fields-lecture.json'));

test('magnetic field chapters retain complete bounded captions and separate recordings',()=>{
  const timing=JSON.parse(read('app/data/jee-magnetic-fields-timings.json'));
  assert.equal(data.chapters.length,5); assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/magnetic-fields/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/magnetic-fields/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('magnetic examples independently satisfy magnitude, direction and limiting geometry',()=>{
  const near=(a,b)=>assert.ok(Math.abs(a-b)<Math.abs(b)*1e-10+1e-20);
  const mu0=4*Math.PI*1e-7,wire=mu0*5/(2*Math.PI*0.05);
  near(wire,20e-6); near(mu0*4*0.01/(4*Math.PI*0.1**2),0.4e-6);
  near(mu0*5/(4*Math.PI*0.05)*2*Math.sin(Math.PI/4),10*Math.SQRT2*1e-6);
  const center=mu0*4/(2*0.1),axis=x=>mu0*4*0.1**2/(2*(0.1**2+x**2)**1.5);
  near(center,8*Math.PI*1e-6); near(axis(0),center); near(axis(0.1)/center,1/(2*Math.SQRT2));
  near(mu0*4*Math.PI/(4*Math.PI*0.1),center/2);
  // With x right and y up, the z component of dl cross r is -dl_y * r_x.
  const leftZ=-1*0.05,rightSameZ=-1*(-0.05),rightOppositeZ=-(-1)*(-0.05);
  assert.ok(leftZ<0); assert.ok(rightSameZ>0); assert.ok(rightOppositeZ<0);
  near(wire*Math.sign(leftZ)+wire*Math.sign(rightSameZ),0);
  near(Math.abs(wire*Math.sign(leftZ)+wire*Math.sign(rightOppositeZ)),40e-6);
  const expected=['Into the page','20 microT','10 sqrt(2) microT','8 pi microT','1/(2 sqrt(2))','40 microT'];
  data.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],expected[i]));
  assert.match(data.chapters[2].script,/perpendicular foot lies outside the segment/);
  assert.match(data.chapters[3].script,/not arbitrary points in the plane/);
  assert.match(data.chapters[4].script,/theta in radians/);
});
