export type SectionId =
  | 'research'
  | 'projects'
  | 'publication'
  | 'teaching'
  | 'services'
  | 'awards'
  | 'experiences'
  | 'education'
  | 'contacts'

export interface PortfolioSection {
  id: SectionId
  path: string
  icon: string
  descriptionKey: `${SectionId}Placeholder`
}

export const portfolioSections: PortfolioSection[] = [
  {
    id: 'research',
    path: '/research',
    icon: '⌕',
    descriptionKey: 'researchPlaceholder',
  },
  {
    id: 'projects',
    path: '/projects',
    icon: '⌘',
    descriptionKey: 'projectsPlaceholder',
  },
  {
    id: 'publication',
    path: '/publication',
    icon: '▤',
    descriptionKey: 'publicationPlaceholder',
  },
  {
    id: 'teaching',
    path: '/teaching',
    icon: '▧',
    descriptionKey: 'teachingPlaceholder',
  },
  {
    id: 'services',
    path: '/services',
    icon: '◇',
    descriptionKey: 'servicesPlaceholder',
  },
  {
    id: 'awards',
    path: '/awards',
    icon: '✳',
    descriptionKey: 'awardsPlaceholder',
  },
  {
    id: 'experiences',
    path: '/experiences',
    icon: '◷',
    descriptionKey: 'experiencesPlaceholder',
  },
  {
    id: 'education',
    path: '/education',
    icon: '▱',
    descriptionKey: 'educationPlaceholder',
  },
  {
    id: 'contacts',
    path: '/contacts',
    icon: '↗',
    descriptionKey: 'contactsPlaceholder',
  },
]
