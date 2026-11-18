import gsap from "gsap";
import { useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { CanvasTexture, SRGBColorSpace, type MeshBasicMaterial } from "three";
import { classroomCaptions, type ClassroomLesson } from "../lib/classroom-lesson";
import { subjects, teachingModes } from "../lib/tochhawng-teachers";

export default function RoomBlackboard({ lesson, reducedMotion }: {
  lesson: ClassroomLesson | null; reducedMotion: boolean;
}) {
  const ink = useRef<MeshBasicMaterial>(null);
  const invalidate = useThree(state => state.invalidate);
  const map = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 640;
    canvas.height = 384;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.fillStyle = "#eccf8c";
    ctx.font = "600 25px system-ui";
    ctx.fillText(lesson ? `${subjects[lesson.subject]} · ${teachingModes[lesson.mode]}` : "TOCHHAWNG TEACHERS", 36, 65, 568);
    ctx.fillStyle = "#f1efe3";
    ctx.font = "700 46px Georgia";
    ctx.fillText(lesson?.topic || "Classroom", 36, 130, 568);
    ctx.fillStyle = "#ddddd1";
    ctx.font = "32px system-ui";
    const summary = lesson ? classroomCaptions(lesson.text)[0] ?? "" : "Bring a question to class.";
    let line = "";
    let y = 204;
    for (const word of summary.split(/\s+/u)) {
      const next = line ? `${line} ${word}` : word;
      if (line && ctx.measureText(next).width > 568) {
        ctx.fillText(line, 36, y, 568);
        y += 43;
        line = word;
      } else {
        line = next;
      }
    }
    if (y <= 345) ctx.fillText(line, 36, y, 568);
    const texture = new CanvasTexture(canvas);
    texture.colorSpace = SRGBColorSpace;
    return texture;
  }, [lesson]);

  useEffect(() => () => map?.dispose(), [map]);
  useEffect(() => {
    const material = ink.current;
    if (!material) return;
    const reveal = gsap.fromTo(material, { opacity: reducedMotion ? 1 : 0 }, {
      opacity: 1, duration: reducedMotion ? 0 : 0.48, onUpdate: invalidate,
    });
    return () => { reveal.kill(); };
  }, [invalidate, map, reducedMotion]);

  return (
    <group position={[-2.83, 3.21, -2.81]}>
      <mesh>
        <boxGeometry args={[2.4, 1.53, 0.11]} />
        <meshStandardMaterial color="#68472e" roughness={0.85} />
      </mesh>
      <mesh position-z={0.062}>
        <planeGeometry args={[2.25, 1.38]} />
        <meshBasicMaterial color="#1e332e" toneMapped={false} />
      </mesh>
      <mesh position-z={0.065}>
        <planeGeometry args={[2.25, 1.38]} />
        <meshBasicMaterial ref={ink} map={map} transparent depthWrite={false} toneMapped={false} />
      </mesh>
    </group>
  );
}
