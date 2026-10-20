import styles from "./lecture.module.css";

const blue = "#2878ac", green = "#247e68", red = "#ce5064", ink = "#52636b";
const descriptions = [
  "A force-position graph rises from 2 newtons at zero meters to 8 newtons at 3 meters. The trapezoidal area is 15 joules.",
  "A load moving upward at 2 meters per second has a 40 newton lifting force upward and weight downward. Useful power is 80 watts.",
  "An ideal compressed spring releases its 4 joules of elastic energy into a 2 kilogram block, giving 2 meters per second at natural length.",
  "A particle on a string moves in a vertical circle of radius 2 meters. At the limiting top condition tension is zero; bottom speed is 10 meters per second.",
  "A 2 kilogram particle at 6 meters per second collides with a stationary 1 kilogram particle. Elastic final speeds are 2 and 8; sticking speed is 4.",
  "Perpendicular momenta of 6 kilogram meters per second east and north combine into a 3 kilogram object's velocity of 2 meters per second east and north.",
];
function Label({ x, y, children }: { x: number; y: number; children: React.ReactNode }) {
  return <text x={x} y={y} fontSize="18">{children}</text>;
}
function Arrow({ x1, y1, x2, y2, color }: { x1: number; y1: number; x2: number; y2: number; color: string }) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const point = (a: number) => `${x2 - 9 * Math.cos(a)},${y2 - 9 * Math.sin(a)}`;
  return <g stroke={color} fill={color} strokeWidth="2.5"><line x1={x1} y1={y1} x2={x2} y2={y2} /><polygon points={`${x2},${y2} ${point(angle - .45)} ${point(angle + .45)}`} /></g>;
}
export default function EnergyApplicationsDiagram({ chapter }: { chapter: number }) {
  return <svg className={`${styles.forceDiagram} ${styles.applicationsDiagram}`} viewBox="0 0 440 320" role="img" aria-label={descriptions[chapter]}>
    {chapter === 0 && <>
      <path d="M65 230 H390 M65 230 V60" stroke={ink} fill="none" />
      <path d="M65 200 L345 110 V230 H65 Z" fill="#e7f2f8" stroke={blue} strokeWidth="2" />
      <Label x={25} y={36}>Net force (N)</Label><Label x={36} y={207}>2</Label><Label x={349} y={109}>8</Label>
      <Label x={62} y={253}>0</Label><Label x={321} y={253}>3 m</Label><Label x={153} y={191}>Area: 15 J</Label>
      <Label x={25} y={284}>W = [(2 + 8) / 2] x 3 = 15 J</Label>
      <Label x={25} y={310}>Position axis: work, not impulse</Label>
    </>}
    {chapter === 1 && <>
      <rect x="130" y="140" width="80" height="56" fill="#e7f2f8" stroke={blue} />
      <Label x={146} y={173}>4 kg</Label>
      <Arrow x1={170} y1={137} x2={170} y2={65} color={green} />
      <Arrow x1={170} y1={198} x2={170} y2={243} color={red} />
      <Arrow x1={310} y1={184} x2={310} y2={85} color={blue} />
      <Label x={35} y={49}>F = 40 N</Label><Label x={35} y={239}>mg = 40 N</Label>
      <Label x={247} y={67}>v = 2 m/s</Label>
      <Label x={25} y={283}>Useful power = Fv = 80 W</Label>
      <Label x={25} y={310}>80% efficiency: input = 100 W</Label>
    </>}
    {chapter === 2 && <>
      <path d="M35 70 V210 M35 150 H65 L75 135 L85 165 L95 135 L105 165 L115 135 L125 165 L135 150 H165 M35 210 H390" fill="none" stroke={ink} strokeWidth="2" />
      <rect x="165" y="130" width="75" height="80" fill="#e7f2f8" stroke={blue} />
      <Label x={175} y={174}>2 kg</Label>
      <Arrow x1={248} y1={171} x2={345} y2={171} color={green} />
      <Label x={25} y={40}>k = 200 N/m; compression = 0.20 m</Label>
      <Label x={260} y={146}>v = 2 m/s</Label>
      <Label x={25} y={258}>Initial: U = (1/2)kx^2 = 4 J</Label>
      <Label x={25} y={285}>At natural length: U = 0; K = 4 J</Label>
      <Label x={25} y={310}>Smooth floor; ideal light spring</Label>
    </>}
    {chapter === 3 && <>
      <circle cx="155" cy="155" r="80" stroke={blue} fill="none" strokeWidth="2" />
      <circle cx="155" cy="75" r="5" fill={red} /><circle cx="155" cy="235" r="5" fill={green} />
      <path d="M155 155 V235" stroke={ink} strokeDasharray="4 4" />
      <Arrow x1={155} y1={83} x2={155} y2={131} color={red} />
      <Arrow x1={155} y1={229} x2={155} y2={173} color={green} />
      <Arrow x1={155} y1={242} x2={155} y2={270} color={red} />
      <Label x={176} y={266}>mg</Label>
      <Label x={244} y={77}>Top: T = 0</Label><Label x={244} y={104}>v^2 = gr</Label>
      <Label x={27} y={38}>String circle: r = 2 m; g = 10</Label><Label x={170} y={195}>r</Label>
      <Label x={245} y={219}>Bottom:</Label><Label x={245} y={244}>v = 10 m/s</Label>
      <Label x={25} y={284}>For 1 kg: T_bottom = 60 N</Label>
      <Label x={25} y={310}>Energy + radial force condition</Label>
    </>}
    {chapter === 4 && <>
      <Label x={25} y={36}>Before: 2 kg at 6 m/s; 1 kg at rest</Label>
      <rect x="55" y="60" width="65" height="34" fill={blue} /><rect x="310" y="60" width="40" height="34" fill={green} />
      <Arrow x1={130} y1={77} x2={235} y2={77} color={blue} />
      <Label x={25} y={131}>Elastic: momentum and K conserved</Label>
      <rect x="55" y="153" width="65" height="34" fill={blue} /><rect x="245" y="153" width="40" height="34" fill={green} />
      <Arrow x1={128} y1={170} x2={170} y2={170} color={blue} />
      <Arrow x1={293} y1={170} x2={397} y2={170} color={green} />
      <Label x={60} y={216}>2 m/s</Label><Label x={250} y={216}>8 m/s</Label>
      <Label x={25} y={264}>Sticking instead: v = 4 m/s</Label>
      <Label x={25} y={289}>K: 36 J to 24 J; decrease = 12 J</Label>
      <Label x={25} y={313}>External impulse negligible</Label>
    </>}
    {chapter === 5 && <>
      <Arrow x1={80} y1={217} x2={225} y2={217} color={blue} />
      <Arrow x1={80} y1={217} x2={80} y2={72} color={green} />
      <Arrow x1={80} y1={217} x2={225} y2={72} color={red} />
      <path d="M225 217 V72 H80" stroke={ink} strokeDasharray="4 4" fill="none" />
      <Label x={25} y={37}>Sticking: momentum components</Label>
      <Label x={140} y={244}>px = 6 kg m/s</Label><Label x={92} y={94}>py = 6 kg m/s</Label>
      <Label x={240} y={72}>Total p</Label>
      <Label x={25} y={285}>3 kg: v = (2, 2) m/s northeast</Label>
      <Label x={25} y={310}>Speed = 2 sqrt(2); K decreases 15 J</Label>
    </>}
  </svg>;
}
