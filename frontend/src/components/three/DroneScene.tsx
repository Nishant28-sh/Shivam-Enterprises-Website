import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import type { Group } from "three";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const mouseRef = { current: { x: 0, y: 0 } };

function AgriDrone() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    const { x, y } = mouseRef.current;
    group.current.rotation.y = Math.sin(t * 0.3) * 0.15 + x * 0.25;
    group.current.rotation.x = y * 0.12;
    group.current.position.y = Math.sin(t * 0.8) * 0.08;
  });

  const arm = (rotation: number) => (
    <group rotation={[0, rotation, 0]}>
      <mesh position={[1.1, 0, 0]}>
        <boxGeometry args={[1.4, 0.06, 0.06]} />
        <meshStandardMaterial color="#1E293B" metalness={0.4} roughness={0.35} />
      </mesh>
      <mesh position={[1.8, 0.05, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.03, 24]} />
        <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[1.8, 0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
        <meshStandardMaterial color="#64748B" />
      </mesh>
    </group>
  );

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
      <group ref={group}>
        <mesh>
          <boxGeometry args={[0.55, 0.14, 0.35]} />
          <meshStandardMaterial color="#F8FAFC" metalness={0.3} roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.08, 0.1, 0.2, 16]} />
          <meshStandardMaterial color="#16A34A" metalness={0.2} roughness={0.5} />
        </mesh>
        <mesh position={[0, -0.22, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#0EA5E9" emissive="#0EA5E9" emissiveIntensity={0.15} />
        </mesh>
        {arm(0)}
        {arm(Math.PI / 2)}
        {arm(Math.PI)}
        {arm((3 * Math.PI) / 2)}
      </group>
    </Float>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 3]} intensity={1.1} color="#ffffff" />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} color="#86EFAC" />
      <pointLight position={[0, 2, 2]} intensity={0.4} color="#0EA5E9" />
      <AgriDrone />
      <ContactShadows position={[0, -0.6, 0]} opacity={0.35} scale={6} blur={2.5} />
      <Environment preset="city" />
    </>
  );
}

interface DroneSceneProps {
  className?: string;
}

export function DroneScene({ className }: DroneSceneProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    };
  };

  return (
    <div
      className={className}
      onPointerMove={handlePointerMove}
      role="img"
      aria-label="Interactive agricultural drone visualization"
    >
      <Canvas
        camera={{ position: [0, 0.8, isMobile ? 4.2 : 3.5], fov: 42 }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
