import styles from './lecture.module.css';
import {acidDistributionRatio,organicInventoryFraction} from './weak-acid-extraction-model';
const fraction=(pH:number)=>organicInventoryFraction(acidDistributionRatio(10,pH,4),100,50);
const extractionPath=Array.from({length:301},(_,i)=>{const pH=1+i/50;return `${i?'L':'M'}${(50+(pH-1)*62).toFixed(2)},${(240-190*fraction(pH)).toFixed(2)}`;}).join(' ');
const outcomes=[['—','+0.29 V','+0.82 V'],['−0.29 V','—','+0.53 V'],['−0.82 V','−0.53 V','—']];
export default function PeriodicSeparationEvidenceDiagram({kind}:{kind:'halogens'|'extraction'}){
 const extraction=kind==='extraction';
 const title=extraction?'Weak-acid extraction at maintained aqueous pH':'Halogen displacement: supplied standard cell potentials';
 return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label={title}>
  <title>{title}</title><rect width="460" height="310" rx="12" fill="#f5faf7"/>
  <g fill="#20483e" fontFamily="Arial,sans-serif" fontSize="13">
   {extraction?<>
    <text x="230" y="24" textAnchor="middle" fontSize="17" fontWeight="bold">Ionization changes extraction</text>
    <text x="230" y="45" textAnchor="middle">P=10; pKa=4; Vaq=100 mL; Vo=50 mL</text>
    <path d="M50 59V240H425" stroke="#7a928a" fill="none"/>
    {[0,.5,1].map(f=><g key={f}><path d={`M50 ${240-190*f}H422`} stroke="#dbe8e2"/><text x="43" y={244-190*f} textAnchor="end">{f*100}%</text></g>)}
    <path d={extractionPath} stroke="#218164" strokeWidth="3" fill="none"/>
    {[1,2,3,4,5,6,7].map(pH=><text key={pH} x={50+(pH-1)*62} y="259" textAnchor="middle">{pH}</text>)}
    {[4,6].map(pH=><g key={pH}><circle cx={50+(pH-1)*62} cy={240-190*fraction(pH)} r="4" fill="#4478bc"/><text x={50+(pH-1)*62} y={pH===4?89:214} textAnchor="middle">{pH===4?'71.4%':'4.72%'}</text></g>)}
    <text x="230" y="279" textAnchor="middle">Aqueous pH; vertical axis = organic inventory %</text>
    <text x="230" y="302" textAnchor="middle">Only neutral HA partitions; ion A⁻ stays aqueous</text>
   </>:<>
    <text x="230" y="25" textAnchor="middle" fontSize="17" fontWeight="bold">Halogen reduced / halide oxidized</text>
    <text x="230" y="47" textAnchor="middle">E°cell = row reduction potential − column value</text>
    {['Cl⁻','Br⁻','I⁻'].map((ion,j)=><text key={ion} x={207+j*88} y="77" textAnchor="middle" fontWeight="bold">{ion}</text>)}
    {['Cl₂','Br₂','I₂'].map((halogen,i)=><g key={halogen}>
     <text x="82" y={116+i*55} textAnchor="middle" fontWeight="bold">{halogen}</text>
     {outcomes[i].map((value,j)=><g key={j}><rect x={166+j*88} y={91+i*55} width="81" height="43" rx="5" fill={j>i?'#deeee5':'#e9efec'}/><text x={207+j*88} y={117+i*55} textAnchor="middle">{value}</text></g>)}
    </g>)}
    <text x="230" y="270" textAnchor="middle">Positive: written standard direction favoured</text>
    <text x="230" y="294" textAnchor="middle">Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂; two electrons</text>
   </>}
  </g>
 </svg>;
}
