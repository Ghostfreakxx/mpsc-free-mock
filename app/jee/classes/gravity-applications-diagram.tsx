import Image from "next/image";
import styles from "./lecture.module.css";

export default function GravityApplicationsDiagram({ chapter }: { chapter: number }) {
  if (chapter === 0) return <Image src="/lectures/foundations/gravity-applications.png" width={1200} height={640} style={{ width: "100%", height: "auto" }} alt="Uniform-density interior gravity rises from zero to g0 at radius R. Outside the spherical planet, gravity decreases with inverse-square radius, reaching g0/4 at 2R. Rotation is neglected." />;
  return <svg className={styles.forceDiagram} viewBox="0 0 440 270" role="img" aria-label="An ellipse has periapsis R and apoapsis 3R measured from its left focus. Its semi-major axis is 2R; the speed at periapsis is three times the speed at apoapsis.">
    <ellipse cx="220" cy="135" rx="160" ry="100" fill="none" stroke="#245e94" strokeWidth="2" />
    <circle cx="140" cy="135" r="12" fill="#276b4b" />
    <circle cx="60" cy="135" r="5" fill="#a54434" />
    <circle cx="380" cy="135" r="5" fill="#a54434" />
    <path d="M60 135H380" stroke="#68716e" strokeDasharray="4 4" />
    <text x="93" y="120">R</text><text x="250" y="120">3R</text>
    <text x="137" y="165">Attracting focus</text>
    <text x="220" y="24" textAnchor="middle">Same angular momentum; unequal speed</text>
    <text x="220" y="258" textAnchor="middle">a = 2R; v_near = 3 v_far</text>
  </svg>;
}
