import styles from "./lecture.module.css";

export default function D3FieldDiagram() {
 return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label="Three unpaired d electrons in octahedral and tetrahedral fields, with different orbital stabilization">
  <title>d³: same unpaired count, different field energies</title>
  <rect width="460" height="330" rx="12" fill="#f5faf7" />
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="28" fontSize="17" fontWeight="bold">d³: compare orbital occupations</text>
   <text x="120" y="59" fontSize="17">Octahedral</text><text x="345" y="59" fontSize="17">Tetrahedral: high spin</text>
   <path d="M15 229V76M15 76L11 85M15 76L19 85" stroke="#20483e" fill="none" />
   <text x="35" y="91" fontSize="12">E</text>
   {[{xs:[83,133],y:118,label:"eg: +0.6Δo",labelX:120,labelY:103,filled:0},{xs:[63,113,163],y:219,label:"t2g: −0.4Δo",labelX:120,labelY:246,filled:3},{xs:[288,338,388],y:143,label:"t2: +0.4Δt",labelX:345,labelY:103,filled:1},{xs:[313,363],y:194,label:"e: −0.6Δt",labelX:345,labelY:246,filled:2}].map(({xs,y,label,labelX,labelY,filled})=><g key={label}>
    <text x={labelX} y={labelY} fontSize="14">{label}</text>
    {xs.map((x,i)=><g key={x}><path d={`M${x-15} ${y}h30`} stroke="#146b55" strokeWidth="3" />{i<filled&&<text x={x} y={y-7} fontSize="27">↑</text>}</g>)}
   </g>)}
   <text x="120" y="278" fontSize="17">CFSE = −1.2Δo</text><text x="345" y="278" fontSize="17">CFSE = −0.8Δt</text>
   <text x="230" y="306" fontSize="14">Both have 3 unpaired electrons; no paired electrons</text>
   <text x="230" y="324" fontSize="12">Schematic levels; compare each energy with its own barycentre</text>
  </g>
 </svg>;
}
