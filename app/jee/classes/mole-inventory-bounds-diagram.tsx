import styles from'./lecture.module.css';import{hydrateCropInventory as d}from'./mole-inventory-bounds-data';
export default function MoleInventoryBoundsDiagram(){const title='Hydrated crystals carry both solute and water';return <svg className={styles.diagram} viewBox="0 0 460 340" role="img" aria-label={title}>
<title>{title}</title><rect width="460" height="340" rx="12" fill="#f5faf7"/>
<g fill="#20483e" fontFamily="Arial, sans-serif" textAnchor="middle">
<text x="230" y="29" fontSize="16" fontWeight="bold" textLength="418" lengthAdjust="spacingAndGlyphs">{title}</text>
<rect x="100" y="52" width="260" height="65" rx="8" fill="#dcece4"/><text x="230" y="77" fontSize="15">Feed: {d.feed.solute+d.feed.water} g</text><text x="230" y="101" fontSize="14">{d.feed.solute} g S + {d.feed.water} g water</text>
<path d="M230 119V136H120V158m-6 -8l6 8l6 -8M230 136H340V158m-6 -8l6 8l6 -8" stroke="#497f6d" strokeWidth="2" fill="none"/>
<rect x="16" y="166" width="208" height="84" rx="8" fill="#cbe0ed"/><rect x="236" y="166" width="208" height="84" rx="8" fill="#dcece4"/>
<text x="120" y="190" fontSize="14">Pure hydrate crop: {(d.crystal.solute+d.crystal.water).toFixed(1)} g</text><text x="120" y="215" fontSize="14">{d.crystal.solute.toFixed(1)} g S</text><text x="120" y="238" fontSize="14">{d.crystal.water.toFixed(1)} g water</text>
<text x="340" y="190" fontSize="14">Mother liquor: {(d.motherLiquor.solute+d.motherLiquor.water).toFixed(1)} g</text><text x="340" y="215" fontSize="14">{d.motherLiquor.solute.toFixed(1)} g S</text><text x="340" y="238" fontSize="14">{d.motherLiquor.water.toFixed(1)} g water</text>
<text x="230" y="280" fontSize="14">Anhydrous solute recovery = 10 / 20 = 50%</text>
<text x="230" y="306" fontSize="12">Mother-liquor S mass fraction = 10 / 86.4 = 11.57%</text>
<text x="230" y="328" fontSize="11">Supplied S·2H₂O crop; no evaporation, entrainment or other loss.</text>
</g></svg>;}
