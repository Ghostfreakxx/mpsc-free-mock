import styles from './lecture.module.css';
export default function ThermalPhaseEvidenceDiagram({lesson}:{lesson:'chemical-thermodynamics'|'solutions'}){
 const gas=lesson==='chemical-thermodynamics';
 const label=gas?'Insulated ideal-gas free expansion into vacuum: energy unchanged, entropy increases':'Ideal dilute osmotic height with final concentration and equal liquid densities';
 return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label={label}>
  <title>{label}</title><rect width="460" height="310" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial,sans-serif" fill="#20483e" fontSize="13">
   {gas?<>
    <text x="230" y="25" textAnchor="middle" fontSize="17" fontWeight="bold">Free expansion: no heat, more entropy</text>
    <text x="230" y="47" textAnchor="middle">One mole ideal gas; rigid insulated vessel</text>
    <rect x="20" y="80" width="182" height="105" rx="5" fill="#deeee5" stroke="#53796a" strokeWidth="2"/>
    <path d="M111 80V185" stroke="#53796a" strokeWidth="3"/>
    {Array.from({length:8},(_,i)=><circle key={i} cx={40+(i%3)*23} cy={102+Math.floor(i/3)*28} r="3" fill="#4478bc"/>)}
    <text x="155" y="130" textAnchor="middle">Vacuum</text>
    <path d="M213 132H243M235 126L243 132L235 138" stroke="#4478bc" fill="none" strokeWidth="2"/>
    <rect x="256" y="80" width="182" height="105" rx="5" fill="#deeee5" stroke="#53796a" strokeWidth="2"/>
    {Array.from({length:8},(_,i)=><circle key={i} cx={276+(i%4)*40} cy={107+Math.floor(i/4)*43} r="3" fill="#4478bc"/>)}
    <text x="110" y="207" textAnchor="middle">Initial gas volume V</text><text x="347" y="207" textAnchor="middle">Final gas volume 2V</text>
    <text x="230" y="237" textAnchor="middle">q=0; w=0; ΔU=0; ΔT=0</text>
    <text x="230" y="264" textAnchor="middle" fontWeight="bold">ΔS=R ln2≈+5.76 J/K</text>
    <text x="230" y="293" textAnchor="middle">Dots are schematic; no gas or energy lost</text>
   </>:<>
    <text x="230" y="25" textAnchor="middle" fontSize="17" fontWeight="bold">Osmotic pressure balances liquid height</text>
    <text x="230" y="47" textAnchor="middle">Final c=0.00200 mol/L; T=300 K; i=1</text>
    <path d="M75 76V223H340V76M113 76V187H302V76" stroke="#53796a" strokeWidth="3" fill="none"/>
    <path d="M77 146H111V189H225V221H77ZM227 189H304V91H338V221H227Z" fill="#c7e5ed"/>
    <path d="M226 188V223" stroke="#9d5b2b" strokeWidth="5" strokeDasharray="3 3"/>
    <path d="M348 91H381M348 146H381M370 91V146M366 97L370 91L374 97M366 140L370 146L374 140" stroke="#4478bc" fill="none"/>
    <text x="384" y="122">h</text><text x="94" y="132" textAnchor="middle">Solvent</text><text x="321" y="78" textAnchor="middle">Solution</text>
    <text x="226" y="244" textAnchor="middle">Membrane retains solute; same atmosphere</text>
    <text x="230" y="267" textAnchor="middle">π=cRT=4988.4 Pa=ρgh → h≈0.509 m</text>
    <text x="230" y="293" textAnchor="middle">ρ=1000 kg/m³; g=9.80 m/s²; sketch not to scale</text>
   </>}
  </g>
 </svg>;
}
