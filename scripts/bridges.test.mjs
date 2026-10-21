import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-bridges-lecture.json'));

test('bridge chapters retain complete bounded captions and separate recordings',()=>{
  const timing=JSON.parse(read('app/data/jee-bridges-timings.json'));
  assert.equal(data.chapters.length,5); assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/bridges/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/bridges/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('bridge examples independently satisfy equal-potential and length constraints',()=>{
  const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10);
  const P=2,Q=3,R=4,S=Q*R/P,voltage=10;
  const iu=voltage/(P+Q),il=voltage/(R+S);
  near(S,6); near(iu*P,il*R); near(voltage-iu*P,6);
  near(voltage-il*R,6); near(iu+il,3);
  const L=100,l=40,standard=3,unknown=standard*l/(L-l);
  near(unknown,2);
  near(L*standard/(standard+unknown),60);
  const replaced=1/(1/unknown+1/2);
  near(replaced,1); near(L*replaced/(replaced+standard),25);
  near(L*0.1/(40*60)*100,5/12);
  assert.ok(L*0.1/(5*95)>L*0.1/(40*60));
  const expected=['The detector midpoints have equal potential','6 ohm','6 V','2 ohm','60 cm','25 cm'];
  data.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],expected[i]));
  assert.match(data.chapters[2].script,/distance l from the left end/);
  assert.match(data.chapters[0].script,/broken detector circuit/);
  assert.match(data.chapters[4].script,/treating the standard and total length as exact/);
});
