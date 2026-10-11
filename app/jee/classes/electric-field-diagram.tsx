import styles from "./lecture.module.css";

function Arrow({x,y,dx,dy,color="#247e68"}: {x:number;y:number;dx:number;dy:number;color?:string}) {
  const angle=Math.atan2(dy,dx), endX=x+dx, endY=y+dy;
  return <path d={`M${x} ${y} L${endX} ${endY} M${endX-10*Math.cos(angle-0.5)} ${endY-10*Math.sin(angle-0.5)} L${endX} ${endY} L${endX-10*Math.cos(angle+0.5)} ${endY-10*Math.sin(angle+0.5)}`} fill="none" stroke={color} strokeWidth="3" />;
}

export default function ElectricFieldDiagram({chapter}: {chapter:number}) {
  const titles=["Gaining electrons makes net charge negative", "Opposite charges attract", "Add forces on the same target", "Negative charge: force opposite to field", "Uniform field: torque without net force"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {chapter===0 && <>
      <rect x="260" y="70" width="130" height="100" fill="#d9edf7" stroke="#2878ac" />
      <text x="285" y="125">body</text><text x="40" y="78" fontSize="16">10^13 electrons</text>
      {[93,120,147].map(y=><circle key={y} cx="85" cy={y} r="8" fill="#2878ac" />)}
      <Arrow x={110} y={120} dx={115} dy={0}/>
      <text x="74" y="211">Charge change = -1.6 microC</text><text x="74" y="246" fontSize="16">Total system charge is conserved</text>
    </>}
    {chapter===1 && <>
      <circle cx="80" cy="120" r="23" fill="#c8e7dc" /><circle cx="360" cy="120" r="23" fill="#d9edf7" />
      <text x="73" y="127">+</text><text x="353" y="127">-</text>
      <Arrow x={112} y={120} dx={75} dy={0}/><Arrow x={328} y={120} dx={-75} dy={0}/>
      <text x="35" y="79">+2 microC</text><text x="309" y="79">-3 microC</text>
      <line x1="80" y1="177" x2="360" y2="177" stroke="#718780" />
      <text x="177" y="205">r = 0.30 m</text><text x="90" y="244" fontSize="16">Equal force magnitudes: 0.6 N each</text>
    </>}
    {chapter===2 && <>
      <circle cx="240" cy="120" r="13" fill="#c8e7dc" /><text x="235" y="126" fontSize="16">+</text>
      <circle cx="375" cy="120" r="13" fill="#d9edf7" /><text x="370" y="126" fontSize="16">+</text>
      <circle cx="240" cy="60" r="13" fill="#d9edf7" /><text x="235" y="66" fontSize="16">+</text>
      <Arrow x={220} y={120} dx={-95} dy={0}/><Arrow x={240} y={140} dx={0} dy={65}/>
      <Arrow x={230} y={135} dx={-75} dy={65} color="#c05d28"/>
      <text x="46" y="104" fontSize="15">Fx = -0.1 N</text><text x="268" y="181" fontSize="15">Fy = -0.1 N</text>
      <text x="66" y="240" fontSize="16">Resultant = 0.141 N, down and left</text>
    </>}
    {chapter===3 && <>
      <Arrow x={75} y={82} dx={270} dy={0}/><text x="140" y="64" fontSize="16">E = 4.5 x 10^5 N/C</text>
      <circle cx="220" cy="148" r="19" fill="#d9edf7" /><text x="215" y="155">-</text>
      <Arrow x={194} y={148} dx={-95} dy={0} color="#c05d28"/>
      <text x="195" y="191" fontSize="16">q = -1 nanoC</text><text x="66" y="238" fontSize="16">Force = 4.5 x 10^-4 N, to the left</text>
    </>}
    {chapter===4 && <>
      <Arrow x={95} y={60} dx={250} dy={0}/><text x="202" y="49" fontSize="15">E</text>
      <line x1="150" y1="160" x2="280" y2="100" stroke="#718780" strokeWidth="2" />
      <circle cx="150" cy="160" r="16" fill="#d9edf7" /><circle cx="280" cy="100" r="16" fill="#c8e7dc" />
      <text x="145" y="166">-</text><text x="275" y="107">+</text>
      <Arrow x={128} y={160} dx={-55} dy={0} color="#c05d28"/><Arrow x={302} y={100} dx={55} dy={0} color="#c05d28"/>
      <Arrow x={181} y={145} dx={70} dy={-32}/><text x="216" y="151" fontSize="16">p</text>
      <text x="75" y="216" fontSize="16">Equal opposite forces; tilted dipole</text><text x="75" y="247" fontSize="16">Torque turns p toward E</text>
    </>}
  </svg>;
}
