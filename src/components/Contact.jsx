import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data'

export default function Contact() {
  return (
    <footer id="contact" className="container section contact">
      <p className="label">05 / Contact</p>
      <p className="contact-sub">Got a project, an idea, or a role in mind?</p>
      <a href={`mailto:${profile.email}`} className="mega-link">Let&apos;s talk →</a>
      <div className="socials">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      </div>
      <p className="mono foot">© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
    </footer>
  )
}
