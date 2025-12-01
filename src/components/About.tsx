import { motion } from 'framer-motion'
import { Entropy } from '@/components/ui/entropy'

export function About() {
  return (
    <section 
      className="relative z-10 w-full bg-[#faf8f5]"
    >
      <div className="flex flex-col px-6 md:px-12 lg:px-24 py-24 md:py-32">
        
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
              About us
            </h2>
            <div className="h-[2.5px] w-full bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
          </div>
          <span className="text-sm md:text-base font-medium text-[#252525]/60">
            (01)
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
            Meet Renor{' '}
            <span className="text-[#252525]/40">a studio shaped by intention.</span>
          </motion.h1>
        </div>

        {/* Content Container - 12 column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-1">
          
          {/* Left Side - Entropy Animation (flipped) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="transform scale-x-[-1]">
              <Entropy size={360} className="rounded-lg" />
            </div>
            <p className="mt-4 text-sm text-[#252525]/60 italic tracking-wide">
              "Renor - Where Chaos Finds Form"
            </p>
          </div>

          {/* Right Side - Heading & Paragraph */}
          <div className="lg:col-span-7 lg:pl-8">
            
            {/* Static heading (no scroll-based word reveal) */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-10">
              Renor builds clear digital systems shaped with intention. We design and engineer products
              that are structured, dependable, and built to scale.
            </h3>

            {/* Static paragraph (no scroll-based word reveal) */}
            <p className="text-lg md:text-xl text-[#252525]/80 leading-relaxed">
              Our work is guided by clarity and reduction. We remove noise, create predictable flows, and craft interfaces
              that feel balanced and precise. Every product we build is rooted in strong design logic and clean engineering
              practices that last beyond the first release.
            </p>

          </div>

        </div>

        {/* Bottom Line */}
        <div className="w-full border-t border-dotted border-[#252525]/40 mt-16 md:mt-24" />
      </div>
    </section>
  )
}

