import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-dipole-fields-lecture.json'));

test('Dipole fields preserve complete captions and all separately replaceable chapters',()=>{
  const timing=JSON.parse(read('app/data/jee-dipole-fields-timings.json'));
  assert.equal(data.chapters.length,5); assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/dipole-fields/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/dipole-fields/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('Dipole examples preserve vector direction, cube scaling and finite-loop limits',()=>{
  const near=(a,b)=>assert.ok(Math.abs(a-b)<Math.abs(b)*1e-10+1e-20);
  const field=(moment,position)=>{
    const r=Math.hypot(...position),n=position.map(v=>v/r),dot=moment.reduce((s,v,i)=>s+v*n[i],0);
    return n.map((v,i)=>1e-7*(3*dot*v-moment[i])/r**3);
  };
  const vectorNear=(a,b)=>a.forEach((v,i)=>near(v,b[i]));
  const moment=[0.8,0,0],axial=field(moment,[0.4,0,0]),equatorial=field(moment,[0,0.4,0]);
  vectorNear(axial,[2.5e-6,0,0]); vectorNear(field(moment,[-0.4,0,0]),axial);
  vectorNear(equatorial,[-1.25e-6,0,0]); vectorNear(field(moment,[0,-0.4,0]),equatorial);
  near(field(moment,[0.8,0,0])[0],0.3125e-6);
  near(Math.hypot(...field(moment,[0.8,0,0]))/Math.hypot(...equatorial),0.25);
  near(field(moment,[0.4*Math.cbrt(2),0,0])[0],1.25e-6);
  const R=0.02,I=3,mu0=4*Math.PI*1e-7;
  const exact=x=>mu0*I*R*R/(2*(R*R+x*x)**1.5);
  const dipole=x=>2e-7*I*Math.PI*R*R/x**3;
  near(exact(10*R)/dipole(10*R),1.01**(-1.5));
  near(exact(R)/dipole(R),2**(-1.5)); near(exact(0),mu0*I/(2*R));
  vectorNear(equatorial.map((v,i)=>v+[1.25e-6,0,0][i]),[0,0,0]);
  near(axial[0]+1.25e-6,3.75e-6);
  const total=equatorial.map((v,i)=>v+[0,1.25e-6,0][i]);
  near(Math.hypot(...total),1.25e-6*Math.sqrt(2)); near(Math.atan2(total[1],total[0]),3*Math.PI/4);
  const expected=['Right, from S to N','Parallel to the moment','1.25 microT opposite m','1/4','0.985','Approximately 1.77 microT, 45 degrees above left'];
  data.quiz.forEach((quiz,i)=>assert.equal(quiz.options[quiz.answer],expected[i]));
  assert.match(data.chapters[1].script,/distance from the center/);
  assert.match(data.chapters[3].script,/not a universal exact bar-magnet formula/);
});
