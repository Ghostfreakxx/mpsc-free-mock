import styles from'./lecture.module.css';import{binaryPhaseExample as d,binaryPhaseAmounts}from'./solution-phase-particle-balances-data';
export default function SolutionPhaseParticleBalancesDiagram(){const p=binaryPhaseAmounts(d.feed,d.z,d.x,d.y),title='A phase split conserves both components and total amount';return <svg className={styles.diagram} viewBox="0 0 460 340" role="img" aria-label={title}>
<title>{title}</title><rect width="460" height="340" rx="12" fill="#f5faf7"/>
<g fill="#20483e" fontFamily="Arial, sans-serif" textAnchor="middle">
<text x="230" y="29" fontSize="16" fontWeight="bold" textLength="418" lengthAdjust="spacingAndGlyphs">{title}</text>
<text x="230" y="57" fontSize="14">Feed 10 mol; overall A fraction z = .40</text>
<line x1="40" y1="105" x2="420" y2="105" stroke="#497f6d" strokeWidth="2"/>
{[[d.x,'x=.25','#73ad91'],[d.z,'z=.40','#20483e'],[d.y,'y=.75','#91b7cc']].map(([v,label,color])=><g key={String(label)}><circle cx={40+Number(v)*380} cy="105" r="6" fill={String(color)}/><text x={40+Number(v)*380} y="88" fontSize="12">{label}</text></g>)}
<text x="40" y="129" fontSize="11">0</text><text x="420" y="129" fontSize="11">1</text>
<rect x="20" y="152" width="200" height="105" rx="8" fill="#d2e8dc"/><rect x="240" y="152" width="200" height="105" rx="8" fill="#d6e6ef"/>
<text x="120" y="178" fontSize="15">Liquid: {p.liquid.toFixed(0)} mol</text><text x="340" y="178" fontSize="15">Vapour: {p.vapour.toFixed(0)} mol</text>
<text x="120" y="207" fontSize="14">A: {(p.liquid*d.x).toFixed(2)} mol</text><text x="340" y="207" fontSize="14">A: {(p.vapour*d.y).toFixed(2)} mol</text>
<text x="120" y="235" fontSize="14">B: {(p.liquid*(1-d.x)).toFixed(2)} mol</text><text x="340" y="235" fontSize="14">B: {(p.vapour*(1-d.y)).toFixed(2)} mol</text>
<text x="230" y="285" fontSize="14">V/F = (z − x)/(y − x) = .30</text>
<text x="230" y="309" fontSize="12">A total = 4 mol; B total = 6 mol</text><text x="230" y="329" fontSize="11">Supplied coexisting compositions; not a rate or yield prediction.</text>
</g></svg>;}
