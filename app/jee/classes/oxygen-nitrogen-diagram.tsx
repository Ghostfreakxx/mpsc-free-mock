import CarbonylDerivativeDiagram from "./carbonyl-derivative-diagram";
import organicOxygen from "../../data/jee-organic-oxygen-lecture.json";
import organicNitrogen from "../../data/jee-organic-nitrogen-lecture.json";
import styles from "./lecture.module.css";

export default function OxygenNitrogenDiagram({lesson,chapter}:{lesson:"organic-oxygen"|"organic-nitrogen";chapter:number}) {
 if(lesson==="organic-oxygen" && chapter===19)return <CarbonylDerivativeDiagram/>;
 const board=(lesson==="organic-oxygen"?organicOxygen:organicNitrogen).chapters[chapter].board;
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
