import styles from "./lecture.module.css";

export default function WireForcesDiagram({chapter}: {chapter:number}) {
  const titles=["Conventional current sets the force", "Magnetic support must point upward", "Uniform B: use endpoint displacement", "Same-direction currents attract", "Unequal currents: balance off-center"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <defs><marker id="wf-green" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="#247e68"/></marker><marker id="wf-orange" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="#e0783e"/></marker></defs>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {chapter<2 && <>
      {[75,200,325].flatMap(x=>[85,135,185].map(y=><path key={`${x}-${y}`} d={`M${x-4} ${y-4} l8 8 m0 -8 l-8 8`} stroke="#2878ac" strokeWidth="2"/>))}
      <path d="M80 144 H325" stroke="#52636b" strokeWidth="5"/>
      <path d="M92 157 H150" stroke="#247e68" strokeWidth="3" markerEnd="url(#wf-green)"/><text x="99" y="180" fontSize="15">I right</text>
      <path d="M210 134 V65" stroke="#e0783e" strokeWidth="3" markerEnd="url(#wf-orange)"/><text x="224" y="70" fontSize="15">F magnetic</text>
      <text x="333" y="139" fontSize="15">B in</text>
      {chapter===1 && <><path d="M210 154 V221" stroke="#e0783e" strokeWidth="3" markerEnd="url(#wf-orange)"/><text x="224" y="220" fontSize="15">mg</text></>}
      <text x="18" y="253" fontSize="15">{chapter===0 ? "Reverse I or B: reverse F" : "0.012 kg, 0.30 m, 0.40 T: I = 1 A"}</text>
    </>}
    {chapter===2 && <>
      <path d="M90 185 A110 110 0 0 1 310 185" fill="none" stroke="#2878ac" strokeWidth="4"/>
      <path d="M124 106 L149 91" fill="none" stroke="#247e68" strokeWidth="3" markerEnd="url(#wf-green)"/>
      <circle cx="90" cy="185" r="5" fill="#52636b"/><circle cx="310" cy="185" r="5" fill="#52636b"/>
      <text x="70" y="210" fontSize="15">start</text><text x="296" y="210" fontSize="15">end</text>
      <path d="M96 185 H304" stroke="#247e68" strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#wf-green)"/>
      <path d="M200 175 V112" stroke="#e0783e" strokeWidth="3" markerEnd="url(#wf-orange)"/><text x="211" y="132" fontSize="15">net F up</text>
      <text x="337" y="115" fontSize="15">B in</text>
      <text x="119" y="231" fontSize="15">endpoint span = 2R</text>
      <text x="18" y="255" fontSize="15">3 A, R = 0.10 m, B = 0.20 T: F = 0.12 N</text>
    </>}
    {chapter===3 && <>
      <path d="M120 211 V72 M315 211 V72" stroke="#52636b" strokeWidth="4"/>
      {[120,315].map(x=><path key={x} d={`M${x} 112 V72`} stroke="#247e68" strokeWidth="3" markerEnd="url(#wf-green)"/>)}
      <text x="76" y="62" fontSize="15">I1 up</text><text x="298" y="62" fontSize="15">I2 up</text>
      {["M126 153 H188","M309 153 H247"].map(d=><path key={d} d={d} stroke="#e0783e" strokeWidth="3" markerEnd="url(#wf-orange)"/>)}
      <text x="133" y="136" fontSize="15">F1</text><text x="271" y="136" fontSize="15">F2</text>
      <path d="M123 226 H312" stroke="#52636b" strokeDasharray="4 4"/><text x="211" y="245" fontSize="15">d</text>
      <text x="149" y="190" fontSize="15">5 A, 8 A, 4 cm</text>
      <text x="18" y="266" fontSize="15">F/L = 0.0002 N/m; reverse one: repel</text>
    </>}
    {chapter===4 && <>
      {[90,186,330].map((x,i)=><g key={x}><path d={`M${x} 200 V80`} stroke="#52636b" strokeWidth="4"/><path d={`M${x} 115 V80`} stroke="#247e68" strokeWidth="3" markerEnd="url(#wf-green)"/><text x={x-16} y="62" fontSize="15">{["4 A","2 A","6 A"][i]}</text></g>)}
      {["M178 146 H133","M194 146 H240"].map(d=><path key={d} d={d} stroke="#e0783e" strokeWidth="3" markerEnd="url(#wf-orange)"/>)}
      <path d="M92 212 H184 M188 212 H328" stroke="#52636b" strokeDasharray="4 4"/>
      <text x="111" y="233" fontSize="15">0.10 m</text><text x="226" y="233" fontSize="15">0.15 m</text>
      <text x="18" y="257" fontSize="15">Equal attractions; lateral balance unstable</text>
    </>}
  </svg>;
}
