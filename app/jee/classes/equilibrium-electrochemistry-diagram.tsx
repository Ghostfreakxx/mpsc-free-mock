import ElectrodeLimitsDiagram from './electrode-limits-diagram';
import CoupledEquilibriumElectrodesDiagram from './coupled-equilibrium-electrodes-diagram';
import equilibrium from "../../data/jee-equilibrium-lecture.json";
import electrochemistry from "../../data/jee-redox-electrochemistry-lecture.json";
import EquilibriumCellDiagram from "./equilibrium-cell-diagram";
import styles from "./lecture.module.css";

export default function EquilibriumElectrochemistryDiagram({lesson,chapter}:{lesson:"equilibrium"|"redox-electrochemistry";chapter:number}) {
 if(lesson==='equilibrium' && chapter===27)return <ElectrodeLimitsDiagram kind="precipitation"/>;
 if(lesson==='redox-electrochemistry' && chapter===28)return <ElectrodeLimitsDiagram kind="conductivity"/>;
 if(chapter===22)return <CoupledEquilibriumElectrodesDiagram lesson={lesson}/>;
 if ((lesson==="equilibrium" && chapter===10) || (lesson==="redox-electrochemistry" && chapter===9)) return <EquilibriumCellDiagram lesson={lesson} />;
 const board=(lesson==="equilibrium"?equilibrium:electrochemistry).chapters[chapter].board;
 return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label={board.heading}>
  <title>{board.heading}</title><rect width="460" height="310" rx="12" fill="#f5faf7" />
  <g fill="#20483e" fontFamily="Arial, sans-serif" fontSize="14">
   <text x="230" y="34" textAnchor="middle" fontSize="17" fontWeight="bold" textLength={board.heading.length>44?418:undefined} lengthAdjust="spacingAndGlyphs">{board.heading}</text>
   <rect x="12" y="61" width="436" height="43" rx="5" fill="#deeee5" />
   {board.columns.map((label,j)=><text key={j} x={85+j*145} y="88" textAnchor="middle" fontWeight="bold" fontSize="13" textLength={label.length>19?132:undefined} lengthAdjust="spacingAndGlyphs">{label}</text>)}
   {board.rows.map((row,i)=><g key={i}>
    <rect x="12" y={115+i*60} width="436" height="51" rx="5" fill={i===2?"#e2eee8":"#edf3ef"}/>
    {row.map((value,j)=><text key={j} x={85+j*145} y={146+i*60} textAnchor="middle" fontSize="14" textLength={value.length>19?132:undefined} lengthAdjust="spacingAndGlyphs">{value}</text>)}
   </g>)}
  </g>
 </svg>;
}
