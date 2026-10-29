import styles from './lecture.module.css';
import {mixedFirstOrderFractions as fractions} from './kinetics-practical-controls-data';
export default function KineticsPracticalControlsDiagram({kind}:{kind:'mixture'|'nickel'}){
 const title=kind==='mixture'?'Two first-order populations can curve the total':'Two bidentate ligands give four donor atoms';
 const paths=['fast','slow','total'].map(key=>Array.from({length:81},(_,i)=>{const t=i/2;return `${65+t*8.5},${251-fractions(t)[key as keyof ReturnType<typeof fractions>]*165}`;}).join(' '));
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={title}><title>{title}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
 <g fontFamily="Arial,sans-serif" textAnchor="middle" fill="#20483e"><text x="230" y="28" fontSize="15" fontWeight="bold">{title}</text>
 {kind==='mixture'?<>
 <text x="230" y="51" fontSize="11">Equal initial signal weights; independent populations; products silent</text>
 <path d="M65 75V251H415" stroke="#71948a" fill="none"/>
 {[0,.5,1].map(v=><text key={v} x="45" y={255-v*165} fontSize="11">{v}</text>)}
 {paths.map((p,i)=><polyline key={i} points={p} fill="none" stroke={['#ad653b','#7d78a1','#207c65'][i]} strokeWidth={i===2?3:1.5} strokeDasharray={i===2?undefined:'5 4'}/>)}
 {[0,10,20,30,40].map(t=><text key={t} x={65+t*8.5} y="271" fontSize="11">{t}</text>)}
 <text x="159" y="81" fontSize="11" fill="#ad653b">10-min population</text><text x="323" y="81" fontSize="11" fill="#7d78a1">20-min population</text>
 {[20,40].map(t=><circle key={t} cx={65+t*8.5} cy={251-fractions(t).total*165} r="4" fill="#207c65"/>)}
 <rect x="270" y="100" width="140" height="52" rx="5" fill="#deeee5"/><text x="340" y="120" fontSize="12">f(20) = .375</text><text x="340" y="142" fontSize="12">f(40) = .15625</text>
 <text x="230" y="293" fontSize="11">Time (min); vertical axis is fraction of initial signal</text>
 <text x="230" y="311" fontSize="10">Solid green: weighted total; no single constant half-life for the sum.</text>
 </>:<>
 <text x="230" y="52" fontSize="11">Selected nickel(II) dimethylglyoxime chelate; schematic donor map</text>
 <path d="M185 111H275V201H185ZM185 111Q120 156 185 201M275 111Q340 156 275 201" stroke="#71948a" strokeWidth="2" fill="none"/>
 {[[185,111],[185,201],[275,111],[275,201]].map(([x,y],i)=><g key={i}><line x1="230" y1="156" x2={x} y2={y} stroke="#71948a"/><circle cx={x} cy={y} r="14" fill={i<2?'#ad653b':'#7d78a1'}/><text x={x} y={y+5} fontSize="14" fill="white">N</text></g>)}
 <circle cx="230" cy="156" r="20" fill="#deeee5"/><text x="230" y="161" fontSize="15" fontWeight="bold">Ni</text>
 <text x="102" y="157" fontSize="12">Ligand 1</text><text x="358" y="157" fontSize="12">Ligand 2</text>
 <text x="230" y="239" fontSize="13">2 ligands × 2 N donors = 4 donor atoms</text>
 <text x="230" y="265" fontSize="12">Ni2+ + 2(Hdmg−) gives a neutral complex</text>
 <text x="230" y="291" fontSize="11">Red precipitate in the stated controlled test medium.</text>
 <text x="230" y="311" fontSize="10">Curved outer paths indicate ligand pairing; not a full structural formula.</text>
 </>}
 </g></svg>;
}
