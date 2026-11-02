import styles from './lecture.module.css';
import { trigonometryBoards } from './trigonometry-boards';
export default function TrigonometryDiagram({chapter}:{chapter:number}){
  const board=trigonometryBoards[chapter]??trigonometryBoards[0];
  const sinePath=Array.from({length:121},(_,i)=>`${i?'L':'M'}${50+3*i},${160-70*Math.sin(i*Math.PI/60)}`).join(' ');
  return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={`Trigonometry worked board: ${board.title}`}>
    <title>{board.title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
    <g fill="#20483e" fontFamily="Arial, sans-serif">
      <text x="24" y="30" fontSize="15" fontWeight="bold">TRIGONOMETRY · WORKED BOARD {chapter+1}</text>
      {chapter===0?<>
        <path d="M70 175H390 M230 55V285" stroke="#20483e" strokeWidth="1.5"/>
        <circle cx="230" cy="175" r="90" fill="none" stroke="#20483e" strokeWidth="2"/>
        <path d="M230 175L185 97.058 M185 97.058V175 M185 97.058H230" fill="none" stroke="#20483e" strokeWidth="2" strokeDasharray="5 3"/>
        <path d="M270 175A40 40 0 0 0 210 140.359" stroke="#20483e" fill="none" strokeWidth="2"/>
        <circle cx="185" cy="97.058" r="5"/><text x="68" y="70" fontSize="18">(−½, √3/2)</text><text x="278" y="130" fontSize="17">2π/3</text>
        <text x="360" y="199" fontSize="15">cosθ</text><text x="238" y="64" fontSize="15">sinθ</text>
        <text x="230" y="315" textAnchor="middle" fontSize="17">Quadrant II: cosine negative, sine positive.</text>
      </>:chapter===1?<>
        <path d="M50 160H425 M50 60V260" stroke="#20483e" strokeWidth="1.5"/>
        <path d={sinePath} stroke="#20483e" strokeWidth="3" fill="none"/>
        <text x="32" y="94" fontSize="16">1</text><text x="22" y="235" fontSize="16">−1</text>
        <text x="45" y="186" fontSize="16">0</text><text x="226" y="186" fontSize="16">π</text><text x="398" y="186" fontSize="16">2π</text>
        <text x="230" y="290" textAnchor="middle" fontSize="20">y=sinx: range [−1,1], period 2π</text>
        <text x="230" y="317" textAnchor="middle" fontSize="14">Tangent has period π and excluded asymptotes.</text>
      </>:board.lines.map((line,i)=><g key={line}><rect x="16" y={57+i*64} width="428" height="53" rx="7" fill={i%2?'#e6edf0':'#dcece4'}/><text x="28" y={90+i*64} fontSize={line.length>43?13:line.length>35?15:18}>{line}</text></g>)}
    </g>
  </svg>;
}
