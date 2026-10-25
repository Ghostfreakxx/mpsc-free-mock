import styles from './lecture.module.css';
export default function ReversibleRelaxationDiagram(){
 const x=(t:number)=>55+14*t,y=(c:number)=>270-600*c;
 const curve=(a:boolean)=>Array.from({length:101},(_,i)=>{const t=i/4,c=a ? .100+.200*Math.exp(-.150*t) : .200*(1-Math.exp(-.150*t));return `${i?'L':'M'}${x(t).toFixed(2)},${y(c).toFixed(2)}`;}).join(' ');
 const half=Math.log(2)/.150;
 return <svg className={styles.diagram} viewBox="0 0 460 340" role="img" aria-label="Reversible first-order relaxation: A falls from .300 toward .100 molar, B rises from zero toward .200 molar. At 4.62 minutes A is .200 and B is .100; distance to equilibrium halves.">
  <title>Halfway to equilibrium is not half of A</title><rect width="460" height="340" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" fill="#20483e">
   <text x="230" y="25" textAnchor="middle" fontSize="17" fontWeight="bold">Halfway to equilibrium is not half of A</text>
   <text x="230" y="47" textAnchor="middle" fontSize="12">A ⇌ B; kf = .100/min; kr = .0500/min; A + B = .300 M</text>
   <path d="M55 70 V270 H415" fill="none" stroke="#20483e" strokeWidth="1.5"/>
   {[0,.1,.2,.3].map(c=><g key={c}><line x1="51" x2="405" y1={y(c)} y2={y(c)} stroke="#c4d7cd" strokeDasharray="3 4"/><text x="45" y={y(c)+4} textAnchor="end" fontSize="12">{c.toFixed(1)}</text></g>)}
   {[0,5,10,15,20,25].map(t=><text key={t} x={x(t)} y="289" textAnchor="middle" fontSize="12">{t}</text>)}
   <text x="25" y="76" fontSize="12">M</text><text x="390" y="306" fontSize="12">t / min</text>
   <path d={curve(true)} fill="none" stroke="#2861a1" strokeWidth="3"/><path d={curve(false)} fill="none" stroke="#b34c2f" strokeWidth="3"/>
   <text x="320" y="232" fontSize="13" fill="#2861a1">A → .100 M</text><text x="320" y="137" fontSize="13" fill="#b34c2f">B → .200 M</text>
   <line x1={x(half)} x2={x(half)} y1="80" y2="270" stroke="#597865" strokeDasharray="5 4"/>
   <circle cx={x(half)} cy={y(.2)} r="4" fill="#2861a1"/><circle cx={x(half)} cy={y(.1)} r="4" fill="#b34c2f"/>
   <text x="163" y="83" fontSize="12">At 4.62 min: A=.200, B=.100 M</text>
   <text x="230" y="327" textAnchor="middle" fontSize="12">Deviation decays as exp[−(kf + kr)t]; supporting model</text>
  </g>
 </svg>;
}
