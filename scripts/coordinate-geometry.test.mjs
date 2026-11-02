import fs from'node:fs';import assert from'node:assert/strict';import test from'node:test';import{createHash}from'node:crypto';
import{coordinateGeometryLesson as study}from'../app/jee/classes/coordinate-geometry-study.ts';import{coordinateBoards}from'../app/jee/classes/coordinate-geometry-boards.ts';
const id='coordinate-geometry',d=JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`,'utf8')),answer=i=>d.quiz[i].options[d.quiz[i].answer];
const near=(a,b,eps=1e-8)=>assert.ok(Math.abs(a-b)<eps,`${a} differs from ${b}`),distance=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);
const lineDistance=([x,y],[A,B,C])=>Math.abs(A*x+B*y+C)/Math.hypot(A,B);
test('Unit 10 has twenty substantive matching chapters, sixteen examples and forty original questions',()=>{
 assert.equal(study.unit,10);assert.equal(study.subject,'Mathematics');assert.equal(d.chapters.length,20);assert.equal(study.sections.length,20);assert.equal(study.examples.length,16);assert.equal(d.quiz.length,40);assert.deepEqual(d.quiz,study.quiz);assert.equal(new Set(d.quiz.map(q=>q.question)).size,40);d.chapters.forEach((c,i)=>{assert.ok(c.script.split(/\s+/).length>=170);assert.deepEqual(c.board,coordinateBoards[i].lines);assert.equal(c.board.length,4);assert.equal(study.sections[i].paragraphs[0],c.script);});assert.match(study.remaining,/Further mixed/);
});
test('Distance and coincident-point keys follow the nonnegative Euclidean metric',()=>{
 near(distance([-1,2],[3,5]),5);near(distance([3,5],[-1,2]),5);near(distance([3,5],[3,5]),0);assert.equal(answer(0),'5');assert.equal(answer(1),'The points coincide');
});
test('Internal and external section points meet the stated positive distance ratios',()=>{
 const A=[0,0],B=[6,3],P=[4,2],Q=[12,6];near(distance(A,P)/distance(P,B),2);near(distance(A,Q)/distance(Q,B),2);assert.ok(P[0]>A[0]&&P[0]<B[0]);assert.ok(Q[0]>B[0]);assert.deepEqual(B.map((v,i)=>(A[i]+v)/2),[3,1.5]);assert.equal(answer(2),'(4,2)');assert.equal(answer(3),'(12,6)');
});
test('Locus examples satisfy their original distance conditions rather than just sampled squared equations',()=>{
 for(const y of[-3,0,4])near(distance([0,y],[-2,0]),distance([0,y],[2,0]));for(const t of[0,.5,2,4])near(distance([2+3*Math.cos(t),-1+3*Math.sin(t)],[2,-1]),3);assert.equal(answer(4),'x=0');assert.equal(answer(5),'(x−h)²+(y−k)²=r²');
});
test('Line forms and perpendicular slopes preserve given points and handle vertical directions',()=>{
 near(2*(-.5),-1);for(const x of[-1,2,4]){const y=3*x-7;near(y+1,3*(x-2));}near(3*2-7,-1);near((6-2)/(3-1),2);assert.equal(answer(6),'−1/2');assert.equal(answer(7),'Undefined slope');assert.equal(answer(8),'y=3x−7');assert.equal(answer(9),'A vertical line');
});
test('Intercept and normal forms and smaller angles are invariant under nonzero equation scaling',()=>{
 near(3/3+0/4,1);near(0/3+4/4,1);near(Math.hypot(4/5,3/5),1);near(lineDistance([0,0],[4,3,-12]),12/5);near(lineDistance([0,0],[-8,-6,24]),12/5);near(Math.atan(1),Math.PI/4);near(Math.acos(Math.abs(1*0+(-1)*1)/(Math.sqrt(2)*1)),Math.PI/4);assert.equal(answer(10),'(3,0) and (0,4)');assert.equal(answer(11),'12/5');assert.equal(answer(14),'π/4');assert.equal(answer(15),'Perpendicular directions');
});
test('The finite concurrence point satisfies all original lines with its computed parameter',()=>{
 const x=3,y=2,k=11;near(x+y,5);near(x-y,1);near(3*x+y,k);assert.equal(1*(-1)-1*1,-2);assert.equal(answer(12),'(3,2)');assert.equal(answer(13),'11');assert.match(d.chapters[6].script,/zero determinant alone can also occur for parallel arrangements/);
});
test('Point and parallel line distances use normalized matching normals',()=>{
 near(lineDistance([1,2],[3,4,-6]),1);near(lineDistance([1,2],[6,8,-12]),1);near(lineDistance([2,0],[3,4,-6]),0);near(lineDistance([2,0],[3,4,4]),2);near(Math.abs(4-(-6))/Math.hypot(3,4),2);assert.equal(answer(16),'1');assert.equal(answer(17),'2');
});
test('Triangle centres have equal circumdistances, altitude intersections and centroid coordinates',()=>{
 const A=[0,0],B=[6,0],C=[0,8],O=[3,4],G=[2,8/3],H=[0,0];for(const P of[A,B,C])near(distance(P,O),5);near(G[0],(A[0]+B[0]+C[0])/3);near(G[1],(A[1]+B[1]+C[1])/3);near(H[0],0);near(H[1],0);assert.equal(answer(18),'(2,8/3)');assert.equal(answer(19),'(3,4) and (0,0)');assert.match(d.chapters[9].script,/Collinear vertices do not form a nondegenerate triangle/);
});
test('General circle completion and diameter construction preserve the full original equations',()=>{
 for(const t of[0,.5,2,4]){const x=2+5*Math.cos(t),y=-3+5*Math.sin(t);near(x*x+y*y-4*x+6*y-12,0);}near(distance([-1,0],[3,0])/2,2);for(const t of[0,1,3]){const x=1+2*Math.cos(t),y=2*Math.sin(t);near((x+1)*(x-3)+y*y,0);}assert.equal(answer(20),'(2,−3), 5');assert.equal(answer(21),'Empty');assert.equal(answer(22),'(x−1)²+y²=4');assert.equal(answer(23),'A zero radius point');
});
test('Line circle intersections, chord length and tangent contact agree geometrically and algebraically',()=>{
 for(const x of[-4,4])near(x*x+3*3,25);near(distance([-4,3],[4,3]),8);near(2*Math.sqrt(25-9),8);near(3*3+4*4,25);near(lineDistance([0,0],[3,4,-25]),5);near(3*(-4)+4*3,0);assert.equal(answer(24),'(−4,3) and (4,3)');assert.equal(answer(25),'8');assert.equal(answer(26),'3x+4y=25');assert.equal(answer(27),'d=r');
});
test('Parabola orientations, focus directrix distances and parameter tangents are consistent',()=>{
 const a=2;for(const t of[-2,-1,0,1,2]){const x=a*t*t,y=2*a*t;near(y*y,4*a*x);near(distance([x,y],[a,0]),Math.abs(x+a));near(t*y,x+a*t*t);near(distance([-x,y],[-a,0]),Math.abs(-x-a));near(distance([y,x],[0,a]),Math.abs(x+a));}near(4*a,8);near(1*4,2+2);assert.equal(answer(28),'A parabola');assert.equal(answer(30),'(2,0)');assert.equal(answer(31),'8');assert.equal(answer(32),'(2,4)');assert.equal(answer(33),'y=x+2');assert.match(d.chapters[14].script,/literal equation would give only the focus/);
});
test('Ellipse foci, directrices, full axes and latus rectum match focus geometry in both orientations',()=>{
 const a=5,b=3,c=Math.sqrt(a*a-b*b),e=c/a;near(c,4);near(e,.8);near(2*b*b/a,18/5);for(const t of[0,.4,1,2]){const P=[a*Math.cos(t),b*Math.sin(t)];near(P[0]**2/25+P[1]**2/9,1);near(distance(P,[c,0])+distance(P,[-c,0]),2*a);near(distance(P,[c,0]),e*Math.abs(P[0]-a/e));const V=[P[1],P[0]];near(distance(V,[0,c]),e*Math.abs(V[1]-a/e));}assert.equal(answer(29),'c²=a²−b²');assert.equal(answer(34),'(±4,0)');assert.equal(answer(35),'4/5 and 18/5');
});
test('Hyperbola foci, asymptotes, directrices and focal chords use the positive term axis',()=>{
 const a=3,b=4,c=5,e=c/a;near(c*c,a*a+b*b);near(a/e,9/5);near(2*b*b/a,32/3);for(const t of[-1,-.4,.4,1]){const P=[a*Math.cosh(t),b*Math.sinh(t)];near(P[0]**2/9-P[1]**2/16,1);near(Math.abs(distance(P,[-c,0])-distance(P,[c,0])),2*a);near(distance(P,[c,0]),e*Math.abs(P[0]-a/e));}near(1/9-(b/a)**2/16,0);assert.equal(answer(36),'(±5,0)');assert.equal(answer(37),'y=±(4/3)x');
});
test('Translated conic features are obtained by shifting all relevant coordinates',()=>{
 const centre=[2,-1],foci=[[-2,-1],[6,-1]];for(const F of foci)near(distance(F,centre),4);for(const t of[0,1,2]){const P=[2+5*Math.cos(t),-1+3*Math.sin(t)];near((P[0]-2)**2/25+(P[1]+1)**2/9,1);near(distance(P,foci[0])+distance(P,foci[1]),10);}assert.equal(answer(38),'(2,−1)');assert.equal(answer(39),'(−2,−1) and (6,−1)');
});
test('Twenty audio chapters retain exact generation hashes and complete bounded captions',()=>{
 const t=JSON.parse(fs.readFileSync(`app/data/jee-${id}-timings.json`,'utf8'));assert.equal(t.chapters.length,20);assert.ok(t.duration>1000);assert.ok(fs.readFileSync(`public/lectures/${id}/english.vtt`,'utf8').startsWith('WEBVTT'));d.chapters.forEach((c,i)=>{const stem=`public/lectures/${id}/chapter-${String(i+1).padStart(2,'0')}`,hash=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);assert.ok(fs.statSync(stem+'.mp3').size>50000);const cues=t.cues.filter(q=>q.chapter===i);assert.ok(cues.length>1);assert.equal(cues.map(q=>q.text).join(' '),c.script);cues.forEach(q=>{assert.ok(q.text.length<=140);assert.ok(q.end>q.start);});assert.ok(t.chapters[i].end>t.chapters[i].start);assert.ok(Math.abs(t.chapters[i].start-(i?t.chapters[i-1].end:0))<.001);});
});
