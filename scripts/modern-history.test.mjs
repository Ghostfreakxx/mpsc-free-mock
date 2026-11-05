import test from 'node:test';
import assert from 'node:assert/strict';
import { historyChapters, plannedChapters, findChapter } from '../app/data/modern-history/index.ts';
import { renderChapter } from '../app/lib/render-chapter.ts';

test('every chapter is complete and well formed', () => {
  const slugs = new Set();
  for (const chapter of historyChapters) {
    assert.match(chapter.slug, /^[a-z0-9-]+$/, 'slug is URL-safe');
    assert.ok(!slugs.has(chapter.slug), `duplicate slug ${chapter.slug}`);
    slugs.add(chapter.slug);
    assert.ok(chapter.number >= 1 && chapter.number <= plannedChapters.length, 'chapter number is in the course plan');
    assert.equal(findChapter(chapter.slug), chapter);
    assert.ok(chapter.sections.length >= 3, 'has sections');
    assert.equal(chapter.mcqs.length, 15, 'has 15 MCQs');
    assert.ok(chapter.shortAnswers.length >= 3, 'has short answers');
    assert.ok(chapter.mains.outline.length >= 3, 'has a Mains outline');

    const sectionIds = new Set();
    for (const section of chapter.sections) {
      assert.match(section.id, /^[a-z0-9-]+$/);
      assert.ok(!sectionIds.has(section.id), `duplicate section id ${section.id}`);
      sectionIds.add(section.id);
      assert.ok(section.check.length >= 2, `${section.id} has check-yourself questions`);
      for (const block of section.blocks) {
        if (block.type === 'table') for (const row of block.rows) assert.equal(row.length, block.head.length, `${section.id}: table row matches its header`);
      }
    }
    for (const [index, mcq] of chapter.mcqs.entries()) {
      assert.equal(mcq.options.length, 4, `MCQ ${index + 1} has four options`);
      assert.ok([0, 1, 2, 3].includes(mcq.answer), `MCQ ${index + 1} answer index`);
      assert.equal(new Set(mcq.options).size, 4, `MCQ ${index + 1} options are distinct`);
      assert.ok(mcq.why.length > 20, `MCQ ${index + 1} explains its answer`);
    }
    // Answers should not all sit in one position.
    assert.ok(new Set(chapter.mcqs.map(mcq => mcq.answer)).size >= 3, 'answer positions vary');
  }
});

test('**bold** markers are balanced so no stray asterisks reach students', () => {
  const texts = [];
  const collect = value => { if (typeof value === 'string') texts.push(value); else if (value && typeof value === 'object') Object.values(value).forEach(collect); };
  historyChapters.forEach(collect);
  for (const text of texts) assert.equal((text.match(/\*\*/g) ?? []).length % 2, 0, `unbalanced ** in: ${text.slice(0, 60)}`);
});

test('the offline download escapes text and contains the whole chapter', () => {
  const chapter = historyChapters[0];
  const html = renderChapter(chapter);
  assert.match(html, /^<!doctype html>/);
  assert.ok(!html.includes('**'), 'bold markers are converted');
  assert.ok(!/<script/i.test(html), 'no scripts in the download');
  for (const section of chapter.sections) assert.ok(html.includes(section.title.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')), `includes ${section.title}`);

  const hostile = { ...chapter, title: '<img src=x onerror=alert(1)>', sections: [{ id: 'x', title: 'T', blocks: [{ type: 'p', text: '**<b>** & "q"' }], check: [] }] };
  const escaped = renderChapter(hostile);
  assert.ok(!escaped.includes('<img'), 'title is escaped');
  assert.ok(escaped.includes('<strong>&lt;b&gt;</strong> &amp; &quot;q&quot;'), 'bold text is escaped inside <strong>');
});
