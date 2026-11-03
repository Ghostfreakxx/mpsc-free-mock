import test from'node:test';import assert from'node:assert/strict';import fs from'node:fs';import{createHash}from'node:crypto';
const d=JSON.parse(fs.readFileSync('app/data/neet-biomolecules-lecture.json'));const answer=i=>d.quiz[i].options[d.quiz[i].answer];
test('biomolecule bond ledgers distinguish peptide, ester and backbone links',()=>{
 assert.equal(answer(12),'Nine');assert.equal(answer(8),'Three');assert.equal(answer(17),'Eighteen');
 assert.equal(10-1,9);assert.equal(2*(10-1),18);assert.equal(3*1,3);
 assert.match(answer(30),/9 peptide links and 3 ester links/);assert.match(d.chapters[6].script,/cyclic peptide requires a different count/);assert.match(d.chapters[8].script,/base pairs do not add ten phosphodiester bonds/i);
 assert.equal(answer(6),'1 mmol glucose and 1 mmol fructose');assert.match(d.chapters[3].script,/Water participates/);
});
test('enzyme and protein explanations separate kinetics, thermodynamics and folding',()=>{
 assert.equal(80-50,30);assert.equal(answer(18),'Activation barrier');assert.equal(answer(19),'Catalytic RNA');assert.equal(answer(21),'Half Vmax');assert.match(answer(28),/Unchanged Vmax and increased apparent Km/);
 assert.match(answer(15),/without necessarily hydrolysing/);assert.equal(answer(31),'Changed functional conformation');assert.equal(answer(25),'Translocases');assert.ok(d.sources.some(s=>s.url==='https://iubmb.qmul.ac.uk/enzyme/EC7/'));
 assert.match(d.chapters[14].script,/model dependent/);assert.match(d.chapters[12].script,/traditional six class NCERT scheme/);
});
test('every Biomolecules chapter has matched audio provenance and complete captions',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/neet-biomolecules-timings.json'));assert.equal(d.chapters.length,16);assert.equal(d.quiz.length,32);assert.equal(t.chapters.length,16);assert.ok(t.duration>600&&t.duration<1800);
 const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
 for(const[i,c]of d.chapters.entries()){
  assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.points.length,4);assert.equal(c.board.lines.length,4);
  const stem='public/lectures/neet-biomolecules/chapter-'+String(i+1).padStart(2,'0');assert.ok(fs.statSync(stem+'.mp3').size>100000);
  const hash=createHash('sha256').update(JSON.stringify({script:c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);
  const ch=t.chapters[i];assert.ok(ch.end>ch.start);if(i)assert.equal(ch.start,t.chapters[i-1].end);
  const cues=t.cues.filter(x=>x.chapter===i);assert.equal(normalize(cues.map(x=>x.text).join(' ')),normalize(c.script));assert.ok(cues.length>10);
  for(const[j,cue]of cues.entries()){assert.ok(cue.end>cue.start&&cue.start>=ch.start&&cue.end<=ch.end+.001);assert.ok(cue.text.length<=100);if(j)assert.ok(cue.start>=cues[j-1].end-.02);}
 }
});
test('NEET Biomolecules uses its own progress and a diagram without the lecture payload',()=>{
 const lesson=fs.readFileSync('app/neet/classes/biomolecules-lesson.ts','utf8'),diagram=fs.readFileSync('app/neet/classes/biomolecules-diagram.tsx','utf8'),page=fs.readFileSync('app/neet/classes/biomolecules/page.tsx','utf8');
 assert.match(lesson,/neet\.biomolecules\.lecture\.v1/);assert.match(page,/exam="NEET"/);assert.doesNotMatch(diagram,/neet-biomolecules-lecture\.json|biomolecules-lesson/);
 for(const q of d.quiz){assert.equal(new Set(q.options).size,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation.length>15);}for(let i=0;i<4;i++)assert.equal(d.quiz.filter(q=>q.answer===i).length,8);
});
