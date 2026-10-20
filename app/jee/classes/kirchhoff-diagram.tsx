import styles from "./lecture.module.css";

export default function KirchhoffDiagram({chapter}: {chapter:number}) {
  const titles=["Current balance at a junction", "Signs follow the direction of the walk", "Reference arrows for three branches", "Same arrows, signed solution", "Check the original circuit"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {chapter===0 && <>
      <path d="M45 140 H205 M205 140 L350 75 M205 140 L350 205" fill="none" stroke="#52636b" strokeWidth="3"/>
      <circle cx="205" cy="140" r="6" fill="#247e68"/>
      <path d="M125 135 l10 5 -10 5 M286 98 l12 -5 -4 12 M286 180 l12 5 -12 5" fill="none" stroke="#e0783e" strokeWidth="3"/>
      <text x="54" y="117" fontSize="16">5 A in</text><text x="320" y="57" fontSize="16">2 A out</text><text x="306" y="237" fontSize="16">3 A out</text>
      <text x="70" y="258" fontSize="16">Steady node: 5 = 2 + 3</text>
    </>}
    {chapter===1 && <>
      <text x="35" y="78" fontSize="16">Resistor: with arrow, -IR</text>
      <text x="35" y="119" fontSize="16">Resistor: against arrow, +IR</text>
      <text x="35" y="160" fontSize="16">Source: negative to positive, +E</text>
      <text x="35" y="201" fontSize="16">Source: positive to negative, -E</text>
      <text x="35" y="247" fontSize="16">Reverse the walk: reverse every sign</text>
    </>}
    {(chapter===2 || chapter===3) && <>
      <path d="M75 62 H355 M75 213 H355 M75 62 V155 M75 174 V213 M215 62 V213 M355 62 V155 M355 174 V213" fill="none" stroke="#52636b" strokeWidth="2"/>
      {[75,355].map(x=><g key={x}><rect x={x-10} y="90" width="20" height="34" fill="white" stroke="#247e68" strokeWidth="2"/><text x={x+17} y="113" fontSize="15">2 ohm</text><path d={`M${x-17} 155 H${x+17} M${x-9} 174 H${x+9}`} stroke="#52636b" strokeWidth="3"/><text x={x+20} y="158" fontSize="15">+</text><text x={x+20} y="183" fontSize="15">{x===75 ? "12 V" : "6 V"}</text></g>)}
      <rect x="205" y="108" width="20" height="40" fill="white" stroke="#2878ac" strokeWidth="2"/><text x="233" y="138" fontSize="15">4 ohm</text>
      <text x="219" y="54" fontSize="15">A</text><text x="219" y="232" fontSize="15">B</text>
      <path d="M40 163 V100 l-5 8 m5 -8 l5 8 M320 163 V100 l-5 8 m5 -8 l5 8 M185 103 V171 l-5 -8 m5 8 l5 -8" fill="none" stroke="#e0783e" strokeWidth="2"/>
      <text x="21" y="190" fontSize="15">I1</text><text x="299" y="190" fontSize="15">I2</text><text x="164" y="190" fontSize="15">I3</text>
      <text x="24" y="259" fontSize="15">{chapter===2 ? "I1 + I2 = I3; sources positive toward A" : "I1 = 2.4 A; I2 = -0.6 A; I3 = 1.8 A"}</text>
    </>}
    {chapter===4 && <>
      <text x="32" y="75" fontSize="16">Junction: 2.4 - 0.6 = 1.8 A</text>
      <text x="32" y="116" fontSize="16">Left loop: 12 - 4.8 - 7.2 = 0 V</text>
      <text x="32" y="157" fontSize="16">Right loop: 6 + 1.2 - 7.2 = 0 V</text>
      <text x="32" y="205" fontSize="16">Power: 28.8 = 3.6 + 25.2 W</text>
      <text x="32" y="251" fontSize="15">Supply = source absorption + resistor heating</text>
    </>}
  </svg>;
}
