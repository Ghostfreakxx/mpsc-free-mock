import styles from './lecture.module.css';
import {sixCoordinateFeIIRadii as radii,squarePlanarPatterns as patterns,d6Fillings} from './periodic-coordination-context-data';
export default function PeriodicCoordinationContextDiagram({kind}:{kind:'radii'|'square'|'d6'}){
 const title=kind==='radii'?'The radius needs a spin context':kind==='square'?'Fix A; choose the opposite ligand':'Octahedral d6: two filling ledgers';
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={title}>
  <title>{title}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" textAnchor="middle" fill="#20483e">
   <text x="230" y="29" fontSize="16" fontWeight="bold">{title}</text>
   {kind==='radii'?<>
    <text x="230" y="52" fontSize="12">FeII: same+2 charge,d6 count and coordination number6</text>
    {radii.map((r,i)=><g key={r.spin} transform={`translate(${120+i*220} 155)`}>
     <circle r={r.radiusAngstrom*92} fill={i?'#d8e8e0':'#e8d3b7'} stroke="#71948a"/>
     <text y="-7" fontSize="14" fontWeight="bold">{r.spin}</text><text y="16" fontSize="15">{r.radiusAngstrom.toFixed(2)} Å</text>
    </g>)}
    <text x="230" y="254" fontSize="13">Difference = .17 Å under the supplied radius convention</text>
    <text x="230" y="280" fontSize="11">Effective radii depend on structure and electronic state.</text>
    <text x="230" y="303" fontSize="10">Circles compare radius entries; they are not sharp cloud boundaries.</text>
   </>:kind==='square'?<>
    <text x="230" y="53" fontSize="12">Square planar; four distinct achiral point donors</text>
    {patterns.map((ligands,j)=><g key={j} transform={`translate(${77+j*153} 145)`}>
     <path d="M0 -48V48M-43 0H43" stroke="#71948a" strokeWidth="2"/>
     <circle r="17" fill="#d7e9df"/><text y="5" fontSize="16">M</text>
     {[[0,-63],[57,5],[0,72],[-57,5]].map(([x,y],i)=><text key={i} x={x} y={y} fontSize="16" fontWeight="bold">{ligands[i]}</text>)}
     <text y="104" fontSize="13">A trans {ligands[2]}</text>
    </g>)}
    <text x="230" y="280" fontSize="13">Three geometric patterns after equivalent redrawings</text>
    <text x="230" y="304" fontSize="10">Additional ligand chirality and tetrahedral geometry are excluded.</text>
   </>:<>
    <text x="230" y="52" fontSize="12">Same six electrons; different splitting-versus-pairing balance</text>
    {d6Fillings.map((f,i)=><g key={f.label} transform={`translate(${i*220} 0)`}>
     <text x="120" y="80" fontSize="14" fontWeight="bold">{f.label}</text>
     {([{occupancies:f.eg,y:130},{occupancies:f.t2g,y:205}]).map(({occupancies,y},level)=><g key={y}>
      {occupancies.map((n,j)=>{const x=120+(j-(occupancies.length-1)/2)*38;return <g key={j}><path d={`M${x-14} ${y}H${x+14}`} stroke="#71948a" strokeWidth="2"/><text x={x} y={y-7} fontSize="18">{n===2?'↑↓':n===1?'↑':''}</text></g>;})}
      <text x="120" y={y+18} fontSize="11">{level===0?'eg':'t2g'}</text>
     </g>)}
     <text x="120" y="253" fontSize="12">{i===0?'1 pair;4 unpaired':'3 pairs;0 unpaired'}</text>
     <text x="120" y="276" fontSize="12">{i===0?'−.4Δo + P':'−2.4Δo + 3P'}</text>
    </g>)}
    <text x="230" y="306" fontSize="11">Low minus high = −2Δo + 2P; same pairing convention</text>
   </>}
  </g>
 </svg>;
}
