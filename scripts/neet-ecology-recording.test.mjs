import test from'node:test';import assert from'node:assert/strict';import fs from'node:fs';import{createHash}from'node:crypto';
const d=JSON.parse(fs.readFileSync('app/data/neet-ecology-lecture.json'));const answer=i=>d.quiz[i].options[d.quiz[i].answer];
test('ecology count, rate and model calculations retain their denominators and assumptions',()=>{
 assert.equal(answer(2),'0.1 per individual per year');assert.equal(answer(4),'110');assert.equal(answer(8),'20 individuals per year');assert.equal(answer(10),'80 individuals per year');assert.equal(answer(11),'N = K/2');assert.equal(answer(48),'2');assert.equal(answer(49),'Slope');
 assert.match(d.chapters[4].script,/instantaneous slope is not automatically the exact total increase/);assert.match(d.chapters[5].script,/per capita growth rate decreases as abundance rises/);assert.match(d.chapters[3].script,/not guarantees that every future count is already known/);
});
test('interaction signs do not collapse distinct host, support and feeding mechanisms',()=>{
 assert.equal(answer(14),'−/−');assert.equal(answer(16),'Photosynthetic algal or cyanobacterial partner');assert.equal(answer(19),'Reducing overlap in resource use');assert.equal(answer(22),'Parasitic flowering plant');assert.equal(answer(23),'Nesting and parental-care investment');assert.equal(answer(24),'+/0');assert.match(answer(25),/^Physical support/);
 assert.match(d.chapters[7].script,/Signs describe effects/);assert.match(d.chapters[10].script,/without always killing the entire plant/);assert.match(d.chapters[12].script,/not a promise that every interaction has no measurable cost/);
});
test('productivity, decomposition and pyramids preserve stock-flow and energy accounting',()=>{
 assert.equal(answer(28),'800');assert.equal(answer(29),'Producer respiration from GPP');assert.equal(answer(32),'Fragmentation');assert.equal(answer(33),'Inorganic nutrients from organic material');assert.equal(answer(35),'Reducing oxygen availability');assert.equal(answer(38),'100 units');assert.equal(answer(40),'Numbers');assert.equal(answer(43),'Energy pyramid');
 assert.match(d.chapters[14].script,/Net ecosystem production is a different accounting concept/);assert.match(d.chapters[17].script,/Anaerobic decomposition also occurs/);assert.match(d.chapters[21].script,/Rapid producer growth and consumption/);assert.match(d.chapters[19].script,/rather than an exact efficiency for every link/);
});
test('biodiversity assessment and conservation avoid undated or universal status claims',()=>{
 assert.match(answer(44),/^Genetic diversity/);assert.match(answer(53),/^Coextinction/);assert.equal(answer(54),'Vulnerable, Endangered and Critically Endangered');assert.match(answer(55),/^Insufficiently documented/);assert.equal(answer(56),'At least 70% loss of original natural vegetation');assert.equal(answer(57),'Naturally restricted to the defined region');assert.match(answer(58),/^Within their natural habitats/);assert.match(answer(60),/^A seed bank/);
 assert.match(d.chapters[28].script,/fifteen hundred endemic vascular plant species/);assert.match(d.chapters[28].script,/Sundaland through the Nicobar Islands/);assert.match(d.chapters[29].script,/Khasi and Jaintia/);assert.match(d.chapters[30].script,/not every species has seeds that tolerate the same storage conditions/);
 const text=d.chapters.map(c=>c.title+' '+c.script).join(' ').toLowerCase();for(const term of['mutualism','competition','predation','parasitism','birth','death','age distribution','productivity','decomposition','energy','pyramid','biodiversity','hotspot','endangered','extinction','red data book','biosphere','national parks','sanctuaries','sacred groves'])assert.ok(text.includes(term),term);assert.match(d.scope,/availability, not exhaustive mastery/);
});
test('ecology audio provenance and readable captions match every authored chapter',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/neet-ecology-timings.json'));assert.equal(d.chapters.length,32);assert.equal(d.quiz.length,64);assert.equal(t.chapters.length,32);assert.ok(t.duration>1600&&t.duration<3900);const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
 for(const[i,c]of d.chapters.entries()){
  assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.points.length,4);const stem='public/lectures/neet-ecology/chapter-'+String(i+1).padStart(2,'0');assert.ok(fs.statSync(stem+'.mp3').size>100000);
  const hash=createHash('sha256').update(JSON.stringify({script:c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);
  const ch=t.chapters[i];assert.ok(ch.end>ch.start);if(i)assert.equal(ch.start,t.chapters[i-1].end);const cues=t.cues.filter(x=>x.chapter===i);assert.equal(normalize(cues.map(x=>x.text).join(' ')),normalize(c.script));assert.ok(cues.length>10);
  for(const[j,cue]of cues.entries()){assert.ok(cue.end>cue.start&&cue.start>=ch.start&&cue.end<=ch.end+.001);assert.ok(cue.text.length<=100);if(j)assert.ok(cue.start>=cues[j-1].end-.02);}
 }
});
test('ecology progress, slim boards and balanced answer options stay isolated',()=>{
 const lesson=fs.readFileSync('app/neet/classes/ecology-lesson.ts','utf8'),diagram=fs.readFileSync('app/neet/classes/ecology-diagram.tsx','utf8'),page=fs.readFileSync('app/neet/classes/ecology/page.tsx','utf8');assert.match(lesson,/neet\.ecology\.lecture\.v1/);assert.match(page,/exam="NEET"/);assert.doesNotMatch(diagram,/neet-ecology-lecture\.json|ecology-lesson/);
 for(const q of d.quiz){assert.equal(new Set(q.options).size,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation.length>15);}for(let i=0;i<4;i++)assert.equal(d.quiz.filter(q=>q.answer===i).length,16);
});
