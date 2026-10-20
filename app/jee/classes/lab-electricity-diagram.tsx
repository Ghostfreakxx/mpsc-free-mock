import styles from "./lecture.module.css";
const blue="#2878ac",green="#247e68",ink="#52636b";
const titles=["Voltage and current: name the axes","Balance two resistance ratios","Test-wire geometry, not bridge length","Shunt across G; R remains in series","Current per division is the figure of merit"];
function Text({x,y,children}:{x:number;y:number;children:React.ReactNode}) {
  return <text x={x} y={y} fontSize="14">{children}</text>;
}
export default function ElectricityLabDiagram({chapter}:{chapter:number}) {
  return <svg className={styles.forceDiagram} viewBox="0 0 440 300" role="img" aria-label={titles[chapter]}>
    <text x="12" y="24" fontSize="15">{titles[chapter]}</text>
    {chapter===0 && <>
      <path d="M55 225 V65 M55 225 H345" fill="none" stroke={ink}/>
      <Text x={25} y={55}>V (V)</Text><Text x={330} y={248}>I (A)</Text>
      <path d="M55 225 L325 75" stroke={green} strokeWidth="2"/>
      {[1,2,3].map(n=><g key={n}><circle cx={55+90*n} cy={225-50*n} r="4" fill={blue}/><Text x={47+90*n} y={245}>{(n/10).toFixed(1)}</Text><Text x={33} y={230-50*n}>{n}</Text></g>)}
      <Text x={125} y={88}>Slope = 10 ohms</Text>
      <Text x={25} y={273}>Ammeter in series; voltmeter across resistor</Text>
      <Text x={25} y={292}>Ideal meters; approximately fixed temperature</Text>
    </>}
    {chapter===1 && <>
      <path d="M50 200 V70 H95 M165 70 H275 M345 70 H390 V200 M220 70 V110 M220 150 V175 H254 V200 M50 200 V265 H185 M205 265 H390 V200" fill="none" stroke={ink}/>
      <rect x="95" y="59" width="70" height="22" fill="none" stroke={blue}/>
      <rect x="275" y="59" width="70" height="22" fill="none" stroke={green}/>
      <Text x={97} y={52}>X = 3 ohms</Text><Text x={277} y={52}>K = 2 ohms</Text>
      <circle cx="220" cy="130" r="20" fill="white" stroke={ink}/><Text x={214} y={135}>G</Text>
      <path d="M50 200 H390 M185 252 V278 M205 257 V273" stroke={ink} strokeWidth="2"/>
      <circle cx="254" cy="200" r="4" fill={blue}/>
      <Text x={55} y={224}>l = 60 cm</Text><Text x={277} y={224}>40 cm</Text>
      <Text x={25} y={292}>At null: X/K = 60/40; galvanometer current = 0</Text>
    </>}
    {chapter===2 && <>
      <rect x="55" y="90" width="330" height="34" fill="#e4f1f7" stroke={blue}/>
      <ellipse cx="55" cy="107" rx="9" ry="17" fill="white" stroke={blue}/>
      <path d="M55 155 H385 M55 148 V162 M385 148 V162" stroke={ink}/>
      <Text x={175} y={180}>L = 1.2 m</Text>
      <Text x={145} y={72}>Diameter d = 0.4 mm</Text>
      <Text x={25} y={218}>X = 3 ohms; area = pi d squared / 4</Text>
      <Text x={25} y={251}>rho = 3.14 x 10^-7 ohm m</Text>
      <Text x={25} y={285}>Do not use the bridge balancing length as L</Text>
    </>}
    {chapter===3 && <>
      <path d="M60 240 V75 H100 M170 75 H280 M320 75 H380 V240 H225 M205 240 H60 M240 75 V150 H270 M330 150 H380 V75 M205 225 V255 M225 230 V250" fill="none" stroke={ink}/>
      <rect x="100" y="64" width="70" height="22" fill="none" stroke={blue}/>
      <circle cx="300" cy="75" r="20" fill="white" stroke={green}/><Text x={294} y={80}>G</Text>
      <rect x="270" y="139" width="60" height="22" fill="none" stroke={blue}/>
      <Text x={100} y={53}>R = 9900 ohms</Text><Text x={270} y={183}>S = 99 ohms</Text>
      <Text x={85} y={210}>theta becomes theta/2</Text>
      <Text x={25} y={285}>G = RS/(R-S) = 100 ohms, not exactly S</Text>
    </>}
    {chapter===4 && <>
      <path d="M65 225 V60 M65 225 H380" fill="none" stroke={ink}/>
      <Text x={20} y={52}>I (microampere)</Text><Text x={284} y={249}>Divisions</Text>
      <path d="M65 225 L365 75" stroke={green} strokeWidth="2"/>
      <circle cx="365" cy="75" r="4" fill={blue}/><Text x={25} y={80}>200</Text><Text x={355} y={247}>40</Text>
      <Text x={100} y={95}>k = 5 microamperes/division</Text>
      <Text x={25} y={275}>75 microamperes gives 15 divisions</Text>
      <Text x={25} y={294}>Smaller k means greater current sensitivity</Text>
    </>}
  </svg>;
}
