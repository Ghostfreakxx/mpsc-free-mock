"use client";

import { useState } from "react";
import { Experiment, Slider } from "./science-labs";
import { frictionTrial, refractedAngle } from "./advanced-models";
import styles from "../study-room/study-room.module.css";

const initial = { force: 24, mass: 6, friction: 0.4 };

export function FrictionLab() {
  const [values, setValues] = useState(initial);
  const result = frictionTrial(values.force, values.mass, values.friction);
  return <Experiment id="force-friction" title="Physics · Force and friction" onReset={() => setValues(initial)}
    lesson="/jee/classes/newtons-laws" question="A resting block is pulled with 10 N and remains still. What is its net horizontal force?"
    choices={["0 N", "10 N", "The full static friction limit"]} answer={0}
    feedback="Static friction balances the pull while the block remains at rest.">
    <p>Increase the horizontal force on a block initially at rest. Once the pull exceeds maximum static friction, the model uses kinetic friction at 80% of that maximum.</p>
    <div className={styles.labControls}>
      <Slider label="Pull force (N)" value={values.force} min={0} max={100} change={force => setValues({ ...values, force })} />
      <Slider label="Block mass (kg)" value={values.mass} min={1} max={10} change={mass => setValues({ ...values, mass })} />
      <Slider label="Static friction coefficient" value={values.friction} min={0.1} max={0.9} step={0.1} change={friction => setValues({ ...values, friction })} />
    </div>
    <svg viewBox="0 0 360 145" className={styles.labDiagram} role="img" aria-label="Block with rightward pull and leftward friction arrows">
      <path className={styles.labAxis} d="M18 110H342 M135 110V55H225V110" />
      {values.force > 0 && <path className={styles.labStroke} d={`M226 75H${226 + values.force} l-9 -6 m9 6 l-9 6`} />}
      {result.resistance > 0 && <path className={styles.labStroke} d={`M134 75H${134 - result.resistance} l9 -6 m-9 6 l9 6`} />}
      <text x="21" y="45">Friction</text><text x="261" y="45">Pull</text>
    </svg>
    <p>{result.moving ? "The block starts sliding." : "The block stays at rest."} Friction {result.resistance.toFixed(2)} N · Net force {result.net.toFixed(2)} N · Acceleration {result.acceleration.toFixed(2)} m/s².</p>
  </Experiment>;
}

const materials = { air: 1.0, water: 1.333, glass: 1.5 };
type Material = keyof typeof materials;
export function OpticsLab() {
  const [angle, setAngle] = useState(40);
  const [entry, setEntry] = useState<Material>("air");
  const [exit, setExit] = useState<Material>("glass");
  const refracted = refractedAngle(angle, materials[entry], materials[exit]);
  const ray = (degrees: number, reverse = false) => {
    const radians = degrees * Math.PI / 180;
    return `${180 + 83 * Math.sin(radians) * (reverse ? -1 : 1)} ${100 + 83 * Math.cos(radians) * (reverse ? -1 : 1)}`;
  };
  return <Experiment title="Physics · Reflection and refraction" onReset={() => { setAngle(40); setEntry("air"); setExit("glass"); }}
    lesson="/jee/classes/refraction" question="What is the angle of reflection for an incident ray at 25° to the normal?"
    choices={["25°", "65°", "It depends on glass thickness"]} answer={0}
    feedback="The incidence and reflection angles are equal when measured from the same normal.">
    <p>Change the incident angle or choose two ideal transparent media. The rays show directions. Their lengths do not indicate optical power.</p>
    <div className={styles.lessonChooser}>
      <label htmlFor="optical-entry">Incident medium</label>
      <select id="optical-entry" value={entry} onChange={event => setEntry(event.target.value as Material)}>{Object.keys(materials).map(item => <option key={item}>{item}</option>)}</select>
      <label htmlFor="optical-exit">Transmitted medium</label>
      <select id="optical-exit" value={exit} onChange={event => setExit(event.target.value as Material)}>{Object.keys(materials).map(item => <option key={item}>{item}</option>)}</select>
    </div>
    <Slider label="Incident angle from normal (degrees)" value={angle} min={0} max={85} change={setAngle} />
    <svg viewBox="0 0 360 200" className={styles.labDiagram} role="img" aria-label="Incident and reflected rays above the interface, and the transmitted ray below when present">
      <path className={styles.labAxis} d="M12 100H348 M180 12V188" />
      <path className={styles.labStroke} d={`M${ray(angle, true)} L180 100 L${ray(-angle, true)}`} />
      {refracted !== null && <path className={styles.labStroke} strokeDasharray="7 4" d={`M180 100 L${ray(refracted)}`} />}
      <text x="17" y="89">{entry}</text><text x="17" y="120">{exit}</text>
    </svg>
    <p>Reflection {angle}°. {refracted === null ? "Total internal reflection. No transmitted ray in this model." : `Transmission ${refracted.toFixed(1)}° from the normal.`}</p>
  </Experiment>;
}

const structures = {
  membrane: { label: "Cell membrane", detail: "A selectively permeable boundary around the cell.", x: 115, y: 42 },
  nucleus: { label: "Nucleus", detail: "Contains most of the cell’s DNA and is the site of transcription for nuclear genes.", x: 157, y: 101 },
  mitochondrion: { label: "Mitochondrion", detail: "Produces much of the ATP made by aerobic respiration.", x: 242, y: 110 },
  wall: { label: "Cell wall", detail: "A cellulose-rich outer layer supporting the plant cell.", x: 50, y: 130 },
  chloroplast: { label: "Chloroplast", detail: "Captures light energy for photosynthesis in photosynthetic plant tissues.", x: 228, y: 66 },
} as const;
type Structure = keyof typeof structures;

export function CellLab() {
  const [plant, setPlant] = useState(false);
  const [active, setActive] = useState<Structure>("nucleus");
  const keys: Structure[] = plant ? ["wall", "membrane", "nucleus", "mitochondrion", "chloroplast"] : ["membrane", "nucleus", "mitochondrion"];
  return <Experiment id="plant-animal-cells" title="Biology · Plant and animal cells" onReset={() => { setPlant(false); setActive("nucleus"); }}
    lesson="/neet/classes/cell-unit-life" question="Which structure carries out photosynthesis in a typical leaf cell?"
    choices={["Mitochondrion", "Nucleus", "Chloroplast"]} answer={2}
    feedback="Chloroplasts contain the machinery for photosynthesis.">
    <p>Compare a schematic animal cell with a photosynthetic plant cell. Organelle positions, counts and sizes are illustrative.</p>
    <div className={styles.lessonChooser}>
      <label htmlFor="lab-cell-model">Cell model</label>
      <select id="lab-cell-model" value={plant ? "plant" : "animal"} onChange={event => { setPlant(event.target.value === "plant"); setActive("nucleus"); }}>
        <option value="animal">Animal cell</option><option value="plant">Photosynthetic plant cell</option>
      </select>
    </div>
    <svg viewBox="0 0 360 200" className={styles.labDiagram} role="img" aria-label={`Schematic ${plant ? "plant" : "animal"} cell with ${structures[active].label} highlighted`}>
      {plant && <rect x="43" y="25" width="274" height="150" rx="18" className={styles.labAxis} />}
      <ellipse cx="180" cy="101" rx="121" ry="67" className={styles.labAxis} />
      {keys.filter(key => key !== "wall" && key !== "membrane").map(key => <ellipse key={key} cx={structures[key].x} cy={structures[key].y} rx={key === "nucleus" ? 28 : 20} ry={key === "nucleus" ? 24 : 10} className={styles.labAxis} />)}
      <circle cx={structures[active].x} cy={structures[active].y} r="6" className={styles.labDot} />
    </svg>
    <div className={styles.roomActions}>{keys.map(key => <button key={key} type="button" aria-pressed={active === key} className={styles.reviewCheck} onClick={() => setActive(key)}>{structures[key].label}</button>)}</div>
    <p role="status"><strong>{structures[active].label}</strong> · {structures[active].detail}</p>
  </Experiment>;
}
