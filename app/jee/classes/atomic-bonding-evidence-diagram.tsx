import styles from './lecture.module.css';
import {hydrogen3sRadial as radial,illustrativeBondPotential} from './atomic-bonding-evidence-functions';

const samples=Array.from({length:361},(_,i)=>i/20);
const probability=samples.map(x=>x*x*radial(x)**2);
const maxP=Math.max(...probability);
const radialPath=samples.map((x,i)=>`${i?'L':'M'}${(46+x*21).toFixed(2)},${(97-radial(x)*1.55).toFixed(2)}`).join(' ');
const probabilityPath=samples.map((x,i)=>`${i?'L':'M'}${(46+x*21).toFixed(2)},${(230-probability[i]/maxP*76).toFixed(2)}`).join(' ');

export default function AtomicBondingEvidenceDiagram({lesson,chapter}:{lesson:'atomic-structure'|'chemical-bonding';chapter:number}){
 const radialPlot=lesson==='atomic-structure'&&chapter===21;
 const hf=lesson==='chemical-bonding'&&chapter===21;
 const label=radialPlot?'Hydrogen 3s signed radial factor and radial probability':hf?'Simplified HF valence molecular orbital occupancy':'Illustrative bond potential: equilibrium, well depth and zero-point energy';
 return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label={label}>
  <title>{label}</title><rect width="460" height="310" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial,sans-serif" fill="#20483e" fontSize="13">
   {radialPlot?<>
    <text x="230" y="24" textAnchor="middle" fontSize="17" fontWeight="bold">Hydrogen 3s: two radial nodes</text>
    <text x="46" y="45">Signed R (arbitrary scale)</text>
    <path d="M46 50V128M46 97H430M46 146V230H430" stroke="#7a928a" fill="none"/>
    <path d={radialPath} stroke="#4478bc" fill="none" strokeWidth="2.5"/>
    <text x="46" y="145">P ∝ x²|R|² (separately scaled)</text>
    <path d={probabilityPath} stroke="#218164" fill="none" strokeWidth="2.5"/>
    {[1.9019237886,7.0980762114].map(x=><g key={x}><path d={`M${46+x*21} 52V235`} stroke="#9d5b2b" strokeDasharray="4 4"/><text x={46+x*21} y="252" textAnchor="middle">{x.toFixed(2)}</text></g>)}
    <text x="46" y="252">0</text><text x="422" y="252" textAnchor="end">18</text><text x="230" y="273" textAnchor="middle">x = r/a₀; P never becomes negative</text>
    <text x="230" y="295" textAnchor="middle">At x=0: R ≠ 0, but P=0 from the x² factor</text>
   </>:hf?<>
    <text x="230" y="25" textAnchor="middle" fontSize="17" fontWeight="bold">HF: simplified valence MO model</text>
    <path d="M35 253V54M30 62L35 54L40 62" stroke="#53796a" fill="none"/>
    <text x="43" y="55">Energy ↑ (schematic; not to scale)</text>
    <path d="M167 85H287M142 135H204M250 135H312M167 185H287M167 235H287" stroke="#4478bc" strokeWidth="3"/>
    <text x="225" y="77" textAnchor="middle">σ* empty</text>
    <text x="173" y="129" textAnchor="middle">↑↓</text><text x="281" y="129" textAnchor="middle">↑↓</text>
    <text x="337" y="139">F 2pₓ, 2pᵧ</text>
    <text x="227" y="178" textAnchor="middle">↑↓</text><text x="309" y="189">σ bonding</text>
    <text x="227" y="228" textAnchor="middle">↑↓</text><text x="309" y="239">F 2s-like</text>
    <text x="230" y="270" textAnchor="middle">H 1s + axial F 2p_z → σ and σ*</text>
    <text x="230" y="293" textAnchor="middle">8 valence e⁻; bond order 1; all paired</text>
   </>:<>
    <text x="230" y="25" textAnchor="middle" fontSize="17" fontWeight="bold">Bond well and dissociation energy</text>
    <path d="M45 46V252H428M45 82H428" stroke="#7a928a" fill="none"/>
    <text x="51" y="59">V (kJ/mol)</text><text x="386" y="271">r →</text>
    <text x="304" y="75">Atoms: V=0</text>
    <path d={Array.from({length:151},(_,i)=>{const r=.7+i*.015;const v=illustrativeBondPotential(r);return `${i?'L':'M'}${(45+r*130).toFixed(2)},${(82-v*.33).toFixed(2)}`;}).join(' ')} stroke="#218164" fill="none" strokeWidth="3"/>
    <path d="M133 222.25H254M175 230.5V247M278 82V230.5M294 82V222.25" stroke="#9d5b2b" strokeDasharray="4 3" fill="none"/>
    <text x="180" y="216">Ground level: −425</text>
    <text x="62" y="278">Minimum −450; zero-point = 25 kJ/mol</text>
    <text x="230" y="299" textAnchor="middle">Dₑ=450; D₀=425; force zero at rₑ</text>
   </>}
  </g>
 </svg>;
}
