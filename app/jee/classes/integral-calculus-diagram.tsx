import styles from './lecture.module.css';
import { integralBoards } from './integral-calculus-boards';
export default function IntegralDiagram({chapter}:{chapter:number}){
 const b=integralBoards[chapter]??integralBoards[0];
 const parabola=Array.from({length:41},(_,i)=>{const x=i/40;return `${65+300*x},${255-180*x*x}`;}).join(' ');
 return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={`Integral calculus worked board: ${b.title}`}>
  <title>{b.title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
  <g fill="#20483e" fontFamily="Arial, sans-serif">
   <text x="24" y="30" fontSize="15" fontWeight="bold">INTEGRAL CALCULUS · BOARD {chapter+1}</text>
   {chapter===16?<>
    <path d="M45 255H405 M65 55V280" stroke="#20483e" strokeWidth="1.5"/>
    <polygon points={`65,255 365,75 ${parabola.split(' ').reverse().join(' ')}`} fill="#dcece4"/>
    <path d="M65 255L365 75" stroke="#20483e" strokeWidth="3"/><polyline points={parabola} stroke="#456f82" strokeWidth="3" fill="none"/>
    <text x="135" y="145" fontSize="18">y=x</text><text x="292" y="211" fontSize="18">y=x²</text>
    <text x="55" y="278" fontSize="16">0</text><text x="360" y="278" fontSize="16">1</text>
    <text x="230" y="312" textAnchor="middle" fontSize="17">Area = ∫₀¹(x−x²)dx = 1/6</text>
   </>:b.lines.map((line,i)=><g key={line}><rect x="16" y={57+i*64} width="428" height="53" rx="7" fill={i%2?'#e6edf0':'#dcece4'}/><text x="28" y={90+i*64} fontSize={line.length>65?9:line.length>52?11:line.length>43?13:line.length>35?15:18}>{line}</text></g>)}
  </g>
 </svg>;
}
