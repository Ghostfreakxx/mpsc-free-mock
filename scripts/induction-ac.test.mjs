import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const ids=['self-inductance','ac-basics','lcr-resonance','generators-transformers'];
const lessons=Object.fromEntries(ids.map(id=>[id,JSON.parse(read(`app/data/jee-${id}-lecture.json`))]));
const near=(a,b)=>assert.ok(Math.abs(a-b)<Math.abs(b)*1e-9+1e-15,`${a} != ${b}`);
const keys=(id,expected)=>{
  const data=lessons[id]; assert.equal(data.quiz.length,6);
  data.quiz.forEach((quiz,i)=>assert.equal(quiz.options[quiz.answer],expected[i]));
};

for(const id of ids)test(`${id} preserves five audio segments and the complete bounded English script`,()=>{
  const data=lessons[id],timing=JSON.parse(read(`app/data/jee-${id}-timings.json`));
  assert.equal(data.chapters.length,5); assert.equal(timing.chapters.length,5);
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  data.chapters.forEach((chapter,i)=>{
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(chapter.script));
    assert.ok(cues[0].start>=timing.chapters[i].start);
    assert.ok(cues.at(-1).end<=timing.chapters[i].end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/${id}/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  assert.equal((read(`public/lectures/${id}/english.vtt`).match(/-->/g)||[]).length,timing.cues.length);
  assert.match(read(`app/jee/classes/${id}/page.tsx`),new RegExp(id));
});

test('Inductance examples preserve linkage, energy, units and the passive coupling bound',()=>{
  near(-0.2*15,-3); near(0.5*0.2*3**2,0.9); near(0.5*0.2*6**2,3.6);
  const solenoid=N=>4*Math.PI*1e-7*N*N*5e-4/0.4;
  near(solenoid(400),0.0002513274122871834); near(solenoid(800)/solenoid(400),4);
  near(0.03*20,0.6); near(0.5*Math.sqrt(0.4*0.1),0.1); near(0.1*5,0.5);
  assert.ok(0.3>Math.sqrt(0.4*0.1));
  keys('self-inductance',['-3 V','Four times','0.9 J','0.6 V','0.1 H','A finite current slope']);
  assert.match(lessons['self-inductance'].chapters[0].script,/reference directions differ/);
  assert.match(lessons['self-inductance'].chapters[1].script,/total turns fixed/);
});

test('AC examples preserve sinusoidal RMS, reactance and derivative phase',()=>{
  near(1/50,0.02); near(100*Math.sqrt(2)/Math.sqrt(2),100);
  near((100/50)**2*50,200); near(1000*0.05,50); near(1/(1000*20e-6),50);
  const samples=10000;
  const meanSquare=Array.from({length:samples},(_,i)=>Math.sin(2*Math.PI*i/samples)**2).reduce((a,b)=>a+b,0)/samples;
  near(meanSquare,0.5);
  const derivative=t=>Math.cos(t);
  near(derivative(0),1); near(Math.sin(0-Math.PI/2),-1);
  keys('ac-basics',['0.02 s','100 V','200 W','50 ohm','50 ohm','Leads by 90 degrees']);
  assert.match(lessons['ac-basics'].chapters[1].script,/another waveform/);
  assert.match(lessons['ac-basics'].chapters[3].script,/sinusoidal steady state/);
});

test('Series LCR examples preserve phasor addition, resonance and real power',()=>{
  const diagrams=read('app/jee/classes/induction-ac-diagrams.tsx');
  assert.ok(diagrams.includes('d="M69 202 H159"'));
  assert.ok(diagrams.includes('d="M159 202 V82"'));
  near((202-82)/(159-69),40/30);
  near(Math.hypot(30,70-30),50); near(Math.hypot(60,140-60),100);
  near(30/50,0.6); near(100*2*0.6,120); near(2**2*30,120);
  const L=0.1,C=100e-6,R=20,w0=1/Math.sqrt(L*C);
  near(w0,316.22776601683796); near(w0/(2*Math.PI),50.329212104487034);
  near(w0*L,1/(w0*C)); near(100/R,5);
  const at=w=>{const net=w*L-1/(w*C);const Z=Math.hypot(R,net);return {net,Z,I:100/Z};};
  near(at(200).net,-30); near(at(500).net,30); near(at(200).Z,Math.sqrt(1300));
  near(at(200).I**2*R,153.84615384615387); near(at(200).Z,at(500).Z);
  keys('lcr-resonance',['50 ohm','Lags source voltage','50.3 Hz','Can be nonzero and cancel as phasors','120 W','36.1 ohm']);
  assert.match(lessons['lcr-resonance'].chapters[2].script,/finite-resistance model/);
  assert.match(lessons['lcr-resonance'].chapters[4].script,/not a general equal-spacing frequency rule/);
});

test('Generator and transformer examples conserve power and distinguish RMS from peak',()=>{
  const E0=100*0.2*0.01*100; near(E0,20); near(E0**2/2/10,20);
  near(100/(2*Math.PI),15.915494309189533);
  near(230*100/500,46); near(46*2/230,0.4);
  near(92/0.8,115); near(115-92,23);
  const loss=V=>(10000/V)**2*2;
  near(loss(1000),200); near(loss(10000),2); near(loss(10000)/loss(1000),0.01);
  keys('generators-transformers',['Zero','20 V','46 V','0.4 A','115 W','One hundredth']);
  assert.match(lessons['generators-transformers'].chapters[2].script,/steady linked flux/);
  assert.match(lessons['generators-transformers'].chapters[3].script,/distinguish real power from apparent power/);
  assert.match(lessons['generators-transformers'].chapters[4].script,/fixed transmitted power/);
});
