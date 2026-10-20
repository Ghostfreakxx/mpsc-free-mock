import styles from "./lecture.module.css";

function DepthSymbol({x,y,out}: {x:number;y:number;out:boolean}) {
  return <g><circle cx={x} cy={y} r="11" fill="white" stroke="#e0783e" strokeWidth="2"/>{out ? <circle cx={x} cy={y} r="3" fill="#e0783e"/> : <path d={`M${x-4} ${y-4} l8 8 m0 -8 l-8 8`} stroke="#e0783e" strokeWidth="2"/>}</g>;
}

export default function LoopTorqueDiagram({chapter}: {chapter:number}) {
  const titles=["Opposite forces can create a couple", "Counterclockwise I: moment out", "Measure theta from the normal", "Energy distinguishes two zero-torque states", "Same wire length, different enclosed areas"];
  const energy=Array.from({length:61},(_,i)=>`${i ? "L" : "M"}${65+i*4.9} ${140+65*Math.cos(i*Math.PI/60)}`).join(" ");
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <defs><marker id="lt-green" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="#247e68"/></marker><marker id="lt-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="#2878ac"/></marker></defs>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {chapter===0 && <>
      <path d="M110 100 H300 V210 H110 Z" fill="none" stroke="#52636b" strokeWidth="3"/>
      <path d="M110 120 V142" stroke="#247e68" strokeWidth="3" markerEnd="url(#lt-green)"/>
      <path d="M300 191 V169" stroke="#247e68" strokeWidth="3" markerEnd="url(#lt-green)"/>
      <DepthSymbol x={110} y={155} out/><DepthSymbol x={300} y={155} out={false}/>
      <text x="20" y="160" fontSize="15">F out</text><text x="332" y="160" fontSize="15">F in</text>
      <path d="M127 65 H285" stroke="#2878ac" strokeWidth="2" markerEnd="url(#lt-blue)"/><text x="200" y="55" fontSize="15">B</text>
      <DepthSymbol x={182} y={155} out/><text x="200" y="160" fontSize="15">mu out</text>
      <text x="18" y="252" fontSize="15">Net force = 0; torque vector points up</text>
    </>}
    {chapter===1 && <>
      <circle cx="150" cy="146" r="65" fill="none" stroke="#52636b" strokeWidth="3"/>
      <path d="M164 81 H136" stroke="#247e68" strokeWidth="3" markerEnd="url(#lt-green)"/>
      <text x="178" y="72" fontSize="15">I</text>
      <DepthSymbol x={150} y={146} out/><text x="177" y="151" fontSize="15">mu</text>
      <text x="245" y="125" fontSize="15">N = 100; I = 0.20 A</text>
      <text x="245" y="155" fontSize="15">A = 0.004 m^2</text>
      <text x="18" y="250" fontSize="15">mu = NIA = 0.08 A m^2</text>
    </>}
    {chapter===2 && <>
      <path d="M133 82 L207 208" stroke="#52636b" strokeWidth="4"/>
      <text x="90" y="228" fontSize="15">plane, seen edge-on</text>
      <path d="M170 145 L281 81" stroke="#247e68" strokeWidth="3" markerEnd="url(#lt-green)"/><text x="289" y="78" fontSize="15">mu, normal</text>
      <path d="M170 145 H362" stroke="#2878ac" strokeWidth="2" markerEnd="url(#lt-blue)"/><text x="373" y="150" fontSize="15">B</text>
      <path d="M220 145 A50 50 0 0 0 213.3 120" fill="none" stroke="#e0783e" strokeWidth="2"/>
      <text x="227" y="131" fontSize="15">30 deg</text>
      <text x="18" y="252" fontSize="15">Plane angle 60 deg: torque = 0.020 N m</text>
    </>}
    {chapter===3 && <>
      <path d="M65 55 V216 M65 140 H385" stroke="#52636b" strokeWidth="2"/>
      <path d={energy} fill="none" stroke="#2878ac" strokeWidth="3"/>
      <text x="19" y="77" fontSize="15">+mu B</text><text x="19" y="211" fontSize="15">-mu B</text>
      <text x="65" y="237" fontSize="15">0</text><text x="195" y="237" fontSize="15">90</text><text x="341" y="237" fontSize="15">180 deg</text>
      <text x="82" y="184" fontSize="15">stable</text><text x="265" y="62" fontSize="15">unstable</text>
      <text x="18" y="260" fontSize="15">U = -mu B cos(theta); fixed mu and B</text>
    </>}
    {chapter===4 && <>
      <rect x="63" y="99" width="100" height="100" fill="none" stroke="#247e68" strokeWidth="3"/>
      <circle cx="303" cy="148" r="63.66" fill="none" stroke="#2878ac" strokeWidth="3"/>
      <text x="59" y="66" fontSize="15">One square turn</text><text x="245" y="66" fontSize="15">One circular turn</text>
      <text x="61" y="225" fontSize="15">mu = 0.020</text><text x="248" y="225" fontSize="15">mu = 0.0255</text>
      <text x="18" y="252" fontSize="15">Same 0.40 m wire, 2 A; moments in A m^2</text>
    </>}
  </svg>;
}
