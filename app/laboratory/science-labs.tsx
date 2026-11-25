"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import styles from "../study-room/study-room.module.css";
import { atomCounts, meridianArc, peaCross, quadraticRoots, quadraticValue, simpleMajority, type PeaGenotype } from "./lab-models";

function Experiment({ title, children, onReset, lesson, question, choices, answer, feedback }: {
  title: string; children: ReactNode; onReset: () => void; lesson: string; question: string;
  choices: string[]; answer: number; feedback: string;
}) {
  const [picked, setPicked] = useState<number>();
  return <article className={styles.reviewedBoard}>
    <h2>{title}</h2>
    {children}
    <button type="button" className={styles.reviewCheck} onClick={() => { onReset(); setPicked(undefined); }}>Reset experiment</button>
    <fieldset className={styles.reviewQuiz}>
      <legend>{question}</legend>
      {choices.map((choice, index) => <label key={choice}>
        <input type="radio" name={title} checked={picked === index} onChange={() => setPicked(index)} />{choice}
      </label>)}
    </fieldset>
    {picked !== undefined && <p role="status">{picked === answer ? "Correct. " : "Review the result. "}{feedback}</p>}
    <Link href={lesson} prefetch={false}>Open related study material</Link>
  </article>;
}

function Slider({ label, value, min, max, step = 1, change }: {
  label: string; value: number; min: number; max: number; step?: number; change: (value: number) => void;
}) {
  return <label className={styles.labSlider}>
    {label} <output aria-hidden="true">{value}</output>
    <input type="range" aria-label={label} aria-valuetext={String(value)} value={value}
      min={min} max={max} step={step} onChange={event => change(Number(event.target.value))} />
  </label>;
}

const atoms = { protons: 6, neutrons: 6, electrons: 6 };
const elements = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar"];

export function AtomicLab() {
  const [state, setState] = useState(atoms);
  const { protons, neutrons, electrons } = state;
  const { massNumber, charge } = atomCounts(protons, neutrons, electrons);
  return <Experiment title="Chemistry · Isotopes and ions" onReset={() => setState(atoms)}
    lesson="/jee/classes/atomic-structure" question="Which change makes carbon-12 into carbon-13?"
    choices={["Add a proton", "Add a neutron", "Remove an electron"]} answer={1}
    feedback="Carbon always has six protons. Carbon-13 has seven neutrons, one more than carbon-12.">
    <p>Change particle counts to explore what determines element, mass number, and net charge. The model counts particles and does not predict whether a combination exists or is stable.</p>
    <div className={styles.labControls}>
      <Slider label="Protons" value={protons} min={1} max={18} change={value => setState({ ...state, protons: value })} />
      <Slider label="Neutrons" value={neutrons} min={0} max={24} change={value => setState({ ...state, neutrons: value })} />
      <Slider label="Electrons" value={electrons} min={0} max={20} change={value => setState({ ...state, electrons: value })} />
    </div>
    <p><strong>{elements[protons - 1]}-{massNumber}</strong> · Atomic number {protons} · Net charge {charge > 0 ? "+" : ""}{charge} in elementary-charge units.</p>
    <p>Mass number counts protons plus neutrons. Net charge counts protons minus electrons.</p>
  </Experiment>;
}

const options: PeaGenotype[] = ["YY", "Yy", "yy"];
export function InheritanceLab() {
  const [first, setFirst] = useState<PeaGenotype>("Yy");
  const [second, setSecond] = useState<PeaGenotype>("Yy");
  const outcomes = peaCross(first, second);
  const yellow = outcomes.filter(item => item !== "yy").length;
  return <Experiment title="Biology · Pea-seed inheritance" onReset={() => { setFirst("Yy"); setSecond("Yy"); }}
    lesson="/neet/classes/genetics-evolution" question="For Yy × Yy, what fraction of predicted seeds are green?"
    choices={["1/4", "1/2", "3/4"]} answer={0} feedback="One of the four equally likely combinations is yy.">
    <p>Change the parent genotypes to predict seed colour for one gene under complete dominance. Y represents yellow and y represents green. These are probabilities for each offspring.</p>
    <div className={styles.lessonChooser}>
      <label htmlFor="pea-parent-a">First pea plant</label>
      <select id="pea-parent-a" value={first} onChange={event => setFirst(event.target.value as PeaGenotype)}>
        {options.map(value => <option key={value}>{value}</option>)}
      </select>
      <label htmlFor="pea-parent-b">Second pea plant</label>
      <select id="pea-parent-b" value={second} onChange={event => setSecond(event.target.value as PeaGenotype)}>
        {options.map(value => <option key={value}>{value}</option>)}
      </select>
    </div>
    <table>
      <caption>Four equally likely allele combinations</caption>
      <thead><tr><th scope="col">First × second</th>{Array.from(second, (allele, i) => <th key={i} scope="col">{allele}</th>)}</tr></thead>
      <tbody>{Array.from(first, (allele, i) => <tr key={i}><th scope="row">{allele}</th><td>{outcomes[i * 2]}</td><td>{outcomes[i * 2 + 1]}</td></tr>)}</tbody>
    </table>
    <p>{yellow * 25}% yellow · {(4 - yellow) * 25}% green.</p>
  </Experiment>;
}

const initial = { scale: 1, horizontal: 0, vertical: -1 };
const samples = Array.from({ length: 81 }, (_, index) => (index - 40) / 8);
export function QuadraticLab() {
  const [parameters, setParameters] = useState(initial);
  const [opensUp, setOpensUp] = useState(true);
  const scale = opensUp ? parameters.scale : -parameters.scale;
  const { horizontal, vertical } = parameters;
  const roots = quadraticRoots(scale, horizontal, vertical);
  const points = samples.map(x => `${180 + x * 32},${100 - quadraticValue(scale, horizontal, vertical, x) * 16}`).join(" ");
  return <Experiment title="Mathematics · Quadratic graphs" onReset={() => { setParameters(initial); setOpensUp(true); }}
    lesson="/jee/classes/quadratic-equations" question="When is the vertex itself an x-intercept?"
    choices={["When h = 0", "When k = 0", "Whenever a is negative"]} answer={1}
    feedback="The vertex is (h, k). Points on the horizontal axis have y = 0.">
    <p>Set the vertex and curvature in y = a(x − h)² + k. Compare the plotted curve with the real roots that solve y = 0.</p>
    <label><input type="checkbox" checked={opensUp} onChange={event => setOpensUp(event.target.checked)} /> Opens upward</label>
    <div className={styles.labControls}>
      <Slider label="Magnitude of a" value={parameters.scale} min={0.5} max={3} step={0.5} change={value => setParameters({ ...parameters, scale: value })} />
      <Slider label="Horizontal shift h" value={horizontal} min={-3} max={3} change={value => setParameters({ ...parameters, horizontal: value })} />
      <Slider label="Vertical shift k" value={vertical} min={-4} max={4} change={value => setParameters({ ...parameters, vertical: value })} />
    </div>
    <svg viewBox="0 0 360 200" className={styles.labDiagram} role="img" aria-label={`Parabola with vertex at (${horizontal}, ${vertical}).`}>
      <path d="M20 100 H340 M180 12 V187" className={styles.labAxis} />
      <polyline points={points} className={styles.labStroke} />
      <circle cx={180 + horizontal * 32} cy={100 - vertical * 16} r="5" className={styles.labDot} />
      <text x="340" y="119">x</text><text x="190" y="18">y</text>
    </svg>
    <p>Vertex ({horizontal}, {vertical}) · {roots.length ? `Real roots: ${roots.map(root => root.toFixed(2)).join(", ")}` : "No real roots"}.</p>
  </Experiment>;
}

export function CivicLab() {
  const original = { yes: 46, no: 42 };
  const [votes, setVotes] = useState(original);
  const result = simpleMajority(votes.yes, votes.no);
  return <Experiment title="Political Science · Simple-majority votes" onReset={() => setVotes(original)}
    lesson="/college-notes" question="In this model, 40 vote yes, 39 no, and 21 abstain. What happens?"
    choices={["The motion passes", "The motion fails", "The result is tied"]} answer={0}
    feedback="Only 79 votes are cast for or against. A simple majority of 79 needs 40 yes votes.">
    <p>Use an illustrative 100-seat assembly to distinguish a majority of votes cast from a majority of all seats. This model uses yes and no ballots and excludes abstentions. It leaves out quorum, casting votes, and special-majority rules.</p>
    <div className={styles.labControls}>
      <Slider label="Yes votes" value={votes.yes} min={0} max={100 - votes.no} change={yes => setVotes({ ...votes, yes })} />
      <Slider label="No votes" value={votes.no} min={0} max={100 - votes.yes} change={no => setVotes({ ...votes, no })} />
    </div>
    <p>{result.cast} votes cast · {100 - result.cast} abstentions.</p>
    <p>{result.threshold === null ? "No votes cast." : `Threshold: ${result.threshold} yes votes. The motion ${result.passed ? "passes" : "does not pass"}.`}</p>
  </Experiment>;
}

const positions = { first: 23, second: -23 };
export function GeographyLab() {
  const [latitude, setLatitude] = useState(positions);
  const distance = meridianArc(latitude.first, latitude.second);
  const position = (value: number) => {
    const radians = value * Math.PI / 180;
    return { x: 180 - 90 * Math.cos(radians), y: 100 - 90 * Math.sin(radians) };
  };
  const first = position(Math.min(latitude.first, latitude.second));
  const second = position(Math.max(latitude.first, latitude.second));
  const label = (value: number) => value === 0 ? "0°" : `${Math.abs(value)}° ${value < 0 ? "S" : "N"}`;
  return <Experiment title="Geography · Distance along a meridian" onReset={() => setLatitude(positions)}
    lesson="/study-room#reviewed-classroom" question="What is the latitude difference from 20° N to 30° S?"
    choices={["10°", "30°", "50°"]} answer={2}
    feedback="The two points are on opposite sides of the equator, so 20° and 30° add.">
    <p>Move two locations along the same meridian. Positive latitudes are north and negative latitudes are south. Distances assume a spherical Earth with a radius of 6,371 km.</p>
    <div className={styles.labControls}>
      <Slider label="First latitude" value={latitude.first} min={-90} max={90} change={first => setLatitude({ ...latitude, first })} />
      <Slider label="Second latitude" value={latitude.second} min={-90} max={90} change={second => setLatitude({ ...latitude, second })} />
    </div>
    <svg viewBox="0 0 360 200" className={styles.labDiagram} role="img" aria-label={`Meridian cross-section from ${label(latitude.first)} to ${label(latitude.second)}`}>
      <circle cx="180" cy="100" r="90" className={styles.labAxis} />
      <path d="M90 100 H270 M180 10 V190" className={styles.labAxis} />
      <path d={`M${first.x} ${first.y} A90 90 0 0 1 ${second.x} ${second.y}`} className={styles.labStroke} />
      <circle cx={first.x} cy={first.y} r="5" className={styles.labDot} />
      <circle cx={second.x} cy={second.y} r="5" className={styles.labDot} />
      <text x="278" y="104">Equator</text>
    </svg>
    <p>{label(latitude.first)} to {label(latitude.second)} · {distance.degrees}° apart · approximately {Math.round(distance.kilometres).toLocaleString("en-IN")} km along the surface.</p>
    <p>The highlighted arc follows the shared meridian on Earth&apos;s surface.</p>
  </Experiment>;
}