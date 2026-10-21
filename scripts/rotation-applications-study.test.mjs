import test from 'node:test';
import assert from 'node:assert/strict';
import { rotationApplicationsLesson as lesson, rotationApplicationsNarration as narration } from '../app/jee/classes/rotation-applications-study.ts';
const near = (a, b) => assert.ok(Math.abs(a - b) < .001);

test('rotation written class and recorded narration share the same teaching foundation', () => {
  assert.equal(lesson.unit, 5);
  assert.equal(narration.status, 'recorded');
  assert.equal(narration.voice, 'marin');
  assert.equal(narration.chapters.length, 5);
  for (const [i, chapter] of narration.chapters.entries()) {
    assert.equal(chapter.script, lesson.sections[i].paragraphs.join(' '));
    assert.ok(chapter.script.length > 600 && chapter.script.length <= 4096);
  }
  assert.match(lesson.remaining, /five recorded Marin chapters/);
});

test('rotation applications answers and examples independently satisfy physical constraints', () => {
  near((2 * 0 + 3 * 4) / 5, 2.4);
  near(3 * 2 ** 2 / 12 + 3 * 1 ** 2, 4);
  near(4 * 3 / 2, 6);
  near((20 * 2 + 60 * 1) / 4, 25);
  near(80 - 25, 55);
  near(Math.sqrt(2 * 10 * .30 / 1.5), 2);
  near(100 * (-2 / 3) + 50 * (2 - 2 / 3), 0);
  near(10 * Math.sin(Math.PI / 6) / 1.5, 10 / 3);
  near(Math.tan(Math.PI / 6) / 3, 1 / (3 * Math.sqrt(3)));
  near(.5 * 4 * 3 ** 2, 18);
  near(.5 * 2 * 6 ** 2, 36);
  const answers = ['2.4 m', '4 kg m^2', '6 rad/s', '25 N', '2 m/s'];
  lesson.quiz.forEach((q, i) => assert.equal(q.options[q.answer], answers[i]));
  assert.match(lesson.sections[1].paragraphs.join(' '), /thin planar lamina/);
  assert.match(lesson.sections[4].paragraphs.join(' '), /sufficient static friction/);
});
