import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Stars: React.FC = () => {
  const ref = useRef<THREE.Points>(null!);
  
  const [sphere] = useMemo(() => {
    const points = new Float32Array(5000 * 3);
    const p = new THREE.Vector3();
    for (let i = 0; i < 5000; i++) {
        p.set(
            Math.random() - 0.5,
            Math.random() - 0.5,
            Math.random() - 0.5
        ).normalize().multiplyScalar(1.5 + Math.random() * 0.5);
        points.set([p.x, p.y, p.z], i * 3);
    }
    return [points];
  }, []);

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} rotation={[0, 0, Math.PI / 4]}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <ambientLight intensity={0.5} />
        <Stars />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;