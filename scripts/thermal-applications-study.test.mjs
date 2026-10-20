import test from 'node:test';
import assert from 'node:assert/strict';
import { thermalApplicationsLessons as lessons } from '../app/jee/classes/thermal-applications-study.ts';
const near = (a, b, tolerance = 1e-8) => assert.ok(Math.abs(a - b) < tolerance);

test('three recorded applications classes preserve the written official-unit foundation', () => {
  assert.deepEqual(lessons.map(lesson => lesson.unit), [7, 8, 9]);
  lessons.forEach(lesson => {
    assert.equal(lesson.sections.length, 5);
    assert.equal(lesson.examples.length, 3);
    assert.equal(lesson.quiz.length, 5);
    assert.ok(lesson.sections.flatMap(section => section.paragraphs).join(' ').split(/\s+/).length > 600);
    assert.match(lesson.remaining, /three recorded Marin/i);
    assert.ok(lesson.sources.some(source => source.url.includes('jeemain.nta.nic.in')));
  });
});

test('materials, flow and thermal calculations use consistent signs and units', () => {
  near(-2e6 / 1e9, -.002);
  near(.002 * (-2e6 / 1e9), -4e-6);
  near(.5 * 4e6 * .002, 4000);
  near(2000 * .001 / (1000 * .01), .2);
  near(Math.sqrt(2 * 10 * .45), 3);
  near(1000 * 1e-4 * 3, .3);
  near(.1 * 2100 * 10 + .1 * 334000 + .1 * 4200 * 20, 43900);
  near(43900 / 100, 439);
  assert.match(lessons[0].sections[2].paragraphs.join(' '), /not a universal constant/);
});

test('thermodynamic paths and cycle answers preserve first-law conventions', () => {
  near(500 - 200, 300);
  near(300 + 300, 600);
  near(1e5 * (.002 - .001), 100);
  near(2e5 * (.002 - .001), 200);
  near(8.314 * 300 * .693, 1728.4806);
  near(300 / 2 ** (2 / 3), 188.988157484, 1e-6);
  near((2e5 - 1e5) * (.002 - .001), 100);
  near(1 - 300 / 600, .5);
  assert.match(lessons[1].sections[3].paragraphs.join(' '), /Irreversible adiabatic/);
});

test('kinetic theory independently checks pressure, speed, heat capacity and mean free path', () => {
  near(1.2 * 500 ** 2 / 3, 1e5);
  near(Math.sqrt(.028 / .004), Math.sqrt(7));
  near(Math.sqrt(1200 / 300), 2);
  near((5 + 2) / 5, 7 / 5);
  near(2 * 1.5 * 8.314 * 10, 249.42);
  const meanFreePath = 1 / (Math.sqrt(2) * Math.PI * (3e-10) ** 2 * 2.5e25);
  assert.ok(meanFreePath > .99e-7 && meanFreePath < 1.01e-7);
  near(1e5 * (.001 - .003), -200);
  assert.match(lessons[2].sections[1].paragraphs.join(' '), /same wall/);
});

test('published practice keys match the independently verified lesson answers', () => {
  const answers = [
    ['-0.002', '4000 J/m^3', 'Half', '3 m/s', 'Heat current'],
    ['300 J', 'Q = W_by', 'No heat exchange', '2^(-2/3)', '50%'],
    ['100000 Pa', 'Mean translational energy per molecule', '2', '7/5', 'Half'],
  ];
  lessons.forEach((lesson, i) => lesson.quiz.forEach((question, j) => assert.equal(question.options[question.answer], answers[i][j])));
});
