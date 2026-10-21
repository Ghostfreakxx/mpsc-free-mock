import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-wire-forces-lecture.json'));

test('Wire forces retain complete bounded captions and independently replaceable audio',()=>{
  const timing=JSON.parse(read('app/data/jee-wire-forces-timings.json'));
  assert.equal(data.chapters.length,5); assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/wire-forces/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/wire-forces/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('Wire-force examples preserve vector signs, endpoint sums and equilibrium stability',()=>{
  const near=(a,b)=>assert.ok(Math.abs(a-b)<Math.abs(b)*1e-10+1e-20);
  const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  const vectorNear=(a,b)=>a.forEach((v,i)=>near(v,b[i]));
  vectorNear(cross([1,0,0],[0,0,-1]),[0,1,0]);
  vectorNear(cross([-1,0,0],[0,0,-1]),[0,-1,0]);
  vectorNear(cross([-1,0,0],[0,0,1]),[0,1,0]);
  near(3*0.4*0.2*Math.sin(Math.PI/6),0.12);
  near(0.012*10/(0.3*0.4),1);
  const endpoints=[[-0.1,0,0],[0,0.1,0],[0.1,0,0]];
  const sum=[0,0,0];
  for(let i=1;i<endpoints.length;i++){
    const force=cross(endpoints[i].map((v,j)=>v-endpoints[i-1][j]),[0,0,-0.2]);
    force.forEach((v,j)=>sum[j]+=3*v);
  }
  vectorNear(sum,[0,0.12,0]);
  const closing=cross(endpoints[0].map((v,j)=>v-endpoints.at(-1)[j]),[0,0,-0.2]);
  vectorNear(sum.map((v,j)=>v+3*closing[j]),[0,0,0]);
  const k=2e-7;
  near(k*5*8/0.04,2e-4); near(k*5*8/0.04*0.2,4e-5);
  const x=4*0.25/(4+6),net=p=>k*2*(6/(0.25-p)-4/p);
  near(x,0.1); near(k*4*2/x,1.6e-5); near(net(x),0);
  assert.ok(net(x+0.001)>0); assert.ok(net(x-0.001)<0);
  const expected=['Upward','0.12 N','1 A rightward','Zero, although torque can be nonzero','2 x 10^-4 N/m, attractive','0.10 m, unstable laterally'];
  data.quiz.forEach((quiz,i)=>assert.equal(quiz.options[quiz.answer],expected[i]));
  assert.match(data.chapters[2].script,/external field is uniform/);
  assert.match(data.chapters[3].script,/axis separation/);
  assert.match(data.chapters[4].script,/outer wires and currents stay fixed/);
});
