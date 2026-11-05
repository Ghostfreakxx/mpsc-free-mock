import styles from './practice.module.css';

const descriptions: Record<string, string> = {
  chloroplast: 'An oval has two surrounding boundary lines marked D. Inside, A brackets a stack of five flattened sacs, B points to the membrane edge of one sac, and C points to the fluid space between the stack and the surrounding boundary.',
  circulation: 'Arrows form a cycle: body → A → B → lungs → C → D → body. A and C are the receiving chambers; B and D are the pumping chambers. This shows connectivity, not anatomical left–right placement.',
  'embryo-sac': 'An elongated sac has the chalazal end at the top and the micropylar end at the bottom. A labels three separate cells at the top. B labels two separate nuclei in the large central cell. At the bottom C labels the middle cell, and D labels the two cells flanking it. Each of the seven cells has one nucleus except the central cell, which has two.',
  'energy-flow': 'Four boxes are connected by downward arrows on successive rows: A grass with 10,000 kJ → B grasshopper → C frog → D snake. Use 10% energy transfer per step only for the stated calculation; this is a simplified grazing chain.',
};

export default function BiologyDiagram({ id }: { id: string }) {
  if (!descriptions[id]) return null;
  return <figure className={styles.figure}>
    <svg viewBox="0 0 440 350" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>{id === 'embryo-sac' ? 'Typical Polygonum-type embryo sac' : `${id} interpretation schematic`}</title>
      <desc id={`${id}-desc`}>{descriptions[id]}</desc>
      <defs><marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="currentColor" /></marker></defs>
      {id === 'chloroplast' && <>
        <g fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="220" cy="180" rx="200" ry="125" /><ellipse cx="220" cy="180" rx="188" ry="113" />{[130,148,166,184,202].map(y => <rect key={y} x="105" y={y} width="120" height="14" rx="7" />)}<path d="M90 125H78V220H90M245 103L219 135M300 220L330 240M310 78L348 44" /></g>
        <text x="48" y="180">A</text><text x="245" y="99">B</text><text x="290" y="216">C</text><text x="350" y="40">D</text>
      </>}
      {id === 'circulation' && <>
        <g fill="none" stroke="currentColor" strokeWidth="2">{[50,190].flatMap(y => [95,275].map(x => <rect key={`${x}-${y}`} x={x} y={y} width="70" height="65" rx="8" />))}<path markerEnd={`url(#${id}-arrow)`} d="M130 118V184" /><path markerEnd={`url(#${id}-arrow)`} d="M310 184V121" /><path markerEnd={`url(#${id}-arrow)`} d="M130 258V310H310V258" /><path markerEnd={`url(#${id}-arrow)`} d="M310 47V20H130V47" /></g>
        <text x="122" y="89">A</text><text x="122" y="229">B</text><text x="302" y="229">C</text><text x="302" y="89">D</text><text x="170" y="340">Lungs</text><text x="170" y="16">Body</text>
      </>}
      {id === 'embryo-sac' && <>
        <g fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="220" cy="175" rx="105" ry="140" />{[175,220,265].map(x => <g key={x}><ellipse cx={x} cy="82" rx="20" ry="27" /><circle cx={x} cy="82" r="5" /></g>)}<circle cx="200" cy="175" r="10" /><circle cx="240" cy="175" r="10" />{[170,220,270].map(x => <g key={x}><ellipse cx={x} cy="260" rx="22" ry="34" /><circle cx={x} cy="260" r="5" /></g>)}<path d="M330 75H290M330 170H257M220 310V300M92 260H145M92 260V310H270V297" /></g>
        <text x="170" y="22">Chalazal end</text><text x="167" y="344">Micropylar end</text><text x="338" y="82">A</text><text x="338" y="177">B</text><text x="210" y="328">C</text><text x="65" y="266">D</text>
      </>}
      {id === 'energy-flow' && <>
        <g fill="none" stroke="currentColor" strokeWidth="2">{[20,105,190,275].map(y => <rect key={y} x="70" y={y} width="300" height="50" rx="8" />)}{[70,155,240].map(y => <path key={y} markerEnd={`url(#${id}-arrow)`} d={`M220 ${y+3}V${y+30}`} />)}</g>
        <text x="92" y="52">A · Grass · 10,000 kJ</text><text x="92" y="137">B · Grasshopper</text><text x="92" y="222">C · Frog</text><text x="92" y="307">D · Snake</text>
      </>}
    </svg>
    <figcaption>Original schematic · not to scale. Use labels A–D for this set.</figcaption>
    <details><summary>Text equivalent of the diagram</summary><p>{descriptions[id]}</p></details>
  </figure>;
}
