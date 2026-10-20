import styles from "./lecture.module.css";

function Resistor({x,y,label}: {x:number;y:number;label:string}) {
  return <g><rect x={x} y={y-12} width="62" height="24" fill="white" stroke="#247e68" strokeWidth="2"/><text x={x+31} y={y-23} textAnchor="middle" fontSize="15">{label}</text></g>;
}

export default function ResistorNetworkDiagram({chapter}: {chapter:number}) {
  const titles=["Same nodes, same voltage", "Series: one current", "Parallel: common voltage", "Mixed network across 12 V", "An ideal wire bypasses a resistor"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {chapter===1 ? <>
      <path d="M40 125 H400" stroke="#52636b" strokeWidth="2"/>
      <Resistor x={105} y={125} label="3 ohm"/><Resistor x={270} y={125} label="6 ohm"/>
      <text x="113" y="167" fontSize="16">6 V</text><text x="280" y="167" fontSize="16">12 V</text>
      <text x="47" y="216" fontSize="16">18 V total; I = 2 A; R_eq = 9 ohm</text>
      <text x="47" y="250" fontSize="15">No extra branch at the middle junction</text>
    </> : chapter===3 ? <>
      <path d="M25 142 H195 M195 142 V94 H395 V190 H195 V142 M395 142 H420" fill="none" stroke="#52636b" strokeWidth="2"/>
      <Resistor x={78} y={142} label="4 ohm"/><Resistor x={265} y={94} label="6 ohm"/><Resistor x={265} y={190} label="3 ohm"/>
      <text x="207" y="129" fontSize="15">4 V</text><text x="207" y="221" fontSize="15">I branches: 2/3 A, 4/3 A</text>
      <text x="33" y="251" fontSize="16">R_total = 6 ohm; I_total = 2 A</text>
    </> : <>
      <path d="M70 137 V87 H370 V180 H70 V137 M35 137 H70 M370 137 H405" fill="none" stroke="#52636b" strokeWidth="2"/>
      <Resistor x={185} y={87} label={chapter===2 ? "4 ohm" : "R1"}/>
      {chapter===4 ? <path d="M70 180 H370" stroke="#e0783e" strokeWidth="4"/> : <Resistor x={185} y={180} label={chapter===2 ? "12 ohm" : "R2"}/>}
      <circle cx="70" cy="137" r="4" fill="#2878ac"/><circle cx="370" cy="137" r="4" fill="#2878ac"/>
      <text x="43" y="133" fontSize="16">A</text><text x="385" y="133" fontSize="16">B</text>
      <text x="40" y="222" fontSize="16">{chapter===0 ? "Both resistors join nodes A and B" : chapter===2 ? "12 V: I1 = 3 A; I2 = 1 A" : "A and B become one node: V_R1 = 0"}</text>
      <text x="40" y="252" fontSize="15">{chapter===0 ? "Ideal wires can bend without changing nodes" : chapter===2 ? "I_total = 4 A; R_eq = 3 ohm" : "Finite resistor: I_R1 = 0"}</text>
    </>}
  </svg>;
}
