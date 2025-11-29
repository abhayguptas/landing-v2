import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-8 flex justify-between items-start pointer-events-none"
      >
        {/* Logo Section - Pointer events auto to allow clicking if needed */}
        <div className="flex flex-col items-center gap-0.3 pointer-events-auto">
          <div className="w-8 h-8 relative">
             <img src="/renor-logo.png" alt="Renor Logo" className="w-full h-full object-contain" />
          </div>
          {/* Gradient Line */}
          <div className="h-[2.5px] w-[85%] bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
        </div>

        {/* Desktop Menu */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex items-center bg-[#6b6a63] rounded-2xl p-1.5 pl-6 pr-1.5 gap-4 pointer-events-auto"
        >
          <div className="flex gap-5 text-[#faf8f5] font-medium text-base leading-[1.4]">
              {["Home", "About", "Pricing"].map((item, i) => (
                  <motion.a 
                    key={item}
                    href="#" 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={isLoaded ? { duration: 0.1 } : { duration: 0.5, delay: 0.8 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                    className="relative hover:text-white transition-colors group inline-block"
                    whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                    style={{ transformOrigin: "center" }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#faf8f5] transition-all duration-300 group-hover:w-full" />
                  </motion.a>
              ))}
          </div>
          <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                  opacity: 1, 
                  scale: 1 
              }}
              transition={isLoaded ? { duration: 0.1 } : { 
                  duration: 0.5, 
                  delay: 1.1,
                  ease: [0.16, 1, 0.3, 1]
              }}
              onAnimationComplete={() => setIsLoaded(true)}
              whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "#faf8f5",
                  color: "#252525",
                  transition: { duration: 0.1 }
              }}
              className="relative bg-[#252525] text-white px-3 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer leading-[1.4] overflow-hidden"
          >
              <motion.span
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                CONTACT
              </motion.span>
          </motion.button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden p-2 text-[#252525] bg-white/50 backdrop-blur-sm rounded-full pointer-events-auto"
        >
          <Menu size={24} />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#faf8f5] flex flex-col p-6"
          >
            <div className="flex justify-end">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-[#252525]"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8 text-2xl font-medium text-[#252525]">
              <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <button className="bg-[#252525] text-white px-8 py-3 rounded-full mt-4">
                CONTACT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

