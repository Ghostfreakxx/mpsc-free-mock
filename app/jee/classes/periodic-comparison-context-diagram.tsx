import styles from'./lecture.module.css';import{molecularElectronLedgers as rows}from'./periodic-comparison-context-data';
export default function PeriodicComparisonContextDiagram(){const title='Same valence count, different total electron inventories';return <svg className={styles.diagram} viewBox="0 0 460 340" role="img" aria-label={title}>
<title>{title}</title><rect width="460" height="340" rx="12" fill="#f5faf7"/>
<g fill="#20483e" fontFamily="Arial, sans-serif">
<text x="230" y="29" textAnchor="middle" fontSize="16" fontWeight="bold" textLength="418" lengthAdjust="spacingAndGlyphs">{title}</text>
<text x="230" y="55" textAnchor="middle" fontSize="12">Bar length counts all electrons; every green part counts 8 valence electrons.</text>
<text x="75" y="82" textAnchor="middle" fontSize="12">Species</text><text x="429" y="82" textAnchor="end" fontSize="12">Total</text>
{rows.map((r,i)=>{const y=98+i*36,core=r.total-r.valence;return <g key={r.label}><text x="75" y={y+16} textAnchor="middle" fontSize="15">{r.label}</text><rect x="130" y={y} width={core*7} height="23" fill="#c8d9e5"/><rect x={130+core*7} y={y} width={r.valence*7} height="23" fill="#7ab79c"/><text x="429" y={y+16} textAnchor="end" fontSize="14">{r.total}</text></g>;})}
<rect x="91" y="291" width="16" height="13" fill="#c8d9e5"/><text x="113" y="302" fontSize="12">Core electrons</text><rect x="260" y="291" width="16" height="13" fill="#7ab79c"/><text x="282" y="302" fontSize="12">Valence electrons</text>
<text x="230" y="328" textAnchor="middle" fontSize="11">Electron-count similarity does not guarantee equal bond lengths or reactivity.</text>
</g></svg>;}
