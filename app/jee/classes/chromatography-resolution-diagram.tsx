import styles from './lecture.module.css';
import {chromatographyResolutionCases} from './chromatography-resolution-data';
export default function ChromatographyResolutionDiagram(){
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label="Same chromatographic peak centres at four and five minutes: baseline widths half a minute give resolution two, widths1.2 minutes give resolution0.833">
  <title>Peak width changes resolution without moving retention times</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial,sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="27" fontSize="17" fontWeight="bold">Peak positions alone do not fix resolution</text>
   <text x="230" y="49" fontSize="13">tM=1 min; kA=3; kB=4; selectivity=4/3</text>
   {chromatographyResolutionCases.map((model,i)=>{const base=140+i*120,resolution=2*(model.centres[1]-model.centres[0])/(model.baselineWidths[0]+model.baselineWidths[1]);return <g key={model.label}>
    <text x="230" y={base-71} fontSize="13">{model.label}: baseline widths {model.baselineWidths[0]} min each; Rs={resolution.toFixed(3)}</text>
    <path d={`M50 ${base-58}V${base}H412`} stroke="#20483e" fill="none"/>
    {model.centres.map((centre,j)=>{const width=model.baselineWidths[j],points=Array.from({length:181},(_,n)=>{const t=3+n/60;return `${50+120*(t-3)},${base-54*Math.exp(-8*((t-centre)/width)**2)}`;});return <polyline key={j} points={points.join(' ')} fill="none" stroke={j===0?'#4478bc':'#218164'} strokeWidth="2.6"/>;})}
    {[3,4,5,6].map(t=><text key={t} x={50+120*(t-3)} y={base+17} fontSize="12">{t}</text>)}
    <text x="230" y={base+34} fontSize="12">Retention time / min</text>
   </g>;})}
   <text x="230" y="314" fontSize="11">Illustrative Gaussian peaks; baseline-width convention w=4σ</text>
  </g>
 </svg>;
}
