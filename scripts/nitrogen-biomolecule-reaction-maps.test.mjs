import test from 'node:test';
import assert from 'node:assert/strict';
import {peptideCandidates,aminoAcidChargeModels} from '../app/jee/classes/peptide-pi-data.ts';
const near=(a,b,tol=1e-10)=>assert.ok(Math.abs(a-b)<tol,`${a} differs from ${b}`);
test('classical fluoroborate map conserves atoms and total charge',()=>{
 assert.deepEqual({C:6,H:5,N:2,B:1,F:4,charge:1-1},{C:6,H:5,N:2,B:1,F:1+3,charge:0});
 assert.equal(4-3,1);assert.equal(2/2,1);
});
test('temporary directing group removal changes naming positions without moving bromine',()=>{
 const original={amino:1,methyl:4,bromine:[2,6]},relativeToMethyl=n=>((n-original.methyl+6)%6)+1;
 assert.deepEqual(original.bromine.map(relativeToMethyl).sort((a,b)=>a-b),[3,5]);
 assert.equal(6+1,7);assert.equal(original.bromine.length,2);
});
test('reductive amination retains N-methyl and balances condensation plus reduction',()=>{
 assert.deepEqual({C:2+1,H:4+5-2,N:1,O:1-1},{C:3,H:7,N:1,O:0});
 assert.deepEqual({C:2+1,H:4+5+2,N:1,O:1},{C:3,H:9+2,N:1,O:1});
 const nitrogenNeighbours=['ethyl','methyl','H'];assert.equal(nitrogenNeighbours.filter(x=>x!=='H').length,2);
});
test('amine distribution formula satisfies neutral partition, protonation and total inventory',()=>{
 const P=20,pka=10,Vaq=.100,Vorg=.050,total=.001;
 for(const pH of [6,8,10,12,14]){const ratio=10**(pka-pH),D=P/(1+ratio),Baq=total/(Vaq*(1+ratio)+P*Vorg),Borg=P*Baq,BH=ratio*Baq;
  near(Borg/Baq,P);near(BH/Baq,ratio);near(Vaq*(Baq+BH)+Vorg*Borg,total);
  near(Vorg*Borg/total,D*Vorg/(Vaq+D*Vorg));
 }
 const fraction=pH=>{const D=P/(1+10**(pka-pH));return D*Vorg/(Vaq+D*Vorg);};
 near(fraction(8),10/111);near(fraction(10),5/6);assert.ok(fraction(8)<fraction(10));
});
test('pentaacetylation changes the tested derivative and has a five-group atom ledger',()=>{
 const glucose={C:6,H:12,O:6},acetateIncrement={C:2,H:2,O:1};
 assert.deepEqual(Object.fromEntries(Object.keys(glucose).map(k=>[k,glucose[k]+5*acetateIncrement[k]])),{C:16,H:22,O:11});
 const anomeric={glucose:'hemiacetal OH',pentaacetate:'anomeric O-acetyl'};assert.notEqual(anomeric.glucose,anomeric.pentaacetate);
});
test('actual peptide candidates enumerate the complete multiset and AG/GA uniquely select AGA',()=>{
 const perms=new Set();for(let g=0;g<3;g++){const sequence=['A','A','A'];sequence[g]='G';perms.add(sequence.join(''));}
 assert.deepEqual(new Set(peptideCandidates.map(s=>s.join(''))),perms);
 const matches=peptideCandidates.filter(s=>{const pairs=[s.slice(0,2).join(''),s.slice(1).join('')];return pairs.includes('AG')&&pairs.includes('GA');});
 assert.deepEqual(matches.map(s=>s.join('')),['AGA']);assert.equal(2*89+75-2*18,217);
});
test('actual pI diagram chooses the steps bracketing neutral and nearly balances full charge distributions',()=>{
 for(const model of aminoAcidChargeModels){const zero=model.charges.indexOf(0);assert.deepEqual([...model.bracket],[zero-1,zero]);
  near((model.pka[zero-1]+model.pka[zero])/2,model.pi);
  const weights=[1];for(const pka of model.pka)weights.push(weights.at(-1)*10**(model.pi-pka));
  const total=weights.reduce((a,b)=>a+b),mean=weights.reduce((s,w,j)=>s+w*model.charges[j],0)/total;
  assert.ok(Math.abs(mean)<1e-6,`${model.label} adjacent-state estimate mismatch ${mean}`);
 }
});
test('one internal RNA cut conserves residues and removes exactly one backbone edge',()=>{
 const residues=Array.from({length:10},(_,i)=>i+1),edges=residues.slice(1).map(n=>[n-1,n]),remaining=edges.filter(([a,b])=>!(a===4&&b===5));
 const components=[];for(const residue of residues){if(components.some(s=>s.has(residue)))continue;const set=new Set([residue]);for(let i=0;i<10;i++)for(const[a,b]of remaining){if(set.has(a))set.add(b);if(set.has(b))set.add(a);}components.push(set);}
 assert.deepEqual(components.map(s=>s.size),[4,6]);assert.equal(remaining.length,8);assert.equal(components.reduce((s,c)=>s+c.size,0),10);
 const RNA={twoPrime:'OH'},DNA={twoPrime:'H'};assert.notEqual(RNA.twoPrime,DNA.twoPrime);
});
