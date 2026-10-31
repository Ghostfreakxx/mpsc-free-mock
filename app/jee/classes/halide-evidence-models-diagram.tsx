import styles from './lecture.module.css';import{stereochemicalProductModel as m}from'./halide-evidence-models-data';
export default function HalideEvidenceModelsDiagram(){const title='Observed ratio versus a conditional channel model';return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label={title}>
<title>{title}</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
<g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
<text x="230" y="30" fontSize="16" fontWeight="bold" textLength="418" lengthAdjust="spacingAndGlyphs">{title}</text>
<text x="230" y="62" fontSize="14">Observed enantiomer pair: 70 inverted : 30 retained</text>
<rect x="30" y="79" width="280" height="39" fill="#acd7c4"/><rect x="310" y="79" width="120" height="39" fill="#ead1b5"/>
<text x="170" y="104" fontSize="14">70</text><text x="370" y="104" fontSize="14">30</text>
<text x="230" y="145" fontSize="14">Magnitude of ee = (70 − 30)% = 40%</text>
<text x="230" y="177" fontSize="12">Assume perfect inversion plus an exactly racemizing channel</text>
<rect x="30" y="191" width={m.inversionChannel*4} height="39" fill="#73b498"/><rect x="190" y="191" width={m.racemizingInverted*4} height="39" fill="#acd7c4"/><rect x="310" y="191" width={m.racemizingRetained*4} height="39" fill="#ead1b5"/>
<text x="110" y="216" fontSize="13">40 inverted</text><text x="250" y="216" fontSize="13">30 inverted</text><text x="370" y="216" fontSize="13">30 retained</text>
<text x="110" y="253" fontSize="12">Perfect-inversion channel</text><text x="310" y="253" fontSize="12">Racemizing channel: 60 total</text>
<text x="230" y="289" fontSize="13">Ion-pair bias can invalidate the channel inference.</text>
<text x="230" y="312" fontSize="12">Observed composition alone does not uniquely identify a mechanism.</text>
</g></svg>;}
