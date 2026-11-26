"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Quaternion, Vector3 } from "three";
import { molecules, type MoleculeKey } from "./molecules";

const up = new Vector3(0, 1, 0);
const colors = { water: "#ed7155", ammonia: "#6499d0", methane: "#53646d" };

export default function MolecularScene({ molecule, selected, onSelect, revision }: {
  molecule: MoleculeKey; selected: number; onSelect: (index: number) => void; revision: number;
}) {
  const model = molecules[molecule];
  const geometry = model.points.map(point => {
    const vector = new Vector3(...point).multiplyScalar(1.55);
    return { end: vector, rotation: new Quaternion().setFromUnitVectors(up, vector.clone().normalize()) };
  });
  return (
    <Canvas key={revision} shadows camera={{ position: [3.1, 3.55, 4.45], fov: 38 }} dpr={[1, 1.5]} frameloop="demand"
      gl={{ powerPreference: "low-power", antialias: true }} fallback={<p>The 3D view is unavailable. Use the atom list below.</p>}>
      <color attach="background" args={["#192823"]} />
      <ambientLight intensity={1.1} />
      <directionalLight position={[4, 5, 3]} color="#fff3db" intensity={2.1} castShadow shadow-mapSize={[512, 512]} shadow-normalBias={0.025} />
      <mesh rotation-x={-Math.PI / 2} position-y={-1.26} receiveShadow>
        <circleGeometry args={[4, 48]} />
        <meshStandardMaterial color="#273630" roughness={0.82} metalness={0.08} />
      </mesh>
      <directionalLight position={[-4, 2, -4]} color="#b9efe3" intensity={1.35} />
      <mesh castShadow onClick={(event) => { event.stopPropagation(); onSelect(0); }}>
        <sphereGeometry args={[0.48, 32, 24]} />
        <meshStandardMaterial color={colors[molecule]} metalness={0.19} roughness={0.27}
          emissive="#ffba63" emissiveIntensity={selected === 0 ? 0.2 : 0} />
      </mesh>
      {geometry.map(({ end, rotation }, index) => (
        <group key={index}>
          <mesh castShadow position={end.clone().multiplyScalar(0.5)} quaternion={rotation}>
            <cylinderGeometry args={[0.075, 0.075, end.length(), 12]} />
            <meshStandardMaterial color="#b9aa88" metalness={0.28} roughness={0.36} />
          </mesh>
          <mesh castShadow position={end} onClick={(event) => { event.stopPropagation(); onSelect(index + 1); }}>
            <sphereGeometry args={[0.29, 24, 18]} />
            <meshStandardMaterial color={selected === index + 1 ? "#ffc474" : "#e8e6d9"} roughness={0.3} metalness={0.2} />
          </mesh>
        </group>
      ))}
      <OrbitControls enablePan={false} enableDamping={false} minDistance={3} maxDistance={8} />
    </Canvas>
  );
}
