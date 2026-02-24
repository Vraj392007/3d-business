"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function RotatingCube() {
  // Ref to the mesh
  const meshRef = useRef<THREE.Mesh>(null!);

  // Rotate on every frame
  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.x += 0.005;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#6366f1" />
      </mesh>
    </Float>
  );
}

export default function BusinessModel() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Cube */}
        <RotatingCube />

        {/* User controls */}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}