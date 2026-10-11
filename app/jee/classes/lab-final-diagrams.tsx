import styles from "./lecture.module.css";
const blue="#2878ac",green="#247e68",red="#ce5064",ink="#52636b";
const resistorBands:[number,string][]=[[125,red],[155,"#8756a5"],[185,"#835c45"],[240,"#b59b42"]];
const titles:Record<string,string[]>={
  "lab-optics":["Locate the real image, then use signed distances","A converging lens: real image on the right","A diverging lens reduces existing convergence","Minimum deviation is the graph's turning point","Separate apparent rise from apparent thickness"],
  "lab-devices":["Static ratio and local slope are different","Signed reverse voltage and current are negative","Reverse magnitudes: a steep breakdown branch","Read the value, multiplier and tolerance","Identify the part before trusting its pinout"],
};
function Text({x,y,children}:{x:number;y:number;children:React.ReactNode}) {return <text x={x} y={y} fontSize="14">{children}</text>;}
function Arrow({x,y,end,color=blue}:{x:number;y:number;end:number;color?:string}) {
  return <path d={`M${x} ${y} V${end} m-4 ${end<y?6:-6} l4 ${end<y?-6:6} l4 ${end<y?6:-6}`} fill="none" stroke={color} strokeWidth="2"/>;
}
export default function FinalLabDiagram({lessonId,chapter}:{lessonId:string;chapter:number}) {
  return <svg className={styles.forceDiagram} viewBox="0 0 440 300" role="img" aria-label={titles[lessonId]?.[chapter]}>
    <text x="12" y="24" fontSize="15">{titles[lessonId]?.[chapter]}</text>
    {lessonId==='lab-optics' && <>
      {chapter===0 && <>
        <path d="M40 150 H400 M375 85 Q395 150 375 215" fill="none" stroke={ink}/>
        <path d="M236 120 H380 L92 210 M236 120 L380 150 L92 210" fill="none" stroke={green}/>
        <Arrow x={236} y={150} end={120}/><Arrow x={92} y={150} end={210} color={red}/>
        <Text x={198} y={102}>Object</Text><Text x={56} y={235}>Real image</Text>
        <Text x={273} y={170}>F</Text><Text x={387} y={170}>P</Text>
        <Text x={25} y={268}>u = -24 cm; v = -48 cm; f = -16 cm</Text>
        <Text x={25} y={291}>Move your eye: no relative image-pin movement</Text>
      </>}
      {chapter===1 && <>
        <path d="M30 150 H430" stroke={ink}/><ellipse cx="180" cy="150" rx="12" ry="95" fill="#e4f1f7" stroke={blue}/>
        <path d="M60 110 H180 L420 230 M60 110 L420 230" fill="none" stroke={green}/>
        <Arrow x={60} y={150} end={110}/><Arrow x={420} y={150} end={230} color={red}/>
        <Text x={35} y={91}>Object</Text><Text x={148} y={51}>Lens</Text>
        <Text x={250} y={173}>F</Text><Text x={332} y={247}>Real image</Text>
        <Text x={25} y={272}>u = -30 cm; v = +60 cm; f = +20 cm</Text>
        <Text x={25} y={294}>With positive U and V: 1/V = -1/U + 1/f</Text>
      </>}
      {chapter===2 && <>
        <Text x={25} y={55}>Incident beam from a fixed convex lens</Text>
        <path d="M25 150 H415" stroke={ink}/>
        <path d="M88 85 Q109 150 88 215 L112 215 Q91 150 112 85 Z" fill="#e4f1f7" stroke={blue}/>
        <path d="M20 83.333 L100 110 M20 216.667 L100 190" stroke={blue} fill="none"/>
        <path d="M100 110 L220 150 L100 190" stroke={ink} strokeDasharray="4 4" fill="none"/>
        <path d="M100 110 L400 150 L100 190" stroke={green} strokeWidth="2" fill="none"/>
        <circle cx="220" cy="150" r="3" fill={ink}/><circle cx="400" cy="150" r="3" fill={green}/>
        <Text x={209} y={104}>I1</Text><Text x={378} y={178}>I2</Text>
        <Text x={160} y={207}>Would-be focus</Text><Text x={310} y={232}>Real image</Text>
        <Text x={25} y={268}>u = +12 cm; v = +30 cm; f = -20 cm</Text>
        <Text x={25} y={291}>Real final image requires 0 &lt; u &lt; |f|</Text>
      </>}
      {chapter===3 && <>
        <path d="M55 230 V65 M55 230 H390" stroke={ink} fill="none"/>
        <Text x={25} y={54}>Deviation</Text><Text x={310} y={252}>Incidence</Text>
        <path d="M85 90 Q215 290 365 90" stroke={green} strokeWidth="2" fill="none"/>
        <circle cx="220" cy="190" r="4" fill={blue}/>
        <Text x={92} y={143}>Dm = 40 degrees</Text><Text x={252} y={108}>i = e = 50 degrees</Text>
        <Text x={25} y={274}>A = 60 degrees; n = sin(50)/sin(30) = 1.532</Text>
        <Text x={25} y={294}>Schematic curve; use the measured minimum</Text>
      </>}
      {chapter===4 && <>
        <rect x="55" y="80" width="195" height="150" fill="#e4f1f7" stroke={blue}/>
        <path d="M55 180 H250" stroke={green} strokeDasharray="4 4"/>
        <circle cx="145" cy="230" r="4" fill={red}/>
        <Text x={265} y={84}>Top: 4 cm</Text><Text x={265} y={183}>Image: 2 cm</Text><Text x={265} y={234}>Bottom: 1 cm</Text>
        <Text x={75} y={115}>Apparent thickness</Text><Text x={115} y={140}>2 cm</Text>
        <Text x={25} y={272}>Real thickness = 3 cm; n = 3/2 = 1.5</Text>
        <Text x={25} y={294}>Apparent rise = 1 cm, not apparent thickness</Text>
      </>}
    </>}
    {lessonId==='lab-devices' && <>
      {chapter===0 && <>
        <path d="M55 230 V60 M55 230 H390" fill="none" stroke={ink}/><Text x={25} y={52}>I (mA)</Text><Text x={347} y={251}>V (V)</Text>
        <path d="M55 230 C190 230 250 225 295 185 C323 158 338 110 350 60" fill="none" stroke={green} strokeWidth="2"/>
        <path d="M55 230 L335 110 M285 210 L350 75" fill="none" stroke={blue} strokeDasharray="4 4"/>
        <Text x={90} y={80}>V/I = 167.5 ohms at 0.67 V, 4 mA</Text>
        <Text x={80} y={115}>Delta V / Delta I = 10 ohms</Text>
        <Text x={25} y={275}>0.65 V, 2 mA to 0.67 V, 4 mA</Text>
        <Text x={25} y={294}>Conceptual curve; secant and local slopes differ</Text>
      </>}
      {chapter===1 && <>
        <path d="M40 130 H405 M300 55 V245" fill="none" stroke={ink}/><Text x={355} y={118}>V</Text><Text x={313} y={55}>I</Text>
        <path d="M60 190 C125 151 190 144 290 144" stroke={green} strokeWidth="2" fill="none"/>
        <Text x={65} y={80}>Forward-defined signs</Text><Text x={62} y={222}>V = -3 V; I = -2 microamperes</Text>
        <Text x={25} y={272}>Reverse branch: lower-left quadrant</Text>
        <Text x={25} y={294}>2 microamperes = 0.002 mA</Text>
      </>}
      {chapter===2 && <>
        <path d="M55 230 V60 M55 230 H390" stroke={ink} fill="none"/>
        <Text x={25} y={52}>Reverse I magnitude</Text><Text x={268} y={252}>Reverse V magnitude</Text>
        <path d="M55 225 H277 C295 225 304 215 310 195 L320 72" stroke={green} strokeWidth="2" fill="none"/>
        <Text x={90} y={107}>Vz approximately 5.1 V</Text><Text x={85} y={140}>Current must be limited</Text>
        <Text x={25} y={277}>9 V source, 390 ohms: I = 10 mA</Text>
        <Text x={25} y={296}>Pz = 51 mW; verify actual ratings and margin</Text>
      </>}
      {chapter===3 && <>
        <path d="M45 100 H95 M265 100 H310" stroke={ink}/><rect x="95" y="80" width="170" height="40" rx="8" fill="#f0f3f5" stroke={ink}/>
        {resistorBands.map(([x,c])=><rect key={x} x={x} y="80" width="9" height="40" fill={c}/>)}
        <Text x={45} y={60}>Red / violet / brown / gold</Text><Text x={45} y={150}>27 x 10 ohms, tolerance 5 percent</Text>
        <circle cx="110" cy="220" r="30" fill="#e4f1f7" stroke={blue}/><text x="97" y="226" fontSize="16">104</text>
        <path d="M97 247 V270 M123 247 V270" stroke={ink}/>
        <Text x={170} y={214}>10 x 10^4 pF</Text><Text x={170} y={242}>= 100 nF</Text>
        <Text x={25} y={294}>Representative markings; verify the part</Text>
      </>}
      {chapter===4 && <>
        <rect x="52" y="76" width="90" height="75" rx="7" fill="#edf1f3" stroke={ink}/><Text x={72} y={117}>BJT</Text>
        <path d="M70 151 V190 M97 151 V190 M124 151 V190" stroke={ink}/>
        <Text x={25} y={216}>Three terminals</Text>
        <rect x="250" y="75" width="120" height="90" fill="#edf1f3" stroke={ink}/><circle cx="265" cy="91" r="4" fill={blue}/><Text x={280} y={125}>IC</Text>
        {[0,1,2,3].map(i=><path key={i} d={`M${263+29*i} 75 V60 M${263+29*i} 165 V185`} stroke={ink}/>)}
        <Text x={237} y={214}>Orientation dot</Text>
        <Text x={25} y={265}>Part number + datasheet + safe test</Text>
        <Text x={25} y={290}>Sketches do not specify a universal pin order</Text>
      </>}
    </>}
  </svg>;
}
