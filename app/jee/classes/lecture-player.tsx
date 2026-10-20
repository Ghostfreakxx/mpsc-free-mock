"use client";

import KineticsDiagram from "./kinetics-diagram";
import PhysicalChemistryDiagram from "./physical-chemistry-diagram";
import EquilibriumElectrochemistryDiagram from "./equilibrium-electrochemistry-diagram";
import BiomoleculesPracticalDiagram from "./biomolecules-practical-diagram";
import OxygenNitrogenDiagram from "./oxygen-nitrogen-diagram";
import OrganicReactionDiagram from "./organic-reaction-diagram";
import MolePeriodicDiagram from "./mole-periodic-diagram";
import AtomicBondingDiagram from "./atomic-bonding-diagram";
import CoordinationDiagram from "./coordination-diagram";
import OrganicPrinciplesDiagram from "./organic-principles-diagram";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Captions, Download, RotateCcw } from "lucide-react";
import type { Lecture } from "./lessons";
import PracticeQuiz from "./practice-quiz";
import ElectricityLabDiagram from "./lab-electricity-diagram";
import FinalLabDiagram from "./lab-final-diagrams";
import KinematicsDiagram from "./kinematics-diagram";
import LawsMotionDiagram from "./laws-motion-diagram";
import EnergyApplicationsDiagram from "./energy-applications-diagram";
import GravityApplicationsDiagram from "./gravity-applications-diagram";
import CompanionDiagram from "./companion-diagram";
import ConvexMirrorLabDiagram from "./convex-mirror-lab-diagram";
import WavesApplicationsDiagram from "./waves-applications-diagram";
import InductionApplicationsDiagram from "./induction-applications-diagram";
import MagneticApplicationsDiagram from "./magnetic-applications-diagram";
import CircuitApplicationsDiagram from "./circuit-applications-diagram";
import CapacitorApplicationsDiagram from "./capacitor-applications-diagram";
import ElectrostaticsApplicationsDiagram from "./electrostatics-applications-diagram";
import EmWaveApplicationsDiagram from "./em-wave-applications-diagram";
import OpticsApplicationsDiagram from "./optics-applications-diagram";
import WaveOpticsApplicationsDiagram from "./wave-optics-applications-diagram";
import FinalPhysicsDiagram from "./final-physics-diagram";
import PhysicsCloseoutDiagram from "./physics-closeout-diagram";
import styles from "./lecture.module.css";
import NewtonsDiagram from "./newtons-diagram";
import EnergyDiagram from "./energy-diagram";
import RotationDiagram from "./rotation-diagram";
import GravityDiagram from "./gravity-diagram";
import ElasticityDiagram from "./elasticity-diagram";
import FluidStaticsDiagram from "./fluid-statics-diagram";
import FluidFlowDiagram from "./fluid-flow-diagram";
import ViscosityDiagram from "./viscosity-diagram";
import ThermalDiagram from "./thermal-diagram";
import HeatDiagram from "./heat-diagram";
import GasDiagram from "./gas-diagram";
import OscillationDiagram from "./oscillation-diagram";
import WaveDiagram from "./wave-diagram";
import ElectricFieldDiagram from "./electric-field-diagram";
import GaussDiagram from "./gauss-diagram";
import PotentialDiagram from "./potential-diagram";
import CapacitorDiagram from "./capacitor-diagram";
import CurrentElectricityDiagram from "./current-electricity-diagram";
import ResistorNetworkDiagram from "./resistor-network-diagram";
import CellDiagram from "./cell-diagram";
import KirchhoffDiagram from "./kirchhoff-diagram";
import BridgeDiagram from "./bridge-diagram";
import MagneticFieldDiagram from "./magnetic-field-diagram";
import AmpereDiagram from "./ampere-diagram";
import MagneticForcesDiagram from "./magnetic-forces-diagram";
import WireForcesDiagram from "./wire-forces-diagram";
import LoopTorqueDiagram from "./loop-torque-diagram";
import GalvanometerDiagram from "./galvanometer-diagram";
import DipoleFieldsDiagram from "./dipole-fields-diagram";
import MagneticMaterialsDiagram from "./magnetic-materials-diagram";
import FaradayLenzDiagram from "./faraday-lenz-diagram";
import MotionalEmfDiagram from "./motional-emf-diagram";
import { InductanceDiagram, AcBasicsDiagram, LcrDiagram, GeneratorsDiagram } from "./induction-ac-diagrams";
import EmWavesDiagram from "./em-waves-diagram";
import MirrorsDiagram from "./mirrors-diagram";
import OpticsDiagram from "./optics-diagrams";
import PhotoelectricDiagram from "./photoelectric-diagram";
import ModernPhysicsDiagram from "./modern-physics-diagrams";
import ElectronicsDiagram from "./electronics-diagrams";
import LabExperimentDiagram from "./lab-experiment-diagrams";

const formatTime = (value: number) => `${Math.floor(value / 60)}:${Math.floor(value % 60).toString().padStart(2, "0")}`;

export default function LecturePlayer({ lesson }: { lesson: Lecture }) {
  const { timings, progressKey } = lesson;
  const chapterStarts = lesson.segments.map((_, index) => timings.chapters?.[index]?.start ?? timings.cues.find(cue => cue.chapter === index)!.start);
  const audio = useRef<HTMLAudioElement>(null);
  const [time, setTime] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [captions, setCaptions] = useState(true);
  const [error, setError] = useState(false);
  const lastSaved = useRef(-1);
  const restored = useRef(false);
  const cue = timings.cues.find(item => time >= item.start && time < item.end);
  const chapterIndex = Math.max(0, chapterStarts.findLastIndex(start => time >= start));
  const chapter = lesson.segments[chapterIndex];

  useEffect(() => {
    const player = audio.current;
    if (!player) return;
    // A media request can fail before hydration installs React's error handler.
    if (player.error) queueMicrotask(() => setError(true));
    const restore = () => {
      if (restored.current) return;
      try {
        const saved = Number(localStorage.getItem(progressKey));
        if (Number.isFinite(saved) && saved > 0 && saved < timings.duration - 2) {
          player.currentTime = saved;
        }
      } catch { /* Start at the beginning if storage is unavailable. */ }
      restored.current = true;
    };
    const save = () => {
      if (!player || !restored.current) return;
      try { localStorage.setItem(progressKey, String(player.currentTime)); } catch { /* Playback still works without storage. */ }
    };
    window.addEventListener("pagehide", save);
    player.addEventListener("loadedmetadata", restore);
    if (player.readyState >= 1) restore();
    return () => { save(); window.removeEventListener("pagehide", save); player.removeEventListener("loadedmetadata", restore); };
  }, [progressKey, timings.duration]);

  function seek(value: number) {
    if (!audio.current || !Number.isFinite(audio.current.duration)) return;
    audio.current.currentTime = Math.max(0, Math.min(value, timings.duration));
    setTime(audio.current.currentTime);
  }

  function downloadTranscript() {
    const text = `${lesson.title}\nEnglish narration · American English · Marin · AI-generated voice\n\n` + lesson.segments.map((segment, index) =>
      `${index + 1}. ${segment.title}\n${segment.formula}\n${segment.steps.join("\n")}\n\n${segment.english}\n${segment.note ? `Clarification: ${segment.note}\n` : ""}`
    ).join("\n") + "\nSources\n" + lesson.sources.map(source => `${source.title}: ${source.url}`).join("\n");
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `jee-${lesson.id}-notes.txt`;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return <main className={styles.page}>
    <header className={styles.header}>
      <Link href="/jee/classes"><ArrowLeft size={17} /> JEE classes</Link>
      <Link href="/">MPSC FREE MOCK</Link>
    </header>
    <div className={styles.heading}>
      <p>JEE · {(lesson.subject ?? "Physics").toUpperCase()} · FOUNDATION CLASS {lesson.number}</p>
      <h1>{lesson.title}</h1>
      <span>{formatTime(timings.duration)} · American English · Marin · AI-generated voice</span>
    </div>
    <div className={styles.layout}>
      <section aria-label="Recorded visual lesson" className={styles.player}>
        <div className={styles.board}>
          <p className={styles.chapterNumber}>CHAPTER {String(chapterIndex + 1).padStart(2, "0")} / {lesson.segments.length}</p>
          <h2>{chapter.title}</h2>
          {lesson.id === "chemical-kinetics" && <KineticsDiagram chapter={chapterIndex} />}
          {(lesson.id === "chemical-thermodynamics" || lesson.id === "solutions") && <PhysicalChemistryDiagram lesson={lesson.id} chapter={chapterIndex} />}
          {(lesson.id === "equilibrium" || lesson.id === "redox-electrochemistry") && <EquilibriumElectrochemistryDiagram lesson={lesson.id} chapter={chapterIndex} />}
          {(lesson.id === "biomolecules" || lesson.id === "purification-analysis" || lesson.id === "practical-chemistry") && <BiomoleculesPracticalDiagram lesson={lesson.id} chapter={chapterIndex} />}
          {(lesson.id === "organic-oxygen" || lesson.id === "organic-nitrogen") && <OxygenNitrogenDiagram lesson={lesson.id} chapter={chapterIndex} />}
          {(lesson.id === "hydrocarbons" || lesson.id === "organic-halogens") && <OrganicReactionDiagram lesson={lesson.id} chapter={chapterIndex} />}
          {(lesson.id === "mole-concept" || lesson.id === "periodic-trends") && <MolePeriodicDiagram lesson={lesson.id} chapter={chapterIndex} />}
          {(lesson.id === "atomic-structure" || lesson.id === "chemical-bonding") && <AtomicBondingDiagram lesson={lesson.id} chapter={chapterIndex} />}
          {lesson.id === "coordination-compounds" && <CoordinationDiagram chapter={chapterIndex} />}
          {lesson.id === "organic-principles" && <OrganicPrinciplesDiagram chapter={chapterIndex} />}
          {lesson.id === "kinematics-applications" && <KinematicsDiagram chapter={chapterIndex} />}
          {lesson.id === "laws-motion-applications" && <LawsMotionDiagram chapter={chapterIndex} />}
          {lesson.id === "energy-applications" && <EnergyApplicationsDiagram chapter={chapterIndex} />}
          {lesson.id === "gravity-applications" && <GravityApplicationsDiagram chapter={chapterIndex} />}
          {["rotation-applications", "materials-applications", "thermodynamics-applications", "kinetic-theory-applications"].includes(lesson.id) && <CompanionDiagram lessonId={lesson.id} chapter={chapterIndex} />}
          {lesson.id === "lab-convex-mirror" && <ConvexMirrorLabDiagram chapter={chapterIndex} />}
          {lesson.id === "waves-applications" && <WavesApplicationsDiagram chapter={chapterIndex} />}
          {lesson.id === "induction-applications" && <InductionApplicationsDiagram chapter={chapterIndex} />}
          {lesson.id === "magnetic-applications" && <MagneticApplicationsDiagram chapter={chapterIndex} />}
          {lesson.id === "circuit-applications" && <CircuitApplicationsDiagram chapter={chapterIndex} />}
          {lesson.id === "capacitor-applications" && <CapacitorApplicationsDiagram chapter={chapterIndex} />}
          {lesson.id === "electrostatics-applications" && <ElectrostaticsApplicationsDiagram chapter={chapterIndex} />}
          {lesson.id === "em-wave-applications" && <EmWaveApplicationsDiagram chapter={chapterIndex} />}
          {lesson.id === "optics-applications" && <OpticsApplicationsDiagram chapter={chapterIndex} />}
          {lesson.id === "wave-optics-applications" && <WaveOpticsApplicationsDiagram chapter={chapterIndex} />}
          {["dual-nature-applications", "atomic-nuclear-applications", "electronics-applications", "experimental-applications"].includes(lesson.id) && <FinalPhysicsDiagram id={lesson.id} chapter={chapterIndex} />}
          {["banked-road-limits", "optics-derivations", "lab-liquid-mixtures"].includes(lesson.id) && <PhysicsCloseoutDiagram id={lesson.id} chapter={chapterIndex} />}
          {lesson.id === "newtons-laws" && <NewtonsDiagram chapter={chapterIndex} />}
          {lesson.id === "work-energy" && <EnergyDiagram chapter={chapterIndex} />}
          {lesson.id === "rotation" && <RotationDiagram chapter={chapterIndex} />}
          {lesson.id === "gravity" && <GravityDiagram chapter={chapterIndex} />}
          {lesson.id === "elasticity" && <ElasticityDiagram chapter={chapterIndex} />}
          {lesson.id === "fluid-statics" && <FluidStaticsDiagram chapter={chapterIndex} />}
          {lesson.id === "fluid-flow" && <FluidFlowDiagram chapter={chapterIndex} />}
          {lesson.id === "viscosity-surface-tension" && <ViscosityDiagram chapter={chapterIndex} />}
          {lesson.id === "thermal-expansion" && <ThermalDiagram chapter={chapterIndex} />}
          {lesson.id === "calorimetry" && <HeatDiagram mode="calorimetry" chapter={chapterIndex} />}
          {lesson.id === "heat-transfer" && <HeatDiagram mode="transfer" chapter={chapterIndex} />}
          {lesson.id === "thermodynamics" && <GasDiagram mode="thermodynamics" chapter={chapterIndex} />}
          {lesson.id === "kinetic-theory" && <GasDiagram mode="kinetic" chapter={chapterIndex} />}
          {lesson.id === "oscillations" && <OscillationDiagram chapter={chapterIndex} />}
          {lesson.id === "waves" && <WaveDiagram chapter={chapterIndex} />}
          {lesson.id === "electric-fields" && <ElectricFieldDiagram chapter={chapterIndex} />}
          {lesson.id === "gauss-law" && <GaussDiagram chapter={chapterIndex} />}
          {lesson.id === "electric-potential" && <PotentialDiagram chapter={chapterIndex} />}
          {lesson.id === "capacitors" && <CapacitorDiagram chapter={chapterIndex} />}
          {lesson.id === "current-electricity" && <CurrentElectricityDiagram chapter={chapterIndex} />}
          {lesson.id === "resistor-networks" && <ResistorNetworkDiagram chapter={chapterIndex} />}
          {lesson.id === "cells-emf" && <CellDiagram chapter={chapterIndex} />}
          {lesson.id === "kirchhoff-laws" && <KirchhoffDiagram chapter={chapterIndex} />}
          {lesson.id === "bridges" && <BridgeDiagram chapter={chapterIndex} />}
          {lesson.id === "magnetic-fields" && <MagneticFieldDiagram chapter={chapterIndex} />}
          {lesson.id === "ampere-solenoids" && <AmpereDiagram chapter={chapterIndex} />}
          {lesson.id === "magnetic-forces" && <MagneticForcesDiagram chapter={chapterIndex} />}
          {lesson.id === "wire-forces" && <WireForcesDiagram chapter={chapterIndex} />}
          {lesson.id === "loop-torque" && <LoopTorqueDiagram chapter={chapterIndex} />}
          {lesson.id === "galvanometers" && <GalvanometerDiagram chapter={chapterIndex} />}
          {lesson.id === "dipole-fields" && <DipoleFieldsDiagram chapter={chapterIndex} />}
          {lesson.id === "magnetic-materials" && <MagneticMaterialsDiagram chapter={chapterIndex} />}
          {lesson.id === "faraday-lenz" && <FaradayLenzDiagram chapter={chapterIndex} />}
          {lesson.id === "motional-emf" && <MotionalEmfDiagram chapter={chapterIndex} />}
          {lesson.id === "self-inductance" && <InductanceDiagram chapter={chapterIndex} />}
          {lesson.id === "ac-basics" && <AcBasicsDiagram chapter={chapterIndex} />}
          {lesson.id === "lcr-resonance" && <LcrDiagram chapter={chapterIndex} />}
          {lesson.id === "generators-transformers" && <GeneratorsDiagram chapter={chapterIndex} />}
          {lesson.id === "em-waves" && <EmWavesDiagram chapter={chapterIndex} />}
          {lesson.id === "mirrors" && <MirrorsDiagram chapter={chapterIndex} />}
          {["refraction","lenses","prisms","optical-instruments","interference","diffraction-polarization"].includes(lesson.id) && <OpticsDiagram lessonId={lesson.id} chapter={chapterIndex} />}
          {lesson.id === "photoelectric" && <PhotoelectricDiagram chapter={chapterIndex} />}
          {["matter-waves","atoms","nuclei"].includes(lesson.id) && <ModernPhysicsDiagram lessonId={lesson.id} chapter={chapterIndex} />}
          {["semiconductor-diodes","special-diodes","logic-gates"].includes(lesson.id) && <ElectronicsDiagram lessonId={lesson.id} chapter={chapterIndex} />}
          {["lab-measurements","lab-materials"].includes(lesson.id) && <LabExperimentDiagram lessonId={lesson.id} chapter={chapterIndex} />}
          {lesson.id==="lab-electricity" && <ElectricityLabDiagram chapter={chapterIndex} />}
          {["lab-optics","lab-devices"].includes(lesson.id) && <FinalLabDiagram lessonId={lesson.id} chapter={chapterIndex} />}
          {lesson.id === "units" && chapterIndex < 5 && <svg className={styles.ruler} viewBox="0 0 600 85" role="img" aria-label="A ruler showing equal intervals from zero to five metres">
            <rect x="25" y="8" width="550" height="42" rx="3" fill="#e1f0eb" />
            <path d="M25 50H575" stroke="#146b55" strokeWidth="2" />
            {[0, 1, 2, 3, 4, 5].map(value => <g key={value}><path d={`M${25 + value * 110} 20v30`} stroke="#146b55" strokeWidth="2" /><text x={25 + value * 110} y="74" textAnchor="middle" fontSize="16" fill="#20483e">{value} m</text></g>)}
          </svg>}
          {lesson.id === "straight-line-motion" && <svg className={styles.motionDiagram} viewBox="0 0 640 150" role="img" aria-label={`Straight-line motion diagram for ${chapter.title}`}>
            {chapterIndex === 0 && <><path d="M55 90H585" stroke="#146b55" strokeWidth="3" /><path d="M580 84l10 6-10 6" fill="#146b55" /><circle cx="170" cy="90" r="9" fill="#d46a45" /><circle cx="440" cy="90" r="9" fill="#d46a45" /><text x="55" y="125" fill="#20483e">origin</text><text x="145" y="125" fill="#20483e">initial position</text><text x="405" y="125" fill="#20483e">final position</text><text x="280" y="45" fill="#146b55">positive direction</text></>}
            {chapterIndex === 1 && <><path d="M60 115H580M60 115V25" stroke="#476c60" strokeWidth="2" /><path d="M80 105L550 45" stroke="#d46a45" strokeWidth="4" /><circle cx="315" cy="75" r="6" fill="#d46a45" /><text x="220" y="140" fill="#20483e">time</text><text x="12" y="35" fill="#20483e">position</text><text x="365" y="58" fill="#a34f32">slope = velocity</text></>}
            {chapterIndex === 2 && <><path d="M60 115H580M60 115V25" stroke="#476c60" strokeWidth="2" /><path d="M80 95L550 35" stroke="#146b55" strokeWidth="4" /><text x="215" y="140" fill="#20483e">time (s): 0 to 3</text><text x="65" y="20" fill="#20483e">velocity (m/s)</text><text x="90" y="85" fill="#20483e">+2</text><text x="550" y="30" fill="#20483e">+8</text><text x="270" y="60" fill="#146b55">slope = +2 m/s²</text></>}
            {chapterIndex === 3 && <><path d="M60 115H580M60 115V25" stroke="#476c60" strokeWidth="2" /><path d="M80 95L540 40" stroke="#d46a45" strokeWidth="4" /><path d="M80 95H540" stroke="#146b55" strokeWidth="2" strokeDasharray="8 8" /><text x="225" y="140" fill="#20483e">time</text><text x="8" y="35" fill="#20483e">velocity</text><text x="330" y="35" fill="#a34f32">area = displacement</text></>}
            {chapterIndex === 4 && <><path d="M80 100H590M80 130V15" stroke="#476c60" strokeWidth="2" /><path d="M80 25L440 100L560 125" fill="none" stroke="#d46a45" strokeWidth="4" /><path d="M80 25L440 100H80Z" fill="#146b55" opacity=".16" /><path d="M440 100L560 125V100Z" fill="#d46a45" opacity=".25" /><text x="200" y="140" fill="#20483e">time (s)</text><text x="85" y="14" fill="#20483e">velocity (m/s)</text><text x="40" y="28">+6</text><text x="40" y="128">−2</text><text x="430" y="119">3</text><text x="565" y="99">4</text><text x="165" y="85">+9 m</text><text x="490" y="145">−1 m</text></>}
          </svg>}
          <div className={styles.formula}>{chapter.formula}</div>
          <ol className={styles.steps}>{chapter.steps.map(step => <li key={step}>{step}</li>)}</ol>
          {chapter.note && <p className={styles.clarification}><strong>Clarification:</strong> {chapter.note}</p>}
        </div>
        <div className={styles.caption} aria-label="English subtitles">{captions ? cue?.text ?? "English subtitles" : "Subtitles off"}</div>
        <audio ref={audio} src={lesson.audio} controls preload="metadata" aria-label="Class narration"
          onRateChange={() => setSpeed(audio.current?.playbackRate ?? 1)}
          onError={() => setError(true)}
          onCanPlay={() => setError(false)}
          onTimeUpdate={() => {
            const current = audio.current?.currentTime ?? 0;
            setTime(current);
            if (restored.current && Math.floor(current) !== lastSaved.current) {
              lastSaved.current = Math.floor(current);
              try { localStorage.setItem(progressKey, String(current)); } catch { /* Optional local resume. */ }
            }
          }}>
          <track kind="captions" src={lesson.subtitles} srcLang="en-US" label="English" default />
        </audio>
        {error && <p role="alert">The recording could not load. <button onClick={() => audio.current?.load()}>Retry audio</button> or read the transcript below.</p>}
        <div className={styles.controls}>
          <button title="Restart class" aria-label="Restart class" onClick={() => seek(0)}><RotateCcw size={19} /></button>
          <button title="English subtitles" aria-label="English subtitles" aria-pressed={captions} onClick={() => setCaptions(!captions)}><Captions size={20} /></button>
          <label>Speed <select aria-label="Playback speed" value={speed} onChange={event => {
            const value = Number(event.target.value); setSpeed(value); if (audio.current) audio.current.playbackRate = value;
          }}>{[0.75, 1, 1.25, 1.5].map(value => <option key={value} value={value}>{value}×</option>)}</select></label>
          <button disabled={chapterIndex === lesson.segments.length - 1} onClick={() => seek(chapterStarts[chapterIndex + 1] + 0.05)}>Next chapter <ArrowRight size={17} /></button>
        </div>
      </section>
      <aside className={styles.outline} aria-label="Class chapters">
        <h2>Class chapters</h2>
        <ol>{lesson.segments.map((segment, index) => <li key={segment.title}>
          <button aria-current={chapterIndex === index ? "step" : undefined} onClick={() => seek(chapterStarts[index] + 0.05)}>
            <span>{String(index + 1).padStart(2, "0")}</span><strong>{segment.title}</strong><time>{formatTime(chapterStarts[index])}</time>
          </button>
        </li>)}</ol>
      </aside>
    </div>
    <section className={styles.notes}>
      <div className={styles.sectionHeading}><h2>Class notes & transcript</h2><button onClick={downloadTranscript}><Download size={17} /> Download notes</button></div>
      <p>{lesson.scope}</p>
      <details><summary>Read the English transcript</summary>{lesson.segments.map(segment => <article key={segment.title}><h3>{segment.title}</h3><p>{segment.english}</p>{segment.note && <p className={styles.clarification}><strong>Clarification:</strong> {segment.note}</p>}</article>)}</details>
      <p className={styles.sources}>References: {lesson.sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.title}</a>)}</p>
    </section>
    {lesson.id === "units" && <section className={styles.notes}>
      <h2>Next class</h2>
      <p>Continue with significant figures, uncertainty and error analysis.</p>
      <Link href="/jee/classes/measurements">Open the measurement class <ArrowRight size={17} /></Link>
    </section>}
    <PracticeQuiz quiz={lesson.quiz} progressKey={progressKey} />
    {(lesson.id === "straight-line-motion" || lesson.id === "newtons-laws") && <p><Link href={`/jee/classes/study/${lesson.id}`}>Read the written lesson and worked solutions <ArrowRight size={17} /></Link></p>}
    {lesson.id === "kinematics-applications" && <p><Link href="/jee/classes/study/straight-line-motion">Straight-line motion: written foundation <ArrowRight size={17} /></Link></p>}
    {lesson.id === "laws-motion-applications" && <p><Link href="/jee/classes/study/newtons-laws">Newton&apos;s laws: written foundation <ArrowRight size={17} /></Link></p>}
    {lesson.id === "energy-applications" && <p><Link href="/jee/classes/work-energy">Work and energy: foundation class <ArrowRight size={17} /></Link></p>}
    <Link href="/jee">Continue to JEE practice <ArrowRight size={17} /></Link>
  </main>;
}
