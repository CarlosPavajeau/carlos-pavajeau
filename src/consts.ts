import type { Metadata, Site, Socials } from '@types'

export const SITE: Site = {
  name: 'Carlos Pavajeau',
  email: 'carlospavajeau@cantte.com',
  postsOnHomePage: 3,
  worksOnHomePage: 3,
  projectsOnHomePage: 3,
}

export const HOME: Metadata = {
  title: 'Carlos Pavajeau',
  description:
    'Desarrollador de software. Me gusta crear cosas y aprender nuevas tecnologías.',
}

export const BLOG: Metadata = {
  title: 'Blog',
  description:
    'Artículos sobre desarrollo de software, tecnología y otros temas.',
}

export const WORK: Metadata = {
  title: 'Trabajos',
  description: 'Proyectos en los que he trabajado.',
}

export const PROJECTS: Metadata = {
  title: 'Proyectos',
  description: 'Proyectos personales y de código abierto.',
}

export const SOCIALS: Socials = [
  {
    name: 'twitter-x',
    url: 'https://x.com/CarlosPavajeau',
  },
  {
    name: 'github',
    url: 'https://github.com/CarlosPavajeau',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/carlos-pavajeau/',
  },
]
