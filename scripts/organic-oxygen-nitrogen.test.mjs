import test from 'node:test';
import assert from 'node:assert/strict';
import { oxygenNitrogenLessons as lessons } from '../app/jee/classes/organic-oxygen-nitrogen-study.ts';

test('oxygen and nitrogen foundations map to official units with explicit written scope', () => {
  assert.deepEqual(lessons.map(l => l.unit), [17, 18]);
  for (const l of lessons) {
    assert.equal(l.sections.length, 8);
    assert.equal(l.examples.length, 3);
    assert.equal(l.quiz.length, 6);
    assert.match(l.remaining, /not a Marin recording or complete unit coverage/);
  }
});
test('oxygen practice distinguishes oxidation, iodoform and initial aldol addition', () => {
  assert.match(lessons[0].examples[0].answer, /Ethanal; propanone; ethanoic acid/);
  assert.match(lessons[0].examples[1].answer, /propan-1-ol is normally negative/);
  assert.equal(lessons[0].quiz[3].options[lessons[0].quiz[3].answer], 'Propan-2-ol');
  assert.equal(lessons[0].quiz[5].options[lessons[0].quiz[5].answer], '3-hydroxybutanal');
  assert.equal(2 * 2, 4);
});
test('amine class and preparation examples distinguish nitrogen substitution from carbon branching', () => {
  assert.equal(lessons[1].quiz[0].options[lessons[1].quiz[0].answer], 'Primary amine');
  assert.equal(lessons[1].quiz[1].options[lessons[1].quiz[1].answer], 'Ethanamine');
  assert.equal(lessons[1].quiz[2].options[lessons[1].quiz[2].answer], 'CH3NH2');
  assert.match(lessons[1].examples[1].answer, /two-carbon.*one-carbon/);
});
test('nitrogen notes preserve solvent and diazonium safety qualifications', () => {
  assert.match(lessons[1].sections[2].paragraphs.join(' '), /unreliable/);
  assert.match(lessons[1].sections[5].paragraphs.join(' '), /not be described as indefinitely stable or safe to isolate dry/);
  assert.equal(lessons[1].quiz[5].options[lessons[1].quiz[5].answer], '-N=N- between aromatic groups');
});
