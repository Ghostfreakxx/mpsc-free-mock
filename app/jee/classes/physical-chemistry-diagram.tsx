import { pBlockThermoSolutionsAdditions } from "./p-block-thermo-solutions-additions";
import styles from "./lecture.module.css";
import { physicalChemistryAdditions } from "./physical-chemistry-additions";

const headings={
 "chemical-thermodynamics":["Energy follows the chosen system","Count gaseous moles only","Hess’s law: cancel the intermediate","Temperature changes the balance","Compare the mixture with equilibrium"],
 solutions:["Solution mass is not solvent mass","Vapour enriches the volatile component","Depression is a positive difference","Osmotic pressure counts particles","Association reduces particle count"]
};

export default function PhysicalChemistryDiagram({lesson,chapter}:{lesson:keyof typeof headings;chapter:number}) {
 if (chapter >= 5) {
  const board = chapter >= 10 ? pBlockThermoSolutionsAdditions[lesson].chapters[chapter - 10].board : physicalChemistryAdditions[lesson].chapters[chapter - 5].board;
  return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label={board.heading}>
   <title>{board.heading}</title><rect width="460" height="310" rx="12" fill="#f5faf7" />
   <g fill="#20483e" fontFamily="Arial, sans-serif" fontSize="14">
    <text x="230" y="34" textAnchor="middle" fontSize="17" fontWeight="bold" textLength={board.heading.length>44?420:undefined} lengthAdjust="spacingAndGlyphs">{board.heading}</text>
    <rect x="12" y="61" width="436" height="43" rx="5" fill="#deeee5" />
    {board.columns.map((label,j)=><text key={j} x={85+j*145} y="88" textAnchor="middle" fontWeight="bold" fontSize="13" textLength={label.length>19?132:undefined} lengthAdjust="spacingAndGlyphs">{label}</text>)}
    {board.rows.map((row,i)=><g key={i}>
     <rect x="12" y={115+i*60} width="436" height="51" rx="5" fill={i===2?"#e2eee8":"#edf3ef"}/>
     {row.map((value,j)=><text key={j} x={85+j*145} y={146+i*60} textAnchor="middle" fontSize="14" textLength={value.length>19?132:undefined} lengthAdjust="spacingAndGlyphs">{value}</text>)}
    </g>)}
   </g>
  </svg>;
 }
 const thermo=lesson==="chemical-thermodynamics";
 const title=headings[lesson][chapter];
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={title}>
  <title>{title}</title><rect width="460" height="320" rx="12" fill="#f5faf7" />
  <g fontFamily="Arial, sans-serif" fontSize="16" fill="#20483e">
   <text x="230" y="29" textAnchor="middle" fontWeight="bold" fontSize="17">{title}</text>
   {thermo && chapter===0 && <>
    <rect x="153" y="101" width="154" height="96" rx="12" fill="#deeee5" stroke="#146b55" strokeWidth="2" />
    <text x="230" y="139" textAnchor="middle">SYSTEM</text><text x="230" y="171" textAnchor="middle">ΔU = +300 J</text>
    <path d="M25 146H142L130 138M142 146L130 154M316 146H436L424 138M436 146L424 154" stroke="#146b55" strokeWidth="3" fill="none" />
    <text x="78" y="91" textAnchor="middle">Heat in</text><text x="78" y="117" textAnchor="middle">+500 J</text>
    <text x="381" y="91" textAnchor="middle">Work out</text><text x="381" y="117" textAnchor="middle">200 J</text>
    <text x="230" y="245" textAnchor="middle">w = −Pext ΔV = −200 J</text>
    <text x="230" y="286" textAnchor="middle">ΔU = q + w = 500 − 200</text>
   </>}
   {thermo && chapter===1 && <>
    <text x="230" y="88" textAnchor="middle" fontSize="25">N₂(g) + 3H₂(g) → 2NH₃(g)</text>
    <text x="230" y="134" textAnchor="middle">Δng = 2 − (1 + 3) = −2</text>
    <text x="230" y="177" textAnchor="middle">Δng RT = −2 × 0.008314 × 300</text>
    <text x="230" y="218" textAnchor="middle">ΔH = −90.0 − 4.99 ≈ −95.0 kJ</text>
    <text x="230" y="265" textAnchor="middle" fill="#146b55">Ideal gases at the same T</text>
    <text x="230" y="297" textAnchor="middle" fontSize="14">Neglect condensed-phase PV contributions</text>
   </>}
   {thermo && chapter===2 && <>
    <text x="32" y="91">C(graphite) + O₂ → CO₂</text><text x="348" y="91">−394 kJ</text>
    <text x="32" y="144">CO₂ → CO + ½O₂</text><text x="348" y="144">+283 kJ</text>
    <path d="M30 172H430" stroke="#146b55" strokeWidth="2" />
    <text x="32" y="214">C(graphite) + ½O₂ → CO</text><text x="348" y="214">−111 kJ</text>
    <text x="230" y="263" textAnchor="middle">Reverse CO oxidation; CO₂ cancels</text>
    <text x="230" y="299" textAnchor="middle" fontSize="14">Illustrative rounded values · matching phases</text>
   </>}
   {thermo && chapter===3 && <>
    <path d="M74 181H414M74 230V67" stroke="#20483e" strokeWidth="2" fill="none" />
    <path d="M110 221L378 101" stroke="#146b55" strokeWidth="4" />
    <circle cx="199.3" cy="181" r="5" fill="#b54e32" />
    <text x="12" y="66">ΔG</text><text x="37" y="186">0</text><text x="376" y="205">T / K</text>
    <text x="162" y="158">400 K</text><text x="230" y="65" textAnchor="middle">ΔG = −40 + 0.100T</text>
    <text x="230" y="262" textAnchor="middle">300 K: −10 kJ · 500 K: +10 kJ</text>
    <text x="230" y="297" textAnchor="middle" fontSize="14">Assume ΔH and ΔS constant over this range</text>
   </>}
   {thermo && chapter===4 && <>
    <text x="230" y="75" textAnchor="middle">At 300 K: K ≈ 10</text>
    {[["Q = 1","ΔG < 0","Forward"],["Q = 10","ΔG = 0","Equilibrium"],["Q = 100","ΔG > 0","Reverse"]].map((row,i)=><g key={i}><rect x={17+i*147} y="111" width="132" height="116" rx="8" fill={i===1?"#deeee5":"#edf3ef"}/>{row.map((v,j)=><text key={j} x={83+i*147} y={139+j*34} textAnchor="middle" fontSize="15">{v}</text>)}</g>)}
    <text x="230" y="266" textAnchor="middle">ΔG = RT ln(Q/K)</text>
    <text x="230" y="300" textAnchor="middle" fontSize="14">Q and K use dimensionless activities</text>
   </>}
   {!thermo && chapter===0 && <>
    <rect x="50" y="74" width="360" height="55" rx="6" fill="#deeee5" />
    <rect x="50" y="74" width="36" height="55" rx="6" fill="#b54e32" />
    <text x="230" y="163" textAnchor="middle">20 g solute + 180 g solvent</text>
    <text x="230" y="204" textAnchor="middle">Mass % = 100 × 20/200 = 10%</text>
    <text x="230" y="247" textAnchor="middle">m = (20/100)/0.180 = 1.11 mol/kg</text>
    <text x="230" y="288" textAnchor="middle" fontSize="14">Molar mass = 100 g/mol · M needs volume</text>
   </>}
   {!thermo && chapter===1 && <>
    <text x="118" y="77" textAnchor="middle">Liquid</text><text x="339" y="77" textAnchor="middle">Vapour</text>
    <rect x="44" y="101" width="150" height="57" fill="#e2b19f"/><rect x="44" y="101" width="75" height="57" fill="#146b55"/>
    <rect x="264" y="101" width="150" height="57" fill="#e2b19f"/><rect x="264" y="101" width="100" height="57" fill="#146b55"/>
    <text x="118" y="187" textAnchor="middle">xA = 1/2</text><text x="339" y="187" textAnchor="middle">yA = 2/3</text>
    <text x="230" y="229" textAnchor="middle">PA = 40; PB = 20; Ptotal = 60 kPa</text>
    <text x="230" y="265" textAnchor="middle">Green: A · peach: B</text>
    <text x="230" y="300" textAnchor="middle" fontSize="14">Ideal mixture · pure pressures 80 and 40 kPa</text>
   </>}
   {!thermo && chapter===2 && <>
    <path d="M65 101H396M65 203H396M355 112V191L347 179M355 191L363 179" stroke="#146b55" strokeWidth="3" fill="none" />
    <text x="68" y="81">Pure solvent: 0 °C</text><text x="68" y="233">Solution: −0.186 °C</text>
    <text x="81" y="159" fontSize="22">ΔTf = 0.186 K</text>
    <text x="230" y="270" textAnchor="middle">ΔTf = 1 × 1.86 × 0.100</text>
    <text x="230" y="304" textAnchor="middle" fontSize="14">Dilute non-electrolyte · 0.100 mol/kg water</text>
   </>}
   {!thermo && chapter===3 && <>
    <text x="230" y="80" textAnchor="middle" fontSize="23">πV = i nRT</text>
    <text x="230" y="126" textAnchor="middle">n = w / molar mass</text>
    <text x="230" y="173" textAnchor="middle">Molar mass = (1 × 2 × 0.082057 × 300)</text>
    <text x="230" y="208" textAnchor="middle">÷ (0.246 × 1) ≈ 200 g/mol</text>
    <text x="230" y="255" textAnchor="middle">T in K · π in atm · V in L</text>
    <text x="230" y="297" textAnchor="middle" fontSize="14">R = 0.082057 L atm mol⁻¹ K⁻¹</text>
   </>}
   {!thermo && chapter===4 && <>
    <text x="230" y="76" textAnchor="middle">100 initial molecules; 50% form dimers</text>
    <circle cx="104" cy="123" r="14" fill="#146b55"/><text x="104" y="173" textAnchor="middle">50 singles</text>
    <circle cx="322" cy="123" r="14" fill="#b54e32"/><circle cx="345" cy="123" r="14" fill="#b54e32"/><text x="335" y="173" textAnchor="middle">25 dimers</text>
    <text x="230" y="219" textAnchor="middle">Particles = 50 + 25 = 75</text>
    <text x="230" y="260" textAnchor="middle">i = 75/100 = 0.75</text>
    <text x="230" y="299" textAnchor="middle">Apparent molar mass = true / 0.75</text>
   </>}
  </g>
 </svg>;
}
