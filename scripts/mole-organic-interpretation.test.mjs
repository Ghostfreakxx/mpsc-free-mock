import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {fischerTransformFrames as frames} from '../app/jee/classes/fischer-transform-data.ts';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const m=read('mole-concept'),o=read('organic-principles');
const answer=(l,i)=>l.quiz[i].options[l.quiz[i].answer];
const near=(a,b,t=1e-9)=>assert.ok(Math.abs(a-b)<t,`${a} != ${b}`);
test('three-isotope mean has distinct valid solutions until the independent fraction fixes it',()=>{
 for(const f of [[.7,.3,0],[.85,0,.15],[.8,.1,.1]]){near(f.reduce((a,b)=>a+b),1);near(f.reduce((s,n,i)=>s+n*(24+i),0),24.3);assert.ok(f.every(x=>x>=0));}
 const middle=.1,heavy=(.30-middle)/2,light=1-middle-heavy;near(light,.8);near(heavy,.1);
 assert.equal(answer(m,32),'Not uniquely determined');assert.equal(answer(m,33),'.800, .100, .100');
});
test('reaction-defined equivalents retain phosphate atoms and scale hydroxide by the stated endpoint',()=>{
 // H3PO4 + 2OH− → HPO4²− + 2H2O.
 assert.deepEqual({H:3+2,P:1,O:4+2,charge:-2},{H:1+2*2,P:1,O:4+2,charge:-2});
 const acid=.250*.100,OH=2*acid,volume=OH/.200;near(volume,.250);near(.100*2,.200);assert.equal(answer(m,34),'.200 eq/L');assert.equal(answer(m,35),`${volume*1000} mL`);
});
test('dimer dissociation conserves N/O atom amounts and mass while increasing gas particles',()=>{
 const n0=.1;
 for(let i=0;i<=100;i++){const alpha=i/100,dimer=n0*(1-alpha),monomer=2*n0*alpha,total=dimer+monomer;
  near(2*dimer+monomer,2*n0);near(4*dimer+2*monomer,4*n0);near(92*dimer+46*monomer,92*n0);near(total,n0*(1+alpha));near((92*n0)/total,92/(1+alpha));
 }
 near(92/(2*30.67)-1,.5,.001);assert.equal(answer(m,36),'.500');near(parseFloat(answer(m,37)),n0*1.5);
});
test('conversion/selectivity/yield and pure recycle use their explicitly different denominators',()=>{
 const feed=100,unreacted=20,B=60,C=20,reacted=feed-unreacted,X=reacted/feed,S=B/reacted,Y=B/feed;
 assert.equal(unreacted+B+C,feed);near(X*S,Y);near(S,.75);near(Y,.6);near(B/C,3);assert.equal(answer(m,38),'75% and 60%');assert.equal(answer(m,39),`${feed-.9*unreacted} mmol`);
});
test('aromaticity answers include structural prerequisites rather than only an electron-count remainder',()=>{
 const pi=2*2+2;assert.equal(pi,6);assert.equal((pi-2)%4,0);assert.equal(answer(o,36),'6, aromatic');
 assert.match(answer(o,37),/nonplanar tub geometry/);assert.match(o.chapters[21].script,/saturated carbon interrupting/);
});
test('hydride shift retains the five-carbon graph and hydrogen inventory while transferring the electron-pair bond',()=>{
 const edges=[[1,2],[2,3],[3,4],[3,5]],before=[3,1,1,3,3],after=[3,2,0,3,3];
 assert.equal(edges.length,4);assert.equal(before.reduce((a,b)=>a+b),11);assert.equal(after.reduce((a,b)=>a+b),11);
 assert.equal(before[2]-after[2],after[1]-before[1]);assert.equal(answer(o,38),'C3');assert.match(answer(o,39),/C3–H sigma-bond electron pair/);
});
test('displayed Fischer frames give the correct signed tetrahedral configurations under the stated conventions',()=>{
 const positions=[[0,1,-1],[1,0,1],[0,-1,-1],[-1,0,1]],priority=['OH','CHO','CH₂OH','H'];
 const determinant=(a,b,c)=>a[0]*(b[1]*c[2]-b[2]*c[1])-a[1]*(b[0]*c[2]-b[2]*c[0])+a[2]*(b[0]*c[1]-b[1]*c[0]);
 const signs=frames.map(frame=>{const points=priority.map(group=>positions[frame.groups.indexOf(group)]),relative=points.slice(0,3).map(point=>point.map((v,i)=>v-points[3][i]));return determinant(...relative);});
 assert.ok(signs[0]<0);assert.equal(signs[1],signs[0]);assert.equal(signs[2],-signs[0]);assert.deepEqual(frames.map(f=>f.configuration),['R','R','S']);
 assert.equal(answer(o,40),'The same configuration');assert.match(answer(o,41),/opposite configuration/);
});
test('cis/trans methyl comparisons and E/Z priorities invert their mapping for this substituted alkene only',()=>{
 // Coordinates encode sides: +1 above and -1 below the C=C axis.
 const cis={leftMethyl:1,leftBr:-1,rightMethyl:1,rightH:-1},trans={leftMethyl:1,leftBr:-1,rightMethyl:-1,rightH:1};
 assert.equal(cis.leftMethyl,cis.rightMethyl);assert.notEqual(cis.leftBr,cis.rightMethyl);assert.notEqual(trans.leftMethyl,trans.rightMethyl);assert.equal(trans.leftBr,trans.rightMethyl);
 assert.ok(35>6&&6>1);assert.equal(answer(o,42),'E');assert.equal(answer(o,43),'Z');
});
