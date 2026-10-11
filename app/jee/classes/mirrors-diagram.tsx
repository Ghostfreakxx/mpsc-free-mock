import styles from "./lecture.module.css";

export default function MirrorsDiagram({chapter}: {chapter:number}) {
  const titles = ["Measure reflection angles from the normal", "The pole is zero; rightward is positive", "Real rays meet: v = -15 cm", "Dashed extensions meet behind the mirror", "Convex mirror: virtual and diminished"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 290" role="img" aria-label={titles[chapter]}>
    <defs>{["#2878ac", "#247e68", "#ce5064"].map((color,i)=><marker key={color} id={`mir-${i}`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7" fill={color}/></marker>)}</defs>
    <text x="12" y="25" fontSize="15">{titles[chapter]}</text>
    {chapter===0 && <>
      <path d="M240 48 V241" stroke="#52636b" strokeWidth="5"/>
      <path d="M45 145 H325" stroke="#52636b" strokeDasharray="5 4"/><text x="48" y="137" fontSize="14">Normal</text>
      <path d="M89 58 L235 142" stroke="#2878ac" strokeWidth="3" markerEnd="url(#mir-0)"/>
      <path d="M240 145 L91 231" stroke="#247e68" strokeWidth="3" markerEnd="url(#mir-1)"/>
      <text x="157" y="130" fontSize="15">i = 30</text><text x="157" y="173" fontSize="15">r = 30</text>
      <text x="267" y="79" fontSize="14">Mirror</text><text x="267" y="102" fontSize="14">surface</text>
      <text x="39" y="270" fontSize="15">60 degrees to surface = 30 to normal</text>
    </>}
    {chapter===1 && <>
      <text x="24" y="60" fontSize="15">Concave: focus in front, f &lt; 0</text>
      <path d="M27 108 H397" stroke="#52636b"/><path d="M198 73 Q222 108 198 143" fill="none" stroke="#52636b" strokeWidth="4"/>
      {[{x:70,t:"C"},{x:140,t:"F"},{x:210,t:"P = 0"}].map(p=><g key={p.t}><circle cx={p.x} cy="108" r="3" fill="#247e68"/><text x={p.x} y="163" textAnchor="middle" fontSize="14">{p.t}</text></g>)}
      <text x="24" y="191" fontSize="15">Convex: virtual focus behind, f &gt; 0</text>
      <path d="M27 222 H397" stroke="#52636b"/><path d="M222 196 Q198 222 222 248" fill="none" stroke="#52636b" strokeWidth="4"/>
      {[{x:210,t:"P = 0"},{x:280,t:"F"},{x:350,t:"C"}].map(p=><g key={p.t}><circle cx={p.x} cy="222" r="3" fill="#247e68"/><text x={p.x} y="268" textAnchor="middle" fontSize="14">{p.t}</text></g>)}
      <path d="M306 92 H391" stroke="#2878ac" strokeWidth="2" markerEnd="url(#mir-0)"/><text x="322" y="79" fontSize="14">+x</text>
    </>}
    {chapter===2 && <>
      <text x="23" y="55" fontSize="14">Paraxial schematic: u = -30, f = -10 cm</text>
      <path d="M22 170 H414" stroke="#52636b"/><path d="M338 87 Q362 170 338 238" fill="none" stroke="#52636b" strokeWidth="4"/>
      <path d="M50 170 V134" stroke="#2878ac" strokeWidth="3" markerEnd="url(#mir-0)"/>
      <path d="M200 170 V188" stroke="#ce5064" strokeWidth="3" markerEnd="url(#mir-2)"/>
      <path d="M50 134 H350 L156 203.84" fill="none" stroke="#247e68" strokeWidth="2" markerEnd="url(#mir-1)"/>
      <path d="M50 134 L350 170 L156 193.28" fill="none" stroke="#2878ac" strokeWidth="2"/>
      <text x="30" y="122" fontSize="14">Object</text><text x="168" y="226" fontSize="14">Image</text>
      <text x="140" y="164" fontSize="14">C</text><text x="248" y="192" fontSize="14">F</text><text x="356" y="189" fontSize="14">P</text>
      <text x="41" y="269" fontSize="15">m = -0.5: real, inverted, half-size</text>
    </>}
    {chapter===3 && <>
      <text x="23" y="55" fontSize="14">Paraxial schematic: u = -5, f = -10 cm</text>
      <path d="M23 175 H405" stroke="#52636b"/><path d="M208 88 Q232 175 208 244" fill="none" stroke="#52636b" strokeWidth="4"/>
      <path d="M160 175 V150" stroke="#2878ac" strokeWidth="3" markerEnd="url(#mir-0)"/>
      <path d="M340 175 V125" stroke="#ce5064" strokeWidth="3" markerEnd="url(#mir-2)"/>
      <path d="M160 150 H220 L40 187.5" fill="none" stroke="#247e68" strokeWidth="2"/>
      <path d="M220 150 L340 125" stroke="#247e68" strokeWidth="2" strokeDasharray="5 4"/>
      <path d="M160 150 L220 175 L40 250" fill="none" stroke="#2878ac" strokeWidth="2"/>
      <path d="M220 175 L340 125" stroke="#2878ac" strokeWidth="2" strokeDasharray="5 4"/>
      <text x="94" y="168" fontSize="14">F</text><text x="223" y="198" fontSize="14">P</text>
      <text x="124" y="138" fontSize="14">Object</text><text x="302" y="111" fontSize="14">Image</text>
      <text x="56" y="278" fontSize="15">v = +10 cm; m = +2, upright</text>
    </>}
    {chapter===4 && <>
      <text x="23" y="55" fontSize="14">Paraxial schematic: u = -30, f = +15 cm</text>
      <path d="M23 175 H412" stroke="#52636b"/><path d="M264 84 Q240 175 264 238" fill="none" stroke="#52636b" strokeWidth="4"/>
      <path d="M70 175 V121" stroke="#2878ac" strokeWidth="3" markerEnd="url(#mir-0)"/>
      <path d="M310 175 V157" stroke="#ce5064" strokeWidth="3" markerEnd="url(#mir-2)"/>
      <path d="M70 121 H250 L160 67" fill="none" stroke="#247e68" strokeWidth="2" markerEnd="url(#mir-1)"/>
      <path d="M250 121 L340 175" stroke="#247e68" strokeWidth="2" strokeDasharray="5 4"/>
      <path d="M70 121 L250 175 L70 229" fill="none" stroke="#2878ac" strokeWidth="2"/>
      <path d="M250 175 L310 157" stroke="#2878ac" strokeWidth="2" strokeDasharray="5 4"/>
      <text x="40" y="112" fontSize="14">Object</text><text x="275" y="146" fontSize="14">Image</text>
      <text x="239" y="199" fontSize="14">P</text><text x="337" y="199" fontSize="14">F</text>
      <text x="45" y="270" fontSize="15">v = +10 cm; m = +1/3, upright</text>
    </>}
  </svg>;
}
