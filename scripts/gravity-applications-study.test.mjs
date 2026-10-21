import test from 'node:test';
import assert from 'node:assert/strict';
import { gravityApplicationsLesson as lesson, gravityApplicationsNarration as narration } from '../app/jee/classes/gravity-applications-study.ts';
const near = (a, b) => assert.ok(Math.abs(a - b) < 1e-8);

test('gravitation applications retain source chapters and identify the condensed recording', () => {
  assert.equal(lesson.unit, 6);
  assert.equal(narration.voice, 'marin');
  assert.equal(narration.status, 'recorded-condensed-version');
  assert.equal(narration.recordingId, lesson.id);
  assert.equal(narration.chapters.length, 5);
  narration.chapters.forEach((chapter, i) => {
    assert.equal(chapter.script, lesson.sections[i].paragraphs.join(' '));
    assert.ok(chapter.script.length > 600 && chapter.script.length <= 4096);
  });
  assert.match(lesson.remaining, /two-chapter Marin/);
});

test('gravity, potential, escape and orbit calculations satisfy independent checks', () => {
  near((1 / (1 + 1)) ** 2, .25);
  near(1 - .75, .25);
  near(1 - .5, .5);
  near(Math.sqrt(2) / 1, Math.SQRT2);
  near(4 ** 1.5, 8);
  near(-1 / 8 - (-1 / 2), 3 / 8);
  near((1 + 3) / 2, 2);
  near(2 ** 1.5, 2 * Math.SQRT2);
  near(-1 / (2 * 2), -.25);
  near(1 / (1 - .25), 4 / 3);
  const answers = ['g0/4', 'g0/2', 'sqrt(2)', '8 times', 'Field is zero; potential is negative'];
  lesson.quiz.forEach((q, i) => assert.equal(q.options[q.answer], answers[i]));
  assert.match(lesson.sections[0].paragraphs.join(' '), /uniform-density/);
  assert.match(lesson.sections[2].paragraphs.join(' '), /radial launch/);
  assert.match(lesson.sections[3].paragraphs.join(' '), /sidereal/);
  assert.match(lesson.sections[4].paragraphs.join(' '), /semi-major axis/);
});
