import styles from'./lecture.module.css';import{conformerPopulations}from'./hydrocarbon-pathway-populations-data';
export default function HydrocarbonPathwayPopulationsDiagram(){const p=conformerPopulations(),rows=[['Anti',p.anti,0],['Gauche +',p.gauchePlus,3],['Gauche −',p.gaucheMinus,3]] as const,title='Two gauche states each contribute their own population';return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={title}>
<title>{title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
<g fill="#20483e" fontFamily="Arial, sans-serif">
<text x="230" y="29" textAnchor="middle" fontWeight="bold" fontSize="16" textLength="418" lengthAdjust="spacingAndGlyphs">{title}</text>
<text x="230" y="55" textAnchor="middle" fontSize="12">Supplied three-state model: 300 K; gap 3.00 kJ/mol</text>
<text x="66" y="84" textAnchor="middle" fontSize="12">State / energy</text><text x="280" y="84" textAnchor="middle" fontSize="12">Normalized equilibrium fraction</text>
{rows.map(([name,f,e],i)=><g key={name}><text x="66" y={116+i*57} textAnchor="middle" fontSize="13">{name}</text><text x="66" y={133+i*57} textAnchor="middle" fontSize="11">{e.toFixed(2)} kJ/mol</text><rect x="130" y={99+i*57} width="258" height="32" rx="4" fill="#e0ece5"/><rect x="130" y={99+i*57} width={f*258} height="32" rx="4" fill={i===0?'#78b49a':'#b5d2e0'}/><text x="420" y={120+i*57} textAnchor="end" fontSize="13">{(100*f).toFixed(2)}%</text></g>)}
<text x="230" y="278" textAnchor="middle" fontSize="14">Combined gauche: {(100*(p.gauchePlus+p.gaucheMinus)).toFixed(2)}%</text>
<text x="230" y="302" textAnchor="middle" fontSize="11">Other conformations and unequal partition contributions are neglected.</text>
<text x="230" y="320" textAnchor="middle" fontSize="11">These are populations, not barrier-crossing rates.</text>
</g></svg>;}
