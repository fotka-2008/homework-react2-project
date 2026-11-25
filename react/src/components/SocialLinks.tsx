import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'

type SocialLinksProps = {
  className?: string
}

const box = 'flex h-11 w-11 items-center justify-center rounded border-2 border-black'

function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`${box} bg-black text-white`}>
        <FacebookIcon size={18} />
      </span>
      <span className={`${box} bg-white text-black`}>
        <InstagramIcon size={18} />
      </span>
      <span className={`${box} bg-white text-black`}>
        <TwitterIcon size={18} />
      </span>
      <span className={`${box} bg-white text-black`}>
        <LinkedinIcon size={18} />
      </span>
    </div>
  )
}

export default SocialLinks
