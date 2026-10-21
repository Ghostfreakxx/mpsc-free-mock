import styles from './lecture.module.css';

export default function BiomoleculeStructureDiagram({chapter}:{chapter:number}){
 if(chapter===8)return <svg className={styles.diagram} viewBox="0 0 460 380" role="img" aria-label="Open-chain D-glucose Fischer projection: OH right, left, right, right from carbon 2 to 5">
  <title>D-glucose: open-chain Fischer projection</title><rect width="460" height="380" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="28" fontSize="18" fontWeight="bold">D-glucose: open-chain Fischer projection</text>
   <text x="230" y="65" fontSize="19">CHO</text><text x="310" y="65" fontSize="13">C1</text>
   {[true,false,true,true].map((right,i)=>{const y=109+i*49;return <g key={i}>
    <path d={`M230 ${y-33}V${y-13}M210 ${y}H170M250 ${y}H290`} stroke="#20483e" strokeWidth="2" fill="none"/>
    <text x="230" y={y+6} fontSize="19">C</text><text x="145" y={y+6} fontSize="18" fill={right?'#20483e':'#146b55'}>{right?'H':'OH'}</text><text x="315" y={y+6} fontSize="18" fill={right?'#146b55':'#20483e'}>{right?'OH':'H'}</text>
    <text x="382" y={y+5} fontSize="13">C{i+2}</text>
   </g>;})}
   <path d="M230 269V291" stroke="#20483e" strokeWidth="2"/><text x="230" y="316" fontSize="19">CH₂OH</text><text x="310" y="316" fontSize="13">C6</text>
   <text x="230" y="347" fontSize="14">Horizontal toward viewer · vertical away</text><text x="230" y="370" fontSize="13">D refers to configuration, not optical-rotation sign.</text>
  </g>
 </svg>;
 return <svg className={styles.diagram} viewBox="0 0 460 340" role="img" aria-label="D-glucopyranose anomers: CH2OH up; alpha anomeric OH down, beta OH up">
  <title>Alpha and beta D-glucopyranose: selected groups</title><rect width="460" height="340" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="27" fontSize="17" fontWeight="bold">D-glucopyranose: compare the C1 OH</text>
   {[{x:113,alpha:true},{x:339,alpha:false}].map(({x,alpha})=><g key={x}>
    <text x={x} y="61" fontSize="19" fontWeight="bold">{alpha?'α':'β'}</text>
    <path d={`M${x+25} 129L${x+61} 175L${x+31} 217H${x-31}L${x-61} 175L${x-31} 129H${x+12}`} fill="none" stroke="#20483e" strokeWidth="2"/>
    <text x={x+21} y="135" fontSize="18">O</text><text x={x+55} y="170" fontSize="12">C1</text><text x={x-43} y="146" fontSize="12">C5</text>
    <path d={`M${x-31} 129V99M${x+61} 175V${alpha?236:103}`} stroke="#146b55" strokeWidth="2" fill="none"/>
    <text x={x-31} y="89" fontSize="16" fill="#146b55">CH₂OH</text><text x={x+61} y={alpha?257:93} fontSize="18" fill="#146b55">OH</text>
    <text x={x} y="284" fontSize="14">{alpha?'Opposite sides: trans':'Same side: cis'}</text>
   </g>)}
   <text x="230" y="312" fontSize="13">Selected-group schematic: other OH and H groups omitted.</text><text x="230" y="332" fontSize="12">A Haworth projection is not an exact planar molecular shape.</text>
  </g>
 </svg>;
}
