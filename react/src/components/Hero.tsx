import { heroMan } from '../assets/images'
import SocialLinks from './SocialLinks'

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-12 pb-16 sm:px-8 md:grid-cols-2 md:pt-16 lg:px-12 lg:pb-24">
      <div className="order-2 md:order-1">
        <h1 className="text-4xl leading-tight font-light sm:text-5xl lg:text-[56px] lg:leading-[1.25]">
          Hello I&apos;am <span className="font-extrabold">Evren Shah.</span>
          <br />
          <span className="font-extrabold">Frontend</span>{' '}
          <span className="font-extrabold text-white [-webkit-text-stroke:1.5px_black]">Developer</span>
          <br />
          Based In <span className="font-extrabold">India.</span>
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
          I&apos;m Evren Shah, a frontend developer who turns ideas into clean, fast and accessible web
          interfaces. I love building thoughtful user experiences with React and TypeScript, and I
          care about every pixel and every interaction on the page.
        </p>
        <SocialLinks className="mt-10" />
      </div>
      <div className="order-1 flex justify-center md:order-2 md:justify-end">
        <img
          src={heroMan}
          alt="Developer working on a laptop"
          className="w-64 max-w-full object-contain sm:w-80 lg:w-[440px]"
        />
      </div>
    </section>
  )
}

export default Hero
