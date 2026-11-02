import styles from './lecture.module.css';
import { calculusBoards } from './limits-continuity-differentiability-boards';
export default function CalculusDiagram({chapter}:{chapter:number}){
  const board=calculusBoards[chapter]??calculusBoards[0];
  return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={`Calculus worked board: ${board.title}`}>
    <title>{board.title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
    <g fill="#20483e" fontFamily="Arial, sans-serif">
      <text x="24" y="30" fontSize="15" fontWeight="bold">LIMITS &amp; DIFFERENTIATION · BOARD {chapter+1}</text>
      {chapter===1?<>
        <path d="M45 255H405 M60 55V275" stroke="#20483e" strokeWidth="1.5"/>
        <path d="M60 175L287.5 35" stroke="#20483e" strokeWidth="3"/>
        <circle cx="190" cy="95" r="7" fill="#f5faf7" stroke="#20483e" strokeWidth="2"/>
        <path d="M190 105V255" stroke="#20483e" strokeDasharray="5 4"/>
        <text x="180" y="278" fontSize="17">2</text><text x="213" y="97" fontSize="17">Hole at (2,4)</text>
        <text x="230" y="313" textAnchor="middle" fontSize="17">Limit = 4; the original point is undefined.</text>
      </>:chapter===5?<>
        <path d="M50 220H410 M230 60V260" stroke="#20483e" strokeWidth="1.5"/>
        <path d="M110 100L230 220L350 100" stroke="#20483e" strokeWidth="3" fill="none"/>
        <circle cx="230" cy="220" r="4"/>
        <text x="65" y="76" fontSize="17">Left slope −1</text><text x="278" y="76" fontSize="17">Right slope +1</text>
        <text x="158" y="245" fontSize="15">−1</text><text x="286" y="245" fontSize="15">1</text><text x="235" y="281" fontSize="20">y=|x|</text>
        <text x="230" y="316" textAnchor="middle" fontSize="16">Continuous at 0, but not differentiable there.</text>
      </>:board.lines.map((line,i)=><g key={line}><rect x="16" y={57+i*64} width="428" height="53" rx="7" fill={i%2?'#e6edf0':'#dcece4'}/><text x="28" y={90+i*64} fontSize={line.length>43?13:line.length>35?15:18}>{line}</text></g>)}
    </g>
  </svg>;
}
