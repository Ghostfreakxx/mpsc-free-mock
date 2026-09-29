import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';

const read = path => JSON.parse(readFileSync(new URL(`../${path}`, import.meta.url), 'utf8'));
const timing = read('app/data/jee-measurements-timings.json');
const lesson = read('app/data/jee-measurements-lecture.json');

test('measurement captions preserve the complete authored transcript', () => {
  lesson.chapters.forEach((chapter, index) => {
    const cues = timing.cues.filter(cue => cue.chapter === index);
    assert.ok(cues.length > 1);
    assert.equal(cues.map(cue => cue.text).join(' '), chapter.script);
    cues.forEach(cue => assert.ok(cue.text.length <= 140));
  });
});

test('chapter offsets match concatenated audio without artificial pauses', () => {
  let offset = 0;
  timing.chapterDurations.forEach((duration, index) => {
    const cues = timing.cues.filter(cue => cue.chapter === index);
    assert.ok(Math.abs(cues[0].start - offset) < 0.001);
    offset += duration;
    assert.ok(Math.abs(cues.at(-1).end - offset) < 0.001);
  });
  assert.ok(Math.abs(offset - timing.duration) < 0.001);
  timing.cues.forEach((cue, index) => {
    assert.ok(cue.end > cue.start);
    if (index) assert.equal(cue.start, timing.cues[index - 1].end);
  });
});

test('downloadable subtitles contain every displayed caption', () => {
  const vtt = readFileSync(new URL('../public/lectures/measurements/english-v2.vtt', import.meta.url), 'utf8');
  assert.match(vtt, /^WEBVTT\r?\n/);
  assert.equal(vtt.split('-->').length - 1, timing.cues.length);
  for (const cue of timing.cues) assert.ok(vtt.includes(cue.text));
});
