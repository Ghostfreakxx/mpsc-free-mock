import styles from "./lecture.module.css";

export default function RadialProbabilityDiagram() {
 const curve=(offset:number,radial:boolean)=>Array.from({length:101},(_,i)=>{
  const x=4*i/100,y=radial?4*x*x*Math.exp(-2*x):Math.exp(-2*x);
  return `${i===0?"M":"L"}${(offset+40*x).toFixed(2)} ${(242-120*y).toFixed(2)}`;
 }).join(" ");
 return <svg className={styles.diagram} viewBox="0 0 460 350" role="img" aria-label="Hydrogen-like 1s density per volume is largest at the origin, while radial shell distribution peaks at scaled radius one">
  <title>1s: density and radial probability differ</title>
  <rect width="460" height="350" rx="12" fill="#f5faf7" />
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="27" fontSize="17" fontWeight="bold">1s: density versus spherical-shell probability</text>
   <text x="230" y="52" fontSize="14">Scaled horizontal radius x = Zr/a₀</text>
   {[{offset:49,label:"Density per unit volume",formula:"ρ(r)/ρ(0) = exp(−2x)",radial:false},{offset:267,label:"Radial distribution in x",formula:"pₓ(x) = 4x² exp(−2x)",radial:true}].map(({offset,label,formula,radial})=><g key={label}>
    <text x={offset+80} y="78" fontSize="14" fontWeight="bold">{label}</text>
    <text x={offset+80} y="101" fontSize="14">{formula}</text>
    <path d={`M${offset} 112V242H${offset+166}`} stroke="#20483e" fill="none" />
    {[0,1,2,3,4].map(x=><g key={x}><path d={`M${offset+40*x} 242v5`} stroke="#20483e"/><text x={offset+40*x} y="262" fontSize="12">{x}</text></g>)}
    <path d={curve(offset,radial)} fill="none" stroke={radial?"#b54e32":"#146b55"} strokeWidth="3" />
    {radial?<><path d={`M${offset+40} 242V177`} stroke="#b54e32" strokeDasharray="4 4"/><text x={offset+99} y="144" fontSize="13">Peak at x=1</text></>:<text x={offset+94} y="133" fontSize="13">Maximum at x=0</text>}
    <text x={offset+177} y="245" fontSize="12">x</text>
   </g>)}
   <text x="230" y="292" fontSize="14">Different vertical quantities; the shell factor includes r²</text>
   <text x="230" y="317" fontSize="15">Radial maximum r = a₀/Z; not a fixed electron orbit</text>
   <text x="230" y="339" fontSize="12">One-electron Coulomb model · probabilities require integration</text>
  </g>
 </svg>;
}
