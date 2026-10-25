import AtomicBondingEvidenceDiagram from './atomic-bonding-evidence-diagram';
import LowerZDiatomicDiagram from './lower-z-diatomic-diagram';
import ExcitedRadialDiagram from './excited-radial-diagram';
import atomicStructure from "../../data/jee-atomic-structure-lecture.json";
import chemicalBonding from "../../data/jee-chemical-bonding-lecture.json";
import BondingApplicationsDiagram from "./bonding-applications-diagram";
import styles from "./lecture.module.css";
import RadialProbabilityDiagram from "./radial-probability-diagram";

export default function AtomicBondingDiagram({lesson,chapter}:{lesson:"atomic-structure"|"chemical-bonding";chapter:number}) {
 if(chapter===21 || (lesson==='chemical-bonding'&&chapter===22))return <AtomicBondingEvidenceDiagram lesson={lesson} chapter={chapter}/>;
 if(lesson==="chemical-bonding"&&chapter===17)return <LowerZDiatomicDiagram/>;
 if(lesson==="atomic-structure"&&chapter===18)return <ExcitedRadialDiagram/>;
 if(lesson==="atomic-structure"&&chapter===14)return <RadialProbabilityDiagram/>;
 if (lesson==="chemical-bonding" && (chapter===9 || chapter===12)) return <BondingApplicationsDiagram chapter={chapter}/>;
 const board=(lesson==="atomic-structure"?atomicStructure:chemicalBonding).chapters[chapter].board;
 return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label={board.heading}>
  <title>{board.heading}</title><rect width="460" height="310" rx="12" fill="#f5faf7" />
  <g fill="#20483e" fontFamily="Arial, sans-serif" fontSize="14">
   <text x="230" y="34" textAnchor="middle" fontSize="17" fontWeight="bold" textLength={board.heading.length>44?420:undefined} lengthAdjust="spacingAndGlyphs">{board.heading}</text>
   <rect x="12" y="61" width="436" height="43" rx="5" fill="#deeee5" />
   {board.columns.map((label,j)=><text key={j} x={85+j*145} y="88" textAnchor="middle" fontWeight="bold" fontSize="13" textLength={label.length>19?132:undefined} lengthAdjust="spacingAndGlyphs">{label}</text>)}
   {board.rows.map((row,i)=><g key={i}>
    <rect x="12" y={115+i*60} width="436" height="51" rx="5" fill={i===2?"#e2eee8":"#edf3ef"}/>
    {row.map((value,j)=><text key={j} x={85+j*145} y={146+i*60} textAnchor="middle" fontSize="14" textLength={value.length>19?132:undefined} lengthAdjust="spacingAndGlyphs">{value}</text>)}
   </g>)}
  </g>
 </svg>;
}
