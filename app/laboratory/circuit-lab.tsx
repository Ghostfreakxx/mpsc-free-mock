"use client";

import { useState } from "react";
import Link from "next/link";
import { resistiveCircuit } from "./circuit";
import styles from "../study-room/study-room.module.css";

const controls = [
  { key: "voltage", label: "Supply voltage", min: 1, max: 24, unit: "V" },
  { key: "first", label: "Resistance 1", min: 2, max: 30, unit: "Ω" },
  { key: "second", label: "Resistance 2", min: 2, max: 30, unit: "Ω" },
] as const;
const initial = { voltage: 12, first: 6, second: 6 };
const firstResistor = "M0 0 h12 l5 -8 10 16 10 -16 10 16 10 -16 5 8 h12";
const display = (value: number) => value.toFixed(2);

export default function CircuitLab() {
  const [values, setValues] = useState(initial);
  const [parallel, setParallel] = useState(false);
  const [answer, setAnswer] = useState("");
  const result = resistiveCircuit(values.voltage, values.first, values.second, parallel);

  return (
    <article className={styles.reviewedBoard}>
      <h2>Resistors in series and parallel</h2>
      <p>Compare equivalent resistance, branch currents, and voltage drops for two ideal resistors connected to a DC supply.</p>
      <div className={styles.lessonChooser}>
        <label htmlFor="circuit-connection">Connection</label>
        <select id="circuit-connection" value={parallel ? "parallel" : "series"} onChange={event => setParallel(event.target.value === "parallel")}>
          <option value="series">Series</option><option value="parallel">Parallel</option>
        </select>
      </div>
      <div className={styles.labControls}>
        {controls.map(({ key, label, min, max, unit }) => <label key={key} className={styles.labSlider}>
          {label} <output aria-hidden="true">{values[key]} {unit}</output>
          <input type="range" min={min} max={max} value={values[key]} aria-label={label}
            aria-valuetext={`${values[key]} ${unit}`}
            onChange={event => setValues(current => ({ ...current, [key]: Number(event.target.value) }))} />
        </label>)}
      </div>
      <svg className={styles.labDiagram} viewBox="0 0 360 158" role="img"
        aria-label={parallel ? "Two resistors on separate branches across the supply" : "Two resistors on one loop with the supply"}>
        <g className={styles.labAxis}>
          <path d="M25 64 V30 H80 M25 89 V130 H326 V30" />
          <path d="M12 64H38 M17 89H33" />
          <path d={firstResistor} transform="translate(80 30)" />
          {parallel ? <>
            <path d="M154 30H326 M55 30V87H80 M154 87H300V30" />
            <path d={firstResistor} transform="translate(80 87)" />
          </> : <>
            <path d="M154 30H190 M264 30H326" />
            <path d={firstResistor} transform="translate(190 30)" />
          </>}
        </g>
        <text x="83" y="57">R₁</text>
        <text x={parallel ? 83 : 193} y={parallel ? 112 : 57}>R₂</text>
      </svg>
      <p>Equivalent resistance {display(result.resistance)} Ω. Supply current {display(result.current)} A.</p>
      <p>R₁ has {display(result.firstCurrent)} A and {display(result.firstVoltage)} V. R₂ has {display(result.secondCurrent)} A and {display(result.secondVoltage)} V.</p>
      <p>{parallel ? "Both branches have the supply voltage. Their currents add to the supply current." : "Both resistors carry the same current. Their voltage drops add to the supply voltage."}</p>
      <button type="button" className={styles.reviewCheck} onClick={() => { setValues(initial); setParallel(false); setAnswer(""); }}>
        Reset circuit
      </button>
      <fieldset className={styles.reviewQuiz}>
        <legend>What is the equivalent resistance of two 6 Ω resistors in parallel?</legend>
        {["3 Ω", "6 Ω", "12 Ω"].map(choice => <label key={choice}>
          <input type="radio" name="circuit-answer" checked={answer === choice} onChange={() => setAnswer(choice)} />{choice}
        </label>)}
      </fieldset>
      {answer && <p role="status">{answer === "3 Ω" ? "Correct. " : ""}The two conductances add, giving 1/6 + 1/6 = 1/3 siemens, or 3 Ω.</p>}
      <Link href="/jee/classes/resistor-networks" prefetch={false}>Study resistor networks and practise</Link>
    </article>
  );
}
