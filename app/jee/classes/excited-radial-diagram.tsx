import styles from './lecture.module.css';
import { hydrogen2sRadial, hydrogen2pRadial } from './excited-radial-functions';
const graph={left:49,right:432,top:67,bottom:229};
const px=(x:number)=>graph.left+x/16*(graph.right-graph.left);
const py=(y:number)=>graph.bottom-y/.22*(graph.bottom-graph.top);
const path=(fn:(x:number)=>number)=>Array.from({length:321},(_,i)=>{const x=i/20;return `${i?'L':'M'}${px(x).toFixed(2)},${py(fn(x)).toFixed(2)}`;}).join(' ');
export default function ExcitedRadialDiagram(){
 return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label="Normalized hydrogen 2s and 2p radial distributions versus x equals r over a0; 2s has a radial node at x=2">
  <title>Hydrogen 2s and 2p radial probability distributions</title>
  <rect width="460" height="330" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" fill="#20483e" fontSize="12">
   <text x="230" y="25" textAnchor="middle" fontSize="17" fontWeight="bold">Hydrogen: excited radial distributions</text>
   <text x="49" y="48">P(x), probability per unit x</text>
   <path d="M49 60V229H439" stroke="#526c62" strokeWidth="1.5" fill="none"/>
   {[0,.1,.2].map(y=><g key={y}><line x1="45" x2="432" y1={py(y)} y2={py(y)} stroke="#d6e5dc"/><text x="40" y={py(y)+4} textAnchor="end">{y.toFixed(1)}</text></g>)}
   {[0,2,4,8,12,16].map(x=><g key={x}><line x1={px(x)} x2={px(x)} y1="229" y2="234" stroke="#526c62"/><text x={px(x)} y="249" textAnchor="middle">{x}</text></g>)}
   <path d={path(hydrogen2sRadial)} fill="none" stroke="#156b55" strokeWidth="2.7"/>
   <path d={path(hydrogen2pRadial)} fill="none" stroke="#b14e2e" strokeWidth="2.7" strokeDasharray="6 3"/>
   <line x1={px(2)} x2={px(2)} y1="77" y2="229" stroke="#78978a" strokeDasharray="3 3"/>
   <circle cx={px(2)} cy="229" r="4" fill="#156b55"/>
   <text x="165" y="82" fill="#156b55">2s: radial node at x=2</text>
   <text x="283" y="110" fill="#b14e2e">2p: no radial node</text>
   <text x="432" y="267" textAnchor="end">x = r/a₀</text>
   <text x="230" y="289" textAnchor="middle">Each full distribution integrates to 1; chart shows 0 ≤ x ≤ 16.</text>
   <text x="230" y="308" textAnchor="middle">A real 2p has an angular nodal plane, absent from this radial plot.</text>
   <text x="230" y="325" textAnchor="middle">Both start at zero; the origin is not an extra radial node.</text>
  </g>
 </svg>;
}
