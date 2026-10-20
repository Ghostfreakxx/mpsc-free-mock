import styles from "./lecture.module.css";

function PageVector({x,y,out}: {x:number;y:number;out:boolean}) {
  return <g><circle cx={x} cy={y} r="13" fill="white" stroke="#2878ac" strokeWidth="2"/>{out ? <circle cx={x} cy={y} r="3" fill="#2878ac"/> : <path d={`M${x-6} ${y-6} l12 12 m0 -12 l-12 12`} stroke="#2878ac" strokeWidth="2"/>}</g>;
}

export default function MagneticFieldDiagram({chapter}: {chapter:number}) {
  const titles=["Upward current: check each side", "From current element to observation point", "Long wire: perpendicular distance a", "Counterclockwise loop: center field out", "Opposite currents: midpoint fields add"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {chapter===0 && <>
      <path d="M220 194 V67 l-6 10 m6 -10 l6 10" fill="none" stroke="#247e68" strokeWidth="3"/><text x="234" y="83" fontSize="16">I up</text>
      <PageVector x={105} y={132} out/><PageVector x={337} y={132} out={false}/>
      <text x="67" y="174" fontSize="16">B out</text><text x="305" y="174" fontSize="16">B in</text>
      <text x="46" y="233" fontSize="16">Right thumb follows conventional current</text>
    </>}
    {chapter===1 && <>
      <path d="M50 170 H255" stroke="#52636b" strokeWidth="2"/><path d="M125 170 H175 l-8 -5 m8 5 l-8 5" fill="none" stroke="#247e68" strokeWidth="4"/>
      <path d="M150 170 L312 83" stroke="#e0783e" strokeWidth="2"/><PageVector x={312} y={83} out/>
      <text x="120" y="202" fontSize="16">dl along I</text><text x="218" y="107" fontSize="16">r</text><text x="329" y="87" fontSize="16">P</text>
      <text x="48" y="239" fontSize="16">dl cross r_hat: dB out of page</text>
    </>}
    {chapter===2 && <>
      <path d="M100 199 V63 l-6 10 m6 -10 l6 10" fill="none" stroke="#247e68" strokeWidth="3"/><text x="113" y="80" fontSize="16">I = 5 A</text>
      <path d="M100 136 H306" stroke="#52636b" strokeDasharray="5 5"/><PageVector x={306} y={136} out={false}/>
      <text x="167" y="124" fontSize="16">a = 5 cm</text><text x="320" y="168" fontSize="16">B in</text>
      <text x="48" y="239" fontSize="16">B = 20 microT; double a gives 10 microT</text>
    </>}
    {chapter===3 && <>
      <circle cx="120" cy="126" r="61" fill="none" stroke="#247e68" strokeWidth="3"/><PageVector x={120} y={126} out/>
      <path d="M134 67 L112 65 l8 -5 m-8 5 l7 6" fill="none" stroke="#e0783e" strokeWidth="3"/>
      <text x="44" y="211" fontSize="15">I = 4 A; R = 0.1 m</text>
      <text x="220" y="88" fontSize="16">B0 = 8 pi microT</text><text x="220" y="126" fontSize="16">At x = R on axis:</text><text x="220" y="163" fontSize="16">B = B0/(2 sqrt(2))</text>
      <text x="45" y="251" fontSize="15">Axis is perpendicular to the loop plane</text>
    </>}
    {chapter===4 && <>
      <path d="M115 191 V69 l-6 10 m6 -10 l6 10 M325 69 V191 l-6 -10 m6 10 l6 -10" fill="none" stroke="#247e68" strokeWidth="3"/>
      <PageVector x={220} y={130} out={false}/><text x="195" y="170" fontSize="16">midpoint</text>
      <text x="65" y="211" fontSize="15">5 A up</text><text x="285" y="211" fontSize="15">5 A down</text>
      <text x="44" y="248" fontSize="16">10 cm apart: 20 + 20 = 40 microT in</text>
    </>}
  </svg>;
}
