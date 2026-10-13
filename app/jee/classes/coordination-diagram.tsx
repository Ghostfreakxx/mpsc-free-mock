import styles from "./lecture.module.css";
const titles = ["Four counts, four meanings", "Only outer chloride is counted", "Square-planar cis and trans", "Octahedral d⁶: count pairs too", "Same d count, different properties"];
export default function CoordinationDiagram({ chapter }: { chapter: number }) {
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={titles[chapter]}>
  <title>{titles[chapter]}</title><rect width="460" height="320" rx="12" fill="#f5faf7" />
  <g fontFamily="Arial, sans-serif" fill="#20483e" fontSize="16">
   <text x="230" y="28" textAnchor="middle" fontWeight="bold">{titles[chapter]}</text>
   {chapter===0 && <>
    <text x="230" y="80" textAnchor="middle" fontSize="27">[Co(en)₃]Cl₃</text>
    <text x="40" y="128">Complex charge</text><text x="320" y="128">+3</text>
    <text x="40" y="166">Co oxidation state</text><text x="320" y="166">+3</text>
    <text x="40" y="204">Ligand molecules</text><text x="320" y="204">3</text>
    <text x="40" y="242">Donor atoms</text><text x="320" y="242" fill="#b54e32">3 × 2 = 6</text>
    <text x="230" y="290" textAnchor="middle">en is neutral and bidentate</text>
   </>}
   {chapter===1 && <>
    <text x="230" y="80" textAnchor="middle" fontSize="25">[Co(NH₃)₅Cl]Cl₂</text>
    <text x="230" y="120" textAnchor="middle">1 bound Cl · 2 outer Cl⁻</text>
    <path d="M30 140H430" stroke="#b7cfc5" />
    <text x="230" y="179" textAnchor="middle">0.0100 mol salt × 2</text>
    <text x="230" y="216" textAnchor="middle" fill="#146b55">= 0.0200 mol AgCl</text>
    <text x="230" y="253" textAnchor="middle" fontWeight="bold">× 143.5 g/mol = 2.87 g</text>
    <text x="230" y="297" textAnchor="middle" fontSize="14">Assumption: coordination sphere stays intact</text>
   </>}
   {chapter===2 && <>
    {[120,340].map((x,i)=><g key={x}>
     <text x={x} y="61" textAnchor="middle" fontWeight="bold">{i===0?'cis':'trans'}</text>
     <path d={`M${x} 106V135M${x} 165V194M${x-60} 150H${x-20}M${x+20} 150H${x+60}`} stroke="#146b55" strokeWidth="2" />
     <text x={x} y="155" textAnchor="middle">Pt</text>
     <text x={x} y="98" textAnchor="middle">{i===0?'Cl':'NH₃'}</text>
     <text x={x} y="216" textAnchor="middle">NH₃</text>
     <text x={x-70} y="155" textAnchor="middle">{i===0?'NH₃':'Cl'}</text>
     <text x={x+70} y="155" textAnchor="middle">Cl</text>
    </g>)}
    <text x="120" y="249" textAnchor="middle">Cl–Pt–Cl: 90°</text><text x="340" y="249" textAnchor="middle">Cl–Pt–Cl: 180°</text>
    <text x="230" y="291" textAnchor="middle" fontSize="14">Octahedral fac-MA₃B₃: all three A–A pairs cis</text>
   </>}
   {chapter===3 && <>
    <text x="125" y="65" textAnchor="middle">High spin</text><text x="340" y="65" textAnchor="middle">Low spin</text>
    <text x="20" y="108" fontSize="14">e<tspan baselineShift="sub">g</tspan></text>
    <text x="20" y="164" fontSize="14">t<tspan baselineShift="sub">2g</tspan></text>
    {[['↑','↑','↑↓','↑','↑'],['','','↑↓','↑↓','↑↓']].map((group,g)=>group.map((value,i)=>{
      const x=(g===0?62:277)+(i<2?i*47+23:(i-2)*47); const y=i<2?85:141;
      return <g key={`${g}-${i}`}><rect x={x} y={y} width="40" height="34" fill="none" stroke="#146b55" /><text x={x+20} y={y+25} textAnchor="middle" fontSize="22">{value}</text></g>;
    }))}
    <text x="125" y="207" textAnchor="middle">1 pair · 4 unpaired</text><text x="340" y="207" textAnchor="middle">3 pairs · 0 unpaired</text>
    <text x="230" y="246" textAnchor="middle">E<tspan baselineShift="sub">LS</tspan> − E<tspan baselineShift="sub">HS</tspan> = −2Δo + 2P</text>
    <text x="230" y="290" textAnchor="middle">Δo = 250, P = 180 → −140 kJ/mol</text>
   </>}
   {chapter===4 && <>
    <text x="120" y="83" textAnchor="middle" fontSize="22">[NiCl₄]²⁻</text><text x="340" y="83" textAnchor="middle" fontSize="22">[Ni(CN)₄]²⁻</text>
    <text x="230" y="125" textAnchor="middle">Both Ni(II), d⁸, coordination number 4</text>
    <text x="120" y="172" textAnchor="middle">Tetrahedral</text><text x="340" y="172" textAnchor="middle">Square planar</text>
    <text x="120" y="208" textAnchor="middle">2 unpaired</text><text x="340" y="208" textAnchor="middle">All paired</text>
    <text x="120" y="244" textAnchor="middle">μ ≈ 2.83 μB</text><text x="340" y="244" textAnchor="middle">Diamagnetic</text>
    <text x="230" y="291" textAnchor="middle">Spin-only model: μ = √[n(n+2)] μB</text>
   </>}
  </g>
 </svg>;
}
