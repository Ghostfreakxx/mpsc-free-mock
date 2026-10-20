import test from 'node:test';
import assert from 'node:assert/strict';
import { groupRecordings } from '../app/jee/classes/recording-groups.ts';

test('groups recordings without changing objects or duplicating shared recordings', () => {
  const a = { id: 'a', timings: { duration: 90 } };
  const b = { id: 'b', timings: { duration: 120 } };
  const groups = groupRecordings(['First', 'Second'], [{ recordings: ['a'] }, { recordings: ['a', 'b'] }], [a, b]);
  assert.equal(groups.length, 2);
  assert.equal(groups[0].lessons[0], a);
  assert.deepEqual(groups[1].lessons, [b]);
  assert.equal(groups[1].duration, 120);
});

test('unmapped recordings remain accessible and empty units are omitted', () => {
  const a = { id: 'new', timings: { duration: 60 } };
  assert.deepEqual(groupRecordings(['Empty'], [{ recordings: [] }], [a]), [{ title: 'Additional classes', lessons: [a], duration: 60 }]);
  assert.deepEqual(groupRecordings([], [], []), []);
});
