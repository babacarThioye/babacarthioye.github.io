import { translations } from '../app/translations'
import { usePortfolioPreferences } from '../app/preferences'
import { portfolioSections } from '../data/sections'
import { NavLink } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { profile, projects } from '../data/portfolio'

export function OverviewPage() {
  const { language } = usePortfolioPreferences()
  const content = translations[language]
  const isFrench = language === 'fr'
  const biography = isFrench
    ? 'Je conçois des systèmes numériques fiables et j’étudie les enjeux de sécurité qui accompagnent leurs usages. Mon travail relie ingénierie logicielle, cybersécurité et recherche appliquée.'
    : profile.bio
  const interests = isFrench
    ? ['Systèmes logiciels sécurisés', 'Sécurité du mobile money', 'Détection de la fraude', 'Sécurité de l’IA et des LLM', 'Identité numérique']
    : profile.interests

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
              {content.projects} <ArrowUpRight size={14} aria-hidden="true" />
            </NavLink>
          </article>
          <article className="focus-card">
            <span className="focus-card-index">02</span>
            <h3>{content.cybersecurity}</h3>
            <p>{content.cybersecurityDescription}</p>
            <NavLink to="/research" aria-label={content.research}>
              {content.research} <ArrowUpRight size={14} aria-hidden="true" />
            </NavLink>
          </article>
          <article className="focus-card">
            <span className="focus-card-index">03</span>
            <h3>{content.researchAndDiscovery}</h3>
            <p>{content.researchDescription}</p>
            <NavLink to="/publications" aria-label={content.publications}>
              {content.publications} <ArrowUpRight size={14} aria-hidden="true" />
            </NavLink>
          </article>
        </div>
      </section>

      <section className="overview-data-section" aria-labelledby="interests-title">
        <div className="section-heading-row">
          <div><p className="page-eyebrow">{isFrench ? 'Profil de recherche' : 'Research profile'}</p><h2 id="interests-title">{isFrench ? 'Mes axes de recherche' : 'Research interests'}</h2></div>
          <p>{biography}</p>
        </div>
        <div className="interest-list">{interests.map((interest) => <span key={interest}>{interest}</span>)}</div>
      </section>

      <section className="overview-data-section" aria-labelledby="selected-work-title">
        <div className="section-heading-row"><div><p className="page-eyebrow">{isFrench ? 'Travaux sélectionnés' : 'Selected work'}</p><h2 id="selected-work-title">{isFrench ? 'Projets à la une' : 'Projects in focus'}</h2></div><NavLink className="text-link" to="/projects">{isFrench ? 'Voir tous les projets' : 'View all projects'} <ArrowUpRight size={14} aria-hidden="true" /></NavLink></div>
        {projects.length ? <div className="work-grid">{projects.map((project) => <article className="work-card" key={project.title}><span>{project.category} · {project.year}</span><h3>{project.title}</h3><p>{project.description}</p><div>{project.stack.map((item) => <b key={item}>{item}</b>)}</div></article>)}</div> : <p className="overview-empty">{isFrench ? 'Les projets publiables seront ajoutés ici.' : 'Publishable project work will be added here.'}</p>}
      </section>

      <section className="quick-links">
        <p className="page-eyebrow">{content.brand}</p>
        <div>
          {portfolioSections.slice(3).map((section) => (
            <NavLink to={section.path} key={section.id}>
              {content[section.id]}
              <ArrowUpRight size={13} aria-hidden="true" />
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  )
}
