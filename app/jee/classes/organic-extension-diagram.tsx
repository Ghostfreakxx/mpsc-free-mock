import { organicPrinciplesAdditions } from "./organic-principles-additions";
import styles from "./lecture.module.css";

export default function OrganicExtensionDiagram({chapter}:{chapter:number}) {
 const board=organicPrinciplesAdditions.chapters[chapter - 5].board;
 if(chapter===7)return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label="Z has Br and Cl on the same side; E has them on opposite sides">
  <title>E and Z from higher-priority substituents</title><rect width="460" height="310" rx="12" fill="#f5faf7" />
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="29" fontSize="17" fontWeight="bold">Compare higher-priority Br and Cl</text>
   {[{x:117,z:true},{x:343,z:false}].map(({x,z})=><g key={x}>
    <text x={x} y="62" fontSize="21" fontWeight="bold">{z?"Z":"E"}</text>
    <path d={`M${x-14} 147H${x+14}M${x-14} 155H${x+14}M${x-32} 140L${x-57} 112M${x-32} 163L${x-57} 191M${x+32} 140L${x+57} 112M${x+32} 163L${x+57} 191`} stroke="#20483e" strokeWidth="2" fill="none"/>
    <text x={x-25} y="157" fontSize="19">C</text><text x={x+25} y="157" fontSize="19">C</text>
    <text x={x-65} y="103" fill="#146b55" fontSize="19" fontWeight="bold">Br</text><text x={x-65} y="215" fontSize="18">H</text>
    <text x={x+65} y="103" fill={z?"#146b55":"#20483e"} fontSize="18" fontWeight={z?"bold":"normal"}>{z?"Cl":"CH₃"}</text>
    <text x={x+65} y="215" fill={z?"#20483e":"#146b55"} fontSize="18" fontWeight={z?"normal":"bold"}>{z?"CH₃":"Cl"}</text>
    <text x={x} y="257" fontSize="15">{z?"Same side":"Opposite sides"}</text>
   </g>)}
   <text x="230" y="292" fontSize="14">Direct-atom priority: Br &gt; H; Cl &gt; C</text>
  </g>
 </svg>;
 if(chapter===8)return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label="Mirror-image Fischer projections of butan-2-ol with four different groups">
  <title>Butan-2-ol: mirror-image Fischer projections</title><rect width="460" height="320" rx="12" fill="#f5faf7" />
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="28" fontSize="17" fontWeight="bold">Butan-2-ol: one stereogenic centre</text>
   <path d="M230 53V262" stroke="#98b8aa" strokeWidth="2" strokeDasharray="5 5"/>
   {[{x:117,mirror:false},{x:343,mirror:true}].map(({x,mirror})=><g key={x}>
    <text x={x} y="84" fontSize="19">CH₃</text><text x={x} y="245" fontSize="19">CH₂CH₃</text>
    <path d={`M${x} 98V141M${x} 172V218M${x-20} 156H${x-55}M${x+20} 156H${x+55}`} stroke="#20483e" strokeWidth="2" fill="none"/>
    <text x={x} y="163" fontSize="21">C</text><text x={x-75} y="163" fontSize="19">{mirror?"OH":"H"}</text><text x={x+75} y="163" fontSize="19">{mirror?"H":"OH"}</text>
   </g>)}
   <text x="230" y="281" fontSize="14">Fischer: horizontal toward; vertical away</text>
   <text x="230" y="306" fontSize="13">Nonsuperimposable mirror images · no rotation sign implied</text>
  </g>
 </svg>;
 if(chapter===12)return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label="Ethane Newman projections: staggered sixty degrees and eclipsed zero degrees">
  <title>Ethane conformers viewed down the C–C bond</title><rect width="460" height="330" rx="12" fill="#f5faf7" />
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="28" fontSize="17" fontWeight="bold">Ethane: view down the C–C bond</text>
   {[{x:117,angle:60,name:"Staggered: 60°"},{x:343,angle:0,name:"Eclipsed: 0°"}].map(({x,angle,name})=><g key={x}>
    <text x={x} y="64" fontSize="16" fontWeight="bold">{name}</text>
    <circle cx={x} cy="168" r="31" fill="#f5faf7" stroke="#b54e32" strokeWidth="2"/>
    {[0,120,240].map(a=>{const rad=(a-90+angle)*Math.PI/180;return <g key={a}><line x1={x+31*Math.cos(rad)} y1={168+31*Math.sin(rad)} x2={x+68*Math.cos(rad)} y2={168+68*Math.sin(rad)} stroke="#b54e32" strokeWidth="3"/><text x={x+84*Math.cos(rad)} y={173+84*Math.sin(rad)} fontSize="16" fill="#b54e32">H</text></g>;})}
    {[0,120,240].map(a=>{const rad=(a-90)*Math.PI/180;return <g key={a}><line x1={x} y1="168" x2={x+54*Math.cos(rad)} y2={168+54*Math.sin(rad)} stroke="#146b55" strokeWidth="3"/>{angle!==0&&<text x={x+70*Math.cos(rad)} y={173+70*Math.sin(rad)} fontSize="16" fill="#146b55">H</text>}</g>;})}
    <circle cx={x} cy="168" r="5" fill="#146b55"/>
    <text x={x} y="276" fontSize="14">{angle?"Energy minimum":"Energy maximum"}</text>
   </g>)}
   <text x="230" y="307" fontSize="13">Green: front bonds · brown: rear bonds</text><text x="230" y="325" fontSize="12">Eclipsed H labels represent aligned front/rear pairs.</text>
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
