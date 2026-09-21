import { motion, useScroll, useSpring } from 'motion/react'
import { profile } from '../data'

const links = ['about', 'projects', 'skills', 'experience', 'contact']

export default function Nav() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return (
    <nav className="site-nav">
      <div className="container d-flex justify-content-between align-items-center">
        <a href="#top" className="logo">{profile.name.split(' ')[0]}<span>.</span></a>
        <ul className="nav-links d-none d-md-flex">
          {links.map((l) => (
            <li key={l}><a href={`#${l}`}>{l}</a></li>
          ))}
        </ul>
      </div>
      <motion.div className="progress" style={{ scaleX }} />
    </nav>
  )
}
