import styles from "./lecture.module.css";

const titles = ["Number the alcohol parent", "Test both alkene carbons", "Two electron-pair arrows", "Adjacent orbitals allow resonance", "A two-unit pKa difference"];
export default function OrganicPrinciplesDiagram({ chapter }: { chapter: number }) {
  return <svg className={styles.diagram} viewBox="0 0 460 300" role="img" aria-label={titles[chapter]}>
    <title>{titles[chapter]}</title>
    <rect width="460" height="300" rx="12" fill="#f5faf7" />
    <defs><marker id="organic-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#b54e32" /></marker></defs>
    <g fontFamily="Arial, sans-serif" fill="#20483e" fontSize="16">
      <text x="230" y="28" textAnchor="middle" fontWeight="bold">{titles[chapter]}</text>
      {chapter === 0 && <>
        <text x="45" y="140">CH₃</text><text x="155" y="140">CH</text><text x="270" y="140">CH</text><text x="375" y="140">CH₃</text>
        <path d="M88 134H145M190 134H260M305 134H365M170 118V84M285 150V182" stroke="#146b55" strokeWidth="3" />
        <text x="155" y="74">OH</text><text x="270" y="205">CH₃</text>
        {[65, 170, 285, 395].map((x,i) => <text key={x} x={x} y="110" textAnchor="middle" fill="#b54e32" fontSize="14">{i+1}</text>)}
        <text x="230" y="247" textAnchor="middle">OH at 2; methyl at 3</text>
        <text x="230" y="276" textAnchor="middle">3-methylbutan-2-ol · C₅H₁₂O</text>
      </>}
      {chapter === 1 && <>
        <text x="26" y="82" fontWeight="bold">CH₂=CHCl</text><text x="230" y="82" fontWeight="bold">CH₃CH=CHCH₃</text>
        <text x="26" y="117">One carbon: H and H</text><text x="230" y="117">Each carbon: H and CH₃</text>
        <text x="26" y="151" fill="#b54e32">No cis/trans pair</text><text x="230" y="151" fill="#146b55">Cis/trans possible</text>
        <path d="M25 178H435" stroke="#b7cfc5" />
        <text x="230" y="211" textAnchor="middle">Isomers: different structures</text>
        <text x="230" y="240" textAnchor="middle">Resonance: same atoms and connectivity</text>
        <text x="230" y="269" textAnchor="middle">Only electron placement changes</text>
      </>}
      {chapter === 2 && <>
        <text x="38" y="125" fontSize="22">HO⁻</text><text x="181" y="125" fontSize="22">CH₃</text><text x="339" y="125" fontSize="22">Br</text>
        <path d="M235 117H326" stroke="#146b55" strokeWidth="3" />
        <path d="M67 102Q122 40 198 101M280 110Q311 64 352 100" fill="none" stroke="#b54e32" strokeWidth="3" markerEnd="url(#organic-arrow)" />
        <text x="112" y="66" fill="#b54e32">1</text><text x="311" y="74" fill="#b54e32">2</text>
        <text x="230" y="166" textAnchor="middle">Schematic electron-pair movement</text>
        <text x="230" y="207" textAnchor="middle">Products: CH₃OH + Br⁻</text>
        <text x="230" y="242" textAnchor="middle">1: O lone pair → methyl carbon</text>
        <text x="230" y="271" textAnchor="middle">2: C–Br pair → Br · net charge stays −1</text>
      </>}
      {chapter === 3 && <>
        <text x="230" y="88" textAnchor="middle" fontSize="21">CH₂=CH–CH₂⁺ ↔ ⁺CH₂–CH=CH₂</text>
        <text x="230" y="124" textAnchor="middle" fill="#146b55">Direct allylic resonance</text>
        <text x="230" y="157" textAnchor="middle">Same nuclei; same total charge +1</text>
        <path d="M25 181H435" stroke="#b7cfc5" />
        <text x="230" y="218" textAnchor="middle" fontSize="21">CH₂=CH–CH₂–CH₂⁺</text>
        <text x="230" y="253" textAnchor="middle" fill="#b54e32">Saturated spacer interrupts conjugation</text>
      </>}
      {chapter === 4 && <>
        <text x="45" y="82" fontWeight="bold">Acid A</text><text x="275" y="82" fontWeight="bold">Acid B</text>
        <text x="45" y="119">pKa = 3</text><text x="275" y="119">pKa = 5</text>
        <text x="45" y="153">Ka = 10⁻³</text><text x="275" y="153">Ka = 10⁻⁵</text>
        <text x="230" y="198" textAnchor="middle" fontSize="21" fill="#146b55">Ka(A) / Ka(B) = 100</text>
        <text x="230" y="235" textAnchor="middle">A is stronger; its conjugate base is weaker</text>
        <text x="230" y="270" textAnchor="middle">Same solvent and temperature</text>
      </>}
    </g>
  </svg>;
}
