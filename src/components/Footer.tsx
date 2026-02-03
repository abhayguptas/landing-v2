import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  }

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.4 + (i * 0.1),
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    })
  }

  const bottomBarVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  }

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative z-30 bg-[#252525]"
    >
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left - Image (full height, edge to edge) */}
        <motion.div
          variants={imageVariants}
          className="lg:col-span-4 p-6 md:p-8 lg:p-0"
        >
          <img 
            src="/footer.png" 
            alt="Kubixter Systems" 
            className="w-full h-full object-contain lg:object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div 
          variants={containerVariants}
          className="lg:col-span-8 flex flex-col justify-between px-6 md:px-12 lg:px-14 py-12 lg:py-16"
        >
          {/* Large Kubixter Text */}
          <motion.div variants={itemVariants} className="mb-auto">
            <h2 className="sm:text-[24vw] md:text-[20vw] lg:text-[14vw] xl:text-[14vw] font-bold text-[#faf8f5] leading-[0.85] tracking-tight text-left lg:-ml-5 mt-8">
              Kubixter
            </h2>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* CTA */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-medium text-[#faf8f5] leading-tight mb-4">
                Let's build something together.
              </h3>
              <motion.a 
                href="mailto:contact@kubixter.com" 
                className="group inline-flex items-center gap-2 text-lg font-medium text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                contact@kubixter.com
                <motion.span 
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Links */}
            <div className="flex gap-5 text-sm font-medium text-[#faf8f5]/60">
              {[
                { label: 'Twitter', href: 'https://x.com/kubixters' },
                { label: 'LinkedIn', href: 'https://linkedin.com/company/kubixter' },
              ].map((link, i) => (
                <motion.a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  variants={linkVariants}
                  whileHover={{ y: -2, color: '#faf8f5' }}
                  transition={{ duration: 0.2 }}
                  className="transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        variants={bottomBarVariants}
        className="border-t border-[#faf8f5]/10"
      >
        <div className="px-6 md:px-12 lg:px-24 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            
            {/* Logo & Copyright */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-8 h-8">
                  <img src="/kubixter-logo.png" alt="Kubixter Logo" className="w-full h-full object-contain brightness-0 invert" />
                </div>
                <div className="h-[2px] w-[65%] bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff] mr-0.4" />
              </div>
              <span className="text-xs text-[#faf8f5]/50">
                © {currentYear} Kubixter Systems
              </span>
            </motion.div>

            {/* Bottom Links */}
            <motion.div 
              className="flex gap-5 text-xs text-[#faf8f5]/50"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="#" className="hover:text-[#faf8f5] transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-[#faf8f5] transition-colors duration-300">Terms</a>
              <span>Based in India</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  )
}

