import { testimonials } from '../data/content'
import SectionTitle from './SectionTitle'

function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <SectionTitle light="My" bold="Testimonial" />
      <div className="mt-12 grid items-center gap-8 md:grid-cols-3 lg:mt-16">
        {testimonials.map((item, index) => {
          const featured = index === 1
          return (
            <article
              key={item.name}
              className={`flex flex-col items-center rounded-xl px-6 py-10 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] ${
                featured ? 'bg-black text-white md:py-14' : 'border border-zinc-100 bg-white text-black'
              }`}
            >
              <img
                src={item.avatar}
                alt={item.name}
                className={`h-20 w-20 rounded-full border-2 object-cover ${featured ? 'border-white' : 'border-black'}`}
              />
              <p className={`mt-6 text-sm leading-relaxed ${featured ? 'text-zinc-300' : 'text-zinc-500'}`}>
                &ldquo;{item.text}&rdquo;
              </p>
              <span className={`mt-6 h-0.5 w-16 ${featured ? 'bg-white' : 'bg-black'}`} />
              <h3 className="mt-5 text-lg font-bold">{item.name}</h3>
              <span className={`mt-1 text-sm ${featured ? 'text-zinc-400' : 'text-zinc-500'}`}>{item.role}</span>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonials
