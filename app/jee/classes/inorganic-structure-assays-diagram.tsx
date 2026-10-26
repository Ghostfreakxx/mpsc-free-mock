import styles from './lecture.module.css';
const oxygens=[[85,100],[85,195],[145,75],[230,145],[375,100],[375,195],[315,75]];
export default function InorganicStructureAssaysDiagram({kind}:{kind:'silicate'|'iodometry'}){
 const silicate=kind==='silicate';
 const title=silicate?'Two silicate tetrahedra share one oxygen: connectivity graph':'Indirect dichromate assay: six thiosulfates per dichromate';
 return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label={title}>
  <title>{title}</title><rect width="460" height="310" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial,sans-serif" fill="#20483e" fontSize="13">
   {silicate?<>
    <text x="230" y="25" textAnchor="middle" fontSize="17" fontWeight="bold">One shared corner: Si₂O₇⁶⁻</text>
    <text x="230" y="47" textAnchor="middle">Connectivity graph; tetrahedra are not planar</text>
    <path d="M145 145L85 100M145 145L85 195M145 145V75M145 145H315M315 145L375 100M315 145L375 195M315 145V75" stroke="#4478bc" strokeWidth="3" fill="none"/>
    {oxygens.map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="14" fill={i===3?'#f3d9ae':'#deeee5'} stroke="#53796a"/><text x={x} y={y+5} textAnchor="middle" fontSize="17">O</text></g>)}
    {[145,315].map(x=><g key={x}><circle cx={x} cy="145" r="18" fill="#d3e2f5"/><text x={x} y="151" textAnchor="middle" fontSize="18">Si</text></g>)}
    <text x="230" y="177" textAnchor="middle">Shared O</text>
    <text x="230" y="237" textAnchor="middle">O count = 4 + 4 − 1 = 7</text>
    <text x="230" y="263" textAnchor="middle">Net unit charge = 2(+4) + 7(−2) = −6</text>
    <text x="230" y="293" textAnchor="middle">Each Si has four O neighbours; seven O overall</text>
   </>:<>
    <text x="230" y="25" textAnchor="middle" fontSize="17" fontWeight="bold">Link both assay stages</text>
    <text x="230" y="48" textAnchor="middle">Stipulated quantitative acidic iodometric model</text>
    <rect x="35" y="65" width="390" height="48" rx="7" fill="#deeee5"/>
    <text x="230" y="86" textAnchor="middle" fontWeight="bold">1 Cr₂O₇²⁻ → 2 Cr³⁺</text>
    <text x="230" y="104" textAnchor="middle">Accepts 6 electron equivalents</text>
    <path d="M230 119V139M225 132L230 139L235 132" stroke="#4478bc" fill="none" strokeWidth="2"/>
    <rect x="35" y="145" width="390" height="43" rx="7" fill="#edf3ef"/>
    <text x="230" y="171" textAnchor="middle">Generates 3 I₂ equivalents from I⁻</text>
    <path d="M230 193V213M225 206L230 213L235 206" stroke="#4478bc" fill="none" strokeWidth="2"/>
    <rect x="35" y="219" width="390" height="43" rx="7" fill="#deeee5"/>
    <text x="230" y="245" textAnchor="middle">Each I₂ uses 2 S₂O₃²⁻ → total 6 S₂O₃²⁻</text>
    <text x="230" y="291" textAnchor="middle">Indirect mole ratio 1:6; not a direct-mixing mechanism</text>
   </>}
  </g>
 </svg>;
}
