import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';

const read = file => fs.readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
const lesson = JSON.parse(read('app/data/jee-laws-motion-applications-lecture.json'));
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

test('laws applications has six validated cached Marin chapters and complete bounded captions', () => {
  const timings = JSON.parse(read('app/data/jee-laws-motion-applications-timings.json'));
  assert.equal(lesson.voice, 'marin');
  assert.equal(lesson.chapters.length, 6);
  assert.equal(timings.chapters.length, 6);
  const normalize = text => text.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
  timings.chapters.forEach((chapter, i) => {
    const stem = `public/lectures/laws-motion-applications/chapter-${String(i + 1).padStart(2, '0')}`;
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
  near(mp3Duration('public/lectures/laws-motion-applications/narration-marin.mp3'), timings.duration);
  near(timings.chapters.at(-1).end, timings.duration);
  timings.cues.forEach((cue, i) => {
    assert.ok(cue.end > cue.start && cue.start >= 0 && cue.end <= timings.duration && cue.text.length <= 110);
    if (i) assert.ok(cue.start >= timings.cues[i - 1].end - .02);
  });
  const vtt = read('public/lectures/laws-motion-applications/english.vtt');
  assert.match(vtt, /^WEBVTT/);
  assert.equal((vtt.match(/-->/g) || []).length, timings.cues.length);
});

test('original force answers satisfy the equations and assumptions independently', () => {
  near(2 * (-2 - 3) / .2, -50);
  near(.5 * .4 * 20 / .5, 8);
  near(100 / Math.sin(Math.PI / 6), 200);
  const acceleration = (3 - 2) * 10 / (3 + 2);
  near(acceleration, 2);
  near(2 * (10 + acceleration), 24);
  near(3 * (10 - acceleration), 24);
  assert.ok(18 < .5 * 4 * 10 && 24 > .5 * 4 * 10);
  near((24 - .3 * 4 * 10) / 4, 3);
  near(Math.sqrt(.5 * 20 * 10), 10);
  near(Math.sqrt(20 * 10 * Math.tan(Math.PI / 4)), 10 * Math.sqrt(2));
  const answers = ['-50 N','8 m/s','200 N','24 N','18 N','3 m/s^2','10 m/s','10 sqrt(2) m/s'];
  lesson.quiz.forEach((question, i) => assert.equal(question.options[question.answer], answers[i]));
  assert.match(lesson.chapters[3].script, /not automatically at its limiting value/);
  assert.match(lesson.chapters[5].script, /friction acts up the bank/);
  assert.match(lesson.chapters[5].script, /friction acts down the bank/);
});

test('laws applications is registered separately while retaining reference audio and written foundations', () => {
  assert.match(read('app/jee/classes/laws-motion-applications/page.tsx'), /LecturePlayer/);
  assert.match(read('app/jee/classes/lecture-player.tsx'), /LawsMotionDiagram chapter=\{chapterIndex\}/);
  assert.match(read('app/jee/classes/physics-coverage.ts'), /"newtons-laws", "laws-motion-applications"/);
  assert.match(read('app/jee/classes/study-lessons-two.ts'), /id: "newtons-laws"/);
  assert.match(read('app/jee/classes/lessons.ts'), /jee.laws-motion-applications.lecture.v1/);
  for (const [file, hash] of [
    ['public/lectures/units/narration-marin-v2.mp3','C2BA8630C29D9448171AFE61E2C651DE65ACD0968ADBB27598CD70136B96EE93'],
    ['public/lectures/measurements/narration-marin.mp3','DF460852B302047476D6548D557B61DE799CE504B25A934FC3775BA5749295A6'],
    ['public/lectures/newtons-laws/narration-marin.mp3','9D50193E53E017DCF31A5E80AF2DFB81C51183E43956670D27B0FB671B5C2C70'],
  ]) assert.equal(createHash('sha256').update(fs.readFileSync(new URL(`../${file}`, import.meta.url))).digest('hex').toUpperCase(), hash);
});
