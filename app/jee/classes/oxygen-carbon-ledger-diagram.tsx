import {oxygenCarbonLedgers as ledgers} from './oxygen-carbon-ledger-data';
import styles from './lecture.module.css';
export default function OxygenCarbonLedgerDiagram(){
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label="Carbon conservation in ester Grignard addition and hydride reduction">
  <title>Follow both ester carbon fragments through work-up</title>
  <rect width="460" height="320" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="25" fontSize="16" fontWeight="bold">Two ester reactions, different carbon ledgers</text>
   {ledgers.map((ledger,i)=><g key={ledger.label} transform={`translate(0 ${i*140})`}>
    <text x="230" y="53" fontSize="13" fontWeight="bold">{ledger.label}</text>
    {[ledger.inputs,ledger.outputs].map((side,j)=><g key={j}>
     <text x={118+j*224} y="77" fontSize="11">{j===0?'Carbon inputs':'Alcohol products after work-up'}</text>
     {side.map((item,k)=><text key={item.name} x={118+j*224} y={97+k*19} fontSize="12">{item.name}: {item.carbons} C</text>)}
     <text x={118+j*224} y="135" fontSize="12" fontWeight="bold">Total {side.reduce((s,v)=>s+v.carbons,0)} C</text>
    </g>)}
    <text x="230" y="112" fontSize="22">→</text>
    <text x="230" y="153" fontSize="11">{ledger.note}</text>
   </g>)}
  </g>
 </svg>;
}
