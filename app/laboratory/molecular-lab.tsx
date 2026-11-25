"use client";

import { Component, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { molecules, type MoleculeKey } from "./molecules";
import styles from "../study-room/study-room.module.css";

const MolecularScene = dynamic(() => import("./molecular-scene"), { ssr: false, loading: () => <p role="status">Loading molecular model…</p> });

class ModelBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <p>The 3D view is unavailable. Use the atom list below.</p> : this.props.children; }
}

export default function MolecularLab() {
  const [molecule, setMolecule] = useState<MoleculeKey>("water");
  const [selected, setSelected] = useState(0);
  const [revision, setRevision] = useState(0);
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState<number>();
  const model = molecules[molecule];
  const names = [model.center, ...model.points.map((_, index) => `Hydrogen ${index + 1}`)];
  return <article id="molecular-geometry" className={styles.reviewedBoard}>
    <h2>Chemistry · Molecular geometry</h2>
    <p>Explore three simplified ball-and-stick models. Colours distinguish atoms. Sphere sizes and bond lengths are illustrative.</p>
    <div className={styles.lessonChooser}>
      <label htmlFor="molecular-choice">Molecule</label>
      <select id="molecular-choice" value={molecule} onChange={event => { setMolecule(event.target.value as MoleculeKey); setSelected(0); }}>
        {Object.entries(molecules).map(([key, item]) => <option key={key} value={key}>{item.name} · {item.formula}</option>)}
      </select>
    </div>
    <p><strong>{model.shape}</strong> · Approximate H–{model.center === "Oxygen" ? "O" : model.center === "Nitrogen" ? "N" : "C"}–H angle {model.angle}°.</p>
    {open && <div className={styles.labViewport} aria-hidden="true">
      <ModelBoundary key={revision}><MolecularScene molecule={molecule} selected={selected} onSelect={setSelected} revision={revision} /></ModelBoundary>
    </div>}
    <div className={styles.roomActions}>
      <button className={styles.reviewCheck} type="button" aria-expanded={open} onClick={() => setOpen(value => !value)}>
        {open ? "Hide 3D molecule" : "Open 3D molecule"}
      </button>
      <button className={styles.reviewCheck} type="button" onClick={() => { setMolecule("water"); setSelected(0); setAnswer(undefined); setRevision(value => value + 1); }}>Reset molecule</button>
    </div>
    {open && <p>Drag the model to rotate it. Scroll or pinch to zoom. Use the atom buttons for an equivalent text inspection.</p>}
    <fieldset className={styles.reviewQuiz}>
      <legend>Inspect an atom</legend>
      <div className={styles.roomActions}>{names.map((name, index) =>
        <button key={name} type="button" aria-pressed={selected === index} className={styles.reviewCheck} onClick={() => setSelected(index)}>{name}</button>)}</div>
    </fieldset>
    <p role="status">{names[selected]} · {selected === 0 ? `Central atom with ${model.points.length} O/N/C–H bonds in this model.` : `Attached to ${model.center.toLowerCase()} by one bond.`}</p>
    <fieldset className={styles.reviewQuiz}>
      <legend>Which of these molecules is tetrahedral?</legend>
      {["Water", "Ammonia", "Methane"].map((choice, index) => <label key={choice}>
        <input type="radio" name="molecular-check" checked={answer === index} onChange={() => setAnswer(index)} />{choice}
      </label>)}
    </fieldset>
    {answer !== undefined && <p role="status">{answer === 2 ? "Correct. " : ""}Methane has four bonding pairs around its central carbon.</p>}
    <Link href="/jee/classes/chemical-bonding" prefetch={false}>Study bonding and molecular shape</Link>
  </article>;
}
