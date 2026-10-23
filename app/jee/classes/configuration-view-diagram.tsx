import styles from "./lecture.module.css";

export default function ConfigurationViewDiagram() {
  return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label="View with hydrogen priority four pointing away: bromine top, chlorine lower right and fluorine lower left gives R; exchanging chlorine and fluorine gives S">
    <title>Assign configuration with priority four away</title>
    <rect width="460" height="330" rx="12" fill="#f5faf7"/>
    <g fill="#20483e" fontFamily="Arial, sans-serif" textAnchor="middle">
      <text x="230" y="28" fontSize="17" fontWeight="bold">View with H (4) directly away</text>
      <text x="230" y="52" fontSize="13">Projected view along C–H; H lies behind C.</text>
      {[{x:118,r:true},{x:342,r:false}].map(({x,r})=><g key={x}>
        <text x={x} y="88" fontSize="16" fontWeight="bold">Br (1)</text>
        <path d={`M${x} 103 V140 M${x-10} 158 L${x-54} 185 M${x+10} 158 L${x+54} 185`} fill="none" stroke="#20483e" strokeWidth="2"/>
        <text x={x} y="158" fontSize="19">C</text>
        <text x={x-63} y="211" fontSize="16">{r?"F (3)":"Cl (2)"}</text>
        <text x={x+63} y="211" fontSize="16">{r?"Cl (2)":"F (3)"}</text>
        <text x={x} y="246" fontSize="15">{r?"1→2→3 clockwise":"1→2→3 anticlockwise"}</text>
        <text x={x} y="275" fontSize="23" fontWeight="bold">{r?"R":"S"}</text>
      </g>)}
      <text x="230" y="311" fontSize="13">R/S does not determine the sign of optical rotation.</text>
    </g>
  </svg>;
}
