import styles from "./lecture.module.css";

export default function OscillationDiagram({chapter}: {chapter: number}) {
  const titles = ["Acceleration points toward equilibrium", "A quarter cycle: end to center", "A spring and mass set the period", "Energy changes form, not total", "Small-angle simple pendulum"];
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label={titles[chapter]}>
    <text x="20" y="28" fontSize="17">{titles[chapter]}</text>
    {chapter === 0 && <>
      <line x1="45" y1="125" x2="395" y2="125" stroke="#718780" />
      <line x1="220" y1="60" x2="220" y2="175" stroke="#718780" strokeDasharray="5 5" />
      <circle cx="95" cy="125" r="16" fill="#247e68" /><circle cx="345" cy="125" r="16" fill="#2878ac" />
      <path d="M115 95 H185 l-12 -7 m12 7 l-12 7 M325 95 H255 l12 -7 m-12 7 l12 7" fill="none" stroke="#c05d28" strokeWidth="3" />
      <text x="68" y="165">x &lt; 0</text><text x="312" y="165">x &gt; 0</text>
      <text x="154" y="205">equilibrium x = 0</text><text x="72" y="239" fontSize="16">At the center: a = 0, speed is greatest</text>
    </>}
    {chapter === 1 && <>
      <line x1="55" y1="138" x2="395" y2="138" stroke="#718780" />
      <path d="M55 75 Q140 75 225 138 Q310 201 395 201" fill="none" stroke="#2878ac" strokeWidth="3" />
      <text x="26" y="76">+A</text><text x="30" y="145">0</text><text x="26" y="208">-A</text>
      <text x="55" y="230">0</text><text x="205" y="230">T/4</text><text x="365" y="230">T/2</text>
      <text x="99" y="258" fontSize="15">x = A cos(omega t), starting at +A</text>
    </>}
    {chapter === 2 && <>
      <path d="M45 65 V170 M45 115 H65 l10 -18 l20 36 l20 -36 l20 36 l20 -36 l20 36 l10 -18 H235" stroke="#247e68" strokeWidth="3" fill="none" />
      <rect x="235" y="88" width="75" height="55" fill="#d9edf7" stroke="#2878ac" />
      <text x="257" y="122">m</text><text x="127" y="70">k</text>
      <text x="64" y="192">m = 0.5 kg, k = 200 N/m</text><text x="64" y="228">omega = 20 rad/s</text>
      <text x="64" y="254" fontSize="16">T = 0.314 s; four times m doubles T</text>
    </>}
    {chapter === 3 && <>
      <text x="30" y="67" fontSize="16">At x = 0.06 m, with A = 0.10 m</text>
      <rect x="50" y="100" width="122.4" height="55" fill="#c8e7dc" /><rect x="172.4" y="100" width="217.6" height="55" fill="#d9edf7" />
      <text x="65" y="133" fontSize="16">U = 0.36 J</text><text x="207" y="133" fontSize="16">K = 0.64 J</text>
      <text x="89" y="190">Total E = 1.00 J</text><text x="89" y="230">Speed = 1.60 m/s</text>
    </>}
    {chapter === 4 && <>
      <line x1="110" y1="50" x2="110" y2="195" stroke="#718780" strokeDasharray="5 5" />
      <line x1="110" y1="50" x2="145" y2="190" stroke="#247e68" strokeWidth="3" /><circle cx="145" cy="190" r="14" fill="#2878ac" />
      <path d="M110 98 Q120 100 122 97" stroke="#c05d28" fill="none" /><text x="134" y="105" fontSize="16">theta</text>
      <text x="215" y="97">L = 1 m</text><text x="215" y="132">T = 2.01 s</text>
      <text x="215" y="175" fontSize="16">Small angles only:</text><text x="215" y="200" fontSize="16">sin(theta) ~ theta</text>
      <text x="61" y="248" fontSize="16">Bob mass cancels; large swings take longer</text>
    </>}
  </svg>;
}
