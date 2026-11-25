import { Apple, Play } from 'lucide-react'
import type { Company } from '../data/content'

function CompanyIcon({ company }: { company: Company }) {
  if (company === 'google') {
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-base font-extrabold">
        <span className="bg-[conic-gradient(#ea4335_0_25%,#fbbc05_0_50%,#34a853_0_75%,#4285f4_0)] bg-clip-text text-transparent">
          G
        </span>
      </span>
    )
  }

  if (company === 'youtube') {
    return (
      <span className="flex h-6 w-8 shrink-0 items-center justify-center rounded-md bg-red-600 text-white">
        <Play size={12} fill="currentColor" />
      </span>
    )
  }

  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center text-white">
      <Apple size={20} fill="currentColor" />
    </span>
  )
}

export default CompanyIcon
