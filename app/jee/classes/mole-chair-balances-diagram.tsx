import styles from './lecture.module.css';
import {idealRecycleFlows,chairPairs,chairPosition} from './mole-chair-balances-data';
export default function MoleChairBalancesDiagram({kind}:{kind:'recycle'|'chair'}){
 const f=idealRecycleFlows();
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={kind==='recycle'?'Ideal steady recycle conserves fresh feed and distinguishes total reactor feed':'Chair flip orientation ledger preserves ring faces while swapping axial and equatorial positions'}>
  <title>{kind==='recycle'?'Perfect recycle, no purge, one-to-one A becomes B':'Same up/down faces through both chair conformations'}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" textAnchor="middle" fill="#20483e">
   {kind==='recycle'?<>
    <text x="230" y="28" fontSize="16" fontWeight="bold">Fresh feed and reactor feed differ</text>
    <text x="230" y="51" fontSize="12">A → B; steady ideal process; all rates in mol/h</text>
    <path d="M15 126H143M282 126H325M350 126H442M336 150V240H94V126" stroke="#207c65" fill="none" strokeWidth="2"/>
    <path d="M135 121L143 126L135 131M317 121L325 126L317 131M434 121L442 126L434 131M99 134L94 126L89 134" stroke="#207c65" fill="none" strokeWidth="2"/>
    <circle cx="94" cy="126" r="5" fill="#207c65"/>
    <rect x="145" y="88" width="137" height="76" rx="8" fill="#deeee5"/>
    <text x="214" y="111" fontSize="14" fontWeight="bold">Reactor</text>
    <text x="214" y="134" fontSize="12">A feed: {f.reactor}</text>
    <text x="214" y="153" fontSize="11">40% per pass</text>
    <rect x="325" y="100" width="25" height="51" rx="4" fill="#dfac73"/>
    <text x="48" y="95" fontSize="12">Fresh A</text><text x="48" y="112" fontSize="12">{f.fresh}</text>
    <text x="398" y="94" fontSize="12">B out</text><text x="398" y="112" fontSize="12">{f.product}</text>
    <text x="340" y="185" fontSize="11">Separator</text>
    <text x="213" y="222" fontSize="13">Unreacted A recycle: {f.recycle}</text>
    <text x="230" y="277" fontSize="13">F = 100 + .60F → F = 250</text>
    <text x="230" y="301" fontSize="11">Perfect B removal and A recycle; no purge or side reaction</text>
   </>:<>
    <text x="230" y="28" fontSize="16" fontWeight="bold">Keep the face through a chair flip</text>
    <text x="230" y="49" fontSize="11">Orientation ledger: chair A has C1 axial up, C2 axial down</text>
    {chairPairs.map((pair,i)=><g key={pair.label} transform={`translate(0 ${i*111})`}>
     <rect x="20" y="67" width="420" height="101" rx="8" fill={i?'#e3eee8':'#edf3ef'}/>
     <text x="230" y="88" fontSize="13" fontWeight="bold">{pair.label}</text>
     {[false,true].map((flipped,j)=><g key={String(flipped)}>
      <text x={123+j*215} y="109" fontSize="11">Chair {j===0?'A':'B'}</text>
      {pair.faces.map((face,k)=><text key={k} x={123+j*215} y={131+k*20} fontSize="12">C{k+1}: {chairPosition(k+1,face,flipped)} {face}</text>)}
     </g>)}
     <text x="230" y="137" fontSize="20">⇌</text>
    </g>)}
    <text x="230" y="300" fontSize="11">Axial ↔ equatorial; up stays up and down stays down.</text>
   </>}
  </g>
 </svg>;
}
