import styles from "./lecture.module.css";

export default function PotentialDiagram({chapter}: {chapter:number}) {
  const titles=["Potential change versus energy change", "Signed potentials add as scalars", "Field is minus the potential slope", "Inside a conductor: constant, not zero", "Dipole energy and orientation"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {chapter===0 && <>
      <circle cx="85" cy="115" r="25" fill="#c8e7dc"/><circle cx="355" cy="115" r="25" fill="#d9edf7"/>
      <text x="61" y="75">30 V</text><text x="332" y="75">10 V</text>
      <path d="M122 115 H307 l-12 -7 m12 7 l-12 7" stroke="#247e68" strokeWidth="3" fill="none"/>
      <text x="152" y="98" fontSize="16">q = +2 microC</text><text x="84" y="182">Delta V = -20 V</text>
      <text x="60" y="221" fontSize="16">Delta U = -40 microJ</text><text x="60" y="249" fontSize="16">Work by field = +40 microJ</text>
    </>}
    {chapter===1 && <>
      <circle cx="80" cy="112" r="23" fill="#c8e7dc"/><circle cx="355" cy="112" r="23" fill="#d9edf7"/>
      <text x="73" y="119">+</text><text x="348" y="119">-</text>
      <text x="37" y="72" fontSize="16">+2 nanoC</text><text x="312" y="72" fontSize="16">-1 nanoC</text>
      <circle cx="220" cy="112" r="5" fill="#c05d28"/><text x="206" y="148" fontSize="16">P</text>
      <text x="101" y="94" fontSize="14">0.20 m</text><text x="260" y="94" fontSize="14">0.20 m</text>
      <text x="82" y="208">+90 V + (-45 V)</text><text x="134" y="244">Vtotal = 45 V</text>
    </>}
    {chapter===2 && <>
      <path d="M65 62 V185 H365" stroke="#718780" fill="none"/>
      <path d="M65 78 L345 153" stroke="#2878ac" strokeWidth="3" fill="none"/>
      <text x="25" y="81" fontSize="14">100</text><text x="40" y="53" fontSize="15">V</text><text x="374" y="190" fontSize="15">x</text>
      <text x="113" y="84" fontSize="16">V = 100 - 20x</text>
      <path d="M156 162 H279 l-10 -6 m10 6 l-10 6" stroke="#247e68" fill="none" strokeWidth="3"/>
      <text x="89" y="222" fontSize="16">Slope = -20 V/m</text><text x="89" y="250" fontSize="16">Ex = +20 N/C, to the right</text>
    </>}
    {chapter===3 && <>
      <circle cx="124" cy="135" r="58" fill="#d9edf7" stroke="#2878ac" strokeWidth="3"/>
      <circle cx="124" cy="135" r="87" fill="none" stroke="#247e68" strokeDasharray="5 5"/>
      <text x="89" y="124" fontSize="16">E = 0</text><text x="86" y="150" fontSize="16">V = 90 V</text>
      <text x="241" y="92" fontSize="16">Q = 1 nanoC</text><text x="241" y="122" fontSize="16">R = 0.10 m</text>
      <text x="241" y="171" fontSize="15">At r = 0.20 m:</text><text x="241" y="198" fontSize="16">V = 45 V</text>
      <text x="66" y="250" fontSize="15">Isolated sphere; V(infinity) = 0</text>
    </>}
    {chapter===4 && <>
      <path d="M70 67 H365 l-12 -7 m12 7 l-12 7" stroke="#247e68" fill="none" strokeWidth="3"/>
      <text x="211" y="53" fontSize="16">E</text>
      <path d="M65 113 H175 l-10 -6 m10 6 l-10 6 M375 113 H265 l10 -6 m-10 6 l10 6" stroke="#2878ac" fill="none" strokeWidth="3"/>
      <text x="110" y="102" fontSize="15">p</text><text x="315" y="102" fontSize="15">p</text>
      <text x="45" y="154" fontSize="15">Parallel: U = -pE</text><text x="244" y="154" fontSize="15">Opposite: U = +pE</text>
      <text x="45" y="181" fontSize="15">Stable</text><text x="244" y="181" fontSize="15">Unstable</text>
      <text x="66" y="222" fontSize="16">External quasistatic work = 2pE</text><text x="138" y="249" fontSize="16">Example: +4 microJ</text>
    </>}
  </svg>;
}
