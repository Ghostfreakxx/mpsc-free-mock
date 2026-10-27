import styles from './lecture.module.css';
import {fischerTransformFrames} from './fischer-transform-data';
export default function MoleOrganicInterpretationDiagram({kind}:{kind:'gas'|'fischer'}){
 const gas=kind==='gas';
 const title=gas?'Dimer dissociation increases gas amount while conserving mass':'Fischer projection conventions: original R, 180-degree R, 90-degree reinterpretation S';
 return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label={title}>
  <title>{title}</title><rect width="460" height="310" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial,sans-serif" fill="#20483e" fontSize="13">
   {gas?<>
    <text x="230" y="25" textAnchor="middle" fontSize="17" fontWeight="bold">More molecules, the same mass</text>
    <text x="230" y="47" textAnchor="middle">N₂O₄ → 2NO₂; initial 0.100 mol; α=0.500</text>
    {[{y:76,label:'Initial N₂O₄',n:.100,color:'#4478bc'},{y:133,label:'Final N₂O₄',n:.050,color:'#4478bc'},{y:190,label:'Final NO₂',n:.100,color:'#218164'}].map(row=><g key={row.y}><text x="21" y={row.y+17}>{row.label}</text><rect x="136" y={row.y} width={row.n*2000} height="25" rx="4" fill={row.color}/><text x={145+row.n*2000} y={row.y+17}>{row.n.toFixed(3)} mol</text></g>)}
    <text x="230" y="247" textAnchor="middle">Final total=0.150 mol; NO₂ mole fraction=2/3</text>
    <text x="230" y="271" textAnchor="middle">Mass=9.20 g throughout; mean M≈61.33 g/mol</text>
    <text x="230" y="295" textAnchor="middle">Bars count molecular amounts, not individual atoms</text>
   </>:<>
    <text x="230" y="25" textAnchor="middle" fontSize="17" fontWeight="bold">Read every Fischer cross in 3D</text>
    <text x="230" y="47" textAnchor="middle">Horizontal: toward viewer · Vertical: away</text>
    {fischerTransformFrames.map((frame,i)=>{const x=75+i*155;return <g key={frame.label}>
     <text x={x} y="80" textAnchor="middle" fontWeight="bold" fontSize="12">{frame.label}</text>
     <path d={`M${x-25} 145H${x+25}M${x} 120V170`} stroke="#4478bc" strokeWidth="2.5"/>
     <circle cx={x} cy="145" r="3" fill="#20483e"/>
     <text x={x} y="109" textAnchor="middle">{frame.groups[0]}</text>
     <text x={x+32} y="150">{frame.groups[1]}</text>
     <text x={x} y="191" textAnchor="middle">{frame.groups[2]}</text>
     <text x={x-32} y="150" textAnchor="end">{frame.groups[3]}</text>
     <text x={x} y="224" textAnchor="middle" fontSize="21" fontWeight="bold">{frame.configuration}</text>
    </g>;})}
    <text x="230" y="260" textAnchor="middle">Priority: OH &gt; CHO &gt; CH₂OH &gt; H</text>
    <text x="230" y="284" textAnchor="middle">90° label redraw is reinterpreted using the conventions</text>
    <text x="230" y="303" textAnchor="middle">Physical molecular rotation preserves handedness</text>
   </>}
  </g>
 </svg>;
}
