import { aboutMan } from '../assets/images'

type AboutMeProps = {
  image?: string
}

function AboutMe({ image = aboutMan }: AboutMeProps) {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:gap-20 lg:px-12 lg:py-24"
    >
      <div className="flex justify-center md:justify-start">
        <img src={image} alt="Illustration of Evren Shah" className="w-full max-w-md object-contain" />
      </div>
      <div>
        <h2 className="text-3xl font-light sm:text-4xl md:text-5xl">
          About <span className="font-extrabold">Me</span>
        </h2>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-zinc-500 sm:text-base">
          <p>
            I&apos;m a passionate, self-proclaimed designer who specializes in full stack development
            (React.js &amp; Node.js). I am very enthusiastic about bringing the technical and visual
            aspects of digital products to life. User experience, pixel perfect design, and writing
            clear, readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I&apos;ve continued to grow
            and evolve as a developer, taking on new challenges and learning the latest technologies
            along the way. Now, I&apos;m building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Tailwind CSS and much more.
          </p>
          <p>
            When I&apos;m not in full-on developer mode, you can find me hovering around on Twitter or
            on Indie Hacker, witnessing the journey of early startups or enjoying some free time. You
            can follow me on Twitter where I share tech-related bites and build in public.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
