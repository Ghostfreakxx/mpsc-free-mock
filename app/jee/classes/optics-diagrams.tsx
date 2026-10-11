import styles from "./lecture.module.css";

const blue = "#2878ac", green = "#247e68", red = "#ce5064", violet = "#8857a1", ink = "#52636b";
const titles: Record<string,string[]> = {
  refraction: ["Air to glass: bend toward the normal", "Parallel faces: lateral shift", "Near-normal apparent depth", "Three glass-to-air incidence cases", "One spherical refracting interface"],
  lenses: ["Converging lens: two useful rays", "Real image: v = +15 cm", "Inside the focus: virtual image", "Curvature signs and relative index", "Contact powers add, not focal lengths"],
  prisms: ["A prism changes the outgoing direction", "Symmetric path at minimum deviation", "Check the inverse-sine argument", "Small-angle prism approximation", "Different indices, different deviations"],
  "optical-instruments": ["An angle, not just an image height", "One lens: two viewing conditions", "A microscope has two stages", "Normal astronomical refractor", "Reflector: the optical sequence"],
  interference: ["Advancing envelope of wavelets", "Same time, different wavelet radii", "Phase determines reinforcement", "Young's screen: beta = 1 mm", "Covered slit: center shifts toward it"],
  "diffraction-polarization": ["Pair the two halves of one slit", "Single-slit far-field intensity", "Select the transverse E direction", "Track intensity after every filter", "Brewster: reflected and refracted at 90"],
};

function Arrow({d,color=blue,dashed=false}: {d:string;color?:string;dashed?:boolean}) {
  return <path d={d} fill="none" stroke={color} strokeWidth="2" strokeDasharray={dashed?"5 4":undefined} markerEnd={dashed?undefined:`url(#op-${color.slice(1)})`}/>;
}
function Label({x,y,children}: {x:number;y:number;children:React.ReactNode}) {
  return <text x={x} y={y} fontSize="14">{children}</text>;
}
function Lens({x}: {x:number}) {
  return <path d={`M${x} 87 Q${x-21} 175 ${x} 247 Q${x+21} 175 ${x} 87`} fill="#e1f0ed" stroke={green} strokeWidth="2"/>;
}

export default function OpticsDiagram({lessonId,chapter}: {lessonId:string;chapter:number}) {
  return <svg className={styles.forceDiagram} viewBox="0 0 440 300" role="img" aria-label={titles[lessonId]?.[chapter]}>
    <defs>{[blue,green,red,violet].map(color=><marker key={color} id={`op-${color.slice(1)}`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7" fill={color}/></marker>)}</defs>
    <text x="12" y="24" fontSize="15">{titles[lessonId]?.[chapter]}</text>
    {lessonId==="refraction" && <>
      {chapter===0 && <>
        <path d="M25 140 H415 M220 47 V258" stroke={ink} strokeDasharray="5 4"/>
        <Arrow d="M160 36 L220 140"/><Arrow d="M220 140 L257 244" color={green}/>
        <Label x={35} y={85}>Air: n = 1</Label><Label x={35} y={200}>Glass: n = 1.5</Label>
        <Label x={230} y={80}>i = 30 degrees</Label><Label x={269} y={192}>r = 19.5</Label>
        <Label x={55} y={285}>Frequency unchanged; wavelength decreases</Label>
      </>}
      {chapter===1 && <>
        <rect x="27" y="80" width="382" height="100" fill="#e1f0ed"/>
        <path d="M27 80 H409 M27 180 H409" stroke={ink}/>
        <path d="M140 44 V206 M197.735 144 V229" stroke={ink} strokeDasharray="5 4"/>
        <Arrow d="M100 40 L140 80 L197.735 180 L257.735 240"/>
        <path d="M140 80 L310 250" stroke={red} strokeDasharray="5 4"/>
        <Label x={281} y={124}>Glass slab</Label><Label x={39} y={137}>t = 2 cm</Label>
        <Label x={38} y={268}>i = 45, r = 30 degrees; shift about 0.60 cm</Label>
        <Label x={46} y={291}>Dashed red: continuation without the slab</Label>
      </>}
      {chapter===2 && <>
        <rect x="24" y="140" width="391" height="123" fill="#e1f0ed"/>
        <path d="M24 140 H415" stroke={ink}/><Label x={33} y={91}>Air observer</Label><Label x={33} y={174}>Water: n = 4/3</Label>
        <Arrow d="M220 240 L230 140 L243.333 40"/>
        <path d="M230 140 L220 215" stroke={red} strokeWidth="2" strokeDasharray="5 4"/>
        <circle cx="220" cy="240" r="4" fill={blue}/><circle cx="220" cy="215" r="4" fill={red}/>
        <Label x={268} y={215}>Apparent: 9 cm</Label><Label x={268} y={243}>Real: 12 cm</Label>
        <Label x={45} y={286}>Near-normal ray schematic; upward shift 3 cm</Label>
      </>}
      {chapter===3 && <>
        {[30,41.8103148958,50].map((angle,i)=><g key={angle} transform={`translate(${24+i*139} 45)`}>
          <path d="M0 120 H124 M55 76 V168" stroke={ink} strokeDasharray="4 3"/>
          <Arrow d={`M${55-35*Math.tan(angle*Math.PI/180)} 155 L55 120`}/>
          {i===0?<Arrow d="M55 120 L94.686 85" color={green}/>:i===1?<Arrow d="M55 120 H118" color={green}/>:<Arrow d="M55 120 L96.711 155" color={red}/>}
          <Label x={6} y={56}>Air</Label><Label x={6} y={193}>{i===0?"i = 30":i===1?"i = 41.8":"i = 50"}</Label>
          <Label x={6} y={219}>{i===0?"Transmitted":i===1?"Grazing limit":"TIR"}</Label>
        </g>)}
        <Label x={32} y={290}>Incidence from glass n = 1.5; angles in degrees</Label>
      </>}
      {chapter===4 && <>
        <path d="M26 170 H416" stroke={ink}/><path d="M141 70 Q119 170 141 246" fill="none" stroke={green} strokeWidth="3"/>
        <Arrow d="M40 170 L130 162 L400 170"/>
        <path d="M130 162 L160 170" stroke={ink} strokeDasharray="3 3"/>
        <circle cx="40" cy="170" r="4" fill={blue}/><circle cx="400" cy="170" r="4" fill={red}/>
        <Label x={26} y={115}>Air: n1 = 1</Label><Label x={220} y={115}>Glass: n2 = 1.5</Label>
        <Label x={26} y={206}>u = -60</Label><Label x={143} y={206}>C</Label><Label x={323} y={206}>v = +180</Label>
        <Label x={36} y={260}>R = +20 cm; schematic close to the axis</Label>
        <Label x={51} y={286}>Pole at x = 0; positive direction is right</Label>
      </>}
    </>}
    {lessonId==="lenses" && <>
      {(chapter===0 || chapter===1) && <>
        <path d="M24 175 H416" stroke={ink}/><Lens x={220}/>
        <Arrow d="M40 175 V130"/><Arrow d="M310 175 V197.5" color={red}/>
        <Arrow d="M40 130 H220 L350 227.5" color={green}/><Arrow d="M40 130 L400 220"/>
        <Label x={27} y={117}>Object</Label><Label x={285} y={226}>Image</Label>
        <Label x={147} y={196}>F1</Label><Label x={272} y={196}>F2</Label>
        <Label x={40} y={273}>u = -30 cm; f = +10 cm; v = +15 cm</Label>
        <Label x={93} y={290}>Paraxial thin-lens schematic</Label>
      </>}
      {chapter===2 && <>
        <path d="M25 175 H416" stroke={ink}/><Lens x={220}/>
        <Arrow d="M190 175 V150"/><Arrow d="M160 175 V125" color={red}/>
        <Arrow d="M190 150 H220 L400 225" color={green}/><Arrow d="M190 150 L310 250"/>
        <path d="M220 150 L160 125 M220 175 L160 125" stroke={red} strokeDasharray="5 4"/>
        <Label x={100} y={112}>Virtual image</Label><Label x={276} y={196}>F2</Label>
        <Label x={47} y={273}>f = +10, u = -5: v = -10 cm; m = +2</Label>
        <Label x={93} y={290}>Paraxial thin-lens schematic</Label>
      </>}
      {chapter===3 && <>
        <path d="M24 175 H416" stroke={ink}/><Lens x={220}/>
        <Arrow d="M31 115 H147"/><Label x={30} y={100}>Light: left to right</Label>
        <Label x={34} y={213}>R1 = +20 cm</Label><Label x={270} y={213}>R2 = -20 cm</Label>
        <Label x={166} y={60}>n_lens = 1.5</Label>
        <Label x={35} y={259}>Air: f = +20 cm; matched medium: P = 0</Label>
        <Label x={31} y={286}>Use n_lens/n_medium, not n_lens alone</Label>
      </>}
      {chapter===4 && <>
        <Lens x={189}/><path d="M212 90 Q230 175 212 248 L251 248 Q233 175 251 90 Z" fill="#f8e4e8" stroke={red} strokeWidth="2"/>
        <Label x={44} y={60}>+5 D</Label><Label x={326} y={60}>-2 D</Label>
        <Label x={39} y={272}>In contact: P = +3 D, f = +0.333... m</Label>
        <Label x={55} y={290}>Separated lenses need another relation</Label>
      </>}
    </>}
    {lessonId==="prisms" && <>
      {chapter<3 && <>
        <path d="M220 67 L110 257 H330 Z" fill="#e1f0ed" stroke={ink} strokeWidth="2"/>
        <Arrow d="M70 180 L170 153.205 H270 L370 180"/>
        <path d="M133 132 L200 170 M240 170 L307 132" stroke={ink} strokeDasharray="4 4"/>
        <Label x={198} y={107}>A</Label><Label x={139} y={198}>r1</Label><Label x={273} y={198}>r2</Label>
        <Label x={31} y={267}>{chapter===0?"delta = i + e - A; r1 + r2 = A":chapter===1?"Minimum: i = e; r1 = r2 = A/2":"n = 1.5, A = 60: delta_min = 37.2 degrees"}</Label>
        <Label x={65} y={290}>Symmetric ray-path geometry guide</Label>
      </>}
      {chapter===3 && <>
        <path d="M181 70 L173 235 H241 Z" fill="#e1f0ed" stroke={ink} strokeWidth="2"/>
        <Arrow d="M35 142 H179 L217 145 L391 153"/>
        <Label x={258} y={94}>Thin prism</Label><Label x={258} y={119}>Small angles</Label>
        <Label x={55} y={268}>A = 4 degrees, n = 1.5: delta about 2</Label>
        <Label x={72} y={292}>Diagram enlarged for visibility</Label>
      </>}
      {chapter===4 && <>
        <path d="M180 72 L99 230 H260 Z" fill="#e1f0ed" stroke={ink} strokeWidth="2"/>
        <Arrow d="M25 150 H141 L220 156 L392 178" color={red}/>
        <Arrow d="M25 150 H141 L220 163 L392 199" color={violet}/>
        <Label x={285} y={152}>Red: 2 degrees</Label><Label x={267} y={225}>Violet: 2.08</Label>
        <Label x={38} y={270}>Thin 4-degree prism: separation 0.08 degrees</Label>
        <Label x={65} y={290}>Normal dispersion; schematic rays</Label>
      </>}
    </>}
    {lessonId==="optical-instruments" && <>
      {chapter===0 && <>
        <Arrow d="M59 183 V119"/><path d="M59 119 L366 183 H59" fill="none" stroke={green} strokeWidth="2"/>
        <circle cx="366" cy="183" r="7" fill={blue}/><Label x={335} y={211}>Eye</Label><Label x={31} y={154}>h</Label>
        <Label x={151} y={209}>Distance d</Label><Label x={290} y={163}>theta</Label>
        <Label x={41} y={272}>h = 1 mm, d = 25 cm: theta about 0.004 rad</Label>
      </>}
      {chapter===1 && <>
        <Lens x={220}/><path d="M28 175 H409" stroke={ink}/><Arrow d="M125 175 V133"/>
        <Arrow d="M125 133 H220 L396 211"/><Arrow d="M125 133 L396 252.81" color={green}/>
        <Label x={34} y={64}>Relaxed eye: D/f = 5</Label><Label x={34} y={91}>Near point: 1 + D/f = 6</Label>
        <Label x={59} y={279}>Virtual-image geometry shown schematically</Label>
      </>}
      {chapter===2 && <>
        <Lens x={115}/><Lens x={300}/><path d="M24 175 H415" stroke={ink}/>
        <Arrow d="M69 175 V152"/><Arrow d="M254 175 V221" color={red}/>
        <Label x={42} y={60}>Objective</Label><Label x={268} y={60}>Eyepiece</Label>
        <Label x={151} y={244}>Intermediate image</Label>
        <Label x={40} y={268}>Exact example: m_o = -10; M_e = +5</Label><Label x={144} y={290}>Total M = -50</Label>
      </>}
      {chapter===3 && <>
        <Lens x={114}/><Lens x={328}/><path d="M26 175 H416" stroke={ink}/>
        <Arrow d="M27 125 H114 L278 175 L328 190 L410 190"/><Arrow d="M27 225 H114 L278 175 L328 160 L410 160" color={green}/>
        <Label x={52} y={57}>Objective</Label><Label x={284} y={57}>Eyepiece</Label><Label x={243} y={215}>F_o = F_e</Label>
        <Label x={40} y={271}>f_o = 100, f_e = 5 cm: |M| = 20</Label><Label x={89} y={290}>Lens separation = 105 cm</Label>
      </>}
      {chapter===4 && <>
        <path d="M99 101 Q61 175 99 245" fill="none" stroke={ink} strokeWidth="5"/>
        <Label x={127} y={80}>Concave primary</Label>
        <Arrow d="M350 124 H87 L262 175"/><Arrow d="M350 226 H87 L262 175" color={green}/>
        <circle cx="262" cy="175" r="4" fill={red}/><Label x={246} y={203}>Real image</Label>
        <Label x={35} y={268}>Eyepiece magnifies this image: |M| = 50</Label><Label x={53} y={290}>Optical sequence, not a hardware layout</Label>
      </>}
    </>}
    {lessonId==="interference" && <>
      {chapter===0 && <>
        {[82,127,172,217].map(y=><g key={y}><circle cx="158" cy={y} r="47" fill="none" stroke={green} strokeWidth="1"/><circle cx="158" cy={y} r="3" fill={blue}/></g>)}
        <path d="M158 54 V274" stroke={blue} strokeWidth="2"/><path d="M205 54 V274" stroke={red} strokeWidth="3"/>
        <Arrow d="M255 167 H387"/><Label x={254} y={145}>Propagation</Label><Label x={30} y={289}>Front x = 158; advancing envelope x = 205</Label>
      </>}
      {chapter===1 && <>
        <path d="M30 143 H410" stroke={ink}/><Label x={33} y={63}>Same delta_t on each side</Label>
        <path d="M75 102 H212.47727085 L212.47727085 42 Z" fill="none" stroke={blue} strokeWidth="2"/>
        <path d="M75 232 H219.568322948 L219.568322948 192 Z" fill="none" stroke={green} strokeWidth="2"/>
        <Label x={249} y={89}>Distance v1 delta_t</Label><Label x={249} y={208}>Distance v2 delta_t</Label>
        <Label x={48} y={266}>Equal hypotenuses give the sine ratio</Label><Label x={109} y={290}>sin i / sin r = v1 / v2</Label>
      </>}
      {chapter===2 && <>
        {[0,1].map(row=><g key={row}>
          <polyline points={Array.from({length:151},(_,i)=>`${30+i*2.5},${100+row*105-24*Math.sin(i*Math.PI/15)}`).join(" ")} fill="none" stroke={blue} strokeWidth="2"/>
          <polyline points={Array.from({length:151},(_,i)=>`${30+i*2.5},${100+row*105-24*Math.sin(i*Math.PI/15+(row?Math.PI:0))}`).join(" ")} fill="none" stroke={red} strokeWidth="2" strokeDasharray="5 3"/>
        </g>)}
        <Label x={37} y={62}>In phase: I_max = 36 for I1 = I2 = 9</Label><Label x={37} y={165}>Opposite phase: I_min = 0</Label>
        <Label x={49} y={284}>Unequal intensities 4 and 9: max 25, min 1</Label>
      </>}
      {chapter===3 && <>
        <path d="M85 56 V126 M85 137 V204 M85 215 V263 M345 49 V270" stroke={ink} strokeWidth="4"/>
        <path d="M85 132 L345 183 M85 209 L345 183" stroke={blue} strokeWidth="2"/>
        {[0,1,2,3,4].map(i=><rect key={i} x="345" y={102.5+i*38} width="20" height="9" fill={i===2?red:blue}/>)}
        <Label x={33} y={119}>S1</Label><Label x={33} y={218}>S2</Label><Label x={160} y={234}>Screen distance D</Label>
        <Label x={31} y={284}>Bright positions: -2, -1, 0, +1, +2 mm</Label>
      </>}
      {chapter===4 && <>
        <path d="M90 59 V258 M350 49 V260" stroke={ink} strokeWidth="3"/>
        <rect x="103" y="95" width="18" height="44" fill="#e1f0ed" stroke={green}/><circle cx="90" cy="117" r="5" fill={blue}/><circle cx="90" cy="212" r="5" fill={blue}/>
        <path d="M90 117 L350 138 M90 212 L350 138" stroke={blue} strokeWidth="2"/>
        <Arrow d="M350 182 V138" color={red}/><Label x={150} y={77}>Sheet covers upper slit</Label>
        <Label x={161} y={241}>Shift toward covered slit</Label><Label x={50} y={282}>Extra path 1 micrometer: N = 2 fringes</Label>
      </>}
    </>}
    {lessonId==="diffraction-polarization" && <>
      {chapter===0 && <>
        <path d="M135 55 V90 M135 230 V269" stroke={ink} strokeWidth="5"/>
        <path d="M135 90 V230" stroke={green} strokeWidth="3"/><path d="M135 160 H162" stroke={ink}/>
        {[100,125,150].map(y=><g key={y}><Arrow d={`M135 ${y} L380 ${y-48}`}/><Arrow d={`M135 ${y+70} L380 ${y+22}`} color={red}/></g>)}
        <Label x={32} y={162}>Width a</Label><Label x={179} y={64}>Pair points a/2 apart</Label><Label x={169} y={251}>Pair path difference = lambda/2</Label>
        <Label x={72} y={286}>First minimum: a sin theta = lambda</Label>
      </>}
      {chapter===1 && <>
        <path d="M30 230 H410" stroke={ink}/>
        <polyline points={Array.from({length:381},(_,i)=>{const u=(i-190)*3*Math.PI/190;return `${30+i},${230-150*(Math.abs(u)<1e-9?1:(Math.sin(u)/u)**2)}`;}).join(" ")} fill="none" stroke={blue} strokeWidth="3"/>
        <path d="M156.667 246 H283.333 M156.667 237 V254 M283.333 237 V254" stroke={red} strokeWidth="2"/>
        <Label x={53} y={55}>Normalized far-field intensity</Label><Label x={170} y={269}>W = 10 mm</Label><Label x={53} y={290}>First minima: y = -5 mm and +5 mm</Label>
      </>}
      {chapter===2 && <>
        <circle cx="128" cy="163" r="43" fill="none" stroke={ink}/><circle cx="128" cy="163" r="5" fill={blue}/><Arrow d="M128 218 V100" color={red}/>
        <path d="M278 84 V245 M269 84 H287 M269 245 H287" stroke={green} strokeWidth="3"/>
        <Label x={31} y={60}>Propagation out of page (dot)</Label><Label x={52} y={259}>Transverse E</Label><Label x={294} y={158}>Filter</Label><Label x={294} y={182}>axis</Label>
        <Label x={32} y={288}>Axis selects E direction, not ray direction</Label>
      </>}
      {chapter===3 && <>
        {[{x:80,t:"100",axis:0},{x:215,t:"50",axis:0},{x:350,t:"12.5",axis:60}].map((p,i)=><g key={p.x}>
          <circle cx={p.x} cy="160" r="42" fill="none" stroke={ink}/>
          {i>0&&<path d={`M${p.x-30*Math.sin(p.axis*Math.PI/180)} ${160+30*Math.cos(p.axis*Math.PI/180)} L${p.x+30*Math.sin(p.axis*Math.PI/180)} ${160-30*Math.cos(p.axis*Math.PI/180)}`} stroke={green} strokeWidth="3"/>}
          <Label x={p.x-21} y={234}>{p.t}</Label>
        </g>)}
        <Arrow d="M128 160 H165"/><Arrow d="M263 160 H300"/>
        <Label x={31} y={62}>{"Unpolarized -> first axis -> analyzer at 60"}</Label>
        <Label x={64} y={283}>Half first, then cos squared 60 = 1/4</Label>
      </>}
      {chapter===4 && <>
        <path d="M23 150 H418 M220 44 V266" stroke={ink} strokeDasharray="5 4"/>
        <Arrow d="M94 66 L220 150"/><Arrow d="M220 150 L346 66" color={red}/><Arrow d="M220 150 L290 255" color={green}/>
        <Label x={28} y={120}>Air</Label><Label x={28} y={211}>Glass: n = 1.5</Label>
        <Label x={255} y={62}>i_B = 56.3</Label><Label x={314} y={231}>r = 33.7</Label>
        <Label x={64} y={286}>Reflected and refracted directions are 90 apart</Label>
      </>}
    </>}
  </svg>;
}
