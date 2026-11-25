import { Link } from 'react-router-dom'
import { logo } from '../assets/images'

type LogoProps = {
  dark?: boolean
}

function Logo({ dark = false }: LogoProps) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={logo} alt="Personal logo" className={`h-8 w-8 ${dark ? 'invert' : ''}`} />
      <span className={`text-base font-semibold ${dark ? 'text-white' : 'text-black'}`}>Personal</span>
    </Link>
  )
}

export default Logo
