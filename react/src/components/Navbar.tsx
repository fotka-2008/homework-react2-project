import { Link } from 'react-router-dom'
import { Download } from 'lucide-react'
import Logo from './Logo'

function Navbar() {
  return (
    <header className="border-b border-zinc-100 bg-white">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Logo />
        <ul className="flex flex-wrap items-center gap-6 text-sm font-semibold md:gap-10">
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Project</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
        <div className="flex items-center gap-2 rounded bg-black px-6 py-3 text-sm font-semibold text-white">
          Resume
          <Download size={16} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
