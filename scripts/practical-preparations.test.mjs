import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import {createHash}from'node:crypto';import{practicalPreparationsAdditions as a}from'../app/jee/classes/practical-preparations-additions.ts';import{studyLessons}from'../app/jee/classes/study-lessons.ts';
const answer=i=>a.quiz[i].options[a.quiz[i].answer];
test('haloform example conserves every atom and charge',()=>{
 assert.deepEqual({C:3,H:6+4,O:1+4,I:6,charge:-4},{C:1+2,H:1+3+6,O:2+3,I:3+3,charge:-1-3});
 assert.match(answer(6),/One in CHI3 and two in acetate/);assert.equal(answer(7),'75%');
});
test('clock redox and scavenger ledgers conserve atoms, charge and threshold ratio',()=>{
 assert.deepEqual({H:2+2,O:2,I:2,charge:-2+2},{H:4,O:2,I:2,charge:0});
 assert.deepEqual({I:2,S:4,O:6,charge:-4},{I:2,S:4,O:6,charge:-2-2});
 assert.equal(40/2,20);assert.equal((20/10)/(20/20),2);assert.equal(answer(12),'20 micromoles');assert.equal(answer(13),'Doubles');
});
test('heat sign and molar basis agree with the worked data',()=>{
 assert.equal(-200*(-.5),100);assert.equal(100/.01/1000,10);assert.equal(-100/.002/1000,-50);assert.equal(answer(10),'+100 J');assert.equal(answer(11),'−50 kJ/mol');
});
test('aniline-yellow lesson distinguishes conserved formula from connectivity',()=>{
 assert.match(a.chapters[2].formula,/Ph–N=N–NH–Ph/);assert.match(a.chapters[2].formula,/p-H2N–C6H4–N=N–Ph/);assert.match(a.chapters[2].script,/weakly acidic/);assert.match(answer(5),/share a formula but differ/);
});
test('preparation material is integrated after the unchanged practice prefix',()=>{
 const d=JSON.parse(fs.readFileSync('app/data/jee-practical-chemistry-lecture.json'));const l=studyLessons.find(l=>l.id==='practical-chemistry');
 assert.deepEqual(d.chapters.slice(41),a.chapters);assert.deepEqual(d.quiz.slice(72),a.quiz);assert.deepEqual(l.quiz,d.quiz);assert.equal(l.sections.length,51);
 assert.equal(createHash('sha256').update(JSON.stringify(d.quiz.slice(0,72))).digest('hex'),"cda489bbce45e181e44b4a1090468116f546a5bcc8d6598a2336df18b7711c4d");
});
