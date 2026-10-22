import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const mole=read('mole-concept'),analysis=read('purification-analysis'),df=read('d-f-block');
const answer=(l,i)=>l.quiz[i].options[l.quiz[i].answer];
test('hydrate, binary mixture and stage-yield keys follow mass and mole balances',()=>{
 const hydrate=((2.50-1.60)/18)/(1.60/160);assert.equal(answer(mole,10),hydrate.toFixed(0));
 const total=2.20/44,carbonate=(4.64-84*total)/(106-84),bicarbonate=total-carbonate;
 assert.equal(answer(mole,11),carbonate.toFixed(3)+' mol');
 assert.equal(answer(mole,12),(2*carbonate+bicarbonate).toFixed(3)+' mol');
 assert.ok(Math.abs(106*carbonate+84*bicarbonate-4.64)<1e-12);
 assert.equal(answer(mole,13),(.100/2*.8*3*.75).toFixed(4)+' mol');
 const carbons=.300/.100,hydrogens=2*.400/.100;
 assert.equal(answer(mole,14),((carbons+hydrogens/4)*.100).toFixed(3)+' mol');
 assert.equal(answer(mole,15),(1.20*1000*.20/40).toFixed(2)+' M');
});
test('Dumas, back-titration and precipitate answers use the measured chemical entities',()=>{
 const dryNitrogen=(100-3)*.0200/(8.314*300)*28/.250*100;
 assert.equal(answer(analysis,10),dryNitrogen.toFixed(2)+'%');
 assert.notEqual(dryNitrogen.toFixed(2),(100*.0200/(8.314*300)*28/.250*100).toFixed(2));
 const nitrogen=(.025*.100-.010*.100)*14/.500*100;
 assert.equal(answer(analysis,11),nitrogen.toFixed(2)+'%');
 assert.equal(answer(analysis,12),(.1435/143.5*35.5/.200*100).toFixed(2)+'%');
 assert.match(analysis.chapters[9].script,/not generally applicable.*nitro or azo/);
});
test('fresh extraction portions act on the remainder and chromatographic ratios use the front',()=>{
 const one=100/(100+4*25),two=(100/(100+4*12.5))**2;
 assert.equal(one,1/2);assert.ok(Math.abs(two-4/9)<1e-12);assert.ok(two<one);
 assert.equal(answer(analysis,13),'1/2');assert.equal(answer(analysis,14),'4/9');
 assert.equal(answer(analysis,15),(2/5).toFixed(2)+' and '+(3.5/5).toFixed(2));
});
test('chromium and manganese keys conserve oxidation changes and specified products',()=>{
 assert.equal(answer(df,12),String(4*2*(6-3)+4*(3-2)));
 assert.equal(answer(df,13),`+${-2-4*-2} and +${(-2-7*-2)/2}`);
 assert.equal(answer(df,14),'(2,1)');assert.equal(7+2,2*4+1);assert.equal(-2-2,2*-2);
 assert.equal(answer(df,15),'1 electron');assert.equal(answer(df,16),(7-4)+' mmol electrons');
 assert.equal(answer(df,17),[0,2*3+1,2*(2*3+1)].join(', '));
 // Three Mn(+6) disproportionate into two Mn(+7) and one Mn(+4).
 assert.equal(3*6,2*7+4);assert.equal(2*(7-6),6-4);
});
