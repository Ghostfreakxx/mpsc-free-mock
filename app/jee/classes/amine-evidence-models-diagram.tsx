import styles from'./lecture.module.css';import{diazoniumIsotopeProducts as rows}from'./amine-evidence-models-data';
export default function AmineEvidenceModelsDiagram(){const title='One nitrogen from each source stays in each emitted pair';return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={title}>
<title>{title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
<g fill="#20483e" fontFamily="Arial, sans-serif" textAnchor="middle">
<text x="230" y="30" fontSize="16" fontWeight="bold" textLength="418" lengthAdjust="spacingAndGlyphs">{title}</text>
<text x="80" y="65" fontSize="13">Aniline N</text><text x="180" y="65" fontSize="13">Nitrite N</text><text x="338" y="65" fontSize="13">Emitted N₂</text>
{rows.map((r,i)=>{const y=112+98*i;return <g key={r.mass}>
<circle cx="80" cy={y} r="24" fill="#c2dfeb"/><text x="80" y={y+5} fontSize="15">{r.amine}N</text>
<text x="130" y={y+5} fontSize="19">+</text><circle cx="180" cy={y} r="24" fill={r.nitrite===15?'#edd2b4':'#c2dfeb'}/><text x="180" y={y+5} fontSize="15">{r.nitrite}N</text>
<path d={`M216 ${y}H266l-8 -6m8 6l-8 6`} stroke="#497f6d" fill="none" strokeWidth="2"/>
<circle cx="310" cy={y} r="23" fill="#c2dfeb"/><circle cx="354" cy={y} r="23" fill={r.nitrite===15?'#edd2b4':'#c2dfeb'}/><text x="310" y={y+5} fontSize="14">{r.amine}N</text><text x="354" y={y+5} fontSize="14">{r.nitrite}N</text>
<text x="332" y={y+42} fontSize="13">Mass {r.mass}: {r.fraction*100}%</text></g>;})}
<text x="230" y="280" fontSize="13">No ¹⁵N–¹⁵N pair: every product retains one aniline ¹⁴N.</text>
<text x="230" y="306" fontSize="12">Ideal fractions; no scrambling, exchange or background nitrogen.</text>
</g></svg>;}
