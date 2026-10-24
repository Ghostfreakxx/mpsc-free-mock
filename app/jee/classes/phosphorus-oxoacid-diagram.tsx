import styles from "./lecture.module.css";

export default function PhosphorusOxoacidDiagram() {
  return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label="Phosphorus oxoacid structures: H3PO2 has one OH group, H3PO3 has two and H3PO4 has three. Their ordinary acid basicities are one, two and three.">
    <title>Count O–H groups, not total hydrogens</title>
    <rect width="460" height="320" rx="12" fill="#f5faf7"/>
    <g fontFamily="Arial, sans-serif" textAnchor="middle" fill="#20483e">
      <text x="230" y="28" fontSize="18" fontWeight="bold">Same H count, different acid basicity</text>
      {[84,230,376].map((x,i)=><g key={x}>
        <text x={x} y="61" fontSize="18" fontWeight="bold">{["H₃PO₂","H₃PO₃","H₃PO₄"][i]}</text>
        <text x={x} y="92" fontSize="19">O</text>
        <path d={`M${x-3} 103V132 M${x+3} 103V132 M${x-12} 145H${x-35} M${x+12} 145H${x+35} M${x} 160V190`} fill="none" stroke="#20483e" strokeWidth="2"/>
        <text x={x} y="152" fontSize="21">P</text>
        <text x={x-51} y="151" fontSize="17" fill={i===0?"#9c553a":"#146b55"}>{i===0?"H":"OH"}</text>
        <text x={x+51} y="151" fontSize="17" fill={i===2?"#146b55":"#9c553a"}>{i===2?"OH":"H"}</text>
        <text x={x} y="213" fontSize="18" fill="#146b55">OH</text>
        <text x={x} y="249" fontSize="16" fontWeight="bold">{i+1} O–H {i===0?"group":"groups"}</text>
        <text x={x} y="273" fontSize="14">{["Monobasic","Dibasic","Tribasic"][i]}</text>
      </g>)}
      <text x="230" y="306" fontSize="12">P–H hydrogens are not counted in this ordinary aqueous basicity comparison.</text>
    </g>
  </svg>;
}
