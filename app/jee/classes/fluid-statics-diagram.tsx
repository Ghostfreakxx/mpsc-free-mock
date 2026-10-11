import styles from "./lecture.module.css";

export default function FluidStaticsDiagram({ chapter }: { chapter: number }) {
  const labels = ["The same force over twice the area gives half the pressure", "Pressure increases with vertical depth below the water surface", "Upward buoyancy equals the weight of displaced water", "A uniform floating block has sixty percent of its volume submerged", "Weight is balanced by upward tension and buoyancy"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={labels[chapter]}>
    <defs><marker id="fluid-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="context-stroke" /></marker></defs>
    {chapter === 0 ? <>
      <text x="35" y="30">Same force: 200 N on each surface</text>
      <rect x="65" y="120" width="90" height="60" fill="#e0efe4" stroke="#276b4b" /><rect x="225" y="120" width="180" height="60" fill="#e4edf5" stroke="#245e94" />
      <path d="M110 55V113" stroke="#b5472b" strokeWidth="3" markerEnd="url(#fluid-arrow)" /><path d="M315 55V113" stroke="#b5472b" strokeWidth="3" markerEnd="url(#fluid-arrow)" />
      <text x="55" y="210">0.02 m squared</text><text x="245" y="210">0.04 m squared</text><text x="65" y="248">10,000 Pa</text><text x="270" y="248">5,000 Pa</text>
    </> : <>
      <path d="M40 65V225H400V65" fill="none" stroke="#82938b" strokeWidth="2" /><rect x="42" y="90" width="356" height="133" fill="#e4edf5" /><path d="M42 90H398" stroke="#245e94" strokeWidth="2" />
      {chapter === 1 && <><text x="40" y="35">Surface pressure + rho g h</text><path d="M100 95V183" stroke="#276b4b" strokeWidth="3" markerEnd="url(#fluid-arrow)" /><circle cx="100" cy="190" r="5" fill="#245e94" /><text x="120" y="140">h = 2 m</text><text x="135" y="195">Gauge: 20,000 Pa</text></>}
      {chapter === 2 && <><text x="40" y="35">Displaced volume = 0.002 m cubed</text><rect x="170" y="140" width="90" height="60" fill="#e0efe4" stroke="#276b4b" /><path d="M215 195V110" stroke="#276b4b" strokeWidth="3" markerEnd="url(#fluid-arrow)" /><text x="270" y="135">20 N upward</text></>}
      {chapter === 3 && <><text x="40" y="35">Floating: buoyancy equals weight</text><rect x="160" y="50" width="110" height="100" fill="#e0efe4" stroke="#276b4b" /><path d="M160 90H270" stroke="#245e94" strokeWidth="2" /><text x="285" y="75">40% above</text><text x="285" y="135">60% below</text><text x="70" y="195">Density ratio: 600/1000 = 0.6</text></>}
      {chapter === 4 && <><text x="35" y="35">At rest: 10 N + 20 N = 30 N</text><rect x="180" y="125" width="60" height="60" fill="#e0efe4" stroke="#276b4b" /><path d="M195 125V95" stroke="#276b4b" strokeWidth="3" markerEnd="url(#fluid-arrow)" /><path d="M225 125V65" stroke="#276b4b" strokeWidth="3" markerEnd="url(#fluid-arrow)" /><path d="M210 185V245" stroke="#b5472b" strokeWidth="3" markerEnd="url(#fluid-arrow)" /><text x="70" y="115">T: 10 N</text><text x="255" y="75">Buoyancy: 20 N</text><text x="235" y="253">Weight: 30 N</text></>}
      {chapter < 4 && <text x="60" y="255">Water density: 1000 kg/m cubed</text>}
    </>}
  </svg>;
}
