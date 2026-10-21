import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const ids=['refraction','lenses','prisms','optical-instruments','interference','diffraction-polarization'];
const read=file=>fs.readFileSync(new URL(`../${file}`,import.meta.url),'utf8');
const data=id=>JSON.parse(read(`app/data/jee-${id}-lecture.json`));
const near=(a,b,tolerance=1e-9)=>assert.ok(Math.abs(a-b)<tolerance,`${a} differs from ${b}`);
const degrees=angle=>angle*180/Math.PI;
const radians=angle=>angle*Math.PI/180;
const verifyKeys=(id,expected)=>{
  const lesson=data(id);
  assert.equal(lesson.quiz.length,expected.length);
  lesson.quiz.forEach((q,i)=>assert.equal(q.options[q.answer],expected[i]));
};

for(const id of ids) test(`${id} retains five audio chapters, bounded complete captions and its player route`,()=>{
  const lesson=data(id),timing=JSON.parse(read(`app/data/jee-${id}-timings.json`));
  assert.equal(lesson.voice,'marin');assert.equal(lesson.chapters.length,5);assert.equal(timing.chapters.length,5);
  const normalized=s=>s.replace(/-/g,' ').replace(/\s+/g,' ').trim();
  timing.chapters.forEach((time,i)=>{
    assert.ok(time.end>time.start);if(i)near(time.start,timing.chapters[i-1].end);
    const cues=timing.cues.filter(c=>c.chapter===i);
    assert.equal(normalized(cues.map(c=>c.text).join(' ')),normalized(lesson.chapters[i].script));
    assert.ok(cues[0].start>=time.start);assert.ok(cues.at(-1).end<=time.end+0.001);
    assert.ok(fs.statSync(new URL(`../public/lectures/${id}/chapter-0${i+1}.mp3`,import.meta.url)).size>100000);
  });
  near(timing.chapters[0].start,0);near(timing.chapters.at(-1).end,timing.duration);
  timing.cues.forEach((cue,i)=>{
    assert.ok(cue.end>cue.start && cue.start>=0 && cue.end<=timing.duration);
    if(i)assert.ok(cue.start>=timing.cues[i-1].end-0.02);
    assert.ok(cue.text.length<=110);
  });
  const vtt=read(`public/lectures/${id}/english.vtt`);
  assert.match(vtt,/^WEBVTT/);assert.equal((vtt.match(/-->/g)||[]).length,timing.cues.length);
  assert.match(read(`app/jee/classes/${id}/page.tsx`),/LecturePlayer/);
  const registration=read('app/jee/classes/lessons.ts');assert.ok(registration.includes(`id: "${id}"`));
  assert.ok(read('app/jee/classes/physics-coverage.ts').includes(`"${id}"`));
});

test('Refraction numericals enforce Snell, critical-angle and signed-interface models',()=>{
  near(degrees(Math.asin(Math.sin(radians(30))/1.5)),19.4712206345,1e-8);
  near(600/1.5,400);near(12/(4/3),9);
  near(2*Math.sin(radians(15))/Math.cos(radians(30)),0.5977169814,1e-8);
  const critical=degrees(Math.asin(1/1.5));near(critical,41.8103148958,1e-8);
  assert.ok(30<critical && 50>critical);assert.ok(1.5*Math.sin(radians(50))>1);
  near(1.5/((1.5-1)/20+1/(-60)),180);
  assert.match(data('refraction').chapters[2].script,/approximation/);
  assert.match(data('refraction').chapters[3].script,/Exactly at the critical angle/);
  verifyKeys('refraction',['19.5 degrees','Frequency','9 cm','41.8 degrees','Total internal reflection','+180 cm']);
});
test('Thin-lens numericals preserve image signs, relative index and meter-based powers',()=>{
  const solve=(u,f)=>{const v=1/(1/f+1/u);return [v,v/u];};
  const pairs=[[-30,10,15,-0.5],[-20,10,20,-1],[-5,10,-10,2],[-30,-10,-7.5,0.25]];
  pairs.forEach(([u,f,v,m])=>{near(solve(u,f)[0],v);near(solve(u,f)[1],m);});
  near(1/((1.5-1)*(1/20-1/(-20))),20);
  near((1.5/1.5-1)*(1/20-1/(-20)),0);
  assert.ok((1.5/2-1)*(1/20-1/(-20))<0);
  near(1/0.2+1/(-0.5),3);near(1/3,0.3333333333,1e-8);
  verifyKeys('lenses',['+15 cm','-0.5','Virtual upright enlarged image','-7.5 cm','+20 cm','+3 D']);
});
test('Prism numericals separate minimum geometry from thin-prism approximation',()=>{
  near(45+50-60,35);near(Math.sin(radians(45))/Math.sin(radians(30)),Math.SQRT2);
  near(2*degrees(Math.asin(1.5*Math.sin(radians(30))))-60,37.1807557815,1e-8);
  near((1.5-1)*4,2);near((1.52-1.50)*4,0.08);
  assert.ok(2*Math.sin(radians(40))>1);
  assert.match(data('prisms').chapters[1].script,/relative to its surroundings/);
  assert.match(data('prisms').chapters[3].script,/not for the sixty-degree prism/);
  verifyKeys('prisms',['35 degrees','i = e and r1 = r2','sqrt(2)','37.2 degrees','2 degrees','0.08 degrees']);
});
test('Instrument numericals distinguish linear and angular stages and final-image conditions',()=>{
  near(0.001/0.25,0.004);near(25/5,5);near(1+25/5,6);
  near(1/(1/(-25)-1/5),-25/6);
  const v=1/(1/2+1/(-2.2));near(v,22);near(v/(-2.2),-10);near(v/(-2.2)*25/5,-50);
  near(22+5,27);near(20*25/(2*5),50);
  near(-100/5,-20);near(100+5,105);near(200/4,50);
  assert.match(data('optical-instruments').chapters[2].script,/geometry must be adjusted/);
  assert.match(data('optical-instruments').chapters[4].script,/physical length of every reflector/);
  verifyKeys('optical-instruments',['5','6','-10','-50','105 cm','50']);
});
test('Interference numericals preserve phase, intensity, wavelength and optical-path shift',()=>{
  near((Math.sqrt(9)+Math.sqrt(9))**2,36);near((Math.sqrt(9)-Math.sqrt(9))**2,0);
  near((Math.sqrt(4)+Math.sqrt(9))**2,25);near((Math.sqrt(4)-Math.sqrt(9))**2,1);
  const beta=500e-9*2/1e-3;near(beta,0.001);near(beta/1.5,0.000666666666667);
  near((1.5-1)*2e-6/500e-9,2);near(2*beta,0.002);
  near(9+9+2*Math.sqrt(81)*Math.cos(Math.PI),0);
  assert.match(data('interference').chapters[4].script,/toward the covered slit/);
  verifyKeys('interference',['v delta_t','n2/n1','36','1 mm','0.667 mm','2 fringes']);
});
test('Diffraction and polarization numericals distinguish minima, full width and input polarization',()=>{
  const lambda=500e-9,a=0.2e-3,D=2;
  near(lambda*D/a,0.005);near(2*lambda*D/a,0.01);near(2*lambda*D/(a/2),0.02);
  near(Math.cos(radians(60))**2,0.25);near(100/2*Math.cos(radians(60))**2,12.5);
  near(100/2*Math.cos(radians(45))**4,12.5);
  const brewster=Math.atan(1.5),r=Math.asin(Math.sin(brewster)/1.5);
  near(degrees(brewster),56.309932474,1e-8);near(degrees(brewster+r),90);
  assert.match(data('diffraction-polarization').chapters[0].script,/Do not include m equal to zero/);
  assert.match(data('diffraction-polarization').chapters[4].script,/transmitted light is generally not completely polarized/);
  verifyKeys('diffraction-polarization',['a sin theta = lambda','10 mm','Twice as wide','1/4','12.5','56.3 degrees']);
});
test('Optics scientific diagrams preserve intersections, equal Huygens diagonals and perpendicular Brewster rays',()=>{
  const ordinate=(x,a,b)=>a[1]+(x-a[0])*(b[1]-a[1])/(b[0]-a[0]);
  near(ordinate(310,[220,130],[280,175]),197.5);near(ordinate(310,[40,130],[400,220]),197.5);
  near(ordinate(160,[220,150],[400,225]),125);near(ordinate(160,[190,150],[310,250]),125);
  near(Math.hypot(212.47727085-75,60),150,1e-8);near(Math.hypot(219.568322948-75,40),150,1e-8);
  near(126*70-84*105,0);
  const diagram=read('app/jee/classes/optics-diagrams.tsx');
  assert.ok(diagram.includes('M75 102 H212.47727085 L212.47727085 42 Z'));
  assert.ok(diagram.includes('M220 150 L290 255'));
  assert.ok(diagram.includes('102.5+i*38'));
  assert.doesNotMatch(diagram,/<Label[^>]*y=\{29[3-9]\}/);
});
