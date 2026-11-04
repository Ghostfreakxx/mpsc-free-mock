import test from'node:test';import assert from'node:assert/strict';import fs from'node:fs';import{createHash}from'node:crypto';
const d=JSON.parse(fs.readFileSync('app/data/neet-reproduction-lecture.json'));const answer=i=>d.quiz[i].options[d.quiz[i].answer];
test('plant reproduction preserves gametophyte counts, tissue origins and fusion accounting',()=>{
 assert.equal(answer(0),'Tapetum');assert.equal(answer(2),'Meiosis');assert.equal(answer(3),'Two male gametes');assert.equal(answer(4),'Seven-celled and eight-nucleate');assert.equal(answer(6),'Different flowers on the same plant');assert.equal(answer(8),'Zostera');assert.equal(answer(10),'Autogamy and geitonogamy');assert.equal(answer(14),'2n and 3n');assert.match(answer(15),/Three haploid nuclear contributions/);assert.equal(answer(18),'Ovule integuments');assert.equal(answer(20),'Fruit development without fertilization');assert.equal(answer(21),'More than one embryo within a seed');
 assert.match(d.chapters[10].script,/endosperm formation can still require/);assert.match(d.chapters[7].script,/integuments remain maternal sporophytic tissue/);
});
test('human reproduction distinguishes meiosis, maturation, ovulation and implantation',()=>{
 assert.equal(answer(22),'Testicular androgen production');assert.equal(answer(24),'Endometrium');assert.equal(answer(26),'Four haploid spermatids');assert.match(answer(27),/^Transformation of spermatids/);assert.equal(answer(28),'Metaphase II');assert.equal(answer(32),'Uterine tube');assert.match(answer(34),/^Overall conceptus size/);assert.equal(answer(35),'Embryo proper');assert.match(answer(36),/^Attachment and embedding/);assert.equal(answer(38),'Corpus luteum');assert.equal(answer(42),'Prolactin and oxytocin');assert.equal(answer(43),'Passive immune support');
 assert.match(d.chapters[14].script,/haploid secondary oocyte still has duplicated chromosomes/);assert.match(d.chapters[15].script,/not a universal timetable/);assert.match(d.chapters[18].script,/not ordinarily become one freely mixing pool/);
});
test('health and assisted-technique questions avoid common prevention and transfer errors',()=>{
 assert.match(answer(44),/^Correct/);assert.match(answer(46),/^Cannot establish/);assert.match(answer(47),/^Condition-dependent/);assert.match(answer(48),/^Impairing sperm/);assert.match(answer(49),/^Aims to prevent/);assert.equal(answer(50),'Vas deferens pathway');assert.match(answer(51),/^Incorrect/);assert.match(answer(52),/^Amniotic fluid/);assert.match(answer(53),/^Prohibited sex selection/);assert.equal(answer(54),'Outside the body under laboratory conditions');assert.equal(answer(55),'Sperm into the reproductive tract');assert.match(answer(56),/^Gametes into a uterine tube/);assert.match(answer(57),/^Transfer destination/);
 assert.match(d.chapters[28].script,/not a universal current clinical protocol/);assert.match(d.chapters[24].script,/does not terminate an established pregnancy/);
});
test('all three official reproduction headings retain scope and authoritative health context',()=>{
 const text=d.chapters.map(c=>c.title+' '+c.script).join(' ').toLowerCase();for(const term of ['microsporangia','megaspores','outbreeding','double fertilization','endosperm','apomixis','parthenocarpy','polyembryony','spermatogenesis','oogenesis','menstrual','blastocyst','implantation','placenta','parturition','lactation','contraception','amniocentesis','infertility','zift','gift'])assert.ok(text.includes(term),term);
 assert.match(d.scope,/Further labelled diagrams, ploidy counts, hormonal graphs and mixed applications remain/);assert.ok(d.sources.some(s=>s.url.startsWith('https://www.who.int/')));assert.ok(d.sources.some(s=>s.url.startsWith('https://pcpndt.delhi.gov.in/')));
});
test('reproduction audio fingerprints and readable captions match all authored chapters',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/neet-reproduction-timings.json'));assert.equal(d.chapters.length,30);assert.equal(d.quiz.length,60);assert.equal(t.chapters.length,30);assert.ok(t.duration>1500&&t.duration<3500);const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
 for(const[i,c]of d.chapters.entries()){
  assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.points.length,4);const stem='public/lectures/neet-reproduction/chapter-'+String(i+1).padStart(2,'0');assert.ok(fs.statSync(stem+'.mp3').size>100000);
  const hash=createHash('sha256').update(JSON.stringify({script:c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);
  const ch=t.chapters[i];assert.ok(ch.end>ch.start);if(i)assert.equal(ch.start,t.chapters[i-1].end);const cues=t.cues.filter(x=>x.chapter===i);assert.equal(normalize(cues.map(x=>x.text).join(' ')),normalize(c.script));assert.ok(cues.length>10);
  for(const[j,cue]of cues.entries()){assert.ok(cue.end>cue.start&&cue.start>=ch.start&&cue.end<=ch.end+.001);assert.ok(cue.text.length<=100);if(j)assert.ok(cue.start>=cues[j-1].end-.02);}
 }
});
test('reproduction progress, boards and quiz options remain isolated from existing classes',()=>{
 const lesson=fs.readFileSync('app/neet/classes/reproduction-lesson.ts','utf8'),diagram=fs.readFileSync('app/neet/classes/reproduction-diagram.tsx','utf8'),page=fs.readFileSync('app/neet/classes/reproduction/page.tsx','utf8');assert.match(lesson,/neet\.reproduction\.lecture\.v1/);assert.match(page,/exam="NEET"/);assert.doesNotMatch(diagram,/neet-reproduction-lecture\.json|reproduction-lesson/);
 for(const q of d.quiz){assert.equal(new Set(q.options).size,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation.length>15);}for(let i=0;i<4;i++)assert.equal(d.quiz.filter(q=>q.answer===i).length,15);
});
