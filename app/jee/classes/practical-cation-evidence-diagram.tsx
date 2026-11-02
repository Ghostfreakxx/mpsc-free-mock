import styles from'./lecture.module.css';import{hydroxideComparison as rows}from'./practical-cation-evidence-data';
export default function PracticalCationEvidenceDiagram(){const title='The identity of the excess reagent changes the comparison';return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={title}>
<title>{title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
<g fill="#20483e" fontFamily="Arial, sans-serif" textAnchor="middle">
<text x="230" y="29" fontSize="16" fontWeight="bold" textLength="418" lengthAdjust="spacingAndGlyphs">{title}</text>
<text x="230" y="55" fontSize="12">Selected separated Zn²⁺ / Al³⁺ hydroxide samples</text>
<text x="66" y="86" fontSize="13">White solid</text><text x="213" y="86" fontSize="13">Excess NaOH</text><text x="367" y="86" fontSize="13">Excess aqueous NH₃</text>
{rows.map((r,i)=>{const y=102+i*84;return <g key={r.ion}>
<rect x="12" y={y} width="436" height="65" rx="7" fill={i===0?'#dcece4':'#e6edf0'}/>
<text x="66" y={y+25} fontSize="15">{r.solid}</text><text x="66" y={y+48} fontSize="12">{r.ion}</text>
<text x="213" y={y+38} fontSize="13" textLength="128" lengthAdjust="spacingAndGlyphs">{r.alkali}</text>
<text x="367" y={y+38} fontSize="13" textLength="138" lengthAdjust="spacingAndGlyphs">{r.ammonia}</text></g>;})}
<text x="230" y="282" fontSize="13">Zn ammine: [Zn(NH₃)₄]²⁺; zinc remains +2.</text>
<text x="230" y="306" fontSize="12">Complex formation changes dissolved species, not the metal inventory.</text>
<text x="230" y="324" fontSize="11">Paired analytical evidence; not a universal identification of every unknown.</text>
</g></svg>;}
