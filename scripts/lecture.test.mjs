import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const lesson = JSON.parse(fs.readFileSync(new URL('../app/data/jee-lecture.json', import.meta.url)));
const timing = JSON.parse(fs.readFileSync(new URL('../app/data/jee-lecture-timings.json', import.meta.url)));

test('every chapter has a complete, contiguous English recording and no Mizo subtitles', () => {
  assert.equal(lesson.segments.length, 12);
  for (const [index, segment] of lesson.segments.entries()) {
    assert.equal('mizo' in segment, false);
    const cues = timing.cues.filter(cue => cue.chapter === index);
    assert.equal(cues.map(cue => cue.text).join(' '), segment.english);
    assert.equal(segment.steps.length, 3);
  }
  for (const [index, cue] of timing.cues.entries()) {
    assert.ok(cue.end > cue.start);
    assert.equal(cue.start, index ? timing.cues[index - 1].end : 0);
  }
  assert.equal(timing.duration, timing.cues.at(-1).end);
  assert.ok(timing.duration > 300 && timing.duration < 1200);
  assert.equal(lesson.voice, 'marin');
  assert.equal(lesson.version, 2);
});

test('quiz answers and lesson calculations are consistent', () => {
  assert.equal(72 * 1000 / 3600, 20);
  assert.equal(36 * 1000 / 3600, 10);
  assert.equal(0.01 ** 2, 0.0001);
  assert.equal(Math.sqrt(4), 2);
  assert.equal(lesson.quiz[0].options[lesson.quiz[0].answer], '10 m/s');
  assert.equal(lesson.quiz[1].options[lesson.quiz[1].answer], 'ML²T⁻²');
  assert.equal(lesson.quiz[2].answer, 2);
});

test('published audio and caption assets exist with all cues', () => {
  assert.ok(fs.statSync(new URL('../public/lectures/units/narration-marin-v2.mp3', import.meta.url)).size > 1000000);
  const vtt = fs.readFileSync(new URL('../public/lectures/units/english-marin-v3.vtt', import.meta.url), 'utf8');
  assert.ok(vtt.startsWith('WEBVTT'));
  assert.equal(vtt.match(/ --> /g).length, timing.cues.length);
});

test('the two reviewed Units cues match the active subtitles and spoken endings', () => {
  const vtt = fs.readFileSync(new URL('../public/lectures/units/english-marin-v3.vtt', import.meta.url), 'utf8');
  const oldTrack = fs.readFileSync(new URL('../public/lectures/units/english-marin-v2.vtt', import.meta.url), 'utf8');
  const words = [
    [384.412, 'It does not become four times as large, because period depends on the square root of length.'],
    [417.888, 'Significant figures, measurement uncertainty, and measuring instruments need their own later lessons.'],
  ];
  for (const [start, expected] of words) {
    const cue = timing.cues.find(item => Math.abs(item.start - start) < 0.002);
    assert.equal(cue?.text, expected);
    assert.ok(vtt.split(/\r?\n/).includes(expected));
  }
  assert.match(oldTrack, /not directly on length/);
  assert.match(oldTrack, /they are not covered in this class/);
  assert.doesNotMatch(vtt, /not directly on length|they are not covered in this class/);
});
