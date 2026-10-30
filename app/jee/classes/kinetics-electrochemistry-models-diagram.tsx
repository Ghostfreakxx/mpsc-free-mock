import styles from'./lecture.module.css';import{saturationModel as s,parallelElectrolysis as p}from'./kinetics-electrochemistry-models-data';
export default function KineticsElectrochemistryModelsDiagram({kind}:{kind:'saturation'|'parallel'}){const title=kind==='saturation'?'The supplied rate approaches a limit without becoming flat':'Each electrolysis branch receives its own charge';const x=(v:number)=>64+v*3400,y=(v:number)=>244-v*85000;return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={title}><title>{title}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/><g fontFamily="Arial,sans-serif" fill="#20483e" textAnchor="middle"><text x="230" y="29" fontSize="15" fontWeight="bold">{title}</text>
{kind==='saturation'?<>
<text x="230" y="52" fontSize="12">v=.00200[S]/(.0100+[S]); concentrations in M</text>
<path d="M64 69V244H411" stroke="#71948a" fill="none"/><path d="M64 74H411" stroke="#aa987d" strokeDasharray="5 4"/><text x="367" y="67" fontSize="11">Vmax=.00200 M/s</text>
{[0,.05,.1].map(v=><text key={v} x={x(v)} y="264" fontSize="11">{v.toFixed(2)}</text>)}<text x="230" y="286" fontSize="12">Substrate concentration [S] / M</text>
<text x="31" y="156" fontSize="11" transform="rotate(-90 31 156)">Rate / M s−1</text><text x="53" y="248" textAnchor="end" fontSize="10">0</text>
<polyline points={Array.from({length:101},(_,i)=>{const v=i/1000;return `${x(v)},${y(s.maximum*v/(s.constant+v))}`}).join(' ')} fill="none" stroke="#147b61" strokeWidth="3"/>
{s.points.map((v,i)=>{const rate=s.maximum*v/(s.constant+v);return <g key={v}><circle cx={x(v)} cy={y(rate)} r="5" fill="#bb713b"/><text x={i?x(v)-34:x(v)+71} y={y(rate)+(i?22:-11)} fontSize="12">{i?'90% Vmax':'[S]=K:50% Vmax'}</text></g>})}
<text x="230" y="309" fontSize="10">Supporting supplied model; no unique mechanism is inferred</text>
</>:<>
<rect x="130" y="55" width="200" height="38" rx="6" fill="#deeee5"/><text x="230" y="79" fontSize="15">Source current .600 A</text><path d="M230 97V111H115V130M230 111H345V130" fill="none" stroke="#71948a" strokeWidth="2"/>
{p.branches.map((b,i)=><g key={b.name}><rect x={20+i*230} y="137" width="190" height="117" rx="6" fill={i?'#f3e4d7':'#deeee5'}/><text x={115+i*230} y="160" fontSize="16">{b.name} branch</text><text x={115+i*230} y="184" fontSize="14">I={b.current.toFixed(3)} A</text><text x={115+i*230} y="207" fontSize="14">Q={b.current*p.time} C</text><text x={115+i*230} y="231" fontSize="12">{(b.current*p.time/p.faraday).toFixed(4)} mol e− /{b.electrons}</text></g>)}
<text x="230" y="278" fontSize="15">Both deposit .0200 mol; their charges differ</text><text x="230" y="301" fontSize="11">t9650 s ·F96500 C/mol ·ideal current efficiency</text><text x="230" y="316" fontSize="9">Supplied branch currents; this is a charge ledger, not a full apparatus drawing</text>
</>}
</g></svg>}
