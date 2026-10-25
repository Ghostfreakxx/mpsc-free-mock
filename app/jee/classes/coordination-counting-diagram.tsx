import styles from './lecture.module.css';
export default function CoordinationCountingDiagram({kind}:{kind:'d4'|'bridge'}){
 if(kind==='bridge')return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label="Connectivity model with two M(II) centres, four terminal chlorides and two bridging chlorides: six distinct ligands, eight metal-chloride contacts, coordination number four at each metal and total charge minus two">
  <title>Count contacts at each metal separately</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="25" fontSize="17" fontWeight="bold">Six ligands can make eight metal contacts</text>
   <text x="230" y="49" fontSize="12">Supplied connectivity schematic; not a geometry assignment</text>
   {[[120,170,40,100],[120,170,40,240],[340,170,420,100],[340,170,420,240],[120,170,230,95],[120,170,230,245],[340,170,230,95],[340,170,230,245]].map(([x1,y1,x2,y2],i)=><line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#749781" strokeWidth="2"/>)}
   {[120,340].map(x=><g key={x}><circle cx={x} cy="170" r="24" fill="#deeee5"/><text x={x} y="175" fontSize="17" fontWeight="bold">M</text><text x={x} y="214" fontSize="13">CN = 4</text></g>)}
   {[[40,100],[40,240],[420,100],[420,240]].map(([x,y])=><g key={`${x}-${y}`}><circle cx={x} cy={y} r="17" fill="#e1eaf5"/><text x={x} y={y+5} fontSize="14">Cl</text></g>)}
   {[95,245].map(y=><g key={y}><rect x="201" y={y-16} width="58" height="32" rx="8" fill="#f5dfc6"/><text x="230" y={y+5} fontSize="14">μ-Cl</text></g>)}
   <text x="230" y="292" fontSize="13">4 terminal + 2 bridging Cl; each bridge touches both M</text>
   <text x="230" y="315" fontSize="13">Formal charge: 2(+2) + 6(−1) = −2</text>
  </g>
 </svg>;
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label="Ideal octahedral d4 orbital occupancies: high spin t2g3 eg1 has four unpaired electrons; low spin t2g4 eg0 has one pair and two unpaired electrons. Low-minus-high energy equals pairing cost minus splitting.">
  <title>Octahedral d4: count pairs before comparing energies</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="25" fontSize="17" fontWeight="bold">Octahedral d⁴: count pairs as well as levels</text>
   {[{x:125,name:'High spin',lower:['↑','↑','↑'],upper:['↑',''],energy:'−0.6Δo',note:'4 unpaired; no pair'},{x:335,name:'Low spin',lower:['↑↓','↑','↑'],upper:['',''],energy:'−1.6Δo + P',note:'2 unpaired; one pair'}].map(s=><g key={s.name}>
    <text x={s.x} y="61" fontSize="16" fontWeight="bold">{s.name}</text>
    {s.upper.map((a,i)=><g key={i}><line x1={s.x-45+i*55} x2={s.x-10+i*55} y1="122" y2="122" stroke="#a25232" strokeWidth="3"/><text x={s.x-27+i*55} y="116" fontSize="22">{a}</text></g>)}
    {s.lower.map((a,i)=><g key={i}><line x1={s.x-70+i*53} x2={s.x-34+i*53} y1="202" y2="202" stroke="#2861a1" strokeWidth="3"/><text x={s.x-52+i*53} y="196" fontSize="22">{a}</text></g>)}
    <text x={s.x} y="147" fontSize="12">eg (upper)</text><text x={s.x} y="224" fontSize="12">t₂g (lower)</text>
    <text x={s.x} y="251" fontSize="14">{s.energy}</text><text x={s.x} y="274" fontSize="12">{s.note}</text>
   </g>)}
   <text x="230" y="304" fontSize="13">Elow − Ehigh = P − Δo; supplied 150 − 200 = −50 kJ/mol</text>
  </g>
 </svg>;
}
