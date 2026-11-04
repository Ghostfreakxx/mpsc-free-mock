import test from'node:test';import assert from'node:assert/strict';import fs from'node:fs';import{createHash}from'node:crypto';
const d=JSON.parse(fs.readFileSync('app/data/neet-human-welfare-lecture.json'));const answer=i=>d.quiz[i].options[d.quiz[i].answer];
test('disease comparisons retain pathogen, vector and transmission distinctions',()=>{
 assert.equal(answer(2),'Plasmodium and female Anopheles');assert.equal(answer(3),'Mosquito host');assert.equal(answer(4),'Filarial nematodes');assert.equal(answer(6),'A nematode and a protozoan parasite');assert.equal(answer(7),'Infective eggs');assert.equal(answer(8),'Salmonella Typhi');assert.equal(answer(9),'A bacterium despite its name');assert.equal(answer(10),'Dermatophyte fungi');assert.match(answer(12),/^Different viruses/);assert.match(answer(13),/^Vectors/);
 assert.match(d.chapters[4].script,/Pneumonia is not caused by only one organism/);assert.match(d.chapters[6].script,/outdated universal claim that no preventive vaccines can exist/);
});
test('immune, cancer and substance examples avoid mechanism and stigma errors',()=>{
 assert.match(answer(14),/^Signaling proteins/);assert.equal(answer(16),'B-cell lineages');assert.equal(answer(18),'Two heavy and two light chains');assert.equal(answer(19),'Immune memory');assert.match(answer(20),/^Existing protective molecules/);assert.match(answer(21),/^Incorrect/);assert.equal(answer(22),'Self components');assert.match(answer(24),/^Related but not identical/);assert.match(answer(25),/^Incorrect/);assert.match(answer(26),/^Spread of malignant cells/);assert.equal(answer(30),'Psychoactive CNS depressant');assert.equal(answer(33),'Erythroxylum coca');
 assert.match(d.chapters[12].script,/does not occur through ordinary social contact/);assert.match(d.chapters[14].script,/not be reduced to a moral label/);
});
test('microbial welfare examples preserve producer, product and ecological roles',()=>{
 assert.match(answer(34),/^Acidification/);assert.equal(answer(36),'Yeast fungus');assert.equal(answer(37),'Carbon dioxide');assert.match(answer(38),/^Propionibacterium/);assert.equal(answer(40),'Citric acid');assert.equal(answer(41),'Acetic acid');assert.equal(answer(42),'Trichoderma polysporum');assert.equal(answer(43),'Statin production');assert.equal(answer(50),'Archaea');assert.equal(answer(52),'Aphids');assert.equal(answer(58),'Suitable legume root nodules');assert.equal(answer(59),'Fern');assert.equal(answer(61),'Glomus');
 assert.match(d.chapters[21].script,/Monascus purpureus, a fungus/);assert.match(d.chapters[25].script,/older teaching language/);
});
test('treatment-stage and official-heading coverage preserve measurement limits',()=>{
 assert.equal(answer(46),'Physical screening and settling');assert.match(answer(47),/^The liquid stream/);assert.match(answer(48),/^Microbial aggregates/);assert.match(answer(49),/^Greater microbial oxygen demand/);assert.match(answer(51),/^Incorrect/);assert.match(answer(62),/^Incorrect/);
 const text=d.chapters.map(c=>c.title+' '+c.script).join(' ').toLowerCase();for(const term of ['malaria','filariasis','ascariasis','typhoid','pneumonia','common cold','amoebiasis','ringworm','dengue','chikungunya','vaccin','cancer','hiv','adolescen','alcohol','tobacco','household','industrial','sewage','biogas','biocontrol','biofertilizer'])assert.ok(text.includes(term),term);
 assert.match(d.scope,/Further life-cycle diagrams, experimental data and mixed health\/environmental cases remain/);assert.match(d.chapters[24].script,/low BOD alone does not certify/);
});
test('human welfare audio provenance and readable captions match every authored chapter',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/neet-human-welfare-timings.json'));assert.equal(d.chapters.length,32);assert.equal(d.quiz.length,64);assert.equal(t.chapters.length,32);assert.ok(t.duration>1600&&t.duration<3700);const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
 for(const[i,c]of d.chapters.entries()){
  assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.points.length,4);const stem='public/lectures/neet-human-welfare/chapter-'+String(i+1).padStart(2,'0');assert.ok(fs.statSync(stem+'.mp3').size>100000);
  const hash=createHash('sha256').update(JSON.stringify({script:c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);
  const ch=t.chapters[i];assert.ok(ch.end>ch.start);if(i)assert.equal(ch.start,t.chapters[i-1].end);const cues=t.cues.filter(x=>x.chapter===i);assert.equal(normalize(cues.map(x=>x.text).join(' ')),normalize(c.script));assert.ok(cues.length>10);
  for(const[j,cue]of cues.entries()){assert.ok(cue.end>cue.start&&cue.start>=ch.start&&cue.end<=ch.end+.001);assert.ok(cue.text.length<=100);if(j)assert.ok(cue.start>=cues[j-1].end-.02);}
 }
});
test('human welfare progress, boards and answer options remain isolated',()=>{
 const lesson=fs.readFileSync('app/neet/classes/human-welfare-lesson.ts','utf8'),diagram=fs.readFileSync('app/neet/classes/human-welfare-diagram.tsx','utf8'),page=fs.readFileSync('app/neet/classes/human-welfare/page.tsx','utf8');assert.match(lesson,/neet\.human-welfare\.lecture\.v1/);assert.match(page,/exam="NEET"/);assert.doesNotMatch(diagram,/neet-human-welfare-lecture\.json|human-welfare-lesson/);
 for(const q of d.quiz){assert.equal(new Set(q.options).size,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation.length>15);}for(let i=0;i<4;i++)assert.equal(d.quiz.filter(q=>q.answer===i).length,16);
});
