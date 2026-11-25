import { experiences } from '../data/content'
import CompanyIcon from './CompanyIcon'
import SectionTitle from './SectionTitle'

function Experience() {
  return (
    <section id="experience" className="bg-black py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionTitle light="My" bold="Experience" dark />
        <div className="mt-12 flex flex-col gap-6 lg:mt-16 lg:gap-8">
          {experiences.map((item, index) => (
            <article
              key={item.role}
              className={`rounded-lg border border-zinc-600 p-6 sm:p-8 ${
                index === 1 ? 'bg-zinc-800' : 'bg-black'
              }`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <CompanyIcon company={item.company} />
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{item.role}</h3>
                </div>
                <span className="text-sm font-semibold text-zinc-300 sm:text-base">{item.period}</span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
