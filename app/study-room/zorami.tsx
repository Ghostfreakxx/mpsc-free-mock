"use client";

import { useCursor } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { CanvasTexture, SRGBColorSpace, type Group } from "three";

type Point = [number, number, number];
const skin = "#b97d5f";
const hair = "#211618";
const blouse = "#ead9bd";
const eyes = [-0.087, 0.087];

function Form({ at, size, color }: { at: Point; size: Point; color: string }) {
  return <mesh position={at} scale={size}>
    <sphereGeometry args={[1, 16, 12]} />
    <meshStandardMaterial color={color} roughness={0.77} />
  </mesh>;
}

function wovenPuan() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 256;
  const context = canvas.getContext("2d");
  if (!context) return null;
  context.fillStyle = "#341f27";
  context.fillRect(0, 0, 256, 256);
  // Puanchei-inspired wrap. The broad central red band follows the Puanlaisen ground.
  context.fillStyle = "#a82d39";
  context.fillRect(0, 96, 256, 64);
  for (const y of [13, 26, 70, 84, 172, 186, 230, 243]) {
    context.fillStyle = "#e5c99a";
    context.fillRect(0, y, 256, 3);
  }
  for (const y of [47, 115, 141, 209]) {
    for (let x = 0; x < 256; x += 16) {
      context.fillStyle = x % 32 === 0 ? "#cda360" : "#87a594";
      for (let row = -4; row <= 4; row++) {
        const width = 5 - Math.abs(row);
        context.fillRect(x + 8 - width, y + row, width * 2, 1);
      }
    }
  }
  context.fillStyle = "#1e120d32";
  for (let y = 0; y < 256; y += 2) context.fillRect(0, y, 256, 1);
  const map = new CanvasTexture(canvas);
  map.colorSpace = SRGBColorSpace;
  return map;
}

export default function Zorami({ active, reducedMotion, greeting, onSelect }: {
  active: boolean; reducedMotion: boolean; greeting: number; onSelect: () => void;
}) {
  const body = useRef<Group>(null);
  const head = useRef<Group>(null);
  const gaze = useRef<Group>(null);
  const arm = useRef<Group>(null);
  const gestureAt = useRef(0);
  const { gl, invalidate } = useThree();
  const [hovered, setHovered] = useState(false);
  const weave = useMemo(() => wovenPuan(), []);
  useCursor(hovered, "pointer", "auto", gl.domElement);

  useEffect(() => () => weave?.dispose(), [weave]);
  useEffect(() => {
    if (!active || reducedMotion) return;
    const interval = window.setInterval(() => invalidate(), 1000 / 28);
    return () => window.clearInterval(interval);
  }, [active, reducedMotion, invalidate]);
  useEffect(() => {
    if (greeting) gestureAt.current = performance.now();
    invalidate();
  }, [greeting, invalidate]);

  useFrame(({ clock, pointer }) => {
    if (!body.current || !head.current || !gaze.current || !arm.current) return;
    const time = reducedMotion ? 0 : clock.elapsedTime;
    const blink = time % 4.73;
    const phase = (performance.now() - gestureAt.current) / 1700;
    const gesture = reducedMotion || !gestureAt.current || phase >= 1 ? 0 : Math.sin(phase * Math.PI) ** 2;
    body.current.position.y = Math.sin(time * 1.7) * 0.012;
    head.current.rotation.y = Math.sin(time * 0.68) * 0.1 + (reducedMotion ? 0 : pointer.x * 0.11);
    head.current.rotation.z = Math.sin(time * 0.93) * 0.036 - gesture * 0.08;
    gaze.current.position.x = reducedMotion ? 0 : Math.sin(time * 1.24) * 0.012 + pointer.x * 0.008;
    gaze.current.position.y = reducedMotion ? 0 : pointer.y * 0.007;
    gaze.current.scale.y = blink > 4.56 ? Math.max(0.08, Math.abs(blink - 4.645) / 0.085) : 1;
    arm.current.rotation.x = -0.17 - gesture * 1.29;
    arm.current.rotation.z = 0.21 + gesture * (0.48 + Math.sin(phase * 18) * 0.12);
  });

  return (
    <group position={[1.25, 0, -1.42]} rotation-y={0.20}
      onClick={event => { event.stopPropagation(); onSelect(); }}
      onPointerOver={event => { event.stopPropagation(); setHovered(true); }}
      onPointerOut={() => setHovered(false)}>
      <group ref={body}>
        <mesh position-y={0.86}>
          <cylinderGeometry args={[0.286, 0.389, 1.46, 28]} />
          <meshStandardMaterial map={weave} color={weave ? "#ffffff" : "#91313c"} roughness={1} />
        </mesh>
        <Form at={[0, 1.85, 0]} size={[0.35, 0.39, 0.187]} color={blouse} />
        <Form at={[0, 1.60, 0.02]} size={[0.293, 0.19, 0.162]} color={blouse} />
        <Form at={[0, 2.20, 0.014]} size={[0.102, 0.148, 0.093]} color={skin} />
        <group ref={arm} position={[-0.28, 2.01, 0]} rotation={[ -0.17, 0, 0.21 ]}>
          <Form at={[0, -0.145, 0]} size={[0.12, 0.23, 0.115]} color={blouse} />
          <Form at={[0, -0.38, 0.032]} size={[0.077, 0.225, 0.076]} color={skin} />
          <Form at={[0, -0.60, 0.034]} size={[0.077, 0.095, 0.050]} color={skin} />
        </group>
        <group position={[0.28, 2.01, 0]} rotation={[-0.21, 0, 0.22]}>
          <Form at={[0, -0.145, 0]} size={[0.12, 0.23, 0.115]} color={blouse} />
          <Form at={[0, -0.38, 0.028]} size={[0.076, 0.225, 0.076]} color={skin} />
          <Form at={[0, -0.60, 0.029]} size={[0.073, 0.093, 0.050]} color={skin} />
        </group>
        <group ref={head} position={[0, 2.52, 0.025]}>
          <Form at={[0, 0.043, -0.053]} size={[0.261, 0.305, 0.231]} color={hair} />
          <Form at={[0.09, 0.045, -0.263]} size={[0.14, 0.151, 0.13]} color={hair} />
          <Form at={[0, -0.014, 0.041]} size={[0.226, 0.258, 0.184]} color={skin} />
          <Form at={[-0.092, 0.177, 0.109]} size={[0.165, 0.106, 0.139]} color={hair} />
          <Form at={[0.097, 0.182, 0.086]} size={[0.142, 0.104, 0.142]} color={hair} />
          <Form at={[0, -0.045, 0.217]} size={[0.037, 0.058, 0.039]} color={skin} />
          <Form at={[0, -0.128, 0.201]} size={[0.056, 0.011, 0.012]} color="#793c44" />
          <group ref={gaze}>
            {eyes.map(x => <group key={x} position={[x, 0, 0]}>
              <Form at={[0, 0.019, 0.211]} size={[0.038, 0.019, 0.017]} color="#f5e6d0" />
              <Form at={[0, 0.018, 0.225]} size={[0.016, 0.016, 0.009]} color="#332120" />
              <Form at={[-0.004, 0.022, 0.233]} size={[0.004, 0.004, 0.003]} color="#fff1d3" />
            </group>)}
          </group>
          {eyes.map(x => <mesh key={x} position={[x, 0.023, 0.242]} scale={[1, 0.83, 1]}>
            <torusGeometry args={[0.068, 0.008, 8, 24]} />
            <meshStandardMaterial color="#302228" roughness={0.34} />
          </mesh>)}
          <mesh position={[0, 0.037, 0.243]}>
            <boxGeometry args={[0.044, 0.011, 0.013]} />
            <meshStandardMaterial color="#302228" />
          </mesh>
        </group>
      </group>
    </group>
  );
}
