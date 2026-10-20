import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=JSON.parse(read('app/data/jee-kirchhoff-laws-lecture.json'));

test('Kirchhoff chapters retain complete bounded captions and independent recordings',()=>{
  const timing=JSON.parse(read('app/data/jee-kirchhoff-laws-timings.json'));
  assert.equal(data.chapters.length,5); assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/kirchhoff-laws/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read('public/lectures/kirchhoff-laws/english.vtt').match(/-->/g)||[]).length,timing.cues.length);
});

test('Kirchhoff worked circuit independently satisfies junction, loop and power equations',()=>{
  const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10);
  const e1=12,e2=6,r1=2,r2=2,load=4;
  const voltage=(e1/r1+e2/r2)/(1/r1+1/r2+1/load);
  const i1=(e1-voltage)/r1,i2=(e2-voltage)/r2,i3=voltage/load;
  near(voltage,7.2); near(i1,2.4); near(i2,-0.6); near(i3,1.8);
  near(i1+i2,i3); near(e1-r1*i1-load*i3,0); near(e2-r2*i2-load*i3,0);
  const heat=i1**2*r1+i2**2*r2+i3**2*load;
  near(heat,25.2); near(e1*i1+e2*i2,heat); near(-e2*i2,3.6);
  const expected=['3 A','-IR','+E','7.2 V','A to B at 0.6 A','Absorbs 3.6 W'];
  data.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],expected[i]));
  assert.match(data.chapters[2].script,/positive terminal toward A/);
  assert.match(data.chapters[3].script,/current in the six volt branch travels from A to B/);
  assert.match(data.chapters[1].script,/no changing magnetic flux/);
});
