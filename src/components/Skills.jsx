import SlickModule from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { skills } from '../data'
import Reveal from './Reveal'

// react-slick is CJS; Vite can hand back the module object instead of the component
const Slider = SlickModule.default ?? SlickModule

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  cssEase: 'linear',
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  swipeToSlide: true,
  rtl: false,
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container"><p className="label">03 / Skills</p></div>
      <div className="marquee">
        <Slider {...settings}>
          {skills.map((s) => (
            <div key={s}><span className="marquee-item">{s}<i>✦</i></span></div>
          ))}
        </Slider>
      </div>
      <Reveal className="chips container">
        {skills.map((s) => <span key={s} className="chip">{s}</span>)}
      </Reveal>
    </section>
  )
}
