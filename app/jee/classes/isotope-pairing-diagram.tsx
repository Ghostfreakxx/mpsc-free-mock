import styles from "./lecture.module.css";

export default function IsotopePairingDiagram() {
  return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label="Independent chlorine isotope pairing: mixed pairs have two orderings">
    <title>Independent isotope pairing</title>
    <rect width="460" height="310" rx="12" fill="#f5faf7"/>
    <g fontFamily="Arial, sans-serif" textAnchor="middle" fill="#20483e">
      <text x="230" y="28" fontSize="18" fontWeight="bold">Two ways to make the mixed pair</text>
      <text x="230" y="51" fontSize="13">Light L: 0.75 · Heavy H: 0.25</text>
      <text x="217" y="78" fontSize="14">L (0.75)</text><text x="360" y="78" fontSize="14">H (0.25)</text>
      {[0,1].map(row=><g key={row}>
        <text x="65" y={119+row*70} fontSize="14">{row===0?"L (0.75)":"H (0.25)"}</text>
        {[0,1].map(col=><g key={col}>
          <rect x={147+col*143} y={89+row*70} width="134" height="61" rx="6" fill={row!==col?"#c9e7da":"#e2eee8"}/>
          <text x={214+col*143} y={113+row*70} fontSize="15" fontWeight="bold">{row===0?"L":"H"}{col===0?"L":"H"}</text>
          <text x={214+col*143} y={136+row*70} fontSize="14">{row===0&&col===0?"9/16":row===1&&col===1?"1/16":"3/16"}</text>
        </g>)}
      </g>)}
      <text x="230" y="243" fontSize="16" fontWeight="bold">LL : mixed : HH = 9 : 6 : 1</text>
      <text x="230" y="267" fontSize="13">LH and HL count toward the same isotopologue.</text>
      <text x="230" y="291" fontSize="12">Integer mass labels: 70, 72, 74 · Random pairing assumed</text>
    </g>
  </svg>;
}
