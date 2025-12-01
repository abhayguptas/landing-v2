'use client'

import { motion } from 'framer-motion'
import { ZoomParallax } from '@/components/ui/zoom-parallax'
import { cn } from '@/lib/utils'

const workImages = [
  {
    src: '/gta.png',
    alt: 'Renor Labs system grid cityscape',
  },
  {
    src: '/orbit.png',
    alt: 'Renor Labs orbital diagram artwork',
  },
  {
    src: '/gta.png',
    alt: 'Renor Labs abstract product collage',
  },
  {
    src: '/japan-gradient.png',
    alt: 'Renor Labs gradient poster composition',
  },
  {
    src: '/grid.png',
    alt: 'Renor Labs system grid layout',
  },
  {
    src: '/footer.png',
    alt: 'Renor Labs architectural footer graphic',
  },
  {
    src: '/2.png',
    alt: 'Renor Labs monochrome system illustration',
  },
  {
    src: 'fuji.png',
    alt: 'Renor Labs experimental bloom artwork',
  },
]

export function OurWork() {
  return (
    <section className="relative w-full bg-[#faf8f5]">
      {/* Section Label */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-12 md:pb-16">
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
          {/* Radial spotlight */}
          <div
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
              'bg-[radial-gradient(ellipse_at_center,rgba(37,37,37,0.1),transparent_50%)]',
              'blur-[30px]',
            )}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-left text-4xl md:text-5xl lg:text-6xl font-medium text-[#252525] leading-[1.1] max-w-4xl"
          >
            Winning Projects{' '}
            <span className="text-[#252525]/40">we've delivered.</span>
          </motion.h1>
        </div>
      </div>

      {/* Zoom Parallax Section */}
      <ZoomParallax images={workImages} />
    </section>
  )
}

