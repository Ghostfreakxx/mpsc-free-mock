import fs from'node:fs';import assert from'node:assert/strict';import test from'node:test';import{createHash}from'node:crypto';
import{threeDimensionalGeometryLesson as study}from'../app/jee/classes/three-dimensional-geometry-study.ts';import{spaceBoards}from'../app/jee/classes/three-dimensional-geometry-boards.ts';
const id='three-dimensional-geometry',d=JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`,'utf8')),answer=i=>d.quiz[i].options[d.quiz[i].answer];
const near=(a,b,eps=1e-8)=>assert.ok(Math.abs(a-b)<eps,`${a} differs from ${b}`),dot=(a,b)=>a.reduce((s,v,i)=>s+v*b[i],0),sub=(a,b)=>a.map((v,i)=>v-b[i]),norm=a=>Math.hypot(...a),cross=([a,b,c],[p,q,r])=>[b*r-c*q,c*p-a*r,a*q-b*p],line=(A,D,t)=>A.map((v,i)=>v+t*D[i]);
test('Unit 11 has fourteen substantive chapters, twelve examples and twenty-eight matching original questions',()=>{
 assert.equal(study.unit,11);assert.equal(study.subject,'Mathematics');assert.equal(d.chapters.length,14);assert.equal(study.sections.length,14);assert.equal(study.examples.length,12);assert.equal(d.quiz.length,28);assert.deepEqual(d.quiz,study.quiz);assert.equal(new Set(d.quiz.map(q=>q.question)).size,28);d.chapters.forEach((c,i)=>{assert.ok(c.script.split(/\s+/).length>=170);assert.deepEqual(c.board,spaceBoards[i].lines);assert.equal(c.board.length,4);assert.equal(study.sections[i].paragraphs[0],c.script);});assert.match(study.remaining,/Further mixed/);
});
test('Three dimensional distances and coordinate projections use the appropriate components',()=>{
 near(norm([2,-3,6]),7);near(norm(sub([3,-1,9],[1,2,3])),7);near(norm(sub([1,2,3],[3,-1,9])),7);near(norm(sub([3,-1,9],[3,-1,0])),9);near(norm(sub([3,-1,9],[0,0,9])),Math.sqrt(10));assert.equal(answer(0),'7');assert.equal(answer(1),'On a coordinate axis');assert.equal(answer(2),'7');assert.equal(answer(3),'(3,−1,0)');
});
test('Internal and external section points satisfy both collinearity and the distance ratio',()=>{
 const A=[0,0,0],B=[6,3,9];for(const P of[[4,2,6],[12,6,18]]){near(norm(sub(P,A))/norm(sub(P,B)),2);near(norm(cross(sub(P,A),sub(B,A))),0);}assert.deepEqual(B.map(v=>v/2),[3,1.5,4.5]);assert.equal(answer(4),'(4,2,6)');assert.equal(answer(5),'(12,6,18)');
});
test('Direction equivalence and direction cosines retain orientation signs and unit length',()=>{
 const D=[2,-3,6],opposite=[-4,6,-12],U=D.map(v=>v/norm(D));near(norm(cross(D,opposite)),0);assert.ok(dot(D,opposite)<0);near(norm(U),1);near(dot(U,U),1);assert.ok(Math.acos(U[1])>Math.PI/2);assert.equal(norm([0,0,0]),0);assert.equal(answer(6),'(−4,6,−12)');assert.equal(answer(7),'(0,0,0)');assert.equal(answer(8),'(2/7,−3/7,6/7)');assert.equal(answer(9),'l²+m²+n²=1');
});
test('Line angles use the absolute normalized dot product without asserting intersection from it',()=>{
 const angle=(a,b)=>Math.acos(Math.abs(dot(a,b))/(norm(a)*norm(b)));near(angle([1,0,0],[1,1,0]),Math.PI/4);near(angle([-2,0,0],[3,3,0]),Math.PI/4);near(angle([1,0,0],[0,0,1]),Math.PI/2);assert.equal(answer(10),'π/4');assert.equal(answer(11),'Perpendicular directions, but not necessarily intersection');
});
test('Vector and parametric equations share one parameter and scale distance by direction length',()=>{
 const A=[1,2,3],D=[2,-1,4];assert.deepEqual(line(A,D,2),[5,0,11]);near(norm(sub(line(A,D,3),line(A,D,2))),Math.sqrt(21));assert.deepEqual(line(A,D,2),line(A,D.map(v=>2*v),1));assert.equal(answer(12),'(5,0,11)');assert.equal(answer(13),'√21');
});
test('Symmetric equations encode the same parameter and preserve fixed coordinates for zero components',()=>{
 const A=[1,2,3],D=[2,-1,4];for(const t of[-2,0,3]){const P=line(A,D,t);P.forEach((v,i)=>near((v-A[i])/D[i],t));const Q=line(A,[0,2,-1],t);near(Q[0],1);near((Q[1]-2)/2,(Q[2]-3)/-1);}assert.equal(answer(14),'x=1, (y−2)/2=(z−3)/(−1)');assert.equal(answer(15),'Direction ratios');
});
test('Two point construction reaches both endpoints and the midpoint with the stated segment parameter',()=>{
 const A=[1,0,2],B=[3,4,0],D=sub(B,A);assert.deepEqual(D,[2,4,-2]);assert.deepEqual(line(A,D,0),A);assert.deepEqual(line(A,D,1),B);assert.deepEqual(line(A,D,.5),[2,2,1]);assert.equal(answer(16),'(2,4,−2)');assert.equal(answer(17),'(2,2,1)');
});
test('Skew classification checks nonparallel directions and inconsistent position coordinates',()=>{
 const D=[1,0,0],E=[1,0,1];assert.ok(norm(cross(D,E))>0);for(const t of[-2,0,3])for(const s of[-1,0,2])assert.notEqual(line([0,0,0],D,t)[1],line([0,2,1],E,s)[1]);assert.deepEqual(line([0,0,0],D,3),line([2,0,0],D,1));assert.equal(answer(18),'Skew');assert.equal(answer(19),'Coincident');
});
test('The perpendicular foot is a line member with orthogonal connecting displacement',()=>{
 const P=[2,3,4],A=[0,0,0],D=[1,0,0],t=dot(sub(P,A),D)/dot(D,D),H=line(A,D,t);assert.deepEqual(H,[2,0,0]);near(dot(sub(P,H),D),0);near(norm(sub(P,H)),5);near(norm(cross(sub(P,A),D))/norm(D),5);for(const u of[-2,0,2,4])assert.ok(norm(sub(P,line(A,D,u)))>=5);assert.equal(answer(20),'(2,0,0)');assert.equal(answer(21),'5');
});
test('The skew distance scalar triple formula is invariant under base shifts and direction rescaling',()=>{
 const A=[0,0,0],B=[0,2,1],D=[1,0,0],E=[1,0,1];assert.deepEqual(cross(D,E),[0,-1,0]);const dist=(a,b,p,q)=>Math.abs(dot(sub(b,a),cross(p,q)))/norm(cross(p,q));near(dist(A,B,D,E),2);for(const t of[-2,1,3])near(dist(line(A,D,t),line(B,E,t+1),D.map(v=>-3*v),E.map(v=>2*v)),2);near(dist(A,A,D,E),0);assert.equal(answer(22),'(0,−1,0)');assert.equal(answer(23),'2');
});
test('Closest parameters and the common perpendicular equation meet both lines at right angles',()=>{
 const P=[-1,0,0],Q=[-1,2,0],D=[1,0,0],E=[1,0,1],V=sub(Q,P);assert.deepEqual(line([0,0,0],D,-1),P);assert.deepEqual(line([0,2,1],E,-1),Q);near(dot(V,D),0);near(dot(V,E),0);near(norm(V),2);for(const t of[-3,-1,0,2])for(const s of[-3,-1,0,2])assert.ok(norm(sub(line([0,2,1],E,s),line([0,0,0],D,t)))>=2);for(const u of[-1,0,2,3]){const R=[-1,u,0];near(norm(cross(sub(R,P),V)),0);}assert.equal(answer(24),'t=s=−1');assert.equal(answer(25),'r=(−1,u,0)');
});
test('Parallel distance uses its separate formula and admits infinitely many nearest pairs',()=>{
 const D=[1,0,0],B=[0,3,4];near(norm(cross(B,D))/norm(D),5);near(norm(cross(B,[-2,0,0]))/2,5);for(const t of[-3,0,2]){const P=[t,0,0],Q=[t,3,4];near(norm(sub(Q,P)),5);near(dot(sub(Q,P),D),0);}near(norm(cross([2,0,0],D)),0);assert.equal(answer(26),'5');assert.equal(answer(27),'Nonparallel nonzero directions');
});
test('All fourteen audio chapters retain exact generation hashes and complete bounded captions',()=>{
 const t=JSON.parse(fs.readFileSync(`app/data/jee-${id}-timings.json`,'utf8'));assert.equal(t.chapters.length,14);assert.ok(t.duration>700);assert.ok(fs.readFileSync(`public/lectures/${id}/english.vtt`,'utf8').startsWith('WEBVTT'));d.chapters.forEach((c,i)=>{const stem=`public/lectures/${id}/chapter-${String(i+1).padStart(2,'0')}`,hash=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);assert.ok(fs.statSync(stem+'.mp3').size>50000);const cues=t.cues.filter(q=>q.chapter===i);assert.ok(cues.length>1);assert.equal(cues.map(q=>q.text).join(' '),c.script);cues.forEach(q=>{assert.ok(q.text.length<=140);assert.ok(q.end>q.start);});assert.ok(t.chapters[i].end>t.chapters[i].start);assert.ok(Math.abs(t.chapters[i].start-(i?t.chapters[i-1].end:0))<.001);});
});
