import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Orbiting Technology Item in 3D
const OrbitingPill: React.FC<{
  label: string;
  radius: number;
  speed: number;
  offset: number;
  color: string;
}> = ({ label, radius, speed, offset, color }) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    if (meshRef.current) {
      meshRef.current.position.x = Math.cos(t) * radius;
      meshRef.current.position.z = Math.sin(t) * radius;
      meshRef.current.position.y = Math.sin(t * 2) * 0.4;
      meshRef.current.rotation.y = -t;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Visual node */}
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
};

// Particles Field
const ParticleField: React.FC<{ count?: number }> = ({ count = 120 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const color1 = new THREE.Color('#9B6DFF');
    const color2 = new THREE.Color('#00D4FF');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const mixed = color1.clone().lerp(color2, Math.random());
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }
    return [pos, col];
  }, [count]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.03;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Main 3D Interactive Core Experience
const FuturisticCore: React.FC = () => {
  const coreRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    const time = clock.getElapsedTime();

    if (coreRef.current) {
      // Gentle floating and subtle mouse parallax
      coreRef.current.rotation.y = time * 0.2 + mouse.x * 0.3;
      coreRef.current.rotation.x = Math.sin(time * 0.15) * 0.1 - mouse.y * 0.2;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.25;
      ring1Ref.current.rotation.x = 1.1 + Math.sin(time * 0.2) * 0.08;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.35;
      ring2Ref.current.rotation.y = 0.8 + Math.cos(time * 0.25) * 0.08;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = time * 0.18;
      ring3Ref.current.rotation.x = -0.6 + Math.sin(time * 0.15) * 0.08;
    }
  });

  const techOrbits = [
    { label: 'Oracle APEX', radius: 2.2, speed: 0.3, offset: 0, color: '#9B6DFF' },
    { label: 'PL-SQL', radius: 2.5, speed: 0.25, offset: 1.2, color: '#00D4FF' },
    { label: 'ORDS', radius: 2.1, speed: 0.35, offset: 2.4, color: '#FF8A3D' },
    { label: 'SQL', radius: 2.6, speed: 0.22, offset: 3.6, color: '#9B6DFF' },
    { label: 'AI', radius: 2.3, speed: 0.28, offset: 4.8, color: '#00D4FF' },
    { label: 'REST API', radius: 2.7, speed: 0.2, offset: 5.6, color: '#9B6DFF' },
  ];

  return (
    <group ref={coreRef} position={[0, 0, 0]}>
      {/* Central Metallic Glass Orb with Distortion */}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <Sphere args={[1.15, 64, 64]}>
          <MeshDistortMaterial
            color="#141824"
            roughness={0.15}
            metalness={0.85}
            clearcoat={1}
            clearcoatRoughness={0.1}
            distort={0.25}
            speed={1.4}
          />
        </Sphere>
      </Float>

      {/* Inner Glowing Core */}
      <Sphere args={[0.65, 32, 32]}>
        <meshStandardMaterial
          color="#9B6DFF"
          emissive="#7546DB"
          emissiveIntensity={1.8}
          transparent
          opacity={0.7}
        />
      </Sphere>

      {/* Digital Concentric Rings */}
      {/* Ring 1 - Purple */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.65, 0.018, 16, 100]} />
        <meshStandardMaterial
          color="#9B6DFF"
          emissive="#9B6DFF"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Ring 2 - Electric Cyan */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.95, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Ring 3 - Outer Amber/Purple */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[2.3, 0.012, 16, 100]} />
        <meshStandardMaterial
          color="#FF8A3D"
          emissive="#FF8A3D"
          emissiveIntensity={0.9}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Orbiting Tech Nodes */}
      {techOrbits.map((item) => (
        <OrbitingPill key={item.label} {...item} />
      ))}
    </group>
  );
};

// Fallback visual for low-end mobile or disabled WebGL
const MobileFallbackVisual: React.FC = () => {
  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto flex items-center justify-center pointer-events-none">
      <div className="absolute inset-0 rounded-full border border-dashed border-[#9B6DFF]/30 animate-spin-slow" />
      <div className="absolute w-60 h-60 rounded-full border border-[#00D4FF]/25 animate-reverse-spin" />
      <div className="w-44 h-44 rounded-full bg-gradient-to-tr from-[#9B6DFF]/30 via-[#141824] to-[#00D4FF]/30 backdrop-blur-xl border border-white/20 shadow-[0_0_60px_rgba(155,109,255,0.4)] flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF] opacity-80 blur-md animate-pulse" />
      </div>
    </div>
  );
};

export const Hero3DCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile || !hasWebGL) {
    return <MobileFallbackVisual />;
  }

  return (
    <div className="w-full h-full min-h-[460px] lg:min-h-[580px] pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        {/* Cinematic Purple and Electric Cyan Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 5, 4]} intensity={1.5} color="#00D4FF" />
        <directionalLight position={[-4, -3, 3]} intensity={1.8} color="#9B6DFF" />
        <pointLight position={[0, 0, 2]} intensity={1.2} color="#FFFFFF" />

        {/* Dynamic Scene */}
        <FuturisticCore />
        <ParticleField count={100} />
      </Canvas>
    </div>
  );
};
