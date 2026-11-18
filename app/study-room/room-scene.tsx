"use client";

import { RoundedBox, useCursor } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useMemo, useRef, useState } from "react";
import { Group, MathUtils, Vector3 } from "three";
import { makeRoomTextures } from "./room-materials";
import Zorami from "./zorami";
import RoomBlackboard from "./room-blackboard";
import type { ClassroomLesson } from "../lib/classroom-lesson";

type SceneProps = {
  active: boolean;
  reducedMotion: boolean;
  closeUp: boolean;
  onBookClick: () => void;
  onTeacherClick: () => void;
  greeting: number;
  lesson: ClassroomLesson | null;
  compactRendering: boolean;
  onReady: () => void;
  onFailure: () => void;
};

function Room({ active, closeUp, reducedMotion, onBookClick, onTeacherClick, greeting, lesson, onReady, onFailure }: SceneProps) {
  const textures = useMemo(() => makeRoomTextures(), []);
  const coverHinge = useRef<Group>(null);
  const framing = useRef({ zoom: 0, arrival: 1, board: 0 });
  const aim = useRef(new Vector3());
  const { gl, invalidate } = useThree();
  const [bookHovered, setBookHovered] = useState(false);
  const pointerOffset = useRef({ x: 0, y: 0 });
  useCursor(bookHovered, "pointer", "auto", gl.domElement);

  useEffect(() => () => Object.values(textures).forEach((map) => map.dispose()), [textures]);

  useEffect(() => {
    const canvas = gl.domElement;
    function move(event: PointerEvent) {
      const bounds = canvas.getBoundingClientRect();
      pointerOffset.current.x = (event.clientX - bounds.left) / bounds.width * 2 - 1;
      pointerOffset.current.y = 1 - (event.clientY - bounds.top) / bounds.height * 2;
      invalidate();
    }
    function leave() {
      pointerOffset.current.x = 0;
      pointerOffset.current.y = 0;
      invalidate();
    }
    function lost(event: Event) {
      event.preventDefault();
      onFailure();
    }
    canvas.addEventListener("webglcontextlost", lost);
    if (!reducedMotion) {
      canvas.addEventListener("pointermove", move);
      canvas.addEventListener("pointerleave", leave);
    }
    return () => {
      canvas.removeEventListener("webglcontextlost", lost);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerleave", leave);
    };
  }, [gl, invalidate, onFailure, reducedMotion]);

  useEffect(() => {
    if (active) invalidate();
  }, [active, invalidate]);

  useEffect(() => {
    const state = framing.current;
    const entrance = gsap.to(state, {
      arrival: 0,
      duration: reducedMotion ? 0 : 1.65,
      ease: "power2.out",
      onUpdate: invalidate,
    });
    return () => { entrance.kill(); };
  }, [invalidate, reducedMotion]);

  useEffect(() => {
    const move = gsap.to(framing.current, {
      zoom: closeUp ? 1 : 0,
      board: lesson && !closeUp ? 1 : 0,
      duration: reducedMotion ? 0 : 1.1,
      ease: "power2.inOut",
      onUpdate: invalidate,
    });
    return () => { move.kill(); };
  }, [closeUp, invalidate, lesson, reducedMotion]);

  useFrame(({ camera, size }, delta) => {
    const { zoom, arrival, board } = framing.current;
    const portrait = size.width / size.height < 1.15;
    const parallax = reducedMotion ? 0 : 1 - zoom * 0.65;
    const x = MathUtils.lerp(3.25, 0.9, zoom) - board * 0.65 + pointerOffset.current.x * 0.21 * parallax;
    const y = MathUtils.lerp(3.35, 3.15, zoom) + board * 0.14 + pointerOffset.current.y * 0.17 * parallax;
    const z = MathUtils.lerp(portrait ? 8.2 : 7.15, portrait ? 4.6 : 3.65, zoom) + arrival + board * (portrait ? 0.55 : 0.12);
    const distance = Math.hypot(camera.position.x - x, camera.position.y - y, camera.position.z - z);
    const ease = reducedMotion || distance < 0.002 ? 1 : 1 - Math.exp(-Math.min(delta, 0.05) * 12);
    camera.position.set(
      MathUtils.lerp(camera.position.x, x, ease),
      MathUtils.lerp(camera.position.y, y, ease),
      MathUtils.lerp(camera.position.z, z, ease),
    );
    aim.current.set(-0.22 * (1 - zoom) - board * 0.36, MathUtils.lerp(2.0, 1.53, zoom) + board * 0.18, 0.15 * zoom);
    camera.lookAt(aim.current);
    if (coverHinge.current) coverHinge.current.rotation.z = zoom * 2.45;
    if (ease < 1) invalidate();
  });

  useEffect(onReady, [onReady]);

  return (
    <>
      <color attach="background" args={["#251919"]} />
      <ambientLight color="#edd1b0" intensity={0.65} />
      <Zorami active={active} reducedMotion={reducedMotion} greeting={greeting} lesson={lesson} onSelect={onTeacherClick} />
      <hemisphereLight color="#aeb9fa" groundColor="#784527" intensity={1.3} />
      <directionalLight position={[1.8, 4.8, -1.6]} intensity={2.3} color="#ffc09c" />
      <directionalLight position={[-2, 4.2, 3]} intensity={1.45} color="#ffe0ac" castShadow
        shadow-mapSize={[512, 512]} shadow-camera-left={-4} shadow-camera-right={4}
        shadow-camera-top={4} shadow-camera-bottom={-4} shadow-normalBias={0.025} />
      <mesh position={[0, 3.3, -3.03]} receiveShadow>
        <planeGeometry args={[13, 7]} />
        <meshStandardMaterial map={textures.plaster} color="#918077" roughness={1} />
      </mesh>
      <mesh position={[6.48, 3.3, 1.96]} rotation-y={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[10, 7]} />
        <meshStandardMaterial map={textures.plaster} color="#77645e" roughness={1} />
      </mesh>
      <mesh position={[-6.48, 3.3, 1.96]} rotation-y={Math.PI / 2} receiveShadow>
        <planeGeometry args={[10, 7]} />
        <meshStandardMaterial map={textures.plaster} color="#77645e" roughness={1} />
      </mesh>
      <mesh position={[0, 0.2, -2.99]}>
        <boxGeometry args={[13, 0.4, 0.095]} />
        <meshStandardMaterial map={textures.wood} color="#6b4f41" roughness={0.9} />
      </mesh>
      <mesh position={[0, -0.02, 0]} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[16, 14]} />
        <meshStandardMaterial map={textures.wood} color="#745849" roughness={0.88} />
      </mesh>
      <group position={[0.62, 3.05, -2.92]}>
        <mesh>
          <planeGeometry args={[4.25, 2.85]} />
          <meshBasicMaterial map={textures.hills} toneMapped={false} />
        </mesh>
        {[-2.16, 0, 2.16].map((x) => (
          <mesh key={x} position={[x, 0, 0.1]}>
            <boxGeometry args={[0.105, 3.05, 0.23]} />
            <meshStandardMaterial map={textures.wood} color="#845a40" />
          </mesh>
        ))}
        {[-1.48, -0.45, 1.48].map((y) => (
          <mesh key={y} position={[0, y, 0.1]}>
            <boxGeometry args={[4.42, 0.105, y === -1.48 ? 0.45 : 0.23]} />
            <meshStandardMaterial map={textures.wood} color="#845a40" />
          </mesh>
        ))}
      </group>
      <RoomBlackboard lesson={lesson} reducedMotion={reducedMotion} />
      <mesh position={[-4.42, 3.04, -2.88]} rotation-z={-0.023}>
        <planeGeometry args={[0.88, 2.65, 1, 1]} />
        <meshStandardMaterial map={textures.weave} roughness={1} />
      </mesh>
      <RoundedBox args={[4.9, 0.18, 2.55]} position={[0, 1.12, 0]} radius={0.035} smoothness={2} receiveShadow>
        <meshStandardMaterial map={textures.wood} roughness={0.57} />
      </RoundedBox>
      {[-2.12, 2.12].flatMap((x) => [-0.96, 0.96].map((z) => (
        <mesh position={[x, 0.55, z]} key={`${x},${z}`} castShadow>
          <boxGeometry args={[0.18, 1.1, 0.18]} />
          <meshStandardMaterial map={textures.wood} color="#80604d" />
        </mesh>
      )))}
      <mesh position={[1.65, 1.218, 0.45]} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[0.85, 1.48]} />
        <meshStandardMaterial map={textures.weave} roughness={1} />
      </mesh>
      <group position={[-1.42, 1.22, -0.53]}>
        <mesh position-y={0.04} castShadow>
          <cylinderGeometry args={[0.25, 0.30, 0.08, 24]} />
          <meshStandardMaterial color="#60462b" metalness={0.65} roughness={0.28} />
        </mesh>
        <mesh position-y={0.58}>
          <cylinderGeometry args={[0.035, 0.048, 1.05, 16]} />
          <meshStandardMaterial color="#936638" metalness={0.63} roughness={0.33} />
        </mesh>
        <mesh position-y={1.11} castShadow>
          <cylinderGeometry args={[0.17, 0.4, 0.42, 32]} />
          <meshStandardMaterial color="#d18b48" emissive="#ff9a3e" emissiveIntensity={0.31} roughness={0.74} />
        </mesh>
        <pointLight position={[0, 0.89, 0.11]} color="#ffba72" intensity={16} distance={4.3} decay={2} />
      </group>
      <group position={[0.3, 1.225, 0.32]} rotation-y={-0.29}
        onClick={(event) => { event.stopPropagation(); onBookClick(); }}
        onPointerOver={(event) => { event.stopPropagation(); setBookHovered(true); }}
        onPointerOut={() => setBookHovered(false)}>
        <RoundedBox args={[1.25, 0.045, 1.65]} position-y={0.035} radius={0.018} smoothness={2} castShadow>
          <meshStandardMaterial color="#631f22" />
        </RoundedBox>
        <RoundedBox args={[1.18, 0.17, 1.58]} position-y={0.139} radius={0.015} smoothness={2} castShadow>
          <meshStandardMaterial map={textures.paper} roughness={0.86} />
        </RoundedBox>
        <mesh position={[0.025, 0.225, 0]} rotation-x={-Math.PI / 2}>
          <planeGeometry args={[1.11, 1.51]} />
          <meshStandardMaterial map={textures.preamble} roughness={0.92} />
        </mesh>
        <group ref={coverHinge} position={[-0.595, 0.233, 0]}>
          <RoundedBox args={[1.26, 0.048, 1.65]} position-x={0.605} radius={0.019} smoothness={2} castShadow>
            <meshStandardMaterial color="#662323" roughness={0.69} />
          </RoundedBox>
          <mesh position={[0.605, 0.025, 0]} rotation-x={-Math.PI / 2}>
            <planeGeometry args={[1.235, 1.62]} />
            <meshStandardMaterial map={textures.cover} roughness={0.66} />
          </mesh>
        </group>
        <RoundedBox args={[0.089, 0.24, 1.65]} position={[-0.6, 0.139, 0]} radius={0.035} smoothness={3}>
          <meshStandardMaterial color="#561e21" roughness={0.74} />
        </RoundedBox>
      </group>
      <group position={[1.67, 1.22, -0.52]}>
        <mesh position-y={0.14} castShadow>
          <cylinderGeometry args={[0.16, 0.12, 0.27, 24, 1, true]} />
          <meshStandardMaterial color="#50817c" roughness={0.43} side={2} />
        </mesh>
        <mesh position-y={0.235} rotation-x={-Math.PI / 2}>
          <circleGeometry args={[0.147, 24]} />
          <meshStandardMaterial color="#3f2719" roughness={0.32} />
        </mesh>
        <mesh position={[0.18, 0.15, 0]}>
          <torusGeometry args={[0.091, 0.023, 8, 20]} />
          <meshStandardMaterial color="#50817c" roughness={0.43} />
        </mesh>
      </group>
    </>
  );
}

export default function RoomScene(props: SceneProps) {
  return (
    <Canvas
      camera={{ position: [3.25, 3.35, 8.2], fov: 39, near: 0.1, far: 30 }}
      dpr={props.compactRendering ? 1 : [1, 1.45]}
      frameloop={props.active ? "demand" : "never"}
      gl={{ alpha: false, antialias: true, powerPreference: "low-power" }}
      shadows={!props.compactRendering}
    >
      <Room {...props} />
    </Canvas>
  );
}
