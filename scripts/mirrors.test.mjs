import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-mirrors-lecture.json'));

test('Mirrors retain five recordings and complete bounded English captions',()=>{
  const timing=JSON.parse(read('app/data/jee-mirrors-timings.json'));
  assert.equal(data.chapters.length,5); assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/mirrors/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i) assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/mirrors/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('Mirror examples independently satisfy Cartesian imaging and ray intersections',()=>{
  const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-9);
  const solve=(u,f)=>{const v=1/(1/f-1/u);return {v,m:-v/u};};
  const real=solve(-30,-10),virtual=solve(-5,-10),convex=solve(-30,15);
  near(real.v,-15);near(real.m,-0.5);near(virtual.v,10);near(virtual.m,2);
  near(convex.v,10);near(convex.m,1/3);
  near(solve(-15,15).v,7.5);near(solve(-15,15).m,0.5);
  near(solve(-20,Infinity).v,20);near(solve(-20,Infinity).m,1);
  assert.equal(1/(-10)-1/(-10),0);
  near(90-60,30);near(20+20,40);near(-20/2,-10);
  const ordinate=(x,a,b)=>a[1]+(x-a[0])*(b[1]-a[1])/(b[0]-a[0]);
  near(ordinate(200,[350,134],[250,170]),188);
  near(ordinate(200,[350,170],[156,193.28]),188);
  near(ordinate(340,[220,150],[40,187.5]),125);
  near(ordinate(340,[220,175],[40,250]),125);
  near(ordinate(310,[250,121],[160,67]),157);
  near(ordinate(310,[250,175],[70,229]),157);
  const expected=['30 degrees','40 cm','-10 cm','v = -15 cm; m = -0.5','Virtual, upright, twice as tall','v = +10 cm; upright, one-third size'];
  data.quiz.forEach((quiz,i)=>assert.equal(quiz.options[quiz.answer],expected[i]));
  assert.match(data.chapters[1].script,/paraxial approximation/);
  assert.match(data.chapters[1].script,/do not borrow their signs/);
  assert.match(data.chapters[3].script,/no finite image distance/);
  assert.match(data.chapters[4].script,/virtual object.*separate analysis/);
  const diagram=read('app/jee/classes/mirrors-diagram.tsx');
  assert.ok(diagram.includes('M70 121 H250 L160 67'));
  assert.ok(diagram.includes('M50 134 H350 L156 203.84'));
  const route=read('app/jee/classes/mirrors/page.tsx');
  assert.match(route,/LecturePlayer/);assert.match(route,/lesson.id === "mirrors"/);
});
