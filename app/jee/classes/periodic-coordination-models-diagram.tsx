import styles from'./lecture.module.css';import{shieldingExamples as rows,d8Fields as fields}from'./periodic-coordination-models-data';
export default function PeriodicCoordinationModelsDiagram({kind}:{kind:'shielding'|'d8'}){const title=kind==='shielding'?'A supplied shielding estimate leaves an effective attraction':'Two d8 geometries can share the same spin count';return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={title}><title>{title}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/><g fontFamily="Arial,sans-serif" fill="#20483e" textAnchor="middle"><text x="230" y="29" fontSize="15" fontWeight="bold">{title}</text>
{kind==='shielding'?<>
<text x="230" y="52" fontSize="11">Selected3s rules: .35 same group, .85 second shell, 1 deeper</text>
{rows.map((r,i)=>{const s=r.same*.35+r.inner*.85+r.deeper,z=r.Z-s,y=87+i*84;return <g key={r.name}><text x="42" y={y+16} fontSize="17">{r.name}</text><rect x="80" y={y} width={s*24} height="28" fill="#d2dfd8"/><rect x={80+s*24} y={y} width={z*24} height="28" fill="#468e72"/><text x="230" y={y+50} fontSize="14">Z{r.Z} − S{s.toFixed(2)} = Zeff{z.toFixed(2)}</text></g>})}
<rect x="85" y="249" width="12" height="12" fill="#d2dfd8"/><text x="150" y="260" fontSize="11">Shielding estimate</text><rect x="265" y="249" width="12" height="12" fill="#468e72"/><text x="330" y="260" fontSize="11">Effective difference</text>
<text x="230" y="286" fontSize="13">Toy rMg/rNa=2.20/2.85≈.772</text><text x="230" y="308" fontSize="10">Model quantities; neither bars nor ratio are measured atomic radii</text>
</>:<>
{fields.map((f,j)=><g key={f.name} transform={`translate(${j*230} 0)`}><text x="115" y="57" fontSize="16">{f.name}</text><text x="115" y="81" fontSize="12">{f.upperLabel}</text>{[{ns:f.upper,y:123},{ns:f.lower,y:196}].map(({ns,y})=><g key={y}>{ns.map((n,k)=>{const x=115+(k-(ns.length-1)/2)*52;return <g key={k}><path d={`M${x-20} ${y}h40`} stroke="#71948a" strokeWidth="2"/><text x={x} y={y-7} fontSize="19">{n===2?'↑↓':'↑'}</text></g>})}</g>)}<text x="115" y="222" fontSize="12">{f.lowerLabel}</text><text x="115" y="251" fontSize="12">{f.result}</text></g>)}
<text x="230" y="280" fontSize="14">Each:8 d electrons ·3 pairs ·2 unpaired ·√8 μB</text><text x="230" y="306" fontSize="10">Separately supplied splittings; field contributions alone do not select geometry</text>
</>}
</g></svg>}
