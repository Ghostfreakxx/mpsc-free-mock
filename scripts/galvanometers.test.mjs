import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-galvanometers-lecture.json'));

test('Galvanometer recordings preserve complete synchronized chapter captions',()=>{
  const timing=JSON.parse(read('app/data/jee-galvanometers-timings.json'));
  assert.equal(data.chapters.length,5); assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/galvanometers/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/galvanometers/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('Meter examples independently satisfy torque balance, branch laws and loading',()=>{
  const near=(a,b)=>assert.ok(Math.abs(a-b)<Math.abs(b)*1e-10+1e-20);
  const N=100,A=2e-4,B=0.2,c=4e-6,G=100;
  const currentSensitivity=N*A*B/c,voltageSensitivity=currentSensitivity/G;
  near(currentSensitivity,1000); near(voltageSensitivity,10);
  near(currentSensitivity*0.0005,0.5); near(0.0005*G,0.05);
  near(c*0.5,N*A*B*0.0005);
  near((2*N)*A*B/c,2*currentSensitivity);
  near((2*N)*A*B/(c*2*G),voltageSensitivity);
  const Ig=0.001,I=1,S=Ig*G/(I-Ig),parallel=(a,b)=>a*b/(a+b);
  near(S,100/999); near((I-Ig)*S,Ig*G);
  const Ra=parallel(G,S); near(Ra,0.1); near(I*Ra,0.1);
  const V=10,R=V/Ig-G,Rv=G+R;
  near(R,9900); near(Rv,10000); near(V/Rv,Ig);
  near(Ig*G+Ig*R,V); near(20/Ig-G,19900);
  near(10/(10+Ra),100/101);
  const effective=parallel(10000,Rv);
  near(effective,5000); near(10*effective/(10000+effective),10/3);
  near(10*10000/(10000+10000),5);
  assert.ok(10*parallel(10000,1e7)/(10000+parallel(10000,1e7))>4.99);
  const expected=["The coil normal remains perpendicular to local B, so magnetic torque is NIAB","1000 rad/A","Current sensitivity doubles; voltage sensitivity stays unchanged","0.1001 ohms in parallel","9900 ohms in series","Approximately 3.33 V"];
  data.quiz.forEach((quiz,i)=>assert.equal(quiz.options[quiz.answer],expected[i]));
  assert.match(data.chapters[0].script,/not uniform in direction/);
  assert.match(data.chapters[2].script,/complete ammeter is connected in series/);
  assert.match(data.chapters[3].script,/complete voltmeter is externally in parallel/);
});
