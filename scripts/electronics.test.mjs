import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=id=>JSON.parse(read(`app/data/jee-${id}-lecture.json`));
const near=(a,b,tolerance=1e-9)=>assert.ok(Math.abs(a-b)<tolerance,`${a} differs from ${b}`);
const keys=(id,expected)=>data(id).quiz.forEach((q,i)=>assert.equal(q.options[q.answer],expected[i]));

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
for(const id of ['semiconductor-diodes','special-diodes','logic-gates']) test(`${id} recordings, complete captions and player route remain valid`,()=>{
  const lesson=data(id),timing=JSON.parse(read(`app/data/jee-${id}-timings.json`));
  const normalized=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  assert.equal(lesson.voice,'marin');assert.equal(lesson.chapters.length,5);assert.equal(timing.chapters.length,5);
  timing.chapters.forEach((t,i)=>{
    const bytes=fs.readFileSync(new URL(`../public/lectures/${id}/chapter-0${i+1}.mp3`,import.meta.url));
    near(duration(bytes),t.end-t.start,.001);assert.ok(t.end>t.start);
    if(i)near(t.start,timing.chapters[i-1].end);
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalized(cues.map(c=>c.text).join(' ')),normalized(lesson.chapters[i].script));
    assert.ok(cues[0].start>=t.start && cues.at(-1).end<=t.end+.001);
  });
  near(timing.chapters[0].start,0);near(timing.chapters.at(-1).end,timing.duration);
  near(duration(fs.readFileSync(new URL(`../public/lectures/${id}/narration-marin.mp3`,import.meta.url))),timing.duration,.001);
  timing.cues.forEach((c,i)=>{
    assert.ok(c.end>c.start && c.start>=0 && c.end<=timing.duration && c.text.length<=110);
    if(i)assert.ok(c.start>=timing.cues[i-1].end-.02);
  });
  const vtt=read(`public/lectures/${id}/english.vtt`);assert.match(vtt,/^WEBVTT/);
  assert.equal((vtt.match(/-->/g)||[]).length,timing.cues.length);
  assert.match(read(`app/jee/classes/${id}/page.tsx`),/LecturePlayer/);
  assert.ok(read('app/jee/classes/physics-coverage.ts').includes(`"${id}"`));
  assert.equal(lesson.quiz.length,6);
});

test('Diode and rectifier examples distinguish physical behavior and circuit approximations',()=>{
  near((5-.7)/1000,.0043);near(10-2*.7,8.6);
  near(10/Math.PI,3.183098861837907);near(20/Math.PI,6.366197723675814);
  const half=[],full=[];for(let n=0;n<10000;n++){const v=10*Math.sin(2*Math.PI*n/10000);half.push(Math.max(0,v));full.push(Math.abs(v));}
  near(half.reduce((a,b)=>a+b)/half.length,10/Math.PI,1e-6);
  near(full.reduce((a,b)=>a+b)/full.length,20/Math.PI,1e-6);
  near(Math.sqrt(half.reduce((a,b)=>a+b*b,0)/half.length),5,1e-8);
  assert.match(data('semiconductor-diodes').chapters[1].script,/Do not call this unbiased state reverse bias/);
  assert.match(data('semiconductor-diodes').chapters[2].script,/not a sharp universal physical threshold/);
  keys('semiconductor-diodes',['Electrons','Electrically neutral overall','Narrows','4.3 mA','50 Hz','8.6 V']);
});
test('Special diode examples preserve energy, current balance and regulator validity',()=>{
  near(1240/2,620);near((5-2)/.01,300);near(.4*.002,.0008);near(.5*.02/.05,.2);
  const source=(12-5.1)/330,load=5.1/510,zener=source-load;
  near(zener,.01090909090909);assert.ok(zener>=.005 && zener<=.03);
  near(5.1*zener,.05563636363636);assert.ok(source-5.1/170<0);
  near(12*170/(330+170),4.08);assert.ok(4.08<5.1);
  assert.match(data('special-diodes').chapters[1].script,/not the only physically possible one/);
  assert.match(data('special-diodes').chapters[2].script,/power is also zero/);
  keys('special-diodes',['Forward bias with current limiting','300 ohms','0.8 mA','20 percent','10.91 mA','4.08 V']);
});
test('All gate rows and universal constructions match Boolean operations',()=>{
  const and=(a,b)=>a&b,or=(a,b)=>a|b,nand=(a,b)=>1-(a&b),nor=(a,b)=>1-(a|b);
  const rows=[[0,0],[0,1],[1,0],[1,1]];
  assert.deepEqual(rows.map(([a,b])=>and(a,b)),[0,0,0,1]);
  assert.deepEqual(rows.map(([a,b])=>or(a,b)),[0,1,1,1]);
  assert.deepEqual(rows.map(([a,b])=>nand(a,b)),[1,1,1,0]);
  assert.deepEqual(rows.map(([a,b])=>nor(a,b)),[1,0,0,0]);
  for(const [a,b] of rows){
    assert.equal(nand(nand(a,a),nand(b,b)),or(a,b));
    const x=nand(a,b);assert.equal(nand(x,x),and(a,b));
    assert.equal(nand(a,b),or(1-a,1-b));assert.equal(nor(a,b),and(1-a,1-b));
  }
  for(const a of [0,1]){assert.equal(nand(a,a),1-a);assert.equal(nor(a,a),1-a);}
  const active=[];for(const a of [0,1])for(const b of [0,1])for(const c of [0,1])if(and(or(a,b),1-c))active.push(`${a}${b}${c}`);
  assert.deepEqual(active,['010','100','110']);
  keys('logic-gates',['1','0 and 1','11','00','0','NOT A']);
});
test('Electronics boards preserve graph conventions and avoid known clipped footer coordinates',()=>{
  const source=read('app/jee/classes/electronics-diagrams.tsx');
  assert.match(source,/M45 195 H280 C325 195 348 160 360 95/);
  assert.match(source,/Delivered I/);assert.match(source,/Two NAND stages implement AND/);
  assert.ok(!source.includes('y={295}'));
});
