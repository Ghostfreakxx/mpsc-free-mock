import styles from "./lecture.module.css";

export default function DnaBaseCountDiagram() {
 return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label="One thousand DNA base pairs: six hundred AT pairs and four hundred GC pairs give twenty-four hundred canonical hydrogen bonds">
  <title>Count base pairs before counting hydrogen bonds</title>
  <rect width="460" height="330" rx="12" fill="#f5faf7" />
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="28" fontSize="17" fontWeight="bold">1000 base pairs = 2000 individual bases</text>
   <text x="230" y="57" fontSize="15">A = 30% overall → T 30%, G 20%, C 20%</text>
   {[{x:119,left:"A",right:"T",n:2,count:600},{x:341,left:"G",right:"C",n:3,count:400}].map(({x,left,right,n,count})=><g key={left}>
    <rect x={x-94} y="83" width="188" height="167" rx="10" fill="#deeee5" />
    <text x={x} y="110" fontSize="17" fontWeight="bold">{count} {left}{right} pairs</text>
    <text x={x-63} y="166" fontSize="26">{left}</text><text x={x+63} y="166" fontSize="26">{right}</text>
    {Array.from({length:n},(_,i)=><path key={i} d={`M${x-38} ${147+i*13}h76`} fill="none" stroke="#146b55" strokeWidth="2" strokeDasharray="5 4" />)}
    <text x={x} y="210" fontSize="15">{n} H-bonds per pair</text><text x={x} y="236" fontSize="17">{count} × {n} = {count*n}</text>
   </g>)}
   <text x="230" y="282" fontSize="21" fontWeight="bold">1200 + 1200 = 2400 H-bonds</text>
   <text x="230" y="309" fontSize="13">Canonical pairing; both complete strands counted</text>
   <text x="230" y="325" fontSize="12">Counting schematic, not atomic geometry or melting-temperature data</text>
  </g>
 </svg>;
}
