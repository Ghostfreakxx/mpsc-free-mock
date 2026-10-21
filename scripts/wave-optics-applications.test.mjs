import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync(new URL('../app/data/jee-wave-optics-applications-lecture.json', import.meta.url), 'utf8'));
const near = (a, b) => assert.ok(Math.abs(a - b) < 1e-10 * Math.max(1, Math.abs(b)));

test('Signed phase positions and complex-field contrast agree', () => {
  const beta = 600e-9 * 1.5 / .9e-3;
  near(beta, .001);
  const y = -beta / 4;
  near(2 * Math.PI * y / beta + Math.PI / 2, 0);
  const intensity = phase => (3 + 2 * Math.cos(phase)) ** 2 + (2 * Math.sin(phase)) ** 2;
  near(intensity(0), 25); near(intensity(Math.PI), 1);
  near((intensity(0) - intensity(Math.PI)) / (intensity(0) + intensity(Math.PI)), 12 / 13);
  near(intensity(Math.PI / 2), 13);
});

test('Finite slit envelope erases boundary orders and has five inner orders', () => {
  const wavelength = 600e-9, distance = 1.5, separation = .6e-3, width = .2e-3;
  const beta = wavelength * distance / separation;
  const firstMinimum = wavelength * distance / width;
  near(beta, .0015); near(firstMinimum, .0045); near(firstMinimum * 2, .009);
  const orders = Array.from({ length: 9 }, (_, i) => i - 4).filter(m => Math.abs(m * beta) < firstMinimum - 1e-12);
  assert.deepEqual(orders, [-2, -1, 0, 1, 2]);
  const sinc = value => value === 0 ? 1 : Math.sin(value) / value;
  near(sinc(0), 1);
  for (const m of [-3, 3, 6]) near(sinc(Math.PI * width * m / separation) ** 2, 0);
  assert.ok(sinc(Math.PI / 3) ** 2 > sinc(2 * Math.PI / 3) ** 2);
});

test('Successive ideal polarizers never amplify an individual stage', () => {
  const axes = [0, 30, 60, 90];
  let intensity = 100 / 2;
  const stages = [intensity];
  for (let i = 1; i < axes.length; i++) {
    const next = intensity * Math.cos((axes[i] - axes[i - 1]) * Math.PI / 180) ** 2;
    assert.ok(next <= intensity);
    intensity = next; stages.push(intensity);
  }
  stages.forEach((value, i) => near(value, [50, 37.5, 28.125, 21.09375][i]));
  const output = theta => 50 * Math.cos(theta) ** 2 * Math.sin(theta) ** 2;
  near(output(Math.PI / 4), 12.5);
  for (let i = 0; i <= 180; i++) assert.ok(output(i * Math.PI / 360) <= 12.5 + 1e-10);
  near(output(0), 0); near(output(Math.PI / 2), 0);
});

test('Wave-optics quizzes and narration preserve explicit ideal-model qualifications', () => {
  assert.deepEqual(data.quiz.map(question => question.answer), [1, 2, 0, 3, 1]);
  assert.match(data.chapters[0].script, /declared coordinate convention/);
  assert.match(data.chapters[1].script, /actual local peak positions slightly/);
  assert.match(data.chapters[2].script, /already polarized/);
  assert.ok(data.chapters.every(chapter => chapter.script.length <= 4096));
});
