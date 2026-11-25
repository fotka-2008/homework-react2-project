import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'
import { aboutWoman } from '../assets/images'

function About() {
  return (
    <>
      <AboutMe image={aboutWoman} />
      <Experience />
      <Testimonials />
    </>
  )
}

export default About
