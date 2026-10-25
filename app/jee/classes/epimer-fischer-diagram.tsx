import styles from './lecture.module.css';
export default function EpimerFischerDiagram(){
 const sugars=[{name:'D-Glucose',x:100,oh:'RLRR',changed:-1},{name:'D-Mannose',x:230,oh:'LLRR',changed:0},{name:'D-Galactose',x:360,oh:'RLLR',changed:2}];
 return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label="Fischer projections of D-glucose, D-mannose and D-galactose: hydroxyl positions at C2 to C5 are RLRR, LLRR and RLLR. Mannose differs from glucose at C2; galactose at C4.">
  <title>Compare one Fischer centre at a time</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="25" fontSize="17" fontWeight="bold">Compare one Fischer centre at a time</text>
   {sugars.map(s=><g key={s.name}>
    <text x={s.x} y="53" fontSize="14" fontWeight="bold">{s.name}</text>
    <text x={s.x} y="82" fontSize="14">CHO</text><line x1={s.x} x2={s.x} y1="87" y2="245" stroke="#20483e" strokeWidth="2"/>
    {[...s.oh].map((side,i)=><g key={i}>
     {i===s.changed&&<rect x={s.x-50} y={101+i*35} width="100" height="27" rx="5" fill="#f5dfc6"/>}
     <line x1={s.x-19} x2={s.x+19} y1={115+i*35} y2={115+i*35} stroke="#20483e" strokeWidth="2"/>
     <line x1={s.x} x2={s.x} y1={101+i*35} y2={129+i*35} stroke="#20483e" strokeWidth="2"/>
     <text x={s.x-35} y={120+i*35} fontSize="14">{side==='L'?'OH':'H'}</text><text x={s.x+35} y={120+i*35} fontSize="14">{side==='R'?'OH':'H'}</text>
    </g>)}
    <text x={s.x} y="262" fontSize="14">CH₂OH</text>
   </g>)}
   {[2,3,4,5].map((n,i)=><text key={n} x="19" y={120+i*35} fontSize="12">C{n}</text>)}
   <text x="230" y="290" fontSize="12">Highlighted centres differ from glucose: C2 or C4.</text>
   <text x="230" y="312" fontSize="12">Mannose versus galactose differs at two centres: not epimers.</text>
  </g>
 </svg>;
}
