import test from'node:test';import assert from'node:assert/strict';import fs from'node:fs';import{createHash}from'node:crypto';
const d=JSON.parse(fs.readFileSync('app/data/neet-genetics-evolution-lecture.json'));const answer=i=>d.quiz[i].options[d.quiz[i].answer];
test('inheritance examples preserve probability, phase and denominator distinctions',()=>{
 assert.equal(answer(0),'1 AA : 2 Aa : 1 aa');assert.equal(answer(2),'1/16');assert.equal(answer(3),'Four equal offspring classes');assert.equal(answer(6),'1/4');assert.equal(answer(12),'ZZ male and ZW female');assert.equal(answer(14),'10%');assert.equal(answer(16),'One half among sons');assert.equal(answer(20),'Trisomy 21');assert.equal(answer(21),'45,X and 47,XXY');
 assert.equal(.25*.25,1/16);assert.equal(.2/2,.1);assert.equal((1-.2)/2,.4);assert.match(d.chapters[7].script,/parental phase matters/);assert.match(d.chapters[8].script,/Those denominators are different/);
});
test('molecular examples retain strand orientation, code and regulation details',()=>{
 assert.equal(answer(23),'32P and 35S');assert.equal(answer(24),'T');assert.equal(answer(26),'A histone octamer');assert.equal(answer(28),'One parental and one new strand');assert.equal(answer(29),'5′ to 3′');assert.equal(answer(30),'5′-AUG GAA-3′');assert.equal(answer(31),'3′ to 5′ direction');assert.match(answer(33),/^RNA-directed DNA/);assert.equal(answer(34),'UAA, UAG and UGA');assert.match(answer(36),/^Attach appropriate amino acids/);assert.equal(answer(38),'Lactose present and glucose low');assert.equal(answer(39),'Allolactose');
 assert.match(d.chapters[16].script,/untranslated regions can also be retained/);assert.match(d.chapters[20].script,/Later sequencing and reference initiatives/);assert.match(d.chapters[21].script,/does not establish when or how/);
});
test('evolution examples distinguish evidence, mechanisms and equilibrium assumptions',()=>{
 assert.match(answer(44),/^Organic molecule formation/);assert.equal(answer(46),'Reproductive contribution in a stated environment');assert.equal(answer(50),'Homology');assert.match(answer(52),/^Incorrect/);assert.match(answer(54),/^Reshuffles existing/);assert.equal(answer(56),'Stabilizing');assert.match(answer(58),/^Microbes/);assert.equal(answer(62),'Smaller populations');assert.equal(answer(64),'0.42');assert.match(answer(65),/^Incorrect/);assert.match(answer(68),/^Incorrect/);assert.match(answer(69),/^Contemporary populations/);
 const q=Math.sqrt(.09),p=1-q;assert.ok(Math.abs(2*p*q-.42)<1e-12);assert.ok(Math.abs(p*p+2*p*q+q*q-1)<1e-12);assert.match(d.chapters[32].script,/does not uniquely prove natural selection/);
});
test('all official genetics headings preserve scope and non-deterministic interpretation',()=>{
 const text=d.chapters.map(c=>c.title+' '+c.script).join(' ').toLowerCase();for(const term of ['incomplete dominance','codominance','multiple alleles','pleiotropy','polygenic','honey bee','crossing over','haemophilia','thalassemia','turner','klinefelter','replication','transcription','translation','lac operon','genome project','fingerprinting','origin of life','fossil','embryological','gene flow','genetic drift','hardy','adaptive radiation','human evolution'])assert.ok(text.includes(term),term);
 assert.match(d.scope,/Further pedigrees, three-point maps, sequence interpretation/);assert.match(d.chapters[0].script,/not a requirement that every set of four/);assert.match(d.chapters[34].script,/No living population is an earlier evolutionary stage/);
});
test('genetics and evolution audio fingerprints and captions match every authored chapter',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/neet-genetics-evolution-timings.json'));assert.equal(d.chapters.length,36);assert.equal(d.quiz.length,72);assert.equal(t.chapters.length,36);assert.ok(t.duration>1800&&t.duration<4000);const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
 for(const[i,c]of d.chapters.entries()){
  assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.points.length,4);const stem='public/lectures/neet-genetics-evolution/chapter-'+String(i+1).padStart(2,'0');assert.ok(fs.statSync(stem+'.mp3').size>100000);
  const hash=createHash('sha256').update(JSON.stringify({script:c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);
  const ch=t.chapters[i];assert.ok(ch.end>ch.start);if(i)assert.equal(ch.start,t.chapters[i-1].end);const cues=t.cues.filter(x=>x.chapter===i);assert.equal(normalize(cues.map(x=>x.text).join(' ')),normalize(c.script));assert.ok(cues.length>10);
  for(const[j,cue]of cues.entries()){assert.ok(cue.end>cue.start&&cue.start>=ch.start&&cue.end<=ch.end+.001);assert.ok(cue.text.length<=100);if(j)assert.ok(cue.start>=cues[j-1].end-.02);}
 }
});
test('genetics and evolution progress, boards and quiz options remain isolated',()=>{
 const lesson=fs.readFileSync('app/neet/classes/genetics-evolution-lesson.ts','utf8'),diagram=fs.readFileSync('app/neet/classes/genetics-evolution-diagram.tsx','utf8'),page=fs.readFileSync('app/neet/classes/genetics-evolution/page.tsx','utf8');assert.match(lesson,/neet\.genetics-evolution\.lecture\.v1/);assert.match(page,/exam="NEET"/);assert.doesNotMatch(diagram,/neet-genetics-evolution-lecture\.json|genetics-evolution-lesson/);
 for(const q of d.quiz){assert.equal(new Set(q.options).size,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation.length>15);}for(let i=0;i<4;i++)assert.equal(d.quiz.filter(q=>q.answer===i).length,18);
});
