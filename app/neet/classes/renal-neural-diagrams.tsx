import styles from './biology-practice/practice.module.css';

const boards = [
  {id:'nephron',title:'Nephron route and collecting duct',description:'The cortex is above the dashed boundary and medulla below. A is the renal corpuscle. Its tubular outlet leads to B, the proximal convoluted tubule, then C, the descending limb, D, the ascending limb, E, the distal convoluted tubule, and F, a collecting duct. Arrows show filtrate flow. F also receives fluid from other nephrons; it is shown for continuity and is not itself part of one nephron.'},
  {id:'renal-corpuscle',title:'Renal corpuscle: blood versus filtrate',description:'A labels an afferent arteriole entering the glomerular capillary tuft at B. D labels the efferent arteriole leaving the tuft. C labels the capsular space between the tuft and the surrounding capsule. E labels the outlet toward the proximal tubule. Solid arrows show blood flow; dashed arrows show filtration toward C and flow toward E. The capsule is cut open schematically at its vascular and tubular poles.'},
  {id:'neuron',title:'Typical myelinated multipolar neuron',description:'A labels branching dendrites on the left. B labels the cell body containing a nucleus. C points to the axon near its origin. D points to a myelin segment around the axon. E points to a gap between myelin segments, a node of Ranvier. F labels branching axon terminals on the right. A lower arrow indicates the usual functional route toward the terminals; this is not a universal shape for every neuron.'},
  {id:'synapse',title:'Typical chemical synapse close-up',description:'The presynaptic terminal is above the gap and the postsynaptic cell below. A labels a transmitter-containing vesicle. B points to the presynaptic membrane. C labels the synaptic cleft. D points to postsynaptic receptors at the lower membrane. Small dots represent released transmitter molecules, not whole vesicles. A downward arrow shows the illustrated chemical transmission direction.'},
];

export default function RenalNeuralDiagrams({chapter}:{chapter:number}) {
  const board=boards[Math.min(3,Math.max(0,Math.floor(chapter/2)))];
  const arrow=`url(#${board.id}-arrow)`;
  return <figure className={styles.figure}>
    <svg viewBox={board.id==='nephron'?'0 0 480 430':'0 0 480 380'} role="img" aria-labelledby={`${board.id}-title ${board.id}-desc`}>
      <title id={`${board.id}-title`}>{board.title}</title><desc id={`${board.id}-desc`}>{board.description}</desc>
      <defs><marker id={`${board.id}-arrow`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="currentColor"/></marker></defs>
      {board.id==='nephron'&&<>
        <path d="M20 180H460" stroke="currentColor" strokeDasharray="5 5"/><text x="20" y="160">Cortex</text><text x="20" y="207">Medulla</text>
        <g stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round">
          <circle cx="80" cy="80" r="29"/><path d="M64 70q12-20 26 0t-22 15q10 18 23-1"/>
          <path d="M109 80q10-34 29-10t26 0q19-14 22 12q-4 21-27 12t-20 12q6 22 34 9q27-11 27 18V310q0 45 35 45t35-45V140q0-25 24-25q22 0 16-25t25-12q24 19 4 30t21 19h45V380"/>
          <path d="M200 211v41" markerEnd={arrow}/><path d="M270 251v-41" markerEnd={arrow}/><path d="M405 245v44" markerEnd={arrow}/>
          <path d="M440 110v30l-35 22"/>
          <path d="M50 42l12 15M175 47l-10 20M160 255h34M300 255h-24M350 47l-10 28M435 255h-24" strokeWidth="1.5"/>
        </g><text x="32" y="38">A</text><text x="170" y="40">B</text><text x="141" y="261">C</text><text x="305" y="261">D</text><text x="350" y="40">E</text><text x="440" y="261">F</text><text x="250" y="411">Filtrate route →</text>
      </>}
      {board.id==='renal-corpuscle'&&<>
        <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <ellipse cx="230" cy="170" rx="100" ry="105"/>
          <path d="M45 100H180q55-38 80 5q27 30-17 40q-51 13-39-27q15-28 45 12t-35 35q-24 10-34-10H55"/>
          <path d="M80 100h48" markerEnd={arrow}/><path d="M125 155H80" markerEnd={arrow}/>
          <path d="M330 200h75v110"/><path d="M243 145L293 202M405 235v46" strokeDasharray="5 5" markerEnd={arrow}/>
          <path d="M65 71l25 24M325 80l-55 55M350 266l-50-41M65 194l30-34M410 331v-17" strokeWidth="1.5"/>
        </g><text x="48" y="64">A</text><text x="330" y="75">B</text><text x="355" y="277">C</text><text x="48" y="214">D</text><text x="405" y="354">E</text><text x="20" y="354">Solid: blood · dashed: filtrate</text>
      </>}
      {board.id==='neuron'&&<>
        <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <ellipse cx="105" cy="175" rx="45" ry="48"/><circle cx="103" cy="173" r="15"/>
          <path d="M70 145l-35-25-12-23m12 23-20 8m59 53-45 17-13 23m13-23-18-2m63 12-30 37-22 4m22-4 3 17M85 132l-8-34 10-20m-10 20-18-9"/>
          <path d="M150 175H395l30-45m-30 45 48-15m-48 15 45 35m-15-80 15-9m-15 9 1-14m17 44 14-3m-17 53 16 8m-16-8-3 14"/>
          {[185,250,315].map(x=><rect key={x} x={x} y="155" width="45" height="40" rx="15" fill="currentColor" fillOpacity="0.12"/>)}
          <path d="M35 75l5 40M105 240v-11M170 257v-75M275 107v42M240 300V184M435 103l-10 23" strokeWidth="1.5"/>
          <path d="M165 340H395" markerEnd={arrow}/>
        </g><text x="23" y="67">A</text><text x="100" y="265">B</text><text x="165" y="281">C</text><text x="270" y="98">D</text><text x="235" y="324">E</text><text x="435" y="96">F</text><text x="192" y="366">Usual signal route</text>
      </>}
      {board.id==='synapse'&&<>
        <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <rect x="70" y="50" width="340" height="115" rx="35"/><path d="M215 5v45m50-45v45"/>
          {[130,220,310].map(x=><circle key={x} cx={x} cy="110" r="13"/>)}
          <path d="M70 220h340v100H70Z"/>
          {[145,220,300,350].map(x=><path key={x} d={`M${x-8} 220v-14h16v14`}/>)}
          <path d="M180 177v27" markerEnd={arrow}/>
          <path d="M55 85l61 21M425 142l-31 17M55 191h33M425 244L358 212" strokeWidth="1.5"/>
        </g>{[[145,185],[225,193],[300,183]].map(([x,y])=><circle key={x} cx={x} cy={y} r="4" fill="currentColor"/>)}
        <text x="155" y="78">Presynaptic terminal</text><text x="165" y="283">Postsynaptic cell</text><text x="32" y="81">A</text><text x="433" y="145">B</text><text x="32" y="197">C</text><text x="433" y="253">D</text><text x="93" y="355">Dots: released transmitter</text>
      </>}
    </svg>
    <figcaption>Original schematic · not to scale. {board.title}. Letters apply only to this figure.</figcaption>
    <details><summary>Text equivalent of the diagram</summary><p>{board.description}</p></details>
  </figure>;
}
