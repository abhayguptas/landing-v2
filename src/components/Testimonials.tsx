'use client'

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { ParticleSphere } from './ui/3d-orbit-gallery'

export function Testimonials() {
  return (
    <section className="relative w-full bg-[#faf8f5] px-6 md:px-12 lg:px-24 py-24 md:py-32 overflow-hidden">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="flex justify-between items-center w-full mb-12 md:mb-16"
      >
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-sm md:text-base font-medium text-[#252525]">
            Testimonials
          </h2>
          <div className="h-[2.5px] w-full bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
        </div>
        <span className="text-sm md:text-base font-medium text-[#252525]/60">
          (06)
        </span>
      </motion.div>

      {/* Header Section */}
      <div className="relative flex h-[30vh] items-center justify-start mb-6 md:mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-left text-4xl md:text-5xl lg:text-6xl font-medium text-[#252525] leading-[1.1] max-w-4xl"
        >
          What our clients say{' '}
          <span className="text-[#252525]/40">about us.</span>
        </motion.h1>
      </div>

      {/* 3D Orbit Gallery Container */}
      <div className="relative w-full flex items-center justify-center" style={{ height: '80vh', width: '100%' }}>
        <Canvas
          camera={{ position: [0, -6, 20], fov: 50 }}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <ParticleSphere />
          <OrbitControls 
            enablePan={false} 
            enableZoom={false} 
            enableRotate={false}
            minDistance={20}
            maxDistance={20}
          />
        </Canvas>
      </div>
    </section>
  )
}

