import fs from'node:fs';import assert from'node:assert/strict';import test from'node:test';import{createHash}from'node:crypto';
import{integralCalculusLesson as study}from'../app/jee/classes/integral-calculus-study.ts';import{integralBoards}from'../app/jee/classes/integral-calculus-boards.ts';
const id='integral-calculus',d=JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`,'utf8')),answer=i=>d.quiz[i].options[d.quiz[i].answer];
const near=(a,b,eps=1e-6)=>assert.ok(Math.abs(a-b)<eps,`${a} differs from ${b}`),diff=(f,x,h=1e-5)=>(f(x+h)-f(x-h))/(2*h);
function integral(f,a,b,n=2000){const h=(b-a)/n;let s=f(a)+f(b);for(let i=1;i<n;i++)s+=(i%2?4:2)*f(a+i*h);return s*h/3;}
test('Unit 8 has eighteen matching substantive chapters, sixteen examples and thirty-six original questions',()=>{
 assert.equal(study.unit,8);assert.equal(study.subject,'Mathematics');assert.equal(study.sections.length,18);assert.equal(d.chapters.length,18);assert.equal(study.examples.length,16);assert.equal(d.quiz.length,36);assert.deepEqual(study.quiz,d.quiz);assert.equal(new Set(d.quiz.map(q=>q.question)).size,36);d.chapters.forEach((c,i)=>{assert.ok(c.script.split(/\s+/).length>=170);assert.deepEqual(c.board,integralBoards[i].lines);assert.equal(c.board.length,4);assert.equal(study.sections[i].paragraphs[0],c.script);});assert.match(study.remaining,/Further mixed/);
});
test('Polynomial, reciprocal and exponential antiderivatives differentiate back on their real intervals',()=>{
 for(const x of[-2,-.5,.5,2]){near(diff(t=>t**3-4*t,x),3*x*x-4);near(diff(t=>Math.log(Math.abs(t)),x),1/x);near(diff(t=>Math.exp(2*t)/2,x),Math.exp(2*x),1e-5);}near(diff(t=>3**t/Math.log(3),.7),3**.7);assert.equal(answer(0),'x²+C');assert.equal(answer(1),'A constant');assert.equal(answer(2),'x³−4x+C');assert.equal(answer(3),'ln|x|+C');
});
test('All six basic trigonometric integrals and scaled angles retain the right signs',()=>{
 for(const x of[.3,.7,1]){near(diff(Math.sin,x),Math.cos(x));near(diff(t=>-Math.cos(t),x),Math.sin(x));near(diff(Math.tan,x),1/Math.cos(x)**2);near(diff(t=>-1/Math.tan(t),x),1/Math.sin(x)**2);near(diff(t=>1/Math.cos(t),x),Math.tan(x)/Math.cos(x));near(diff(t=>-1/Math.sin(t),x),1/Math.sin(x)/Math.tan(x));near(diff(t=>Math.sin(3*t)/3,x),Math.cos(3*x));}assert.equal(answer(4),'−cotx+C');assert.equal(answer(5),'sin(3x)/3+C');
});
test('Substitution and integration by parts examples recover the full original integrands',()=>{
 for(const x of[.2,.7,1.4]){near(diff(t=>Math.sin(t*t),x),2*x*Math.cos(x*x));near(diff(t=>(1+t*t)**1.5/3,x),x*Math.sqrt(1+x*x));near(diff(t=>(t-1)*Math.exp(t),x),x*Math.exp(x));near(diff(t=>t*Math.log(t)-t,x),Math.log(x));}assert.equal(answer(6),'sin(x²)+C');assert.equal(answer(7),'(1+x²)^(3/2)/3+C');assert.equal(answer(8),'(x−1)eˣ+C');assert.equal(answer(9),'xlnx−x+C');
});
test('Partial fractions preserve the rational function on each excluded-pole interval',()=>{
 for(const x of[-3,-.5,.5,2]){near(1/x-1/(x+1),1/(x*(x+1)));near(diff(t=>Math.log(Math.abs(t))-Math.log(Math.abs(t+1)),x),1/(x*(x+1)));}assert.equal(answer(10),'1/x−1/(x+1)');assert.equal(answer(11),'Polynomial division');
});
test('Quadratic completion, derivative splitting and both difference-of-square logarithms are correct',()=>{
 for(const x of[-3,-.3,.4,3]){const Q=t=>t*t+2*t+5;near(Q(x),(x+1)**2+4);near(diff(t=>Math.atan(t/2)/2,x),1/(x*x+4));near(diff(t=>Math.log(Q(t))+Math.atan((t+1)/2)/2,x),(2*x+3)/Q(x));near(diff(t=>Math.log(Math.abs((2+t)/(2-t)))/4,x),1/(4-x*x));near(diff(t=>Math.log(Math.abs((t-2)/(t+2)))/4,x),1/(x*x-4));}assert.equal(answer(12),'arctan(x/2)/2+C');assert.equal(answer(13),'(x+1)²+4');assert.equal(answer(14),'Q′+1');assert.equal(answer(15),'ln|Q|+C');
});
test('Reciprocal radical forms differentiate correctly including the negative outer branch',()=>{
 for(const x of[-1,.3,1.2])near(diff(t=>Math.asin(t/2),x),1/Math.sqrt(4-x*x));for(const x of[-3,-.4,.7,3]){near(diff(t=>Math.log(Math.abs(t+Math.sqrt(t*t+4))),x),1/Math.sqrt(x*x+4));near(diff(t=>Math.sqrt(t*t+4),x),x/Math.sqrt(x*x+4));}for(const x of[-4,-3,3,4])near(diff(t=>Math.log(Math.abs(t+Math.sqrt(t*t-4))),x),1/Math.sqrt(x*x-4));assert.equal(answer(16),'arcsin(x/2)+C');assert.equal(answer(17),'√(x²+4)+C');
});
test('Square root antiderivatives use the correct logarithmic signs and circular branch',()=>{
 for(const x of[-1,.4,1.2])near(diff(t=>(t*Math.sqrt(4-t*t)+4*Math.asin(t/2))/2,x),Math.sqrt(4-x*x));for(const x of[-3,-.5,1,3])near(diff(t=>(t*Math.sqrt(t*t+4)+4*Math.log(Math.abs(t+Math.sqrt(t*t+4))))/2,x),Math.sqrt(x*x+4));for(const x of[-4,-3,3,4])near(diff(t=>(t*Math.sqrt(t*t-4)-4*Math.log(Math.abs(t+Math.sqrt(t*t-4))))/2,x),Math.sqrt(x*x-4));assert.equal(answer(18),'x=a sinθ');assert.equal(answer(19),'−a²/2');
});
test('Trigonometric reductions and the sum definition match independently evaluated integrals',()=>{
 for(const x of[-.7,.3,1]){near(diff(t=>t/2-Math.sin(2*t)/4,x),Math.sin(x)**2);near(diff(t=>Math.sin(t)**2/2,x),Math.sin(x)*Math.cos(x));}const n=100000;near(n*(n+1)*(2*n+1)/(6*n**3),1/3,1e-5);near(integral(x=>x*x,0,1),1/3);assert.equal(answer(20),'x/2−sin(2x)/4+C');assert.equal(answer(21),'sin²x/2+C');assert.equal(answer(22),'Σ(k²)/n³, k=1,…,n');assert.equal(answer(23),'1/3');
});
test('The Fundamental Theorem, oriented bounds and definite substitutions produce their claimed values',()=>{
 near(integral(x=>3*x*x,0,2),8);near(diff(x=>Math.sin(x*x),.7),1.4*Math.cos(.49));near(integral(x=>2*x*Math.exp(x*x),0,1),Math.E-1);near(integral(x=>2*x/(1+x*x),0,1),Math.log(2));near(integral(x=>x*x,1,0),-1/3);assert.equal(answer(24),'8');assert.equal(answer(25),'2x cos(x²)');assert.equal(answer(26),'−5');assert.equal(answer(27),'Undefined; the improper integral diverges');assert.equal(answer(28),'e−1');assert.equal(answer(29),'u=1 and u=2');assert.ok(1/.001-1>1/.01-1);
});
test('Reflection identities and bounded areas agree with independent numerical quadrature',()=>{
 near(integral(x=>x**3,-1,1),0);near(integral(x=>Math.sin(x)/(Math.sin(x)+Math.cos(x)),0,Math.PI/2),Math.PI/4);near(integral(Math.abs,-1,1),1);near(integral(x=>x-x*x,0,1),1/6);const a=3,b=2;near(4*integral(t=>a*b*Math.cos(t)**2,0,Math.PI/2),Math.PI*a*b);near(integral(x=>2*Math.sqrt(a*x),0,a,20000),4*a*a/3,1e-5);assert.equal(answer(30),'0');assert.equal(answer(31),'π/4');assert.equal(answer(32),'1');assert.equal(answer(33),'1/6');assert.equal(answer(34),'πab');assert.equal(answer(35),'4a²/3');
});
test('Eighteen audio chapters retain exact generation hashes and complete bounded captions',()=>{
 const t=JSON.parse(fs.readFileSync(`app/data/jee-${id}-timings.json`,'utf8'));assert.equal(t.chapters.length,18);assert.ok(t.duration>900);assert.ok(fs.readFileSync(`public/lectures/${id}/english.vtt`,'utf8').startsWith('WEBVTT'));d.chapters.forEach((c,i)=>{const stem=`public/lectures/${id}/chapter-${String(i+1).padStart(2,'0')}`,hash=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);assert.ok(fs.statSync(stem+'.mp3').size>50000);const cues=t.cues.filter(q=>q.chapter===i);assert.ok(cues.length>1);assert.equal(cues.map(q=>q.text).join(' '),c.script);cues.forEach(q=>{assert.ok(q.text.length<=140);assert.ok(q.end>q.start);});assert.ok(t.chapters[i].end>t.chapters[i].start);assert.ok(Math.abs(t.chapters[i].start-(i?t.chapters[i-1].end:0))<.001);});
});
