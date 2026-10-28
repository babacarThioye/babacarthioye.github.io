import { translations } from '../app/translations'
import { usePortfolioPreferences } from '../app/preferences'
import { portfolioSections } from '../data/sections'
import { NavLink } from 'react-router-dom'

export function OverviewPage() {
  const { language } = usePortfolioPreferences()
  const content = translations[language]

  return (
    <div className="overview-page">
      <section className="overview-intro">
        <div className="overview-copy">
          <p className="page-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {content.overviewEyebrow}
          </p>
          <h2>{content.overviewTitle}</h2>
          <p className="overview-lead">{content.overviewIntro}</p>
          <p className="overview-details">{content.overviewDetails}</p>
        </div>
        <div className="overview-monogram" aria-hidden="true">
          <span>BT</span>
          <div className="monogram-orbit monogram-orbit-one" />
          <div className="monogram-orbit monogram-orbit-two" />
        </div>
      </section>

      <section className="focus-section">
        <div className="section-heading-row">
          <div>
            <p className="page-eyebrow">01 — {content.overview}</p>
            <h2>{content.overviewFocusTitle}</h2>
          </div>
          <p>{content.overviewFocusIntro}</p>
        </div>

        <div className="focus-grid">
          <article className="focus-card">
            <span className="focus-card-index">01</span>
            <h3>{content.softwareEngineering}</h3>
            <p>{content.softwareDescription}</p>
            <NavLink to="/projects" aria-label={content.projects}>
              {content.projects} <span aria-hidden="true">↗</span>
            </NavLink>
          </article>
          <article className="focus-card">
            <span className="focus-card-index">02</span>
            <h3>{content.cybersecurity}</h3>
            <p>{content.cybersecurityDescription}</p>
            <NavLink to="/research" aria-label={content.research}>
              {content.research} <span aria-hidden="true">↗</span>
            </NavLink>
          </article>
          <article className="focus-card">
            <span className="focus-card-index">03</span>
            <h3>{content.researchAndDiscovery}</h3>
            <p>{content.researchDescription}</p>
            <NavLink to="/publication" aria-label={content.publication}>
              {content.publication} <span aria-hidden="true">↗</span>
            </NavLink>
          </article>
        </div>
      </section>

      <section className="quick-links">
        <p className="page-eyebrow">{content.brand}</p>
        <div>
          {portfolioSections.slice(3).map((section) => (
            <NavLink to={section.path} key={section.id}>
              {content[section.id]}
              <span aria-hidden="true">↗</span>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  )
}
