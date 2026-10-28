import styles from './lecture.module.css';
import {pSpinOrbitals,p2Occupations,multicentreFillings} from './atomic-multicentre-data';
export default function AtomicMulticentreDiagram({kind}:{kind:'pauli'|'multicentre'}){
 const pauli=kind==='pauli',same=p2Occupations.filter(x=>x.sameSpatial).length,different=p2Occupations.length-same;
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={pauli?'Six p spin orbitals give15 unordered p2 occupations:3 in the same spatial orbital and12 in different orbitals':'Three-centre electron counts: one diborane bridge fills2,0,0 while the XeF2 axial subset fills2,2,0'}>
  <title>{pauli?'Pauli counting distinguishes spin orbitals from spatial orbitals':'Three-centre subsets can contain two or four electrons'}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial,sans-serif" fill="#20483e" textAnchor="middle">
   {pauli?<>
    <text x="230" y="28" fontSize="17" fontWeight="bold">Choose two distinct spin orbitals</text>
    <text x="230" y="54" fontSize="13">Three spatial p orbitals × two spin projections</text>
    {pSpinOrbitals.map((orbital,i)=><g key={i}><rect x={27+i*69} y="83" width="60" height="53" rx="5" fill="white" stroke="#4478bc"/><text x={57+i*69} y="104" fontSize="12">ml={orbital.ml}</text><text x={57+i*69} y="125" fontSize="13">ms={orbital.ms>0?'+½':'−½'}</text></g>)}
    <text x="230" y="174" fontSize="23" fontWeight="bold">C(6,2) = 6 × 5 / 2 = {p2Occupations.length}</text>
    <rect x="40" y="198" width={same*25} height="30" fill="#4478bc"/><rect x={40+same*25} y="198" width={different*25} height="30" fill="#218164"/>
    <text x="230" y="257" fontSize="14">Same spatial orbital: {same} · Different orbitals: {different}</text>
    <text x="230" y="283" fontSize="13">Opposite spins required for a same-orbital pair</text>
    <text x="230" y="308" fontSize="12">Occupation count does not mean15 distinct energy levels</text>
   </>:<>
    <text x="230" y="28" fontSize="17" fontWeight="bold">One three-centre idea, two electron counts</text>
    <text x="230" y="51" fontSize="12">Qualitative levels; columns do not share numerical energies</text>
    {multicentreFillings.map((model,i)=>{const x=120+i*220;return <g key={model.label}>
     <text x={x} y="79" fontSize="14" fontWeight="bold">{model.label}</text>
     {model.occupancies.map((n,j)=>{const y=224-j*54;return <g key={j}><path d={`M${x-57} ${y}H${x+57}`} stroke="#4478bc" strokeWidth="2"/><text x={x} y={y-8} fontSize="22">{n===2?'↑↓':''}</text><text x={x} y={y+18} fontSize="12">{['bonding','nonbonding','antibonding'][j]}</text></g>;})}
     <text x={x} y="268" fontSize="16" fontWeight="bold">{model.electrons} electrons: {model.occupancies.join(', ')}</text>
    </g>;})}
    <text x="230" y="295" fontSize="13">Antibonding level empty in both specified subsets</text>
    <text x="230" y="314" fontSize="11">Other molecular electrons are outside these selected bonding subsets</text>
   </>}
  </g>
 </svg>;
}
