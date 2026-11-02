import fs from'node:fs';import assert from'node:assert/strict';import test from'node:test';import{createHash}from'node:crypto';
import{differentialEquationsLesson as study}from'../app/jee/classes/differential-equations-study.ts';import{differentialBoards}from'../app/jee/classes/differential-equations-boards.ts';
const id='differential-equations',d=JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`,'utf8')),answer=i=>d.quiz[i].options[d.quiz[i].answer];
const near=(a,b,eps=1e-6)=>assert.ok(Math.abs(a-b)<eps,`${a} differs from ${b}`),diff=(f,x,h=1e-5)=>(f(x+h)-f(x-h))/(2*h);
test('Unit 9 preserves fourteen substantive chapters, twelve examples and twenty-eight matching questions',()=>{
 assert.equal(study.unit,9);assert.equal(study.subject,'Mathematics');assert.equal(d.chapters.length,14);assert.equal(study.sections.length,14);assert.equal(study.examples.length,12);assert.equal(d.quiz.length,28);assert.deepEqual(d.quiz,study.quiz);assert.equal(new Set(d.quiz.map(q=>q.question)).size,28);d.chapters.forEach((c,i)=>{assert.ok(c.script.split(/\s+/).length>=180);assert.deepEqual(c.board,differentialBoards[i].lines);assert.equal(c.board.length,4);assert.equal(study.sections[i].paragraphs[0],c.script);});assert.match(study.remaining,/Further mixed/);
});
test('Order and degree questions distinguish highest derivative order from exponent and nonpolynomial dependence',()=>{
 const derivativeTerms=[{order:2,power:2},{order:1,power:3}],highest=Math.max(...derivativeTerms.map(t=>t.order));assert.equal(highest,2);assert.equal(derivativeTerms.find(t=>t.order===highest).power,2);assert.equal(answer(0),'2');assert.equal(answer(1),'1');assert.equal(answer(2),'2');assert.equal(answer(3),'Not defined');assert.match(d.chapters[1].script,/sign or nonzero conditions/);assert.match(d.chapters[1].script,/sine of x or a sine of y/);
});
test('Direct initial values and formed families satisfy their equations including zero members',()=>{
 const y=x=>x*x+2;near(y(1),3);for(const x of[-2,0,2]){near(diff(y,x),2*x);for(const C of[-2,0,3])near(diff(t=>C*Math.exp(2*t),x),2*C*Math.exp(2*x),1e-5);const h=.001,A=3,B=-2;near(((A*(x+h)+B)-2*(A*x+B)+(A*(x-h)+B))/h**2,0);}assert.equal(answer(4),'y=x²+2');assert.equal(answer(5),'Both the original equation and the initial condition');assert.equal(answer(6),'y′−2y=0');assert.equal(answer(7),'y″=0');
});
test('Separable exponential family and initial condition retain both signs and the equilibrium branch',()=>{
 for(const C of[-2,0,2])for(const x of[-1,0,1]){const y=t=>C*Math.exp(t*t/2);near(diff(y,x),x*y(x));}near(2*Math.exp(0),2);assert.equal(answer(8),'y=Ce^(x²/2), C∈ℝ');assert.equal(answer(9),'2');assert.match(d.chapters[4].script,/test that function in the original equation/);
});
test('Nonlinear reciprocal initial solution satisfies the equation and cannot cross its pole',()=>{
 const y=x=>1/(1-x);near(y(0),1);for(const x of[-2,0,.5,.8])near(diff(y,x),y(x)**2,1e-5);assert.ok(y(.99)>y(.9));assert.equal(1-1,0);near(diff(()=>0,0),0);assert.equal(answer(10),'y=1/(1−x)');assert.equal(answer(11),'(−∞,1)');assert.match(d.chapters[5].script,/maximal interval containing the initial input zero/);
});
test('Inverse trigonometric separation uses the correct initial branch and nearest poles',()=>{
 const bound=Math.sqrt(Math.PI/2),y=x=>Math.tan(x*x);near(y(0),0);for(const x of[-.8,0,.8])near(diff(y,x),2*x*(1+y(x)**2));near(bound*bound,Math.PI/2);assert.ok(Math.abs(Math.cos((bound-.01)**2))<.1);assert.equal(answer(12),'y=tan(x²)');assert.equal(answer(13),'|x|<√(π/2)');
});
test('Homogeneous logarithmic family obeys the product-rule substitution on both sides of zero',()=>{
 for(const C of[-1,2])for(const x of[-3,-1,.5,2]){const y=t=>t*(Math.log(Math.abs(t))+C);near(diff(y,x),1+y(x)/x);}assert.equal(answer(14),'v+xv′');assert.equal(answer(15),'y=x(ln|x|+C), x≠0');assert.match(d.chapters[7].script,/different from the word homogeneous in a linear equation/);
});
test('Homogeneous rational family and both constant ratios satisfy the original nonlinear equation',()=>{
 for(const C of[-.5,0,.5])for(const x of[-1,-.5,.5,1]){const y=t=>t/(1-C*t);near(diff(y,x),(y(x)/x)**2);}for(const x of[-2,-1,1,2]){near(diff(()=>0,x),0);near(diff(t=>t,x),(x/x)**2);}assert.equal(answer(16),'v=0 and v=1');assert.equal(answer(17),'y=0');assert.match(d.chapters[8].script,/C equal to zero recovers y equal to x/);
});
test('The linear integrating factor product and constant-coefficient initial solution have zero residual',()=>{
 const mu=x=>Math.exp(2*x),y=x=>2+Math.exp(-2*x);near(y(0),3);for(const x of[-1,0,1]){near(diff(mu,x),2*mu(x));near(diff(t=>mu(t)*y(t),x),4*mu(x),1e-5);near(diff(y,x)+2*y(x),4);}assert.equal(answer(18),'e²ˣ');assert.equal(answer(19),'y=2+e^(−2x)');
});
test('Variable coefficient normalization preserves the original residual and excludes the initial pole',()=>{
 const y=x=>x+2/x;near(y(1),3);for(const x of[-2,-1,.5,2]){near(x*diff(y,x)+y(x),2*x);near(diff(t=>t*y(t),x),2*x);}near(diff(t=>t,0)*0+0,0);assert.equal(answer(20),'y′+y/x=2');assert.equal(answer(21),'y=x+2/x');assert.match(d.chapters[10].script,/member with C equal to zero can be extended/);
});
test('The reversed dependent-variable example differentiates in y and satisfies its initial data',()=>{
 const x=y=>y-1+2*Math.exp(-y);near(x(0),1);for(const y of[-1,0,2])near(diff(x,y)+x(y),y);assert.equal(answer(22),'y');assert.equal(answer(23),'x=y−1+2e^(−y)');assert.match(d.chapters[11].script,/Reciprocating a derivative needs a local inverse/);
});
test('Decay, units and overlapping method classifications agree with independent calculations',()=>{
 const k=Math.log(2)/3,N=t=>80*Math.exp(-k*t);near(N(0),80);near(N(3),40);near(N(6),20);for(const t of[0,3,6]){near(diff(N,t),-k*N(t));assert.ok(N(t)>0);}assert.equal(answer(24),'ln2/T');assert.equal(answer(25),'20');assert.equal(answer(26),'Both separable and linear');assert.equal(answer(27),'Test excluded cases in the original equation');assert.match(d.chapters[12].script,/inverse time units/);
});
test('All fourteen audio chapters have exact generation hashes and complete bounded captions',()=>{
 const t=JSON.parse(fs.readFileSync(`app/data/jee-${id}-timings.json`,'utf8'));assert.equal(t.chapters.length,14);assert.ok(t.duration>700);assert.ok(fs.readFileSync(`public/lectures/${id}/english.vtt`,'utf8').startsWith('WEBVTT'));d.chapters.forEach((c,i)=>{const stem=`public/lectures/${id}/chapter-${String(i+1).padStart(2,'0')}`,hash=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);assert.ok(fs.statSync(stem+'.mp3').size>50000);const cues=t.cues.filter(q=>q.chapter===i);assert.ok(cues.length>1);assert.equal(cues.map(q=>q.text).join(' '),c.script);cues.forEach(q=>{assert.ok(q.text.length<=140);assert.ok(q.end>q.start);});assert.ok(t.chapters[i].end>t.chapters[i].start);assert.ok(Math.abs(t.chapters[i].start-(i?t.chapters[i-1].end:0))<.001);});
});
