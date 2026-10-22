import styles from "./lecture.module.css";
export default function AnalysisFOccupancyDiagram({kind}:{kind:"extraction"|"f-occupancy"|"manganate"}){
 const extraction=kind==="extraction";
 const manganate=kind==="manganate";
 const title=extraction?"Equal total solvent: two extraction plans":manganate?"Manganate oxidation and disproportionation":"Selected lanthanoid 4f occupancies";
 const rows=[{name:"Ce⁴⁺",count:0,label:"4f⁰ · empty"},{name:"Eu²⁺",count:7,label:"4f⁷ · half-filled"},{name:"Yb²⁺",count:14,label:"4f¹⁴ · filled"}];
 return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label={title}>
  <title>{title}</title><rect width="460" height="310" rx="12" fill="#f5faf7"/>
  <g fill="#20483e" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle">
   <text x="230" y="28" fontSize="17" fontWeight="bold" textLength={title.length>43?420:undefined} lengthAdjust="spacingAndGlyphs">{title}</text>
   {extraction?<>
    <text x="230" y="51">100 mL water · K = corg/caq = 4 · 25 mL total solvent</text>
    {[{label:"1 × 25 mL",fraction:.5,y:101},{label:"2 × 12.5 mL",fraction:5/9,y:188}].map(row=><g key={row.label}>
     <text x="70" y={row.y-13}>{row.label}</text><rect x="20" y={row.y} width="420" height="30" rx="4" fill="#cfdfd5"/>
     <rect x="20" y={row.y} width={420*row.fraction} height="30" rx="4" fill="#21775c"/>
     <text x="230" y={row.y+52}>{(100*row.fraction).toFixed(1)}% extracted · {(100*(1-row.fraction)).toFixed(1)}% remains in water</text>
    </g>)}
    <rect x="90" y="267" width="15" height="12" fill="#21775c"/><text x="160" y="278">Extracted</text>
    <rect x="240" y="267" width="15" height="12" fill="#cfdfd5"/><text x="330" y="278">Remaining</text>
    <text x="230" y="301" fontSize="11">Fractions of initial solute · fresh solvent each time · ideal partition model</text>
   </>:manganate?<>
    <text x="230" y="54">Oxidation: manganese +6 → +7</text>
    <rect x="20" y="69" width="420" height="49" rx="5" fill="#deeee5"/>
    <text x="230" y="101" fontSize="23">MnO₄²⁻ → MnO₄⁻ + e⁻</text>
    <text x="230" y="146" fontWeight="bold">Disproportionation: three Mn(+6) centres</text>
    <rect x="12" y="159" width="436" height="46" rx="5" fill="#e5ece4"/>
    <text x="230" y="188" fontSize="18">3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ + MnO₂ + 2H₂O</text>
    <text x="230" y="234">Two Mn(+6) → Mn(+7): lose 2 electrons total</text>
    <text x="230" y="262">One Mn(+6) → Mn(+4): gain 2 electrons</text>
    <text x="230" y="294" fontSize="12">Specified conditions matter · total charge −2 on each side</text>
   </>:<>
    <text x="230" y="51">Seven spatial orbitals · selected subshell only · Hund filling picture</text>
    {rows.map((row,i)=><g key={row.name}>
     <text x="62" y={107+i*65} fontWeight="bold">{row.name}</text>
     {Array.from({length:7},(_,j)=><g key={j}><rect x={130+j*42} y={85+i*65} width="36" height="30" rx="3" fill="#deeee5" stroke="#527463"/>
      <text x={148+j*42} y={108+i*65} fontSize="22">{row.count===0?"":row.count===7?"↑":"↑↓"}</text></g>)}
     <text x="270" y={137+i*65}>{row.label}</text>
    </g>)}
    <text x="230" y="296" fontSize="12">Configuration alone does not determine stability in every environment.</text>
   </>}
  </g>
 </svg>;
}
