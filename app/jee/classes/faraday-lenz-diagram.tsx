import styles from "./lecture.module.css";

export default function FaradayLenzDiagram({chapter}: {chapter:number}) {
  const titles=["Flux angle is measured from the normal", "Emf follows the change of linkage", "Oppose the change in inward flux", "Flux per turn: slope sets the emf", "Curved B(t): use the instantaneous slope"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <defs><marker id="fl-blue" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7" fill="#2878ac"/></marker><marker id="fl-green" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7" fill="#247e68"/></marker></defs>
    <text x="16" y="27" fontSize="16">{titles[chapter]}</text>
    {chapter===0 && <>
      <ellipse cx="193" cy="171" rx="102" ry="34" fill="#f3f7f6" stroke="#52636b" strokeWidth="2"/>
      <path d="M193 171 V58" stroke="#247e68" strokeWidth="3" markerEnd="url(#fl-green)"/><text x="153" y="59" fontSize="15">n</text>
      <path d="M193 171 L324 95" stroke="#2878ac" strokeWidth="3" markerEnd="url(#fl-blue)"/><text x="336" y="94" fontSize="15">B</text>
      <path d="M193 121 A50 50 0 0 1 236 146" fill="none" stroke="#e0783e" strokeWidth="2"/><text x="223" y="118" fontSize="15">60 deg</text>
      <text x="42" y="237" fontSize="15">Phi = 0.4 x 0.02 x cos60 = 0.004 Wb</text>
    </>}
    {chapter===1 && <>
      <path d="M65 60 V202 H360" fill="none" stroke="#52636b" strokeWidth="2"/><text x="20" y="57" fontSize="15">B (T)</text><text x="363" y="217" fontSize="15">t (s)</text>
      <path d="M65 202 L322 81" stroke="#2878ac" strokeWidth="3"/><text x="215" y="62" fontSize="15">Delta B = 0.3 T</text><text x="299" y="223" fontSize="15">0.2</text>
      <text x="31" y="253" fontSize="15">N = 80; A = 0.005 m2; |emf| = 0.6 V</text>
    </>}
    {chapter===2 && <>
      <text x="23" y="67" fontSize="15">Into-page B grows</text><text x="240" y="67" fontSize="15">Into-page B falls</text>
      <circle cx="111" cy="141" r="52" fill="none" stroke="#52636b" strokeWidth="2"/><circle cx="325" cy="141" r="52" fill="none" stroke="#52636b" strokeWidth="2"/>
      <text x="102" y="148" fontSize="23" fill="#2878ac">x</text><text x="316" y="148" fontSize="23" fill="#2878ac">x</text>
      <path d="M133 89 H91" stroke="#247e68" strokeWidth="3" markerEnd="url(#fl-green)"/><path d="M303 89 H345" stroke="#247e68" strokeWidth="3" markerEnd="url(#fl-green)"/>
      <text x="34" y="218" fontSize="15">Counterclockwise</text><text x="282" y="218" fontSize="15">Clockwise</text><text x="35" y="248" fontSize="15">Directions viewed facing the page</text>
    </>}
    {chapter===3 && <>
      <path d="M62 55 V201 H364" fill="none" stroke="#52636b" strokeWidth="2"/><text x="15" y="50" fontSize="15">Phi</text><text x="369" y="206" fontSize="15">t (s)</text>
      <polyline points="62,201 134,86 207,86 352,201" fill="none" stroke="#2878ac" strokeWidth="3"/>
      <text x="76" y="73" fontSize="15">0.006 Wb</text><text x="119" y="224" fontSize="15">0.3</text><text x="192" y="224" fontSize="15">0.6</text><text x="337" y="224" fontSize="15">1.2</text>
      <text x="49" y="252" fontSize="15">emf: -1 V</text><text x="170" y="252" fontSize="15">0 V</text><text x="279" y="252" fontSize="15">+0.5 V</text>
    </>}
    {chapter===4 && <>
      <path d="M60 57 V201 H352" fill="none" stroke="#52636b" strokeWidth="2"/><text x="15" y="51" fontSize="15">B (T)</text><text x="359" y="205" fontSize="15">t (s)</text>
      <polyline points={Array.from({length:21},(_,i)=>`${60+i*13},${201-(0.1+0.2*(i/10)**2)*140}`).join(" ")} fill="none" stroke="#2878ac" strokeWidth="3"/>
      <path d="M249 136 L345 54" stroke="#e0783e" strokeWidth="2"/><text x="84" y="79" fontSize="15">B = 0.1 + 0.2t2</text><text x="271" y="226" fontSize="15">t = 2 s</text>
      <text x="24" y="254" fontSize="15">dB/dt = 0.8 T/s; emf = -0.96 V at 2 s</text>
    </>}
  </svg>;
}
