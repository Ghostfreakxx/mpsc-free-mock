import fs from'node:fs';import assert from'node:assert/strict';import test from'node:test';import{createHash}from'node:crypto';
import{vectorAlgebraLesson as study}from'../app/jee/classes/vector-algebra-study.ts';import{vectorBoards}from'../app/jee/classes/vector-algebra-boards.ts';
const id='vector-algebra',d=JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`,'utf8')),answer=i=>d.quiz[i].options[d.quiz[i].answer];
const near=(a,b,eps=1e-8)=>assert.ok(Math.abs(a-b)<eps,`${a} differs from ${b}`),dot=(a,b)=>a.reduce((s,v,i)=>s+v*b[i],0),add=(a,b)=>a.map((v,i)=>v+b[i]),sub=(a,b)=>a.map((v,i)=>v-b[i]),scale=(a,k)=>a.map(v=>v*k),norm=a=>Math.hypot(...a),cross=([a,b,c],[p,q,r])=>[b*r-c*q,c*p-a*r,a*q-b*p];
test('Unit 12 has fourteen substantive matching chapters, twelve examples and twenty-eight original questions',()=>{
 assert.equal(study.unit,12);assert.equal(study.subject,'Mathematics');assert.equal(d.chapters.length,14);assert.equal(study.sections.length,14);assert.equal(study.examples.length,12);assert.equal(d.quiz.length,28);assert.deepEqual(d.quiz,study.quiz);assert.equal(new Set(d.quiz.map(q=>q.question)).size,28);d.chapters.forEach((c,i)=>{assert.ok(c.script.split(/\s+/).length>=170);assert.deepEqual(c.board,vectorBoards[i].lines);assert.equal(c.board.length,4);assert.equal(study.sections[i].paragraphs[0],c.script);});assert.match(study.remaining,/Further mixed/);
});
test('Scalars, zero cases and orthonormal components are distinguished from vector directions',()=>{
 near(norm([0,0,0]),0);near(norm([0,0,1]),1);near(dot([1,0,0],[0,1,0]),0);assert.equal(answer(0),'Displacement');assert.equal(answer(1),'Zero magnitude and no unique direction');assert.equal(answer(3),'(0,0,1)');assert.match(d.chapters[0].script,/Equal magnitudes alone do not make two vectors equal/);
});
test('Magnitudes, unit vectors and negative scalar multiplication retain signs and lengths',()=>{
 const U=[2,-1,2],unit=scale(U,1/norm(U));near(norm(U),3);near(norm(unit),1);assert.deepEqual(scale(U,-2),[-4,2,-4]);near(norm(scale(U,-2)),6);assert.ok(dot(U,unit)>0);assert.equal(answer(2),'3');assert.equal(answer(8),'(2/3,−1/3,2/3)');assert.equal(answer(9),'6');
});
test('Addition and subtraction examples and a closed polygon satisfy component identities',()=>{
 const U=[2,-1,3],V=[-1,4,1];assert.deepEqual(add(U,V),[1,3,4]);assert.deepEqual(sub(U,V),[3,-5,2]);assert.deepEqual(sub(V,U),scale(sub(U,V),-1));assert.deepEqual(add(add([3,0,0],[0,4,0]),[-3,-4,0]),[0,0,0]);near(norm(add([3,0,0],[0,4,0])),5);assert.equal(answer(4),'5');assert.equal(answer(5),'The zero vector');assert.equal(answer(6),'(3,−5,2)');assert.equal(answer(7),'v−u=−(u−v)');
});
test('Resultant magnitude bounds and the parallelogram law hold for mixed component signs',()=>{
 for(const U of[[1,2,3],[-2,0,4],[0,0,0]])for(const V of[[3,-1,2],[0,2,0],[-1,0,0]]){const sum=norm(add(U,V)),difference=norm(sub(U,V));assert.ok(sum<=norm(U)+norm(V)+1e-10);assert.ok(sum+1e-10>=Math.abs(norm(U)-norm(V)));near(sum**2+difference**2,2*(dot(U,U)+dot(V,V)));}
});
test('Position displacements, internal section ratios and translation invariance agree',()=>{
 const A=[1,-1,2],B=[4,5,-1],P=[2,1,1],T=[-3,2,5];assert.deepEqual(sub(B,A),[3,6,-3]);assert.deepEqual(scale(add(scale(A,2),B),1/3),P);near(norm(sub(P,A))/norm(sub(B,P)),.5);near(norm(cross(sub(P,A),sub(B,A))),0);assert.deepEqual(sub(add(B,T),add(A,T)),sub(B,A));assert.deepEqual(scale(add(A,B),.5),[2.5,2,.5]);assert.equal(answer(10),'(3,6,−3)');assert.equal(answer(11),'(2,1,1)');
});
test('Linear combination coefficients and opposite parallel directions are independently reconstructed',()=>{
 const U=[1,0],V=[1,1];assert.deepEqual(add(scale(U,1),scale(V,2)),[3,2]);near(norm(cross([2,-1,2],[-4,2,-4])),0);assert.ok(dot([2,-1,2],[-4,2,-4])<0);assert.equal(answer(12),'(1,2)');assert.equal(answer(13),'Parallel with opposite orientations');
});
test('Dot products preserve obtuse vector angles instead of replacing them with smaller line angles',()=>{
 near(dot([1,1,0],[1,-1,0]),0);const U=[1,0,0],V=[-1,1,0];near(dot(U,V),-1);near(Math.acos(dot(U,V)/(norm(U)*norm(V))),3*Math.PI/4);assert.equal(answer(14),'0');assert.equal(answer(15),'3π/4');assert.match(d.chapters[7].script,/dot product with the zero vector is zero but no vector angle/);
});
test('Resultant dot expansions and equal magnitude diagonal conditions are correct',()=>{
 const U=[3,0,0],V=[2,2*Math.sqrt(3),0];near(norm(V),4);near(dot(U,V),6);near(norm(add(U,V)),Math.sqrt(37));near(norm(sub(U,V)),Math.sqrt(13));near(dot(add(U,V),sub(U,V)),9-16);near(dot(add([1,2,0],[2,-1,0]),sub([1,2,0],[2,-1,0])),0);assert.equal(answer(16),'6');assert.equal(answer(17),'(√37,√13)');
});
test('Signed scalar and vector projections respond differently to direction reversal',()=>{
 const U=[3,4,0],V=[1,0,0],W=[-1,0,0],projection=v=>scale(v,dot(U,v)/dot(v,v));near(dot(U,V)/norm(V),3);near(dot(U,W)/norm(W),-3);assert.deepEqual(projection(V),[3,0,0]);const PW=projection(W);PW.forEach((x,i)=>near(x,[3,0,0][i]));near(dot(sub(U,PW),W),0);assert.equal(answer(18),'3');assert.equal(answer(19),'(3,0,0)');
});
test('Cross product basis signs, worked components and orthogonality are consistent with orientation',()=>{
 assert.deepEqual(cross([0,1,0],[1,0,0]),[0,0,-1]);const U=[1,2,3],V=[2,-1,1],C=cross(U,V);assert.deepEqual(C,[5,5,-5]);near(dot(C,U),0);near(dot(C,V),0);near(norm(C),5*Math.sqrt(3));cross(V,U).forEach((x,i)=>near(x,-C[i]));assert.equal(answer(20),'−k');assert.equal(answer(21),'(5,5,−5)');
});
test('Cross product area and parallelism tests cover two dimensional embeddings and triangle side origins',()=>{
 near(norm(cross([3,0,0],[0,4,0])),12);const A=[1,0,0],B=[3,0,0],C=[1,3,0];near(norm(cross(sub(B,A),sub(C,A)))/2,3);near(norm(cross([2,-1,2],[-4,2,-4])),0);assert.equal(answer(22),'12');assert.equal(answer(23),'3');assert.equal(answer(27),'A zero cross product');
});
test('Scalar triple products retain cyclic orientation, volume factors and coplanarity',()=>{
 const U=[2,0,0],V=[0,3,0],W=[0,0,4],triple=(a,b,c)=>dot(a,cross(b,c));near(triple(U,V,W),24);near(triple(V,W,U),24);near(triple(V,U,W),-24);near(Math.abs(triple(U,V,W))/6,4);near(triple([1,0,1],[0,1,1],[1,1,2]),0);assert.equal(answer(24),'24');assert.equal(answer(25),'4');
});
test('Parameter perpendicularity answers satisfy the original condition without creating zero vectors',()=>{
 const U=[1,2,-1],k=1,V=[2,k,4];near(dot(U,V),0);assert.ok(norm(U)>0&&norm(V)>0);assert.equal(answer(26),'1');assert.match(d.chapters[13].script,/cancelling a possibly zero component/);
});
test('All fourteen audio chapters preserve generation hashes and complete bounded captions',()=>{
 const t=JSON.parse(fs.readFileSync(`app/data/jee-${id}-timings.json`,'utf8'));assert.equal(t.chapters.length,14);assert.ok(t.duration>700);assert.ok(fs.readFileSync(`public/lectures/${id}/english.vtt`,'utf8').startsWith('WEBVTT'));d.chapters.forEach((c,i)=>{const stem=`public/lectures/${id}/chapter-${String(i+1).padStart(2,'0')}`,hash=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:d.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),hash);assert.ok(fs.statSync(stem+'.mp3').size>50000);const cues=t.cues.filter(q=>q.chapter===i);assert.ok(cues.length>1);assert.equal(cues.map(q=>q.text).join(' '),c.script);cues.forEach(q=>{assert.ok(q.text.length<=140);assert.ok(q.end>q.start);});assert.ok(t.chapters[i].end>t.chapters[i].start);assert.ok(Math.abs(t.chapters[i].start-(i?t.chapters[i-1].end:0))<.001);});
});
