import styles from './lecture.module.css';
import { complexQuadraticsBoards } from './complex-quadratics-boards';
export default function ComplexQuadraticsDiagram({chapter}:{chapter:number}) {
  const board=complexQuadraticsBoards[chapter]??complexQuadraticsBoards[0];
  return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={`Complex numbers worked board: ${board.title}`}>
    <title>{board.title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
    <g fill="#20483e" fontFamily="Arial, sans-serif">
    <text x="24" y="30" fontSize="15" fontWeight="bold">COMPLEX NUMBERS &amp; QUADRATICS · {chapter+1}</text>
    {chapter===2?<>
      <path d="M36 185H425 M180 48V290" stroke="#20483e" strokeWidth="2"/>
      <circle cx="240" cy="185" r="90" fill="#dcece4" fillOpacity=".7" stroke="#20483e" strokeWidth="2"/>
      <path d="M240 185H330" stroke="#20483e" strokeWidth="2"/>
      <circle cx="240" cy="185" r="4"/>
      <text x="235" y="211" fontSize="15">(2,0)</text><text x="263" y="174" fontSize="17">r = 3</text>
      <text x="385" y="208" fontSize="15">Re z</text><text x="188" y="57" fontSize="15">Im z</text>
      <text x="25" y="315" fontSize="18">|z−2|=3 is a circle, not a single point.</text>
    </>:chapter===3?<>
      <path d="M45 200H415 M230 53V278" stroke="#20483e" strokeWidth="2"/>
      <path d="M230 200L160 130 M270 200A40 40 0 0 0 202 172" stroke="#20483e" strokeWidth="3" fill="none"/>
      <circle cx="160" cy="130" r="5"/><text x="64" y="113" fontSize="19">z = −1+i</text>
      <text x="350" y="222" fontSize="15">Re z</text><text x="238" y="63" fontSize="15">Im z</text>
      <text x="25" y="303" fontSize="18">Quadrant II: Arg(z)=3π/4; |z|=√2</text>
    </>:board.lines.map((line,i)=><g key={line}><rect x="16" y={57+i*64} width="428" height="53" rx="7" fill={i%2?'#e6edf0':'#dcece4'}/><text x="28" y={90+i*64} fontSize={line.length>38?14:line.length>32?16:18}>{line}</text></g>)}
    </g>
  </svg>;
}
