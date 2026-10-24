import styles from "./lecture.module.css";

export default function CarbonylDerivativeDiagram() {
  return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label="Acetone forms an oxime with hydroxylamine and a hydrazone with hydrazine. Each net condensation eliminates one water molecule and retains three carbons.">
    <title>Two nitrogen derivatives, the same carbon count</title>
    <rect width="460" height="320" rx="12" fill="#f5faf7"/>
    <defs><marker id="derivative-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#20483e"/></marker></defs>
    <g fontFamily="Arial, sans-serif" textAnchor="middle" fill="#20483e">
      <text x="230" y="29" fontSize="18" fontWeight="bold">Carbonyl condensation derivatives</text>
      <text x="230" y="65" fontSize="19">Acetone: (CH₃)₂C=O</text>
      <text x="230" y="89" fontSize="14">C₃H₆O</text>
      <path d="M218 104L117 158 M242 104L343 158" fill="none" stroke="#20483e" strokeWidth="2" markerEnd="url(#derivative-arrow)"/>
      <text x="111" y="120" fontSize="15">+ NH₂OH</text>
      <text x="352" y="120" fontSize="15">+ N₂H₄</text>
      {[{x:117,name:"Oxime",structure:"(CH₃)₂C=N–OH",formula:"C₃H₇NO"},{x:343,name:"Hydrazone",structure:"(CH₃)₂C=N–NH₂",formula:"C₃H₈N₂"}].map(item=><g key={item.name}>
        <rect x={item.x-102} y="174" width="204" height="91" rx="7" fill="#dfede6"/>
        <text x={item.x} y="198" fontSize="16" fontWeight="bold">{item.name}</text>
        <text x={item.x} y="225" fontSize="16">{item.structure}</text>
        <text x={item.x} y="250" fontSize="15">{item.formula}</text>
      </g>)}
      <text x="230" y="289" fontSize="14">Each net condensation eliminates one H₂O.</text>
      <text x="230" y="311" fontSize="12">Net transformations shown; conversion depends on conditions.</text>
    </g>
  </svg>;
}
