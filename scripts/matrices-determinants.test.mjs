import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import { createHash } from 'node:crypto';
import { matricesDeterminantsLesson as study } from '../app/jee/classes/matrices-determinants-study.ts';
import { matrixBoards } from '../app/jee/classes/matrices-determinants-boards.ts';
const data=JSON.parse(fs.readFileSync('app/data/jee-matrices-determinants-lecture.json','utf8'));
const det=a=>a.length===1?a[0][0]:a[0].reduce((s,v,j)=>s+(-1)**j*v*det(a.slice(1).map(r=>r.filter((_,k)=>k!==j))),0);
const multiply=(a,b)=>a.map(r=>b[0].map((_,j)=>r.reduce((s,v,k)=>s+v*b[k][j],0)));
const adj=a=>a.map((_,i)=>a.map((_,j)=>(-1)**(i+j)*det(a.filter((_,r)=>r!==j).map(r=>r.filter((_,c)=>c!==i)))));
const selected=i=>data.quiz[i].options[data.quiz[i].answer];
test('Maths Unit 3 has a recorded companion with complete chapter, board and quiz parity',()=>{
 assert.equal(study.subject,'Mathematics');assert.equal(study.unit,3);assert.equal(data.chapters.length,10);assert.equal(study.sections.length,10);assert.equal(study.examples.length,8);assert.equal(data.quiz.length,20);assert.deepEqual(study.quiz,data.quiz);
 data.chapters.forEach((c,i)=>{assert.ok(c.script.split(/\s+/).length>=180);assert.equal(study.sections[i].paragraphs[0],c.script);assert.equal(matrixBoards[i].title,c.title);assert.equal(matrixBoards[i].lines.length,4);});
 assert.match(study.remaining,/Further parameter-dependent/);assert.match(study.remaining,/not a claim/);
});
test('Multiplication, transpose decomposition and two by two inverse calculations are independently correct',()=>{
 const a=[[1,2],[0,1]],b=[[1,0],[3,1]];assert.deepEqual(multiply(a,b),[[7,2],[3,1]]);assert.deepEqual(multiply(b,a),[[1,2],[3,7]]);assert.equal(selected(5),'[7 2; 3 1]');
 const c=[[2,1],[5,3]];assert.equal(det(c),1);assert.deepEqual(multiply(c,adj(c)),[[1,0],[0,1]]);assert.equal(selected(13),'[3 −1; −5 2]');assert.deepEqual(multiply(adj(c),[[5],[13]]),[[2],[1]]);
 const symmetric=[[1,2],[2,2]],skew=[[0,1],[-1,0]];assert.deepEqual(symmetric.map((r,i)=>r.map((v,j)=>v+skew[i][j])),[[1,3],[1,2]]);
});
test('Three by three cofactors and inverse solve all three original equations',()=>{
 const a=[[1,1,0],[0,1,1],[1,0,1]],cofactorTranspose=adj(a);assert.equal(det(a),2);assert.deepEqual(cofactorTranspose,[[1,-1,1],[1,1,-1],[-1,1,1]]);assert.deepEqual(multiply(a,cofactorTranspose),[[2,0,0],[0,2,0],[0,0,2]]);assert.deepEqual(multiply(a,[[1],[2],[3]]),[[3],[5],[4]]);assert.equal(selected(11),'1');assert.equal(selected(10),'2');
});
test('Singular examples preserve consistency distinctions and exceptional parameter cases',()=>{
 assert.equal(det([[1,1],[2,2]]),0);assert.notEqual(5-2*2,0);assert.equal(4-2*2,0);assert.equal(selected(16),'No solution');assert.equal(selected(17),'Infinitely many solutions');
 for(const t of [-3,0,7]){const [x,y,z]=[2-t,1,t];assert.equal(x+y+z,3);assert.equal(x-y+z,1);assert.equal(2*x+2*z,4);}
 for(const lambda of [-3,0,2]){const x=2/(lambda+1);assert.equal(lambda*x+x,2);assert.notEqual(det([[lambda,1],[1,lambda]]),0);}
 assert.equal(det([[1,1],[1,1]]),0);assert.equal(det([[-1,1],[1,-1]]),0);
});
test('Triangle areas, scaling and collinearity agree with independent determinants',()=>{
 assert.equal(Math.abs(det([[0,0,1],[4,0,1],[0,3,1]]))/2,6);assert.equal(det([[1,2,1],[3,4,1],[5,6,1]]),0);assert.equal(selected(18),'6 square units');assert.equal(selected(19),'6');
 const a=[[1,1,0],[0,1,1],[1,0,1]];assert.equal(det(a.map(r=>r.map(v=>3*v))),3**3*det(a));assert.equal(selected(8),'54');
});
test('Every narration chapter has validated timings, captions and a nonempty audio file',()=>{
 const timing=JSON.parse(fs.readFileSync('app/data/jee-matrices-determinants-timings.json','utf8'));assert.equal(timing.chapters.length,10);assert.ok(timing.duration>600);const vtt=fs.readFileSync('public/lectures/matrices-determinants/english.vtt','utf8');assert.ok(vtt.startsWith('WEBVTT'));
 timing.chapters.forEach((c,i)=>{assert.ok(c.end>c.start);const cues=timing.cues.filter(q=>q.chapter===i);assert.ok(cues.length>1);assert.equal(cues.map(q=>q.text).join(' '),data.chapters[i].script);cues.forEach(q=>assert.ok(q.text.length<=140));if(i)assert.ok(c.start>=timing.chapters[i-1].end-.01);const stem=`public/lectures/matrices-determinants/chapter-${String(i+1).padStart(2,'0')}`;assert.ok(fs.statSync(stem+'.mp3').size>50000);const expected=createHash('sha256').update(JSON.stringify({script:data.chapters[i].script,instructions:data.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');assert.equal(fs.readFileSync(stem+'.sha256','utf8'),expected);});
});
