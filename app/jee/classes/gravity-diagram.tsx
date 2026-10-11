import styles from "./lecture.module.css";

export default function GravityDiagram({ chapter }: { chapter: number }) {
  const labels = ["Gravitational force falls to one quarter when separation doubles", "Height R above a planet means distance 2R from its centre", "Potential energy increases from negative GMm over R to negative GMm over 2R", "Circular orbital velocity is perpendicular to inward gravitational force", "Escape speed is square root of two times circular speed at the same radius"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={labels[chapter]}>
    <defs><marker id="gravity-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="context-stroke" /></marker></defs>
    {chapter === 0 && <>
      <text x="40" y="30">Same masses; double separation</text>
      <circle cx="70" cy="95" r="20" fill="#276b4b" /><circle cx="210" cy="95" r="10" fill="#245e94" />
      <path d="M190 95H115" stroke="#b5472b" strokeWidth="3" markerEnd="url(#gravity-arrow)" />
      <text x="125" y="70">F</text><path d="M70 130H210" stroke="#82938b" /><text x="135" y="151">r</text>
      <circle cx="70" cy="200" r="20" fill="#276b4b" /><circle cx="350" cy="200" r="10" fill="#245e94" />
      <path d="M330 200H311.25" stroke="#b5472b" strokeWidth="3" markerEnd="url(#gravity-arrow)" />
      <text x="300" y="177">F/4</text><path d="M70 235H350" stroke="#82938b" /><text x="205" y="260">2r</text>
    </>}
    {chapter === 1 && <>
      <text x="35" y="30">Measure from the centre, not the surface</text>
      <circle cx="130" cy="135" r="85" fill="#e0efe4" stroke="#276b4b" strokeWidth="2" /><circle cx="130" cy="135" r="4" fill="#203a34" /><circle cx="300" cy="135" r="7" fill="#245e94" />
      <path d="M130 135H300" stroke="#245e94" strokeWidth="2" /><text x="167" y="125">R</text><text x="240" y="125">h = R</text>
      <text x="55" y="245">Centre distance = 2R; g = g(surface)/4</text>
    </>}
    {chapter === 2 && <>
      <path d="M35 55H410" stroke="#82938b" strokeDasharray="5 4" /><text x="50" y="35">Zero energy at infinity</text>
      <path d="M50 225H165M265 140H400" stroke="#245e94" strokeWidth="4" />
      <path d="M210 220V145" stroke="#276b4b" strokeWidth="3" markerEnd="url(#gravity-arrow)" />
      <text x="45" y="250">-GMm/R</text><text x="280" y="165">-GMm/(2R)</text><text x="40" y="105">Moving outward</text><text x="40" y="130">increases U</text>
    </>}
    {chapter === 3 && <>
      <circle cx="155" cy="145" r="85" fill="none" stroke="#82938b" strokeDasharray="5 4" /><circle cx="155" cy="145" r="30" fill="#e0efe4" stroke="#276b4b" strokeWidth="2" /><circle cx="240" cy="145" r="7" fill="#245e94" />
      <path d="M232 145H190" stroke="#b5472b" strokeWidth="3" markerEnd="url(#gravity-arrow)" /><path d="M240 137V58" stroke="#245e94" strokeWidth="3" markerEnd="url(#gravity-arrow)" />
      <text x="260" y="70">Velocity</text><text x="255" y="175">Gravity inward</text><text x="45" y="35">Circular orbit: gravity turns velocity</text><text x="75" y="258">Larger orbit: lower circular speed</text>
    </>}
    {chapter === 4 && <>
      <text x="35" y="35">Compare at the same radius</text><path d="M55 215H400" stroke="#82938b" />
      <rect x="90" y="115" width="80" height="100" fill="#245e94" /><rect x="270" y="73.6" width="80" height="141.4" fill="#276b4b" />
      <text x="80" y="100">8 km/s</text><text x="260" y="60">11.3 km/s</text><text x="90" y="245">Circular</text><text x="280" y="245">Escape</text>
    </>}
  </svg>;
}
