import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {chemistryCoreLessons} from '../app/jee/classes/chemistry-core-study.ts';
const data = JSON.parse(fs.readFileSync('app/data/jee-organic-principles-lecture.json'));
const timing = JSON.parse(fs.readFileSync('app/data/jee-organic-principles-timings.json'));
test('organic recording has complete monotonic captions within twenty-nine audio chapters', () => {
  assert.deepEqual(data.quiz,chemistryCoreLessons.find(l=>l.id==='organic-principles').quiz);
  for(const [i,c]of data.chapters.entries()){
   const hash=createHash('sha256').update(JSON.stringify({script:c.speechInput??c.script,instructions:data.voiceInstructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');
   assert.equal(fs.readFileSync('public/lectures/organic-principles/chapter-'+String(i+1).padStart(2,'0')+'.sha256','utf8'),hash);
   if(i>=5){assert.ok(c.script.split(/\s+/).length>=140);assert.equal(c.board.rows.length,3);}
  }
  assert.equal(data.subject, 'Chemistry'); assert.equal(data.unit, 14);
  assert.equal(data.chapters.length, 29); assert.equal(data.quiz.length, 52);
  assert.equal(timing.chapters.length, 29);
  assert.ok(timing.duration > 1000 && timing.duration < 29*90);
  assert.ok(fs.statSync('public/lectures/organic-principles/narration-marin.mp3').size > 1e6);
  for (const [i, chapter] of timing.chapters.entries()) {
    assert.ok(chapter.end > chapter.start);
    assert.equal(chapter.start, i ? timing.chapters[i-1].end : 0);
    const cues = timing.cues.filter(c => c.chapter === i);
    assert.ok(cues.length > 10);
    const words = text => text.toLowerCase().replace(/[^a-z0-9]/g, '');
    assert.equal(words(cues.map(c=>c.text).join(' ')), words(data.chapters[i].script));
    for (const [j,c] of cues.entries()) {
      assert.ok(c.start >= chapter.start && c.end <= chapter.end + .001);
      assert.ok(c.end > c.start);
      assert.ok(c.text.length <= 100);
      if(j) assert.ok(c.start >= cues[j-1].end - .02);
    }
  }
  assert.equal(timing.chapters.at(-1).end,timing.duration);
});
test('recorded worked results and quiz match the intended original practice', () => {
  assert.match(data.chapters[0].script, /five sigma and one pi/);
  assert.match(data.chapters[2].script, /negative one on each side/);
  assert.match(data.chapters[4].formula, /= 100/);
  assert.equal(data.quiz[7].options[data.quiz[7].answer], '100');
  assert.match(data.chapters[4].script, /not exhaustive/);
});
