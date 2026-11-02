import styles from './lecture.module.css';
import { spaceBoards } from './three-dimensional-geometry-boards';
export default function SpaceDiagram({chapter}:{chapter:number}){
 const b=spaceBoards[chapter]??spaceBoards[0];
 return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={`3D geometry worked board: ${b.title}`}>
  <title>{b.title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
  <g fill="#20483e" fontFamily="Arial, sans-serif">
   <text x="24" y="30" fontSize="15" fontWeight="bold">3D GEOMETRY · BOARD {chapter+1}</text>
   {chapter===12?<>
    <path d="M50 260H405 M60 200L340 60" stroke="#20483e" strokeWidth="3" fill="none"/>
    <path d="M140 160V260" stroke="#456f82" strokeWidth="3" strokeDasharray="6 4"/>
    <circle cx="140" cy="160" r="5"/><circle cx="140" cy="260" r="5"/>
    <text x="290" y="248" fontSize="17">L₁=(t,0,0)</text><text x="252" y="102" fontSize="17">L₂=(s,2,s+1)</text>
    <text x="157" y="161" fontSize="16">Q=(−1,2,0)</text><text x="157" y="282" fontSize="16">P=(−1,0,0)</text>
    <text x="155" y="215" fontSize="18">PQ=2</text>
    <text x="230" y="312" textAnchor="middle" fontSize="15">Schematic projection · common perpendicular r=(−1,u,0)</text>
   </>:b.lines.map((line,i)=><g key={line}><rect x="16" y={57+i*64} width="428" height="53" rx="7" fill={i%2?'#e6edf0':'#dcece4'}/><text x="28" y={90+i*64} fontSize={line.length>48?12:line.length>40?14:line.length>35?16:18}>{line}</text></g>)}
  </g>
 </svg>;
}
