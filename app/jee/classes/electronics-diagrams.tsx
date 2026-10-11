import styles from "./lecture.module.css";

const blue="#2878ac", green="#247e68", red="#ce5064", ink="#52636b";
const titles:Record<string,string[]>={
  "semiconductor-diodes":["Mobile carriers, neutral material","Fixed ions create the barrier","A nonlinear diode I-V characteristic","Ideal half-wave: one pulse per cycle","Bridge paths preserve load direction"],
  "special-diodes":["LED: forward current and emitted photons","Photodiode: light increases reverse current","Solar cell: power between the endpoints","Zener: steep controlled breakdown branch","The resistor supplies load plus Zener"],
  "logic-gates":["An output bubble means inversion","Both required versus either allowed","Complement the entire output","Evaluate the intermediate wire first","Two NAND stages implement AND"],
};
function Text({x,y,children}: {x:number;y:number;children:React.ReactNode}) {
  return <text x={x} y={y} fontSize="14">{children}</text>;
}
function Arrow({d,color=blue}: {d:string;color?:string}) {
  return <path d={d} stroke={color} strokeWidth="2" fill="none" markerEnd={`url(#el-${color.slice(1)})`}/>;
}
function Diode({x1,y1,x2,y2,color=ink}: {x1:number;y1:number;x2:number;y2:number;color?:string}) {
  const length=Math.hypot(x2-x1,y2-y1),angle=Math.atan2(y2-y1,x2-x1)*180/Math.PI;
  return <g transform={`translate(${x1} ${y1}) rotate(${angle})`}>
    <path d={`M0 0 H${length/2-10} M${length/2+10} 0 H${length}`} stroke={color} fill="none" strokeWidth="2"/>
    <path d={`M${length/2-10} -10 L${length/2+8} 0 L${length/2-10} 10 Z M${length/2+9} -12 V12`} stroke={color} fill="none" strokeWidth="2"/>
  </g>;
}
function Gate({x,y,type,scale=1}: {x:number;y:number;type:string;scale?:number}) {
  const inverted=['NOT','NAND','NOR'].includes(type),or=['OR','NOR'].includes(type);
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    {type==='NOT'?<path d="M0 -25 L50 0 L0 25 Z" fill="#eef5f2" stroke={green} strokeWidth="2"/>:
      or?<path d="M0 -30 Q40 -35 65 0 Q40 35 0 30 Q20 0 0 -30 Z" fill="#eef5f2" stroke={green} strokeWidth="2"/>:
      <path d="M0 -30 H30 A30 30 0 0 1 30 30 H0 Z" fill="#eef5f2" stroke={green} strokeWidth="2"/>}
    {inverted && <circle cx={type==='NOT'?56:or?71:66} cy="0" r="6" stroke={green} fill="white" strokeWidth="2"/>}
    <path d={type==='NOT'?"M-25 0 H0":"M-25 -15 H6 M-25 15 H6"} stroke={ink}/>
    <path d={`M${inverted?(type==='NOT'?62:or?77:72):(or?65:60)} 0 H100`} stroke={ink}/>
  </g>;
}
function TruthTable({columns,rows}: {columns:string[];rows:string[][]}) {
  return <g>{columns.map((c,i)=><Text key={c} x={35+i*75} y={180}>{c}</Text>)}
    <path d="M25 190 H410" stroke="#ccdcd8"/>
    {rows.map((row,r)=><g key={r}>{row.map((c,i)=><Text key={i} x={35+i*75} y={212+r*23}>{c}</Text>)}</g>)}
  </g>;
}
export default function ElectronicsDiagram({lessonId,chapter}: {lessonId:string;chapter:number}) {
  return <svg className={styles.forceDiagram} viewBox="0 0 440 300" role="img" aria-label={titles[lessonId]?.[chapter]}>
    <defs>{[blue,green,red].map(color=><marker key={color} id={`el-${color.slice(1)}`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7" fill={color}/></marker>)}</defs>
    <text x="12" y="24" fontSize="15">{titles[lessonId]?.[chapter]}</text>
    {lessonId==='semiconductor-diodes' && <>
      {chapter===0 && <>
        <rect x="25" y="65" width="180" height="150" fill="#e3edf6"/><rect x="235" y="65" width="180" height="150" fill="#e1efea"/>
        <Text x={40} y={90}>n-type</Text><Text x={250} y={90}>p-type</Text>
        {[0,1,2,3].map(i=><g key={i}><circle cx={55+i%2*80} cy={130+Math.floor(i/2)*50} r="9" fill={blue}/><circle cx={265+i%2*80} cy={130+Math.floor(i/2)*50} r="9" fill="white" stroke={green}/></g>)}
        <Text x={25} y={240}>Majority: electrons</Text><Text x={235} y={240}>Majority: holes</Text>
        <Text x={25} y={275}>Fixed dopant charges balance mobile carriers</Text>
        <Text x={25} y={290}>Carrier schematic; both samples neutral overall</Text>
      </>}
      {chapter===1 && <>
        <rect x="30" y="75" width="160" height="150" fill="#e1efea"/><rect x="250" y="75" width="160" height="150" fill="#e3edf6"/>
        <rect x="190" y="75" width="60" height="150" fill="#f7e7e9"/>
        <Text x={60} y={105}>p side</Text><Text x={305} y={105}>n side</Text>
        {[125,155,185].map(y=><g key={y}><Text x={199} y={y}>-</Text><Text x={231} y={y}>+</Text></g>)}
        <Arrow d="M290 60 H150" color={red}/><Text x={155} y={48}>Junction field</Text>
        <Text x={30} y={255}>Negative acceptors / positive donors: fixed ions</Text>
        <Text x={30} y={285}>At equilibrium: net current is zero</Text>
      </>}
      {chapter===2 && <>
        <path d="M30 180 H410 M210 265 V50" stroke={ink} fill="none"/>
        <path d="M45 260 L65 191 H190 Q210 191 210 180 C280 180 335 180 380 65" stroke={blue} strokeWidth="3" fill="none"/>
        <Text x={223} y={65}>I</Text><Text x={390} y={205}>V</Text><Text x={235} y={130}>Forward rise</Text>
        <Text x={30} y={155}>Small reverse current</Text><Text x={30} y={280}>Breakdown</Text>
        <Text x={110} y={290}>Schematic; no universal switch threshold</Text>
      </>}
      {chapter===3 && <>
        <path d="M35 110 H410 M35 230 H410" stroke={ink}/>
        <path d={Array.from({length:361},(_,i)=>`${i?'L':'M'}${35+i} ${110-45*Math.sin(i*4*Math.PI/360)}`).join(' ')} stroke={blue} strokeWidth="2" fill="none"/>
        <path d={Array.from({length:361},(_,i)=>`${i?'L':'M'}${35+i} ${230-45*Math.max(0,Math.sin(i*4*Math.PI/360))}`).join(' ')} stroke={green} strokeWidth="2" fill="none"/>
        <Text x={35} y={52}>Input: sinusoidal voltage</Text><Text x={35} y={173}>Output: positive halves only</Text>
        <Text x={35} y={280}>Ideal diode, resistive load, no smoothing capacitor</Text>
      </>}
      {chapter===4 && <>
        <Diode x1={60} y1={145} x2={220} y2={65} color={green}/><Diode x1={380} y1={145} x2={220} y2={65}/>
        <Diode x1={220} y1={235} x2={60} y2={145}/><Diode x1={220} y1={235} x2={380} y2={145} color={green}/>
        <path d="M220 65 V115 M220 180 V235" stroke={green} strokeWidth="2"/>
        <rect x="210" y="115" width="20" height="65" fill="none" stroke={ink}/><Arrow d="M255 120 V180" color={green}/>
        <Text x={30} y={125}>AC</Text><Text x={390} y={130}>AC</Text><Text x={270} y={160}>Load</Text>
        <Text x={235} y={65}>+</Text><Text x={235} y={238}>-</Text>
        <Text x={25} y={265}>Green pair conducts when left AC terminal is positive</Text>
        <Text x={25} y={288}>Other half: other pair; load direction unchanged</Text>
      </>}
    </>}
    {lessonId==='special-diodes' && <>
      {chapter===0 && <>
        <Diode x1={25} y1={115} x2={130} y2={115}/><Arrow d="M75 85 L100 60" color={red}/><Arrow d="M100 85 L125 60" color={red}/>
        <path d="M175 215 H410 M175 215 V55" stroke={ink}/><path d="M180 215 C270 215 305 205 375 65" stroke={green} fill="none" strokeWidth="3"/>
        <Text x={187} y={70}>Forward I</Text><Text x={365} y={240}>V</Text>
        <Text x={25} y={170}>Light out</Text><Text x={25} y={270}>Example: 2 eV photons correspond to 620 nm</Text>
        <Text x={25} y={290}>Forward curve is schematic; device-dependent voltage</Text>
      </>}
      {chapter===1 && <>
        <path d="M35 95 H410 M280 240 V50" stroke={ink}/>
        <path d="M45 125 H265 Q280 125 280 95" stroke={blue} fill="none" strokeWidth="2"/>
        <path d="M45 195 H280 C325 195 348 160 360 95" stroke={green} fill="none" strokeWidth="3"/>
        <Text x={55} y={115}>Dark</Text><Text x={55} y={180}>Illuminated</Text>
        <Text x={295} y={65}>I</Text><Text x={390} y={85}>V</Text><Text x={50} y={235}>Reverse-bias region</Text>
        <Text x={25} y={270}>More light: greater reverse-current magnitude</Text>
        <Text x={25} y={290}>Schematic curves for a fixed wavelength and device</Text>
      </>}
      {chapter===2 && <>
        <path d="M55 230 H410 M55 230 V50" stroke={ink}/>
        <path d="M55 85 C260 85 325 85 355 230" fill="none" stroke={green} strokeWidth="3"/>
        <circle cx="300" cy="116" r="6" fill={red}/>
        <Text x={70} y={65}>Delivered I</Text><Text x={365} y={255}>V</Text>
        <Text x={65} y={110}>I short circuit</Text><Text x={265} y={255}>V open circuit</Text>
        <Text x={175} y={170}>Power-producing region</Text>
        <Text x={25} y={287}>Both endpoints: VI = 0; curve is illustrative</Text>
      </>}
      {chapter===3 && <>
        <path d="M35 160 H410 M255 260 V50" stroke={ink}/>
        <path d="M105 260 L110 176 H240 Q255 176 255 160 C320 160 340 130 370 60" stroke={blue} fill="none" strokeWidth="3"/>
        <Text x={270} y={60}>I</Text><Text x={395} y={185}>V</Text>
        <Text x={60} y={145}>-VZ</Text><Text x={35} y={220}>Reverse</Text><Text x={35} y={242}>breakdown</Text>
        <Text x={25} y={285}>Limit current; PZ = VZ IZ uses positive magnitudes</Text>
      </>}
      {chapter===4 && <>
        <path d="M35 95 H80 M150 95 H370 V120 M35 220 H370 V185 M230 95 V120 M230 185 V220" stroke={ink} fill="none"/>
        <rect x="80" y="85" width="70" height="20" fill="none" stroke={ink}/><rect x="360" y="120" width="20" height="65" fill="none" stroke={ink}/>
        <path d="M230 140 L220 165 H240 Z M216 140 H244 M216 140 V145 M244 140 V135 M230 120 V140 M230 165 V185" stroke={blue} fill="none" strokeWidth="2"/>
        <Arrow d="M165 72 H205"/><Arrow d="M255 115 V160" color={blue}/><Arrow d="M395 120 V170" color={green}/>
        <Text x={40} y={55}>Vin = 12 V</Text><Text x={90} y={125}>330 ohms</Text><Text x={175} y={60}>IS</Text>
        <Text x={270} y={140}>IZ</Text><Text x={400} y={155}>IL</Text>
        <Text x={280} y={205}>RL = 510 ohms</Text><Text x={25} y={255}>IS = 20.91 mA; IL = 10 mA; IZ = 10.91 mA</Text>
        <Text x={25} y={285}>Vout approximately 5.1 V only within regulating range</Text>
      </>}
    </>}
    {lessonId==='logic-gates' && <>
      {chapter===0 && <>
        <Gate x={160} y={90} type="NOT"/><Text x={105} y={95}>A</Text><Text x={280} y={95}>Y</Text>
        <TruthTable columns={['A','NOT A']} rows={[["0","1"],["1","0"]]}/>
        <Text x={25} y={282}>Low and high represent valid voltage ranges</Text>
      </>}
      {chapter===1 && <>
        <Gate x={70} y={100} type="AND"/><Gate x={280} y={100} type="OR"/>
        <Text x={65} y={60}>AND</Text><Text x={275} y={60}>OR</Text>
        <TruthTable columns={['A','B','AND','OR']} rows={[["0","0","0","0"],["0","1","0","1"],["1","0","0","1"],["1","1","1","1"]]}/>
      </>}
      {chapter===2 && <>
        <Gate x={70} y={100} type="NAND"/><Gate x={280} y={100} type="NOR"/>
        <Text x={65} y={60}>NAND</Text><Text x={275} y={60}>NOR</Text>
        <TruthTable columns={['A','B','NAND','NOR']} rows={[["0","0","1","1"],["0","1","1","0"],["1","0","1","0"],["1","1","0","0"]]}/>
      </>}
      {chapter===3 && <>
        <Gate x={75} y={90} type="OR"/><Gate x={225} y={145} type="AND"/><Gate x={75} y={200} type="NOT"/>
        <path d="M175 90 H190 V130 H200 M175 200 H190 V160 H200" stroke={ink} fill="none"/>
        <Text x={20} y={78}>A=0</Text><Text x={20} y={112}>B=1</Text><Text x={20} y={205}>C=1</Text>
        <Text x={170} y={75}>X=1</Text><Text x={195} y={225}>NOT C = 0</Text><Text x={335} y={150}>Y=0</Text>
        <Text x={25} y={277}>Y = (A OR B) AND NOT C</Text>
      </>}
      {chapter===4 && <>
        <Gate x={65} y={115} type="NAND"/><Gate x={270} y={115} type="NAND"/>
        <path d="M165 115 H210 M210 115 V100 H245 M210 115 V130 H245" stroke={ink} fill="none"/>
        <circle cx="210" cy="115" r="3" fill={ink}/>
        <Text x={20} y={105}>A</Text><Text x={20} y={137}>B</Text><Text x={185} y={90}>X</Text><Text x={385} y={120}>Y</Text>
        <Text x={25} y={200}>X = NOT(A AND B)</Text>
        <Text x={25} y={235}>Y = NOT(X AND X) = A AND B</Text>
        <Text x={25} y={282}>Both second-gate inputs share X: an inverter</Text>
      </>}
    </>}
  </svg>;
}
