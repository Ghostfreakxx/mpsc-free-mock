import test from'node:test';import assert from'node:assert/strict';import fs from'node:fs';import{createHash}from'node:crypto';
const d=JSON.parse(fs.readFileSync('app/data/neet-biotechnology-lecture.json'));const answer=i=>d.quiz[i].options[d.quiz[i].answer];
test('molecular tools, vector markers and electrophoresis keep distinct mechanisms',()=>{
 assert.equal(answer(4),'Cleavage within a nucleic acid molecule');assert.equal(answer(6),'GAATTC');assert.equal(answer(8),'Reverse transcriptase');assert.equal(answer(10),'Origin of replication');assert.equal(answer(12),'Ampicillin resistant and tetracycline sensitive');assert.equal(answer(14),'White candidate colonies');assert.equal(answer(16),'Agrobacterium tumefaciens');assert.equal(answer(18),'Positive electrode');
 assert.match(d.chapters[3].script,/own five prime to three prime direction/);assert.match(d.chapters[6].script,/do not assign beta galactosidase/);assert.match(d.chapters[9].script,/Circular plasmid topology can alter migration/);
});
test('PCR arithmetic and detection distinguish target and evidential limits',()=>{
 assert.equal(answer(20),'Denaturation, annealing, extension');assert.equal(answer(22),'64 copies');assert.equal(answer(23),'Reverse transcription to make cDNA');assert.equal(answer(46),'Complementary sequence binding');assert.equal(answer(48),'Antigen–antibody binding');assert.match(answer(49),/^Incorrect/);
 assert.match(d.chapters[11].script,/Real reactions can depart from this ideal/);assert.match(d.chapters[11].script,/Reverse transcription PCR and real time quantitative PCR describe different features/);assert.match(d.chapters[24].script,/whether the assay detects an antigen, an antibody/);
});
test('agricultural cases separate source, genes, proteins and targets',()=>{
 assert.equal(answer(30),'Bacillus thuringiensis');assert.equal(answer(32),'cry1Ab');assert.equal(answer(33),'Selection on heritable variation');assert.equal(answer(34),'Root-knot nematode');assert.equal(answer(35),'Sequence-directed reduction of target RNA expression');
 assert.match(d.chapters[16].script,/cry one A c and cry two A b with cotton bollworm/);assert.match(d.chapters[17].script,/Meloidogyne incognita/);assert.match(d.chapters[17].script,/not an experimental design or a delivery protocol/);
});
test('health, transgenic and assessment cases avoid historical and universal overclaims',()=>{
 assert.equal(answer(36),'A and B chains linked by disulfide bonds');assert.equal(answer(37),'21 and 30 amino acids');assert.equal(answer(38),'Separate A and B chain production followed by assembly');assert.equal(answer(40),'Hepatitis B surface antigen');assert.equal(answer(44),'Severe combined immunodeficiency');assert.equal(answer(52),'Alpha-lactalbumin');assert.equal(answer(54),'Genetic Engineering Appraisal Committee');assert.match(answer(57),/^Unauthorized or inequitable/);
 assert.match(d.chapters[19].script,/not a claim that all modern insulin products/);assert.match(d.chapters[22].script,/Not every form of SCID/);assert.match(d.chapters[27].script,/official name changed in twenty ten/);
 const text=d.chapters.map(c=>c.title+' '+c.script).join(' ').toLowerCase();for(const term of['genetic engineering','recombinant dna','insulin','vaccine','gene therapy','bt','transgenic','biosafety','biopiracy','patent'])assert.ok(text.includes(term),term);
});
test('biotechnology audio provenance and readable captions match every authored chapter',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/neet-biotechnology-timings.json'));assert.equal(d.chapters.length,30);assert.equal(d.quiz.length,60);assert.equal(t.chapters.length,30);assert.ok(t.duration>1600&&t.duration<3700);const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
 for(const[i,c]of d.chapters.entries()){
  assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.points.length,4);const stem='public/lectures/neet-biotechnology/chapter-'+String(i+1).padStart(2,'0');assert.ok(fs.statSync(stem+'.mp3').size>100000);
  const hash=createHash('sha256').update(JSON.stringify({script:c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);
  const ch=t.chapters[i];assert.ok(ch.end>ch.start);if(i)assert.equal(ch.start,t.chapters[i-1].end);const cues=t.cues.filter(x=>x.chapter===i);assert.equal(normalize(cues.map(x=>x.text).join(' ')),normalize(c.script));assert.ok(cues.length>10);
  for(const[j,cue]of cues.entries()){assert.ok(cue.end>cue.start&&cue.start>=ch.start&&cue.end<=ch.end+.001);assert.ok(cue.text.length<=100);if(j)assert.ok(cue.start>=cues[j-1].end-.02);}
 }
});
test('biotechnology progress, slim boards and question options stay isolated',()=>{
 const lesson=fs.readFileSync('app/neet/classes/biotechnology-lesson.ts','utf8'),diagram=fs.readFileSync('app/neet/classes/biotechnology-diagram.tsx','utf8'),page=fs.readFileSync('app/neet/classes/biotechnology/page.tsx','utf8');assert.match(lesson,/neet\.biotechnology\.lecture\.v1/);assert.match(page,/exam="NEET"/);assert.doesNotMatch(diagram,/neet-biotechnology-lecture\.json|biotechnology-lesson/);
 for(const q of d.quiz){assert.equal(new Set(q.options).size,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation.length>15);}for(let i=0;i<4;i++)assert.equal(d.quiz.filter(q=>q.answer===i).length,15);
});
