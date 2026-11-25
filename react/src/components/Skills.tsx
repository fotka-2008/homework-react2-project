import { skills } from '../data/content'
import SectionTitle from './SectionTitle'

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <SectionTitle light="My" bold="Skills" />
      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:gap-8 lg:grid-cols-5 lg:gap-10">
        {skills.map(({ name, Icon }, index) => (
          <div
            key={name}
            className={`flex aspect-square flex-col items-center justify-center gap-5 rounded border-2 border-black ${
              index === 1 ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            <Icon size={44} strokeWidth={1.75} />
            <span className="text-sm font-bold sm:text-base">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
