import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-magnetic-forces-lecture.json'));

test('Magnetic force chapters preserve complete captions and separate audio',()=>{
  const timing=JSON.parse(read('app/data/jee-magnetic-forces-timings.json'));
  assert.equal(data.chapters.length,5); assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/magnetic-forces/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/magnetic-forces/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('Charged-particle examples satisfy vector, orbit and selector constraints',()=>{
  const near=(a,b)=>assert.ok(Math.abs(a-b)<Math.abs(b)*1e-10+1e-20);
  const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  cross([1,0,0],[0,0,-1]).forEach((component,i)=>near(component,[0,1,0][i]));
  const m=1.67e-27,q=1.60e-19,B=0.2,v=1e6;
  const r=m*v/(q*B),T=2*Math.PI*m/(q*B);
  near(r,0.0521875); near(T,3.2790373321843464e-7);
  near(q*v*B,m*v*v/r); near(2*Math.PI*(2*r)/(2*v),T);
  const theta=Math.PI/6,perp=v*Math.sin(theta),parallel=v*Math.cos(theta);
  near(m*perp/(q*B),r/2); near(perp*perp+parallel*parallel,v*v);
  near(parallel*T,0.28397296296291974);
  near(2e-6*300*0.5,3e-4); near(6000/0.020,3e5);
  const expected=['Upward','Kinetic energy','Twice radius and same period','5.22 cm','v_parallel T','3.0 x 10^5 m/s'];
  data.quiz.forEach((quiz,i)=>assert.equal(quiz.options[quiz.answer],expected[i]));
  assert.match(data.chapters[1].script,/radiation neglected/);
  assert.match(data.chapters[3].script,/no actual circular orbit/);
});
