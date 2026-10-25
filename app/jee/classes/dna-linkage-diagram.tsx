import styles from './lecture.module.css';
export default function DnaLinkageDiagram(){
 const top='AAAAAAGGGG',bottom='TTTTTTCCCC';
 return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label="Ten-base-pair intact linear DNA model with six AT and four GC pairs: twenty nucleotides, nine internal phosphodiester linkages in each backbone, and twenty-four base-pair hydrogen bonds">
  <title>Backbone links are not base-pair hydrogen bonds</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="25" fontSize="16" fontWeight="bold">Count backbone links and base pairs separately</text>
   <text x="230" y="49" fontSize="12">Intact linear duplex: 10 base pairs; 6 AT + 4 GC</text>
   <text x="230" y="80" fontSize="13">9 joining phosphate bridges along each strand</text>
   {[120,225].map(y=><g key={y}>{Array.from({length:9},(_,i)=><line key={i} x1={45+40*i} x2={85+40*i} y1={y} y2={y} stroke="#2861a1" strokeWidth="3"/>)}</g>)}
   {[...top].map((base,i)=><g key={i}>
    <circle cx={45+40*i} cy="120" r="7" fill="#2861a1"/><circle cx={45+40*i} cy="225" r="7" fill="#2861a1"/>
    <line x1={45+40*i} x2={45+40*i} y1="127" y2="143" stroke="#7d9f8c"/><line x1={45+40*i} x2={45+40*i} y1="204" y2="218" stroke="#7d9f8c"/>
    <text x={45+40*i} y="157" fontSize="15">{base}</text><text x={45+40*i} y="201" fontSize="15">{bottom[i]}</text>
    <text x={45+40*i} y="181" fontSize="12" fill="#b34c2f">{i<6?'2':'3'}</text>
   </g>)}
   <text x="20" y="108" fontSize="12">5′</text><text x="430" y="108" fontSize="12">3′</text>
   <text x="20" y="247" fontSize="12">3′</text><text x="430" y="247" fontSize="12">5′</text>
   <text x="230" y="273" fontSize="13">20 nucleotide dots; 2 × 9 = 18 backbone linkages</text>
   <text x="230" y="296" fontSize="13" fill="#a0442b">Base-pair H bonds: 6 × 2 + 4 × 3 = 24</text>
   <text x="230" y="319" fontSize="12">Dots = nucleotide units; bridge lines = internucleotide links.</text>
  </g>
 </svg>;
}
