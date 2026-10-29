import styles from './lecture.module.css';
import {peroxideRedoxPaths as paths,magneticMixtureModel as m,mixtureMomentSquare,spinOnlySquare} from './inorganic-redox-measurements-data';
export default function InorganicRedoxMeasurementsDiagram({kind}:{kind:'peroxide'|'magnetism'}){
 const low=spinOnlySquare(m.feIIUnpaired),high=spinOnlySquare(m.feIIIUnpaired),fraction=(m.observedSquare-low)/(high-low);
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={kind==='peroxide'?'Peroxide oxygen can be reduced to water or oxidized to oxygen gas':'Corrected Curie mixture moment square varies linearly with high-spin iron three fraction'}>
  <title>{kind==='peroxide'?'The peroxide reaction partner determines its redox role':'A magnetic mixture averages moment squares, not moment magnitudes'}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" textAnchor="middle" fill="#20483e">
   {kind==='peroxide'?<>
    <text x="230" y="29" fontSize="16" fontWeight="bold">One peroxide, two redox roles</text>
    <rect x="128" y="52" width="204" height="54" rx="8" fill="#deeee5"/>
    <text x="230" y="75" fontSize="16">H2O2: each oxygen is −1</text>
    <text x="230" y="96" fontSize="11">Electron count below is per peroxide molecule</text>
    <path d="M230 108V127H115V152M230 127H345V152" stroke="#207c65" fill="none" strokeWidth="2"/>
    {paths.map((p,i)=><g key={p.product} transform={`translate(${i*230} 0)`}>
     <rect x="15" y="153" width="200" height="116" rx="8" fill={i?'#f0e6d7':'#e0eee7'}/>
     <text x="115" y="179" fontSize="14" fontWeight="bold">{p.product}: oxygen {p.oxygenState}</text>
     <text x="115" y="203" fontSize="12">{p.electronsAccepted>0?'Accepts 2 electrons':'Donates 2 electrons'}</text>
     <text x="115" y="229" fontSize="13">{p.role}</text>
     <text x="115" y="250" fontSize="11">Partner: {i?'acidic permanganate':'iodide in acid'}</text>
    </g>)}
    <text x="230" y="296" fontSize="11">Assign the role from the stated products, not from the reagent name.</text>
   </>:<>
    <text x="230" y="27" fontSize="16" fontWeight="bold">A mixture need not mimic one ion</text>
    <text x="230" y="49" fontSize="12">Corrected spin-only Curie model; moment squared in μB²</text>
    <path d="M70 74V249H412" stroke="#71948a" fill="none"/>
    <path d={`M80 ${245-(mixtureMomentSquare(0)-24)*14} L400 ${245-(mixtureMomentSquare(1)-24)*14}`} fill="none" stroke="#207c65" strokeWidth="3"/>
    {[24,30.6,35].map(v=><text key={v} x="43" y={249-(v-24)*14} fontSize="11">{v}</text>)}
    <path d={`M80 ${245-(m.observedSquare-24)*14}H${80+fraction*320}V249`} stroke="#b76b29" strokeDasharray="4 4" fill="none"/>
    <circle cx={80+fraction*320} cy={245-(m.observedSquare-24)*14} r="5" fill="#b76b29"/>
    <text x="325" y="170" fontSize="12">μeff² = 30.6</text>
    {[0,.6,1].map(v=><text key={v} x={80+v*320} y="270" fontSize="12">{v}</text>)}
    <text x="230" y="291" fontSize="11">FeIII fraction f: μeff² = 24 + 11f; f = .60</text>
    <text x="230" y="310" fontSize="10">Same T; per mole total Fe; interactions and orbital terms excluded</text>
   </>}
  </g>
 </svg>;
}
