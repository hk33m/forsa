"use client"

import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { RoundedBox, Float, Environment, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"

function PhoneModel() {
  const phoneRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (phoneRef.current) {
      phoneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      phoneRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group
        ref={phoneRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.05 : 1}
      >
        {/* Phone Body */}
        <RoundedBox args={[2.5, 5, 0.3]} radius={0.2} smoothness={4}>
          <meshStandardMaterial color="#1a3a3a" metalness={0.8} roughness={0.2} />
        </RoundedBox>

        {/* Screen */}
        <RoundedBox args={[2.2, 4.6, 0.05]} radius={0.15} smoothness={4} position={[0, 0, 0.18]}>
          <meshStandardMaterial
            color="#0a1a1a"
            metalness={0.3}
            roughness={0.1}
            emissive="#0d4d4d"
            emissiveIntensity={0.3}
          />
        </RoundedBox>

        {/* Screen Content - Glowing elements */}
        <mesh position={[0, 1.5, 0.22]}>
          <planeGeometry args={[1.8, 0.4]} />
          <meshStandardMaterial color="#c9a227" emissive="#c9a227" emissiveIntensity={0.5} />
        </mesh>

        <mesh position={[0, 0.5, 0.22]}>
          <planeGeometry args={[1.8, 0.8]} />
          <meshStandardMaterial color="#1a5a5a" emissive="#1a5a5a" emissiveIntensity={0.3} />
        </mesh>

        <mesh position={[0, -0.5, 0.22]}>
          <planeGeometry args={[1.8, 0.6]} />
          <meshStandardMaterial color="#1a4a4a" emissive="#1a4a4a" emissiveIntensity={0.2} />
        </mesh>

        <mesh position={[0, -1.3, 0.22]}>
          <planeGeometry args={[1.8, 0.6]} />
          <meshStandardMaterial color="#1a3a3a" emissive="#1a3a3a" emissiveIntensity={0.2} />
        </mesh>

        {/* Camera */}
        <mesh position={[0, 2.1, 0.2]}>
          <circleGeometry args={[0.08, 32]} />
          <meshStandardMaterial color="#0a0a0a" />
        </mesh>
      </group>
    </Float>
  )
}

function FloatingOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null)
  const orb2Ref = useRef<THREE.Mesh>(null)
  const orb3Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (orb1Ref.current) {
      orb1Ref.current.position.x = Math.sin(t * 0.5) * 3 + 4
      orb1Ref.current.position.y = Math.cos(t * 0.3) * 2 + 1
    }
    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.cos(t * 0.4) * 2 - 4
      orb2Ref.current.position.y = Math.sin(t * 0.5) * 1.5 - 1
    }
    if (orb3Ref.current) {
      orb3Ref.current.position.x = Math.sin(t * 0.6) * 2.5
      orb3Ref.current.position.y = Math.cos(t * 0.4) * 2.5 + 2
    }
  })

  return (
    <>
      <mesh ref={orb1Ref} position={[4, 1, -2]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <MeshDistortMaterial color="#c9a227" distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
      </mesh>
      <mesh ref={orb2Ref} position={[-4, -1, -3]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <MeshDistortMaterial color="#1a5a5a" distort={0.3} speed={1.5} roughness={0.3} metalness={0.6} />
      </mesh>
      <mesh ref={orb3Ref} position={[0, 2, -4]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <MeshDistortMaterial color="#2a7a7a" distort={0.5} speed={2.5} roughness={0.2} metalness={0.7} />
      </mesh>
    </>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 100

  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#c9a227" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function Scene() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 0, 10)
  }, [camera])

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#c9a227" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} color="#1a5a5a" />

      <PhoneModel />
      <FloatingOrbs />
      <Particles />

    
    </>
  )
}

export function Phone3D() {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}
