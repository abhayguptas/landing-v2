import { motion, AnimatePresence } from 'framer-motion'
import { useState, memo } from 'react'
import { easing, durations, delays } from '../styles/tokens'

const services = [
  { 
    name: 'Brand Identity', 
    number: '1',
    description: 'We craft cohesive brand systems that communicate who you are with clarity and intention, from the core idea to every visual expression.',
    tags: ['Logo Design', 'Visual Identity Systems', 'Brand Guidelines', 'Typography & Color Systems', 'Naming & Tone of Voice', 'Brand Strategy'],
    images: [
      'https://source.unsplash.com/Ps5uw0KSIFo/800x1000',
      'https://cosmos.so/api/image/677246480'
    ]
  },
  { 
    name: 'Digital Design', 
    number: '2',
    description: 'We design intuitive digital experiences that balance aesthetics with functionality, creating interfaces that users love to interact with.',
    tags: ['Web Design', 'Mobile App Design', 'UI/UX Design', 'Design Systems', 'Prototyping', 'User Research'],
    images: [
      'https://cosmos.so/api/image/980384645',
      'https://cosmos.so/api/image/867651876'
    ]
  },
  { 
    name: 'Art Direction', 
    number: '3',
    description: 'We define the visual language and creative direction that brings your brand to life across all touchpoints and campaigns.',
    tags: ['Creative Direction', 'Visual Storytelling', 'Campaign Design', 'Photography Direction', 'Motion Graphics', 'Content Strategy'],
    images: [
      'https://cosmos.so/api/image/1877684951',
      'https://cosmos.so/api/image/1067858081'
    ]
  },
  { 
    name: 'Strategy & Consulting', 
    number: '4',
    description: 'We help you define clear goals, identify opportunities, and build roadmaps that align design with business objectives.',
    tags: ['Brand Strategy', 'Product Strategy', 'Market Research', 'Competitive Analysis', 'Workshop Facilitation', 'Growth Planning'],
    images: [
      'https://cosmos.so/api/image/1935260750',
      'https://cosmos.so/api/image/1516216588'
    ]
  },
]

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="relative w-full bg-[#faf8f5] px-6 md:px-12 lg:px-24 py-16 md:py-24">
      {/* Section Label */}
      <div className="flex justify-between items-center w-full mb-12 md:mb-16">
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-sm md:text-base font-medium text-[#252525]">
            Services
          </h2>
          <div className="h-[2.5px] w-full bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
        </div>
        <span className="text-sm md:text-base font-medium text-[#252525]/60">
          (02)
        </span>
      </div>

      {/* Header Section */}
      <div className="relative flex h-[30vh] items-center justify-start mb-6 md:mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-left text-4xl md:text-5xl lg:text-6xl font-medium text-[#252525] leading-[1.1] max-w-4xl"
        >
          What we offer{' '}
          <span className="text-[#252525]/40">to help you succeed.</span>
        </motion.h1>
      </div>

      {/* Box Container */}
      <div className="bg-[#262626] rounded-2xl md:rounded-3xl px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
        {/* Services List */}
        <div className="mb-12 md:mb-16">
          {services.map((service, i) => (
            <ServiceItem
              key={service.name}
              service={service}
              index={i}
              expandedIndex={expandedIndex}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              toggleExpand={toggleExpand}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <a 
            href="#pricing"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#faf8f5] text-[#262626] text-sm font-medium rounded-full hover:bg-white transition-colors"
          >
            See pricing
            <span className="text-base leading-none">+</span>
          </a>
        </div>
      </div>
    </section>
  )
}

const ServiceItem = memo(({
  service,
  index,
  expandedIndex,
  hoveredIndex,
  setHoveredIndex,
  toggleExpand
}: {
  service: typeof services[0]
  index: number
  expandedIndex: number | null
  hoveredIndex: number | null
  setHoveredIndex: (index: number | null) => void
  toggleExpand: (index: number) => void
}) => {
  return (
    <div className="relative">
      {/* Service Header */}
      <div className="group relative h-fit w-full overflow-visible">
        <button
          onClick={() => toggleExpand(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="w-full flex justify-between items-center py-3 md:py-4 cursor-pointer relative z-10"
        >
          <div className="relative">
            <h3 
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#faf8f5] tracking-tight text-left transition-all duration-500 group-hover:opacity-40 relative"
            >
              {service.name}
            </h3>
            
            {/* Hover Images - Background Card */}
            {expandedIndex !== index && (
              <div className="absolute right-8 -top-1 z-40 h-[56px] w-[45px] md:h-[78px] md:w-[56px] lg:h-[90px] lg:w-[67px] pointer-events-none">
                <div className="relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-[45px] h-[45px] md:w-[56px] md:h-[56px] lg:w-[67px] lg:h-[67px] overflow-hidden transition-all rounded-md">
                  <img 
                    src={service.images[1]} 
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            )}
            
            {/* Hover Images - Foreground Card */}
            {expandedIndex !== index && (
              <div className="absolute right-8 -top-1 z-40 h-[56px] w-[45px] md:h-[78px] md:w-[56px] lg:h-[90px] lg:w-[67px] translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12 pointer-events-none">
                <div className="relative duration-200 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-[45px] h-[45px] md:w-[56px] md:h-[56px] lg:w-[67px] lg:h-[67px] overflow-hidden transition-all rounded-md">
                  <img 
                    src={service.images[0]} 
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            )}
          </div>
          
          {/* Number / Plus / X indicator */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {expandedIndex === index ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 45, scale: 1 }}
                  exit={{ opacity: 0, rotate: -45, scale: 0.5 }}
                  transition={{ 
                    duration: durations.moderate, 
                    ease: easing.bounce,
                    opacity: { duration: durations.quick }
                  }}
                  className="absolute text-4xl md:text-5xl lg:text-6xl font-semibold text-[#faf8f5]/50"
                >
                  +
                </motion.span>
              ) : hoveredIndex === index ? (
                <motion.span
                  key="plus"
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                  transition={{ 
                    duration: durations.default, 
                    ease: easing.bounce,
                    opacity: { duration: durations.fast }
                  }}
                  className="absolute text-4xl md:text-5xl lg:text-6xl font-semibold text-[#faf8f5]/50"
                >
                  +
                </motion.span>
              ) : (
                <motion.span
                  key="number"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ 
                    duration: durations.quick, 
                    ease: easing.smooth,
                    opacity: { duration: durations.fast }
                  }}
                  className="absolute text-4xl md:text-5xl lg:text-6xl font-semibold text-[#faf8f5]/20"
                >
                  {service.number}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </button>
      </div>

      {/* Expanded Content */}
      <AnimatePresence mode="wait">
        {expandedIndex === index && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: { duration: durations.slow, ease: easing.smooth },
                opacity: { duration: durations.moderate, delay: delays.default, ease: easing.smooth }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: durations.moderate, delay: delays.quick, ease: easing.smooth },
                opacity: { duration: durations.quick, ease: easing.smooth }
              }
            }}
            className="overflow-hidden"
          >
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: durations.moderate, delay: delays.default, ease: easing.smooth }}
              className="pt-6 pb-12 md:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
            >
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: durations.moderate, delay: delays.moderate, ease: easing.smooth }}
                className="text-base md:text-lg text-[#faf8f5]/70 leading-relaxed max-w-xl"
              >
                {service.description}
              </motion.p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 lg:justify-end lg:content-start">
                {service.tags.map((tag, tagIndex) => (
                  <motion.span 
                    key={tag}
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: durations.moderate, 
                      delay: 0.4 + (tagIndex * 0.06), 
                      ease: easing.smooth 
                    }}
                    className="px-4 py-2 bg-[#faf8f5] text-[#262626] text-sm font-medium rounded-full"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})
