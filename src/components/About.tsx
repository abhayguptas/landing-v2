import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import { useRef } from 'react'

export function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 50, 
    damping: 20, 
    restDelta: 0.001 
  })

  // We want the text fill animation to happen when the section is in view and "pinned".
  // Adjusting the height to allow scroll space.
  
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const words = text.split(" ")

  return (
    <section 
      ref={containerRef} 
      className="relative z-10 w-full bg-[#faf8f5] min-h-[250vh]"
    >
      <div className="sticky top-0 min-h-screen flex flex-col px-6 md:px-12 lg:px-24 py-24 md:py-32">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-0.5 shrink-0 mb-12 md:mb-16 w-fit"
        >
          <h2 className="text-sm md:text-base font-bold tracking-widest uppercase text-[#252525]">
            ABOUT
          </h2>
          <div className="h-[3px] w-full bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
        </motion.div>

        {/* Content - Word by Word Scroll Reveal */}
        <div className="flex-1 max-w-4xl">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed flex flex-wrap gap-x-[0.25em] gap-y-1">
            {words.map((word, i) => {
              // Spread the animation across more scroll distance for smoothness
              const start = (i / words.length) * 0.9; 
              const end = start + (1 / words.length * 3);
              return (
                <Word key={i} range={[start, end]} progress={smoothProgress}>
                  {word}
                </Word>
              )
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

const Word = ({ children, range, progress }: { children: string, range: [number, number], progress: MotionValue<number> }) => {
  const opacity = useTransform(progress, range, [0.1, 1])
  const y = useTransform(progress, range, [10, 0])
  
  return (
    <motion.span style={{ opacity, y }} className="text-[#252525] inline-block transition-colors duration-500">
      {children}
    </motion.span>
  )
}
