"use client"

import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"
import * as THREE from "three"

function PhoneScreen() {
  const elementsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (elementsRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 1.5) * 0.5 + 0.5
      elementsRef.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh
        const mat = mesh.material as THREE.MeshStandardMaterial
        if (mat && mat.emissiveIntensity !== undefined) {
          if (i === 0) mat.emissiveIntensity = 0.7 + pulse * 0.5  // logo
          if (i === 5) mat.emissiveIntensity = 0.8 + pulse * 0.7  // cta
        }
      })
    }
  })

  const createRect = (
    w: number, h: number,
    color: string, emissive: string,
    intensity: number,
    x: number, y: number
  ) => {
    return (
      <mesh position={[x, y, 0]}>
        <planeGeometry args={[w, h]} />
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={intensity}
          transparent
          opacity={0.92}
        />
      </mesh>
    )
  }

  return (
    <group ref={elementsRef}>
      {/* Logo/Header */}
      {createRect(0.8, 0.22, "#c9a227", "#c9a227", 1.2, 0, 1.9)}
      {/* Hero image */}
      {createRect(1.9, 1.15, "#0a2a3a", "#0066aa", 0.3, 0, 0.9)}
      {/* Card left */}
      {createRect(0.88, 0.55, "#0f2535", "#0055aa", 0.4, -0.48, -0.1)}
      {/* Card right */}
      {createRect(0.88, 0.55, "#1a2a15", "#00aa44", 0.4, 0.48, -0.1)}
      {/* Stats row */}
      {createRect(0.55, 0.3, "#c9a227", "#c9a227", 0.8, -0.65, -0.85)}
      {createRect(0.55, 0.3, "#0a4a6a", "#00aacc", 0.7, 0, -0.85)}
      {createRect(0.55, 0.3, "#1a3a15", "#00cc55", 0.7, 0.65, -0.85)}
      {/* CTA button */}
      {createRect(1.6, 0.32, "#c9a227", "#c9a227", 1.5, 0, -1.4)}
      {/* Bottom nav bar */}
      {createRect(1.9, 0.3, "#050e1a", "#001122", 0.1, 0, -2.0)}
    </group>
  )
}

function NavDots() {
  return (
    <group>
      {[-0.6, -0.2, 0.2, 0.6].map((x, i) => (
        <mesh key={i} position={[x, -2.0, 0.176]}>
          <circleGeometry args={[0.05, 16]} />
          <meshBasicMaterial color={i === 0 ? "#c9a227" : "#334455"} />
        </mesh>
      ))}
    </group>
  )
}

function PhoneModel() {
  const phoneRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (phoneRef.current) {
      phoneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15
      phoneRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08
      phoneRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.18
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group
        ref={phoneRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.04 : 1}
      >
        {/* Phone body - premium dark glass */}
        <mesh castShadow>
          <boxGeometry args={[2.4, 5, 0.28]} />
          <meshPhysicalMaterial
            color="#0d1117"
            metalness={0.9}
            roughness={0.1}
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0.05}
          />
        </mesh>

        {/* Screen bezel */}
        <mesh position={[0, 0, 0.14]}>
          <boxGeometry args={[2.2, 4.7, 0.04]} />
          <meshPhysicalMaterial
            color="#080c12"
            metalness={0.5}
            roughness={0.05}
            clearcoat={1}
          />
        </mesh>

        {/* Screen background */}
        <mesh position={[0, 0, 0.165]}>
          <planeGeometry args={[2.05, 4.5]} />
          <meshBasicMaterial color="#050e1a" />
        </mesh>

        {/* Screen UI elements */}
        <group position={[0, 0, 0.17]}>
          {/* Header bar */}
          <mesh position={[0, 1.9, 0]}>
            <planeGeometry args={[1.9, 0.35]} />
            <meshStandardMaterial color="#1a3a2a" emissive="#00aa66" emissiveIntensity={0.6} transparent opacity={0.92} />
          </mesh>
          <PhoneScreen />
          <NavDots />
        </group>

        {/* Camera notch */}
        <mesh position={[0, 2.25, 0.165]}>
          <cylinderGeometry args={[0.04, 0.04, 0.28, 16]} />
          <meshPhysicalMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Camera lens */}
        <mesh position={[0, 2.25, 0.17]}>
          <circleGeometry args={[0.06, 32]} />
          <meshPhysicalMaterial color="#111111" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Camera ring */}
        <mesh position={[0, 2.25, 0.172]}>
          <ringGeometry args={[0.07, 0.09, 32]} />
          <meshBasicMaterial color="#334455" side={THREE.DoubleSide} />
        </mesh>

        {/* Side buttons - volume */}
        {[0.6, 0.9].map((y, i) => (
          <mesh key={i} position={[-1.23, y, 0]}>
            <boxGeometry args={[0.06, 0.25, 0.18]} />
            <meshPhysicalMaterial color="#1a1a2a" metalness={0.95} roughness={0.05} />
          </mesh>
        ))}

        {/* Power button */}
        <mesh position={[1.23, 0.5, 0]}>
          <boxGeometry args={[0.06, 0.4, 0.18]} />
          <meshPhysicalMaterial color="#1a1a2a" metalness={0.95} roughness={0.05} />
        </mesh>
      </group>
    </Float>
  )
}

function FloatingOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null)
  const orb2Ref = useRef<THREE.Mesh>(null)
  const orb3Ref = useRef<THREE.Mesh>(null)
  const orb4Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (orb1Ref.current) {
      orb1Ref.current.position.x = 4.5 + Math.sin(t * 0.5) * 0.8
      orb1Ref.current.position.y = 1.5 + Math.cos(t * 0.4) * 1
    }
    if (orb2Ref.current) {
      orb2Ref.current.position.x = -4.5 + Math.cos(t * 0.35) * 1
      orb2Ref.current.position.y = -1 + Math.sin(t * 0.45) * 0.8
    }
    if (orb3Ref.current) {
      orb3Ref.current.position.x = 3 + Math.sin(t * 0.6) * 0.6
      orb3Ref.current.position.y = -3 + Math.cos(t * 0.5) * 0.7
    }
    if (orb4Ref.current) {
      orb4Ref.current.position.x = -3 + Math.cos(t * 0.45) * 0.7
      orb4Ref.current.position.y = 2.5 + Math.sin(t * 0.55) * 0.6
    }
  })

  const orbMat = (color: string) => (
    <meshPhysicalMaterial
      color={color}
      metalness={0.3}
      roughness={0.05}
      transparent
      opacity={0.85}
      clearcoat={1}
      clearcoatRoughness={0}
      emissive={color}
      emissiveIntensity={0.15}
    />
  )

  return (
    <>
      <mesh ref={orb1Ref} position={[4.5, 1.5, -3]}>
        <sphereGeometry args={[0.7, 64, 64]} />
        {orbMat("#c9a227")}
      </mesh>
      <mesh ref={orb2Ref} position={[-4.5, -1, -4]}>
        <sphereGeometry args={[1.0, 64, 64]} />
        {orbMat("#00d4aa")}
      </mesh>
      <mesh ref={orb3Ref} position={[3, -3, -2]}>
        <sphereGeometry args={[0.5, 64, 64]} />
        {orbMat("#4466ff")}
      </mesh>
      <mesh ref={orb4Ref} position={[-3, 2.5, -2]}>
        <sphereGeometry args={[0.4, 64, 64]} />
        {orbMat("#aa44ff")}
      </mesh>
    </>
  )
}

function Rings() {
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.15
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.1
      ring2Ref.current.rotation.y = t * 0.08
    }
  })

  return (
    <>
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.5, 0.015, 8, 128]} />
        <meshBasicMaterial color="#00d4aa" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI * 0.4, Math.PI * 0.2, 0]}>
        <torusGeometry args={[4.2, 0.01, 8, 128]} />
        <meshBasicMaterial color="#c9a227" transparent opacity={0.2} />
      </mesh>
    </>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 150

  const { positions, colors } = (() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 5
      if (Math.random() < 0.5) {
        col[i * 3] = 0.788; col[i * 3 + 1] = 0.635; col[i * 3 + 2] = 0.153
      } else {
        col[i * 3] = 0; col[i * 3 + 1] = 0.831; col[i * 3 + 2] = 0.667
      }
    }
    return { positions: pos, colors: col }
  })()

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.015
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.008
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

function Lights() {
  const goldRef = useRef<THREE.PointLight>(null)
  const tealRef = useRef<THREE.PointLight>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (goldRef.current) goldRef.current.intensity = 3 + Math.sin(t * 1.2) * 1.5
    if (tealRef.current) tealRef.current.intensity = 2.5 + Math.cos(t * 0.9) * 1
  })

  return (
    <>
      <ambientLight intensity={0.4} color="#0a1a2a" />
      <directionalLight position={[5, 8, 5]} intensity={3} castShadow />
      <pointLight ref={goldRef} position={[-4, 3, 3]} color="#c9a227" intensity={3} distance={20} />
      <pointLight ref={tealRef} position={[4, -2, 4]} color="#00d4aa" intensity={2.5} distance={20} />
      <directionalLight position={[-5, -5, -3]} intensity={2} color="#1a6a8a" />
      <spotLight position={[0, 8, 6]} angle={0.4} penumbra={1} intensity={2} color="#ffffff" />
    </>
  )
}

function MouseTracker() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    camera.position.set(0, 0, 9)
    const handleMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [camera])

  useFrame(() => {
    target.current.x += (mouse.current.x - target.current.x) * 0.05
    target.current.y += (mouse.current.y - target.current.y) * 0.05
    camera.position.x = target.current.x * 0.5
    camera.position.y = target.current.y * 0.3
    camera.lookAt(0, 0, 0)
  })

  return null
}

function Scene() {
  return (
    <>
      <fog attach="fog" args={["#000814", 15, 40]} />
      <Lights />
      <MouseTracker />
      <PhoneModel />
      <FloatingOrbs />
      <Rings />
      <Particles />
    </>
  )
}

export function Phone3D() {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas
        shadows
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
        camera={{ position: [0, 0, 9], fov: 45 }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
