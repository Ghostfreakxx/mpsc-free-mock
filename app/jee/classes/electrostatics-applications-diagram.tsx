import Image from "next/image";
import styles from "./lecture.module.css";

export default function ElectrostaticsApplicationsDiagram({ chapter }: { chapter: number }) {
  if (chapter === 0) return <Image className={styles.forceDiagram} src="/lectures/foundations/electrostatics-applications.png" width={1200} height={640} alt="Ring-axis field components add while transverse components cancel; dipole axial fields depend on distinct source distances r-a and r+a." />;
  const geometry = chapter === 1;
  return <svg className={styles.forceDiagram} viewBox="0 0 460 320" role="img" aria-label={geometry ? "Exact dipole distances 0.20 and 0.40 m give opposing fields 225 and 56.25 N/C, net 168.75 N/C; the far-field value is 133.33 N/C." : "Dipole orientation energy rises from -8 microJ parallel to zero perpendicular; quasistatic external work is +8 microJ and field work is -8 microJ."}>
    <text x="18" y="30" fontSize="17">{geometry ? "Keep the exact source distances" : "Whose work is the question asking for?"}</text>
    {geometry ? <>
      <path d="M50 145H410" stroke="#68716e" strokeWidth="2" /><circle cx="80" cy="145" r="12" fill="#245e94" /><circle cx="200" cy="145" r="12" fill="#14745c" /><circle cx="320" cy="145" r="6" fill="#203a34" />
      <text x="60" y="115" fontSize="16">-q</text><text x="185" y="115" fontSize="16">+q</text><text x="313" y="115" fontSize="16">P</text>
      <text x="65" y="182" fontSize="14">-0.10 m</text><text x="175" y="182" fontSize="14">+0.10 m</text><text x="300" y="182" fontSize="14">+0.30 m</text>
      <text x="35" y="225" fontSize="16">Exact: 225 - 56.25 = 168.75 N/C</text><text x="35" y="266" fontSize="16">Far-field approximation: 133.33 N/C</text><text x="35" y="303" fontSize="14">Here the approximation is about 21% low</text>
    </> : <>
      <text x="35" y="85" fontSize="16">Parallel: U = -pE = -8 microJ</text><text x="35" y="128" fontSize="16">Perpendicular: U = 0</text>
      <path d="M35 155H420" stroke="#68716e" /><text x="35" y="190" fontSize="16">External work: +8 microJ</text><text x="35" y="233" fontSize="16">Field work: -8 microJ</text>
      <text x="35" y="278" fontSize="14">Slow rotation; negligible kinetic-energy change</text><text x="35" y="306" fontSize="14">Uniform field: zero net force can coexist with torque</text>
    </>}
  </svg>;
}
