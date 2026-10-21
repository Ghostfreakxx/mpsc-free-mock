import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-loop-torque-lecture.json'));

test('Loop torque retains complete bounded captions and separate chapter recordings',()=>{
  const timing=JSON.parse(read('app/data/jee-loop-torque-timings.json'));
  assert.equal(data.chapters.length,5); assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/loop-torque/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/loop-torque/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('Loop torque examples preserve couples, angle definitions, work and fixed-wire constraints',()=>{
  const near=(a,b)=>assert.ok(Math.abs(a-b)<Math.abs(b)*1e-10+1e-20);
  const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  const vectorNear=(a,b)=>a.forEach((v,i)=>near(v,b[i]));
  const I=0.5,a=0.2,b=0.3,B=0.4,force=I*b*B;
  const left=[0,0,force],right=[0,0,-force];
  vectorNear(left.map((v,i)=>v+right[i]),[0,0,0]);
  const t1=cross([-a/2,0,0],left),t2=cross([a/2,0,0],right);
  vectorNear(t1.map((v,i)=>v+t2[i]),[0,I*a*b*B,0]);
  vectorNear(cross([0,0,1],[1,0,0]),[0,1,0]);
  const mu=100*0.2*40*1e-4,k=mu*0.5;
  near(mu,0.08); near(k,0.04); near(k*Math.sin(Math.PI/6),0.02);
  near(k*Math.cos(Math.PI/3),0.02);
  near(k*Math.sin(Math.PI/3),Math.sqrt(3)*0.02);
  const energy=t=>-k*Math.cos(t),torque=t=>-k*Math.sin(t);
  near(energy(2*Math.PI/3)-energy(Math.PI/3),0.04);
  near(energy(Math.PI)-energy(0),0.08);
  assert.ok(energy(0.001)>energy(0)); assert.ok(energy(Math.PI+0.001)<energy(Math.PI));
  assert.ok(torque(0.001)<0); assert.ok(torque(Math.PI+0.001)>0);
  const ell=0.4,current=2,square=current*(ell/4)**2;
  const circle=turns=>turns*current*Math.PI*(ell/(turns*2*Math.PI))**2;
  near(square,0.02); near(circle(1),0.08/Math.PI);
  near(circle(1)/square,4/Math.PI); near(circle(2),circle(1)/2);
  const expected=['Plane is parallel to B','Out of the page','0.020 N m','Zero torque and unstable equilibrium','+0.040 J','4/pi'];
  data.quiz.forEach((quiz,i)=>assert.equal(quiz.options[quiz.answer],expected[i]));
  assert.match(data.chapters[3].script,/electrical source participates/);
  assert.match(data.chapters[4].script,/changes A while changing N/);
});
