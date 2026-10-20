import test from 'node:test';
import assert from 'node:assert/strict';
import { lectureStudyLesson, withLectureClarifications } from '../app/jee/classes/lecture-study.ts';

test('authored notes preserve their content and include recording clarifications for downloads', () => {
  const written = { id: 'newtons-laws', sections: [{ title: 'Original', paragraphs: ['Keep this teaching.'], formula: 'F = ma' }], examples: [{ question: 'Keep this example.' }] };
  const snapshot = structuredClone(written);
  const lecture = { segments: [{ title: 'Friction', note: 'Contact-area approximation.' }, { title: 'No correction' }] };
  const result = withLectureClarifications(written, lecture);
  assert.deepEqual(written, snapshot);
  assert.equal(result.sections.length, 2);
  assert.equal(result.sections[0], written.sections[0]);
  assert.deepEqual(result.sections[1], { title: 'Clarification: Friction', paragraphs: ['Contact-area approximation.'] });
  assert.equal(result.examples, written.examples);
  assert.equal(withLectureClarifications(written), written);
  assert.equal(withLectureClarifications(written, { segments: [] }), written);
});

test('reading companions preserve authored scripts, corrections and practice without fabricating worked examples', () => {
  const lecture = {
    id: 'measurements', title: 'Measurement', description: 'Uncertainty', scope: 'Introductory scope.',
    segments: [{ title: 'Round correctly', formula: 'x', english: 'The existing spoken explanation.', note: 'Exact halfway rounding clarification.' }],
    quiz: [{ question: 'Test', options: ['A', 'B', 'C', 'D'], answer: 0, explanation: 'The answer.' }],
    sources: [{ title: 'Source', url: 'https://example.com' }],
  };
  const result = lectureStudyLesson(lecture, 1, ['Further instrument practice.']);
  assert.equal(result.unit, 1);
  assert.equal(result.sections[0].paragraphs[0], lecture.segments[0].english);
  assert.match(result.sections[0].paragraphs[1], /Exact halfway rounding/);
  assert.deepEqual(result.quiz, lecture.quiz);
  assert.deepEqual(result.sources, lecture.sources);
  assert.deepEqual(result.examples, []);
  assert.match(result.remaining, /Introductory scope.*Further instrument practice/);
  assert.equal(lecture.segments[0].note, 'Exact halfway rounding clarification.');
});
