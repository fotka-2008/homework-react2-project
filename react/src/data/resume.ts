const resumeText = `EVREN SHAH
Frontend Developer, India

Email: youremail@gmail.com
Phone: +91 12345 67890

EXPERIENCE
Lead Software Engineer at Google (Nov 2019 - Present)
Software Engineer at YouTube (Jan 2017 - Oct 2019)
Junior Software Engineer at Apple (Jan 2016 - Dec 2017)

SKILLS
JavaScript, TypeScript, React, Next.js, Node.js, Redux, Tailwind CSS, Bootstrap, Git, Figma
`

export function downloadResume() {
  const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'Evren-Shah-Resume.txt'
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
