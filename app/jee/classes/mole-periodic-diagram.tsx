import MoleOrganicBasisDiagram from './mole-organic-basis-diagram';
import PeriodicCoordinationContextDiagram from './periodic-coordination-context-diagram';
import MoleChairBalancesDiagram from './mole-chair-balances-diagram';
import MoleOrganicInterpretationDiagram from './mole-organic-interpretation-diagram';
import PeriodicSeparationEvidenceDiagram from './periodic-separation-evidence-diagram';
import moleConcept from "../../data/jee-mole-concept-lecture.json";
import periodicTrends from "../../data/jee-periodic-trends-lecture.json";
import styles from "./lecture.module.css";
import ElectronGainStepsDiagram from "./electron-gain-steps-diagram";
import IsotopePairingDiagram from "./isotope-pairing-diagram";

export default function MolePeriodicDiagram({lesson,chapter}:{lesson:"mole-concept"|"periodic-trends";chapter:number}) {
 if(lesson==='periodic-trends'&&chapter===26)return <PeriodicCoordinationContextDiagram kind="radii"/>;
 if(lesson==='mole-concept'&&chapter===28)return <MoleChairBalancesDiagram kind="recycle"/>;
 if(lesson==='mole-concept'&&chapter===23)return <MoleOrganicInterpretationDiagram kind="gas"/>;
 if(lesson==='periodic-trends'&&chapter===22)return <PeriodicSeparationEvidenceDiagram kind="halogens"/>;
 if(lesson==="periodic-trends"&&chapter===15)return <ElectronGainStepsDiagram/>;
 if(lesson==="mole-concept"&&chapter===15)return <IsotopePairingDiagram/>;
 if(lesson==='mole-concept'&&chapter===30)return <MoleOrganicBasisDiagram kind="dilution"/>;
 const board=(lesson==="mole-concept"?moleConcept:periodicTrends).chapters[chapter].board;
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
