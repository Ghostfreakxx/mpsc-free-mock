import styles from './lecture.module.css';
import{glucoseTreeNodes as nodes,glucoseTreeEdges as edges}from'./biomolecule-connectivity-data';
export default function BiomoleculeConnectivityDiagram(){const title='One free anomeric centre; three nonreducing arms';return <svg className={styles.diagram} viewBox="0 0 460 350" role="img" aria-label={title}>
<title>{title}</title><rect width="460" height="350" rx="12" fill="#f5faf7"/>
<g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
<text x="230" y="29" fontSize="16" fontWeight="bold" textLength="418" lengthAdjust="spacingAndGlyphs">{title}</text>
<text x="230" y="53" fontSize="12">Abstract uncapped glucose tree; not a ring-structure drawing</text>
{edges.map(([p,c])=><line key={`${p}-${c}`} x1={nodes[p][0]} y1={nodes[p][1]} x2={nodes[c][0]} y2={nodes[c][1]} stroke="#497f6d" strokeWidth="3"/>)}
{nodes.map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="16" fill={i===0?'#f2c7b8':[4,6,9].includes(i)?'#b9dbe9':'#cde5da'} stroke="#497f6d"/><text x={x} y={y+4} fontSize="12">{i+1}</text></g>)}
<text x="40" y="179" fontSize="11">Free root</text>
<text x="230" y="286" fontSize="13">10 units · 9 links · branch points 3 and 6</text>
<text x="230" y="310" fontSize="13">Blue terminal arms: 5, 7 and 10</text>
<text x="230" y="332" fontSize="11">Every child uses its anomeric centre; the root remains uncapped.</text>
</g></svg>;}
