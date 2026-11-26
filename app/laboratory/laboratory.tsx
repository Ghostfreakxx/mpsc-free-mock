"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { pendulum, projectile } from "./motion";
import styles from "../study-room/study-room.module.css";

const experiments = {
  projectile: {
    title: "Projectile motion",
    objective: "Compare flight time, range, and peak height when you change the launch conditions.",
    assumption: "The projectile starts and lands at the same height. Gravity is constant and air resistance is ignored.",
    classUrl: "/jee/classes/kinematics-applications",
    quiz: "For equal launch and landing heights, which angle gives the longest horizontal range?",
    choices: ["30°", "45°", "60°"], answer: 1,
    explanation: "At fixed speed, the range is v² sin(2θ) / g. The sine reaches one when θ is 45°.",
  },
  pendulum: {
    title: "Simple pendulum",
    objective: "Investigate how the period changes with length and gravitational acceleration.",
    assumption: "This small-angle model treats the bob as a point mass on a light string and ignores friction.",
    classUrl: "/jee/classes/oscillations",
    quiz: "What happens to the period when the string length is multiplied by four?",
    choices: ["It halves.", "It doubles.", "It quadruples."], answer: 1,
    explanation: "The period is proportional to the square root of the string length, so it doubles.",
  },
} as const;

const defaults = { speed: 18, projectileAngle: 45, pendulumAngle: 10, length: 1, gravity: 9.8 };
const ticks = Array.from({ length: 41 }, (_, index) => index / 40);
type Controls = typeof defaults;

export default function Laboratory() {
  const [id, setId] = useState<keyof typeof experiments>("projectile");
  const [controls, setControls] = useState(defaults);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [answer, setAnswer] = useState<number>();
  const experiment = experiments[id];
  const flight = projectile(controls.speed, controls.projectileAngle, controls.gravity);
  const swing = pendulum(controls.length, controls.pendulumAngle, controls.gravity);
  const isFlight = id === "projectile";
  const duration = isFlight ? flight.duration : swing.period;
  const time = Math.min(elapsed, duration);
  const moving = running && time < duration && !reducedMotion;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    function update() { setReducedMotion(query.matches); }
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!moving) return;
    let frame: number;
    let previous: number | undefined;
    function update(now: number) {
      if (previous !== undefined && !document.hidden) {
        const step = Math.min((now - previous) / 1000, 0.05);
        setElapsed(value => Math.min(value + step, duration));
      }
      previous = now;
      frame = requestAnimationFrame(update);
    }
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [moving, duration]);

  function rewind() {
    setRunning(false);
    setElapsed(0);
  }

  function slider(key: keyof Controls, label: string, min: number, max: number, step: number, unit: string) {
    return <label className={styles.labSlider}>
      {label} <output aria-hidden="true">{controls[key]} {unit}</output>
      <input aria-label={label} aria-valuetext={`${controls[key]} ${unit}`} type="range" min={min} max={max} step={step} value={controls[key]}
        onChange={event => { setControls({ ...controls, [key]: Number(event.target.value) }); rewind(); }} />
    </label>;
  }

  const scale = Math.min(500 / Math.max(flight.range, 1), 170 / Math.max(flight.apex, 1));
  const point = flight.position(time);
  const angle = swing.angle(time);
  const stringLength = 130 * Math.sqrt(controls.length / 2.5);
  const bob = { x: 280 + stringLength * Math.sin(angle), y: 44 + stringLength * Math.cos(angle) };

  return (
    <article className={styles.reviewedBoard}>
      <div className={styles.lessonChooser}>
        <label htmlFor="lab-experiment">Physics experiment</label>
        <select id="lab-experiment" value={id} onChange={event => {
          setId(event.target.value as keyof typeof experiments);
          setAnswer(undefined);
          rewind();
        }}>
          {Object.entries(experiments).map(([value, item]) => <option key={value} value={value}>{item.title}</option>)}
        </select>
      </div>
      <h2>{experiment.title}</h2>
      <p>{experiment.objective}</p>
      <p>{experiment.assumption}</p>
      <div className={styles.labControls}>
        {isFlight ? <>
          {slider("speed", "Launch speed", 5, 35, 1, "m/s")}
          {slider("projectileAngle", "Launch angle", 10, 80, 1, "°")}
        </> : <>
          {slider("length", "String length", 0.25, 2.5, 0.05, "m")}
          {slider("pendulumAngle", "Release angle", 3, 15, 1, "°")}
        </>}
        {slider("gravity", "Gravitational acceleration", 1.6, 20, 0.1, "m/s²")}
      </div>
      <svg viewBox="0 0 560 245" className={styles.labDiagram} role="img"
        aria-label={isFlight ? "Height versus horizontal distance, with the current projectile position" : "Pendulum pivot, string, and bob at the selected time"}>
        {isFlight ? <>
          <path d="M30 28 V212 H530" className={styles.labAxis} />
          <polyline points={ticks.map(tick => {
            const position = flight.position(tick * duration);
            return `${30 + position.x * scale},${212 - position.y * scale}`;
          }).join(" ")} className={styles.labStroke} />
          <circle cx={30 + point.x * scale} cy={212 - point.y * scale} r="7" className={styles.labDot} />
          <text x="34" y="26">Height (m)</text><text x="381" y="235">Horizontal distance (m)</text>
        </> : <>
          <path d="M240 44 H320 M280 44 V214" className={styles.labAxis} />
          <line x1="280" y1="44" x2={bob.x} y2={bob.y} className={styles.labStroke} />
          <circle cx={bob.x} cy={bob.y} r="12" className={styles.labDot} />
        </>}
      </svg>
      <p>{isFlight
        ? `Range: ${flight.range.toFixed(2)} m · Peak height: ${flight.apex.toFixed(2)} m · Flight time: ${duration.toFixed(2)} s`
        : `Period: ${duration.toFixed(2)} s · Current angular displacement: ${(angle * 180 / Math.PI).toFixed(1)}°`}</p>
      <label className={styles.labSlider}>
        Experiment time <output aria-hidden="true">{time.toFixed(2)} s</output>
        <input aria-label="Experiment time" aria-valuetext={`${time.toFixed(2)} seconds`} type="range" min="0" max={duration} step="any" value={time}
          onChange={event => { setRunning(false); setElapsed(Number(event.target.value)); }} />
      </label>
      <div className={styles.roomActions}>
        {!reducedMotion && <button type="button" className={styles.reviewCheck} onClick={() => {
          if (time >= duration) setElapsed(0);
          setRunning(!moving);
        }}>{moving ? "Pause experiment" : "Play experiment"}</button>}
        <button type="button" className={styles.reviewCheck} onClick={() => { setControls(defaults); setAnswer(undefined); rewind(); }}>
          Reset experiment
        </button>
      </div>
      <p>{isFlight
        ? "Gravity reduces vertical speed on the way up and increases it on the way down. Horizontal speed stays constant."
        : "A longer string increases the period. A stronger gravitational acceleration shortens it."}</p>
      <fieldset className={styles.reviewQuiz}>
        <legend>{experiment.quiz}</legend>
        {experiment.choices.map((choice, index) => <label key={choice}>
          <input name="experiment-answer" type="radio" checked={answer === index} onChange={() => setAnswer(index)} />
          {choice}
        </label>)}
      </fieldset>
      {answer !== undefined && <p role="status">{answer === experiment.answer ? "Correct. " : "Try again. "}{experiment.explanation}</p>}
      <Link href={experiment.classUrl} prefetch={false}>Open the related recorded class and practice</Link>
    </article>
  );
}
