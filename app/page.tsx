"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text, Environment } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { BackendCard, FrontendCard, DatabaseCard, DevOpsCard } from "../components/TechCards"
import ProfileCard from "../components/ProfileCard"

function AnimatedSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<any>()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={2}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00ff88" roughness={0} transparent opacity={0.1} />
    </mesh>
  )
}

function BinaryParticles() {
  const groupRef = useRef<THREE.Group>(null)
  const binaryTexts = ["01", "10", "11", "00", "101", "010", "110", "001"]

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {Array.from({ length: 50 }).map((_, i) => (
        <Text
          key={i}
          position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20]}
          fontSize={0.3}
          color={i % 2 === 0 ? "#0ea5e9" : "#7c3aed"}
          anchorX="center"
          anchorY="middle"
        >
          {binaryTexts[Math.floor(Math.random() * binaryTexts.length)]}
        </Text>
      ))}
    </group>
  )
}

function MatrixLines() {
  const linesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={linesRef}>
      {Array.from({ length: 20 }).map((_, i) => {
        const points = []
        for (let j = 0; j < 10; j++) {
          points.push(
            new THREE.Vector3((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15),
          )
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(points)

        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial color={i % 2 === 0 ? "#0ea5e9" : "#7c3aed"} transparent opacity={0.4} />
          </line>
        )
      })}
    </group>
  )
}

function TechCubes() {
  const cubesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (cubesRef.current) {
      cubesRef.current.children.forEach((cube, i) => {
        cube.rotation.x = state.clock.elapsedTime * (0.5 + i * 0.1)
        cube.rotation.y = state.clock.elapsedTime * (0.3 + i * 0.05)
      })
    }
  })

  return (
    <group ref={cubesRef}>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={i}
          position={[Math.cos((i * Math.PI) / 4) * 8, Math.sin((i * Math.PI) / 4) * 3, -10 + Math.sin(i) * 5]}
          scale={0.5}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={i % 2 === 0 ? "#0ea5e9" : "#7c3aed"} transparent opacity={0.7} wireframe />
        </mesh>
      ))}
    </group>
  )
}

function HackerBackground3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
    >
      <Environment preset="night" />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} color="#0ea5e9" intensity={0.7} />
      <pointLight position={[-10, -10, -10]} color="#7c3aed" intensity={0.5} />

      <BinaryParticles />
      <MatrixLines />
      <TechCubes />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  )
}

export default function DeveloperPortfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 z-0"></div>
      <HackerBackground3D />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex gap-8 items-start">
          {/* Profile Card - Left Side */}
          <ProfileCard />

          {/* Main Skills Cards - Right Side */}
          <div className="flex-1">
            <div className="bg-gray-900 border border-cyan-700 rounded-xl shadow-lg shadow-cyan-500/30 p-4 md:p-5 overflow-hidden mb-6 transition-all duration-300 hover:shadow-xl">
              <div className="relative z-10">
                <div className="mb-6">
                  <h1 className="text-2xl md:text-4xl font-black text-balance leading-tight text-cyan-400 drop-shadow-[0_0_20px_rgba(14,165,233,0.8)] animate-pulse">
                    Siempre con actitud hacker (ética) y un toque creativo.
                  </h1>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {/* Backend Card */}
              <BackendCard />

              {/* Frontend Card */}
              <FrontendCard />

              {/* Base de Datos Card */}
              <DatabaseCard />

              {/* DevOps Card */}
              <DevOpsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
