import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';

const read = file => fs.readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
function audioDuration(file) {
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
const near = (a, b) => assert.ok(Math.abs(a - b) < .001);
test('EM-wave applications MP3 and captions validate', () => {
  const id='em-wave-applications',data=JSON.parse(read(`app/data/jee-${id}-lecture.json`)),timings=JSON.parse(read(`app/data/jee-${id}-timings.json`));
  assert.equal(data.voice,'marin'); assert.equal(data.chapters.length,3);
  near(audioDuration(`public/lectures/${id}/narration-marin.mp3`),timings.duration);
  data.chapters.forEach((chapter,i)=>{
    const stem=`public/lectures/${id}/chapter-${String(i+1).padStart(2,'0')}`,bounds=timings.chapters[i],cues=timings.cues.filter(c=>c.chapter===i);
    near(audioDuration(`${stem}.mp3`),bounds.end-bounds.start);
    assert.equal(cues.map(c=>c.text).join(' ').replace(/-/g,' ').replace(/\s+/g,' ').trim(),chapter.script.replace(/-/g,' ').replace(/\s+/g,' ').trim());
    assert.equal(read(`${stem}.sha256`),createHash('sha256').update(JSON.stringify({script:chapter.script,instructions:data.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex'));
    assert.ok(cues[0].start>=bounds.start&&cues.at(-1).end<=bounds.end+.001);
  });
  timings.cues.forEach((cue,i)=>{assert.ok(cue.end>cue.start&&cue.text.length<=110);if(i)assert.ok(cue.start>=timings.cues[i-1].end-.02);});
  assert.equal((read(`public/lectures/${id}/english.vtt`).match(/-->/g)||[]).length,timings.cues.length);
});
for (const [id, count] of [['rotation-applications', 5], ['materials-applications', 3], ['thermodynamics-applications', 3], ['kinetic-theory-applications', 3], ['lab-convex-mirror', 2], ['waves-applications', 3], ['induction-applications', 3], ['magnetic-applications', 3], ['circuit-applications', 3], ['capacitor-applications', 3], ['electrostatics-applications', 3], ['optics-applications', 3], ['wave-optics-applications', 3], ['dual-nature-applications', 3], ['atomic-nuclear-applications', 3], ['electronics-applications', 3], ['experimental-applications', 3], ['banked-road-limits', 2], ['optics-derivations', 3], ['lab-liquid-mixtures', 2]]) {
  test(`${id}: every MP3 frame, fingerprint and full-script subtitle timing validates`, () => {
    const data = JSON.parse(read(`app/data/jee-${id}-lecture.json`));
    const timings = JSON.parse(read(`app/data/jee-${id}-timings.json`));
    assert.equal(data.voice, 'marin');
    assert.equal(data.chapters.length, count);
    assert.equal(timings.chapters.length, count);
    const normalize = value => value.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    data.chapters.forEach((chapter, i) => {
      const stem = `public/lectures/${id}/chapter-${String(i + 1).padStart(2, '0')}`;
      assert.ok(chapter.script.length <= 4096);
      const bounds = timings.chapters[i];
      near(audioDuration(`${stem}.mp3`), bounds.end - bounds.start);
      near(bounds.start, i ? timings.chapters[i - 1].end : 0);
      const cues = timings.cues.filter(cue => cue.chapter === i);
      assert.ok(cues.length > 0);
      assert.equal(normalize(cues.map(cue => cue.text).join(' ')), normalize(chapter.script));
      assert.ok(cues[0].start >= bounds.start && cues.at(-1).end <= bounds.end + .001);
      const fingerprint = createHash('sha256').update(JSON.stringify({ script: chapter.script, instructions: data.voiceInstructions, voice: 'marin', model: 'gpt-4o-mini-tts' })).digest('hex');
      assert.equal(read(`${stem}.sha256`), fingerprint);
    });
    near(audioDuration(`public/lectures/${id}/narration-marin.mp3`), timings.duration);
    timings.cues.forEach((cue, i) => {
      assert.ok(cue.end > cue.start && cue.text.length <= 110);
      if (i) assert.ok(cue.start >= timings.cues[i - 1].end - .02);
    });
    assert.equal((read(`public/lectures/${id}/english.vtt`).match(/-->/g) || []).length, timings.cues.length);
    assert.ok(fs.existsSync(new URL(`../app/jee/classes/${id}/page.tsx`, import.meta.url)));
  });
}

test('convex mirror calculations and method match the stated model', () => {
  const data = JSON.parse(read('app/data/jee-lab-convex-mirror-lecture.json'));
  near((70 - 40 + .2) / 2, 15.1);
  near((.1 + .1 + .04) / 2, .12);
  assert.deepEqual(data.quiz.map(item => item.options[item.answer]), ['Centre of curvature', '15.1 cm', 'Lens and object pin', '0.12 cm']);
  assert.match(data.chapters[0].script, /without moving the lens or object pin/);
  assert.ok(data.sources.some(source => source.url.endsWith('lelm309.pdf')));
});

test('wave examples preserve derivative signs, local phase and beat ambiguity', () => {
  const data = JSON.parse(read('app/data/jee-waves-applications-lecture.json'));
  near(20 * Math.PI / (4 * Math.PI), 5);
  near(-.02 * 20 * Math.PI, -.4 * Math.PI);
  near(.04 * Math.sin(Math.PI / 4) * 100 * Math.PI, 8.885765876);
  assert.ok(Math.sin(Math.PI * .25) * Math.sin(Math.PI * 1.25) < 0);
  near(1 / Math.abs(260 - 256), .25);
  assert.equal(Math.abs(259 - 256), 3);
  assert.equal(Math.abs(251 - 256), 5);
  assert.deepEqual(data.quiz.map(item => item.answer), [1, 2, 0, 3, 1]);
});
