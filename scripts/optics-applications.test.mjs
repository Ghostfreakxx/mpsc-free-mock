import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync(new URL('../app/data/jee-optics-applications-lecture.json', import.meta.url), 'utf8'));
const near = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-10 * Math.max(1, Math.abs(expected)));
const lensImage = (f, u) => 1 / (1 / f + 1 / u);

test('Two-lens virtual object preserves positions and signed magnification', () => {
  const v1 = lensImage(10, -30), u2 = v1 - 10, v2 = lensImage(20, u2);
  near(v1, 15); near(u2, 5); near(v2, 4); near(10 + v2, 14);
  near((v1 / -30) * (v2 / u2), -.4);
});

test('Independent ray propagation gives separated power and back focus', () => {
  const height = .002, p1 = 10, p2 = 5, d = .05;
  const slope1 = -p1 * height;
  const height2 = height + d * slope1;
  const slope2 = slope1 - p2 * height2;
  near(-slope2 / height, 12.5);
  near(-height2 / slope2, .04);
  near(1 / 12.5, .08);
  const swappedHeight = height * (1 - d * p2);
  const swappedSlope = -p2 * height - p1 * swappedHeight;
  near(-swappedSlope / height, 12.5);
  near(-swappedHeight / swappedSlope, .06);
  near(p1 + p2 - 0 * p1 * p2, 15);
});

test('Spherical refraction preserves index-weighted imaging and unequal focal distances', () => {
  const n1 = 1, n2 = 1.5, r = 20, u = -60;
  const v = n2 / ((n2 - n1) / r + n1 / u);
  near(v, 180); near(n2 / v - n1 / u, (n2 - n1) / r);
  near(n1 * v / (n2 * u), -2);
  near(n2 * r / (n2 - n1), 60);
  near(-n1 * r / (n2 - n1), -40);
  near((n2 - n1) / r + n1 / -40, 0);
});

test('Optics quiz and scope retain the authored assumptions', () => {
  assert.deepEqual(data.quiz.map(question => question.answer), [1, 2, 0, 3, 1]);
  assert.match(data.chapters[0].script, /positive five, not negative five/);
  assert.match(data.chapters[1].script, /If equivalent power is zero/);
  assert.match(data.chapters[2].script, /no second interface/);
  assert.ok(data.chapters.every(chapter => chapter.script.length <= 4096));
});
