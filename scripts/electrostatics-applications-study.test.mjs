import test from 'node:test';
import assert from 'node:assert/strict';
import { electrostaticsApplicationsLesson as lesson } from '../app/jee/classes/electrostatics-applications-study.ts';

const near = (actual, expected, tolerance = 1e-6) => assert.ok(Math.abs(actual - expected) < tolerance, `${actual} != ${expected}`);
const k = 9e9;
const midpointIntegral = (f, start, end, count = 20000) => {
  const width = (end - start) / count;
  let result = 0;
  for (let i = 0; i < count; i++) result += f(start + (i + .5) * width) * width;
  return result;
};

test('written electrostatics companion preserves honest scope and official-unit mapping', () => {
  assert.equal(lesson.unit, 11);
  assert.equal(lesson.sections.length, 5);
  assert.equal(lesson.examples.length, 3);
  assert.equal(lesson.quiz.length, 5);
  assert.match(lesson.remaining, /separate three-chapter Marin applications classroom/);
  assert.match(lesson.remaining, /Further flux geometry/);
  assert.ok(lesson.sources.some(source => source.url.includes('jeemain.nta.nic.in')));
});

test('ring field follows vector element integration and the potential derivative', () => {
  const radius = .3, x = .4, charge = 1e-9;
  const distance = Math.hypot(radius, x);
  near(midpointIntegral(() => k * charge * x / (2 * Math.PI * distance ** 3), 0, 2 * Math.PI), 28.8);
  near(midpointIntegral(theta => k * charge * radius * Math.cos(theta) / (2 * Math.PI * distance ** 3), 0, 2 * Math.PI), 0);
  near(k * charge / distance, 18);
  const potential = position => k * charge / Math.hypot(radius, position);
  const h = 1e-5;
  near(-(potential(x + h) - potential(x - h)) / (2 * h), 28.8);
  near(potential(0), 30);
});

test('finite-rod field agrees with direct integration and the infinite-line limit', () => {
  const density = 2e-9, a = .3, y = .4;
  near(midpointIntegral(s => k * density * y / (s * s + y * y) ** 1.5, -a, a), 54);
  const longA = 1e5;
  near(2 * k * density * longA / (y * Math.hypot(longA, y)), 90);
});

test('exact dipole geometry gives the stated field and approximation error', () => {
  const q = 1e-9, a = .1, r = .3, p = 2 * a * q;
  const exact = k * q * (1 / (r - a) ** 2 - 1 / (r + a) ** 2);
  near(exact, 168.75);
  near(2 * k * p * r / (r * r - a * a) ** 2, exact);
  const far = 2 * k * p / r ** 3;
  near(far, 133.333333333);
  near((exact - far) / exact * 100, 20.987654321);
  const distance = Math.hypot(r, a);
  near(-2 * k * q * a / distance ** 3, -k * p / distance ** 3);
  near(k * q / distance - k * q / distance, 0);
});

test('orientation work and every published answer key preserve signs', () => {
  near(2e-9 * .02 * 2e5, 8e-6, 1e-12);
  assert.deepEqual(lesson.quiz.map(item => item.options[item.answer]), ['E is zero; V is positive', '54 N/C', '168.75 N/C', 'Opposite p', '+8 microjoules']);
  assert.match(lesson.sections[4].paragraphs.join(' '), /field does -8 microjoules/);
});
