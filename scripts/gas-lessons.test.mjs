import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const lesson=id=>JSON.parse(read(`app/data/jee-${id}-lecture.json`));

for(const id of ['thermodynamics','kinetic-theory'])test(`${id} preserves scripts with bounded captions and five audio chapters`,()=>{
  const data=lesson(id),timing=JSON.parse(read(`app/data/jee-${id}-timings.json`));
  assert.equal(data.chapters.length,5);
  assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.ok(cues.length>5);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/${id}/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read(`public/lectures/${id}/english.vtt`).match(/-->/g)||[]).length,timing.cues.length);
});

test('thermodynamic examples obey signs and process assumptions',()=>{
  assert.equal(600-250,350);
  assert.equal(2e5*(3-1)*1e-3,400);
  assert.equal(Math.round(1000*Math.log(2)),693);
  assert.ok(Math.abs(400*(1/8)**(5/3-1)-100)<1e-10);
  assert.equal((1000-700)/1000,0.3);
  const answers=['350 J','400 J','693 J','100 K','30 percent'];
  lesson('thermodynamics').quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
  assert.match(lesson('thermodynamics').chapters[3].script,/reversible/);
  assert.match(lesson('thermodynamics').chapters[3].script,/freely expanding into a vacuum/);
});

test('kinetic examples distinguish molecule counts, molar masses and active modes',()=>{
  assert.ok(Math.abs(8.314*300/0.025-99768)<1e-8);
  assert.equal(Math.sqrt(1200/300),2);
  assert.ok(Math.abs(Math.sqrt(3*8.314*300/0.028)-516.939)<0.01);
  assert.ok(Math.abs(2*1.5*8.314*10-249.42)<1e-10);
  assert.equal(1e5*(1-3)*1e-3,-200);
  const answers=['9.98 x 10^4 Pa','Translational kinetic energy per particle','Twice the original','249.42 J','Half the original'];
  lesson('kinetic-theory').quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
  assert.match(lesson('kinetic-theory').chapters[3].script,/freeze out/);
});
