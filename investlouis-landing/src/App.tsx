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
  return (
    <div className="min-h-screen bg-[#05080D]">
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
