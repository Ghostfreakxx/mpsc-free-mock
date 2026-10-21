import styles from "./lecture.module.css";

export default function CapacitorDiagram({chapter}: {chapter:number}) {
  const titles=["Equal opposite plate charges", "Area and separation set capacitance", "Series: common Q, divided voltage", "Same geometry change, different constraint", "Same dielectric, different connection"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {(chapter===0 || chapter===1) && <>
      <line x1="135" y1="65" x2="135" y2="175" stroke="#247e68" strokeWidth="6"/><line x1="305" y1="65" x2="305" y2="175" stroke="#2878ac" strokeWidth="6"/>
      {[87,120,153].map(y=><g key={y}><text x="99" y={y+5} fontSize="16">+</text><text x="323" y={y+5} fontSize="16">-</text><path d={`M160 ${y} H280 l-9 -5 m9 5 l-9 5`} fill="none" stroke="#718780" strokeWidth="2"/></g>)}
      {chapter===0 ? <><text x="52" y="212" fontSize="16">C = 3 microF; V = 4 V; Q = 12 microC</text><text x="76" y="246" fontSize="16">Total net charge = +Q - Q = 0</text></> : <><text x="169" y="193" fontSize="16">d = 1 mm</text><text x="60" y="224" fontSize="16">A = 0.02 m squared; C = 177 pF</text><text x="76" y="252" fontSize="15">At 12 V: E = 12000 N/C</text></>}
    </>}
    {chapter===2 && <>
      <path d="M45 118 H115 M130 118 H280 M295 118 H395 M115 85 V151 M130 85 V151 M280 85 V151 M295 85 V151" fill="none" stroke="#247e68" strokeWidth="3"/>
      <text x="73" y="65" fontSize="16">2 microF</text><text x="247" y="65" fontSize="16">3 microF</text>
      <text x="85" y="180">6 V</text><text x="258" y="180">4 V</text>
      <text x="61" y="217" fontSize="16">Ceq = 1.2 microF; Q = 12 microC</text><text x="61" y="249" fontSize="16">Voltage check: 6 V + 4 V = 10 V</text>
    </>}
    {chapter===3 && <>
      <text x="44" y="64" fontSize="16">Doubling the plate separation</text>
      <text x="38" y="106" fontSize="16">Disconnected</text><text x="244" y="106" fontSize="16">Battery connected</text>
      <text x="38" y="145" fontSize="16">Q fixed</text><text x="244" y="145" fontSize="16">V fixed</text>
      <text x="38" y="179" fontSize="16">C becomes C/2</text><text x="244" y="179" fontSize="16">C becomes C/2</text>
      <text x="38" y="215" fontSize="16">U doubles</text><text x="244" y="215" fontSize="16">U halves</text>
      <text x="67" y="254" fontSize="15">Include the source in the energy balance</text>
    </>}
    {chapter===4 && <>
      <text x="32" y="65" fontSize="16">Full insertion: kappa = 3; C = 6 microF</text>
      <text x="32" y="109" fontSize="16">Disconnected</text><text x="240" y="109" fontSize="16">10 V battery</text>
      <text x="32" y="145" fontSize="16">Q = 20 microC</text><text x="240" y="145" fontSize="16">Q = 60 microC</text>
      <text x="32" y="179" fontSize="16">V = 3.33 V</text><text x="240" y="179" fontSize="16">V = 10 V</text>
      <text x="32" y="214" fontSize="16">U = 33.3 microJ</text><text x="240" y="214" fontSize="16">U = 300 microJ</text>
      <text x="49" y="254" fontSize="15">Start each case from C0 = 2 microF, V0 = 10 V</text>
    </>}
  </svg>;
}
