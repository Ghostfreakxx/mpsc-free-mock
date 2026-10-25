import CombustionVolumeDiagram from './combustion-volume-diagram';
import TransDiaxialSiteDiagram from './trans-diaxial-site-diagram';
import hydrocarbons from "../../data/jee-hydrocarbons-lecture.json";
import organicHalogens from "../../data/jee-organic-halogens-lecture.json";
import styles from "./lecture.module.css";

export default function OrganicReactionDiagram({lesson,chapter}:{lesson:"hydrocarbons"|"organic-halogens";chapter:number}) {
 if(lesson==='hydrocarbons'&&chapter===24)return <CombustionVolumeDiagram/>;
 if(lesson==='organic-halogens'&&chapter===21)return <TransDiaxialSiteDiagram/>;
 const board=(lesson==="hydrocarbons"?hydrocarbons:organicHalogens).chapters[chapter].board;
 if(lesson==='hydrocarbons'&&chapter===11)return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label="Benzene positions: methyl directs ortho and para; nitro directs meta">
  <title>Electrophilic substitution: relative positions</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" textAnchor="middle" fill="#20483e">
   <text x="230" y="29" fontSize="17" fontWeight="bold">Electrophilic substitution: positions</text>
   {[{x:117,label:'CH₃',sites:[2,4,6],name:'Ortho / para'},{x:343,label:'NO₂',sites:[3,5],name:'Meta'}].map(({x,label,sites,name})=>{
    const pts=Array.from({length:6},(_,i)=>[x+58*Math.sin(i*Math.PI/3),166-58*Math.cos(i*Math.PI/3)]);
    return <g key={x}><text x={x} y="78" fontSize="20">{label}</text><line x1={x} y1="87" x2={x} y2="108" stroke="#20483e" strokeWidth="2"/>
     <polygon points={pts.map(p=>p.join(',')).join(' ')} fill="none" stroke="#20483e" strokeWidth="2"/><circle cx={x} cy="166" r="29" fill="none" stroke="#98b8aa" strokeWidth="2"/>
     {pts.map(([px,py],i)=><g key={i}><circle cx={px} cy={py} r="12" fill={sites.includes(i+1)?'#146b55':'#edf3ef'}/><text x={px} y={py+5} fontSize="14" fill={sites.includes(i+1)?'white':'#20483e'}>{i+1}</text></g>)}
     <text x={x} y="265" fontSize="15">{name}</text><text x={x} y="288" fontSize="13">{label==='CH₃'?'Generally activating':'Deactivating'}</text>
    </g>;
   })}
   <text x="230" y="317" fontSize="13">Green: favoured positions · not a prediction of pure products</text>
  </g>
 </svg>;
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
