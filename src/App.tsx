import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { SmoothScroll } from './components/SmoothScroll'
import { useInView } from 'framer-motion'
import { useRef, lazy, Suspense } from 'react'

// Lazy load heavy components for code splitting
// Note: Testimonials loads eagerly due to Three.js initialization requirements
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })))
const StudioReveal = lazy(() => import('./components/StudioReveal').then(m => ({ default: m.StudioReveal })))
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })))
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })))

// Loading fallback component
const ComponentLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#252525]/20 border-t-[#252525] rounded-full animate-spin" />
  </div>
)

function App() {
  const studioRevealRef = useRef<HTMLDivElement>(null)
  const isStudioRevealInView = useInView(studioRevealRef, { amount: 0.3 })

  return (
    <SmoothScroll>
      <div className="min-h-screen w-full bg-[#faf8f5] text-[#252525] font-sans selection:bg-[#252525] selection:text-[#faf8f5]">
        <Navbar visible={!isStudioRevealInView} isLoaded={true} />
        <main>
          <Hero isLoaded={true} />
          <div ref={studioRevealRef}>
              <Suspense fallback={<ComponentLoader />}>
                <StudioReveal />
              </Suspense>
          </div>
            <About />
            <Suspense fallback={<ComponentLoader />}>
              <FAQ />
            </Suspense>
            <Suspense fallback={<ComponentLoader />}>
              <Footer />
            </Suspense>
        </main>
      </div>
    </SmoothScroll>
  )
}

export default App
