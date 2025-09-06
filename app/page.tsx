"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text, Environment } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { Server, Monitor, Database, Container } from "lucide-react"

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
          color="#00ff41"
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
            <lineBasicMaterial color="#00ffff" transparent opacity={0.3} />
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
          <meshStandardMaterial color={i % 2 === 0 ? "#00ff41" : "#ff0080"} transparent opacity={0.6} wireframe />
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
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} color="#00ff41" intensity={0.5} />
      <pointLight position={[-10, -10, -10]} color="#ff0080" intensity={0.3} />

      <BinaryParticles />
      <MatrixLines />
      <TechCubes />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
    </Canvas>
  )
}

export default function DeveloperPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      <HackerBackground3D />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex gap-8 items-start">
          {/* Photo Card - Left Side */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-2xl shadow-2xl shadow-green-500/20 p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-cyan-500/10 rounded-2xl"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-green-500/70 shadow-2xl shadow-green-500/50 mb-4">
                  <img src="/profile-photo.jpg" alt="Foto de perfil" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl font-bold text-green-400 text-center">Developer Full-Stack</h2>
                <p className="text-gray-300 text-sm text-center mt-2">
                  Passionate about clean code and innovative solutions
                </p>
              </div>
            </div>

            {/* Systems & Kernel Info - Below Photo */}
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-purple-400 mb-3">Sistemas Operativos</h3>
                <div className="space-y-1 text-gray-100 text-sm">
                  <div>• Windows 11</div>
                  <div>• Ubuntu 22.04 LTS</div>
                  <div>• Kali Linux</div>
                  <div>• Arch Linux</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-pink-400 mb-3">Kernel Linux</h3>
                <div className="space-y-1 text-gray-100 text-sm">
                  <div>• Kernel 5.15 LTS</div>
                  <div>• Kernel 6.x</div>
                  <div>• Zen Kernel</div>
                  <div>• Custom Builds</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-3">Terminal & Shell</h3>
                <div className="space-y-1 text-gray-100 text-sm">
                  <div>• Zsh + Oh My Zsh</div>
                  <div>• Bash</div>
                  <div>• Tmux</div>
                  <div>• Neovim</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Skills Cards - Right Side */}
          <div className="flex-1">
            <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-2xl shadow-2xl shadow-green-500/20 p-4 md:p-5 relative overflow-hidden mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-cyan-500/10 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <h1 className="text-lg md:text-xl font-black text-balance leading-tight text-green-400 drop-shadow-[0_0_20px_rgba(0,255,65,0.8)] animate-pulse">
                    Siempre con actitud hacker (ético) y un toque creativo.
                  </h1>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {/* Backend Card */}
              <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-2xl shadow-2xl shadow-green-500/20 p-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/5 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="group hover:bg-green-500/5 p-2 rounded-xl transition-all duration-300 border border-transparent hover:border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 text-white px-2 py-1 rounded-lg font-black text-xs uppercase tracking-wider shadow-lg shadow-green-500/30 flex items-center gap-1">
                        <Server size={10} />
                        BACKEND
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1 flex-wrap">
                        {/* Laravel */}
                        <div className="w-6 h-6 bg-red-600 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <span className="text-white text-xs font-bold">L</span>
                        </div>
                        {/* PHP */}
                        <div className="w-6 h-6 bg-purple-700 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <span className="text-white text-xs font-bold">P</span>
                        </div>
                        {/* Python */}
                        <div className="w-6 h-6 bg-yellow-500 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <span className="text-black text-xs font-bold">Py</span>
                        </div>
                        {/* Node.js */}
                        <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <span className="text-white text-xs font-bold">N</span>
                        </div>
                        {/* NestJS */}
                        <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <span className="text-white text-xs font-bold">Ne</span>
                        </div>
                        {/* Prisma */}
                        <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <span className="text-white text-xs font-bold">Pr</span>
                        </div>
                      </div>
                      <div className="text-gray-100 text-xs font-medium">
                        Laravel, PHP, Python, Node.js, NestJS, Prisma
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frontend Card */}
              <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 p-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/5 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="group hover:bg-cyan-500/5 p-2 rounded-xl transition-all duration-300 border border-transparent hover:border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-2 py-1 rounded-lg font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/30 flex items-center gap-1">
                        <Monitor size={10} />
                        FRONTEND
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1 flex-wrap">
                        {/* React */}
                        <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <span className="text-white text-xs font-bold">R</span>
                        </div>
                        {/* Next.js */}
                        <div className="w-6 h-6 bg-gray-900 border-2 border-white rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <span className="text-white text-xs font-bold">N</span>
                        </div>
                        {/* Tailwind */}
                        <div className="w-6 h-6 bg-teal-500 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <span className="text-white text-xs font-bold">T</span>
                        </div>
                        {/* Bootstrap */}
                        <div className="w-6 h-6 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <span className="text-white text-xs font-bold">B</span>
                        </div>
                        {/* CSS */}
                        <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <span className="text-white text-xs font-bold">C</span>
                        </div>
                      </div>
                      <div className="text-gray-100 text-xs font-medium">
                        React, Next.js, Tailwind, Bootstrap, CSS Nativo
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Base de Datos Card */}
              <div className="bg-black/40 backdrop-blur-md border border-orange-500/30 rounded-2xl shadow-2xl shadow-orange-500/20 p-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/5 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="group hover:bg-orange-500/5 p-2 rounded-xl transition-all duration-300 border border-transparent hover:border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-2 py-1 rounded-lg font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-500/30 flex items-center gap-1">
                        <Database size={10} />
                        BASE DE DATOS
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1 flex-wrap">
                        {/* MySQL */}
                        <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <span className="text-white text-xs font-bold">M</span>
                        </div>
                        {/* PostgreSQL */}
                        <div className="w-6 h-6 bg-blue-700 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <span className="text-white text-xs font-bold">P</span>
                        </div>
                        {/* MongoDB */}
                        <div className="w-6 h-6 bg-green-700 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <span className="text-white text-xs font-bold">Mo</span>
                        </div>
                      </div>
                      <div className="text-gray-100 text-xs font-medium">MySQL, PostgreSQL, MongoDB</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DevOps Card */}
              <div className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-2xl shadow-2xl shadow-blue-500/20 p-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/5 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="group hover:bg-blue-500/5 p-2 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-2 py-1 rounded-lg font-black text-xs uppercase tracking-wider shadow-lg shadow-blue-500/30 flex items-center gap-1">
                        <Container size={10} />
                        DEVOPS
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1 flex-wrap">
                        {/* Docker */}
                        <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <span className="text-white text-xs font-bold">D</span>
                        </div>
                      </div>
                      <div className="text-gray-100 text-xs font-medium">Docker</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
