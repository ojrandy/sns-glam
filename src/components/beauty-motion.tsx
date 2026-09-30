import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import * as THREE from "three";

type ScenePalette = {
  burgundy: string;
  rose: string;
  blush: string;
  cream: string;
  ink: string;
};

const petalPositions: [number, number, number, number][] = [
  [-2.8, 1.8, -1.4, -0.55],
  [2.5, 1.2, -1.2, 0.65],
  [-2.2, -1.7, 0.1, -1.1],
  [2.9, -1.5, -0.4, 1.05],
  [0.1, 2.9, -1.8, 0.1],
  [0.3, -2.8, -0.8, 1.6],
];

function Sculpture({ progress, palette, reduced }: { progress: MotionValue<number>; palette: ScenePalette; reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame(({ clock, camera }, rawDelta) => {
    const dt = Math.min(rawDelta, 0.05);
    const p = reduced ? 0.42 : progress.get();
    const targetRotation = -0.7 + p * Math.PI * 1.55;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotation, 4, dt);
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -0.15 + p * 0.5, 4, dt);
      group.current.position.y = THREE.MathUtils.damp(group.current.position.y, 0.45 - p * 0.9, 3, dt);
    }
    if (ring.current && !reduced) ring.current.rotation.z = clock.elapsedTime * 0.09 + p * 1.6;
    camera.position.z = THREE.MathUtils.damp(camera.position.z, 10.5 - p * 2.2, 3, dt);
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <mesh ref={ring} castShadow rotation={[Math.PI / 2.5, 0.2, 0]}>
        <torusKnotGeometry args={[1.75, 0.12, 180, 24, 2, 3]} />
        <meshPhysicalMaterial color={palette.rose} metalness={0.82} roughness={0.18} clearcoat={1} />
      </mesh>
      <mesh castShadow rotation={[0.35, 0.15, -0.45]}>
        <torusGeometry args={[2.45, 0.045, 18, 180]} />
        <meshPhysicalMaterial color={palette.cream} metalness={0.72} roughness={0.2} />
      </mesh>
      <mesh castShadow rotation={[1.1, -0.5, 0.6]}>
        <torusGeometry args={[2.05, 0.065, 18, 180]} />
        <meshPhysicalMaterial color={palette.blush} metalness={0.55} roughness={0.25} />
      </mesh>
      {petalPositions.map(([x, y, z, rotation], index) => (
        <mesh key={`${x}-${y}`} position={[x, y, z]} rotation={[0.2, rotation, rotation * 0.45]} scale={[0.48, 1.05, 0.18]} castShadow>
          <sphereGeometry args={[1, 28, 28]} />
          <meshPhysicalMaterial
            color={index % 2 === 0 ? palette.rose : palette.blush}
            metalness={0.28}
            roughness={0.24}
            clearcoat={0.9}
          />
        </mesh>
      ))}
      <mesh castShadow>
        <sphereGeometry args={[0.58, 48, 48]} />
        <meshPhysicalMaterial color={palette.ink} metalness={0.9} roughness={0.08} clearcoat={1} />
      </mesh>
    </group>
  );
}

function readScenePalette(): ScenePalette {
  const styles = getComputedStyle(document.documentElement);
  return {
    burgundy: styles.getPropertyValue("--scene-burgundy").trim(),
    rose: styles.getPropertyValue("--scene-rose").trim(),
    blush: styles.getPropertyValue("--scene-blush").trim(),
    cream: styles.getPropertyValue("--scene-cream").trim(),
    ink: styles.getPropertyValue("--scene-ink").trim(),
  };
}

export function BeautyMotion() {
  const section = useRef<HTMLElement>(null);
  const [palette, setPalette] = useState<ScenePalette | null>(null);
  const reduced = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const introOpacity = useTransform(scrollYProgress, [0, 0.18, 0.42], [1, 1, 0]);
  const detailOpacity = useTransform(scrollYProgress, [0.35, 0.58, 0.92], [0, 1, 1]);
  const detailY = useTransform(scrollYProgress, [0.35, 0.65], [50, 0]);

  useEffect(() => setPalette(readScenePalette()), []);

  return (
    <section ref={section} className="relative h-[185vh] bg-burgundy text-cream">
      <div className="sticky top-0 h-[100svh] min-h-[640px] overflow-hidden">
        <div className="absolute inset-0 opacity-40 beauty-grid" />
        {palette && (
          <div className="absolute inset-0" aria-hidden="true">
            <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 10.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
              <ambientLight intensity={0.45} color={palette.cream} />
              <directionalLight position={[4, 6, 7]} intensity={3.2} color={palette.cream} />
              <pointLight position={[-5, -2, 4]} intensity={28} color={palette.rose} />
              <Sculpture progress={scrollYProgress} palette={palette} reduced={reduced} />
              <Environment>
                <Lightformer intensity={3} color={palette.cream} position={[0, 5, 3]} scale={[8, 8, 1]} />
                <Lightformer intensity={2} color={palette.rose} position={[-5, 0, 1]} rotation-y={Math.PI / 2} scale={[8, 3, 1]} />
              </Environment>
            </Canvas>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--burgundy)_0%,transparent_55%,var(--burgundy)_100%)] opacity-55" />
        <motion.div style={{ opacity: introOpacity }} className="absolute inset-x-0 top-0 mx-auto flex h-full max-w-7xl items-center px-5">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[.24em] text-rose">BEAUTY IN MOTION</p>
            <p className="mt-3 font-script text-5xl text-rose">More than a look</p>
            <h2 className="font-display text-5xl uppercase leading-[.9] sm:text-7xl">Artistry that moves with you.</h2>
          </div>
        </motion.div>
        <motion.div style={{ opacity: detailOpacity, y: detailY }} className="absolute inset-x-0 bottom-16 mx-auto flex max-w-7xl justify-end px-5 sm:bottom-24">
          <div className="max-w-md text-right">
            <p className="font-script text-5xl text-rose">Your signature</p>
            <h3 className="font-display text-4xl uppercase sm:text-6xl">Designed in every detail.</h3>
            <p className="mt-4 text-cream/70">Makeup, hair and portrait direction brought together as one polished experience.</p>
          </div>
        </motion.div>
        <div className="absolute bottom-6 left-1/2 h-14 w-px -translate-x-1/2 bg-cream/20"><motion.span style={{ scaleY: scrollYProgress }} className="block h-full origin-top bg-rose" /></div>
      </div>
    </section>
  );
}