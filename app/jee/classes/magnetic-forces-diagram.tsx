import styles from "./lecture.module.css";

export default function MagneticForcesDiagram({chapter}: {chapter:number}) {
  const titles=["Positive charge: v right, B into page", "Magnetic force turns velocity", "A proton in a uniform field", "A circle plus axial motion", "Crossed fields select one speed"];
  const helix=Array.from({length:161},(_,i)=>`${i ? "L" : "M"}${65+i*1.85} ${134+45*Math.sin(i*Math.PI/20)}`).join(" ");
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <defs><marker id="mf-green" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="#247e68"/></marker><marker id="mf-orange" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="#e0783e"/></marker></defs>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {(chapter===0 || chapter===4) && <>
      {[75,195,315].flatMap(x=>[82,140,198].map(y=><path key={`${x}-${y}`} d={`M${x-4} ${y-4} l8 8 m0 -8 l-8 8`} stroke="#2878ac" strokeWidth="2"/>))}
      <circle cx="160" cy="140" r="10" fill="#247e68"/><text x="140" y="166" fontSize="15">+q</text>
      <path d="M171 140 H275" stroke="#247e68" strokeWidth="3" markerEnd="url(#mf-green)"/><text x="222" y="129" fontSize="15">v</text>
      <path d="M160 128 V63" stroke="#e0783e" strokeWidth="3" markerEnd="url(#mf-orange)"/><text x="172" y="65" fontSize="15">F magnetic</text>
      {chapter===4 && <><path d="M160 153 V218" stroke="#e0783e" strokeWidth="3" markerEnd="url(#mf-orange)"/><text x="173" y="219" fontSize="15">F electric; E down</text></>}
      <text x="20" y="254" fontSize="15">{chapter===0 ? "Negative charge: reverse the force" : "E/B = 6000/0.020 = 300000 m/s"}</text>
      <text x="337" y="143" fontSize="15">B in</text>
    </>}
    {(chapter===1 || chapter===2) && <>
      <circle cx="178" cy="142" r="75" fill="none" stroke="#2878ac" strokeWidth="2"/>
      <circle cx="253" cy="142" r="8" fill="#247e68"/>
      <path d="M253 132 V65" stroke="#247e68" strokeWidth="3" markerEnd="url(#mf-green)"/><text x="267" y="70" fontSize="15">v</text>
      <path d="M241 142 H182" stroke="#e0783e" strokeWidth="3" markerEnd="url(#mf-orange)"/>
      <text x="192" y="128" fontSize="15">F inward</text>
      <path d="M178 147 H251" stroke="#52636b" strokeDasharray="4 4"/><text x="211" y="166" fontSize="15">r</text>
      <text x="283" y="140" fontSize="15">B into page</text>
      <text x="20" y="245" fontSize="15">{chapter===1 ? "F perpendicular to v: power = 0" : "r = 5.22 cm; T = 0.328 microseconds"}</text>
    </>}
    {chapter===3 && <>
      <path d="M45 134 H395" stroke="#52636b" strokeDasharray="4 4"/>
      <path d={helix} fill="none" stroke="#2878ac" strokeWidth="3"/>
      <path d="M75 210 H149" stroke="#247e68" strokeWidth="2" markerEnd="url(#mf-green)"/><text x="86" y="232" fontSize="15">one pitch</text>
      <path d="M290 65 H385" stroke="#247e68" strokeWidth="2" markerEnd="url(#mf-green)"/><text x="278" y="51" fontSize="15">B, v parallel</text>
      <text x="18" y="254" fontSize="15">Side projection: radius uses v perpendicular</text>
    </>}
  </svg>;
}
