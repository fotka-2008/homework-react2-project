import type { LucideIcon } from 'lucide-react'
import { Atom, Braces, Database, FileCode2, GitBranch, Hexagon, Layers, PenTool, Server, Wind } from 'lucide-react'
import { avatarOne, avatarThree, avatarTwo, projectOne, projectThree, projectTwo } from '../assets/images'

export type Skill = {
  name: string
  Icon: LucideIcon
}

export const skills: Skill[] = [
  { name: 'Git', Icon: GitBranch },
  { name: 'Javascript', Icon: FileCode2 },
  { name: 'Tailwind', Icon: Wind },
  { name: 'Node.js', Icon: Hexagon },
  { name: 'Bootstrap', Icon: Layers },
  { name: 'Next.js', Icon: Server },
  { name: 'Redux', Icon: Braces },
  { name: 'MongoDB', Icon: Database },
  { name: 'React', Icon: Atom },
  { name: 'Figma', Icon: PenTool },
]

export type Company = 'google' | 'youtube' | 'apple'

export type Experience = {
  role: string
  company: Company
  period: string
  description: string
}

export const experiences: Experience[] = [
  {
    role: 'Lead Software Engineer at Google',
    company: 'google',
    period: 'Nov 2019 - Present',
    description:
      'As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for core search features. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.',
  },
  {
    role: 'Software Engineer at Youtube',
    company: 'youtube',
    period: 'Jan 2017 - Oct 2019',
    description:
      'At Youtube, I served as a Software Engineer, focusing on the design and implementation of frontend systems for a dynamic video platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.',
  },
  {
    role: 'Junior Software Engineer at Apple',
    company: 'apple',
    period: 'Jan 2016 - Dec 2017',
    description:
      'During my tenure at Apple, I worked on shaping the architecture of important software projects. Responsible for building scalable and efficient interfaces, I collaborated closely with a cross-functional team of designers and engineers.',
  },
]

export type Project = {
  number: string
  title: string
  description: string
  image: string
  link: string
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Crypto Screener Application',
    description:
      'A crypto screener to track live market data with fast filters, clean charts and a responsive layout that works on every device. Built with React, TypeScript and a focus on performance.',
    image: projectOne,
    link: 'https://github.com',
  },
  {
    number: '02',
    title: 'Euphoria - Ecommerce (Apparels) Website Template',
    description:
      'A modern ecommerce template for apparel brands with product listings, cart, checkout flow and a fully responsive design. Every page was crafted to make shopping simple, fast and visually pleasant.',
    image: projectTwo,
    link: 'https://github.com',
  },
  {
    number: '03',
    title: 'Blog Website Template',
    description:
      'A clean and colorful blog template with article cards, categories and reading-friendly typography. Built with reusable components so authors can publish beautiful posts in minutes.',
    image: projectThree,
    link: 'https://github.com',
  },
]

export type Testimonial = {
  name: string
  role: string
  text: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Robert Brown',
    role: 'Founder',
    text: 'Evren delivered our website ahead of schedule. The design is clean, the code is solid and the communication was excellent from start to finish.',
    avatar: avatarOne,
  },
  {
    name: 'Fiona Shaw',
    role: 'Designer',
    text: 'Working with Evren was a pleasure. Every detail of my Figma mockups was implemented pixel perfect and the site feels incredibly smooth.',
    avatar: avatarTwo,
  },
  {
    name: 'David Smith',
    role: 'Developer',
    text: 'Great attention to detail and a deep understanding of React. Our product became faster and much easier to maintain after the refactor.',
    avatar: avatarThree,
  },
]
