import styles from "./lecture.module.css";

export default function ElasticityDiagram({ chapter }: { chapter: number }) {
  const labels = ["An elastic wire returns to its original length after unloading", "Equal opposite end forces create tension, not twice the tension", "Stress divided by Young's modulus gives strain; multiplying by length gives extension", "Doubling wire radius quadruples its cross sectional area", "Triangular area under a linear force-extension graph is stored energy"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={labels[chapter]}>
    <defs><marker id="elasticity-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="context-stroke" /></marker></defs>
    {chapter === 0 && <>
      <text x="30" y="30">Elastic recovery after unloading</text>
      <path d="M60 80H260M60 220H260" stroke="#276b4b" strokeWidth="10" /><path d="M60 150H330" stroke="#245e94" strokeWidth="8" />
      <path d="M330 150H400" stroke="#b5472b" strokeWidth="3" markerEnd="url(#elasticity-arrow)" />
      <text x="285" y="85">Original</text><text x="60" y="130">Loaded</text><text x="280" y="225">Recovered</text><text x="60" y="258">Stretch exaggerated for visibility</text>
    </>}
    {chapter === 1 && <>
      <text x="40" y="35">Static tension: use F, not 2F</text><rect x="120" y="115" width="200" height="25" fill="#e0efe4" stroke="#276b4b" strokeWidth="2" />
      <path d="M120 127H45M320 127H395" stroke="#245e94" strokeWidth="3" markerEnd="url(#elasticity-arrow)" /><path d="M225 100V160" stroke="#b5472b" strokeWidth="2" strokeDasharray="5 4" />
      <text x="50" y="105">F</text><text x="375" y="105">F</text><text x="155" y="195">Section area A</text><text x="120" y="240">Stress = F/A</text>
    </>}
    {chapter === 2 && <>
      <text x="35" y="35">One problem, two checks</text><text x="35" y="80">Stress = 100 million Pa</text><text x="35" y="125">Strain = stress/Y = 0.0005</text><text x="35" y="170">Extension = strain x 2 m</text><text x="35" y="220">Extension = 0.001 m = 1 mm</text>
    </>}
    {chapter === 3 && <>
      <text x="35" y="35">Circular cross sections</text><circle cx="105" cy="130" r="35" fill="#e0efe4" stroke="#276b4b" strokeWidth="2" /><circle cx="310" cy="130" r="70" fill="#e4edf5" stroke="#245e94" strokeWidth="2" />
      <path d="M105 130H140M310 130H380" stroke="#203a34" strokeWidth="2" /><text x="115" y="120">r</text><text x="335" y="120">2r</text>
      <text x="65" y="220">Area A</text><text x="265" y="220">Area 4A</text><text x="40" y="255">Same F, L, Y: extension becomes x/4</text>
    </>}
    {chapter === 4 && <>
      <text x="30" y="30">Slow loading in the linear range</text><path d="M80 205L355 65V205Z" fill="#e0efe4" /><path d="M80 45V205H400" fill="none" stroke="#203a34" strokeWidth="2" /><path d="M80 205L355 65" stroke="#276b4b" strokeWidth="3" /><path d="M80 65H355V205" fill="none" stroke="#82938b" strokeDasharray="5 4" />
      <text x="10" y="68">100 N</text><text x="40" y="120">F</text><text x="310" y="230">1 mm</text><text x="120" y="255">Extension x</text><text x="220" y="175">0.05 J</text>
    </>}
  </svg>;
}
