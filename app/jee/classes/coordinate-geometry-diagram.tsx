import styles from './lecture.module.css';
import { coordinateBoards } from './coordinate-geometry-boards';
export default function CoordinateDiagram({chapter}:{chapter:number}){
 const b=coordinateBoards[chapter]??coordinateBoards[0];
 return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={`Coordinate geometry worked board: ${b.title}`}>
  <title>{b.title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
  <g fill="#20483e" fontFamily="Arial, sans-serif">
   <text x="24" y="30" fontSize="15" fontWeight="bold">COORDINATE GEOMETRY · BOARD {chapter+1}</text>
   {chapter===12?<>
    <path d="M55 177H405 M230 48V295" stroke="#456f82" strokeWidth="1.5"/>
    <circle cx="230" cy="177" r="110" fill="none" stroke="#20483e" strokeWidth="3"/>
    <path d="M142 111H318 M230 177L318 111 M230 111V177" stroke="#20483e" strokeWidth="2"/>
    <path d="M230 120H239V111" stroke="#20483e" fill="none"/>
    <circle cx="142" cy="111" r="4"/><circle cx="318" cy="111" r="4"/>
    <text x="89" y="97" fontSize="16">(−4,3)</text><text x="318" y="97" fontSize="16">(4,3)</text>
    <text x="211" y="151" fontSize="16">3</text><text x="275" y="161" fontSize="16">5</text><text x="273" y="105" fontSize="16">4</text>
    <text x="230" y="314" textAnchor="middle" fontSize="17">Chord length = 2√(25−9) = 8</text>
   </>:b.lines.map((line,i)=><g key={line}><rect x="16" y={57+i*64} width="428" height="53" rx="7" fill={i%2?'#e6edf0':'#dcece4'}/><text x="28" y={90+i*64} fontSize={line.length>48?12:line.length>40?14:line.length>35?16:18}>{line}</text></g>)}
  </g>
 </svg>;
}
