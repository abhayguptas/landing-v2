import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { SmoothScroll } from './components/SmoothScroll'

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen w-full bg-[#faf8f5] text-[#252525] font-sans selection:bg-[#252525] selection:text-[#faf8f5]">
        <Navbar />
        <main>
          <Hero />
          <About />
        </main>
      </div>
    </SmoothScroll>
  )
}

export default App
