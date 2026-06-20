import { useEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Problem from './components/Problem'
import Benefits from './components/Benefits'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Scarcity from './components/Scarcity'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-[100dvh] bg-[#05080D]">
      {/* Fixed grain noise overlay */}
      <div className="grain-overlay" aria-hidden="true" />
      <Nav />
      <Hero />
      <Ticker />
      <Problem />
      <Benefits />
      <About />
      <Testimonials />
      <Scarcity />
      <CtaFinal />
      <Footer />
    </div>
  )
}
