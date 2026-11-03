import fs from'node:fs';import assert from'node:assert/strict';import test from'node:test';import{createHash}from'node:crypto';
import{statisticsProbabilityLesson as study}from'../app/jee/classes/statistics-probability-study.ts';import{statisticsBoards}from'../app/jee/classes/statistics-probability-boards.ts';
const id='statistics-probability',d=JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`,'utf8')),answer=i=>d.quiz[i].options[d.quiz[i].answer];
const near=(a,b,eps=1e-8)=>assert.ok(Math.abs(a-b)<eps,`${a} differs from ${b}`),mean=x=>x.reduce((s,v)=>s+v,0)/x.length,variance=x=>mean(x.map(v=>(v-mean(x))**2)),md=(x,a)=>mean(x.map(v=>Math.abs(v-a))),expand=(x,f)=>x.flatMap((v,i)=>Array(f[i]).fill(v));
test('Unit 13 has sixteen substantive matching chapters, fourteen examples and thirty-two original questions',()=>{
 assert.equal(study.unit,13);assert.equal(study.subject,'Mathematics');assert.equal(d.chapters.length,16);assert.equal(study.sections.length,16);assert.equal(study.examples.length,14);assert.equal(d.quiz.length,32);assert.deepEqual(d.quiz,study.quiz);assert.equal(new Set(d.quiz.map(q=>q.question)).size,32);d.chapters.forEach((c,i)=>{assert.ok(c.script.split(/\s+/).length>=170);assert.deepEqual(c.board,statisticsBoards[i].lines);assert.equal(c.board.length,4);assert.equal(study.sections[i].paragraphs[0],c.script);});assert.match(study.remaining,/Further mixed/);
});
test('Ungrouped mean median and mode include repeated observations and sorted central positions',()=>{
 const x=[5,2,1,2].toSorted((a,b)=>a-b);near(mean(x),2.5);near((x[1]+x[2])/2,2);const counts=new Map();x.forEach(v=>counts.set(v,(counts.get(v)??0)+1));assert.equal([...counts].toSorted((a,b)=>b[1]-a[1])[0][0],2);assert.equal(answer(0),'5/2');assert.equal(answer(1),'2 and 2');
});
test('Frequency means and class marks agree with expansion into repeated represented values',()=>{
 near(mean(expand([1,2,3],[1,2,1])),2);near((10+20)/2,15);near(mean(expand([5,15,25],[2,5,3])),16);assert.equal(answer(2),'2');assert.equal(answer(3),'15');assert.match(d.chapters[1].script,/grouped estimate/);
});
test('Grouped median and mode use the correct boundary cumulative frequency and neighbours',()=>{
 const f=[2,5,3],N=f.reduce((a,b)=>a+b),L=10,h=10,F=f[0];near(L+(N/2-F)*h/f[1],16);near(L+(f[1]-f[0])*h/(2*f[1]-f[0]-f[2]),16);assert.equal(answer(4),'16');assert.equal(answer(5),'16');assert.match(d.chapters[2].script,/interpolation estimates/);assert.match(d.chapters[2].script,/equal width classes/);
});
test('Mean deviations use absolute rather than cancelling signed distances and the requested centre',()=>{
 const x=[1,2,3,4,5],y=[1,2,9];near(md(x,mean(x)),6/5);near(mean(x.map(v=>v-mean(x))),0);near(md(y,2),8/3);near(md(y,mean(y)),10/3);assert.ok(md(y,2)<md(y,mean(y)));assert.equal(answer(6),'6/5');assert.equal(answer(7),'8/3');
});
test('Descriptive variance uses N and standard deviation is its nonnegative square root',()=>{
 const x=[2,4,6];near(mean(x),4);near(variance(x),8/3);near(Math.sqrt(variance(x)),Math.sqrt(8/3));near(variance([4,4,4]),0);assert.equal(answer(8),'8/3');assert.equal(answer(9),'√(8/3)');assert.match(d.chapters[4].script,/different specified convention/);
});
test('Frequency and grouped variance shortcuts agree with direct weighted squared deviations',()=>{
 for(const [x,f,expected]of[[[1,2,3],[1,2,1],.5],[[5,15,25],[2,5,3],49]]){const data=expand(x,f),N=data.length,m=mean(data),second=x.reduce((s,v,i)=>s+f[i]*v*v,0)/N;near(second-m*m,expected);near(variance(data),expected);}assert.equal(answer(10),'1/2');assert.equal(answer(11),'49');
});
test('Affine transformations preserve shifts and square the scale for variance including negative multipliers',()=>{
 const x=[2,4,6],y=x.map(v=>-2*v+5);assert.deepEqual(y,[1,-3,-7]);near(mean(y),-3);near(variance(y),32/3);near(Math.sqrt(variance(y)),2*Math.sqrt(variance(x)));near(md(y,mean(y)),2*md(x,mean(x)));near(variance(x.map(v=>v+10)),variance(x));near(variance(x.map(()=>5)),0);assert.equal(answer(12),'−3');assert.equal(answer(13),'32/3');
});
const coins=['HH','HT','TH','TT'];
test('Ordered coin outcomes and complement examples retain their correct elementary weights',()=>{
 assert.equal(coins.length,4);near(coins.filter(s=>[...s].filter(c=>c==='H').length===1).length/4,.5);near(coins.filter(s=>s.includes('H')).length/4,.75);near(1-3/10,7/10);assert.equal(answer(14),'4');assert.equal(answer(15),'A finite equally likely sample space');assert.equal(answer(16),'7/10');assert.equal(answer(17),'[0,1]');
});
test('The die addition law counts intersections once and handles exactly one event',()=>{
 const S=[1,2,3,4,5,6],A=x=>x%2===0,B=x=>x>3,p=f=>S.filter(f).length/6;near(p(x=>A(x)&&B(x)),1/3);near(p(x=>A(x)||B(x)),2/3);near(p(A)+p(B)-p(x=>A(x)&&B(x)),2/3);near(p(x=>A(x)!==B(x)),1/3);assert.equal(answer(18),'1/3');assert.equal(answer(19),'2/3');
});
test('Conditional urn probabilities agree with enumeration of labelled draws with and without replacement',()=>{
 const balls=['R1','R2','R3','B1','B2'],pairs=balls.flatMap(a=>balls.filter(b=>b!==a).map(b=>[a,b])),red=s=>s.startsWith('R'),first=pairs.filter(([a])=>red(a)),both=pairs.filter(([a,b])=>red(a)&&red(b));assert.equal(pairs.length,20);near(both.length/first.length,.5);near(both.length/pairs.length,.3);const replaced=balls.flatMap(a=>balls.map(b=>[a,b]));near(replaced.filter(([a,b])=>red(a)&&red(b)).length/replaced.length,9/25);assert.equal(answer(20),'1/2');assert.equal(answer(21),'3/10');assert.match(d.chapters[10].script,/denominator is positive/);
});
test('Coin independence differs from disjointness with positive event probabilities',()=>{
 const p=f=>coins.filter(f).length/4,A=s=>s[0]==='H',B=s=>s[1]==='H';near(p(s=>A(s)&&B(s)),p(A)*p(B));near(p(s=>A(s)&&B(s)),.25);assert.ok(.5*.5>0);assert.equal(answer(22),'1/4');assert.equal(answer(23),'Not independent');assert.match(d.chapters[11].script,/pairwise independence does not automatically imply mutual independence/);
});
test('Total probability uses a normalized partition and weighted target likelihoods',()=>{
 const priors=[2/5,3/5],likelihood=[3/4,1/4],joints=priors.map((p,i)=>p*likelihood[i]);near(priors.reduce((a,b)=>a+b),1);near(joints[0],3/10);near(joints[1],3/20);near(joints.reduce((a,b)=>a+b),9/20);assert.equal(answer(24),'9/20');assert.equal(answer(25),'A disjoint exhaustive partition');
});
test('Bayes posterior weights match the joint mass table and sum to one',()=>{
 const table=[{box:1,red:true,mass:6},{box:1,red:false,mass:2},{box:2,red:true,mass:3},{box:2,red:false,mass:9}],total=table.reduce((s,r)=>s+r.mass,0),evidence=table.filter(r=>r.red).reduce((s,r)=>s+r.mass,0);near(total,20);near(evidence/total,9/20);near(table.find(r=>r.box===1&&r.red).mass/evidence,2/3);near(table.find(r=>r.box===2&&r.red).mass/evidence,1/3);assert.equal(answer(26),'2/3');assert.equal(answer(27),'The positive total probability of the observed event');
});
test('The head count mass function groups distinct outcomes and is nonnegative and normalized',()=>{
 const counts=coins.map(s=>[...s].filter(c=>c==='H').length),mass=[0,1,2].map(v=>counts.filter(x=>x===v).length/4);assert.deepEqual(mass,[.25,.5,.25]);near(mass.reduce((a,b)=>a+b),1);assert.ok(mass.every(p=>p>=0));assert.equal(answer(28),'1/4,1/2,1/4');assert.equal(answer(29),'Nonnegative masses summing to one');
});
test('Random variable moments and variance agree with a direct probability weighted deviation sum',()=>{
 const x=[0,1,2],p=[.25,.5,.25],m=x.reduce((s,v,i)=>s+v*p[i],0),second=x.reduce((s,v,i)=>s+v*v*p[i],0);near(m,1);near(second,1.5);near(second-m*m,.5);near(x.reduce((s,v,i)=>s+p[i]*(v-m)**2,0),.5);assert.equal(answer(30),'1');assert.equal(answer(31),'1/2');
});
test('All sixteen audio chapters retain exact generation hashes and complete bounded captions',()=>{
 const t=JSON.parse(fs.readFileSync(`app/data/jee-${id}-timings.json`,'utf8'));assert.equal(t.chapters.length,16);assert.ok(t.duration>800);assert.ok(fs.readFileSync(`public/lectures/${id}/english.vtt`,'utf8').startsWith('WEBVTT'));d.chapters.forEach((c,i)=>{const stem=`public/lectures/${id}/chapter-${String(i+1).padStart(2,'0')}`,hash=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);assert.ok(fs.statSync(stem+'.mp3').size>50000);const cues=t.cues.filter(q=>q.chapter===i);assert.ok(cues.length>1);assert.equal(cues.map(q=>q.text).join(' '),c.script);cues.forEach(q=>{assert.ok(q.text.length<=140);assert.ok(q.end>q.start);});assert.ok(t.chapters[i].end>t.chapters[i].start);assert.ok(Math.abs(t.chapters[i].start-(i?t.chapters[i-1].end:0))<.001);});
});
