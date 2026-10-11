import styles from "./lecture.module.css";

function Meter({x,y,label}: {x:number;y:number;label:string}) {
  return <g><circle cx={x} cy={y} r="22" fill="white" stroke="#247e68" strokeWidth="2"/><text x={x} y={y+5} textAnchor="middle" fontSize="16">{label}</text></g>;
}

export default function GalvanometerDiagram({chapter}: {chapter:number}) {
  const titles=["Steady reading: torque magnitudes", "Two different measures of sensitivity", "Shunt shares the coil's voltage", "Multiplier limits current in series", "The voltmeter loads a voltage divider"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {chapter===0 && <>
      <path d="M60 60 V220 H375" fill="none" stroke="#52636b" strokeWidth="2"/>
      <text x="18" y="66" fontSize="15">torque</text><text x="335" y="241" fontSize="15">theta</text>
      <path d="M60 130 H365" stroke="#2878ac" strokeWidth="3"/><text x="274" y="118" fontSize="15">NIAB</text>
      <path d="M60 220 L320 64" stroke="#e0783e" strokeWidth="3"/><text x="334" y="71" fontSize="15">c theta</text>
      <path d="M210 130 V220" stroke="#247e68" strokeDasharray="4 4"/><circle cx="210" cy="130" r="5" fill="#247e68"/>
      <text x="135" y="241" fontSize="15">equilibrium</text>
      <text x="18" y="262" fontSize="15">Radial-field model: theta = (NAB/c) I</text>
    </>}
    {chapter===1 && <>
      <path d="M55 66 V218 H362" fill="none" stroke="#52636b" strokeWidth="2"/>
      <path d="M55 218 L311 90" stroke="#247e68" strokeWidth="3"/>
      <text x="18" y="56" fontSize="15">theta (rad)</text><text x="319" y="242" fontSize="15">I (mA)</text>
      <path d="M183 154 V218 M55 154 H183" fill="none" stroke="#2878ac" strokeDasharray="4 4"/>
      <circle cx="183" cy="154" r="5" fill="#247e68"/><text x="159" y="241" fontSize="15">0.5</text><text x="18" y="159" fontSize="15">0.5</text>
      <text x="223" y="155" fontSize="15">S_I = 1000 rad/A</text>
      <text x="223" y="184" fontSize="15">G = 100 ohms</text>
      <text x="18" y="262" fontSize="15">S_V = S_I/G = 10 rad/V for the bare coil</text>
    </>}
    {chapter===2 && <>
      <path d="M30 142 H105 V90 H198 M242 90 H340 V142 H410 M105 142 V200 H185 M245 200 H340 V142" fill="none" stroke="#52636b" strokeWidth="2"/>
      <Meter x={220} y={90} label="G"/>
      <rect x="185" y="190" width="60" height="20" fill="white" stroke="#2878ac" strokeWidth="2"/>
      <circle cx="105" cy="142" r="4" fill="#52636b"/><circle cx="340" cy="142" r="4" fill="#52636b"/>
      <text x="119" y="63" fontSize="15">Ig = 0.001 A; G = 100 ohms</text>
      <text x="17" y="129" fontSize="15">I = 1 A</text>
      <text x="130" y="180" fontSize="15">I_shunt = 0.999 A</text>
      <text x="151" y="234" fontSize="15">S = 0.1001 ohms</text>
      <text x="18" y="262" fontSize="15">Whole ammeter: series in measured branch</text>
    </>}
    {chapter===3 && <>
      <path d="M35 143 H90 M160 143 H238 M282 143 H400" fill="none" stroke="#52636b" strokeWidth="2"/>
      <rect x="90" y="133" width="70" height="20" fill="white" stroke="#2878ac" strokeWidth="2"/>
      <Meter x={260} y={143} label="G"/>
      <circle cx="35" cy="143" r="4" fill="#52636b"/><circle cx="400" cy="143" r="4" fill="#52636b"/>
      <text x="74" y="106" fontSize="15">R = 9900 ohms</text><text x="246" y="106" fontSize="15">G = 100 ohms</text>
      <text x="115" y="190" fontSize="15">Ig = 1 mA at V = 10 V</text>
      <text x="102" y="221" fontSize="15">R_V = 10000 ohms</text>
      <text x="18" y="262" fontSize="15">Whole voltmeter: across measurement points</text>
    </>}
    {chapter===4 && <>
      <path d="M105 64 V87 M105 131 V151 H285 V173 M105 151 V173 M105 215 V238 H285 V217" fill="none" stroke="#52636b" strokeWidth="2"/>
      <rect x="95" y="87" width="20" height="44" fill="white" stroke="#2878ac" strokeWidth="2"/>
      <rect x="95" y="173" width="20" height="42" fill="white" stroke="#2878ac" strokeWidth="2"/>
      <Meter x={285} y={195} label="V"/>
      <circle cx="105" cy="151" r="4" fill="#52636b"/>
      <text x="128" y="68" fontSize="15">10 V ideal supply</text>
      <text x="47" y="242" fontSize="15">0 V</text>
      <text x="132" y="116" fontSize="15">10 kilohms</text><text x="132" y="198" fontSize="15">10 kilohms</text>
      <text x="318" y="185" fontSize="15">R_V =</text><text x="318" y="210" fontSize="15">10 kilohms</text>
      <text x="18" y="262" fontSize="15">Loaded reading = 3.33 V, not 5 V</text>
    </>}
  </svg>;
}
