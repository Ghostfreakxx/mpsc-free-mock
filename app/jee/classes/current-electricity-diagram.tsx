import styles from "./lecture.module.css";

export default function CurrentElectricityDiagram({chapter}: {chapter:number}) {
  const titles=["Charge crossing a section", "Current density and drift", "Read the graph axes", "Geometry versus material", "Power follows the constraint"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {chapter===0 && <><line x1="45" y1="124" x2="395" y2="124" stroke="#247e68" strokeWidth="20"/><line x1="215" y1="62" x2="215" y2="190" stroke="#2878ac" strokeWidth="3"/><text x="178" y="52" fontSize="16">section</text>{[90,145,260,315].map((x,i)=><text key={x} x={x} y="112" fontSize="22">{i<2?"→":"←"}</text>)}<text x="102" y="224" fontSize="16">I = dQ/dt</text><text x="87" y="253" fontSize="15">conventional current opposite electron drift</text></>}
    {chapter===1 && <><line x1="55" y1="118" x2="385" y2="118" stroke="#247e68" strokeWidth="18"/><line x1="88" y1="75" x2="88" y2="162" stroke="#2878ac" strokeWidth="3"/><line x1="352" y1="75" x2="352" y2="162" stroke="#2878ac" strokeWidth="3"/><path d="M112 96 H330 l-10 -6 m10 6 l-10 6" fill="none" stroke="#e0783e" strokeWidth="3"/><text x="132" y="73" fontSize="16">drift direction</text><text x="74" y="205" fontSize="16">J = I/A = ne v_d</text><text x="72" y="238" fontSize="16">J = sigma E</text></>}
    {chapter===2 && <><line x1="80" y1="214" x2="385" y2="214" stroke="#52636b"/><line x1="80" y1="214" x2="80" y2="55" stroke="#52636b"/><path d="M95 202 L360 72" fill="none" stroke="#e0783e" strokeWidth="4"/><text x="22" y="65" fontSize="16">V</text><text x="365" y="238" fontSize="16">I</text><text x="202" y="168" fontSize="16">slope = R</text><text x="119" y="258" fontSize="15">V-versus-I for an ohmic resistor</text></>}
    {chapter===3 && <><text x="34" y="70" fontSize="16">R = rho L/A</text><text x="34" y="116" fontSize="16">longer wire: R increases</text><text x="34" y="151" fontSize="16">larger area: R decreases</text><text x="34" y="186" fontSize="16">hot metal: rho usually increases</text><text x="34" y="230" fontSize="16">Volume fixed: L doubles, A halves, R x 4</text></>}
    {chapter===4 && <><text x="38" y="74" fontSize="16">P = VI = I squared R</text><text x="38" y="116" fontSize="16">fixed I: larger R, larger P</text><text x="38" y="158" fontSize="16">P = V squared/R</text><text x="38" y="200" fontSize="16">fixed V: smaller R, larger P</text><text x="38" y="242" fontSize="16">6 ohm, 2 A: 24 W; 5 minutes: 7200 J</text></>}
  </svg>;
}
