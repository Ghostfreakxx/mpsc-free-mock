import styles from './lecture.module.css';
export default function CombustionVolumeDiagram(){
 return <svg className={styles.diagram} viewBox="0 0 460 340" role="img" aria-label="Combustion gas-volume balance at matching temperature and pressure: initially 20 millilitres hydrocarbon plus 130 oxygen, cooled residue 60 carbon dioxide plus 30 oxygen, after selective carbon dioxide absorption 30 oxygen. Fuel formula C3H8.">
  <title>Separate carbon dioxide from excess oxygen</title><rect width="460" height="340" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" fill="#20483e">
   <text x="230" y="25" textAnchor="middle" fontSize="17" fontWeight="bold">Separate CO₂ from excess oxygen</text>
   <text x="230" y="46" textAnchor="middle" fontSize="12">Ideal volumes at equal T,p; water condensed after combustion</text>
   <text x="45" y="70" fontSize="13">Before: 150 mL total</text>
   <rect x="45" y="79" width="48" height="42" fill="#f5cf9c"/><rect x="93" y="79" width="312" height="42" fill="#d9e8f8"/>
   <text x="69" y="96" textAnchor="middle" fontSize="11">Fuel</text><text x="69" y="112" textAnchor="middle" fontSize="11">20 mL</text><text x="249" y="105" textAnchor="middle" fontSize="14">O₂: 130 mL</text>
   <text x="45" y="153" fontSize="13">After cooling: 90 mL gas remains</text>
   <rect x="45" y="163" width="144" height="42" fill="#deeee5"/><rect x="189" y="163" width="72" height="42" fill="#d9e8f8"/>
   <text x="117" y="189" textAnchor="middle" fontSize="14">CO₂: 60 mL</text><text x="225" y="189" textAnchor="middle" fontSize="12">O₂: 30 mL</text>
   <text x="45" y="237" fontSize="13">After selective CO₂ absorption: 30 mL O₂</text>
   <rect x="45" y="247" width="72" height="35" fill="#d9e8f8"/><text x="81" y="270" textAnchor="middle" fontSize="12">O₂: 30</text>
   <text x="230" y="308" textAnchor="middle" fontSize="13">O₂ used = 130−30 = 100; CO₂ formed = 90−30 = 60</text>
   <text x="230" y="329" textAnchor="middle" fontSize="13">x = 60/20 = 3; x+y/4 = 100/20 = 5 → C₃H₈</text>
  </g>
 </svg>;
}
