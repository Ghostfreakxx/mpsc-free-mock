import styles from './lecture.module.css';import{dilutionModel as d,methylShiftNodes as nodes,methylShiftBefore as before,methylShiftAfter as after,methylShiftCharges as charge}from'./mole-organic-basis-data';
export default function MoleOrganicBasisDiagram({kind}:{kind:'dilution'|'methyl'}){
const title=kind==='dilution'?'Each draw removes a fraction of what remains':'One labelled methyl changes its carbon attachment';
return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={title}><title>{title}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
<g fontFamily="Arial,sans-serif" fill="#20483e" textAnchor="middle"><text x="230" y="29" fontSize="16" fontWeight="bold">{title}</text>
{kind==='dilution'?<>
<text x="230" y="52" fontSize="11">Well mixed; restore to .100 L with pure solvent after each draw</text>
{[0,1,2].map((k,i)=>{const n=d.volume*d.initialConcentration*(1-d.withdrawal/d.volume)**k,bar=140*n/(d.volume*d.initialConcentration);return <g key={k}><text x={85+i*145} y="83" fontSize="14">{k===0?'Start':`After cycle${k}`}</text><rect x={45+i*145} y="98" width="80" height="145" fill="#edf3ef" stroke="#8caca0"/><rect x={46+i*145} y={242-bar} width="78" height={bar} fill={k?'#8cc1a8':'#468e72'}/><text x={85+i*145} y="266" fontSize="14">{n.toFixed(4)} mol</text></g>})}
<text x="230" y="289" fontSize="13">Removed: .0100 mol, then .0075 mol; total .0175 mol</text><text x="230" y="309" fontSize="10">Bars show solute amounts; final liquid volumes are equal, not bar heights</text>
</>:<>
{[{x:0,edges:before,key:'before' as const},{x:230,edges:after,key:'after' as const}].map(({x,edges,key})=><g key={key} transform={`translate(${x} 0)`}><text x="115" y="53" fontSize="13">{key==='before'?'Before: positive B':'After: positive A'}</text>{edges.map(([a,b])=>{const u=nodes.find(n=>n.id===a)!,v=nodes.find(n=>n.id===b)!;return <path key={a+b} d={`M${u.x} ${u.y}L${v.x} ${v.y}`} stroke={b==='M3'?'#bb713b':'#71948a'} strokeWidth={b==='M3'?3:2}/>})}{nodes.map(n=><g key={n.id}>{n.id==='M3'&&<circle cx={n.x} cy={n.y-4} r="20" fill="#f3decf"/>}<text x={n.x} y={n.y} fontSize="13" stroke="#f5faf7" strokeWidth="4" paintOrder="stroke" strokeLinejoin="round">{n.id==='A'?`A:C${charge[key].A?'+':''}`:n.id==='B'?`B:CH${charge[key].B?'+':''}`:n.id==='M3'?'CH3*':'CH3'}</text></g>)}</g>)}
<text x="230" y="248" fontSize="14">*The same CH3 group and bond pair migrate</text><text x="230" y="274" fontSize="14">6 carbon atoms ·13 hydrogen atoms ·total charge+1</text><text x="230" y="299" fontSize="11">Connectivity ledger; not a three-dimensional transition structure</text>
</>}
</g></svg>;
}
