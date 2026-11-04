import test from'node:test';import assert from'node:assert/strict';import fs from'node:fs';import{createHash}from'node:crypto';
const d=JSON.parse(fs.readFileSync('app/data/neet-structural-organisation-lecture.json'));const answer=i=>d.quiz[i].options[d.quiz[i].answer];
test('plant organs and anatomical comparisons avoid common misidentifications',()=>{
 assert.equal(answer(0),'Adventitious root');assert.equal(answer(2),'Buds on a stem tuber');assert.match(answer(4),/lacks its own axillary bud/);assert.match(answer(11),/Parietal despite/);assert.equal(answer(12),'Single cotyledon');assert.equal(answer(18),'Xylem parenchyma');assert.match(answer(19),/Living and enucleate/);assert.equal(answer(20),'Exarch');assert.equal(answer(22),'Cambium between xylem and phloem');assert.equal(answer(23),'Toward the inside');
});
test('all five prescribed families retain diagnostic distinctions and exceptions',()=>{
 for(const[i,name]of [[13,'Hibiscus'],[14,'Brassicaceae'],[15,'Leguminosae'],[16,'Compositae'],[17,'Gramineae']])assert.ok(d.chapters[i].script.includes(name));
 assert.match(answer(26),/filaments forming a tube/);assert.equal(answer(28),'Six stamens, four long and two short');assert.match(answer(31),/Monocarpellary with marginal/);assert.equal(answer(32),'United anthers and free filaments');assert.equal(answer(33),'Cypsela');assert.equal(answer(34),'Lemma and palea');assert.match(answer(35),/Rice commonly has six/);
 assert.match(d.chapters[15].script,/not every legume has the exact pea flower/);assert.match(d.chapters[16].script,/not apply the fertility condition/);
});
test('insect and frog accounts distinguish respiratory, reproductive and tissue systems',()=>{
 assert.equal(answer(38),'Muscle to bone');assert.equal(answer(40),'Cardiac muscle');assert.equal(answer(42),'Three');assert.match(answer(45),/Excretory structures/);assert.equal(answer(46),'Tracheae and tracheoles');assert.equal(answer(47),'Ventral with segmental ganglia');assert.equal(answer(48),'Protective egg case');assert.match(answer(49),/without a pupal stage/);assert.equal(answer(52),'Two atria and one ventricle');assert.match(answer(53),/Tadpoles use gills/);assert.equal(answer(54),'External in water');
 assert.match(d.chapters[21].script,/insect and a frog/);assert.match(d.scope,/Further practical specimen identification/);assert.ok(d.sources.some(x=>x.title.includes('clarifying insect and frog')));
});
test('structural recording audio fingerprints and captions match every authored chapter',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/neet-structural-organisation-timings.json'));assert.equal(d.chapters.length,28);assert.equal(d.quiz.length,56);assert.equal(t.chapters.length,28);assert.ok(t.duration>1200&&t.duration<3000);const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
 for(const[i,c]of d.chapters.entries()){
  assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.points.length,4);const stem='public/lectures/neet-structural-organisation/chapter-'+String(i+1).padStart(2,'0');assert.ok(fs.statSync(stem+'.mp3').size>100000);
  const hash=createHash('sha256').update(JSON.stringify({script:c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);
  const ch=t.chapters[i];assert.ok(ch.end>ch.start);if(i)assert.equal(ch.start,t.chapters[i-1].end);const cues=t.cues.filter(x=>x.chapter===i);assert.equal(normalize(cues.map(x=>x.text).join(' ')),normalize(c.script));assert.ok(cues.length>10);
  for(const[j,cue]of cues.entries()){assert.ok(cue.end>cue.start&&cue.start>=ch.start&&cue.end<=ch.end+.001);assert.ok(cue.text.length<=100);if(j)assert.ok(cue.start>=cues[j-1].end-.02);}
 }
});
test('structural progress, boards and quiz answers are isolated and valid',()=>{
 const lesson=fs.readFileSync('app/neet/classes/structural-lesson.ts','utf8'),diagram=fs.readFileSync('app/neet/classes/structural-diagram.tsx','utf8'),page=fs.readFileSync('app/neet/classes/structural-organisation/page.tsx','utf8');assert.match(lesson,/neet\.structural-organisation\.lecture\.v1/);assert.match(page,/exam="NEET"/);assert.doesNotMatch(diagram,/neet-structural-organisation-lecture\.json|structural-lesson/);
 for(const q of d.quiz){assert.equal(new Set(q.options).size,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation.length>15);}for(let i=0;i<4;i++)assert.equal(d.quiz.filter(q=>q.answer===i).length,14);
});
