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
// Answer correctly (unless already answered) and move on, as a student normally would.
const answerAndAdvance = (state, ids) =>
  advanceRotation(state.answered ? state : recordRotationAnswer(state, state.activeId, true), ids, fixedRandom);

test("first answer stays locked after repeat events and reload until next question", () => {
  const ids = ["a", "b"];
  let state = createRotation(ids, fixedRandom);
  state = recordRotationAnswer(state, state.activeId, false, "wrong option");
  const repeated = recordRotationAnswer(state, state.activeId, true, "right option");
  assert.deepEqual(repeated, state);
  const restored = restoreRotation(serializeRotation(state), ids, fixedRandom);
  assert.equal(restored.selectedAnswer, "wrong option");
  assert.equal(restored.reviews.length, 1);
  assert.deepEqual(recordRotationAnswer(restored, restored.activeId, true, "right option"), restored);
  const next = advanceRotation(restored, ids, fixedRandom);
  assert.equal(next.answered, false);
  assert.equal(next.selectedAnswer, "");
});

test("uses each question once before starting a new round", () => {
  const ids = ["a", "b", "c", "d"];
  let state = createRotation(ids, fixedRandom);
  const seen = [state.activeId];

  for (let i = 1; i < ids.length; i += 1) {
    state = answerAndAdvance(state, ids);
    seen.push(state.activeId);
  }

  assert.equal(new Set(seen).size, ids.length);
  state = answerAndAdvance(state, ids);
  assert.equal(state.round, 2);
  assert.notEqual(state.activeId, seen[0]);
});

test("returns incorrect answers as spaced reviews and backs off on another miss", () => {
  const ids = ["a", "b", "c", "d", "e", "f"];
  let state = createRotation(ids, fixedRandom);
  const missed = state.activeId;
  state = recordRotationAnswer(state, missed, false);
  assert.equal(state.reviews[0].interval, 3);

  state = answerAndAdvance(state, ids);
  assert.notEqual(state.activeId, missed);
  state = answerAndAdvance(state, ids);
  assert.notEqual(state.activeId, missed);
  state = answerAndAdvance(state, ids);
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
  state = answerAndAdvance(state, ids);
  state = answerAndAdvance(state, ids);
  state = answerAndAdvance(state, ids);
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

test("keeps place, seen questions and reviews when questions are added", () => {
  const ids = ["a", "b", "c", "d", "e"];
  let state = createRotation(ids, fixedRandom);
  const missed = state.activeId;
  state = recordRotationAnswer(state, missed, false, "wrong");
  state = advanceRotation(state, ids, fixedRandom);
  const active = state.activeId;
  const seen = state.order.slice(0, state.cursor);

  const grown = [...ids, "f", "g"];
  const restored = restoreRotation(serializeRotation(state), grown, fixedRandom);
  assert.equal(restored.activeId, active);
  assert.equal(restored.round, state.round);
  assert.deepEqual(restored.order.slice(0, restored.cursor), seen);
  assert.deepEqual(new Set(restored.order), new Set(grown));
  assert.deepEqual(restored.reviews.map(review => review.id), [missed]);
  assert.equal(rotationSummary(restored, grown.length).freshRemaining, grown.length - seen.length + 1);
});

test("moves to the next question and drops reviews when questions are removed", () => {
  const ids = ["a", "b", "c", "d"];
  let state = createRotation(ids, fixedRandom);
  state = recordRotationAnswer(state, state.activeId, false, "wrong");
  const removed = state.activeId;
  const remaining = ids.filter(id => id !== removed);

  const restored = restoreRotation(serializeRotation(state), remaining, fixedRandom);
  assert.ok(remaining.includes(restored.activeId));
  assert.equal(restored.answered, false);
  assert.equal(restored.reviews.length, 0);
  assert.deepEqual(new Set(restored.order), new Set(remaining));

  // Last question of the round removed: a new round starts.
  const last = { ...state, cursor: ids.length, activeId: state.order.at(-1) };
  const nextRound = restoreRotation(serializeRotation(last), ids.filter(id => id !== last.activeId), fixedRandom);
  assert.equal(nextRound.round, state.round + 1);
  assert.notEqual(nextRound.activeId, last.activeId);
});

test("a skipped question returns later as a review without counting as a miss", () => {
  const ids = ["a", "b", "c", "d", "e", "f"];
  let state = createRotation(ids, fixedRandom);
  const skipped = state.activeId;
  state = advanceRotation(state, ids, fixedRandom);
  assert.deepEqual(state.reviews.map(review => review.id), [skipped]);
  assert.equal(state.reviews[0].attempts, 0);
  state = answerAndAdvance(state, ids);
  assert.notEqual(state.activeId, skipped);
  state = answerAndAdvance(state, ids);
  assert.notEqual(state.activeId, skipped);
  state = answerAndAdvance(state, ids);
  assert.equal(state.activeId, skipped);
  assert.equal(state.activeMode, "review");
  // Skipping the review again pushes it back instead of looping on it.
  state = advanceRotation(state, ids, fixedRandom);
  assert.notEqual(state.activeId, skipped);
  assert.equal(state.reviews.find(review => review.id === skipped).interval, 3);
});
