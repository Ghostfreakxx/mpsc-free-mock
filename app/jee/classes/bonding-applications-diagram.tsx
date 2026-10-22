import styles from "./lecture.module.css";
export default function BondingApplicationsDiagram({chapter}:{chapter:number}) {
 const molecular=chapter===9;
 const title=molecular?"Remove a bonding or antibonding electron":"Two equal dipoles at 120°";
 const rows=[{name:"N₂",orbital:"σ2p bonding",electrons:["↑↓"],order:"3"},{name:"N₂⁺",orbital:"σ2p bonding",electrons:["↑"],order:"2.5"},{name:"O₂",orbital:"π*2p antibonding",electrons:["↑","↑"],order:"2"},{name:"O₂⁺",orbital:"π*2p antibonding",electrons:["↑",""],order:"2.5"}];
 return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label={title}>
  <title>{title}</title><rect width="460" height="310" rx="12" fill="#f5faf7"/>
  <defs><marker id="dipole-tip" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="#21775c"/></marker></defs>
  <g fill="#20483e" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle">
   <text x="230" y="28" fontSize="17" fontWeight="bold" textLength={title.length>43?420:undefined} lengthAdjust="spacingAndGlyphs">{title}</text>
   {molecular?<>
    <text x="230" y="49" fontSize="12">Selected frontier orbitals only · schematic, not full energy levels</text>
    <text x="65" y="75">Species</text><text x="210" y="75">Occupied orbital(s)</text><text x="395" y="75">Bond order</text>
    {rows.map((row,i)=><g key={row.name}>
     <text x="65" y={106+i*49} fontWeight="bold">{row.name}</text>
     {row.electrons.map((electrons,j)=><g key={j}><rect x={160+j*50} y={85+i*49} width="40" height="27" rx="3" fill="#deeee5" stroke="#5b7d6a"/><text x={180+j*50} y={105+i*49} fontSize="20">{electrons}</text></g>)}
     <text x="210" y={126+i*49} fontSize="11">{row.orbital}</text><text x="395" y={106+i*49} fontWeight="bold">{row.order}</text>
    </g>)}
    <text x="230" y="291">N₂ loses bonding occupation; O₂ loses antibonding occupation.</text>
   </>:<>
    <text x="230" y="51">Specified two-vector model · μ = 1.50 D each</text>
    <path d="M230 210L134.737 155 M230 210L325.263 155" stroke="#21775c" strokeWidth="3" fill="none" markerEnd="url(#dipole-tip)"/>
    <path d="M230 210V100" stroke="#21775c" strokeWidth="3" strokeDasharray="6 4" markerEnd="url(#dipole-tip)"/>
    <path d="M199.689 192.5A35 35 0 0 1 260.311 192.5" stroke="#a04d31" fill="none"/>
    <text x="185" y="186">60°</text><text x="275" y="186">60°</text>
    <text x="110" y="145">μ = 1.50 D</text><text x="350" y="145">μ = 1.50 D</text>
    <text x="230" y="84">Resultant: 1.50 D</text><text x="230" y="238">Included angle = 120° · components add along bisector</text>
    <text x="230" y="266">2μ cos(θ/2) = 2 × 1.50 × cos 60° = 1.50 D</text>
    <text x="230" y="292" fontSize="12">Vector magnitudes shown; not an exact prediction for every molecule.</text>
   </>}
  </g>
 </svg>;
}
