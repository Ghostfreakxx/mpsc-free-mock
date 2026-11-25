import assert from "node:assert/strict";
import test from "node:test";
import { searchLessons } from "../app/study-room/lesson-search.ts";
import { atomCounts, meridianArc, peaCross, quadraticRoots, quadraticValue, simpleMajority } from "../app/laboratory/lab-models.ts";
import { resistiveCircuit } from "../app/laboratory/circuit.ts";
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

test("ideal DC networks preserve the expected voltage and current sums", () => {
  const series = resistiveCircuit(12, 4, 8, false);
  assert.equal(series.resistance, 12);
  assert.equal(series.firstVoltage + series.secondVoltage, 12);
  const parallel = resistiveCircuit(12, 6, 6, true);
  assert.equal(parallel.resistance, 3);
  assert.equal(parallel.firstCurrent + parallel.secondCurrent, parallel.current);
});

test("lab models distinguish isotopes, Mendelian ratios, and real roots", () => {
  assert.deepEqual(atomCounts(6, 7, 5), { massNumber: 13, charge: 1 });
  assert.deepEqual(peaCross("Yy", "yy"), ["Yy", "Yy", "yy", "yy"]);
  assert.deepEqual(peaCross("YY", "yy"), ["Yy", "Yy", "Yy", "Yy"]);
  assert.deepEqual(quadraticRoots(1, 2, -4), [0, 4]);
  assert.deepEqual(quadraticRoots(1, 2, 1), []);
  assert.deepEqual(quadraticRoots(-1, -2, 0), [-2]);
  assert.equal(quadraticValue(2, -1, 4, -1), 4);
});

test("majorities and meridian distances use the correct denominators", () => {
  assert.deepEqual(simpleMajority(40, 39), { cast: 79, threshold: 40, passed: true });
  assert.equal(simpleMajority(3, 3).passed, false);
  assert.equal(simpleMajority(0, 0).threshold, null);
  assert.equal(meridianArc(20, -30).degrees, 50);
  assert.ok(Math.abs(meridianArc(0, 90).kilometres - 10007.54) < 0.01);
});
