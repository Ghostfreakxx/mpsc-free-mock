import styles from './lecture.module.css';
export default function FructoseFischerDiagram(){
 return <svg className={styles.diagram} viewBox="0 0 460 310" role="img" aria-label="Open-chain D-fructose Fischer projection: C2 ketone; OH left at C3, right at C4 and C5">
  <title>D-fructose: open-chain configuration reference</title>
  <rect width="460" height="310" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" fill="#20483e" textAnchor="middle">
   <text x="230" y="25" fontSize="17" fontWeight="bold">D-fructose: Fischer projection</text>
   <g stroke="#376355" strokeWidth="2">
    <path d="M135 61V228 M96 119H174 M96 157H174 M96 195H174 M143 80H181 M143 86H181"/>
   </g>
   <rect x="128" y="73" width="14" height="18" fill="#f5faf7"/>
   <g fontSize="16">
    <text x="135" y="55">CH₂OH</text><text x="135" y="89" fill="#a13c2b">C</text><text x="194" y="89">O</text>
    {[{y:124,left:'OH',right:'H'},{y:162,left:'H',right:'OH'},{y:200,left:'H',right:'OH'}].map(({y,left,right})=><g key={y}><text x="76" y={y}>{left}</text><text x="194" y={y}>{right}</text></g>)}
    <text x="135" y="245">CH₂OH</text>
   </g>
   <g fontSize="12" textAnchor="start" fill="#526c62">{[55,89,124,162,200,245].map((y,i)=><text key={i} x="28" y={y}>C{i+1}</text>)}</g>
   <g textAnchor="start" fontSize="13">
    <text x="235" y="69">C2: ketone carbon</text>
    <text x="235" y="103">C3 / C4 / C5 OH:</text><text x="235" y="124" fontWeight="bold">left / right / right</text>
    <text x="235" y="158">Three stereocentres</text><text x="235" y="179">2³ = 8 configurations</text>
    <text x="235" y="213">C5 OH right → D here</text><text x="235" y="234">D ≠ optical rotation sign</text>
   </g>
   <text x="230" y="276" fontSize="12">Horizontal bonds toward viewer; vertical bonds away.</text>
   <text x="230" y="295" fontSize="12">Cyclic forms also occur; C2 becomes the anomeric centre.</text>
  </g>
 </svg>;
}
