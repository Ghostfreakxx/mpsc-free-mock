import assert from "node:assert/strict";
import test from "node:test";
import { searchLessons } from "../app/study-room/lesson-search.ts";
import { pendulum, projectile } from "../app/laboratory/motion.ts";

const lessons = [
  { title: "Latitude and location", notes: ["The Equator is at 0 degrees latitude.", "The poles are at 90 degrees."] },
  { title: "Cell structures", notes: ["A cell membrane encloses the cell."] },
];

test("reviewed classroom finds synonyms and transposed letters", () => {
  for (const input of ["What are parallels?", "Explain lattitude", "What is latiutde?"]) {
    const result = searchLessons(lessons, input, lesson => lesson.notes);
    assert.equal(result?.lesson, lessons[0]);
    assert.deepEqual(result?.points, [lessons[0].notes[0]]);
  }
  assert.equal(searchLessons(lessons.slice(1), "latitude", lesson => lesson.notes), undefined);
  assert.equal(searchLessons(lessons, "quantum chromodynamics", lesson => lesson.notes), undefined);
  assert.equal(searchLessons(lessons, "constructor", lesson => lesson.notes), undefined);
});

test("ideal projectile reaches its apex halfway through flight and lands at its range", () => {
  const flight = projectile(20, 45, 10);
  assert.ok(Math.abs(flight.range - 40) < 1e-9);
  assert.ok(Math.abs(flight.position(flight.duration / 2).y - flight.apex) < 1e-9);
  assert.ok(Math.abs(flight.position(flight.duration).y) < 1e-9);
  assert.ok(Math.abs(flight.position(flight.duration).x - flight.range) < 1e-9);
});

test("small-angle pendulum has the correct period and returns to its release angle", () => {
  const short = pendulum(0.5, 10, 9.8);
  const long = pendulum(2, 10, 9.8);
  assert.ok(Math.abs(long.period / short.period - 2) < 1e-9);
  assert.ok(Math.abs(short.angle(short.period) - short.angle(0)) < 1e-9);
  assert.ok(Math.abs(short.angle(short.period / 4)) < 1e-9);
});
