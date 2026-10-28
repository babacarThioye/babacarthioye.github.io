import { translations } from '../app/translations'
import { usePortfolioPreferences } from '../app/preferences'
import type { SectionId } from '../data/sections'

interface SectionPageProps {
  section: SectionId
}

export function SectionPage({ section }: SectionPageProps) {
  const { language } = usePortfolioPreferences()
  const content = translations[language]
  const descriptionKey = `${section}Placeholder` as const
  const description = content[descriptionKey]

  return (
    <article className="section-page">
      <header className="section-page-heading">
        <p className="page-eyebrow">{content.sectionEyebrow}</p>
        <h2>{content.pageTitles[section]}</h2>
      </header>
      <section className="content-placeholder">
        <div className="placeholder-icon" aria-hidden="true">
          +
        </div>
        <div>
          <span className="placeholder-label">{content.addContentLabel}</span>
          <p>{description}</p>
        </div>
      </section>
    </article>
  )
}
