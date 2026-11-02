import fs from'node:fs';import assert from'node:assert/strict';import test from'node:test';import{createHash}from'node:crypto';
import{trigonometryLesson as study}from'../app/jee/classes/trigonometry-study.ts';import{trigonometryBoards}from'../app/jee/classes/trigonometry-boards.ts';
const d=JSON.parse(fs.readFileSync('app/data/jee-trigonometry-lecture.json','utf8')),answer=i=>d.quiz[i].options[d.quiz[i].answer],pi=Math.PI;
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,`${a} differs from ${b}`);
const arccot=x=>pi/2-Math.atan(x),arcsec=x=>Math.acos(1/x),arccsc=x=>Math.asin(1/x);
test('Unit 14 has twelve substantive narrated chapters, ten examples and twenty-four matching questions',()=>{
 assert.equal(study.subject,'Mathematics');assert.equal(study.unit,14);assert.equal(d.chapters.length,12);assert.equal(study.sections.length,12);assert.equal(study.examples.length,10);assert.equal(d.quiz.length,24);assert.deepEqual(d.quiz,study.quiz);d.chapters.forEach((c,i)=>{assert.ok(c.script.split(/\s+/).length>=180);assert.equal(c.board.length,4);assert.deepEqual(trigonometryBoards[i].lines,c.board);assert.equal(study.sections[i].paragraphs[0],c.script);});assert.match(study.remaining,/branch-restriction/);assert.match(study.remaining,/not exhaustive/);
});
test('Radian conversion, quadrant signs, ranges and periods match unit-circle values',()=>{
 near(150*pi/180,5*pi/6);near(Math.cos(2*pi/3),-.5);near(Math.sin(2*pi/3),Math.sqrt(3)/2);for(const x of[-2,-.4,.3,1.2]){near(Math.sin(x+2*pi),Math.sin(x));near(Math.tan(x+pi),Math.tan(x));assert.ok(Math.abs(Math.sin(x))<=1);assert.ok(Math.abs(Math.cos(x))<=1);}assert.equal(answer(0),'5π/6');assert.equal(answer(1),'−1/2');assert.equal(answer(2),'π');assert.equal(answer(3),'cosx=0');assert.match(d.chapters[1].points.join(' '),/cotangent and cosecant exclude sinx=0/);
});
test('Fundamental identities and sign recovery preserve denominator restrictions',()=>{
 for(const x of[-2,-.7,.4,1]){near(Math.sin(x)**2+Math.cos(x)**2,1);near(1+Math.tan(x)**2,1/Math.cos(x)**2);near((1-Math.cos(x)**2)/Math.sin(x),Math.sin(x));}near(Math.cos(pi-Math.asin(3/5)),-4/5);assert.equal(answer(4),'1');assert.equal(answer(5),'sinx');assert.match(d.chapters[2].script,/only when sine x is nonzero/);
});
test('Compound, double, triple and half angle values agree with direct evaluations',()=>{
 near(Math.sin(pi/12),(Math.sqrt(6)-Math.sqrt(2))/4);near(Math.tan(pi/12),2-Math.sqrt(3));for(const x of[-1,-.2,.4,1.1]){near(Math.sin(2*x),2*Math.sin(x)*Math.cos(x));near(Math.cos(2*x),1-2*Math.sin(x)**2);near(Math.sin(3*x),3*Math.sin(x)-4*Math.sin(x)**3);near(Math.cos(3*x),4*Math.cos(x)**3-3*Math.cos(x));}near(Math.cos((4*pi/3)/2),-.5);assert.equal(answer(6),'(√6−√2)/4');assert.equal(answer(7),'2−√3');assert.equal(answer(8),'1−2sin²x');assert.equal(answer(9),'−1/2');
});
test('Sum/product transformations and factored equations retain every solution family',()=>{
 for(const[a,b]of[[.3,.7],[-1,.4],[2,-.2]]){near(2*Math.sin(a)*Math.cos(b),Math.sin(a+b)+Math.sin(a-b));near(2*Math.sin(a)*Math.sin(b),Math.cos(a-b)-Math.cos(a+b));}near(Math.sin(5*pi/12)+Math.sin(pi/12),Math.sqrt(6)/2);const solutions=[0,pi/3,pi,5*pi/3];solutions.forEach(x=>{assert.ok(x>=0&&x<2*pi);near(Math.sin(2*x),Math.sin(x));});assert.equal(solutions.length,4);for(const k of[-2,-1,0,1,2])near(Math.tan(pi/4+k*pi),1);assert.equal(answer(12),'4');assert.equal(answer(13),'x=π/4+kπ, k∈ℤ');
});
test('Sine-cosine amplitude bounds are attained at the stated extremes',()=>{
 const phase=Math.atan2(4,3),f=x=>3*Math.sin(x)+4*Math.cos(x);near(f(pi/2-phase),5);near(f(-pi/2-phase),-5);for(let i=-40;i<=40;i++)assert.ok(Math.abs(f(i/7))<=5+1e-12);assert.equal(answer(14),'5');assert.equal(answer(15),'−5');
});
test('Principal inverse sine, cosine and tangent fold outside angles into their correct ranges',()=>{
 near(Math.asin(Math.sin(5*pi/6)),pi/6);near(Math.acos(Math.cos(-pi/3)),pi/3);near(Math.atan(Math.tan(3*pi/4)),-pi/4);assert.equal(answer(16),'π/6');assert.equal(answer(17),'−π/4');assert.match(d.chapters[8].formula,/arcsin:\[−1,1\]/);assert.match(d.chapters[8].formula,/arctan:ℝ/);
});
test('Declared cotangent, secant and cosecant inverse conventions round-trip including signed endpoints',()=>{
 for(const x of[-3,-1,0,1,3]){const theta=arccot(x);assert.ok(theta>0&&theta<pi);near(Math.cos(theta)/Math.sin(theta),x);}for(const x of[-3,-2,-1,1,2,3]){const sec=arcsec(x),csc=arccsc(x);assert.ok(sec>=0&&sec<=pi&&Math.abs(sec-pi/2)>1e-10);assert.ok(csc>=-pi/2&&csc<=pi/2&&csc!==0);near(1/Math.cos(sec),x);near(1/Math.sin(csc),x);}near(arccot(-1),3*pi/4);near(arcsec(-2),2*pi/3);near(arccsc(-2),-pi/6);assert.equal(answer(18),'3π/4');assert.equal(answer(19),'2π/3');assert.equal(answer(21),'−π/6');
});
test('Inverse complement and addition formulas keep their domains and select the correct branch',()=>{
 for(const x of[-1,-.8,0,.6,1]){near(Math.asin(x)+Math.acos(x),pi/2);near(Math.acos(-x),pi-Math.acos(x));}for(const x of[-4,-1,0,1,4])near(Math.atan(x)+arccot(x),pi/2);near(Math.atan(.5)+Math.atan(1/3),pi/4);near(Math.atan(2)+Math.atan(3),3*pi/4);near(Math.atan(1)+Math.atan(1),pi/2);const root=Math.sqrt(3)/2;assert.ok(root>=-1&&root<=1);near(Math.asin(root),2*Math.acos(root));assert.equal(answer(20),'π/2');assert.equal(answer(22),'3π/4');assert.equal(answer(23),'√3/2');
});
test('Audio fingerprints, chapter boundaries and readable full captions cover all twelve chapters',()=>{
 const t=JSON.parse(fs.readFileSync('app/data/jee-trigonometry-timings.json','utf8'));assert.equal(t.chapters.length,12);assert.ok(t.duration>650);assert.ok(fs.readFileSync('public/lectures/trigonometry/english.vtt','utf8').startsWith('WEBVTT'));d.chapters.forEach((c,i)=>{const stem=`public/lectures/trigonometry/chapter-${String(i+1).padStart(2,'0')}`,hash=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);assert.ok(fs.statSync(stem+'.mp3').size>50000);const cues=t.cues.filter(q=>q.chapter===i);assert.ok(cues.length>1);assert.equal(cues.map(q=>q.text).join(' '),c.script);cues.forEach(q=>{assert.ok(q.text.length<=140);assert.ok(q.end>q.start);});assert.ok(t.chapters[i].end>t.chapters[i].start);assert.ok(Math.abs(t.chapters[i].start-(i?t.chapters[i-1].end:0))<.001);});
});
