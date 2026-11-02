import styles from './lecture.module.css';
import { sequenceBoards } from './sequences-series-boards';
export default function SequencesDiagram({chapter}:{chapter:number}){
  const board=sequenceBoards[chapter]??sequenceBoards[0];
  const inserted=chapter===3?[2,6,10,14,18]:[2,6,18,54,162];
  return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={`Sequences worked board: ${board.title}`}>
    <title>{board.title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
    <g fill="#20483e" fontFamily="Arial, sans-serif">
      <text x="24" y="30" fontSize="15" fontWeight="bold">SEQUENCES &amp; SERIES · WORKED BOARD {chapter+1}</text>
      {chapter===3||chapter===6?<>
        <text x="230" y="76" fontSize="18" textAnchor="middle">{chapter===3?'Insert 3 arithmetic means':'Insert 3 positive geometric means'}</text>
        {inserted.map((v,i)=><g key={i}><rect x={20+i*86} y="130" width="72" height="56" rx="9" fill={i===0||i===4?'#e6edf0':'#dcece4'}/><text x={56+i*86} y="166" textAnchor="middle" fontSize="23">{v}</text>{i<4&&<text x={98+i*86} y="116" textAnchor="middle" fontSize="15">{chapter===3?'+4':'×3'}</text>}</g>)}
        <text x="230" y="237" textAnchor="middle" fontSize="20">{chapter===3?'4 gaps: (18−2)/4 = 4':'4 ratio steps: r⁴ = 162/2 = 81'}</text>
        <text x="230" y="281" textAnchor="middle" fontSize="18">{chapter===3?'Equal differences connect both endpoints.':'Positivity selects r=3; exclude r=−3.'}</text>
        <text x="230" y="315" textAnchor="middle" fontSize="14">Three inserted terms create four transitions.</text>
      </>:board.lines.map((line,i)=><g key={line}><rect x="16" y={57+i*64} width="428" height="53" rx="7" fill={i%2?'#e6edf0':'#dcece4'}/><text x="28" y={90+i*64} fontSize={line.length>43?13:line.length>35?15:18}>{line}</text></g>)}
    </g>
  </svg>;
}
