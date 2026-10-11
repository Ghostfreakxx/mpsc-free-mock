import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';

const read = file => fs.readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
const lesson = JSON.parse(read('app/data/jee-kinematics-applications-lecture.json'));
const near = (a, b, tolerance = .001) => assert.ok(Math.abs(a - b) < tolerance, `${a} differs from ${b}`);
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

test('kinematics includes six independently cached Marin chapters and complete bounded captions', () => {
  const timings = JSON.parse(read('app/data/jee-kinematics-applications-timings.json'));
  assert.equal(lesson.voice, 'marin');
  assert.equal(lesson.chapters.length, 6);
  assert.equal(timings.chapters.length, 6);
  const normalize = text => text.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
  timings.chapters.forEach((chapter, i) => {
    const stem = `public/lectures/kinematics-applications/chapter-${String(i + 1).padStart(2, '0')}`;
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
  near(mp3Duration('public/lectures/kinematics-applications/narration-marin.mp3'), timings.duration);
  near(timings.chapters.at(-1).end, timings.duration);
  timings.cues.forEach((cue, i) => {
    assert.ok(cue.end > cue.start && cue.start >= 0 && cue.end <= timings.duration && cue.text.length <= 110);
    if (i) assert.ok(cue.start >= timings.cues[i - 1].end - .02);
  });
  const vtt = read('public/lectures/kinematics-applications/english.vtt');
  assert.match(vtt, /^WEBVTT/);
  assert.equal((vtt.match(/-->/g) || []).length, timings.cues.length);
});

test('original worked kinematics answers independently satisfy the stated models', () => {
  near(120 / (18 - 12), 20);
  near((100 + 140) / (18 - 12), 40);
  near(3 * 120 / 5, 72);
  near(120 / Math.sqrt(25 - 9), 30);
  const ux = 20 * Math.cos(Math.PI / 6), uy = 20 * Math.sin(Math.PI / 6), g = 10;
  near(2 * uy / g, 2);
  near(uy ** 2 / (2 * g), 5);
  near(ux * 2 * uy / g, 20 * Math.sqrt(3));
  near(Math.hypot(15, g * Math.sqrt(40 / g)), 25);
  near(Math.hypot(4 ** 2 / 2, 6), 10);
  const x = t => t ** 3 - 6 * t ** 2 + 9 * t;
  const v = t => 3 * t ** 2 - 12 * t + 9;
  near(Math.abs(x(1) - x(0)) + Math.abs(x(3) - x(1)), 8);
  near(x(3) - x(0), 0);
  near(v(2), -3);
  const answers = ['40 s', '72 m east', '30 s', '10 sqrt(3) m/s', '25 m/s', '10 m/s^2', '8 m', 'v = -3 m/s and a = 0'];
  lesson.quiz.forEach((question, i) => assert.equal(question.options[question.answer], answers[i]));
});

test('kinematics is registered without replacing the written straight-line lesson', () => {
  assert.match(read('app/jee/classes/kinematics-applications/page.tsx'), /LecturePlayer/);
  assert.match(read('app/jee/classes/lecture-player.tsx'), /KinematicsDiagram chapter=\{chapterIndex\}/);
  assert.match(read('app/jee/classes/physics-coverage.ts'), /"straight-line-motion", "kinematics-applications"/);
  assert.match(read('app/jee/classes/study-lessons.ts'), /id: "straight-line-motion"/);
  assert.match(read('app/jee/classes/lessons.ts'), /jee.kinematics-applications.lecture.v1/);
});
