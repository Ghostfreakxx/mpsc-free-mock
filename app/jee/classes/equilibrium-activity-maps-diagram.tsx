import styles from './lecture.module.css';import{diproticFractions as fractions,waterReductionLines as water}from'./equilibrium-activity-maps-data';
export default function EquilibriumActivityMapsDiagram({kind}:{kind:'fractions'|'water'}){
 const title=kind==='fractions'?'One acid family has three fractions at one pH':'A common pH shift leaves the reversible gap';
 const colours=['#a96337','#207c65','#7d78a1'];
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={title}><title>{title}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
 <g fontFamily="Arial,sans-serif" textAnchor="middle" fill="#20483e"><text x="230" y="28" fontSize="15" fontWeight="bold">{title}</text>
 {kind==='fractions'?<>
 <text x="230" y="51" fontSize="11">Ideal diprotic acid; pKa1 = 4; pKa2 = 6; supplied pH</text>
 {['H2A','HA−','A2−'].map((label,i)=><text key={label} x={112+i*116} y="78" fontSize="12" fill={colours[i]}>{label}</text>)}
 <path d="M65 90V249H413" stroke="#71948a" fill="none"/>
 {[0,.5,1].map(f=><text key={f} x="45" y={253-f*151} fontSize="11">{f}</text>)}
 {(['acid','middle','base']as const).map((key,i)=><polyline key={key} points={Array.from({length:121},(_,j)=>{const pH=2+j/20;return `${65+(pH-2)*340/6},${249-fractions(pH)[key]*151}`;}).join(' ')} fill="none" stroke={colours[i]} strokeWidth="2.5"/>)}
 <path d="M235 92V249" stroke="#8ca69b" strokeDasharray="4 4"/>
 {[2,3,4,5,6,7,8].map(p=><text key={p} x={65+(p-2)*340/6} y="270" fontSize="11">{p}</text>)}
 <text x="230" y="291" fontSize="12">pH 5: fractions 1/12, 10/12, 1/12</text><text x="230" y="311" fontSize="10">Horizontal: pH; vertical: acid-family fraction. All three fractions sum to 1.</text>
 </>:<>
 <text x="230" y="51" fontSize="11">298 K; unit H2/O2 gas activities; water activity 1; both versus SHE</text>
 <text x="151" y="78" fontSize="12" fill="#207c65">O2 / water reduction</text><text x="336" y="78" fontSize="12" fill="#a96337">H+ / H2 reduction</text>
 <path d="M65 90V250H415" stroke="#71948a" fill="none"/>
 {[-1,0,1].map(e=><text key={e} x="43" y={254-(e+1)*64} fontSize="11">{e}</text>)}
 {(['oxygen','hydrogen']as const).map((key,i)=><polyline key={key} points={Array.from({length:29},(_,j)=>{const p=j/2;return `${65+p*340/14},${250-(water(p)[key]+1)*64}`;}).join(' ')} fill="none" stroke={i===0?'#207c65':'#a96337'} strokeWidth="3"/>)}
 <path d={`M235 ${250-(water(7).oxygen+1)*64}V${250-(water(7).hydrogen+1)*64}`} stroke="#7d78a1" strokeDasharray="4 3"/>
 <text x="288" y="181" fontSize="13">1.229 V</text>
 {[0,7,14].map(p=><text key={p} x={65+p*340/14} y="271" fontSize="11">{p}</text>)}
 <text x="230" y="292" fontSize="11">Horizontal: common pH; vertical: reduction potential (V vs SHE)</text><text x="230" y="312" fontSize="10">Matched reversible model; practical electrolysis also has kinetic and resistive losses.</text>
 </>}
 </g></svg>;
}
