import { CalendarClock } from 'lucide-react'
import { usePortfolioPreferences } from '../app/preferences'
import { researchAreas } from '../data/portfolio'
import { SectionLayout } from '../features/content/SectionLayout'

export function ResearchPage() {
  const { language } = usePortfolioPreferences()

  return <SectionLayout section="research">{(copy) => <>
    <p className="content-label">{copy.researchIntro}</p>
    <div className="area-grid">
      {researchAreas.map((item, index) => {
        const [area, description] = item[language]
        return <article className="area-card" key={area}><span>0{index + 1}</span><h3>{area}</h3><p>{description}</p></article>
      })}
    </div>
    <div className="research-callout"><CalendarClock size={20} aria-hidden="true" /><div><h3>{copy.researchCallout}</h3><p>{copy.researchCalloutText}</p></div></div>
  </>}</SectionLayout>
}
