import styles from './lecture.module.css';
import {diproticTitrationPH} from './diprotic-titration-model';
const titrationPath=Array.from({length:501},(_,i)=>{const n=i*.00005,pH=diproticTitrationPH(n);return `${i?'L':'M'}${(47+n/.025*365).toFixed(2)},${(244-pH*14).toFixed(2)}`;}).join(' ');
export default function CoupledEquilibriumElectrodesDiagram({lesson}:{lesson:'equilibrium'|'redox-electrochemistry'}){
 const titration=lesson==='equilibrium';
 const label=titration?'Hypothetical diprotic acid titration with two buffer midpoints':'Copper sulfate electrolysis: copper versus inert anode inventories';
 return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label={label}>
  <title>{label}</title><rect width="460" height="310" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial,sans-serif" fill="#20483e" fontSize="13">
   {titration?<>
    <text x="230" y="24" textAnchor="middle" fontSize="17" fontWeight="bold">Two stages of H₂A neutralization</text>
    <text x="230" y="45" textAnchor="middle">100 mL acid; 0.100 M base; pKa₁=4, pKa₂=9</text>
    <path d="M47 58V244H425" stroke="#7a928a" fill="none"/>
    {[4,6.5,9].map(pH=><g key={pH}><path d={`M47 ${244-pH*14}H412`} stroke="#dbe8e2"/><text x="38" y={248-pH*14} textAnchor="end">{pH}</text></g>)}
    <path d={titrationPath} stroke="#218164" strokeWidth="2.5" fill="none"/>
    {[.005,.010,.015,.020].map(n=><g key={n}><path d={`M${47+n/.025*365} 65V244`} stroke="#9d5b2b" strokeDasharray="3 4"/><circle cx={47+n/.025*365} cy={244-diproticTitrationPH(n)*14} r="3" fill="#4478bc"/><text x={47+n/.025*365} y="263" textAnchor="middle">{(n*1000).toFixed(0)}</text></g>)}
    <text x="20" y="64">pH</text><text x="47" y="263">0</text>
    <text x="230" y="283" textAnchor="middle">Added OH⁻ (mmol); initial H₂A=10.0 mmol</text>
    <text x="230" y="303" textAnchor="middle">Midpoints ≈4, 9; first equivalence ≈6.5</text>
   </>:<>
    <text x="230" y="25" textAnchor="middle" fontSize="17" fontWeight="bold">Same cathode gain, different anodes</text>
    <text x="230" y="47" textAnchor="middle">Q=1930 C → 0.0200 mol e⁻; ideal pathways</text>
    <rect x="17" y="65" width="426" height="89" rx="8" fill="#deeee5"/>
    <text x="30" y="88" fontWeight="bold">Copper anode (+)</text><text x="430" y="88" textAnchor="end" fontWeight="bold">Cathode (−)</text>
    <path d="M165 106H293M285 101L293 106L285 111" stroke="#4478bc" fill="none" strokeWidth="2"/>
    <text x="30" y="117">Cu → Cu²⁺ + 2e⁻</text><text x="430" y="117" textAnchor="end">Cu²⁺ + 2e⁻ → Cu</text>
    <text x="230" y="143" textAnchor="middle">−0.635 g anode; +0.635 g cathode</text>
    <rect x="17" y="166" width="426" height="102" rx="8" fill="#edf3ef"/>
    <text x="30" y="189" fontWeight="bold">Inert anode (+): water oxidation</text>
    <text x="30" y="215">O₂: 0.00500 mol</text><text x="430" y="215" textAnchor="end">H⁺: 0.0200 mol</text>
    <text x="230" y="241" textAnchor="middle">Cathode still gains 0.635 g Cu</text>
    <text x="230" y="260" textAnchor="middle">Dissolved Cu²⁺ consumed; no anode replenishment</text>
    <text x="230" y="293" textAnchor="middle">Electrode material changes the full reaction</text>
   </>}
  </g>
 </svg>;
}
