import styles from'./lecture.module.css';import{fusionFreeEnergy}from'./thermo-phase-irreversibility-data';
export default function ThermoPhaseIrreversibilityDiagram(){const title='Fusion free energy crosses zero at the melting point',x=(t:number)=>70+7.75*(t-280),y=(g:number)=>180-.2*g;return <svg className={styles.diagram} viewBox="0 0 460 350" role="img" aria-label={title}>
<title>{title}</title><rect width="460" height="350" rx="12" fill="#f5faf7"/>
<g fill="#20483e" fontFamily="Arial, sans-serif" textAnchor="middle">
<text x="230" y="29" fontSize="16" fontWeight="bold" textLength="418" lengthAdjust="spacingAndGlyphs">{title}</text>
<text x="230" y="55" fontSize="12">Supplied ΔH = 6000 J/mol; ΔS = 20 J mol⁻¹ K⁻¹</text>
{[400,0,-400].map(g=><g key={g}><line x1="70" y1={y(g)} x2="395" y2={y(g)} stroke={g===0?'#497f6d':'#d8e7df'} strokeWidth={g===0?2:1}/><text x="53" y={y(g)+4} fontSize="12">{(g/1000).toFixed(1)}</text></g>)}
<line x1="70" y1="90" x2="70" y2="270" stroke="#497f6d" strokeWidth="2"/>
<text x="22" y="183" fontSize="12" transform="rotate(-90 22 183)">ΔGfus / kJ mol⁻¹</text>
<line x1={x(300)} y1="90" x2={x(300)} y2="270" stroke="#91a99e" strokeDasharray="4 4"/>
<line x1={x(280)} y1={y(fusionFreeEnergy(280))} x2={x(320)} y2={y(fusionFreeEnergy(320))} stroke="#267c62" strokeWidth="3"/>
{[290,300,310].map(t=><circle key={t} cx={x(t)} cy={y(fusionFreeEnergy(t))} r="5" fill={t<300?'#b9824b':t>300?'#527f9c':'#20483e'}/>)}
{[280,300,320].map(t=><text key={t} x={x(t)} y="287" fontSize="12">{t}</text>)}
<text x="230" y="310" fontSize="12">T / K; constant ΔH and ΔS approximation</text>
<text x="230" y="336" fontSize="12">Below 300 K: solid favoured. Above 300 K: liquid favoured.</text>
</g></svg>;}
