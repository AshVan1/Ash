'use client'

import { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

interface ColoredModelProps {
  modelPath: string
  scale?: number
  rotationSpeed?: number
  className?: string
  color?: string
}

function Model({ modelPath, scale = 1, rotationSpeed = 0.5, color = "#ffffff" }: { modelPath: string; scale?: number; rotationSpeed?: number; color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null)

  // Load STL file
  useEffect(() => {
    const loadSTL = async () => {
      try {
        const { STLLoader } = await import('three/addons/loaders/STLLoader.js')
        const loader = new STLLoader()
        
        loader.load(
          modelPath,
          (geometry) => {
            // Center the geometry
            geometry.computeBoundingBox()
            const center = new THREE.Vector3()
            geometry.boundingBox?.getCenter(center)
            geometry.translate(-center.x, -center.y, -center.z)
            
            // Scale to fit in view
            const box = new THREE.Box3().setFromBufferAttribute(geometry.attributes.position as THREE.BufferAttribute)
            const size = box.getSize(new THREE.Vector3())
            const maxDim = Math.max(size.x, size.y, size.z)
            const scaleFactor = 2 / maxDim
            geometry.scale(scaleFactor, scaleFactor, scaleFactor)
            
            setGeometry(geometry)
          },
          undefined,
          (error) => {
            console.error('Error loading STL:', error)
          }
        )
      } catch (error) {
        console.error('Error importing STLLoader:', error)
      }
    }

    loadSTL()
  }, [modelPath])

  // Rotation animation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * rotationSpeed
    }
  })

  if (!geometry) {
    return null
  }

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhysicalMaterial
        color={color}
        metalness={1}
        roughness={0}
        reflectivity={1}
        clearcoat={1}
        clearcoatRoughness={0}
      />
    </mesh>
  )
}

export default function ColoredModel({ 
  modelPath, 
  scale = 1, 
  rotationSpeed = 0.5, 
  className = "",
  color = "#ffffff"
}: ColoredModelProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        {/* Enhanced Lighting for Chrome Effect */}
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <pointLight position={[-10, -10, -5]} intensity={0.8} />
        <pointLight position={[0, 10, 0]} intensity={1.0} />
        
        {/* Environment for realistic chrome reflections */}
        <Environment preset="sunset" />
        
        {/* Model */}
        <Suspense fallback={null}>
          <Model 
            modelPath={modelPath} 
            scale={scale} 
            rotationSpeed={rotationSpeed} 
            color={color}
          />
        </Suspense>
        
        {/* Controls */}
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          autoRotate={false}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
} 