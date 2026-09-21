import { TypeAnimation } from 'react-type-animation'
import { motion } from 'motion/react'
import { FiArrowDownRight, FiMail } from 'react-icons/fi'
import { profile } from '../data'

const stats = [
  ['5+', 'Years experience'],
  ['30%', 'Faster page loads'],
  ['25%', 'Delivery efficiency'],
]

const up = (i) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.1 * i, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <header id="top" className="hero container">
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <motion.p className="label" {...up(0)}><span className="pulse" /> Available for work</motion.p>
      <motion.h1 className="hero-name" {...up(1)}>
        {profile.name.split(' ')[0]}<br /><span className="grad">{profile.name.split(' ')[1]}</span>
      </motion.h1>
      <motion.div {...up(2)}>
        <TypeAnimation sequence={profile.roles} repeat={Infinity} className="hero-role" wrapper="p" />
      </motion.div>
      <motion.div className="cta-row" {...up(3)}>
        <a href="#projects" className="btn-fill">See my work <FiArrowDownRight /></a>
        <a href={`mailto:${profile.email}`} className="btn-line"><FiMail /> Say hello</a>
      </motion.div>
      <motion.div className="stats" {...up(4)}>
        {stats.map(([n, l]) => (
          <div key={l}><strong>{n}</strong><span>{l}</span></div>
        ))}
      </motion.div>
    </header>
  )
}
