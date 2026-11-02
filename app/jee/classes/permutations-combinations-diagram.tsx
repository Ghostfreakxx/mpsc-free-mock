import styles from './lecture.module.css';
import { countingBoards } from './permutations-combinations-boards';
export default function CountingDiagram({chapter}:{chapter:number}) {
  const board=countingBoards[chapter]??countingBoards[0];
  const seats=[[230,85],[308,130],[308,220],[230,265],[152,220],[152,130]];
  return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={`Counting worked board: ${board.title}`}>
    <title>{board.title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
    <g fill="#20483e" fontFamily="Arial, sans-serif">
      <text x="24" y="30" fontSize="15" fontWeight="bold">PERMUTATIONS &amp; COMBINATIONS · {chapter+1}</text>
      {chapter===5?<>
        <text x="230" y="65" textAnchor="middle" fontSize="16">Four anchors create five gaps</text>
        {[100,180,260,340].map((x,i)=><g key={x}><rect x={x-22} y="135" width="44" height="52" rx="8" fill="#dcece4"/><text x={x} y="168" textAnchor="middle" fontSize="22">{'ABCD'[i]}</text></g>)}
        {[60,140,220,300,380].map(x=><circle key={x} cx={x} cy="105" r="19" fill="#e6edf0" stroke="#20483e"/>)}
        {[60,220,380].map((x,i)=><text key={x} x={x} y="111" textAnchor="middle" fontSize="18">{'XYZ'[i]}</text>)}
        <text x="230" y="232" textAnchor="middle" fontSize="19">Choose 3 distinct gaps; order X,Y,Z</text>
        <text x="230" y="274" textAnchor="middle" fontSize="23">4! × C(5,3) × 3! = 1440</text>
        <text x="230" y="313" textAnchor="middle" fontSize="14">All seven people distinct; no neighbouring specials.</text>
      </>:chapter===6?<>
        <circle cx="230" cy="175" r="68" fill="#dcece4"/>
        {seats.map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="22" fill={i?'#e6edf0':'#dcece4'} stroke="#20483e" strokeWidth={i?1:3}/><text x={x} y={y+6} textAnchor="middle" fontSize="19">{'ABCDEF'[i]}</text></g>)}
        <text x="230" y="172" textAnchor="middle" fontSize="17">Fix A</text><text x="230" y="199" textAnchor="middle" fontSize="21">5! = 120</text>
        <text x="230" y="315" textAnchor="middle" fontSize="15">Rotations identical; reflections remain distinct.</text>
      </>:board.lines.map((line,i)=><g key={line}><rect x="16" y={57+i*64} width="428" height="53" rx="7" fill={i%2?'#e6edf0':'#dcece4'}/><text x="28" y={90+i*64} fontSize={line.length>38?14:line.length>32?16:18}>{line}</text></g>)}
    </g>
  </svg>;
}
