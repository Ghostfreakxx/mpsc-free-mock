import test from'node:test';import assert from'node:assert/strict';import fs from'node:fs';import{createHash}from'node:crypto';
const d=JSON.parse(fs.readFileSync('app/data/neet-diversity-living-world-lecture.json'));const answer=i=>d.quiz[i].options[d.quiz[i].answer];
test('taxonomy and kingdom questions preserve the stated framework and hierarchy',()=>{
 assert.equal(answer(2),'A taxon and a category');assert.equal(answer(4),'Mangifera indica');assert.match(answer(5),/epithet, which does not establish one species/);assert.equal(answer(6),'Monera');assert.match(answer(11),/unknown sexual stage/);assert.match(answer(46),/^Incorrect/);assert.match(answer(47),/^Does not by itself change/);
 assert.match(d.chapters[3].script,/not a claim that all modern classifications/);assert.match(d.chapters[4].script,/not all equivalent modern evolutionary clades/);assert.match(d.chapters[5].script,/not be mistaken for a single modern natural lineage/);
});
test('prescribed plant groups and animal comparisons retain two distinct named examples',()=>{
 const pairs={8:['Marchantia','Funaria'],9:['Selaginella','Equisetum'],10:['Cycas','Pinus'],12:['Sycon','Spongilla','Hydra','Aurelia'],13:['Pleurobrachia','Ctenoplana','Planaria','Taenia'],14:['Ascaris','Wuchereria','Nereis','Hirudinaria'],15:['Periplaneta','Apis','Pila','Octopus'],16:['Asterias','Echinus','Balanoglossus','Saccoglossus'],18:['Petromyzon','Myxine','Scoliodon','Trygon'],19:['Labeo','Catla'],20:['Rana','Salamandra','Chelone','Calotes'],21:['Columba','Struthio','Homo','Balaenoptera']};
 for(const[index,names]of Object.entries(pairs))for(const name of names)assert.ok(d.chapters[Number(index)].script.includes(name),name);
 for(const name of ['Chlamydomonas','Volvox','Laminaria','Fucus','Polysiphonia','Porphyra'])assert.ok(d.chapters[7].script.includes(name));
 assert.equal(answer(32),'Echinodermata');assert.match(answer(33),/^Not the true chordate notochord/);assert.equal(answer(34),'At some stage of development');assert.match(answer(39),/with exceptions/);assert.match(answer(41),/crocodilian four-chambered exception/);
});
test('acellular agents and common identification shortcuts are correctly distinguished',()=>{
 assert.equal(answer(12),'Infectious RNA without the protein capsid');assert.equal(answer(13),'A fungus and a photosynthetic partner');assert.equal(answer(44),'Cyanobacterial comparison');assert.match(answer(42),/Flight is not required/);assert.match(answer(43),/Mammalian characters outweigh/);assert.match(answer(45),/Combining independent/);
 assert.match(d.scope,/Further detailed life-cycle, exception and specimen-identification practice remains/);
});
test('all diversity chapters have matched audio provenance and complete readable captions',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/neet-diversity-living-world-timings.json'));assert.equal(d.chapters.length,24);assert.equal(d.quiz.length,48);assert.equal(t.chapters.length,24);assert.ok(t.duration>1000&&t.duration<3000);const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
 for(const[i,c]of d.chapters.entries()){
  assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.points.length,4);const stem='public/lectures/neet-diversity-living-world/chapter-'+String(i+1).padStart(2,'0');assert.ok(fs.statSync(stem+'.mp3').size>100000);
  const hash=createHash('sha256').update(JSON.stringify({script:c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);
  const ch=t.chapters[i];assert.ok(ch.end>ch.start);if(i)assert.equal(ch.start,t.chapters[i-1].end);const cues=t.cues.filter(x=>x.chapter===i);assert.equal(normalize(cues.map(x=>x.text).join(' ')),normalize(c.script));assert.ok(cues.length>10);
  for(const[j,cue]of cues.entries()){assert.ok(cue.end>cue.start&&cue.start>=ch.start&&cue.end<=ch.end+.001);assert.ok(cue.text.length<=100);if(j)assert.ok(cue.start>=cues[j-1].end-.02);}
 }
});
test('diversity progress and diagram payload remain isolated from the other classes',()=>{
 const lesson=fs.readFileSync('app/neet/classes/diversity-lesson.ts','utf8'),diagram=fs.readFileSync('app/neet/classes/diversity-diagram.tsx','utf8'),page=fs.readFileSync('app/neet/classes/diversity-living-world/page.tsx','utf8');assert.match(lesson,/neet\.diversity-living-world\.lecture\.v1/);assert.match(page,/exam="NEET"/);assert.doesNotMatch(diagram,/neet-diversity-living-world-lecture\.json|diversity-lesson/);
 for(const q of d.quiz){assert.equal(new Set(q.options).size,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation.length>15);}for(let i=0;i<4;i++)assert.equal(d.quiz.filter(q=>q.answer===i).length,12);
});
