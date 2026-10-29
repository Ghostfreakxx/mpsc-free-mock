import styles from './lecture.module.css';
export default function HalideAminePathwaysDiagram({kind}:{kind:'benzyne'|'amide'}){
 const title=kind==='benzyne'?'A retained carbon label distinguishes two captures':'Keep or remove the marked carbonyl carbon';
 const ring=Array.from({length:6},(_,i)=>[32*Math.cos(-Math.PI/2+i*Math.PI/3),32*Math.sin(-Math.PI/2+i*Math.PI/3)]);
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={title}>
 <title>{title}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
 <g fontFamily="Arial, sans-serif" textAnchor="middle" fill="#20483e">
 <text x="230" y="28" fontSize="15" fontWeight="bold">{title}</text>
 {kind==='benzyne'?<>
 <text x="230" y="52" fontSize="12">Specified benzyne unit: C1*–C2; * is a retained carbon isotope</text>
 <text x="230" y="78" fontSize="11">NH2 can add at either end; subsequent proton transfer restores the ring.</text>
 {[0,1].map(site=><g key={site} transform={`translate(${120+site*220} 177)`}>
 <polygon points={ring.map(p=>p.join(',')).join(' ')} stroke="#71948a" strokeWidth="2" fill="none"/><circle r="16" stroke="#71948a" fill="none"/>
 <circle cx="0" cy="-32" r="9" fill="#a75b38"/><text y="-28" fontSize="10" fill="white">1*</text>
 <text x={ring[1][0]+15} y={ring[1][1]+3} fontSize="10">2</text>
 <line x1={ring[site][0]} y1={ring[site][1]} x2={ring[site][0]*1.65} y2={ring[site][1]*1.65} stroke="#207c65" strokeWidth="2"/>
 <text x={ring[site][0]*2.1} y={ring[site][1]*2.1+3} fontSize="13" fontWeight="bold">NH2</text>
 <text y="76" fontSize="12">{site===0?'Label bonded to NH2':'Label adjacent to NH2 site'}</text>
 </g>)}
 <text x="230" y="284" fontSize="11">Same unlabelled aniline; different label relationships.</text>
 <text x="230" y="306" fontSize="10">This schematic does not specify an equal yield or every haloarene pathway.</text>
 </>:<>
 <text x="230" y="52" fontSize="12">Ph is phenyl; * marks the original amide carbonyl carbon.</text>
 <rect x="120" y="73" width="220" height="45" rx="6" fill="#deeee5"/>
 <text x="230" y="102" fontSize="19">Ph–C*(=O)–NH2</text>
 <path d="M190 122L115 169M270 122L345 169" stroke="#71948a" strokeWidth="2" fill="none"/>
 <text x="95" y="144" fontSize="11">Reduction</text><text x="363" y="144" fontSize="11">Rearrangement</text>
 <text x="115" y="200" fontSize="19">Ph–C*H2–NH2</text><text x="345" y="200" fontSize="19">Ph–NH2</text>
 <text x="115" y="227" fontSize="13">Benzylamine: 7 C</text><text x="345" y="227" fontSize="13">Aniline: 6 C</text>
 <text x="115" y="251" fontSize="11">Carbonyl C retained</text><text x="345" y="251" fontSize="11">Carbonyl C removed</text>
 <text x="230" y="286" fontSize="11">Both are primary amines; only the right product has N directly on the ring.</text>
 <text x="230" y="307" fontSize="10">PhCH2CONH2 instead gives PhCH2NH2 by the same rearrangement rule.</text>
 </>}
 </g></svg>;
}
