import { Link } from 'react-router-dom'
import { heroWoman } from '../assets/images'

function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-5 py-20 text-center">
      <img src={heroWoman} alt="Developer illustration" className="w-56 object-contain sm:w-72" />
      <h1 className="mt-8 text-5xl font-extrabold">404</h1>
      <p className="mt-4 text-zinc-500">This page does not exist.</p>
      <Link to="/" className="mt-8 rounded bg-black px-8 py-3.5 text-sm font-semibold text-white">
        Back to Home
      </Link>
    </section>
  )
}

export default NotFound
