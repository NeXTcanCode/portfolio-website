import { experience } from '../data'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="container section">
      <p className="label">04 / Experience</p>
      {experience.map((e) => (
        <Reveal key={e.period + e.role} className="exp-row row">
          <div className="col-md-3 mono">{e.period}</div>
          <div className="col-md-9">
            <strong>{e.role}</strong> — {e.org}
            <ul className="points">{e.points.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </Reveal>
      ))}
    </section>
  )
}
