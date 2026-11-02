import styles from './lecture.module.css';
import { binomialBoards } from './binomial-theorem-boards';
export default function BinomialDiagram({chapter}:{chapter:number}){
  const board=binomialBoards[chapter]??binomialBoards[0];
  return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={`Binomial worked board: ${board.title}`}>
    <title>{board.title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
    <g fill="#20483e" fontFamily="Arial, sans-serif">
      <text x="24" y="30" fontSize="15" fontWeight="bold">BINOMIAL THEOREM · WORKED BOARD {chapter+1}</text>
      {chapter===0?<>
        {[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]].map((row,i)=><g key={i}>{row.map((v,j)=><g key={j}><rect x={208-i*32+j*64} y={49+i*44} width="44" height="35" rx="7" fill={i===4?'#dcece4':'#e6edf0'}/><text x={230-i*32+j*64} y={73+i*44} textAnchor="middle" fontSize="20">{v}</text></g>)}</g>)}
        <text x="230" y="293" textAnchor="middle" fontSize="17">Row n=4 gives 1,4,6,4,1 in (a+b)⁴</text>
        <text x="230" y="318" textAnchor="middle" fontSize="13">Each interior entry is the sum of its two parents.</text>
      </>:board.lines.map((line,i)=><g key={line}><rect x="16" y={57+i*64} width="428" height="53" rx="7" fill={i%2?'#e6edf0':'#dcece4'}/><text x="28" y={90+i*64} fontSize={line.length>43?13:line.length>35?15:18}>{line}</text></g>)}
    </g>
  </svg>;
}
