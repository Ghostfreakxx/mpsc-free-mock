import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-ampere-solenoids-lecture.json'));

test('Ampere chapters retain complete bounded captions and separate recordings',()=>{
  const timing=JSON.parse(read('app/data/jee-ampere-solenoids-timings.json'));
  assert.equal(data.chapters.length,5); assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/ampere-solenoids/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/ampere-solenoids/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('Ampere examples independently satisfy enclosed-current and scaling constraints',()=>{
  const near=(a,b)=>assert.ok(Math.abs(a-b)<Math.abs(b)*1e-10+1e-20);
  const mu0=4*Math.PI*1e-7,I=5,a=0.002;
  const inside=r=>mu0*I*r/(2*Math.PI*a*a),outside=r=>mu0*I/(2*Math.PI*r);
  near(inside(a),outside(a)); near(outside(a),0.5e-3);
  near(inside(a/2),0.25e-3); near(outside(2*a),0.25e-3);
  near(I*(a/2)**2/a**2,I/4);
  near(inside(a/2)*2*Math.PI*(a/2),mu0*I/4);
  const N=600,L=0.3,current=2,field=mu0*N/L*current;
  near(field,1.6*Math.PI*1e-3); near(mu0*N/(2*L)*current,field/2);
  near(mu0*(2*N)/(2*L)*current,field);
  near(2-5,-3);
  const expected=['-3 A','Tangential B of constant magnitude on a concentric circle','I/4','0.5 mT','5.03 mT','The closed integral of B dot dl is zero'];
  data.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],expected[i]));
  assert.match(data.chapters[2].script,/uniform current density/);
  assert.match(data.chapters[3].script,/finite solenoid has fringing field/);
  assert.match(data.chapters[4].script,/does not say the magnetic field is zero everywhere/);
});
