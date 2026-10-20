import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-magnetic-materials-lecture.json'));

test('Magnetic materials retain all chapter audio and complete ordered English captions',()=>{
  const timing=JSON.parse(read('app/data/jee-magnetic-materials-timings.json'));
  assert.equal(data.chapters.length,5); assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/magnetic-materials/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/magnetic-materials/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('Material examples preserve susceptibility signs, Kelvin scaling and response-model limits',()=>{
  const near=(a,b)=>assert.ok(Math.abs(a-b)<Math.abs(b)*1e-10+1e-20);
  near(0.002*500,1); near(-4e-5*2000,-0.08); near(1-4e-5,0.99996);
  const C=0.003*300; near(C/600,0.0015);
  near(C/300*800,2.4); near(C/600*800,1.2);
  near(0.01*1000,10);
  const mu0=4*Math.PI*1e-7;
  near(mu0*1.01*1000,0.0012692034320502765);
  near((mu0*1.01*1000)/(mu0*1000),1.01);
  const expected=['1 A/m along H','0.99996','0.0015','Different domain magnetisations can largely cancel','Paramagnetic, not magnetically unresponsive','1.269 mT'];
  assert.equal(data.quiz.length,6);
  data.quiz.forEach((quiz,i)=>assert.equal(quiz.options[quiz.answer],expected[i]));
  assert.match(data.chapters[0].script,/internal H/);
  assert.match(data.chapters[1].script,/nonuniform external field/);
  assert.match(data.chapters[2].script,/not a universal law for every paramagnet/);
  assert.match(data.chapters[3].script,/nonlinear and depends on magnetic history/);
  assert.match(data.chapters[4].script,/does not become incapable of responding/);
});
