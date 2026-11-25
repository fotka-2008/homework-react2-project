import { Link } from 'react-router-dom'
import Logo from './Logo'

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-8 sm:px-8 md:flex-row md:justify-between lg:px-12">
        <Logo dark />
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-300">
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Project</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
        <div className="text-center text-sm md:text-right">
          <p className="font-semibold">@ 2026. Personal</p>
          <p className="text-zinc-400">Made by Evren Shah</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
