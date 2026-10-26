import InorganicStructureAssaysDiagram from './inorganic-structure-assays-diagram';
import SulfurPeroxoDiagram from './sulfur-peroxo-diagram';
import PhosphorusOxoacidDiagram from "./phosphorus-oxoacid-diagram";
import pBlock from "../../data/jee-p-block-lecture.json";
import dFBlock from "../../data/jee-d-f-block-lecture.json";
import AnalysisFOccupancyDiagram from "./analysis-f-occupancy-diagram";
import styles from "./lecture.module.css";

const recordings={"p-block":pBlock,"d-f-block":dFBlock};
export default function PBlockDFDiagram({lesson,chapter}:{lesson:keyof typeof recordings;chapter:number}) {
 if(lesson==='p-block'&&chapter===26)return <InorganicStructureAssaysDiagram kind="silicate"/>;
 if(lesson==='d-f-block'&&chapter===23)return <InorganicStructureAssaysDiagram kind="iodometry"/>;
 if(lesson==="p-block" && chapter===21)return <SulfurPeroxoDiagram/>;
 if(lesson==="p-block" && chapter===16)return <PhosphorusOxoacidDiagram/>;
 if(lesson==="d-f-block" && chapter===12)return <AnalysisFOccupancyDiagram kind="manganate"/>;
 if(lesson==="d-f-block" && chapter===14)return <AnalysisFOccupancyDiagram kind="f-occupancy"/>;
 if(lesson==="p-block" && chapter===11)return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label="Diborane connectivity: four terminal bonds and two electron-deficient bridges">
 <title>Diborane: connectivity projection</title><rect width="460" height="310" rx="12" fill="#f5faf7"/>
 <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle"><text x="230" y="30" fontSize="18">Diborane: connectivity projection</text>
 <path d="M155 150L85 100M155 150L85 200M305 150L375 100M305 150L375 200" stroke="#146b55" strokeWidth="3"/>
 <path d="M155 150L230 75L305 150M155 150L230 225L305 150" stroke="#b54e32" strokeWidth="3" strokeDasharray="7 5" fill="none"/>
 {[[155,150,'B'],[305,150,'B'],[75,95,'H'],[75,210,'H'],[385,95,'H'],[385,210,'H'],[230,70,'H'],[230,240,'H']].map(([x,y,label],i)=><g key={i}><circle cx={x} cy={Number(y)-6} r="15" fill="#f5faf7"/><text x={x} y={y} fontSize="21">{label}</text></g>)}
 <text x="230" y="155" fontSize="14">No ordinary B–B bond</text><text x="230" y="277" fontSize="15">Each dashed B–H–B bridge shares 2 electrons</text><text x="230" y="299" fontSize="13">4 terminal bonds: 8 e⁻ · 2 bridges: 4 e⁻</text></g></svg>;
 const board=recordings[lesson].chapters[chapter].board;
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
