import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import type { SectionId } from '../../data/sections'
import { PageHeader } from './PageHeader'
import { heading, type ContentCopy } from './pageCopy'

interface SectionLayoutProps {
  section: SectionId
  children: (copy: ContentCopy) => ReactNode
}

export function SectionLayout({ section, children }: SectionLayoutProps) {
  const { t } = useTranslation()
  const copy = t('content', { returnObjects: true }) as ContentCopy
  const [title, intro] = heading(copy, section)

  return <article className="section-page"><PageHeader title={title} intro={intro} />{children(copy)}</article>
}
