import styles from './lecture.module.css';import{ceriumInventory as cerium,oxygenSiteInventory as oxygen}from'./inorganic-trend-applications-data';
export default function InorganicTrendApplicationsDiagram({kind}:{kind:'alumina'|'ceria'}){
 const title=kind==='alumina'?'Two separate samples have different reagent ledgers':'Reduced cerium and missing oxygen use different bases';
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={title}><title>{title}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
 <g fontFamily="Arial,sans-serif" textAnchor="middle" fill="#20483e"><text x="230" y="28" fontSize="15" fontWeight="bold">{title}</text>
 {kind==='alumina'?<>
 <text x="230" y="51" fontSize="11">Selected amphoteric Al2O3 maps; aluminium stays +3</text>
 <rect x="132" y="71" width="196" height="42" rx="6" fill="#deeee5"/><text x="230" y="98" fontSize="17">Al2O3: .010 mol each</text>
 <path d="M191 118L115 161M269 118L345 161" stroke="#71948a" strokeWidth="2" fill="none"/>
 <text x="107" y="143" fontSize="12">Acid aliquot</text><text x="353" y="143" fontSize="12">Base aliquot</text>
 <text x="115" y="188" fontSize="16">6 H+ per Al2O3</text><text x="345" y="188" fontSize="16">2 OH− per Al2O3</text>
 <text x="115" y="217" fontSize="14">.060 mol H+</text><text x="345" y="217" fontSize="14">.020 mol OH−</text>
 <text x="115" y="246" fontSize="13">Products: Al3+ and water</text><text x="345" y="246" fontSize="13">Product: [Al(OH)4]−</text>
 <text x="230" y="281" fontSize="11">Alternative balanced reactions; do not add both reagent demands.</text><text x="230" y="306" fontSize="10">Medium, solid form and conditions matter. Amphoteric is not identical to amphiprotic.</text>
 </>:<>
 <text x="230" y="51" fontSize="11">CeO1.90; only Ce3+/Ce4+ and O2− in this charge-only model</text>
 {cerium.map((charge,i)=><g key={i}><circle cx={88+i%10*31.5} cy={83+Math.floor(i/10)*25} r="10" fill={charge===3?'#a96337':'#207c65'}/><text x={88+i%10*31.5} y={87+Math.floor(i/10)*25} fontSize="9" fill="white">{charge}+</text></g>)}
 <text x="230" y="137" fontSize="12">4 Ce3+ of 20 Ce sites = 20% reduced cerium</text>
 <text x="230" y="160" fontSize="11">40 ideal oxygen sites: 38 occupied, 2 missing</text>
 {oxygen.map((occupied,i)=><g key={i}><circle cx={88+i%10*31.5} cy={178+Math.floor(i/10)*20} r="6" fill={occupied?'#c0dacf':'#f5faf7'} stroke={occupied?'#71948a':'#a96337'} strokeDasharray={occupied?undefined:'2 2'}/>{!occupied&&<path d={`M${84+i%10*31.5} ${174+Math.floor(i/10)*20}l8 8m-8 0l8 -8`} stroke="#a96337"/>}</g>)}
 <text x="230" y="266" fontSize="12">2 / 40 = 5% of ideal oxygen sites missing</text>
 <text x="230" y="289" fontSize="11">Charge balance: 4×3 + 16×4 = 38×2 = 76</text><text x="230" y="311" fontSize="10">Inventory illustration, not crystal geometry or a complete microscopic defect theory.</text>
 </>}
 </g></svg>;
}
