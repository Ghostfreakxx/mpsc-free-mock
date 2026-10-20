import styles from "./lecture.module.css";

const blue="#2878ac", green="#247e68", red="#ce5064", ink="#52636b";
const titles: Record<string,string[]> = {
  "matter-waves":["Greater momentum, shorter wavelength","Fix the comparison condition first","Four times voltage, half the wavelength","Equal energy, different momentum","Crystal planes and path difference"],
  atoms:["Rare close approaches deflect strongly","Head-on: kinetic energy becomes potential","Hydrogen-like Bohr states","Hydrogen energies: not equally spaced","Six possible pairs across an ensemble"],
  nuclei:["A counts protons and neutrons","Radius follows the cube root of A","A consistent atomic-mass budget","Binding energy per nucleon: broad trend","Balance nucleons and charge first"],
};
function Text({x,y,children}: {x:number;y:number;children:React.ReactNode}) {
  return <text x={x} y={y} fontSize="14">{children}</text>;
}
function Arrow({d,color=blue}: {d:string;color?:string}) {
  return <path d={d} fill="none" stroke={color} strokeWidth="2" markerEnd={`url(#modern-${color.slice(1)})`}/>;
}
function Wave({y,period,label}: {y:number;period:number;label:string}) {
  const d=Array.from({length:301},(_,i)=>`${i?'L':'M'}${45+i} ${y-17*Math.sin(i*2*Math.PI/period)}`).join(' ');
  return <><path d={d} fill="none" stroke={blue} strokeWidth="2"/><Text x={45} y={y+42}>{label}</Text></>;
}
export default function ModernPhysicsDiagram({lessonId,chapter}: {lessonId:string;chapter:number}) {
  return <svg className={styles.forceDiagram} viewBox="0 0 440 300" role="img" aria-label={titles[lessonId]?.[chapter]}>
    <defs>{[blue,green,red].map(color=><marker key={color} id={`modern-${color.slice(1)}`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7" fill={color}/></marker>)}</defs>
    <text x="12" y="24" fontSize="15">{titles[lessonId]?.[chapter]}</text>
    {lessonId==="matter-waves" && <>
      {chapter===0 && <><Wave y={90} period={100} label="Momentum p: wavelength lambda"/><Wave y={185} period={50} label="Momentum 2p: wavelength lambda/2"/><Text x={25} y={282}>Illustration of phase, not a wiggling electron</Text></>}
      {chapter===1 && <>
        <Text x={25} y={65}>Condition</Text><Text x={240} y={65}>Wavelength relation</Text>
        <path d="M25 80 H410 M25 135 H410 M25 190 H410 M25 245 H410" stroke="#d7e2e1"/>
        <Text x={25} y={115}>Same momentum</Text><Text x={240} y={115}>Equal wavelengths</Text>
        <Text x={25} y={170}>Same speed</Text><Text x={240} y={170}>lambda proportional to 1/m</Text>
        <Text x={25} y={225}>Same small kinetic energy</Text><Text x={240} y={225}>lambda scales as 1/sqrt(m)</Text>
        <Text x={25} y={282}>The last two rows use nonrelativistic momentum</Text>
      </>}
      {chapter===2 && <>
        <path d="M90 65 V225 M320 65 V225" stroke={ink} strokeWidth="4"/>
        <Text x={65} y={52}>Start</Text><Text x={270} y={52}>Accelerating region</Text>
        <circle cx="115" cy="120" r="6" fill={blue}/><Arrow d="M125 120 H300"/>
        <Text x={140} y={103}>Energy gained: eV</Text>
        <Text x={110} y={170}>100 V: lambda = 0.1227 nm</Text>
        <Text x={110} y={200}>400 V: lambda = 0.06135 nm</Text>
        <Text x={30} y={268}>Starts from rest; losses neglected; K much less than mc^2</Text>
      </>}
      {chapter===3 && <>
        <Text x={25} y={65}>Each energy value: 100 eV</Text>
        <Wave y={110} period={120} label="Photon: 12.4 nm, p = E/c"/>
        <Wave y={205} period={24} label="Electron: 0.1227 nm, p = sqrt(2mK)"/>
        <Text x={25} y={282}>Schematic wavelengths: not drawn in the 101:1 ratio</Text>
      </>}
      {chapter===4 && <>
        <path d="M30 130 H410 M30 205 H410" stroke={ink} strokeWidth="2"/>
        <Arrow d="M95 65 L190 130 L285 65"/><Arrow d="M95 130 L190 205 L285 130" color={green}/>
        <path d="M170 130 A20 20 0 0 0 175 117" stroke={red} fill="none"/>
        <Text x={135} y={110}>theta</Text><Text x={335} y={170}>d</Text>
        <path d="M325 135 V200" stroke={red}/>
        <Text x={35} y={245}>2d sin(theta) = m lambda</Text>
        <Text x={35} y={270}>d = lambda = 0.2 nm, m = 1: theta = 30 degrees</Text>
        <Text x={35} y={290}>Illustrative geometry; theta is measured to a plane</Text>
      </>}
    </>}
    {lessonId==="atoms" && <>
      {chapter===0 && <>
        <circle cx="225" cy="160" r="85" stroke="#ccdcd8" fill="none" strokeDasharray="5 4"/>
        <circle cx="225" cy="160" r="10" fill={red}/>
        <Arrow d="M30 80 H400"/><Arrow d="M30 120 C200 120 210 90 300 60" color={green}/>
        <Arrow d="M30 155 H185 Q205 155 185 180 H70" color={red}/>
        <Text x={265} y={177}>+Ze nucleus</Text><Text x={30} y={230}>Alpha particles: +2e</Text>
        <Text x={30} y={270}>Rare close paths: large deflections</Text>
        <Text x={30} y={290}>Schematic paths; nucleus enlarged, not to scale</Text>
      </>}
      {chapter===1 && <>
        <circle cx="330" cy="135" r="22" fill={red}/><Text x={310} y={180}>+Ze</Text>
        <Arrow d="M45 135 H180"/><circle cx="200" cy="135" r="7" fill={blue}/>
        <path d="M200 205 H330 M200 196 V214 M330 196 V214" stroke={ink}/>
        <Text x={220} y={231}>r minimum</Text><Text x={35} y={80}>Initial K</Text><Text x={150} y={110}>At turning point: K = 0</Text>
        <Text x={25} y={268}>K initial = 2Zke^2/r minimum</Text>
        <Text x={25} y={290}>Head-on only; heavy fixed nucleus; no recoil</Text>
      </>}
      {chapter===2 && <>
        <circle cx="125" cy="155" r="20" stroke={green} fill="none"/><circle cx="125" cy="155" r="80" stroke={blue} fill="none"/>
        <circle cx="125" cy="155" r="6" fill={red}/>
        <Text x={225} y={100}>n = 1: r = a0</Text><Text x={225} y={140}>n = 2: r = 4a0</Text>
        <Text x={225} y={185}>E1 = -13.6 eV</Text><Text x={225} y={215}>E2 = -3.4 eV</Text>
        <Text x={30} y={270}>Hydrogen: one electron, Z = 1</Text>
        <Text x={30} y={290}>Bohr-model radii, not modern position probabilities</Text>
      </>}
      {chapter===3 && <>
        <path d="M55 50 H260 M55 72.22 H260 M55 100 H260 M55 250 H260" stroke={ink}/>
        <Text x={275} y={54}>0: ionization limit</Text><Text x={275} y={80}>n = 3: -1.511 eV</Text>
        <Text x={275} y={112}>n = 2: -3.4 eV</Text><Text x={275} y={253}>n = 1: -13.6 eV</Text>
        <Arrow d="M100 74 V98" color={green}/><Arrow d="M175 102 V247"/>
        <Text x={25} y={150}>3 to 2: about 656 nm</Text><Text x={25} y={185}>2 to 1: about 122 nm</Text>
        <Text x={25} y={287}>Height represents energy: gaps are not equal</Text>
      </>}
      {chapter===4 && <>
        {[1,2,3,4].map((n,i)=><g key={n}><circle cx={75+i*95} cy="100" r="20" fill="#e1efea" stroke={green}/><Text x={70+i*95} y={105}>{n}</Text></g>)}
        <Text x={25} y={155}>Possible pairs:</Text><Text x={25} y={185}>4 to 3, 4 to 2, 4 to 1</Text>
        <Text x={25} y={215}>3 to 2, 3 to 1, 2 to 1</Text>
        <Text x={25} y={250}>Six distinct lines across an ensemble</Text>
        <Text x={25} y={280}>One 4-to-1 downward cascade: at most three photons</Text>
      </>}
    </>}
    {lessonId==="nuclei" && <>
      {chapter===0 && <>
        {[{x:95,y:110,c:red},{x:125,y:140,c:blue},{x:65,y:145,c:blue},{x:100,y:175,c:red}].map((p,i)=><circle key={i} cx={p.x} cy={p.y} r="23" fill={p.c}/>)}
        <Text x={190} y={95}>Protons: Z</Text><Text x={190} y={130}>Neutrons: N</Text><Text x={190} y={165}>Nucleons: A = Z + N</Text>
        <Text x={25} y={235}>Iron-56: Z = 26, N = 30</Text><Text x={25} y={265}>Cluster is an illustration, not an iron nucleus</Text>
        <Text x={25} y={288}>Atomic masses include electrons; nuclear masses do not</Text>
      </>}
      {chapter===1 && <>
        <circle cx="110" cy="140" r="48" fill="#e1efea" stroke={green}/><circle cx="305" cy="140" r="72" fill="#e3edf6" stroke={blue}/>
        <path d="M110 140 H158 M305 140 H377" stroke={ink}/>
        <Text x={65} y={220}>A = 64</Text><Text x={250} y={235}>A = 216</Text>
        <Text x={65} y={245}>R = 4.8 fm</Text><Text x={250} y={260}>R = 7.2 fm</Text>
        <Text x={25} y={290}>Radius ratio 1.5; volume ratio 3.375</Text>
      </>}
      {chapter===2 && <>
        <Text x={25} y={70}>Hydrogen atom</Text><Text x={255} y={70}>1.007825 u</Text>
        <Text x={25} y={110}>+ neutron</Text><Text x={255} y={110}>1.008665 u</Text>
        <Text x={25} y={150}>- deuterium atom</Text><Text x={255} y={150}>2.014102 u</Text>
        <path d="M25 165 H400" stroke={ink}/>
        <Text x={25} y={195}>Mass defect</Text><Text x={255} y={195}>0.002388 u</Text>
        <Text x={25} y={235}>B = 0.002388 x 931.5 = 2.224 MeV</Text>
        <Text x={25} y={280}>Electron rest masses cancel in this atomic convention</Text>
      </>}
      {chapter===3 && <>
        <path d="M45 235 H410 M45 235 V55" fill="none" stroke={ink}/>
        <path d="M50 230 C65 140 85 75 135 65 C205 58 295 85 400 100" fill="none" stroke={blue} strokeWidth="3"/>
        <Text x={60} y={50}>B/A</Text><Text x={142} y={92}>Iron / nickel region</Text>
        <Text x={290} y={128}>Heavy nuclei</Text><Text x={55} y={265}>Light</Text><Text x={340} y={265}>A</Text>
        <Text x={25} y={290}>Qualitative trend; small-nucleus irregularities omitted</Text>
      </>}
      {chapter===4 && <>
        <Text x={25} y={65}>One illustrative fission channel</Text>
        <Text x={25} y={100}>{"U-235 + n -> Ba-141 + Kr-92 + 3n"}</Text>
        <Text x={25} y={135}>A: 236 = 141 + 92 + 3</Text>
        <Text x={25} y={185}>Fusion illustration</Text>
        <Text x={25} y={220}>{"D + T -> He-4 + n"}</Text>
        <Text x={25} y={255}>Delta m = 0.0189 u: Q approximately 17.6 MeV</Text>
        <Text x={25} y={285}>Positive Q: rest-mass difference releases energy</Text>
      </>}
    </>}
  </svg>;
}
