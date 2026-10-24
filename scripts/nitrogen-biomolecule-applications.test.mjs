import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const nitrogen=read('organic-nitrogen'),bio=read('biomolecules');
const answer=(lesson,i)=>lesson.quiz[i].options[lesson.quiz[i].answer];
test('carbylamine net equation conserves all elements and the isocyanide carbon source',()=>{
 // Ethylamine + chloroform + 3KOH versus ethyl isocyanide + 3KCl + 3H2O.
 const left={C:2+1,H:7+1+3,N:1,Cl:3,K:3,O:3};
 const right={C:3,H:5+3*2,N:1,Cl:3,K:3,O:3};
 assert.deepEqual(left,right);
 assert.equal(answer(nitrogen,24),(3*.0100).toFixed(4)+' mol');
 assert.equal(answer(nitrogen,25),'Chloroform');
 assert.equal(answer(nitrogen,26),['Zero','One','Two','Three'][4-1]);
 assert.match(answer(nitrogen,27),/Four carbon bonds and a positive formal charge/);
});
test('known-pH fractions obey conjugate-acid equilibrium and sum to one',()=>{
 const Ka=10**-9;
 for(const pH of [7,9,11]){
  const H=10**(-pH),ratio=H/Ka,neutral=1/(1+ratio),protonated=1-neutral;
  assert.ok(Math.abs(H*neutral/protonated-Ka)<1e-20);
  assert.ok(Math.abs(neutral+protonated-1)<1e-14);
 }
 assert.equal(answer(nitrogen,28),`1/${1+10**(9-7)}`);
 assert.equal(Number(answer(nitrogen,29)),10**(9-11));
 assert.equal(answer(nitrogen,30),'2,4,6-Tribromoaniline');
 assert.equal(answer(nitrogen,31),[6,6+2,6+2,6].join(' → '));
});
test('vitamin function questions preserve named roles and the B12 storage exception',()=>{
 assert.deepEqual([24,25,26].map(i=>answer(bio,i)),['Vitamin A','Vitamin D','Vitamin B1']);
 assert.match(answer(bio,27),/collagen synthesis.*scurvy/);
 assert.match(bio.chapters[18].script,/water soluble.*body stores.*years/);
 assert.match(bio.chapters[17].script,/Vitamin K supports the activation of proteins/);
});
test('fructose structure has three open-chain stereocentres and ketone-derived C2 anomeric centre',()=>{
 const chain=[{C:1,group:'CH2OH'},{C:2,group:'ketone'},{C:3,OH:'left'},{C:4,OH:'right'},{C:5,OH:'right'},{C:6,group:'CH2OH'}];
 const centres=chain.filter(atom=>atom.OH);
 assert.equal(answer(bio,28).toLowerCase(),centres.map(atom=>atom.OH).join(', '));
 const numberNames={Three:3,Six:6,Eight:8,Sixteen:16};
 assert.equal(numberNames[answer(bio,29)],2**centres.length);
 assert.equal(chain.find(atom=>atom.group==='ketone').C,2);
 const diagram=fs.readFileSync('app/jee/classes/fructose-fischer-diagram.tsx','utf8');
 assert.match(diagram,/left:'OH',right:'H'/);assert.match(diagram,/C2 becomes the anomeric centre/);
});
test('reverse complement independently determines sequence, hydrogen bonds and linear backbone links',()=>{
 const sequence='AGTC',pair={A:'T',T:'A',G:'C',C:'G'};
 const aligned=[...sequence].map(base=>pair[base]);
 const reverse=aligned.toReversed().join('');
 assert.equal(answer(bio,30),`5′-${reverse}-3′`);
 const hydrogen=[...sequence].reduce((sum,base)=>sum+('AT'.includes(base)?2:3),0);
 const links=2*(sequence.length-1);
 assert.equal(answer(bio,31),`${hydrogen} interbase H bonds and ${links} internucleotide backbone links`);
});
