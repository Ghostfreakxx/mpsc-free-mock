import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { physicsCoverage } from '../app/jee/classes/physics-coverage.ts';

const data = id => JSON.parse(fs.readFileSync(new URL(`../app/data/jee-${id}-lecture.json`, import.meta.url)));
const near = (a, b, tolerance = 1e-8) => assert.ok(Math.abs(a - b) < tolerance, `${a} != ${b}`);

test('banked limits solve both force balances and the signed friction inequality', () => {
  const t=.75, mu=.25, rg=250;
  const high=(t+mu)/(1-mu*t), low=(t-mu)/(1+mu*t);
  near(Math.sqrt(rg*high),17.541160386140586);
  near(Math.sqrt(rg*low),10.25978352085154);
  near((t-high)/(1+high*t),-mu); near((t-low)/(1+low*t),mu);
  const signed=q=>(t-q)/(1+q*t);
  assert.ok(Math.abs(signed(100/rg))>mu);
  assert.ok(Math.abs(signed(196/rg))<mu);
  near(1/(.8-mu*.6),20/13);
  assert.ok(t<1); // Rest is possible when the available coefficient is one.
  assert.deepEqual(data('banked-road-limits').quiz.map(q=>q.answer),[2,1,0,3]);
});

test('mirror similar triangles and spherical Snell geometry recover the examples', () => {
  const U=30,V=15,F=10;
  near(V/U,(V-F)/F); near(1/U+1/V,1/F);
  near(-(-V)/(-U)*2,-1);
  near(1.5/180-1/(-60),(.5)/20);
  near(1/(-15)-(4/3)/(-20),0);
  assert.deepEqual(data('optics-derivations').quiz.map(q=>q.answer),[1,2,0,3,2]);
});

test('near-point telescope distances obey the eyepiece equation', () => {
  const fo=100,fe=5,D=25,s=fe*D/(D+fe);
  near(1/(-D)-1/(-s),1/fe);
  near(-fo/s,-24); near(fo+s,104.16666666666667);
  near(-fo/fe,-20);
});

test('unknown-liquid heat balance includes container and the explicitly stated loss', () => {
  const release=.1*900*(80-30),container=30*(30-20),denominator=.2*(30-20);
  near(release,4500); near(container,300);
  near((release-container)/denominator,2100);
  near(release/denominator,2250);
  near((release-200-container)/denominator,2000);
  const lesson=data('lab-liquid-mixtures');
  assert.match(lesson.chapters[0].points[2],/2100/);
  assert.deepEqual(lesson.quiz.map(q=>q.answer),[2,0,1,3]);
});

test('closeout classes have one unit assignment each and separate written-mode routes', () => {
  for (const [id, unit] of [['banked-road-limits',3],['optics-derivations',16],['lab-liquid-mixtures',20]]) {
    assert.equal(data(id).unit,unit);
    assert.equal(physicsCoverage.filter(group=>group.recordings.includes(id)).length,1);
    assert.ok(physicsCoverage[unit-1].recordings.includes(id));
    assert.ok(fs.existsSync(new URL(`../app/jee/classes/${id}/page.tsx`,import.meta.url)));
  }
  assert.equal(physicsCoverage.flatMap(unit=>unit.recordings).length,86);
  const library=fs.readFileSync(new URL('../app/jee/classes/course-library.tsx',import.meta.url),'utf8');
  assert.ok(!library.includes('No unit fully taught yet'));
  assert.ok(library.includes('Further practice and extensions'));
  assert.ok(library.includes('with recorded lesson sets'));
});
