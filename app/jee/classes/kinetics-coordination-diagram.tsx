import { kineticsCoordinationMeasurementAdditions } from "./kinetics-coordination-measurement-additions";
import KineticBaselineDiagram from "./kinetic-baseline-diagram";
import { kineticsCoordinationEquilibriumAdditions as extra } from "./kinetics-coordination-equilibrium-additions";
import D3FieldDiagram from "./d3-field-diagram";
import { kineticsCoordinationAdditions } from "./kinetics-coordination-additions";
import styles from "./lecture.module.css";

const recordings=kineticsCoordinationAdditions;
export default function KineticsCoordinationDiagram({lesson,chapter}:{lesson:keyof typeof recordings;chapter:number}) {
 if (lesson === "coordination-compounds" && chapter === 12) return <D3FieldDiagram />;
 if(lesson === "chemical-kinetics" && chapter === 14)return <KineticBaselineDiagram/>;
 const board=chapter >= 14 ? kineticsCoordinationMeasurementAdditions[lesson].chapters[chapter - 14].board : chapter >= 10 ? extra[lesson].chapters[chapter - 10].board : recordings[lesson].chapters[chapter - 5].board;
 if (lesson === "coordination-compounds" && chapter === 6) return <svg className={styles.diagram} viewBox="0 0 460 340" role="img" aria-label="Octahedral fac and mer: opposite ends of one axis are trans">
  <title>Octahedral fac and mer: labelled positions</title><rect width="460" height="340" rx="12" fill="#f5faf7" />
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="27" fontSize="17" fontWeight="bold">Octahedral MA₃B₃: fac and mer</text>
   {[{x:117,name:"fac",a:[0,2,4]},{x:343,name:"mer",a:[0,1,4]}].map(({x,name,a})=><g key={name}>
    <text x={x} y="56" fontSize="18" fontWeight="bold">{name}</text>
    {[[65,0],[-65,0],[-42,40],[42,-40],[0,-65],[0,65]].map(([dx,dy],i)=><g key={i}>
     <line x1={x} y1="159" x2={x+dx} y2={159+dy} stroke="#98b8aa" strokeWidth="2" />
     <circle cx={x+dx} cy={159+dy} r="14" fill={a.includes(i)?"#146b55":"#e6c4b8"}/>
     <text x={x+dx} y={164+dy} fontSize="14" fill={a.includes(i)?"white":"#422b24"}>{a.includes(i)?"A":"B"}</text>
     <text x={x+dx+(dx>0?20:dx<0?-20:0)} y={dy===-65?72:dy===65?252:164+dy} fontSize="12">{["+x","−x","+y","−y","+z","−z"][i]}</text>
    </g>)}
    <circle cx={x} cy="159" r="16" fill="#deeee5" stroke="#20483e"/><text x={x} y="164" fontSize="14">M</text>
    <text x={x} y="282" fontSize="14">{name==="fac"?"A pairs: all cis":"A pairs: one trans"}</text>
   </g>)}
   <text x="230" y="311" fontSize="13">Position schematic: same axis, opposite signs = trans</text>
   <text x="230" y="330" fontSize="12">Projected angles are not the actual bond angles.</text>
  </g>
 </svg>;
 if (lesson === "chemical-kinetics" && chapter === 9) return <svg className={styles.diagram} viewBox="0 0 460 340" role="img" aria-label="Catalyst lowers both barriers while reaction enthalpy remains minus thirty kilojoules per mole">
  <title>Catalyst: same endpoints, lower barriers</title><rect width="460" height="340" rx="12" fill="#f5faf7" />
  <g fontFamily="Arial, sans-serif" fill="#20483e">
   <text x="230" y="28" textAnchor="middle" fontSize="17" fontWeight="bold">Same endpoints, lower barriers</text>
   <path d="M60 270V58M60 270H425" fill="none" stroke="#20483e" strokeWidth="2" />
   <text x="17" y="55" fontSize="12">H / kJ mol⁻¹</text>
   <text x="240" y="299" textAnchor="middle" fontSize="14">Reaction coordinate</text>
   <path d="M81 210H112C151 210 164 82 225 82S306 258 349 258H408" fill="none" stroke="#b54e32" strokeWidth="3" />
   <path d="M81 210H112C151 210 164 114 225 114S306 252 349 252H408" fill="none" stroke="#146b55" strokeWidth="3" />
   <text x="225" y="69" textAnchor="middle" fontSize="13">Uncatalysed peak +80</text>
   <text x="230" y="142" textAnchor="middle" fontSize="13">Catalysed peak +60</text>
   <text x="84" y="197" fontSize="13">Reactants 0</text><text x="316" y="235" fontSize="13">Products −30</text>
   <text x="230" y="325" textAnchor="middle" fontSize="13">Forward barriers: 80, 60 · reverse: 110, 90 kJ mol⁻¹</text>
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
