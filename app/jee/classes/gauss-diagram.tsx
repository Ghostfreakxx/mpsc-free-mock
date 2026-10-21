import styles from "./lecture.module.css";

function Arrow({x,y,dx,dy,color="#247e68"}: {x:number;y:number;dx:number;dy:number;color?:string}) {
  const a=Math.atan2(dy,dx), ex=x+dx, ey=y+dy;
  return <path d={`M${x} ${y} L${ex} ${ey} M${ex-9*Math.cos(a-0.5)} ${ey-9*Math.sin(a-0.5)} L${ex} ${ey} L${ex-9*Math.cos(a+0.5)} ${ey-9*Math.sin(a+0.5)}`} fill="none" stroke={color} strokeWidth="3" />;
}

export default function GaussDiagram({chapter}: {chapter:number}) {
  const titles=["Flux: angle to the area normal", "No enclosed charge can still mean a field", "Uniform shell and concentric surface", "Coaxial cylinder around a charged line", "Sheet pillbox: both faces contribute"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <text x="18" y="28" fontSize="16">{titles[chapter]}</text>
    {chapter===0 && <>
      <line x1="105" y1="125" x2="315" y2="125" stroke="#2878ac" strokeWidth="5" />
      <Arrow x={210} y={125} dx={0} dy={-65} color="#2878ac"/><text x="216" y="65" fontSize="15">normal</text>
      <Arrow x={210} y={125} dx={87} dy={-50}/><text x="310" y="78" fontSize="16">E</text>
      <path d="M210 93 A32 32 0 0 1 238 109" stroke="#c05d28" fill="none" /><text x="245" y="105" fontSize="15">60 deg</text>
      <text x="101" y="164" fontSize="15">surface seen edge-on</text>
      <text x="57" y="206" fontSize="16">E = 200 N/C; A = 0.03 m squared</text><text x="57" y="242" fontSize="16">Flux = 3 N m squared/C</text>
    </>}
    {chapter===1 && <>
      <rect x="150" y="62" width="140" height="122" fill="#eff7f3" stroke="#2878ac" strokeDasharray="5 5" />
      {[86,123,160].map(y=><Arrow key={y} x={45} y={y} dx={345} dy={0}/>)}
      <text x="43" y="209" fontSize="16">Entering flux + leaving flux = 0</text>
      <text x="43" y="244" fontSize="16">Net flux zero does not mean E zero</text>
    </>}
    {chapter===2 && <>
      <circle cx="146" cy="133" r="48" fill="#d9edf7" stroke="#2878ac" strokeWidth="3" />
      <circle cx="146" cy="133" r="82" fill="none" stroke="#247e68" strokeDasharray="5 5" />
      <Arrow x={230} y={133} dx={35} dy={0}/>
      <text x="107" y="128" fontSize="15">inside:</text><text x="117" y="151" fontSize="15">E = 0</text>
      <text x="270" y="93" fontSize="15">R = 0.10 m</text><text x="270" y="122" fontSize="15">r = 0.20 m</text><text x="270" y="154" fontSize="15">Q = 2 nanoC</text>
      <text x="70" y="241" fontSize="16">Outside: E = 450 N/C, radially out</text>
    </>}
    {chapter===3 && <>
      <rect x="108" y="85" width="220" height="82" fill="#eff7f3" stroke="#2878ac" strokeDasharray="5 5" />
      <ellipse cx="108" cy="126" rx="18" ry="41" fill="none" stroke="#2878ac" strokeDasharray="5 5" />
      <ellipse cx="328" cy="126" rx="18" ry="41" fill="none" stroke="#2878ac" strokeDasharray="5 5" />
      <line x1="48" y1="126" x2="390" y2="126" stroke="#c05d28" strokeWidth="3" />
      <Arrow x={218} y={85} dx={0} dy={-35}/><Arrow x={218} y={167} dx={0} dy={35}/>
      <text x="42" y="227" fontSize="15">Curved side flux = E(2 pi r ell)</text><text x="42" y="253" fontSize="15">End-cap flux = 0; E varies as 1/r</text>
    </>}
    {chapter===4 && <>
      <line x1="220" y1="52" x2="220" y2="180" stroke="#c05d28" strokeWidth="5" />
      <rect x="142" y="77" width="156" height="80" fill="none" stroke="#2878ac" strokeDasharray="5 5" />
      <Arrow x={142} y={117} dx={-70} dy={0}/><Arrow x={298} y={117} dx={70} dy={0}/>
      <text x="82" y="68" fontSize="15">E</text><text x="347" y="68" fontSize="15">E</text>
      <text x="54" y="207" fontSize="16">2EA = sigma A / epsilon0</text><text x="54" y="242" fontSize="16">Infinite sheet: E = sigma/(2 epsilon0)</text>
    </>}
  </svg>;
}
