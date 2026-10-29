import styles from './lecture.module.css';
import {xyleneSiteClasses as xylenes,aminoFischerPatterns as amino,initialEnzymeRate} from './aromatic-biomolecule-patterns-data';
export default function AromaticBiomoleculePatternsDiagram({kind}:{kind:'xylene'|'amino'|'enzyme'}){
 const title=kind==='xylene'?'Equivalent sites are one constitutional pattern':kind==='amino'?'Same L reference, different CIP priorities':'More substrate need not mean proportional rate';
 const ring=Array.from({length:6},(_,i)=>[32*Math.cos(-Math.PI/2+i*Math.PI/3),32*Math.sin(-Math.PI/2+i*Math.PI/3)]);
 const curve=Array.from({length:121},(_,i)=>{const s=i/10;return `${70+s*340/12},${250-initialEnzymeRate(s)*1.7}`;}).join(' ');
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={title}>
  <title>{title}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" textAnchor="middle" fill="#20483e">
   <text x="230" y="27" fontSize="15" fontWeight="bold">{title}</text>
   {kind==='xylene'?<>
    <text x="230" y="49" fontSize="11">Ring mononitration placements; two identical methyl groups retained</text>
    {xylenes.map((x,j)=><g key={x.label} transform={`translate(${77+j*153} 150)`}>
     <text y="-78" fontSize="14" fontWeight="bold">{x.label}</text>
     <polygon points={ring.map(p=>p.join(',')).join(' ')} stroke="#71948a" strokeWidth="2" fill="none"/>
     <circle r="16" stroke="#71948a" fill="none"/>
     {ring.map(([rx,ry],i)=>{const methyl=(x.methyl as readonly number[]).includes(i),classIndex=x.classes.findIndex(sites=>(sites as readonly number[]).includes(i));return <g key={i}>
      {methyl&&<><line x1={rx} y1={ry} x2={rx*1.63} y2={ry*1.63} stroke="#71948a"/><text x={rx*1.85} y={ry*1.85+4} fontSize="12">Me</text></>}
      <circle cx={rx} cy={ry} r="9" fill={methyl?'#d5e2db':['#2d8770','#9c5b25','#6c6590'][classIndex]}/>
      <text x={rx} y={ry+4} fontSize="10" fill={methyl?'#20483e':'white'}>{i+1}</text>
     </g>;})}
     <text y="98" fontSize="14" fontWeight="bold">{x.classes.length} site {x.classes.length===1?'class':'classes'}</text>
    </g>)}
    <text x="230" y="280" fontSize="11">Matching colours within each ring mark equivalent available sites.</text>
    <text x="230" y="303" fontSize="10">Formal constitutional counts are not product-yield ratios.</text>
   </>:kind==='amino'?<>
    <text x="230" y="49" fontSize="11">Neutral forms drawn for a stereochemical reference; numbers are CIP priorities</text>
    {amino.map((a,i)=><g key={a.label} transform={`translate(${120+i*220} 174)`}>
     <text y="-98" fontSize="14" fontWeight="bold">{a.label}</text>
     <path d="M0 -46V46M-40 0H40" stroke="#71948a" strokeWidth="2"/>
     <text y="-61" fontSize="13">COOH ({a.carboxylPriority})</text>
     <text x="-70" y="5" fontSize="12">NH2 (1)</text><text x="70" y="5" fontSize="12">H (4)</text>
     <text y="69" fontSize="13">{a.sideChain} ({a.sidePriority})</text>
    </g>)}
    <text x="230" y="278" fontSize="11">Horizontal bonds point toward the viewer; vertical bonds point away.</text>
    <text x="230" y="303" fontSize="10">Cysteine: S outranks O at the carbon tie-break. Glycine has two alpha H.</text>
   </>:<>
    <text x="230" y="49" fontSize="11">Supporting initial-rate model; Km = 2 mM; Vmax = 100 µM/min</text>
    <path d="M70 73V250H418" stroke="#71948a" fill="none"/>
    <path d="M70 80H410" stroke="#b58558" strokeDasharray="4 4"/>
    {[0,50,100].map(v=><text key={v} x="48" y={254-v*1.7} fontSize="11">{v}</text>)}
    <polyline points={curve} stroke="#207c65" strokeWidth="3" fill="none"/>
    {[2,8].map(s=><circle key={s} cx={70+s*340/12} cy={250-initialEnzymeRate(s)*1.7} r="5" fill="#9c5b25"/>)}
    <text x="158" y="189" fontSize="12">v = 50</text><text x="329" y="138" fontSize="12">v = 80</text>
    {[0,2,8,12].map(s=><text key={s} x={70+s*340/12} y="271" fontSize="11">{s}</text>)}
    <text x="230" y="292" fontSize="11">Substrate concentration (mM); rate in µM/min</text>
    <text x="230" y="310" fontSize="10">Fixed enzyme and conditions; an initial rate does not set equilibrium.</text>
   </>}
  </g>
 </svg>;
}
