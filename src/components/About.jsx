import { profile } from '../data'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="container section">
      <div className="row">
        <div className="col-md-3"><p className="label">01 / About</p></div>
        <Reveal className="col-md-9"><p className="lead-big">{profile.about}</p></Reveal>
      </div>
    </section>
  )
}
