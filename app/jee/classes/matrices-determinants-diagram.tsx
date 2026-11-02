import styles from './lecture.module.css';
import { matrixBoards } from './matrices-determinants-boards';

export default function MatricesDeterminantsDiagram({chapter}:{chapter:number}) {
  const board = matrixBoards[chapter] ?? matrixBoards[0];
  return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={`Matrix worked board: ${board.title}`}>
    <title>{board.title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
    <text x="24" y="35" fill="#20483e" fontSize="15" fontFamily="Arial, sans-serif" fontWeight="bold">MATRICES · WORKED BOARD {chapter+1}</text>
    {board.lines.map((line,i)=><g key={line}><rect x="16" y={57+i*64} width="428" height="53" rx="7" fill={i%2?'#e6edf0':'#dcece4'}/><text x="30" y={90+i*64} fill="#20483e" fontSize={line.length>36?15:18} fontFamily="Arial, sans-serif">{line}</text></g>)}
  </svg>;
}
