import styles from './lecture.module.css';
import {peptideCandidates,aminoAcidChargeModels} from './peptide-pi-data';
export default function PeptidePiDiagram({kind}:{kind:'peptide'|'pi'}){
 const peptide=kind==='peptide';
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={peptide?'Directed AG and GA fragments distinguish AGA from AAG and GAA':'Isoelectric-point estimates bracket the neutral charge state: Asp 3.0 and Lys 9.75'}>
  <title>{peptide?'Composition does not determine peptide sequence':'Choose the pKa values adjacent to net zero charge'}</title>
  <rect width="460" height="320" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial,sans-serif" fill="#20483e" textAnchor="middle">
   {peptide?<>
    <text x="230" y="28" fontSize="17" fontWeight="bold">Same composition, different adjacent pairs</text>
    <text x="230" y="52" fontSize="13">A = Ala; G = Gly · sequence direction N → C</text>
    {peptideCandidates.map((sequence,i)=>{const pairs=[sequence.slice(0,2).join(''),sequence.slice(1).join('')],fits=pairs.includes('AG')&&pairs.includes('GA');return <g key={sequence.join('')}>
     <rect x="23" y={75+i*57} width="414" height="46" rx="6" fill={fits?'#deeee5':'white'} stroke={fits?'#218164':'#d0dfd8'}/>
     <text x="105" y={104+i*57} fontSize="20" fontWeight="bold">{sequence.join('–')}</text>
     <text x="264" y={103+i*57} fontSize="15">{pairs.join(' and ')}</text>
     <text x="393" y={103+i*57} fontSize="14">{fits?'Fits':'No'}</text>
    </g>;})}
    <text x="230" y="270" fontSize="14">Observed directed fragments: AG and GA ⇒ AGA</text>
    <text x="230" y="296" fontSize="13">All three: 2 Ala + 1 Gly; 2 peptide links; 217 g/mol</text>
    <text x="230" y="314" fontSize="11">Pure linear tripeptide; no rearrangement in the supplied evidence model</text>
   </>:<>
    <text x="230" y="28" fontSize="17" fontWeight="bold">Bracket the neutral state before averaging</text>
    <text x="230" y="52" fontSize="13">Supplied stepwise pKa values; pH increases →</text>
    {aminoAcidChargeModels.map((model,i)=>{const y=105+i*103;return <g key={model.label}>
     <text x="56" y={y} fontSize="14" fontWeight="bold">{model.label}</text>
     {model.charges.map((charge,j)=><g key={j}><circle cx={133+j*84} cy={y-4} r="19" fill={charge===0?'#218164':'#deeee5'}/><text x={133+j*84} y={y+1} fontSize="15" fill={charge===0?'white':'#20483e'}>{charge>0?'+'+charge:charge}</text></g>)}
     {model.pka.map((pka,j)=><g key={j}><path d={`M${155+j*84} ${y-4}H${194+j*84}`} stroke="#4478bc" strokeWidth="1.5"/><text x={175+j*84} y={y+33} fontSize="12" fontWeight={model.bracket.some(index=>index===j)?'bold':'normal'}>{pka.toFixed(1)}</text></g>)}
     <text x="230" y={y+58} fontSize="14">pI ≈ ({model.pka[model.bracket[0]].toFixed(1)} + {model.pka[model.bracket[1]].toFixed(1)}) / 2 = {model.pi}</text>
    </g>;})}
    <text x="230" y="295" fontSize="13">Use the two steps surrounding the zero-charge state</text>
    <text x="230" y="314" fontSize="11">Adjacent-state approximation; net zero does not erase internal charges</text>
   </>}
  </g>
 </svg>;
}
