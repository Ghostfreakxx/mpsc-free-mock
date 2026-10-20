import styles from "./lecture.module.css";

function Arm({x,y,label}: {x:number;y:number;label:string}) {
  return <g><rect x={x} y={y-10} width="52" height="20" fill="white" stroke="#247e68" strokeWidth="2"/><text x={x+26} y={y-18} fontSize="15" textAnchor="middle">{label}</text></g>;
}

export default function BridgeDiagram({chapter}: {chapter:number}) {
  const titles=["Detector joins the two midpoints", "Balance: P/Q = R/S", "Measure l from the X end", "Change the gap, then find the null", "Length uncertainty grows near the ends"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {chapter<2 && <>
      <path d="M55 138 V86 H380 V190 H55 V138 M25 138 H55 M380 138 H413 M220 86 V190" fill="none" stroke="#52636b" strokeWidth="2"/>
      <Arm x={109} y={86} label={chapter===0 ? "P" : "P = 2"}/><Arm x={288} y={86} label={chapter===0 ? "Q" : "Q = 3"}/>
      <Arm x={109} y={190} label={chapter===0 ? "R" : "R = 4"}/><Arm x={288} y={190} label={chapter===0 ? "S" : "S = 6"}/>
      <circle cx="220" cy="138" r="14" fill="white" stroke="#2878ac" strokeWidth="2"/><text x="220" y="143" textAnchor="middle" fontSize="15">G</text>
      <text x="30" y="129" fontSize="15">A</text><text x="393" y="129" fontSize="15">D</text><text x="231" y="82" fontSize="15">B</text><text x="231" y="210" fontSize="15">C</text>
      <text x="44" y="242" fontSize="15">{chapter===0 ? "Source across A-D; at null, V_B = V_C" : "10 V across A-D; B and C both at 6 V"}</text>
      <text x="44" y="263" fontSize="15">{chapter===0 ? "Detector current zero; outer currents can flow" : "Resistances in ohm; I_G = 0"}</text>
    </>}
    {chapter===2 && <>
      <path d="M45 162 V85 H395 V162 M220 85 V132 L185 162 M45 162 H395" fill="none" stroke="#52636b" strokeWidth="2"/>
      <Arm x={113} y={85} label="X = 2 ohm"/><Arm x={288} y={85} label="S = 3 ohm"/>
      <circle cx="220" cy="119" r="13" fill="white" stroke="#2878ac" strokeWidth="2"/><text x="220" y="124" textAnchor="middle" fontSize="15">G</text>
      <circle cx="185" cy="162" r="4" fill="#e0783e"/><text x="190" y="182" fontSize="15">J</text>
      <text x="82" y="190" fontSize="15">l = 40 cm</text><text x="249" y="190" fontSize="15">L-l = 60 cm</text>
      <text x="41" y="157" fontSize="15">A</text><text x="394" y="157" fontSize="15">D</text>
      <text x="44" y="229" fontSize="16">X/S = 40/60; X = 2 ohm</text>
      <text x="44" y="258" fontSize="15">Uniform wire; source across A-D</text>
    </>}
    {chapter===3 && <>
      <text x="32" y="75" fontSize="16">Left 2 ohm, right 3 ohm: l = 40 cm</text>
      <text x="32" y="120" fontSize="16">Swap gaps: left/right = 3/2</text>
      <text x="32" y="154" fontSize="16">New null: l = 60 cm</text>
      <text x="32" y="204" fontSize="16">Restore; left 2 || 2 = 1 ohm</text>
      <text x="32" y="242" fontSize="16">Left/right = 1/3: l = 25 cm</text>
    </>}
    {chapter===4 && <>
      <text x="32" y="75" fontSize="16">Same reading uncertainty: 0.1 cm</text>
      <text x="32" y="126" fontSize="16">At l = 40 cm: about 0.42%</text>
      <text x="32" y="172" fontSize="16">At l = 5 cm: about 2.1%</text>
      <text x="32" y="218" fontSize="15">Here S and L = 100 cm are treated as exact</text>
      <text x="32" y="251" fontSize="15">Check contacts, end effects and uniformity</text>
    </>}
  </svg>;
}
