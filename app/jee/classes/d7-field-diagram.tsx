import styles from './lecture.module.css';
import {d7FieldStates} from './d7-field-data';
export default function D7FieldDiagram(){
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label="Octahedral d7: high spin has three unpaired electrons and two pairs; low spin has one unpaired electron and three pairs">
  <title>Octahedral d7: count electrons, pairs and field energy</title>
  <rect width="460" height="320" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial,sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="27" fontSize="17" fontWeight="bold">Octahedral d⁷: one extra pair in low spin</text>
   {d7FieldStates.map((state,i)=>{const x=120+i*220;return <g key={state.label}>
    <text x={x} y="58" fontSize="16" fontWeight="bold">{state.label}</text>
    {[{electrons:state.upper,y:88,name:'eg'},{electrons:state.lower,y:153,name:'t₂g'}].map(level=><g key={level.name}>
     <text x={x-82} y={level.y+17} fontSize="12">{level.name}</text>
     {level.electrons.map((n,j)=>{const bx=x+(j-(level.electrons.length-1)/2)*37;return <g key={j}><rect x={bx-16} y={level.y} width="32" height="28" rx="3" fill="white" stroke="#4478bc"/><text x={bx} y={level.y+20} fontSize="20">{n===2?'↑↓':n===1?'↑':''}</text></g>;})}
    </g>)}
    <text x={x} y="211" fontSize="14">{state.pairs} pairs · {state.unpaired} unpaired</text>
    <text x={x} y="236" fontSize="14">{i===0?'−0.8Δo + 2P':'−1.8Δo + 3P'}</text>
   </g>;})}
   <text x="230" y="270" fontSize="14">Δo=220; P=160 kJ/mol ⇒ ELS−EHS=−60 kJ/mol</text>
   <text x="230" y="296" fontSize="13">μspin-only: √15≈3.87 and √3≈1.73 μB</text>
   <text x="230" y="314" fontSize="11">Ideal octahedral splitting and a common pairing-cost reference</text>
  </g>
 </svg>;
}
