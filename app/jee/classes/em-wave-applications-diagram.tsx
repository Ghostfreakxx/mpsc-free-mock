import styles from "./lecture.module.css";
export default function EmWaveApplicationsDiagram({chapter}:{chapter:number}) {
  const titles=['Changing flux: enclose only part of the plate','Peak and RMS fields give the same intensity','Absorption and reflection transfer momentum'];
  return <svg className={styles.forceDiagram} viewBox="0 0 460 320" role="img" aria-label={titles[chapter]}>
    <text x="18" y="30" fontSize="16">{titles[chapter]}</text>
    {chapter===0 ? <>
      <circle cx="150" cy="155" r="85" fill="#edf3f7" stroke="#245e94" strokeWidth="3"/><circle cx="150" cy="155" r="42.5" fill="none" stroke="#14745c" strokeWidth="3" strokeDasharray="5 4"/>
      <text x="248" y="112" fontSize="15">a = 0.10 m</text><text x="248" y="150" fontSize="15">r = 0.05 m</text><text x="248" y="188" fontSize="15">I enclosed = I/4</text><text x="35" y="275" fontSize="15">I = 0.20 A; loop field = 0.20 microT</text><text x="35" y="308" fontSize="14">Ideal circular plates; negligible fringing</text>
    </> : chapter===1 ? <>
      <text x="35" y="85" fontSize="16">Peak E: 120 V/m</text><text x="35" y="130" fontSize="16">RMS E: 84.85 V/m</text><text x="35" y="175" fontSize="16">Peak B: 0.40 microT</text><path d="M35 195H420" stroke="#68716e"/><text x="35" y="235" fontSize="16">Average intensity: 19.116 W/m squared</text><text x="35" y="280" fontSize="15">Double field amplitude: four times intensity</text>
    </> : <>
      <text x="35" y="85" fontSize="16">Incident intensity: 600 W/m squared</text><text x="35" y="130" fontSize="16">Area: 0.020 m squared; normal incidence</text><text x="35" y="185" fontSize="16">Absorbing force: 4 x 10^-8 N</text><text x="35" y="230" fontSize="16">Reflecting force: 8 x 10^-8 N</text><text x="35" y="280" fontSize="15">Perfect reflection doubles normal transfer</text>
    </>}
  </svg>;
}
