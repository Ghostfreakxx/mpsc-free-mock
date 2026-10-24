import styles from './lecture.module.css';
import { lowerZDiatomics } from './lower-z-diatomic-data';
const levels=[{label:'σ2s',y:222,offset:0},{label:'σ*2s',y:179,offset:0},{label:'π2p',y:132,offset:-19},{label:'',y:132,offset:19},{label:'σ2p',y:86,offset:0}];
export default function LowerZDiatomicDiagram(){
 return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label="Lower-Z diatomic valence molecular orbital occupations: B2 bond order 1 with two unpaired electrons; C2 bond order 2 and N2 bond order 3, both paired">
  <title>B2, C2 and N2 lower valence molecular orbital filling</title>
  <rect width="460" height="330" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="25" fontSize="17" fontWeight="bold">B₂, C₂ and N₂: fill π2p before σ2p</text>
   <path d="M17 239V69L12 78M17 69L22 78" fill="none" stroke="#526c62" strokeWidth="1.5"/>
   <text x="17" y="57" fontSize="13">E</text>
   {levels.filter(level=>level.label).map(level=><text key={level.label} x="56" y={level.y+5} fontSize="12">{level.label}</text>)}
   {lowerZDiatomics.map((molecule,j)=>{const center=132+j*122;return <g key={molecule.formula}>
    <text x={center} y="54" fontSize="19" fontWeight="bold">{molecule.formula}</text>
    {levels.map((level,i)=><g key={i}><rect x={center+level.offset-16} y={level.y-15} width="32" height="25" rx="2" fill={molecule.occupations[i]===1?'#dcefe1':'#edf3ef'} stroke="#7b9d8d"/>
     <text x={center+level.offset} y={level.y+4} fontSize="18">{molecule.occupations[i]===2?'↑↓':molecule.occupations[i]===1?'↑':''}</text>
    </g>)}
    <text x={center} y="255" fontSize="13">{molecule.valence} valence electrons</text>
    <text x={center} y="277" fontSize="14" fontWeight="bold">Bond order {molecule.bondOrder}</text>
    <text x={center} y="298" fontSize="12">{molecule.unpaired?`${molecule.unpaired} unpaired`:'All paired'}</text>
   </g>;})}
   <text x="230" y="322" fontSize="12">Lower valence MOs shown; core and upper 2p antibonding levels omitted.</text>
  </g>
 </svg>;
}
