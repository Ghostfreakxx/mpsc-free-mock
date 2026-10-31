import styles from'./lecture.module.css';import{argonChargeInventory as charges,hydrogenBondNodes as nodes,hydrogenBondEdges as edges}from'./atomic-bonding-measurement-models-data';
export default function AtomicBondingMeasurementModelsDiagram({kind}:{kind:'ensemble'|'network'}){const title=kind==='ensemble'?'Integer ion counts give a noninteger ensemble mean':'Four incident contacts count each network bond twice';const point=(i:number)=>({x:230+84*Math.cos(2*Math.PI*i/20-Math.PI/2),y:151+84*Math.sin(2*Math.PI*i/20-Math.PI/2)});return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={title}><title>{title}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/><g fontFamily="Arial,sans-serif" fill="#20483e" textAnchor="middle"><text x="230" y="29" fontSize="15" fontWeight="bold">{title}</text>
{kind==='ensemble'?<>
<text x="230" y="53" fontSize="12">Supplied ten-nucleus argon population; Z=18</text>
{charges.map((q,i)=>{const x=70+(i%5)*80,y=99+Math.floor(i/5)*82;return <g key={i}><circle cx={x} cy={y} r="23" fill={q===0?'#cbe5d8':q===1?'#e7dfbf':'#efd0bf'}/><text x={x} y={y+4} fontSize="16">{q===0?'Ar':q===1?'Ar+':'Ar2+'}</text><text x={x} y={y+41} fontSize="12">{18-q} bound e−</text></g>})}
<text x="230" y="258" fontSize="15">Total169 bound e−;11 e− removed</text><text x="230" y="283" fontSize="14">Mean charge1.10e;mean bound electrons16.90</text><text x="230" y="307" fontSize="10">Each ion has an integer electron count; these means describe the ensemble</text>
</>:<>
<text x="230" y="52" fontSize="11">20 water nodes; each has two donor and two acceptor roles</text>
{edges.map(([a,b])=>{const u=point(a),v=point(b);return <path key={a+'-'+b} d={`M${u.x} ${u.y}L${v.x} ${v.y}`} stroke="#b5cec0" strokeWidth="1.4"/>})}{nodes.map(i=>{const p=point(i);return <circle key={i} cx={p.x} cy={p.y} r="5" fill="#147b61"/>})}
<text x="230" y="260" fontSize="15">20×4 endpoints /2=40 unique H bonds</text><text x="230" y="284" fontSize="13">40 donor roles pair with40 acceptor roles</text><text x="230" y="308" fontSize="10">Abstract closed graph,not actual water geometry or a liquid snapshot</text>
</>}
</g></svg>}
