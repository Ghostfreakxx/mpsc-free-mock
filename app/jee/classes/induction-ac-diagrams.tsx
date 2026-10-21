import type { ReactNode } from "react";
import styles from "./lecture.module.css";

const blue="#2878ac", green="#247e68", orange="#e0783e", gray="#52636b";
function Board({title,children}: {title:string;children:ReactNode}) {
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={title}>
    <defs>{[blue,green,orange].map((color,i)=><marker key={color} id={`iac-${i}`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7" fill={color}/></marker>)}</defs>
    <text x="16" y="27" fontSize="16">{title}</text>{children}
  </svg>;
}
function Axes({xLabel,yLabel}: {xLabel:string;yLabel:string}) {
  return <><path d="M58 62 V215 H375" fill="none" stroke={gray} strokeWidth="2"/><text x="17" y="56" fontSize="15">{yLabel}</text><text x="380" y="222" fontSize="15">{xLabel}</text></>;
}
function Wave({phase=0,color=blue,dashed=false,squared=false}: {phase?:number;color?:string;dashed?:boolean;squared?:boolean}) {
  const points=Array.from({length:101},(_,i)=>{
    const s=Math.sin(i*Math.PI/50+phase);
    return `${58+i*3},${squared?210-110*s*s:145-66*s}`;
  }).join(" ");
  return <polyline points={points} fill="none" stroke={color} strokeWidth="3" strokeDasharray={dashed?"5 4":undefined}/>;
}
function Coil({x,y}: {x:number;y:number}) {
  return <g><path d={`M${x} ${y+40} h16`} stroke={blue} strokeWidth="2"/>{[0,1,2,3,4].map(i=><ellipse key={i} cx={x+25+i*16} cy={y+40} rx="12" ry="32" fill="none" stroke={blue} strokeWidth="2"/>)}<path d={`M${x+101} ${y+40} h17`} stroke={blue} strokeWidth="2"/></g>;
}

export function InductanceDiagram({chapter}: {chapter:number}) {
  const titles=["Current slope sets the induced emf","Long solenoid: two factors of N","Magnetic energy grows as current squared","One coil changes another coil's linkage","Coupling has a passive-system bound"];
  return <Board title={titles[chapter]}>
    {chapter===0 && <><Axes xLabel="t" yLabel="I"/><path d="M58 215 L337 84" stroke={blue} strokeWidth="3"/><text x="136" y="75" fontSize="15">dI/dt = +15 A/s</text><text x="72" y="248" fontSize="15">L = 0.2 H; induced emf = -3 V</text></>}
    {chapter===1 && <><Coil x={154} y={70}/><path d="M151 167 H272" stroke={gray}/><text x="152" y="192" fontSize="15">length = 0.4 m</text><text x="38" y="66" fontSize="15">N = 400; A = 5 x 10^-4 m2</text><text x="47" y="231" fontSize="16">Air-core L = mu0 N2 A / length</text><text x="111" y="255" fontSize="15">Approximately 0.251 mH</text></>}
    {chapter===2 && <><Axes xLabel="I (A)" yLabel="U (J)"/><polyline points={Array.from({length:31},(_,i)=>`${58+i*10},${215-4.2*0.1*(i/5)**2*10}`).join(" ")} fill="none" stroke={green} strokeWidth="3"/><circle cx="208" cy="177.2" r="4" fill={orange}/><text x="78" y="85" fontSize="15">L = 0.2 H; U = 0.1 I2</text><text x="128" y="153" fontSize="15">3 A: 0.9 J</text><text x="214" y="247" fontSize="15">6 A: 3.6 J</text></>}
    {chapter===3 && <><Coil x={32} y={83}/><Coil x={280} y={83}/><path d="M157 123 H264" stroke={green} strokeWidth="3" markerEnd="url(#iac-1)"/><text x="43" y="75" fontSize="15">Primary</text><text x="288" y="75" fontSize="15">Secondary</text><text x="150" y="109" fontSize="15">Shared flux</text><text x="38" y="210" fontSize="15">M = 0.03 H; primary slope = 20 A/s</text><text x="82" y="244" fontSize="15">Secondary |emf| = 0.6 V</text></>}
    {chapter===4 && <><text x="45" y="83" fontSize="16">sqrt(L1 L2) = 0.2 H</text><rect x="45" y="113" width="300" height="25" fill="#edf4f3"/><rect x="45" y="113" width="150" height="25" fill={green}/><text x="45" y="173" fontSize="15">k = 0.5 gives |M| = 0.1 H</text><text x="45" y="214" fontSize="15">0 &lt;= k &lt;= 1 in the stated model</text><text x="45" y="249" fontSize="15">Orientation sets the signed mutual term</text></>}
  </Board>;
}

export function AcBasicsDiagram({chapter}: {chapter:number}) {
  const titles=["Sinusoid: one complete cycle","RMS comes from the mean square","Resistor: voltage and current in phase","Inductor: current lags by a quarter-cycle","Capacitor: current leads by a quarter-cycle"];
  return <Board title={titles[chapter]}>
    <Axes xLabel="t" yLabel={chapter===1?"v2":"v, i"}/>
    {chapter===1 ? <><Wave squared/><path d="M58 155 H358" stroke={orange} strokeDasharray="5 4"/><text x="122" y="71" fontSize="15">Mean v2 = V0 squared / 2</text><text x="78" y="249" fontSize="15">Vrms = V0 / sqrt(2), for this sinusoid</text></> : <>
      <path d="M58 145 H358" stroke={gray} strokeWidth="1"/><Wave/>
      {chapter>1 && <Wave color={orange} dashed phase={chapter===3?-Math.PI/2:chapter===4?Math.PI/2:0}/>}
      <text x="76" y="61" fontSize="15">{chapter===0?"f = 50 Hz; T = 0.02 s":"Blue: voltage; orange dashed: current"}</text>
      <text x="48" y="249" fontSize="15">{chapter===0?"0":"Normalized amplitudes; compare timing"}</text>
      {chapter===0 && <text x="290" y="249" fontSize="15">One period T</text>}
    </>}
  </Board>;
}

export function LcrDiagram({chapter}: {chapter:number}) {
  const titles=["Add voltages as phasors","Impedance triangle and phase","Series current peaks at resonance","Real power includes the power factor","Below and above resonance"];
  return <Board title={titles[chapter]}>
    {chapter<2 && <><path d="M69 202 H159" stroke={green} strokeWidth="3" markerEnd="url(#iac-1)"/><path d="M159 202 V82" stroke={orange} strokeWidth="3" markerEnd="url(#iac-2)"/><path d="M69 202 L159 82" stroke={blue} strokeWidth="3" markerEnd="url(#iac-0)"/><text x="71" y="229" fontSize="15">{chapter===0?"VR = 60 V":"R = 30 ohm"}</text><text x="186" y="138" fontSize="15">{chapter===0?"VL - VC = 80 V":"XL - XC = 40 ohm"}</text><text x="63" y="66" fontSize="15">{chapter===0?"Vsource = 100 V":"Z = 50 ohm"}</text><text x="86" y="256" fontSize="15">{chapter===0?"Current is the horizontal reference":"phi = +53.1 deg; current lags"}</text></>}
    {chapter===2 && <><Axes xLabel="f" yLabel="I"/><path d="M69 206 C130 204 160 173 178 91 C191 50 207 50 220 91 C244 170 284 202 363 210" fill="none" stroke={green} strokeWidth="3"/><path d="M199 63 V216" stroke={orange} strokeDasharray="5 4"/><text x="230" y="81" fontSize="15">Z = R; phi = 0</text><text x="81" y="246" fontSize="15">Schematic peak at f0 = 50.3 Hz</text></>}
    {chapter===3 && <><text x="37" y="81" fontSize="16">V I = 200 VA (apparent)</text><rect x="37" y="111" width="330" height="30" fill="#edf4f3"/><rect x="37" y="111" width="198" height="30" fill={green}/><text x="37" y="180" fontSize="16">Real power = 120 W</text><text x="37" y="217" fontSize="15">cos(phi) = R / Z = 0.6</text><text x="37" y="253" fontSize="15">Also I2 R = 2 squared x 30 = 120 W</text></>}
    {chapter===4 && <><text x="31" y="80" fontSize="15">omega = 200</text><text x="252" y="80" fontSize="15">omega = 500</text><text x="31" y="123" fontSize="15">XL - XC = -30</text><text x="252" y="123" fontSize="15">XL - XC = +30</text><text x="31" y="163" fontSize="16">Current leads</text><text x="252" y="163" fontSize="16">Current lags</text><text x="58" y="211" fontSize="15">Both: Z approximately 36.1 ohm</text><text x="52" y="250" fontSize="15">R = 20 ohm; L = 0.1 H; C = 100 microF</text></>}
  </Board>;
}

export function GeneratorsDiagram({chapter}: {chapter:number}) {
  const titles=["Flux cosine produces an emf sine","Generator speed changes amplitude and f","Shared flux gives the turns ratio","Voltage gain is not power gain","Higher voltage lowers current at fixed P"];
  return <Board title={titles[chapter]}>
    {chapter<2 && <><Axes xLabel="t" yLabel="emf"/><path d="M58 145 H358" stroke={gray}/><Wave/>{chapter===0 && <Wave phase={Math.PI/2} color={orange} dashed/>}<text x="73" y="62" fontSize="15">{chapter===0?"Blue: emf; orange: normalized linkage":"E0 = 20 V; Erms approximately 14.14 V"}</text><text x="47" y="249" fontSize="15">{chapter===0?"At maximum linkage, emf is zero":"omega = 100 rad/s; f approximately 15.9 Hz"}</text></>}
    {chapter===2 && <><Coil x={36} y={84}/><Coil x={278} y={84}/><path d="M162 124 H264" stroke={green} strokeWidth="3" markerEnd="url(#iac-1)"/><text x="37" y="77" fontSize="15">Np = 500</text><text x="279" y="77" fontSize="15">Ns = 100</text><text x="48" y="205" fontSize="16">230 V</text><text x="288" y="205" fontSize="16">46 V</text><text x="37" y="249" fontSize="15">Ideal RMS magnitudes; phase needs references</text></>}
    {chapter===3 && <><text x="40" y="80" fontSize="16">Ideal: input 92 W = output 92 W</text><text x="40" y="120" fontSize="15">Primary: 230 V x 0.4 A</text><text x="40" y="156" fontSize="15">Secondary: 46 V x 2 A</text><path d="M38 180 H394" stroke={gray}/><text x="40" y="213" fontSize="15">Real eta = 80%: input 115 W</text><text x="40" y="249" fontSize="15">Output 92 W + losses 23 W</text></>}
    {chapter===4 && <><text x="31" y="76" fontSize="15">P = 10 kW; R_line = 2 ohm; unity PF</text><text x="40" y="125" fontSize="16">1 kV: I = 10 A</text><rect x="40" y="141" width="300" height="22" fill={orange}/><text x="40" y="190" fontSize="16">10 kV: I = 1 A</text><rect x="40" y="204" width="3" height="22" fill={green}/><text x="54" y="223" fontSize="15">2 W vs 200 W line loss</text><text x="40" y="258" fontSize="15">Bar lengths represent I2R, not voltage</text></>}
  </Board>;
}
