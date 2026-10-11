import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const read = file => fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data = id => JSON.parse(read(`app/data/jee-${id}-lecture.json`));
const near = (a,b,tolerance=1e-9) => assert.ok(Math.abs(a-b)<tolerance,`${a} differs from ${b}`);
const ids=['matter-waves','atoms','nuclei'];
const keys=(id,expected)=>data(id).quiz.forEach((q,i)=>assert.equal(q.options[q.answer],expected[i]));

function audioDuration(bytes) {
  let position=bytes.subarray(0,3).toString()==='ID3'
    ?10+((bytes[6]<<21)|(bytes[7]<<14)|(bytes[8]<<7)|bytes[9]):0;
  let duration=0,frames=0;
  while(position<bytes.length) {
    assert.ok(position+4<=bytes.length);
    const header=bytes.readUInt32BE(position),version=(header>>>19)&3;
    const bitRateIndex=(header>>>12)&15,sampleIndex=(header>>>10)&3;
    assert.equal(header>>>21,2047);assert.equal((header>>>17)&3,1);
    assert.ok(version!==1 && bitRateIndex>0 && bitRateIndex<15 && sampleIndex<3);
    const sampleRate=[44100,48000,32000][sampleIndex]/(version===3?1:version===2?2:4);
    const rates=version===3?[0,32,40,48,56,64,80,96,112,128,160,192,224,256,320]:[0,8,16,24,32,40,48,56,64,80,96,112,128,144,160];
    position+=Math.floor((version===3?144:72)*rates[bitRateIndex]*1000/sampleRate)+((header>>>9)&1);
    assert.ok(position<=bytes.length);duration+=(version===3?1152:576)/sampleRate;frames++;
  }
  assert.ok(frames>0);assert.equal(position,bytes.length);return duration;
}

for(const id of ids) test(`${id} audio chapters and complete captions remain independently valid`,()=>{
  const lesson=data(id),timing=JSON.parse(read(`app/data/jee-${id}-timings.json`));
  assert.equal(lesson.voice,'marin');assert.equal(lesson.chapters.length,5);assert.equal(timing.chapters.length,5);
  const normalized=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  timing.chapters.forEach((time,i)=>{
    const audio=fs.readFileSync(new URL(`../public/lectures/${id}/chapter-0${i+1}.mp3`,import.meta.url));
    near(audioDuration(audio),time.end-time.start,.001);
    assert.ok(time.end>time.start);if(i)near(time.start,timing.chapters[i-1].end);
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalized(cues.map(c=>c.text).join(' ')),normalized(lesson.chapters[i].script));
    assert.ok(cues[0].start>=time.start);assert.ok(cues.at(-1).end<=time.end+.001);
  });
  near(timing.chapters[0].start,0);near(timing.chapters.at(-1).end,timing.duration);
  near(audioDuration(fs.readFileSync(new URL(`../public/lectures/${id}/narration-marin.mp3`,import.meta.url))),timing.duration,.001);
  timing.cues.forEach((c,i)=>{
    assert.ok(c.end>c.start && c.start>=0 && c.end<=timing.duration);
    if(i)assert.ok(c.start>=timing.cues[i-1].end-.02);
    assert.ok(c.text.length<=110);
  });
  const vtt=read(`public/lectures/${id}/english.vtt`);
  assert.match(vtt,/^WEBVTT/);assert.equal((vtt.match(/-->/g)||[]).length,timing.cues.length);
  assert.match(read(`app/jee/classes/${id}/page.tsx`),/LecturePlayer/);
  assert.ok(read('app/jee/classes/lessons.ts').includes(`id: "${id}"`));
  assert.ok(read('app/jee/classes/physics-coverage.ts').includes(`"${id}"`));
  assert.equal(lesson.quiz.length,6);
  lesson.quiz.forEach(q=>assert.ok(q.answer>=0 && q.answer<q.options.length && q.explanation));
});

test('Matter-wave practice independently preserves momentum, energy and voltage conditions',()=>{
  const h=6.62607015e-34,m=9.1093837139e-31,e=1.602176634e-19;
  // The classroom uses the conventional rounded 1.227 nm sqrt(V) shortcut.
  near(h/Math.sqrt(2*m*e*100)*1e9,.1227,.0001);
  near(h/Math.sqrt(2*m*e*400)*1e9,.06135,.00005);
  near(Math.sqrt(1836),42.84857,.00001);near(1240/100,12.4);
  near(Math.asin(.2/(2*.2))*180/Math.PI,30);
  assert.match(data('matter-waves').chapters[2].script,/initial kinetic energy/);
  assert.match(data('matter-waves').chapters[3].script,/zero rest mass/);
  keys('matter-waves',['Half','Equal','0.1227 nm','0.06135 nm','42.8','12.4 nm']);
});

test('Atomic examples independently preserve signs, Z scaling and ensemble counting',()=>{
  near(2*79*1.44/7.2,31.6);near(-13.6/4,-3.4);near(.0529*4,.2116);
  near(-13.6*2**2,-54.4);near(1240/(13.6*(1/4-1/9)),656.470588235294);
  near(13.6*(1-1/4),10.2);near(1240/3.4,364.705882352941);
  const pairs=[];for(let high=2;high<=4;high++)for(let low=1;low<high;low++)pairs.push([high,low]);
  assert.equal(pairs.length,6);
  assert.match(data('atoms').chapters[1].script,/non-head-on/);
  assert.match(data('atoms').chapters[2].script,/exactly one electron/);
  assert.match(data('atoms').chapters[4].script,/at most three downward steps/);
  keys('atoms',['Rare large-angle deflections','31.6 fm','-3.4 eV','0.2116 nm','656 nm','6']);
});

test('Nuclear examples independently balance particles and use consistent atomic masses',()=>{
  near(56-26,30);near(1.2*Math.cbrt(125),6);near(Math.cbrt(216)/Math.cbrt(64),1.5);
  near(216/64,3.375);near(1.007825+1.008665-2.014102,.002388);
  near(.002388*931.5,2.224422);near(2.224/2,1.112);near(.0189*931.5,17.60535);
  assert.equal(235+1,141+92+3);assert.equal(92,56+36);assert.equal(2+3,4+1);
  assert.match(data('nuclei').chapters[0].script,/neutral carbon-twelve atom/);
  assert.match(data('nuclei').chapters[2].script,/hydrogen-atom mass/);
  keys('nuclei',['30','6 fm','0.002388 u','2.224 MeV','1.112 MeV','3']);
});
