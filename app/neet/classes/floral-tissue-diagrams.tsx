import styles from './biology-practice/practice.module.css';

const boards=[
 {id:'flower',title:'Flower: schematic longitudinal view',description:'A labels the stigma at the top of the central carpel. H points to the style below it. B labels an anther on the left and C its supporting filament. D points to a petal on the right. E points to a sepal at the base. F points to the ovary wall and G to an ovule inside the ovary. Only selected organs are shown; their number and relative sizes are not a floral formula or a species diagnosis.'},
 {id:'placentation',title:'Placentation: three comparative schematics',description:'Panel A is a longitudinally opened ovary with ovules attached along one margin, illustrating marginal placentation. Panels B and C are transverse sections. B has septa meeting at a central axis with attached ovules, illustrating axile placentation. C has ovules attached to the inner peripheral wall without the illustrated central septa, illustrating parietal placentation. Small circles indicate ovules. These simplified patterns omit additional species-specific features.'},
 {id:'plant-tissues',title:'Simple plant tissues: comparative cell sections',description:'A shows thin-walled parenchyma cells with nuclei and intercellular spaces. B shows living collenchyma cells with uneven corner thickening and nuclei. C shows thick-walled mature sclerenchyma cells with narrow lumens and no living protoplast represented. Small solid dots in A and B represent nuclei; blank centres in C are lumens, not nuclei. Stains, wall chemistry and developmental context need additional evidence in a real specimen.'},
 {id:'animal-tissues',title:'Animal tissues: lining, matrix and muscle',description:'Panel A shows a single layer of flattened epithelial cells on a basement membrane. Panel B shows cells dispersed within extracellular matrix containing fibres. Panel C shows parallel striated skeletal-muscle fibres with multiple peripheral nuclei represented. Each panel is a schematic in a different viewing orientation; apparent line spacing and drawing scale are not quantitative diagnostic measurements.'},
];

export default function FloralTissueDiagrams({chapter}:{chapter:number}){
 const board=boards[Math.min(3,Math.max(0,Math.floor(chapter/2)))];
 return <figure className={styles.figure}>
  <svg viewBox="0 0 480 430" role="img" aria-labelledby={`${board.id}-title ${board.id}-desc`}>
   <title id={`${board.id}-title`}>{board.title}</title><desc id={`${board.id}-desc`}>{board.description}</desc>
   {board.id==='flower'&&<>
    <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
     <path d="M220 300C165 270 95 220 90 150C160 135 210 200 220 245ZM260 300C315 270 385 220 390 150C320 135 270 200 260 245Z"/>
     <path d="M160 250V153M320 250V153"/><ellipse cx="160" cy="140" rx="18" ry="12"/><ellipse cx="320" cy="140" rx="18" ry="12"/>
     <ellipse cx="240" cy="88" rx="25" ry="12"/><path d="M233 100V226M247 100V226"/><ellipse cx="240" cy="280" rx="50" ry="55"/>
     {[[240,280],[220,300],[260,300]].map(([x,y])=><circle key={x} cx={x} cy={y} r="7"/>)}
     <path d="M220 325Q165 287 120 295Q147 345 220 325ZM260 325Q315 287 360 295Q333 345 260 325Z"/>
     <ellipse cx="240" cy="337" rx="40" ry="10"/><path d="M235 347v53m10-53v53"/>
     <path d="M240 45V72M90 110l51 22M90 210h64M415 210h-45M395 345l-58-26M395 285l-99-5M90 280h142M395 70L253 145" strokeWidth="1.3"/>
    </g><text x="235" y="35">A</text><text x="70" y="115">B</text><text x="70" y="216">C</text><text x="425" y="216">D</text><text x="405" y="355">E</text><text x="405" y="291">F</text><text x="70" y="286">G</text><text x="405" y="75">H</text>
   </>}
   {board.id==='placentation'&&<>
    <g fill="none" stroke="currentColor" strokeWidth="2.5">
     <ellipse cx="90" cy="170" rx="44" ry="90"/><path d="M65 103v133" strokeWidth="4"/>{[120,160,200].map(y=><g key={y}><path d={`M65 ${y}h10`}/><circle cx="83" cy={y} r="8"/></g>)}
     <circle cx="240" cy="170" r="65"/><path d="M240 105v65l56 32m-56-32-56 32"/><circle cx="240" cy="170" r="10"/>{[[224,155],[256,155],[240,194]].map(([x,y])=><g key={x}><path d={`M240 170L${x} ${y}`}/><circle cx={x} cy={y} r="7" fill="currentColor" fillOpacity="0.1"/></g>)}
     <circle cx="390" cy="170" r="65"/>{[[390,123,390,105],[350,193,334,202],[430,193,446,202]].map(([x,y,a,b])=><g key={x}><path d={`M${a} ${b}L${x} ${y}`}/><circle cx={x} cy={y} r="8"/></g>)}
    </g><text x="84" y="53">A</text><text x="234" y="53">B</text><text x="384" y="53">C</text><text x="77" y="290">LS</text><text x="226" y="290">TS</text><text x="376" y="290">TS</text><text x="90" y="350">Small circles = ovules</text><text x="83" y="382">Compare attachment, not letter order</text>
   </>}
   {board.id==='plant-tissues'&&<>
    <g fill="none" stroke="currentColor" strokeWidth="2">
     {[[40,100],[100,100],[40,164],[100,164]].map(([x,y])=><g key={`${x}-${y}`}><rect x={x} y={y} width="51" height="53" rx="9"/><circle cx={x+17} cy={y+27} r="4" fill="currentColor"/></g>)}
     {[[183,100],[240,100],[183,157],[240,157]].map(([x,y])=><g key={`${x}-${y}`}><rect x={x} y={y} width="57" height="57"/><path d={`M${x+9} ${y}h-9v9m48-9h9v9m0 39v9h-9m-39 0h-9v-9`} strokeWidth="7"/><circle cx={x+26} cy={y+29} r="4" fill="currentColor"/></g>)}
     {[[340,100],[397,100],[340,157],[397,157]].map(([x,y])=><g key={`${x}-${y}`}><rect x={x} y={y} width="57" height="57" fill="currentColor" fillOpacity="0.18"/><rect x={x+13} y={y+13} width="31" height="31" rx="3"/></g>)}
    </g><text x="87" y="60">A</text><text x="235" y="60">B</text><text x="390" y="60">C</text><text x="40" y="270">Thin walls</text><text x="185" y="270">Thick corners</text><text x="340" y="270">Narrow lumens</text><text x="40" y="325">Dots in A/B = nuclei</text><text x="40" y="357">Wall pattern + living state + context</text>
   </>}
   {board.id==='animal-tissues'&&<>
    <text x="25" y="70">A</text><text x="25" y="187">B</text><text x="25" y="313">C</text>
    <g fill="none" stroke="currentColor" strokeWidth="2">
     {[70,130,190,250,310,370].map(x=><g key={x}><path d={`M${x} 85q30-35 60 0Z`}/><ellipse cx={x+30} cy="77" rx="8" ry="4" fill="currentColor"/></g>)}<path d="M65 91h370" strokeWidth="4"/>
     <rect x="65" y="130" width="370" height="105" rx="8"/>{[0,1,2].map(i=><path key={i} d={`M78 ${148+i*27}q75-24 130 0t210 0`}/>)}{[[110,171],[240,202],[365,159]].map(([x,y])=><ellipse key={x} cx={x} cy={y} rx="13" ry="7" fill="currentColor" fillOpacity="0.16"/>)}
     {[270,312,354].map(y=><g key={y}><rect x="65" y={y} width="370" height="30" rx="5"/>{[95,130,165,200,235,270,305,340,375,410].map(x=><path key={x} d={`M${x} ${y+3}v24`}/>)}{[115,290,385].map(x=><ellipse key={x} cx={x} cy={y+5} rx="8" ry="3" fill="currentColor"/>)}</g>)}
    </g><text x="125" y="417">Compare arrangement and matrix</text>
   </>}
  </svg>
  <figcaption>Original schematic · not to scale. {board.title}. Letter meanings are local to each figure.</figcaption>
  <details><summary>Text equivalent of the diagram</summary><p>{board.description}</p></details>
 </figure>;
}
