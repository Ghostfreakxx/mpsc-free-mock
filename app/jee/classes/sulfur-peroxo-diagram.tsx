import styles from './lecture.module.css';
export default function SulfurPeroxoDiagram(){
 const rows=[
  {name:'H₂SO₅: peroxomonosulfuric acid',before:'HO–S(=O)₂–',bridge:'O–O',after:'H',note:'One O–O bond; two O at −1; sulfur +6'},
  {name:'H₂S₂O₈: peroxodisulfuric acid',before:'HO–S(=O)₂–',bridge:'O–O',after:'–S(=O)₂–OH',note:'One O–O bond; two O at −1; each sulfur +6'},
  {name:'H₂S₂O₇: disulfuric acid',before:'HO–S(=O)₂–',bridge:'O',after:'–S(=O)₂–OH',note:'S–O–S bridge; no O–O; all O at −2; sulfur +6'},
 ];
 return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label="Sulfur oxoacid connectivity: H2SO5 and H2S2O8 have one peroxide O–O linkage, while H2S2O7 has an S–O–S oxygen bridge; sulfur is +6 in each">
  <title>Oxygen bridge versus peroxide linkage</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="25" fontSize="17" fontWeight="bold">Find the actual oxygen–oxygen bond</text>
   {rows.map((row,i)=><g key={row.name}>
    <rect x="12" y={40+i*92} width="436" height="84" rx="6" fill="#e7f1ea"/>
    <text x="230" y={61+i*92} fontSize="13" fontWeight="bold">{row.name}</text>
    <text x="230" y={88+i*92} fontSize="19"><tspan>{row.before}</tspan><tspan fill={i<2?'#b34c2f':'#156b55'} fontWeight="bold">{row.bridge}</tspan><tspan>{row.after}</tspan></text>
    <text x="230" y={110+i*92} fontSize="12">{row.note}</text>
   </g>)}
   <text x="230" y="325" fontSize="12">Formal connectivity drawings; no preparation or handling procedure.</text>
  </g>
 </svg>;
}
