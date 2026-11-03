import styles from './lecture.module.css';
import { statisticsBoards } from './statistics-probability-boards';
export default function StatisticsDiagram({chapter}:{chapter:number}){
 const b=statisticsBoards[chapter]??statisticsBoards[0];
 return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={`Statistics and probability worked board: ${b.title}`}>
  <title>{b.title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
  <g fill="#20483e" fontFamily="Arial, sans-serif">
   <text x="24" y="30" fontSize="15" fontWeight="bold">STATISTICS &amp; PROBABILITY · BOARD {chapter+1}</text>
   {chapter===14||chapter===15?<>
    <path d="M60 250H410 M65 65V270" stroke="#20483e" strokeWidth="1.5"/>
    {[.25,.5,.25].map((p,i)=><g key={i}><rect x={90+i*105} y={250-p*240} width="60" height={p*240} fill="#456f82"/><text x={120+i*105} y={237-p*240} textAnchor="middle" fontSize="18">{i===1?'1/2':'1/4'}</text><text x={120+i*105} y="276" textAnchor="middle" fontSize="18">{i}</text></g>)}
    <text x="76" y="65" fontSize="16">P(X=x)</text><text x="385" y="276" fontSize="16">x</text>
    <text x="230" y="314" textAnchor="middle" fontSize="16">{chapter===15?'E(X)=1; E(X²)=3/2; variance=1/2':'X counts heads; HT and TH both give X=1'}</text>
   </>:b.lines.map((line,i)=><g key={line}><rect x="16" y={57+i*64} width="428" height="53" rx="7" fill={i%2?'#e6edf0':'#dcece4'}/><text x="28" y={90+i*64} fontSize={line.length>48?12:line.length>40?14:line.length>35?16:18}>{line}</text></g>)}
  </g>
 </svg>;
}
