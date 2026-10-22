import styles from "./lecture.module.css";

export default function ElectronGainStepsDiagram() {
 return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label="Supplied oxygen electron-gain steps: minus 141 plus 744 equals plus 603 kilojoules per mole">
  <title>Electron-gain steps: preserve both energy signs</title>
  <rect width="460" height="330" rx="12" fill="#f5faf7" />
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="27" fontSize="17" fontWeight="bold">Add the two electron-gain steps</text>
   <text x="230" y="51" fontSize="13">Supplied gas-phase energies; levels schematic</text>
   <path d="M43 248V75M43 75L39 84M43 75L47 84" stroke="#20483e" fill="none" />
   <text x="37" y="68" fontSize="12">E</text>
   <path d="M65 201H135M196 233H266M333 93H403" stroke="#146b55" strokeWidth="3" fill="none" />
   <path d="M100 205L231 229M231 229L219 221M231 229L217 233M232 229L367 98M367 98L352 103M367 98L361 113" stroke="#b54e32" strokeWidth="2" fill="none" />
   <text x="100" y="184" fontSize="16">0</text><text x="231" y="217" fontSize="16">−141</text><text x="368" y="78" fontSize="16">+603</text>
   <text x="100" y="260" fontSize="17">O(g) + 2e⁻</text><text x="231" y="260" fontSize="17">O⁻(g) + e⁻</text><text x="368" y="260" fontSize="17">O²⁻(g)</text>
   <text x="166" y="184" fontSize="14">−141</text><text x="315" y="190" fontSize="14">+744</text>
   <text x="230" y="291" fontSize="18" fontWeight="bold">Net: −141 + 744 = +603 kJ/mol</text>
   <text x="230" y="316" fontSize="12">Solid formation also requires lattice and other cycle terms</text>
  </g>
 </svg>;
}
