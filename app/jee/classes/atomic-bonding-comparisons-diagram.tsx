import styles from './lecture.module.css';
import {hydrogenGapCandidates as gaps,oxygenAntibondingSeries as oxygen}from'./atomic-bonding-comparisons-data';
export default function AtomicBondingComparisonsDiagram({kind}:{kind:'window'|'oxygen'}){
 const title=kind==='window'?'A wavelength window filters the candidate lines':'Added electrons pair in the oxygen π* set';
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={title}><title>{title}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
 <g fontFamily="Arial,sans-serif" textAnchor="middle" fill="#20483e"><text x="230" y="28" fontSize="15" fontWeight="bold">{title}</text>
 {kind==='window'?<>
 <text x="230" y="51" fontSize="11">Potential downward hydrogen gaps among n = 1, 2, 3, 4</text>
 {[{label:'Ultraviolet',x:80,items:gaps().filter(g=>g.final===1),colour:'#ede8f3'},{label:'400–700 nm window',x:230,items:gaps().filter(g=>g.nanometres>=400&&g.nanometres<=700),colour:'#deeee5'},{label:'Infrared',x:380,items:gaps().filter(g=>g.initial===4&&g.final===3),colour:'#f0e4d9'}].map(group=><g key={group.label}>
 <rect x={group.x-68} y="73" width="136" height="171" rx="8" fill={group.colour}/><text x={group.x} y="95" fontSize="12" fontWeight="bold">{group.label}</text>
 {group.items.map((g,i)=><g key={`${g.initial}-${g.final}`}><text x={group.x} y={122+i*39} fontSize="13">{g.initial} → {g.final}</text><text x={group.x} y={137+i*39} fontSize="11">≈ {Math.round(g.nanometres)} nm</text></g>)}
 </g>)}
 <text x="230" y="270" fontSize="13">6 possible gaps; 2 candidates in the selected window</text>
 <text x="230" y="294" fontSize="11">Counts do not specify intensity or every dipole selection rule.</text>
 <text x="230" y="312" fontSize="10">R = 1.097 × 10⁷ m⁻¹; simplified one-electron level model</text>
 </>:<>
 <text x="230" y="51" fontSize="11">The bonding population stays 8; antibonding electrons increase.</text>
 {oxygen.map((a,i)=><g key={a.label} transform={`translate(${78+i*152} 0)`}>
 <text y="88" fontSize="18" fontWeight="bold">{a.label}</text>
 <text y="111" fontSize="11">{a.valence} valence electrons</text>
 <text y="140" fontSize="12">π* occupancy</text>
 {[-1,1].map((side,j)=><g key={side}><rect x={side*22-17} y="153" width="34" height="34" rx="3" fill="#deeee5" stroke="#71948a"/><text x={side*22} y="177" fontSize="21">{a.piStar===2?'↑':a.piStar===3?(j===0?'↑↓':'↑'):'↑↓'}</text></g>)}
 <text y="218" fontSize="14">Bond order {(a.bonding-a.antibonding)/2}</text><text y="243" fontSize="13">{4-a.piStar} unpaired</text>
 </g>)}
 <text x="230" y="280" fontSize="11">Each added π* electron lowers bond order by one half.</text>
 <text x="230" y="305" fontSize="10">Elementary isolated-species MO comparison; no exact salt bond lengths implied.</text>
 </>}
 </g></svg>;
}
