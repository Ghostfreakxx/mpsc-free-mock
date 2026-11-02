import styles from './lecture.module.css';
import { vectorBoards } from './vector-algebra-boards';
export default function VectorDiagram({chapter}:{chapter:number}){
 const b=vectorBoards[chapter]??vectorBoards[0];
 return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={`Vector algebra worked board: ${b.title}`}>
  <title>{b.title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
  <defs><marker id="vector-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#20483e"/></marker></defs>
  <g fill="#20483e" fontFamily="Arial, sans-serif">
   <text x="24" y="30" fontSize="15" fontWeight="bold">VECTOR ALGEBRA · BOARD {chapter+1}</text>
   {chapter===2||chapter===11?<>
    <rect x="80" y="65" width="150" height="200" fill="#dcece4"/>
    <path d="M80 265H230 M80 265V65 M80 265L230 65" stroke="#20483e" strokeWidth="3" fill="none" markerEnd="url(#vector-arrow)"/>
    <path d="M80 65H230V265" stroke="#456f82" strokeWidth="1.5" fill="none" strokeDasharray="5 4"/>
    <text x="132" y="286" fontSize="17">u=(3,0,0)</text><text x="20" y="155" fontSize="17">v</text>
    <text x="95" y="155" fontSize="17">|u+v|=5</text><text x="250" y="105" fontSize="17">|v|=4</text>
    <text x="250" y="157" fontSize="17">Area=12</text><text x="250" y="196" fontSize="17">Triangle=6</text>
    <text x="230" y="315" textAnchor="middle" fontSize="16">u×v=(0,0,12), perpendicular to this plane</text>
   </>:b.lines.map((line,i)=><g key={line}><rect x="16" y={57+i*64} width="428" height="53" rx="7" fill={i%2?'#e6edf0':'#dcece4'}/><text x="28" y={90+i*64} fontSize={line.length>48?12:line.length>40?14:line.length>35?16:18}>{line}</text></g>)}
  </g>
 </svg>;
}
