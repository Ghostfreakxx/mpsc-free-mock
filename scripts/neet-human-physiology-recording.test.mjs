import test from'node:test';import assert from'node:assert/strict';import fs from'node:fs';import{createHash}from'node:crypto';
const d=JSON.parse(fs.readFileSync('app/data/neet-human-physiology-lecture.json'));const answer=i=>d.quiz[i].options[d.quiz[i].answer];
test('respiratory and circulatory examples preserve directions, quantities and electrical distinctions',()=>{
 assert.equal(answer(2),'Lower than atmospheric pressure');assert.equal(answer(4),'IRV + TV + ERV');assert.equal(answer(5),'Residual volume');assert.equal(answer(6),'Bound to haemoglobin');assert.equal(answer(7),'Bicarbonate');assert.equal(answer(14),'Fibrinogen to fibrin');assert.equal(answer(16),'From lungs toward the left atrium');assert.equal(answer(17),'Left atrium and left ventricle');assert.equal(answer(20),'Ventricular depolarization');assert.equal(answer(21),'4.9 L/min');assert.equal(70*70/1000,4.9);assert.match(answer(22),/^Incorrect/);
 assert.match(d.chapters[6].script,/Red cell compatibility is not identical to plasma compatibility/);assert.match(d.chapters[10].script,/Electrical activation precedes/);
});
test('kidney and movement comparisons retain transport direction and mechanical invariants',()=>{
 assert.equal(answer(26),'Efferent arteriole');assert.match(answer(28),/^From tubular fluid toward blood/);assert.match(answer(29),/^Filtered and then/);assert.match(answer(30),/^Low water permeability/);assert.equal(answer(32),'Hypothalamic neurons');assert.equal(answer(34),'ADH-related water conservation');assert.equal(answer(37),'Remains approximately constant');assert.equal(answer(38),'Troponin');assert.equal(answer(39),'Detach it from actin');assert.equal(answer(40),'80 and 126');assert.equal(80+126,206);assert.equal(answer(44),'Monosodium urate crystals');
 assert.match(d.chapters[15].script,/not concentrate urine by actively pumping water/);assert.match(d.chapters[19].script,/individual lengths do not simply shrink/);
});
test('neural and endocrine answers distinguish synthesis, receptor and developmental timing',()=>{
 assert.equal(answer(46),'3 Na+ out and 2 K+ in');assert.equal(answer(48),'Na+ entry through voltage-gated channels');assert.equal(answer(49),'Nodes of Ranvier');assert.equal(answer(50),'Ca2+ entry');assert.equal(answer(54),'Toward the CNS');assert.match(answer(57),/intracellular nuclear receptor/);assert.equal(answer(58),'Milk production and milk ejection');assert.equal(answer(62),'Adrenal medulla and cortex');assert.equal(answer(64),'Insulin and glucagon');assert.equal(answer(68),'Acromegaly');assert.match(answer(69),/without specifying hormone level/);assert.equal(answer(70),'Primary adrenal insufficiency');
 assert.match(d.chapters[29].script,/not be described as their main synthesis site/);assert.match(d.chapters[34].script,/Not every short stature has that cause/);
});
test('all prescribed disorder groups are present without claiming personal diagnosis or complete mastery',()=>{
 const text=d.chapters.map(c=>c.script).join(' ').toLowerCase();for(const term of ['asthma','emphysema','occupational','hypertension','coronary artery disease','angina pectoris','heart failure','uraemia','nephritis','calculi','dialysis','myasthenia gravis','tetany','muscular dystrophies','arthritis','osteoporosis','gout','gigantism','acromegaly','congenital hypothyroidism','goitre','graves','diabetes mellitus','diabetes insipidus','addison'])assert.ok(text.includes(term),term);
 assert.match(d.scope,/Further numerical problems, labelled diagrams, experiments and mixed physiological cases remain/);assert.match(d.chapters[34].script,/historically described/);assert.match(d.chapters[35].script,/not simply an absence of adrenal medullary adrenaline/);
});
test('human physiology audio provenance and readable captions match every authored chapter',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/neet-human-physiology-timings.json'));assert.equal(d.chapters.length,36);assert.equal(d.quiz.length,72);assert.equal(t.chapters.length,36);assert.ok(t.duration>1800&&t.duration<4000);const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
 for(const[i,c]of d.chapters.entries()){
  assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.points.length,4);const stem='public/lectures/neet-human-physiology/chapter-'+String(i+1).padStart(2,'0');assert.ok(fs.statSync(stem+'.mp3').size>100000);
  const hash=createHash('sha256').update(JSON.stringify({script:c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);
  const ch=t.chapters[i];assert.ok(ch.end>ch.start);if(i)assert.equal(ch.start,t.chapters[i-1].end);const cues=t.cues.filter(x=>x.chapter===i);assert.equal(normalize(cues.map(x=>x.text).join(' ')),normalize(c.script));assert.ok(cues.length>10);
  for(const[j,cue]of cues.entries()){assert.ok(cue.end>cue.start&&cue.start>=ch.start&&cue.end<=ch.end+.001);assert.ok(cue.text.length<=100);if(j)assert.ok(cue.start>=cues[j-1].end-.02);}
 }
});
test('human physiology progress, diagram payload and answer options remain isolated',()=>{
 const lesson=fs.readFileSync('app/neet/classes/human-physiology-lesson.ts','utf8'),diagram=fs.readFileSync('app/neet/classes/human-physiology-diagram.tsx','utf8'),page=fs.readFileSync('app/neet/classes/human-physiology/page.tsx','utf8');assert.match(lesson,/neet\.human-physiology\.lecture\.v1/);assert.match(page,/exam="NEET"/);assert.doesNotMatch(diagram,/neet-human-physiology-lecture\.json|human-physiology-lesson/);
 for(const q of d.quiz){assert.equal(new Set(q.options).size,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation.length>15);}for(let i=0;i<4;i++)assert.equal(d.quiz.filter(q=>q.answer===i).length,18);
});
