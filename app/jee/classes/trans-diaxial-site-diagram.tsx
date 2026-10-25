import styles from './lecture.module.css';
export default function TransDiaxialSiteDiagram(){
 return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label="Given cyclohexane-chair axial-site pattern: C1 bromine axial up, C6 hydrogen axial down and C2 methyl axial down. C6 has the eligible beta hydrogen; the C2 hydrogen is equatorial. This is a site map, not a perspective chair drawing.">
  <title>Inspect the axial sites of the given chair</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="25" fontSize="17" fontWeight="bold">Inspect the given chair’s axial sites</text>
   <text x="230" y="48" fontSize="12">Partial site map; directions are supplied axial up / down</text>
   <line x1="90" y1="156" x2="230" y2="156" stroke="#2861a1" strokeWidth="5"/><line x1="230" y1="156" x2="370" y2="156" stroke="#b9c8bf" strokeWidth="3"/>
   {[90,230,370].map((x,i)=><g key={x}><circle cx={x} cy="156" r="22" fill="#deeee5"/><text x={x} y="161" fontSize="16" fontWeight="bold">C{[6,1,2][i]}</text></g>)}
   <line x1="230" y1="133" x2="230" y2="88" stroke="#a34b2c" strokeWidth="2"/><text x="230" y="78" fontSize="15">Br axial ↑</text>
   <line x1="90" y1="179" x2="90" y2="220" stroke="#2861a1" strokeWidth="2"/><text x="90" y="240" fontSize="15">H axial ↓</text>
   <line x1="370" y1="179" x2="370" y2="220" stroke="#a34b2c" strokeWidth="2"/><text x="370" y="240" fontSize="15">CH₃ axial ↓</text>
   <text x="90" y="266" fontSize="12" fill="#2861a1">Eligible β-H</text><text x="370" y="266" fontSize="12">C2-H is equatorial</text>
   <text x="230" y="294" fontSize="13">C1=C6 is eligible; C1=C2 lacks the required axial H.</text>
   <text x="230" y="316" fontSize="12">Ordinary anti E2 geometry checked before alkene preference.</text>
  </g>
 </svg>;
}
