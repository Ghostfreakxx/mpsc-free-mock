import test from'node:test';import assert from'node:assert/strict';import fs from'node:fs';import{createHash}from'node:crypto';
const d=JSON.parse(fs.readFileSync('app/data/neet-plant-physiology-lecture.json'));const answer=i=>d.quiz[i].options[d.quiz[i].answer];
test('photosynthetic electron, carbon and proton pathways remain distinct',()=>{
 assert.equal(answer(0),'Water');assert.equal(answer(1),'Stroma');assert.equal(answer(4),'PSII');assert.equal(answer(5),'Thylakoid lumen');assert.match(answer(6),/ATP without net NADPH/);assert.match(answer(8),/^From lumen to stroma/);assert.equal(answer(10),'Five-carbon RuBP');assert.equal(answer(11),'9 ATP and 6 NADPH');assert.equal(answer(12),'Bicarbonate');assert.match(answer(13),/^Retains the Calvin cycle/);assert.equal(answer(14),'One 3-PGA and one 2-phosphoglycolate');assert.match(answer(19),/rather than all metabolism stops/);
 assert.match(d.chapters[6].script,/two additional ATP equivalents/);assert.match(d.chapters[0].script,/does not mean it normally operates only at night/);
});
test('respiratory yields preserve the reference amount and explicit ATP conventions',()=>{
 assert.equal(answer(22),'2 ATP');assert.equal(answer(23),'None');assert.equal(answer(24),'NAD+');assert.equal(answer(27),'Zero');assert.equal(answer(28),'3 NADH, 1 FADH2 and 1 ATP equivalent');assert.equal(answer(29),'Regenerated');assert.equal(answer(30),'Oxygen');assert.equal(answer(31),'Complex II');assert.equal(answer(32),'Matrix');assert.match(answer(34),/^38 ATP/);assert.equal(answer(38),'1');
 const perGlucose={nadh:2+2+2*3,fadh2:2*1,substrate:2+2*1};assert.equal(perGlucose.nadh*3+perGlucose.fadh2*2+perGlucose.substrate,38);assert.equal(perGlucose.nadh*2.5+perGlucose.fadh2*1.5+perGlucose.substrate,32);
 assert.match(d.chapters[17].script,/different shuttle arrangements/);assert.match(d.chapters[17].script,/Plant mitochondrial alternative electron routes/);assert.match(answer(39),/Photosynthetic fluxes/);
});
test('growth and all five regulator groups retain their contextual limits',()=>{
 assert.match(answer(40),/^Incorrect/);assert.equal(answer(41),'Stored seed reserves');assert.equal(answer(44),'Equal absolute gains but different proportional gains');assert.equal(answer(45),'Proportional to existing size');assert.match(answer(48),/suitable living differentiated cells/);assert.equal(answer(50),'Tissue, concentration and developmental context');assert.match(answer(52),/aleurone/);assert.equal(answer(54),'Shoot formation');assert.equal(answer(56),'Gaseous plant regulator');assert.equal(answer(58),'Stomatal closure');assert.match(answer(59),/^Incorrect/);
 for(const[i,term]of [[25,'Indole acetic acid'],[26,'GA three'],[27,'Zeatin'],[28,'gaseous'],[29,'ABA']])assert.ok(d.chapters[i].script.includes(term));
 assert.match(d.chapters[27].script,/not a universal numerical recipe/);assert.match(d.scope,/Further mixed graphs, inhibitor problems, experiments/);
});
test('plant physiology audio fingerprints and captions match every authored chapter',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/neet-plant-physiology-timings.json'));assert.equal(d.chapters.length,31);assert.equal(d.quiz.length,62);assert.equal(t.chapters.length,31);assert.ok(t.duration>1500&&t.duration<3500);const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
 for(const[i,c]of d.chapters.entries()){
  assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.points.length,4);const stem='public/lectures/neet-plant-physiology/chapter-'+String(i+1).padStart(2,'0');assert.ok(fs.statSync(stem+'.mp3').size>100000);
  const hash=createHash('sha256').update(JSON.stringify({script:c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);
  const ch=t.chapters[i];assert.ok(ch.end>ch.start);if(i)assert.equal(ch.start,t.chapters[i-1].end);const cues=t.cues.filter(x=>x.chapter===i);assert.equal(normalize(cues.map(x=>x.text).join(' ')),normalize(c.script));assert.ok(cues.length>10);
  for(const[j,cue]of cues.entries()){assert.ok(cue.end>cue.start&&cue.start>=ch.start&&cue.end<=ch.end+.001);assert.ok(cue.text.length<=100);if(j)assert.ok(cue.start>=cues[j-1].end-.02);}
 }
});
test('plant physiology progress, diagram payload and quiz options stay isolated',()=>{
 const lesson=fs.readFileSync('app/neet/classes/plant-physiology-lesson.ts','utf8'),diagram=fs.readFileSync('app/neet/classes/plant-physiology-diagram.tsx','utf8'),page=fs.readFileSync('app/neet/classes/plant-physiology/page.tsx','utf8');assert.match(lesson,/neet\.plant-physiology\.lecture\.v1/);assert.match(page,/exam="NEET"/);assert.doesNotMatch(diagram,/neet-plant-physiology-lecture\.json|plant-physiology-lesson/);
 for(const q of d.quiz){assert.equal(new Set(q.options).size,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation.length>15);}for(let i=0;i<4;i++)assert.equal(d.quiz.filter(q=>q.answer===i).length,Math.floor((d.quiz.length+3-i)/4));
});
