import styles from './lecture.module.css';
const point=(x:number,y:number,r:number,angle:number)=>[x+r*Math.cos(angle*Math.PI/180),y+r*Math.sin(angle*Math.PI/180)];
export default function ButaneNewmanDiagram(){
 return <svg className={styles.diagram} viewBox="0 0 460 330" role="img" aria-label="Butane Newman projections viewed along C2 to C3: anti methyl groups 180 degrees apart and gauche methyl groups 60 degrees apart; both staggered">
  <title>Butane anti and gauche conformations along C2–C3</title><rect width="460" height="330" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="26" fontSize="17" fontWeight="bold">Butane: view along C2 → C3</text>
   {[{x:120,name:'Anti',rear:[90,210,330],angle:'180°',note:'Lower in the usual energy comparison'},{x:340,name:'Gauche',rear:[-30,90,210],angle:'60°',note:'Also staggered; methyls closer'}].map(({x,name,rear,angle,note})=><g key={name}>
    <text x={x} y="54" fontSize="17" fontWeight="bold">{name}</text>
    {rear.map((a,i)=>{const from=point(x,161,28,a),to=point(x,161,55,a),label=point(x,161,75,a);return <g key={a}><line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} stroke="#b55b36" strokeWidth="2.5"/><text x={label[0]} y={label[1]+5} fill="#a14a2d" fontSize="15">{i===0?'CH₃':'H'}</text></g>;})}
    <circle cx={x} cy="161" r="28" fill="none" stroke="#769286" strokeWidth="2"/>
    {[-90,30,150].map((a,i)=>{const to=point(x,161,55,a),label=point(x,161,75,a);return <g key={a}><line x1={x} y1="161" x2={to[0]} y2={to[1]} stroke="#156b55" strokeWidth="2.5"/><text x={label[0]} y={label[1]+5} fontSize="15">{i===0?'CH₃':'H'}</text></g>;})}
    <circle cx={x} cy="161" r="4" fill="#156b55"/>
    <text x={x} y="267" fontSize="15" fontWeight="bold">CH₃ / CH₃ angle: {angle}</text>
    <text x={x} y="289" fontSize="11">{note}</text>
   </g>)}
   <text x="230" y="311" fontSize="12">Green: front carbon bonds. Orange: rear carbon bonds from circle.</text>
   <text x="230" y="327" fontSize="12">Single-bond rotation changes conformation, not connectivity.</text>
  </g>
 </svg>;
}
