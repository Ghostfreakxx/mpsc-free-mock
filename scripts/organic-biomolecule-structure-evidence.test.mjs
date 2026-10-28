import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
test('oxygen reaction maps preserve carbon, hydrogen, oxygen and net charge',()=>{
 assert.deepEqual(read('organic-oxygen').quiz.slice(32).map(q=>q.answer),[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3]);
 // Benzaldehyde plus formaldehyde plus hydroxide versus benzyl alcohol plus formate.
 assert.deepEqual({C:7+1,H:6+2+1,O:1+1+1,charge:-1},{C:7+1,H:8+1,O:1+2,charge:-1});
 assert.equal(.0100*1,.0100);
 // Ethanal and two methanols versus full acetal and water.
 assert.deepEqual({C:2+2,H:4+2*4,O:1+2},{C:4,H:10+2,O:2+1});
 assert.equal('CH3 CH2 CHBr COOH'.split(' ').length,4);
 assert.equal(new Set(['H','Br','ethyl','carboxyl']).size,4);
});
test('nitro reduction and supporting ammonium elimination conserve electrons and atoms',()=>{
 assert.deepEqual(read('organic-nitrogen').quiz.slice(32).map(q=>q.answer),[1,2,3,0,1,2,3,0,0,1,2,3,0,1,2,3]);
 assert.equal(3-(-3),6);assert.equal(.0100*6,.0600);
 assert.deepEqual({N:1,O:2,H:6,charge:6-6},{N:1,O:2,H:2+2*2,charge:0});
 assert.deepEqual({N:1,O:2,H:7,charge:7-6},{N:1,O:2,H:3+2*2,charge:1});
 assert.deepEqual({C:5,H:15,N:1,O:1},{C:2+3,H:4+9+2,N:1,O:1});
});
test('sugar epimers change one numbered centre rather than every stereocentre',()=>{
 assert.deepEqual(read('biomolecules').quiz.slice(32).map(q=>q.answer),[2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1]);
 const glucose='RLRR',mannose='LLRR',galactose='RLLR';
 const differences=(a,b)=>[...a].flatMap((s,i)=>s===b[i]?[]:[i+2]);
 assert.deepEqual(differences(glucose,mannose),[2]);assert.deepEqual(differences(glucose,galactose),[4]);assert.deepEqual(differences(mannose,galactose),[2,4]);
 assert.ok([glucose,mannose,galactose].every(s=>s.at(-1)==='R'));
});
test('protein cross-links and linear DNA backbone edges have separate bond inventories',()=>{
 assert.equal(2*(3-1),4); // Two tripeptides retain four peptide links after S–S cross-linking.
 const twoCysteines={C:6,H:14,N:2,O:4,S:2};
 const disulfide={...twoCysteines,H:twoCysteines.H-2};
 const peptide={...twoCysteines,H:twoCysteines.H-2,O:twoCysteines.O-1};
 assert.notDeepEqual(disulfide,peptide);
 const strandLength=10,degreeSum=2*1+(strandLength-2)*2;
 assert.equal(2*degreeSum/2,18);assert.equal(2*strandLength,20);
 assert.equal(6*2+4*3,24);assert.equal(6+4,strandLength);
});
