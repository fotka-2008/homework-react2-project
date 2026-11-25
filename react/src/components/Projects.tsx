import { SquareArrowOutUpRight } from 'lucide-react'
import { projects } from '../data/content'
import SectionTitle from './SectionTitle'

function Projects() {
  return (
    <section id="projects" className="bg-black py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionTitle light="My" bold="Projects" dark />
        <div className="mt-12 flex flex-col gap-16 lg:mt-20 lg:gap-24">
          {projects.map((project, index) => (
            <article key={project.number} className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
              <div className={`overflow-hidden rounded-xl ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <span className="text-4xl font-extrabold sm:text-5xl">{project.number}</span>
                <h3 className="mt-5 text-2xl font-bold sm:text-3xl">{project.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">{project.description}</p>
                <span className="mt-6 inline-flex text-white">
                  <SquareArrowOutUpRight size={22} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
