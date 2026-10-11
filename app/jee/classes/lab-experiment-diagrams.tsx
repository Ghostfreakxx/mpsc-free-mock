import styles from "./lecture.module.css";
const blue="#2878ac", green="#247e68", red="#ce5064", ink="#52636b";
const titles:Record<string,string[]>={
  "lab-measurements":["A direct vernier: find the coincidence","Sleeve plus circular-scale contribution","Use lever arms from the pivot","A squared tracks mechanical energy","Two resonant lengths, one fork frequency"],
  "lab-materials":["Elastic force versus extension","Balance surface force and liquid weight","Time motion only after terminal speed","Heat lost equals total heat gained","Scatter and offset are different errors"],
};
function Text({x,y,children}: {x:number;y:number;children:React.ReactNode}) {
  return <text x={x} y={y} fontSize="14">{children}</text>;
}
function Arrow({d,color=blue}: {d:string;color?:string}) {
  return <path d={d} stroke={color} strokeWidth="2" fill="none" markerEnd={`url(#lab-${color.slice(1)})`}/>;
}
function ResonanceShape({x,start,end,mode}: {x:number;start:number;end:number;mode:number}) {
  const d=Array.from({length:101},(_,i)=>`${i?'L':'M'}${x+16*Math.cos(mode*Math.PI*i/200)} ${start+(end-start)*i/100}`).join(' ');
  return <path d={d} fill="none" stroke={green} strokeWidth="2"/>;
}
export default function LabExperimentDiagram({lessonId,chapter}: {lessonId:string;chapter:number}) {
  return <svg className={styles.forceDiagram} viewBox="0 0 440 300" role="img" aria-label={titles[lessonId]?.[chapter]}>
    <defs>{[blue,green,red].map(color=><marker key={color} id={`lab-${color.slice(1)}`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7" fill={color}/></marker>)}</defs>
    <text x="12" y="24" fontSize="15">{titles[lessonId]?.[chapter]}</text>
    {lessonId==='lab-measurements' && <>
      {chapter===0 && <>
        <Text x={25} y={52}>Main scale (cm)</Text>
        <path d="M40 90 H385 M114 145 H294" stroke={ink}/>
        {Array.from({length:18},(_,i)=><g key={i}><path d={`M${40+20*i} 90 V${i%5===0?65:78}`} stroke={i===3?blue:ink}/>{i%5===0 && <Text x={30+20*i} y={115}>{((20+i)/10).toFixed(1)}</Text>}</g>)}
        {Array.from({length:11},(_,i)=><g key={i}><path d={`M${114+18*i} 145 V${i===7?125:135}`} stroke={i===7?green:ink}/><text x={110+18*i} y="165" fontSize="12">{i}</text></g>)}
        <path d="M240 78 V145" stroke={green} strokeDasharray="4 3"/>
        <Text x={25} y={195}>7th vernier mark coincides with main-scale mark</Text>
        <Text x={25} y={225}>Raw = 2.30 + 7 x 0.01 = 2.37 cm</Text>
        <Text x={25} y={255}>Zero error +0.03 cm: corrected = 2.34 cm</Text>
        <Text x={25} y={285}>Direct-vernier example; main reading left of zero</Text>
      </>}
      {chapter===1 && <>
        <rect x="35" y="75" width="190" height="95" fill="#e1efea" stroke={ink}/><rect x="225" y="60" width="125" height="125" fill="#e3edf6" stroke={ink}/>
        <Text x={40} y={60}>Sleeve</Text><Text x={245} y={45}>Circular scale</Text>
        {[0,.5,1,1.5].map((n,i)=><g key={n}><path d={`M${55+i*45} 130 V105`} stroke={ink}/><text x={50+i*45} y="155" fontSize="12">{n.toFixed(1)}</text></g>)}
        <path d="M35 130 H350" stroke={blue}/>
        {[27,28,29].map((n,i)=><g key={n}><path d={`M225 ${105+i*25} H255`} stroke={n===28?blue:ink}/><Text x={275} y={110+i*25}>{n}</Text></g>)}
        <Text x={25} y={215}>Pitch 0.5 mm / 50 divisions = 0.01 mm</Text>
        <Text x={25} y={245}>Raw = 1.50 + 28 x 0.01 = 1.78 mm</Text>
        <Text x={25} y={278}>Zero error -0.02 mm: corrected = 1.80 mm</Text>
      </>}
      {chapter===2 && <>
        <path d="M40 110 H400" stroke={ink} strokeWidth="4"/>
        <path d="M220 116 L203 143 H237 Z" fill="#e1efea" stroke={green}/>
        <Text x={85} y={90}>20 cm</Text><Text x={195} y={90}>50 cm</Text><Text x={275} y={90}>70 cm</Text>
        <path d="M112 110 V175 M292 110 V175" stroke={ink}/>
        <rect x="90" y="175" width="44" height="35" fill="#e3edf6" stroke={blue}/><rect x="270" y="175" width="44" height="35" fill="#f7e7e9" stroke={red}/>
        <Arrow d="M112 215 V242"/><Arrow d="M292 215 V242" color={red}/>
        <Text x={80} y={160}>100 g</Text><Text x={265} y={160}>Unknown</Text>
        <Text x={140} y={58}>30 cm</Text><Text x={255} y={58}>20 cm</Text>
        <Text x={25} y={270}>100 x 30 = m x 20: m = 150 g</Text>
        <Text x={25} y={290}>Pivot at empty scale&apos;s center of gravity</Text>
      </>}
      {chapter===3 && <>
        <path d="M50 235 H405 M50 235 V60" stroke={ink} fill="none"/>
        <path d="M50 70 C150 120 180 165 265 190 C320 207 360 218 395 223" stroke={green} strokeWidth="3" fill="none"/>
        <Text x={62} y={58}>A squared</Text><Text x={365} y={260}>Time</Text>
        <Text x={150} y={93}>A: 8 cm to 4 cm</Text><Text x={175} y={135}>E final / E initial = 1/4</Text>
        <Text x={25} y={290}>Illustrative decay; not automatically a straight line</Text>
      </>}
      {chapter===4 && <>
        <Text x={25} y={50}>Displacement shapes; same f = 500 Hz</Text>
        <path d="M75 70 V250 H115 V70 M265 70 V270 H305 V70" stroke={ink} fill="none"/>
        <rect x="77" y="126" width="36" height="122" fill="#dcebf5"/><rect x="267" y="245" width="36" height="23" fill="#dcebf5"/>
        <path d="M65 66.5 H125 M255 66.5 H315 M95 66.5 V126 M285 66.5 V245" stroke={ink} strokeDasharray="3 4"/>
        <ResonanceShape x={95} start={66.5} end={126} mode={1}/><ResonanceShape x={285} start={66.5} end={245} mode={3}/>
        <Text x={130} y={128}>Water node</Text><Text x={25} y={175}>L1 = 0.16 m</Text>
        <Text x={315} y={180}>L2 = 0.50 m</Text>
        <Text x={25} y={235}>e = 0.01 m</Text>
        <Text x={25} y={288}>v = 2 x 500 x (0.50 - 0.16) = 340 m/s</Text>
      </>}
    </>}
    {lessonId==='lab-materials' && <>
      {chapter===0 && <>
        <path d="M40 55 H150 M65 55 V215 M115 55 V215" stroke={ink}/>
        <rect x="105" y="215" width="20" height="25" fill="#e3edf6" stroke={blue}/>
        <Arrow d="M135 185 V218" color={blue}/><Text x={25} y={268}>Load and extension</Text>
        <path d="M230 235 H405 M230 235 V65" stroke={ink} fill="none"/>
        <path d="M230 235 L390 80" stroke={green} strokeWidth="3"/>
        <Text x={242} y={65}>F</Text><Text x={260} y={265}>Extension</Text>
        <Text x={25} y={290}>Elastic slope = YA/L; Y = slope x L/A</Text>
      </>}
      {chapter===1 && <>
        <path d="M60 80 V235 H220 V80" stroke={ink} fill="none"/>
        <rect x="62" y="160" width="156" height="73" fill="#dcebf5"/>
        <rect x="122" y="106" width="24" height="126" fill="#dcebf5"/>
        <path d="M120 65 V220 M148 65 V220 M122 100 Q134 112 146 100" stroke={blue} fill="none" strokeWidth="2"/>
        <path d="M155 106 H195 M155 160 H195 M180 106 V160" stroke={red}/>
        <Text x={192} y={140}>h</Text><Text x={260} y={95}>Clean wetting tube</Text>
        <Text x={260} y={140}>Use internal radius</Text><Text x={260} y={185}>Keep vertical</Text>
        <Text x={25} y={267}>gamma = rho g h r / 2 for cos(theta) approximately 1</Text>
        <Text x={25} y={290}>Example: 0.0735 N/m; small meniscus correction omitted</Text>
      </>}
      {chapter===2 && <>
        <path d="M70 55 V240 H175 V55" stroke={ink} fill="none"/>
        <rect x="73" y="70" width="99" height="167" fill="#e1efea"/>
        <circle cx="123" cy="155" r="10" fill={blue}/>
        <Arrow d="M123 168 V220" color={red}/><Arrow d="M98 150 V100"/><Arrow d="M150 150 V100" color={green}/>
        <Text x={220} y={95}>Weight downward</Text><Text x={220} y={130}>Buoyancy + drag upward</Text>
        <Text x={220} y={185}>0.12 m / 60 s</Text><Text x={220} y={215}>v = 0.002 m/s</Text>
        <Text x={25} y={268}>Time below acceleration region; avoid wall contact</Text>
        <Text x={25} y={290}>Example: eta approximately 1.78 Pa s</Text>
      </>}
      {chapter===3 && <>
        <path d="M55 95 V225 Q55 240 75 240 H205 Q225 240 225 225 V95" stroke={ink} fill="none"/>
        <rect x="58" y="125" width="164" height="100" fill="#dcebf5"/>
        <rect x="140" y="155" width="35" height="40" fill="#f7e7e9" stroke={red}/>
        <path d="M95 70 V190" stroke={green} strokeWidth="4"/>
        <Text x={260} y={90}>Hot solid: 0.1 kg</Text><Text x={260} y={125}>100 C to 24 C</Text>
        <Text x={260} y={170}>Water: 0.2 kg</Text><Text x={260} y={205}>20 C to 24 C</Text>
        <Text x={25} y={266}>Include calorimeter heat capacity: 20 J/K</Text>
        <Text x={25} y={290}>Heat gained = 3440 J: cs approximately 453 J/(kg K)</Text>
      </>}
      {chapter===4 && <>
        <Text x={25} y={70}>Radius error: 2 percent</Text><Text x={25} y={110}>Y contribution: 4 percent</Text>
        <path d="M245 230 H415 M245 230 V65" stroke={ink} fill="none"/><path d="M250 220 L395 80" stroke={green} strokeWidth="2"/>
        {[{x:265,y:212},{x:300,y:155},{x:340,y:139},{x:375,y:91}].map((p,i)=><circle key={i} cx={p.x} cy={p.y} r="4" fill={blue}/>)}
        <Text x={25} y={175}>Repeat readings</Text><Text x={25} y={205}>Correct offsets</Text>
        <Text x={260} y={255}>Fit a trend</Text>
        <Text x={25} y={288}>Averaging does not remove a fixed zero error</Text>
      </>}
    </>}
  </svg>;
}
