import { motion } from 'framer-motion'
import { Zap, Feather, Clock } from 'lucide-react'

export function WhyUs() {
  return (
    <section className="relative w-full bg-[#faf8f5] px-4 md:px-12 lg:px-24 py-24 md:py-32">
      
      {/* Section Label */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-between items-center w-full mb-16 md:mb-28"
      >
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-sm md:text-base font-medium text-[#252525]">
            Why us
          </h2>
          <div className="h-[2.5px] w-full bg-gradient-to-r from-[#ff4d00] via-[#ffea00] to-[#0066ff]" />
        </div>
        <span className="text-sm md:text-base font-medium text-[#252525]/60">
          (04)
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
          We cut through noise to create designs that are{' '}
          <span className="text-[#252525]/40">thoughtful, timeless, and impactful.</span>
        </motion.h1>
      </div>

      {/* Bento Grid */}
      <div className="mt-38 bg-[#262626] rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        
          {/* Column 1 - Outer container with dark card + features list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#f0efeb] rounded-2xl p-4 flex flex-col gap-3"
        >
          {/* Dark Card */}
          <div className="bg-[#262626] rounded-xl p-5 flex flex-col min-h-[50px]">
            
            {/* Animated Infinity Symbol */}
            <div className="flex-1 min-h-[120px] mb-4 flex items-center justify-center relative overflow-hidden">
              <svg
                className="w-full h-full"
                viewBox="30 20 140 60"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Glassy effect filter */}
                  <filter id="glassy-effect-card1" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.3 0" result="glassy" />
                    <feComposite in="SourceGraphic" in2="glassy" operator="over" />
                  </filter>
                  
                  {/* Moving beige gradient */}
                  <linearGradient id="moving-beige-card1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d4c5b9" stopOpacity="0.6">
                      <animate attributeName="offset" values="0;1;0" dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#e8ddd4" stopOpacity="0.4">
                      <animate attributeName="offset" values="0.5;1.5;0.5" dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#d4c5b9" stopOpacity="0.6">
                      <animate attributeName="offset" values="1;2;1" dur="4s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  
                  {/* Glow gradient at intersection */}
                  <radialGradient id="infinity-glow-card1" fx="0.5" fy="0.5">
                    <stop offset="0%" stopColor="#d4c5b9" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#e8ddd4" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                  
                  {/* Infinity symbol gradient */}
                  <linearGradient id="infinity-gradient-card1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3a3a3a" />
                    <stop offset="50%" stopColor="#2a2a2a" />
                    <stop offset="100%" stopColor="#3a3a3a" />
                  </linearGradient>
                </defs>
                
                {/* Glow at intersection */}
                <circle
                  cx="100"
                  cy="50"
                  r="16"
                  fill="url(#infinity-glow-card1)"
                  opacity="0.6"
                >
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="r"
                    values="14;18;14"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                
                {/* Infinity Symbol Path - Complete */}
                <g opacity="0">
                  <animate
                    attributeName="opacity"
                    from="0"
                    to="1"
                    dur="1.5s"
                    fill="freeze"
                  />
                  <path
                    d="M 50 50 
                       C 50 30, 70 30, 85 40
                       C 95 47, 95 47, 100 50
                       C 105 53, 105 53, 115 60
                       C 130 70, 150 70, 150 50
                       C 150 30, 130 30, 115 40
                       C 105 47, 105 47, 100 50
                       C 95 53, 95 53, 85 60
                       C 70 70, 50 70, 50 50 Z"
                    fill="none"
                    stroke="url(#infinity-gradient-card1)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="320"
                    strokeDashoffset="320"
                    filter="url(#glassy-effect-card1)"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="320"
                      to="0"
                      dur="2.5s"
                      begin="0.2s"
                      fill="freeze"
                    />
                  </path>
                  
                  {/* Moving beige overlay */}
                  <path
                    d="M 50 50 
                       C 50 30, 70 30, 85 40
                       C 95 47, 95 47, 100 50
                       C 105 53, 105 53, 115 60
                       C 130 70, 150 70, 150 50
                       C 150 30, 130 30, 115 40
                       C 105 47, 105 47, 100 50
                       C 95 53, 95 53, 85 60
                       C 70 70, 50 70, 50 50 Z"
                    fill="none"
                    stroke="url(#moving-beige-card1)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.7"
                  />
                </g>
                
                {/* Text inside infinity loops */}
                <g opacity="0">
                  <animate
                    attributeName="opacity"
                    from="0"
                    to="1"
                    dur="1s"
                    begin="2.5s"
                    fill="freeze"
                  />
                  {/* Renor text in left loop */}
                  <text
                    x="72"
                    y="51"
                    fill="#faf8f5"
                    fontSize="8"
                    fontWeight="500"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="'Space Grotesk', sans-serif"
                    letterSpacing="0.5px"
                    opacity="0.9"
                  >
                    Renor
                  </text>
                  
                  {/* Keizer text in right loop */}
                  <text
                    x="129"
                    y="51"
                    fill="#faf8f5"
                    fontSize="8"
                    fontWeight="500"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="'Space Grotesk', sans-serif"
                    letterSpacing="0.5px"
                    opacity="0.9"
                  >
                    Keizer
                  </text>
                </g>
                
                {/* Animated stroke effect */}
                <path
                  d="M 50 50 
                     C 50 30, 70 30, 85 40
                     C 95 47, 95 47, 100 50
                     C 105 53, 105 53, 115 60
                     C 130 70, 150 70, 150 50
                     C 150 30, 130 30, 115 40
                     C 105 47, 105 47, 100 50
                     C 95 53, 95 53, 85 60
                     C 70 70, 50 70, 50 50"
                  fill="none"
                  stroke="#d4c5b9"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                  strokeDasharray="320"
                  strokeDashoffset="320"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="320"
                    to="0"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
            
            {/* <div className="flex items-center justify-between">
              <span className="text-sm text-[#faf8f5]/60">© 2025</span>
            </div> */}
          </div>

          {/* Keizer Growth Content */}
          <div className="bg-white rounded-xl p-5 flex flex-col items-center text-center">
            {/* Top text */}
            <p className="text-xs md:text-sm text-[#252525]/70 mb-6">
              Continuous creation → continuous growth
            </p>
            
            {/* Main heading */}
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#252525] leading-tight mb-4">
              We Plan. We Build.<br />
              Keizer Grows.
            </h4>
            
            {/* Subtitle */}
            <p className="text-xs md:text-sm text-[#252525]/60 mb-8">
              A complete 0→1→100 ecosystem for founders
            </p>
            
            {/* Timeline progression */}
            <div className="w-full max-w-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-3xl font-bold text-[#252525] mb-1">0</span>
                  <span className="text-xs text-[#252525]/60">Idea</span>
                </div>
                <div className="flex-1 h-[1px] bg-[#252525]/20 mx-2" />
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-3xl font-bold text-[#252525] mb-1">1</span>
                  <span className="text-xs text-[#252525]/60">Build</span>
                </div>
                <div className="flex-1 h-[1px] bg-[#252525]/20 mx-2" />
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-3xl font-bold text-[#252525] mb-1">10</span>
                  <span className="text-xs text-[#252525]/60">Launch</span>
                </div>
                <div className="flex-1 h-[1px] bg-[#252525]/20 mx-2" />
                <div className="flex flex-col items-center">
                  <span className="text-2xl md:text-3xl font-bold text-[#252525] mb-1">100</span>
                  <span className="text-xs text-[#252525]/60">Scale</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

          {/* Column 2 - Empty space */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#f0efeb] rounded-2xl p-6 flex flex-col relative overflow-hidden"
        >
          {/* Empty space */}
          <div className="flex-1 min-h-[350px]" />
        </motion.div>

          {/* Column 3 - Outer container with 3 inner cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#f0efeb] rounded-2xl p-4 flex flex-col gap-3"
        >
          {/* Streamlined Process */}
          <div className="bg-white rounded-xl p-5 mt-3">
            <Zap className="w-5 h-5 text-[#252525]/50 mb-3" />
            <h4 className="text-base font-semibold text-[#252525] mb-2">Streamlined Process</h4>
            <p className="text-sm text-[#252525]/60 leading-relaxed mb-0">
              Our focused, step-by-step approach saves time and keeps projects moving smoothly.
            </p>
          </div>

          {/* Scalable Design */}
          <div className="bg-white rounded-xl p-5">
            <Feather className="w-5 h-5 text-[#252525]/50 mb-3" />
            <h4 className="text-base font-semibold text-[#252525] mb-2">Scalable Design</h4>
            <p className="text-sm text-[#252525]/60 leading-relaxed mb-0">
              We create systems that grow with your brand and stay effective over time.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="bg-white rounded-xl p-5">
            <Clock className="w-5 h-5 text-[#252525]/50 mb-3" />
            <h4 className="text-base font-semibold text-[#252525] mb-2">24/7 Dedicated Support</h4>
            <p className="text-sm text-[#252525]/60 leading-relaxed mb-0">
              We're always here when you need us, ready to answer questions, provide updates.
            </p>
          </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
