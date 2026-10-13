import styles from "./lecture.module.css";
const titles=["Find each exponent separately","Zero order stops at depletion","First order: successive halvings","Total pressure is not pA","Arrhenius plot: negative slope"];
export default function KineticsDiagram({chapter}:{chapter:number}) {
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={titles[chapter]}>
 <title>{titles[chapter]}</title><rect width="460" height="320" rx="12" fill="#f5faf7" />
 <g fontFamily="Arial, sans-serif" fontSize="16" fill="#20483e">
 <text x="230" y="28" textAnchor="middle" fontWeight="bold">{titles[chapter]}</text>
 {chapter===0 && <>
  <text x="40" y="77">[A] / M</text><text x="172" y="77">[B] / M</text><text x="290" y="77">Rate / M s⁻¹</text>
  {[["0.10","0.10","0.0020"],["0.20","0.10","0.0080"],["0.10","0.20","0.0040"]].map((row,i)=><g key={i}>{row.map((v,j)=><text key={j} x={[40,172,290][j]} y={119+i*40}>{v}</text>)}</g>)}
  <text x="230" y="251" textAnchor="middle">rate = k[A]²[B] · overall order 3</text>
  <text x="230" y="291" textAnchor="middle">k = 2.0 M⁻² s⁻¹</text>
 </>}
 {chapter===1 && <>
  <path d="M75 220H415M75 220V58" stroke="#20483e" strokeWidth="2" fill="none" />
  <path d="M75 72L375 220" stroke="#146b55" strokeWidth="4" />
  <circle cx="187.5" cy="127.5" r="5" fill="#b54e32" />
  <text x="22" y="68" fontSize="13">0.080</text><text x="83" y="57" fontSize="14">[A] / M</text>
  <text x="66" y="243">0</text><text x="365" y="243">40</text><text x="230" y="245" fontSize="14">t / min</text>
  <text x="198" y="118" fontSize="14">15 min: 0.050 M</text>
  <text x="230" y="278" textAnchor="middle">Slope = −0.00200 M/min</text>
  <text x="230" y="305" textAnchor="middle" fontSize="14">No negative concentration beyond 40 min</text>
 </>}
 {chapter===2 && <>
  {[1,.5,.25,.125,.0625].map((fraction,i)=><g key={i}><rect x={28+i*85} y={200-120*fraction} width="58" height={120*fraction} fill="#146b55" opacity={.9-i*.1} /><text x={57+i*85} y="232" textAnchor="middle">{i*10}</text><text x={57+i*85} y={185-120*fraction} textAnchor="middle" fontSize="14">{['1','1/2','1/4','1/8','1/16'][i]}</text></g>)}
  <text x="230" y="263" textAnchor="middle">Time / min · t½ = 10 min</text>
  <text x="230" y="298" textAnchor="middle">30 min: 12.5% remains</text>
 </>}
 {chapter===3 && <>
  <text x="230" y="78" textAnchor="middle" fontSize="25">A → B + C</text>
  <text x="230" y="117" textAnchor="middle">Initially pure A: P₀ = 100 kPa</text>
  <text x="230" y="158" textAnchor="middle">At 10 min: Ptotal = 150 kPa</text>
  <text x="230" y="204" textAnchor="middle" fill="#146b55">pA = 2(100) − 150 = 50 kPa</text>
  <text x="230" y="249" textAnchor="middle">k = ln(100/50)/10 = 0.0693 min⁻¹</text>
  <text x="230" y="294" textAnchor="middle" fontSize="14">Ideal gas · fixed T and V · no other gases</text>
 </>}
 {chapter===4 && <>
  <path d="M70 218H410M70 218V62" stroke="#20483e" strokeWidth="2" fill="none" />
  <path d="M105 83L375 195" stroke="#146b55" strokeWidth="4" />
  <text x="22" y="68">ln k</text><text x="382" y="247">1/T</text>
  <text x="235" y="104">Slope = −Ea/R</text>
  <text x="230" y="274" textAnchor="middle">k doubles: 300 → 310 K</text>
  <text x="230" y="306" textAnchor="middle">Ea ≈ 53.6 kJ/mol (constant A)</text>
 </>}
 </g></svg>;
}
