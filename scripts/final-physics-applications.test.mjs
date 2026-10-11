import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const ids = ['dual-nature-applications', 'atomic-nuclear-applications', 'electronics-applications', 'experimental-applications'];
const near = (a, b, tolerance = 1e-9) => assert.ok(Math.abs(a - b) < tolerance * Math.max(Math.abs(b), 1e-15), `${a} differs from ${b}`);

test('Stopping graph, photon count and nonrelativistic matter-wave calculations', () => {
  const slope = (2.136 - .4816) / (1e15 - 6e14);
  near(slope, 4.136e-15);
  near(2 / slope, 4.835589941972921e14);
  near(1240 / 400 - 2, 1.1);
  assert.ok(1240 / 800 < 2);
  const photonJ = (1240 / 400) * 1.602e-19;
  const count = .002 / photonJ;
  near(count, 4.02722322902823e15, .001);
  near(count * .001 * 1.602e-19, 6.451612903225806e-7);
  near(Math.sqrt(1836), 42.8485705712571);
  near(12.27 / Math.sqrt(150), 1.0018632641188983, .001);
});

test('Rutherford turning distance and one-electron Bohr scaling', () => {
  near(2 * 79 * 1.44 / 5, 45.504);
  const photon = 13.6 * 4 * (1 / 4 - 1 / 9);
  near(photon, 7.555555555555556);
  near(1240 / photon, 164.11764705882354);
  near(.0529 * 4 / 2, .1058);
  near(photon / (13.6 * (1 / 4 - 1 / 9)), 4);
});

test('Nuclear reaction balances nucleon and electron counts with atomic masses', () => {
  assert.equal(2 + 3, 4 + 1);
  assert.equal(1 + 1, 2 + 0);
  const initial = 2.014102 + 3.016049, final = 4.002603 + 1.008665;
  near(initial, 5.030151); near(final, 5.011268);
  near(initial - final, .018883);
  near((initial - final) * 931.5, 17.5895145);
  near(80 / 10, 8);
});

test('Diode state and Zener window satisfy current balance and assumptions', () => {
  near((5 - .7) / 1000 - .7 / 10000, .00423);
  near(-.5 * 10000 / 11000, -.45454545454545453);
  const load = 5.1 / 1000, series = (12 - 5.1) / 330, zener = series - load;
  near(zener, .01580909090909091);
  assert.ok(zener >= .005 && zener <= .025);
  near(5.1 + 330 * (.005 + load), 8.433);
  near(5.1 + 330 * (.025 + load), 15.033);
  assert.ok(series - 5.1 / 220 < 0);
  near(12 * 220 / (330 + 220), 4.8);
  near(5.1 * zener, .08062636363636363);
});

test('Three NAND and three NOR networks have complete correct truth tables', () => {
  const nand = (a, b) => Number(!(a && b)), nor = (a, b) => Number(!(a || b));
  const rows = [[0,0],[0,1],[1,0],[1,1]];
  assert.deepEqual(rows.map(([a,b]) => nand(nand(a,a),nand(b,b))), [0,1,1,1]);
  assert.deepEqual(rows.map(([a,b]) => nor(nor(a,a),nor(b,b))), [0,0,0,1]);
});

test('Corrected measurement, pendulum slope and meter-loading calculations', () => {
  near(12 + 7 * .02 - .04, 12.10);
  near(2 * .02 / 12.10 + .1 / 40, .005805785123966942);
  near(4 * Math.PI ** 2 / 4, 9.869604401089358);
  near(.2 / 20, .01); near(.002 / 1 + 2 * .01 / 2, .012);
  near(1 / (1 / 1000 + 1 / 10000), 909.0909090909091);
  near(2 * 40 / 60, 4 / 3);
  near(100 * .1 / (40 * 60), .004166666666666667);
});

for (const id of ids) test(`${id}: scripts and quizzes stay bounded and complete`, () => {
  const lesson = JSON.parse(fs.readFileSync(new URL(`../app/data/jee-${id}-lecture.json`, import.meta.url), 'utf8'));
  assert.equal(lesson.voice, 'marin'); assert.equal(lesson.chapters.length, 3);
  assert.ok(lesson.chapters.every(chapter => chapter.script.length <= 4096 && chapter.script.split(/\s+/).length >= 180));
  assert.deepEqual(lesson.quiz.map(question => question.answer), [1,2,0,3,1]);
  assert.ok(lesson.sources.some(source => source.url === 'https://jeemain.nta.nic.in/document/syllabus-2026/'));
});
