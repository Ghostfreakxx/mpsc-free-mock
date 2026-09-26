import assert from "node:assert/strict";
import test from "node:test";
import {
  advanceRotation,
  createRotation,
  recordRotationAnswer,
  restoreRotation,
  rotationSummary,
  serializeRotation,
} from "../app/lib/question-rotation.ts";

const fixedRandom = () => 0.5;

test("uses each question once before starting a new round", () => {
  const ids = ["a", "b", "c", "d"];
  let state = createRotation(ids, fixedRandom);
  const seen = [state.activeId];

  for (let i = 1; i < ids.length; i += 1) {
    state = advanceRotation(state, ids, fixedRandom);
    seen.push(state.activeId);
  }

  assert.equal(new Set(seen).size, ids.length);
  state = advanceRotation(state, ids, fixedRandom);
  assert.equal(state.round, 2);
  assert.notEqual(state.activeId, seen[0]);
});

test("returns incorrect answers as spaced reviews and backs off on another miss", () => {
  const ids = ["a", "b", "c", "d", "e", "f"];
  let state = createRotation(ids, fixedRandom);
  const missed = state.activeId;
  state = recordRotationAnswer(state, missed, false);
  assert.equal(state.reviews[0].interval, 3);

  state = advanceRotation(state, ids, fixedRandom);
  assert.notEqual(state.activeId, missed);
  state = advanceRotation(state, ids, fixedRandom);
  assert.notEqual(state.activeId, missed);
  state = advanceRotation(state, ids, fixedRandom);
  assert.equal(state.activeId, missed);
  assert.equal(state.activeMode, "review");

  state = recordRotationAnswer(state, missed, false);
  assert.equal(state.reviews[0].interval, 6);
});

test("removes a review after a correct retry and restores saved progress", () => {
  const ids = ["a", "b", "c", "d", "e"];
  let state = createRotation(ids, fixedRandom);
  const missed = state.activeId;
  state = recordRotationAnswer(state, missed, false);
  state = advanceRotation(state, ids, fixedRandom);
  state = advanceRotation(state, ids, fixedRandom);
  state = advanceRotation(state, ids, fixedRandom);
  state = recordRotationAnswer(state, missed, true);

  const restored = restoreRotation(serializeRotation(state), ids, fixedRandom);
  assert.deepEqual(restored, state);
  assert.equal(restored.reviews.length, 0);
  assert.equal(rotationSummary(restored, ids.length).isReview, true);
});

test("rebuilds invalid or changed-pool state instead of getting stuck", () => {
  const ids = ["a", "b", "c"];
  const rebuilt = restoreRotation('{"version":1,"order":["outside"]}', ids, fixedRandom);
  assert.equal(rebuilt.round, 1);
  assert.equal(new Set(rebuilt.order).size, ids.length);
  assert.equal(restoreRotation(null, [], fixedRandom), null);
});
