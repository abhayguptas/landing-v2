'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  id: number
  label: string
  title: string
  location: string
  date: string
  image: string
  alt: string
}

const projects: Project[] = [
  {
    id: 1,
    label: 'Rooftop Projects',
    title: 'Delivering sustainable energy for a multi-use rooftop garden in South Jakarta',
    location: 'Jakarta',
    date: 'Jan 1, 2025',
    image: '/p1.png',
    alt: 'Rooftop solar panel project'
  },
  {
    id: 2,
    label: 'Office Projects',
    title: 'Ground-mounted solar array designed to power a micro-grid in West Java',
    location: 'Semarang',
    date: 'May 6, 2025',
    image: '/p2.png',
    alt: 'Office solar panel project'
  },
  {
    id: 3,
    label: 'Residential Projects',
    title: 'Integrated solar solution for sustainable living in urban environments',
    location: 'Bandung',
    date: 'Mar 15, 2025',
    image: '/p3.png',
    alt: 'Residential solar panel project'
  },
  {
    id: 4,
    label: 'Industrial Projects',
    title: 'Large-scale solar farm providing clean energy for manufacturing facilities',
    location: 'Surabaya',
    date: 'Feb 20, 2025',
    image: '/1.png',
    alt: 'Industrial solar panel project'
  }
]

export function OurWork() {
  return (
    <section className="relative w-full bg-[#faf8f5]">
      {/* Section Label */}
      <div className="relative z-10 px-4 md:px-12 lg:px-24 pt-24 md:pt-32 pb-12 md:pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex justify-between items-center w-full mb-12 md:mb-16"
        >
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-sm md:text-base font-medium text-[#252525]">
              Our Work
            </h2>
            <div className="h-[2.5px] w-full bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
          </div>
          <span className="text-sm md:text-base font-medium text-[#252525]/60">
            (05)
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
            Winning Projects{' '}
            <span className="text-[#252525]/40">we've delivered</span>
          </motion.h1>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-4 md:px-12 lg:px-24 pb-24 md:pb-32">
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
              }}
              className={index !== projects.length - 1 ? 'border-b border-dotted border-[#252525]/30 pb-12 md:pb-16 mb-12 md:mb-16' : ''}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - Text */}
                <div className="flex flex-col justify-between min-h-[300px] md:min-h-[350px]">
                  <div className="flex flex-col gap-4">
                    <p className="text-xs md:text-sm font-medium text-[#252525]/60 uppercase tracking-wider">
                      {project.label}
                    </p>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#252525] leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-[#252525]/60">
                    {project.location} • {project.date}
                  </p>
                </div>

                {/* Right Column - Image */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* View More Details Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute bottom-4 right-4 bg-[#faf8f5]/95 backdrop-blur-sm text-[#252525] px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg border border-[#252525]/10 hover:bg-[#faf8f5] transition-colors"
                    >
                      View More Details
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

