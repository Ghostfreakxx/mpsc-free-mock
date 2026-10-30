import styles from './lecture.module.css';import{cycleCorners,vapourContributions as vapour}from'./thermo-solution-nonideal-data';
export default function ThermoSolutionNonidealDiagram({kind}:{kind:'cycle'|'vapour'}){
 const title=kind==='cycle'?'A closed cycle can have nonzero net transfers':'Correct each partial pressure before summing';
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={title}><title>{title}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
 <g fontFamily="Arial,sans-serif" textAnchor="middle" fill="#20483e"><text x="230" y="28" fontSize="15" fontWeight="bold">{title}</text>
 {kind==='cycle'?<>
 <text x="230" y="51" fontSize="11">Quasistatic P–V cycle; clockwise; 1 bar L = 100 J</text>
 <path d="M70 70V240H418" stroke="#71948a" fill="none"/>
 <polygon points={cycleCorners.map(p=>`${110+(p.volume-1)*125},${210-(p.pressure-1)*110}`).join(' ')} fill="#deeee5" stroke="#207c65" strokeWidth="2.5"/>
 <path d="M235 95L247 100L235 105ZM355 147L360 160L365 147ZM240 205L228 210L240 215ZM105 160L110 147L115 160Z" fill="#207c65"/>
 <text x="45" y="105" fontSize="12">2</text><text x="45" y="215" fontSize="12">1</text>
 <text x="110" y="261" fontSize="12">1</text><text x="360" y="261" fontSize="12">3</text>
 <text x="44" y="77" fontSize="11">P / bar</text><text x="392" y="261" fontSize="11">V / L</text>
 <text x="235" y="148" fontSize="15">Area = 200 J</text><text x="235" y="173" fontSize="12">Work by the substance</text>
 <text x="230" y="286" fontSize="12">Chemistry signs: w = −200 J; qnet = +200 J</text><text x="230" y="309" fontSize="10">Same initial/final state: ΔU = 0 and ΔSsystem = 0; transfers need not vanish.</text>
 </>:<>
 <text x="230" y="51" fontSize="11">xA = .4; xB = .6; pure vapour pressures 100 and 50 kPa</text>
 <text x="150" y="77" fontSize="12" fill="#207c65">A contribution</text><text x="320" y="77" fontSize="12" fill="#7d78a1">B contribution</text>
 <path d="M65 95V245H415" stroke="#71948a" fill="none"/>
 {[0,50,100].map(p=><text key={p} x="42" y={249-p*1.4} fontSize="11">{p}</text>)}
 {[false,true].map((nonideal,i)=>{const p=vapour(nonideal),x=115+i*185;return <g key={i}><rect x={x} y={245-p.a*1.4} width="70" height={p.a*1.4} fill="#207c65"/><rect x={x} y={245-(p.a+p.b)*1.4} width="70" height={p.b*1.4} fill="#7d78a1"/><text x={x+35} y={234-p.a*1.4/2} fill="white" fontSize="13">{Number(p.a.toFixed(6))}</text><text x={x+35} y={251-(p.a+p.b/2)*1.4} fill="white" fontSize="13">{Number(p.b.toFixed(6))}</text><text x={x+35} y={235-(p.a+p.b)*1.4} fontSize="14" fontWeight="bold">{Number((p.a+p.b).toFixed(6))} kPa</text><text x={x+35} y="270" fontSize="12">{nonideal?'γA1.5; γB1.2':'Ideal reference'}</text></g>;})}
 <text x="230" y="293" fontSize="12">Corrected vapour yA = 60 / 96 = .625</text><text x="230" y="312" fontSize="10">Ideal vapour; supplied coefficients at one temperature and composition.</text>
 </>}
 </g></svg>;
}
