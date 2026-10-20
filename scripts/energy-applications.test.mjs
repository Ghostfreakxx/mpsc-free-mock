import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';

const read = file => fs.readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
const lesson = JSON.parse(read('app/data/jee-energy-applications-lecture.json'));
const near = (a, b) => assert.ok(Math.abs(a - b) < .001, `${a} differs from ${b}`);
function mp3Duration(file) {
  const bytes = fs.readFileSync(new URL(`../${file}`, import.meta.url));
  let offset = bytes.subarray(0, 3).toString() === 'ID3' ? 10 + ((bytes[6] << 21) | (bytes[7] << 14) | (bytes[8] << 7) | bytes[9]) : 0;
  let seconds = 0;
  while (offset < bytes.length) {
    assert.ok(offset + 4 <= bytes.length);
    const header = bytes.readUInt32BE(offset), version = (header >>> 19) & 3, bitrate = (header >>> 12) & 15, sample = (header >>> 10) & 3;
    assert.equal(header >>> 21, 2047);
    assert.equal((header >>> 17) & 3, 1);
    assert.ok(version !== 1 && bitrate > 0 && bitrate < 15 && sample < 3);
    const rate = [44100, 48000, 32000][sample] / (version === 3 ? 1 : version === 2 ? 2 : 4);
    const rates = version === 3 ? [0,32,40,48,56,64,80,96,112,128,160,192,224,256,320] : [0,8,16,24,32,40,48,56,64,80,96,112,128,144,160];
    offset += Math.floor((version === 3 ? 144 : 72) * rates[bitrate] * 1000 / rate) + ((header >>> 9) & 1);
    assert.ok(offset <= bytes.length);
    seconds += (version === 3 ? 1152 : 576) / rate;
  }
  assert.ok(seconds > 0);
  return seconds;
}

test('energy applications preserves six cached Marin segments and complete synchronized captions', () => {
  const timings = JSON.parse(read('app/data/jee-energy-applications-timings.json'));
  assert.equal(lesson.voice, 'marin');
  assert.equal(lesson.chapters.length, 6);
  assert.equal(timings.chapters.length, 6);
  const normalize = text => text.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
  timings.chapters.forEach((chapter, i) => {
    const stem = `public/lectures/energy-applications/chapter-${String(i + 1).padStart(2, '0')}`;
    near(mp3Duration(`${stem}.mp3`), chapter.end - chapter.start);
    assert.ok(chapter.end - chapter.start >= 20 && chapter.end - chapter.start <= 240);
    near(chapter.start, i ? timings.chapters[i - 1].end : 0);
    const cues = timings.cues.filter(cue => cue.chapter === i);
    assert.ok(cues.length > 0);
    assert.equal(normalize(cues.map(cue => cue.text).join(' ')), normalize(lesson.chapters[i].script));
    assert.ok(cues[0].start >= chapter.start && cues.at(-1).end <= chapter.end + .001);
    const hash = createHash('sha256').update(JSON.stringify({ script: lesson.chapters[i].script, instructions: lesson.voiceInstructions, voice: 'marin', model: 'gpt-4o-mini-tts' })).digest('hex');
    assert.equal(read(`${stem}.sha256`), hash);
  });
  near(mp3Duration('public/lectures/energy-applications/narration-marin.mp3'), timings.duration);
  near(timings.chapters.at(-1).end, timings.duration);
  timings.cues.forEach((cue, i) => {
    assert.ok(cue.end > cue.start && cue.start >= 0 && cue.end <= timings.duration && cue.text.length <= 110);
    if (i) assert.ok(cue.start >= timings.cues[i - 1].end - .02);
  });
  const vtt = read('public/lectures/energy-applications/english.vtt');
  assert.match(vtt, /^WEBVTT/);
  assert.equal((vtt.match(/-->/g) || []).length, timings.cues.length);
});

test('energy, vertical-circle and collision answers satisfy independent conservation checks', () => {
  near(3 ** 2 + 2 * 3, 15);
  near(4 * 10 * 2 / .8, 100);
  near(Math.sqrt(200 * .2 ** 2 / 2), 2);
  const g = 10, r = 2, bottomSpeedSquared = 5 * g * r;
  near(bottomSpeedSquared / r + g, 60);
  near(bottomSpeedSquared - 4 * g * r, g * r);
  near(2 * 2 + 8, 2 * 6);
  near(.5 * 2 * 2 ** 2 + .5 * 8 ** 2, .5 * 2 * 6 ** 2);
  near(.5 * 2 * 6 ** 2 - .5 * 3 * 4 ** 2, 12);
  near(Math.hypot(2 * 3 / 3, 1 * 6 / 3), 2 * Math.sqrt(2));
  near(.5 * 2 * 3 ** 2 + .5 * 6 ** 2 - .5 * 3 * (2 ** 2 + 2 ** 2), 15);
  near(5 * 5 + 5 * -5, 0);
  near(.5 * (5 ** 2 + 5 ** 2) * 2, .5 * 10 ** 2);
  const answers = ['15 J','100 W','2 m/s','60 N','+2 and +8 m/s','12 J','2 sqrt(2) m/s','15 J'];
  lesson.quiz.forEach((question, i) => assert.equal(question.options[question.answer], answers[i]));
  assert.match(lesson.chapters[3].script, /rigid rod/);
  assert.match(lesson.chapters[5].script, /no rotational energy/);
});

test('energy applications remains separate from the unmodified foundation class', () => {
  assert.match(read('app/jee/classes/energy-applications/page.tsx'), /LecturePlayer/);
  assert.match(read('app/jee/classes/lecture-player.tsx'), /EnergyApplicationsDiagram chapter=\{chapterIndex\}/);
  assert.match(read('app/jee/classes/physics-coverage.ts'), /"work-energy", "energy-applications"/);
  assert.match(read('app/jee/classes/lessons.ts'), /jee.energy-applications.lecture.v1/);
  assert.equal(createHash('sha256').update(fs.readFileSync(new URL('../public/lectures/work-energy/narration-marin.mp3', import.meta.url))).digest('hex').toUpperCase(), 'D0EEFC709F1F90AC239D243B3792B8D0082C98B7B662F53C841C25DABA7E696E');
});
