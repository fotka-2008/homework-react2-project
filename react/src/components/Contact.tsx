import { Mail, Phone } from 'lucide-react'
import SocialLinks from './SocialLinks'

const fieldClass = 'w-full rounded border-2 border-zinc-300 bg-white px-5 py-4 text-sm text-zinc-400'

function Contact() {
  return (
    <section id="contact" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:gap-20 lg:px-12 lg:py-24">
      <div className="order-2 flex flex-col gap-5 md:order-1">
        <div className={fieldClass}>Your name</div>
        <div className={fieldClass}>Email</div>
        <div className={fieldClass}>Subject</div>
        <div className={`${fieldClass} h-36`}>How can I help?*</div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded bg-black px-8 py-3.5 text-sm font-semibold text-white">Send</div>
          <SocialLinks />
        </div>
      </div>
      <div className="order-1 md:order-2">
        <h2 className="text-4xl leading-tight font-extrabold sm:text-5xl lg:text-[56px]">
          Let&apos;s <span className="text-white [-webkit-text-stroke:1.5px_black]">talk</span> for
          <br />
          Something special
        </h2>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-zinc-500 sm:text-base">
          I seek to push the limits of creativity to create high-engaging, user-friendly, and
          memorable interactive experiences.
        </p>
        <div className="mt-8 flex flex-col gap-3 text-lg font-semibold sm:text-xl">
          <p className="flex items-center gap-3">
            <Mail size={20} />
            youremail@gmail.com
          </p>
          <p className="flex items-center gap-3">
            <Phone size={20} />
            1234567890
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
