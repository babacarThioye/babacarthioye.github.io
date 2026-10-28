import type { ReactNode } from 'react'
import { usePortfolioPreferences } from '../../app/preferences'
import type { SectionId } from '../../data/sections'
import { PageHeader } from './PageHeader'
import { heading, pageCopy } from './pageCopy'

interface SectionLayoutProps {
  section: SectionId
  children: (copy: typeof pageCopy.en | typeof pageCopy.fr) => ReactNode
}

export function SectionLayout({ section, children }: SectionLayoutProps) {
  const { language } = usePortfolioPreferences()
  const copy = pageCopy[language]
  const [title, intro] = heading(copy, section)

  return <article className="section-page"><PageHeader title={title} intro={intro} />{children(copy)}</article>
}
