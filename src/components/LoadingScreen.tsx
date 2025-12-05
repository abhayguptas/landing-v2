import { motion, AnimatePresence, useSpring, useMotionValue, useTransform, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [counter, setCounter] = useState(1)
  const [isComplete, setIsComplete] = useState(false)
  const [showCurtain, setShowCurtain] = useState(false)

  const progressMotionValue = useMotionValue(1)

  const springProgress = useSpring(progressMotionValue, {
    stiffness: 80,
    damping: 35,
    mass: 1,
  })

  const counterValue = useTransform(springProgress, (latest: number) => {
    const clamped = Math.min(100, Math.max(1, latest))
    return Math.round(clamped)
  })

  useMotionValueEvent(counterValue, 'change', (latest: number) => {
    setCounter(latest)
    if (latest === 100 && !showCurtain) {
      setTimeout(() => setShowCurtain(true), 200)
    }
  })

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const startTime = Date.now()
    const MIN_LOADING_DURATION = 4500
    const FAST_PHASE_DURATION = 2800
    const SLOW_PHASE_DURATION = 1200

    const imagePaths: string[] = [
      '/fuji.png',
      '/hero-gradient.png',
      '/japan-gradient.png',
      '/japan-text.svg',
      '/orbit.png',
      '/grid.png',
      '/f1.png',
      '/f2.png',
      '/f3.png',
      '/p1.png',
      '/p2.png',
      '/p3.png',
      '/1.png',
      '/2.png',
      '/footer.png',
      '/renor-logo.png',
      '/temp.png',
      '/gta.png',
    ]

    let loadedCount = 0
    const totalImages = imagePaths.length
    let assetsLoaded = false
    let fontsLoaded = false
    let counterInterval: number | undefined
    let reached95 = false
    let finalPhaseStarted = false

    const startFinalPhase = () => {
      if (finalPhaseStarted) return
      finalPhaseStarted = true

      const finalPhaseStartTime = Date.now()
      if (counterInterval !== undefined) {
        window.clearInterval(counterInterval)
      }

      const finalInterval = window.setInterval(() => {
        const elapsed = Date.now() - finalPhaseStartTime
        const progressInPhase = Math.min(1, elapsed / SLOW_PHASE_DURATION)
        const eased = 1 - Math.pow(1 - progressInPhase, 3)
        const finalProgress = 95 + eased * 5
        setProgress(finalProgress)
        progressMotionValue.set(finalProgress)

        if (progressInPhase >= 1) {
          window.clearInterval(finalInterval)
          setProgress(100)
          progressMotionValue.set(100)

          setTimeout(() => {
            setIsComplete(true)
            document.body.style.overflow = ''
            setTimeout(() => {
              onComplete()
            }, 200)
          }, 1400)
        }
      }, 30)
    }

    const checkComplete = () => {
      if (assetsLoaded && fontsLoaded && reached95) {
        const elapsed = Date.now() - startTime
        const remaining = Math.max(0, MIN_LOADING_DURATION - elapsed)
        setTimeout(() => {
          startFinalPhase()
        }, remaining)
      }
    }

    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => {
          loadedCount += 1
          resolve()
        }
        img.onerror = () => {
          loadedCount += 1
          resolve()
        }
        img.src = src
      })
    }

    setProgress(1)
    progressMotionValue.set(1)

    counterInterval = window.setInterval(() => {
      const elapsed = Date.now() - startTime

      if (elapsed < FAST_PHASE_DURATION) {
        const progressInPhase = elapsed / FAST_PHASE_DURATION
        const eased = 1 - Math.pow(1 - progressInPhase, 2)
        const fastProgress = 1 + eased * 94
        const assetProgress = (loadedCount / totalImages) * 95
        const finalProgress = Math.min(95, Math.max(fastProgress, assetProgress))

        setProgress(finalProgress)
        progressMotionValue.set(finalProgress)

        if (finalProgress >= 95 && !reached95) {
          reached95 = true
          setProgress(95)
          progressMotionValue.set(95)
          checkComplete()
        }
      } else if (!reached95) {
        reached95 = true
        setProgress(95)
        progressMotionValue.set(95)
        checkComplete()
      }
    }, 50)

    Promise.all(imagePaths.map(loadImage)).then(() => {
      assetsLoaded = true
      if (reached95) {
        checkComplete()
      }
    })

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        fontsLoaded = true
        if (reached95) {
          checkComplete()
        }
      })
    } else {
      window.setTimeout(() => {
        fontsLoaded = true
        if (reached95) {
          checkComplete()
        }
      }, 500)
    }

    return () => {
      if (counterInterval !== undefined) {
        window.clearInterval(counterInterval)
      }
      document.body.style.overflow = ''
    }
  }, [onComplete, progressMotionValue, showCurtain])

  const systemTexts: string[] = ['SYSTEM INITIALIZED', 'ASSETS LOADED', 'READY']

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#faf8f5] overflow-hidden"
        >
          {/* Stacking Curtain */}
          {showCurtain && (
            <>
              {[0, 1, 2].map((index) => (
                <motion.div
                  // eslint-disable-next-line react/no-array-index-key
                  key={`left-${index}`}
                  initial={{ x: 0 }}
                  animate={{ x: '-100%' }}
                  transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-y-0 left-0 w-1/2 bg-[#faf8f5] z-50"
                />
              ))}
              {[0, 1, 2].map((index) => (
                <motion.div
                  // eslint-disable-next-line react/no-array-index-key
                  key={`right-${index}`}
                  initial={{ x: 0 }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-y-0 right-0 w-1/2 bg-[#faf8f5] z-50"
                />
              ))}
            </>
          )}

          {/* Main Content */}
          <div className="relative w-full h-full flex items-center justify-center z-40">
            <div className="flex flex-col items-center justify-center gap-12">
              {/* Geometric Loader */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                <motion.div
                  className="absolute w-20 h-20 border border-[#252525]/15"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute w-14 h-14 border border-[#252525]/25"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute w-6 h-6 bg-[#252525]"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              {/* Counter */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-7xl font-bold text-[#252525] tabular-nums"
              >
                {counter}
                <span className="text-2xl md:text-3xl font-medium text-[#252525]/40 ml-2">%</span>
              </motion.div>

              {/* Progress bar */}
              <div className="w-64 md:w-80 h-0.5 bg-[#252525]/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#252525] rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              {/* Label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[#252525]/40 text-xs font-medium tracking-wider uppercase"
              >
                Loading
              </motion.p>
            </div>
          </div>

          {/* System texts */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex flex-col items-end gap-2">
            {systemTexts.map((text) => (
              <motion.p
                key={text}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#252525]/30 text-[10px] md:text-xs font-mono tracking-wider uppercase"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


