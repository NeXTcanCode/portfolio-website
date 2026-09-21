import { FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="container section">
      <p className="label">02 / Projects</p>
      <ul className="project-list">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <li className="project-row">
              <a href={p.live} target="_blank" rel="noreferrer" className="project-main">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span className="title-wrap">
                  <span className="title">{p.title}</span>
                  <span className="desc d-none d-md-block">{p.desc}</span>
                </span>
                <span className="tag d-none d-md-inline">{p.tag}</span>
                <FiArrowUpRight className="arrow" />
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
