import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { physicsCoverage } from '../app/jee/classes/physics-coverage.ts';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const lesson=id=>JSON.parse(read(`app/data/jee-${id}-lecture.json`));

for(const id of ['calorimetry','heat-transfer'])test(`${id} has complete scripts, bounded captions and five audio chapters`,()=>{
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

test('calorimetry keys match energy balances and phase checks',()=>{
  assert.equal(0.5*4200*10,21000);
  assert.equal((0.2*80+0.3*20)/0.5,44);
  assert.equal(0.1*400*70,2800);
  assert.equal(0.1*2100*10+0.1*334000+0.1*4200*20,43900);
  assert.ok(0.1*4200*20<0.05*334000);
  assert.equal((8400/334000*1000).toFixed(2),'25.15');
  const answers=['21 kJ','44 C','2800 J','43.9 kJ','Ice and water at 0 C'];
  lesson('calorimetry').quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
});

test('heat-transfer keys match conduction, radiation and cooling calculations',()=>{
  assert.equal(0.5*2*20/0.1,200);
  assert.equal(80-(80-30)/(0.2+0.3)*0.2,60);
  assert.ok(Math.abs(5.67e-8*0.1*(400**4-300**4)-99.225)<1e-10);
  assert.equal((60-20)/(40-20),2);
  const answers=['Radiation','200 W','60 C','99.225 W','2:1'];
  lesson('heat-transfer').quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[i]));
});

test('all twenty Physics units retain explicit gaps and published route mappings',()=>{
  assert.equal(physicsCoverage.length,20);
  const ids=physicsCoverage.flatMap(unit=>unit.recordings);
  assert.equal(new Set(ids).size,ids.length);
  assert.ok(ids.length>=14);
  for(const unit of physicsCoverage)assert.ok(unit.remaining.length>0);
  for(const id of ids)assert.ok(fs.existsSync(new URL(`../app/jee/classes/${id}/page.tsx`,import.meta.url)));
});
