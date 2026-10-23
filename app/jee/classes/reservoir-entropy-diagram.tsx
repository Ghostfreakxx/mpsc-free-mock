import styles from "./lecture.module.css";

export default function ReservoirEntropyDiagram() {
  return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label="1000 joules flows from 400 kelvin to 300 kelvin; total entropy rises by 0.833 joule per kelvin">
    <title>Energy is conserved; entropy increases</title>
    <rect width="460" height="310" rx="12" fill="#f5faf7"/>
    <g fontFamily="Arial, sans-serif" textAnchor="middle" fill="#20483e">
      <text x="230" y="30" fontSize="18" fontWeight="bold">Equal heat, different entropy changes</text>
      <rect x="24" y="68" width="160" height="110" rx="8" fill="#f7dace"/>
      <rect x="276" y="68" width="160" height="110" rx="8" fill="#d3e8f1"/>
      <text x="104" y="95" fontSize="16" fontWeight="bold">Hot: 400 K</text>
      <text x="356" y="95" fontSize="16" fontWeight="bold">Cold: 300 K</text>
      <text x="104" y="127" fontSize="14">ΔU = −1000 J</text>
      <text x="356" y="127" fontSize="14">ΔU = +1000 J</text>
      <text x="104" y="158" fontSize="14">ΔS = −2.50 J/K</text>
      <text x="356" y="158" fontSize="14">ΔS = +3.33 J/K</text>
      <path d="M192 121 H265 L254 113 M265 121 L254 129" fill="none" stroke="#20483e" strokeWidth="3"/>
      <text x="230" y="105" fontSize="12">1000 J</text>
      <text x="230" y="216" fontSize="16" fontWeight="bold">Total ΔU = 0; total ΔS = +0.833 J/K</text>
      <text x="230" y="246" fontSize="14">Finite temperature difference → irreversible flow</text>
      <text x="230" y="276" fontSize="12">Ideal reservoirs stay at fixed temperatures.</text>
      <text x="230" y="295" fontSize="12">Combined system isolated; no work or other heat transfer.</text>
    </g>
  </svg>;
}
