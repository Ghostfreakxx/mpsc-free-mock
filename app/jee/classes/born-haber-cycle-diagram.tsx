import styles from './lecture.module.css';
export default function BornHaberCycleDiagram(){
 return <svg className={styles.diagram} viewBox="0 0 460 340" role="img" aria-label="Supplied sodium chloride Born–Haber cycle: elements to gaseous ions +377, lattice formation −788, direct standard formation −411 kilojoules per mole">
  <title>Close the signed Born–Haber cycle</title>
  <rect width="460" height="340" rx="12" fill="#f5faf7"/>
  <defs><marker id="born-haber-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7" fill="#286c59"/></marker></defs>
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="25" fontSize="17" fontWeight="bold">Close the signed Born–Haber cycle</text>
   <text x="230" y="47" fontSize="12">Supplied teaching data; every value in kJ/mol of NaCl</text>
   <path d="M80 180 V80 H370 V280 H80 V200" fill="none" stroke="#286c59" strokeWidth="2" markerEnd="url(#born-haber-arrow)"/>
   <path d="M80 190 V270" fill="none" stroke="#b34c2f" strokeWidth="2" markerEnd="url(#born-haber-arrow)"/>
   <rect x="143" y="66" width="212" height="30" rx="5" fill="#deeee5"/><text x="249" y="86" fontSize="14">Na⁺(g) + Cl⁻(g): +377</text>
   <rect x="12" y="175" width="254" height="30" rx="5" fill="#deeee5"/><text x="139" y="195" fontSize="14">Na(s) + ½Cl₂(g): reference 0</text>
   <rect x="146" y="265" width="210" height="30" rx="5" fill="#deeee5"/><text x="251" y="285" fontSize="14">NaCl(s): −411</text>
   <text x="179" y="118" fontSize="12">To gaseous ions: +377</text>
   <text x="179" y="139" fontSize="12">108 + 496 + 122 − 349</text>
   <text x="354" y="218" fontSize="12">Lattice formation</text><text x="354" y="238" fontSize="15" fontWeight="bold">−788</text>
   <text x="151" y="235" fontSize="12" fill="#a0442b">Direct formation: −411</text>
   <text x="230" y="320" fontSize="13">−411 = +377 − 788; reverse lattice arrow: +788</text>
  </g>
 </svg>;
}
