import { useEffect } from 'react'
import Lenis from 'lenis'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ anchors: true })
    let id
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf) }
    id = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(id); lenis.destroy() }
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Contact />
    </>
  )
}
