import styles from './lecture.module.css';
import {sn2PriorityFrames} from './sn2-priority-map-data';
export default function ReactionMapDiagram({kind}:{kind:'cyclic'|'sn2'}){
 const cyclic=kind==='cyclic';
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={cyclic?'Cyclohexene reductive ozonolysis leaves a connected six-carbon dialdehyde':'SN2 physical inversion with changed priorities: original R and product R'}>
  <title>{cyclic?'Ring opening preserves the other carbon path':'Spatial inversion is different from the R/S letter'}</title>
  <rect width="460" height="320" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial,sans-serif" fill="#20483e" textAnchor="middle">
   {cyclic?<>
    <text x="230" y="27" fontSize="17" fontWeight="bold">One ring becomes one connected chain</text>
    <text x="230" y="52" fontSize="13">Cyclohexene · reductive ozonolysis</text>
    <path d="M150 97L230 75L310 97L310 176L230 198L150 176Z" fill="none" stroke="#4478bc" strokeWidth="3"/>
    <path d="M164 109V164" stroke="#b54e32" strokeWidth="3"/>
    <path d="M150 97V176" stroke="#b54e32" strokeWidth="3" strokeDasharray="5 4"/>
    {[{x:133,y:101,n:1},{x:133,y:183,n:2},{x:230,y:221,n:3},{x:330,y:183,n:4},{x:330,y:101,n:5},{x:230,y:67,n:6}].map(p=><text key={p.n} x={p.x} y={p.y} fontSize="13">C{p.n}</text>)}
    <text x="230" y="247" fontSize="13">Cut C1=C2; retain path C1–C6–C5–C4–C3–C2</text>
    <text x="230" y="275" fontSize="20" fontWeight="bold">OHC–(CH₂)₄–CHO</text>
    <text x="230" y="301" fontSize="13">One C₆ dialdehyde molecule · two aldehyde groups</text>
   </>:<>
    <text x="230" y="27" fontSize="17" fontWeight="bold">Backside inversion can keep the letter R</text>
    <text x="230" y="50" fontSize="12">Fischer: horizontal toward, vertical away</text>
    {sn2PriorityFrames.map((frame,i)=>{const x=120+i*220;return <g key={frame.label}>
     <text x={x} y="77" fontSize="14" fontWeight="bold">{frame.label}</text>
     <path d={`M${x-27} 139H${x+27}M${x} 112V166`} stroke="#4478bc" strokeWidth="2.5"/>
     <text x={x} y="103" fontSize="14">{frame.groups[0]}</text><text x={x+35} y="144" fontSize="14" textAnchor="start">{frame.groups[1]}</text>
     <text x={x} y="187" fontSize="14">{frame.groups[2]}</text><text x={x-35} y="144" fontSize="14" textAnchor="end">{frame.groups[3]}</text>
     <text x={x} y="216" fontSize="23" fontWeight="bold">{frame.configuration}</text>
     <text x={x} y="241" fontSize="12">1: {frame.priorities[0]} · 2: {frame.priorities[1]}</text>
    </g>;})}
    <text x="230" y="270" fontSize="13">Product: [O,H,H] outranks [N,N,N]</text>
    <text x="230" y="293" fontSize="13">Physical inversion + priority interchange ⇒ R again</text>
    <text x="230" y="313" fontSize="11">Stipulated local SN2 step; R again does not mean spatial retention</text>
   </>}
  </g>
 </svg>;
}
