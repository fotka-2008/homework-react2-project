type SectionTitleProps = {
  light: string
  bold: string
  dark?: boolean
}

function SectionTitle({ light, bold, dark = false }: SectionTitleProps) {
  return (
    <h2
      className={`text-center text-3xl font-light sm:text-4xl md:text-5xl ${dark ? 'text-white' : 'text-black'}`}
    >
      {light} <span className="font-extrabold">{bold}</span>
    </h2>
  )
}

export default SectionTitle
