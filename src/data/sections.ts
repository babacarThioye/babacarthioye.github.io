import type { LucideIcon } from 'lucide-react'
import { Award, BookOpen, BriefcaseBusiness, Contact, FolderKanban, GraduationCap, Microscope, PanelsTopLeft, UsersRound, Wrench } from 'lucide-react'

export type SectionId =
  | 'research'
  | 'projects'
  | 'publications'
  | 'teaching'
  | 'services'
  | 'awards'
  | 'experiences'
  | 'education'
  | 'contacts'
  | 'students'

export interface PortfolioSection {
  id: SectionId
  path: string
  icon: LucideIcon
}

export const portfolioSections: PortfolioSection[] = [
  {
    id: 'research',
    path: '/research',
    icon: Microscope,
  },
  {
    id: 'projects',
    path: '/projects',
    icon: FolderKanban,
  },
  {
    id: 'publications',
    path: '/publications',
    icon: BookOpen,
  },
  {
    id: 'teaching',
    path: '/teaching',
    icon: PanelsTopLeft,
  },
  {
    id: 'students',
    path: '/students',
    icon: UsersRound,
  },
  {
    id: 'services',
    path: '/services',
    icon: Wrench,
  },
  {
    id: 'awards',
    path: '/awards',
    icon: Award,
  },
  {
    id: 'experiences',
    path: '/experiences',
    icon: BriefcaseBusiness,
  },
  {
    id: 'education',
    path: '/education',
    icon: GraduationCap,
  },
  {
    id: 'contacts',
    path: '/contacts',
    icon: Contact,
  },
]
