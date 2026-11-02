import fs from'node:fs';import assert from'node:assert/strict';import test from'node:test';import{createHash}from'node:crypto';
import{limitsContinuityDifferentiabilityLesson as study}from'../app/jee/classes/limits-continuity-differentiability-study.ts';import{calculusBoards}from'../app/jee/classes/limits-continuity-differentiability-boards.ts';
const id='limits-continuity-differentiability',d=JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`,'utf8')),answer=i=>d.quiz[i].options[d.quiz[i].answer];
const near=(a,b,epsilon=1e-8)=>assert.ok(Math.abs(a-b)<epsilon,`${a} differs from ${b}`),diff=(f,x,h=1e-5)=>(f(x+h)-f(x-h))/(2*h);
test('Unit 7 has sixteen substantive chapters, twelve worked examples and thirty-two matching questions',()=>{
 assert.equal(study.subject,'Mathematics');assert.equal(study.unit,7);assert.equal(d.chapters.length,16);assert.equal(study.sections.length,16);assert.equal(study.examples.length,12);assert.equal(d.quiz.length,32);assert.deepEqual(d.quiz,study.quiz);d.chapters.forEach((c,i)=>{assert.ok(c.script.split(/\s+/).length>=180);assert.equal(c.board.length,4);assert.deepEqual(calculusBoards[i].lines,c.board);assert.equal(study.sections[i].paragraphs[0],c.script);});assert.match(study.remaining,/main function, limit, continuity/);assert.match(study.remaining,/not exhaustive/);
});
test('Real logarithm/quotient domains and exponential inverse examples obey the stated restrictions',()=>{
 const domain=x=>x>1&&x!==2;assert.deepEqual([-1,0,1,1.5,2,3].map(domain),[false,false,false,true,false,true]);for(const x of[-5,0,4]){assert.ok(Math.exp(x)>0);near(Math.log(Math.exp(x)),x);}assert.equal(answer(0),'(1,2)∪(2,∞)');assert.equal(answer(1),'(0,∞)');
});
test('Factoring, rationalization, one-sided and standard limit examples have the claimed nearby behaviour',()=>{
 for(const h of[-.001,-.0001,.0001,.001]){near(((2+h)**2-4)/h,4+h,1e-8);near((Math.sqrt(1+h)-1)/h,1/(Math.sqrt(1+h)+1),1e-8);assert.equal(h/Math.abs(h),h>0?1:-1);}near((Math.sqrt(1.000001)-1)/.000001,.5,1e-6);near((3*1e12+1)/(1e12-2),3);const h=1e-4;near(Math.sin(3*h)/h,3,1e-6);near((1-Math.cos(h))/h**2,.5,1e-6);near(Math.expm1(h)/h,1,1e-4);near(Math.log1p(h)/h,1,1e-4);assert.equal(answer(2),'4');assert.equal(answer(3),'Nonexistent');assert.equal(answer(4),'1/2');assert.equal(answer(5),'3');assert.equal(answer(6),'3');assert.equal(answer(7),'1/2');
});
test('Continuous extensions match the neighbouring limit rather than an arbitrary point value',()=>{
 for(const h of[-.01,-.001,.001,.01])near(((1+h)**2-1)/h,2+h);near(Math.sin(1e-5)/1e-5,1);assert.equal(answer(8),'k=2');assert.equal(answer(9),'1');assert.match(d.chapters[4].script,/jump with unequal one sided limits cannot be fixed/);
});
test('First-principles slopes and the absolute-value corner distinguish continuity from differentiability',()=>{
 for(const h of[-.01,-.001,.001,.01]){near(((3+h)**2-9)/h,6+h);assert.equal(Math.abs(h)/h,h>0?1:-1);}near(diff(x=>x*x,3),6);assert.equal(answer(10),'6');assert.equal(answer(11),'Continuous but not differentiable');
});
test('Product and quotient derivatives agree with direct polynomial expansion and numerical slopes',()=>{
 for(const x of[-2,.3,2]){near(diff(t=>(t*t+1)*(t-1),x),3*x*x-2*x+1,1e-6);near(diff(t=>t/(1+t),x),1/(1+x)**2,1e-6);}assert.equal(answer(12),'3x²−2x+1');assert.equal(answer(13),'1/(1+x)²');
});
test('Composite and six trigonometric derivative rules include the inner factors and correct signs',()=>{
 for(const x of[.3,.7,1]){near(diff(t=>Math.sin(t*t),x),2*x*Math.cos(x*x),1e-6);near(diff(t=>(3*t+1)**5,x),15*(3*x+1)**4,1e-4);near(diff(Math.sin,x),Math.cos(x));near(diff(Math.cos,x),-Math.sin(x));near(diff(Math.tan,x),1/Math.cos(x)**2,1e-6);near(diff(t=>1/Math.tan(t),x),-1/Math.sin(x)**2,1e-5);near(diff(t=>1/Math.cos(t),x),Math.tan(x)/Math.cos(x),1e-5);near(diff(t=>1/Math.sin(t),x),-1/Math.sin(x)/Math.tan(x),1e-5);}assert.equal(answer(14),'2xcos(x²)');assert.equal(answer(15),'15(3x+1)⁴');assert.equal(answer(16),'sec²x');assert.equal(answer(17),'−cscxcotx');
});
test('All six inverse trigonometric derivatives match the declared branches including negative inputs',()=>{
 for(const x of[-.7,0,.6]){near(diff(Math.asin,x),1/Math.sqrt(1-x*x),1e-6);near(diff(Math.acos,x),-1/Math.sqrt(1-x*x),1e-6);near(diff(Math.atan,x),1/(1+x*x),1e-6);near(diff(t=>Math.PI/2-Math.atan(t),x),-1/(1+x*x),1e-6);}for(const x of[-3,-2,2,3]){near(diff(t=>Math.acos(1/t),x),1/(Math.abs(x)*Math.sqrt(x*x-1)),1e-6);near(diff(t=>Math.asin(1/t),x),-1/(Math.abs(x)*Math.sqrt(x*x-1)),1e-6);}near(diff(t=>Math.asin(2*t),.2),2/Math.sqrt(1-4*.2**2),1e-6);assert.equal(answer(18),'1/√(1−x²)');assert.equal(answer(19),'−1/(1+x²)');assert.match(d.chapters[9].formula,/\|x\|<1/);
});
test('Logarithmic and exponential derivatives retain positive domains and variable-exponent factors',()=>{
 for(const x of[.5,1,2]){near(diff(Math.exp,x),Math.exp(x),1e-6);near(diff(Math.log,x),1/x,1e-6);near(diff(t=>Math.log(2*t+1),x),2/(2*x+1),1e-6);near(diff(t=>t**t,x),x**x*(Math.log(x)+1),1e-5);}assert.equal(answer(20),'2/(2x+1)');assert.equal(answer(21),'xˣ(lnx+1)');
});
test('Implicit first and second derivatives agree with a local explicit circle branch',()=>{
 const y=x=>Math.sqrt(25-x*x);near(y(3),4);near(diff(y,3),-3/4,1e-6);const h=.001;near((y(3+h)-2*y(3)+y(3-h))/h**2,-25/64,1e-5);assert.equal(5*5+0*0,25);assert.equal(answer(22),'−3/4');assert.equal(answer(23),'x=5');assert.equal(answer(24),'6x');assert.equal(answer(25),'−25/64');
});
test('Related rates have the stated instantaneous values and area-per-time scaling',()=>{
 const r=3,rate=2;near(diff(t=>Math.PI*(r+rate*t)**2,0),12*Math.PI,1e-6);near(diff(t=>t**3,2),12,1e-6);assert.equal(answer(26),'12π cm²/s');assert.equal(answer(27),'12');
});
test('Derivative sign tables and endpoint comparisons locate the claimed extrema',()=>{
 const f=x=>x**3-3*x,fp=x=>3*x*x-3;assert.ok(fp(-2)>0);assert.ok(fp(0)<0);assert.ok(fp(2)>0);assert.deepEqual([0,1,2].map(f),[0,-2,2]);assert.ok((-.1)**3<0&&.1**3>0);assert.equal(answer(28),'(−1,1)');assert.equal(answer(29),'Neither a local maximum nor minimum');assert.equal(answer(30),'2 at x=2');assert.equal(answer(31),'Inconclusive');
});
test('Audio fingerprints, contiguous chapter boundaries and complete captions cover all sixteen chapters',()=>{
 const t=JSON.parse(fs.readFileSync(`app/data/jee-${id}-timings.json`,'utf8'));assert.equal(t.chapters.length,16);assert.ok(t.duration>800);assert.ok(fs.readFileSync(`public/lectures/${id}/english.vtt`,'utf8').startsWith('WEBVTT'));d.chapters.forEach((c,i)=>{const stem=`public/lectures/${id}/chapter-${String(i+1).padStart(2,'0')}`,hash=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);assert.ok(fs.statSync(stem+'.mp3').size>50000);const cues=t.cues.filter(q=>q.chapter===i);assert.ok(cues.length>1);assert.equal(cues.map(q=>q.text).join(' '),c.script);cues.forEach(q=>{assert.ok(q.text.length<=140);assert.ok(q.end>q.start);});assert.ok(t.chapters[i].end>t.chapters[i].start);assert.ok(Math.abs(t.chapters[i].start-(i?t.chapters[i-1].end:0))<.001);});
});
