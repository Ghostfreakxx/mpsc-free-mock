import styles from "./lecture.module.css";

export default function CellDiagram({chapter}: {chapter:number}) {
  const titles=["A real cell: source plus resistance", "Discharge: energy reaches the load", "Terminal voltage versus discharge current", "Maximum power versus efficiency", "Two identical cells: two arrangements"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {chapter<2 && <>
      <rect x="58" y="70" width="307" height="108" fill="none" stroke="#b4ccc4" strokeDasharray="5 5"/>
      <path d="M25 125 H126 M145 125 H235 M295 125 H413 M126 108 V142 M145 96 V154" fill="none" stroke="#52636b" strokeWidth="3"/>
      <rect x="235" y="113" width="60" height="24" fill="white" stroke="#247e68" strokeWidth="2"/>
      <text x="115" y="87" fontSize="16">EMF E</text><text x="261" y="88" fontSize="16">r</text>
      <text x="42" y="117" fontSize="16">-</text><text x="374" y="117" fontSize="16">+</text>
      <text x="71" y="205" fontSize="16">{chapter===0 ? "Open circuit: I = 0; V_terminal = E" : "E = 12 V; r = 1 ohm; R = 5 ohm"}</text>
      <text x="71" y="244" fontSize="16">{chapter===0 ? "EMF supplies energy per unit charge" : "I = 2 A; V_terminal = 10 V"}</text>
    </>}
    {chapter===2 && <>
      <path d="M70 205 H385 M70 205 V53" fill="none" stroke="#52636b" strokeWidth="2"/>
      <path d="M70 67 L360 183" stroke="#247e68" strokeWidth="3"/>
      <text x="21" y="64" fontSize="16">V</text><text x="383" y="228" fontSize="16">I</text>
      <text x="82" y="67" fontSize="15">intercept = E</text><text x="205" y="115" fontSize="16">slope = -r</text>
      <text x="72" y="257" fontSize="15">Charging at 1 A: V = 12 + 1 = 13 V</text>
    </>}
    {chapter===3 && <>
      <text x="35" y="75" fontSize="16">R = 5 ohm: load 20 W, internal 4 W</text>
      <rect x="35" y="94" width="280" height="19" fill="#247e68"/><rect x="315" y="94" width="56" height="19" fill="#e0783e"/>
      <text x="35" y="155" fontSize="16">R = r = 1 ohm: 36 W in each</text>
      <rect x="35" y="174" width="168" height="19" fill="#247e68"/><rect x="203" y="174" width="168" height="19" fill="#e0783e"/>
      <text x="35" y="230" fontSize="15">Bars show the share of source power</text>
      <text x="35" y="255" fontSize="15">At maximum load power: efficiency = 50%</text>
    </>}
    {chapter===4 && <>
      <text x="35" y="70" fontSize="16">Each: E = 1.5 V, r = 0.5 ohm</text>
      <text x="35" y="116" fontSize="16">Aiding series</text><text x="249" y="116" fontSize="16">Parallel</text>
      <text x="35" y="151" fontSize="16">E_eq = 3 V</text><text x="249" y="151" fontSize="16">E_eq = 1.5 V</text>
      <text x="35" y="185" fontSize="16">r_eq = 1 ohm</text><text x="249" y="185" fontSize="16">r_eq = 0.25 ohm</text>
      <text x="35" y="219" fontSize="16">I = 1 A</text><text x="249" y="219" fontSize="16">I = 2/3 A</text>
      <text x="35" y="255" fontSize="15">Identical cells; same polarity; load R = 2 ohm</text>
    </>}
  </svg>;
}
