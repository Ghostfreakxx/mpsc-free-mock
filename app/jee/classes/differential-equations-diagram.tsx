import styles from './lecture.module.css';
import { differentialBoards } from './differential-equations-boards';
export default function DifferentialDiagram({chapter}:{chapter:number}){
 const b=differentialBoards[chapter]??differentialBoards[0];
 const curve=Array.from({length:61},(_,i)=>`${65+5*i},${255-180*2**(-i/30)}`).join(' ');
 return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={`Differential equations worked board: ${b.title}`}>
  <title>{b.title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
  <g fill="#20483e" fontFamily="Arial, sans-serif">
   <text x="24" y="30" fontSize="15" fontWeight="bold">DIFFERENTIAL EQUATIONS · BOARD {chapter+1}</text>
   {chapter===12?<>
    <path d="M45 255H410 M65 55V280" stroke="#20483e" strokeWidth="1.5"/>
    <polyline points={curve} stroke="#20483e" strokeWidth="3" fill="none"/>
    <path d="M215 165V255 M365 210V255" stroke="#456f82" strokeDasharray="5 4"/>
    {[ [65,75],[215,165],[365,210] ].map(([x,y])=><circle key={x} cx={x} cy={y} r="4"/>)}
    <text x="33" y="79" fontSize="16">80</text><text x="222" y="158" fontSize="16">40</text><text x="372" y="205" fontSize="16">20</text>
    <text x="59" y="278" fontSize="16">0</text><text x="209" y="278" fontSize="16">3</text><text x="359" y="278" fontSize="16">6</text>
    <text x="230" y="312" textAnchor="middle" fontSize="17">N(t)=80·2^(−t/3); half life = 3</text>
   </>:b.lines.map((line,i)=><g key={line}><rect x="16" y={57+i*64} width="428" height="53" rx="7" fill={i%2?'#e6edf0':'#dcece4'}/><text x="28" y={90+i*64} fontSize={line.length>43?14:line.length>35?16:18}>{line}</text></g>)}
  </g>
 </svg>;
}
