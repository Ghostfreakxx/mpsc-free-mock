import styles from './lecture.module.css';import{sulfideModel as m,oxygenLedger as o}from'./analysis-detection-data';
export default function AnalysisDetectionDiagram({kind}:{kind:'oxygen'|'sulfide'}){
 const title=kind==='oxygen'?'Product oxygen has two different sources':'pH changes sulfide across precipitation thresholds';
 const x=(exponent:number)=>42+(exponent+34)*19;
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={title}><title>{title}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
 <g fontFamily="Arial,sans-serif" fill="#20483e" textAnchor="middle"><text x="230" y="29" fontSize="16" fontWeight="bold">{title}</text>
 {kind==='oxygen'?<>
 <rect x="25" y="56" width="190" height="55" rx="6" fill="#deeee5"/><text x="120" y="79" fontSize="16">5 CO molecules</text><text x="120" y="99" fontSize="12">{o.sampleAtoms} sample oxygen atoms</text>
 <rect x="245" y="56" width="190" height="55" rx="6" fill="#f6e5d8"/><text x="340" y="79" fontSize="16">1 I2O5 molecule</text><text x="340" y="99" fontSize="12">{o.reagentAtoms} reagent oxygen atoms</text>
 <path d="M120 116L170 151M340 116L290 151" stroke="#71948a" strokeWidth="2"/>
 <text x="230" y="175" fontSize="18">5 CO2 molecules + 1 I2</text>
 {Array.from({length:5},(_,i)=><g key={i}><circle cx={72+i*79} cy="205" r="7" fill="#147b61"/><circle cx={92+i*79} cy="205" r="7" fill="#bb713b"/></g>)}
 <text x="230" y="231" fontSize="12">Atom inventory: 5 sample O + 5 reagent O =10 product O</text>
 <text x="230" y="259" fontSize="15">.001 mol I2 → .005 mol sample O → .080 g O</text>
 <text x="230" y="284" fontSize="14">.400 g sample →20% oxygen, not40%</text>
 <text x="230" y="306" fontSize="10">Complete-conversion model; markers count atoms, not molecular geometry</text>
 </>:<>
 <text x="230" y="53" fontSize="11">Supplied Ksp / initial .001 M metal: compare onset only</text>
 <path d="M42 100H427" stroke="#71948a" strokeWidth="2"/>
 {[-33,-29,-25,-21,-17,-14].map(e=><g key={e}><path d={`M${x(e)} 96v9`} stroke="#71948a"/><text x={x(e)} y="123" fontSize="11">10^{e}</text></g>)}
 {[{e:Math.log10(m.cuKsp/m.initialMetal),name:'CuS onset',color:'#166c55'},{e:Math.log10(m.znKsp/m.initialMetal),name:'ZnS onset',color:'#9b562b'}].map(d=><g key={d.name}><path d={`M${x(d.e)} 82v122`} stroke={d.color} strokeDasharray="4 3"/><text x={x(d.e)} y="75" fontSize="12">{d.name}</text></g>)}
 {m.pH.map((pH,i)=>{const e=Math.round(Math.log10(m.reservoir/(10**(-pH))**2));return <g key={pH}><circle cx={x(e)} cy={150+i*40} r="7" fill={i?'#bb713b':'#147b61'}/><text x={x(e)-12} y={155+i*40} textAnchor="end" fontSize="13">pH{pH}:10^{e} M</text></g>})}
 <text x="230" y="237" fontSize="15">pH1: CuS only · pH4: both onsets crossed</text>
 <text x="230" y="266" fontSize="13">[S2−]=10−27 /[H+]²; reservoir maintains sulfide</text>
 <text x="230" y="289" fontSize="11">Free metal falls after precipitation; not a final-yield diagram</text>
 <text x="230" y="309" fontSize="10">Ideal supplied constants; real activities and complexation can differ</text>
 </>}
 </g></svg>;
}
