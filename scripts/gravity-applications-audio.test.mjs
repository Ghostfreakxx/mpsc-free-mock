import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';

const read = file => fs.readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
const lesson = JSON.parse(read('app/data/jee-gravity-applications-lecture.json'));
const timings = JSON.parse(read('app/data/jee-gravity-applications-timings.json'));
const near = (a, b) => assert.ok(Math.abs(a - b) < .001);
function duration(file) {
  const bytes = fs.readFileSync(new URL(`../${file}`, import.meta.url));
  let offset = bytes.subarray(0, 3).toString() === 'ID3' ? 10 + ((bytes[6] << 21) | (bytes[7] << 14) | (bytes[8] << 7) | bytes[9]) : 0;
  let seconds = 0;
  while (offset < bytes.length) {
    assert.ok(offset + 4 <= bytes.length);
    const h = bytes.readUInt32BE(offset), v = (h >>> 19) & 3, b = (h >>> 12) & 15, s = (h >>> 10) & 3;
    assert.equal(h >>> 21, 2047);
    assert.equal((h >>> 17) & 3, 1);
    assert.ok(v !== 1 && b > 0 && b < 15 && s < 3);
    const rate = [44100, 48000, 32000][s] / (v === 3 ? 1 : v === 2 ? 2 : 4);
    const rates = v === 3 ? [0,32,40,48,56,64,80,96,112,128,160,192,224,256,320] : [0,8,16,24,32,40,48,56,64,80,96,112,128,144,160];
    offset += Math.floor((v === 3 ? 144 : 72) * rates[b] * 1000 / rate) + ((h >>> 9) & 1);
    assert.ok(offset <= bytes.length);
    seconds += (v === 3 ? 1152 : 576) / rate;
  }
  return seconds;
}

test('gravity applications audio and captions preserve two replaceable cached chapters', () => {
  assert.equal(lesson.voice, 'marin');
  assert.equal(lesson.chapters.length, 2);
  assert.equal(timings.chapters.length, 2);
  const normalize = text => text.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
  lesson.chapters.forEach((chapter, i) => {
    const stem = `public/lectures/gravity-applications/chapter-${String(i + 1).padStart(2, '0')}`;
    assert.ok(chapter.script.length <= 4096);
    const bounds = timings.chapters[i];
    near(duration(`${stem}.mp3`), bounds.end - bounds.start);
    near(bounds.start, i ? timings.chapters[i - 1].end : 0);
    const cues = timings.cues.filter(cue => cue.chapter === i);
    assert.ok(cues.length > 0);
    assert.equal(normalize(cues.map(cue => cue.text).join(' ')), normalize(chapter.script));
    assert.ok(cues[0].start >= bounds.start && cues.at(-1).end <= bounds.end + .001);
    const hash = createHash('sha256').update(JSON.stringify({ script: chapter.script, instructions: lesson.voiceInstructions, voice: 'marin', model: 'gpt-4o-mini-tts' })).digest('hex');
    assert.equal(read(`${stem}.sha256`), hash);
  });
  near(duration('public/lectures/gravity-applications/narration-marin.mp3'), timings.duration);
  timings.cues.forEach((cue, i) => {
    assert.ok(cue.end > cue.start && cue.text.length <= 110);
    if (i) assert.ok(cue.start >= timings.cues[i - 1].end - .02);
  });
  assert.equal((read('public/lectures/gravity-applications/english.vtt').match(/-->/g) || []).length, timings.cues.length);
});
