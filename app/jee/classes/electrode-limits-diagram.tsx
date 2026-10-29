import styles from './lecture.module.css';
import {selectivePrecipitationModel as m,titrationConductivity} from './electrode-limits-data';
export default function ElectrodeLimitsDiagram({kind}:{kind:'precipitation'|'conductivity'}){
 const onset=m.kspChloride/m.chloride,residual=m.kspBromide/onset,removed=1-residual/m.bromide;
 const points=Array.from({length:76},(_,v)=>`${68+v*4.6},${250-titrationConductivity(v)*1000*4}`).join(' ');
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={kind==='precipitation'?'Bromide removal at the silver chloride precipitation boundary':'Nonzero conductivity minimum in an ideal strong acid strong base titration'}>
  <title>{kind==='precipitation'?'Precipitation order does not guarantee complete separation':'Conductometric titration retains spectator ions at equivalence'}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" textAnchor="middle" fill="#20483e">
   {kind==='precipitation'?<>
    <text x="230" y="29" fontSize="16" fontWeight="bold">How complete is the separation?</text>
    <text x="230" y="54" fontSize="12">Initial chloride and bromide: .010 M each</text>
    <rect x="27" y="76" width="406" height="67" rx="8" fill="#e0eee7"/>
    <text x="230" y="101" fontSize="13">AgBr begins first: free [Ag+] = 5×10⁻¹¹ M</text>
    <text x="230" y="124" fontSize="13">AgCl begins at free [Ag+] = 1×10⁻⁸ M</text>
    <text x="230" y="170" fontSize="13">At AgCl onset: [Br−] = 5×10⁻⁵ M</text>
    <rect x="45" y="189" width="370" height="23" fill="#dfac73"/>
    <rect x="45" y="189" width={370*removed} height="23" fill="#2d8770"/>
    <text x="230" y="235" fontSize="13">99.5% precipitated; .5% still dissolved</text>
    <text x="230" y="262" fontSize="13" fontWeight="bold">A 99.9% target is not reached before AgCl.</text>
    <text x="230" y="294" fontSize="11">Supplied Ksp values; fixed volume; no complexes or activity effects</text>
   </>:<>
    <text x="230" y="26" fontSize="16" fontWeight="bold">Equivalence still contains ions</text>
    <text x="230" y="47" fontSize="12">50 mL .100 M HCl; .100 M NaOH titrant</text>
    <text x="230" y="66" fontSize="11">Conductivity (mS/cm); supplied fixed ionic conductivities</text>
    <path d="M68 74V250H420" stroke="#71948a" fill="none"/>
    {[0,15,30,45].map(v=><text key={v} x="48" y={254-v*4} fontSize="11">{v}</text>)}
    <polyline points={points} fill="none" stroke="#207c65" strokeWidth="3"/>
    {[0,25,50,75].map(v=><text key={v} x={68+v*4.6} y="270" fontSize="11">{v}</text>)}
    <circle cx="298" cy={250-titrationConductivity(50)*4000} r="5" fill="#b76b29"/>
    <text x="294" y="198" fontSize="12">6.3 mS/cm at equivalence</text>
    <text x="230" y="289" fontSize="11">Added base volume (mL)</text>
    <text x="230" y="308" fontSize="11">Na+ and Cl− remain; minimum is not zero.</text>
   </>}
  </g>
 </svg>;
}
