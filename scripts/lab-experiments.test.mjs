import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=p=>fs.readFileSync(new URL(`../${p}`,import.meta.url),'utf8');
const near=(a,b,t=.001)=>assert.ok(Math.abs(a-b)<t);
function duration(bytes) {
  let p=bytes.subarray(0,3).toString()==='ID3'?10+((bytes[6]<<21)|(bytes[7]<<14)|(bytes[8]<<7)|bytes[9]):0;
  let seconds=0,frames=0;
  while(p<bytes.length) {
    assert.ok(p+4<=bytes.length);
    const h=bytes.readUInt32BE(p),v=(h>>>19)&3,b=(h>>>12)&15,s=(h>>>10)&3;
    assert.equal(h>>>21,2047);assert.equal((h>>>17)&3,1);assert.ok(v!==1 && b>0 && b<15 && s<3);
    const rate=[44100,48000,32000][s]/(v===3?1:v===2?2:4);
    const rates=v===3?[0,32,40,48,56,64,80,96,112,128,160,192,224,256,320]:[0,8,16,24,32,40,48,56,64,80,96,112,128,144,160];
    p+=Math.floor((v===3?144:72)*rates[b]*1000/rate)+((h>>>9)&1);
    assert.ok(p<=bytes.length);seconds+=(v===3?1152:576)/rate;frames++;
  }
  assert.ok(frames>0);return seconds;
}
const answers={
  'lab-measurements':['0.1 mm','2.34 cm','0.01 mm','1.80 mm','150 g','340 m/s'],
  'lab-materials':['2.04 x 10^11 Pa','0.0735 N/m','0.002 m/s','453 J/(kg K)','4 percent','A fixed uncorrected zero error'],
  'lab-electricity':['10 ohms','3 ohms','The galvanometer current','3.14 x 10^-7 ohm m','100 ohms','5 microamperes/division'],
  'lab-optics':['-16 cm','+20 cm','-20 cm','1.532','1.5','Adjust until no relative tip movement occurs when the eye moves sideways'],
  'lab-devices':['10 ohms','The lower-left quadrant','10 mA','270 ohms, 5 percent','100 nF','Confirm pin order from the part\'s datasheet']
};
for(const id of Object.keys(answers)) test(`${id}: recordings, subtitles, quiz and registration`,()=>{
  const lesson=JSON.parse(read(`app/data/jee-${id}-lecture.json`));
  const timing=JSON.parse(read(`app/data/jee-${id}-timings.json`));
  const normalize=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  assert.equal(lesson.voice,'marin');assert.equal(lesson.chapters.length,5);
  assert.equal(timing.chapters.length,5);
  timing.chapters.forEach((t,i)=>{
    near(duration(fs.readFileSync(new URL(`../public/lectures/${id}/chapter-0${i+1}.mp3`,import.meta.url))),t.end-t.start);
    near(t.start,i?timing.chapters[i-1].end:0);
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalize(cues.map(c=>c.text).join(' ')),normalize(lesson.chapters[i].script));
    assert.ok(cues[0].start>=t.start && cues.at(-1).end<=t.end+.001);
  });
  near(duration(fs.readFileSync(new URL(`../public/lectures/${id}/narration-marin.mp3`,import.meta.url))),timing.duration);
  near(timing.chapters.at(-1).end,timing.duration);
  timing.cues.forEach((c,i)=>{
    assert.ok(c.end>c.start && c.start>=0 && c.end<=timing.duration && c.text.length<=110);
    if(i)assert.ok(c.start>=timing.cues[i-1].end-.02);
  });
  const vtt=read(`public/lectures/${id}/english.vtt`);
  assert.match(vtt,/^WEBVTT/);assert.equal((vtt.match(/-->/g)||[]).length,timing.cues.length);
  assert.match(read(`app/jee/classes/${id}/page.tsx`),/LecturePlayer/);
  assert.ok(read('app/jee/classes/lessons.ts').includes(id));
  assert.ok(read('app/jee/classes/physics-coverage.ts').includes(id));
  assert.equal(lesson.quiz.length,6);
  lesson.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],answers[id][i]));
});
test('Instrument corrections, moments, pendulum energy and resonance examples',()=>{
  near(1-9/10,.1);near(2.3+7*.01-.03,2.34);
  near(.5/50,.01);near(1.5+28*.01-(-.02),1.8);
  near(100*30/20,150);near((4/8)**2,.25);
  const wavelength=2*(.50-.16);near(500*wavelength,340);near(wavelength/4-.16,.01);
});
test('Material-property examples and uncertainty contributions are dimensionally consistent',()=>{
  near(20*2/(Math.PI*.0005**2*.00025)/1e11,2.0371832716);
  near(1000*9.8*.03*.0005/2,.0735);
  const speed=.12/60,eta=2*.0005**2*(7800-1260)*9.8/(9*speed);
  near(speed,.002);near(eta,1.7803333333);
  assert.ok(1260*.001*speed/eta<.01);
  near((.2*4200+20)*(24-20)/(.1*(100-24)),452.631578947);
  near(2*2,4);
});
test('Electrical laboratory examples preserve graph axes, bridge arrangement and half-deflection current division',()=>{
  near(1/.1,10);near(.1/1,.1);
  const known=2,left=60,unknown=known*left/(100-left);
  near(unknown,3);near(known*(100-40)/40,unknown);
  near(unknown*Math.PI*.0004**2/(4*1.2),Math.PI*1e-7,1e-15);
  const R=9900,S=99,G=R*S/(R-S),E=2;
  near(G,100);near(E*S/(R*(G+S)+G*S),E/(R+G)/2,1e-15);
  assert.ok(E/(R+G*S/(G+S))>E/(R+G));
  near((G-S)/G,.01);near(E/((R+G)*40),5e-6,1e-15);
  near(75e-6/5e-6,15);
  const lesson=JSON.parse(read('app/data/jee-lab-electricity-lecture.json'));
  assert.match(lesson.chapters[0].script,/voltmeter draws negligible current/);
  assert.match(lesson.chapters[3].script,/total supply current has not stayed exactly constant/);
  assert.match(lesson.chapters[3].script,/include it in the total series resistance/);
});
test('Optical laboratory examples distinguish virtual objects and corrected focus differences',()=>{
  near(1/(1/-24+1/-48),-16);near(1/(1/60-1/-30),20);
  near(1/(1/30-1/12),-20);
  assert.ok(12<20);assert.equal(1/20-1/20,0);
  const degrees=Math.PI/180;
  near(Math.sin(50*degrees)/Math.sin(30*degrees),1.5320888862);
  near(50+50-60,40);
  near((4-1)/(4-2),1.5);near((40-10)/(40-20),1.5);
  const lesson=JSON.parse(read('app/data/jee-lab-optics-lecture.json'));
  assert.match(lesson.chapters[2].script,/u is positive/);
  assert.match(lesson.chapters[4].script,/appropriate positive differences/);
  assert.match(lesson.chapters[0].script,/one viewing position is not enough/);
});
test('Device measurements preserve milli/micro units, local slope and component codes',()=>{
  near((.67-.65)/(.004-.002),10);near(.67/.004,167.5);
  near(2e-6*1000,.002);
  const current=(9-5.1)/390;
  near(current,.01);near(5.1*current,.051);near(current**2*390,.039);
  near((5.12-5.08)/(.012-.008),10);
  near(27*10,270);near(270*.95,256.5);near(270*1.05,283.5);
  near(10*10**4*1e-12,100e-9,1e-15);
  const lesson=JSON.parse(read('app/data/jee-lab-devices-lecture.json'));
  assert.match(lesson.chapters[4].script,/does not reliably distinguish collector from emitter/);
  assert.match(lesson.chapters[3].script,/isolated, unpowered components/);
});
