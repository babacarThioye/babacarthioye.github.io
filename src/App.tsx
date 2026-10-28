import { useEffect, useState } from 'react'
import './App.css'

type Language = 'fr' | 'en'
type Theme = 'light' | 'dark'

const translations = {
  fr: {
    pageTitle: 'Babacar THIOYE — Ingénierie logicielle & cybersécurité',
    pageDescription:
      'Babacar THIOYE, ingénieur logiciel et chercheur en cybersécurité. Des solutions numériques utiles, robustes et sécurisées.',
    home: 'Babacar THIOYE, accueil',
    navigation: 'Navigation principale',
    aboutNav: 'À propos',
    expertiseNav: 'Expertises',
    projectsNav: 'Projets',
    contactNav: 'Me Contacter',
    languageLabel: 'Switch language to English',
    themeLabel: 'Mode sombre',
    themeDarkLabel: 'Mode clair',
    eyebrow: 'Ingénierie logicielle',
    cybersecurity: 'Cybersécurité',
    heroTitleFirst: 'Le numérique,',
    heroTitleSecond: 'bien pensé.',
    heroTitleThird: 'Bien protégé.',
    heroDescription:
      'Je suis Babacar THIOYE, ingénieur logiciel et chercheur en cybersécurité. J’imagine des solutions numériques utiles, robustes et sécurisées.',
    discoverExpertise: 'Découvrir mes expertises',
    learnMore: 'En savoir plus',
    heroArtLabel: 'Construire, sécuriser, faire évoluer',
    trustedTechnology: 'TECHNOLOGIE DE CONFIANCE',
    build: 'CONSTRUIRE',
    secure: 'SÉCURISER',
    evolve: 'FAIRE ÉVOLUER',
    scroll: 'Défiler pour explorer',
    aboutTitleFirst: 'La technique au service',
    aboutTitleSecond: 'des idées qui comptent.',
    aboutDescription:
      'Le meilleur du numérique se construit à la rencontre de l’ingénierie et de la confiance. C’est cette approche qui guide mon travail : comprendre les besoins, concevoir avec soin et penser la sécurité dès le départ.',
    approach: 'Ma façon de travailler',
    expertiseEyebrow: '02 — Domaines d’expertise',
    expertiseTitleFirst: 'Penser juste.',
    expertiseTitleSecond: 'Construire solide.',
    expertiseIntro:
      'De la première idée à la mise en œuvre, des compétences complémentaires pour créer un numérique plus fiable.',
    projectsEyebrow: '03 — Sélection',
    projectsTitleFirst: 'Des idées,',
    projectsTitleSecond: 'en mouvement.',
    projectsIntro:
      'Les projets et études de cas viendront enrichir cette sélection.',
    comingSoon: 'À SUIVRE',
    projectsPlaceholder:
      'Une sélection de projets sera bientôt présentée ici.',
    contactEyebrow: 'Et maintenant ?',
    contactTitleFirst: 'Construisons quelque chose',
    contactTitleSecond: 'qui a du sens.',
    contactNote:
      'Une adresse e-mail ou un lien de contact pourra être ajouté ici.',
    footerSpecialties: 'Ingénierie logicielle · Cybersécurité',
    aboutEyebrow: '01 — À propos',
    expertiseItems: [
      {
        title: 'Ingénierie logicielle',
        description:
          'Concevoir et développer des applications utiles, accessibles et pensées pour durer.',
        tags: ['Architecture', 'Développement', 'Qualité'],
      },
      {
        title: 'Cybersécurité',
        description:
          'Intégrer la sécurité dès la conception et réduire les risques tout au long du cycle de vie.',
        tags: ['Sécurité applicative', 'Analyse', 'Prévention'],
      },
      {
        title: 'Recherche & veille',
        description:
          'Explorer les nouvelles pratiques et transformer les découvertes en solutions concrètes.',
        tags: ['Recherche', 'Veille technologique', 'Innovation'],
      },
    ],
  },
  en: {
    pageTitle: 'Babacar Thioye — Software Engineering & Cybersecurity',
    pageDescription:
      'Babacar Thioye, software engineer and cybersecurity researcher. Building useful, resilient, and secure digital solutions.',
    home: 'Babacar Thioye, home',
    navigation: 'Main navigation',
    aboutNav: 'About',
    expertiseNav: 'Expertise',
    projectsNav: 'Projects',
    contactNav: 'Get in touch',
    languageLabel: 'Passer le site en français',
    themeLabel: 'Dark mode',
    themeDarkLabel: 'Light mode',
    eyebrow: 'Software engineering',
    cybersecurity: 'Cybersecurity',
    heroTitleFirst: 'Technology,',
    heroTitleSecond: 'thoughtfully built.',
    heroTitleThird: 'Secure by design.',
    heroDescription:
      'I’m Babacar THIOYE, a software engineer and cybersecurity researcher. I build useful, resilient, and secure digital solutions.',
    discoverExpertise: 'Explore my expertise',
    learnMore: 'Learn more',
    heroArtLabel: 'Build, secure, evolve',
    trustedTechnology: 'TRUSTED TECHNOLOGY',
    build: 'BUILD',
    secure: 'SECURE',
    evolve: 'EVOLVE',
    scroll: 'Scroll to explore',
    aboutTitleFirst: 'Technology in service',
    aboutTitleSecond: 'of ideas that matter.',
    aboutDescription:
      'The best digital experiences bring engineering and trust together. That is the approach behind my work: understand the needs, design with care, and consider security from the start.',
    approach: 'How I work',
    expertiseEyebrow: '02 — Areas of expertise',
    expertiseTitleFirst: 'Think clearly.',
    expertiseTitleSecond: 'Build with care.',
    expertiseIntro:
      'From the first idea through delivery, complementary skills for a more dependable digital world.',
    projectsEyebrow: '03 — Selected work',
    projectsTitleFirst: 'Ideas,',
    projectsTitleSecond: 'in motion.',
    projectsIntro: 'Projects and case studies will be added to this selection.',
    comingSoon: 'COMING SOON',
    projectsPlaceholder: 'A selection of projects will be showcased here soon.',
    contactEyebrow: 'What’s next?',
    contactTitleFirst: 'Let’s build something',
    contactTitleSecond: 'that matters.',
    contactNote: 'An email address or contact link can be added here.',
    footerSpecialties: 'Software engineering · Cybersecurity',
    aboutEyebrow: '01 — About',
    expertiseItems: [
      {
        title: 'Software engineering',
        description:
          'Designing and building useful, accessible applications made to last.',
        tags: ['Architecture', 'Development', 'Quality'],
      },
      {
        title: 'Cybersecurity',
        description:
          'Building in security from the start and reducing risk throughout the lifecycle.',
        tags: ['Application security', 'Analysis', 'Prevention'],
      },
      {
        title: 'Research & discovery',
        description:
          'Exploring new practices and turning discoveries into practical solutions.',
        tags: ['Research', 'Technology trends', 'Innovation'],
      },
    ],
  },
} as const

function App() {
  const [language, setLanguage] = useState<Language>(() =>
    localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'fr',
  )
  const [theme, setTheme] = useState<Theme>(() =>
    localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light',
  )
  const content = translations[language]
  const year = new Date().getFullYear()

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
    document.title = content.pageTitle

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    if (description) {
      description.content = content.pageDescription
    }
  }, [content.pageDescription, content.pageTitle, language])

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
    document.documentElement.style.colorScheme = theme
    document
      .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#111b22' : '#f7f8f6')
  }, [theme])

  return (
    <div className="portfolio" data-theme={theme}>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label={content.home}>
          <span className="brand-mark" aria-hidden="true">
            BT
          </span>
          <span className="brand-name">Babacar Thioye</span>
        </a>

        <nav className="main-nav" aria-label={content.navigation}>
          <a href="#apropos">{content.aboutNav}</a>
          <a href="#expertises">{content.expertiseNav}</a>
          <a href="#projets">{content.projectsNav}</a>
        </nav>

        <div className="header-actions">
          <a className="header-link" href="#contact">
            {content.contactNav} <span aria-hidden="true">↗</span>
          </a>
          <button
            className="preference-button language-button"
            type="button"
            aria-label={content.languageLabel}
            title={content.languageLabel}
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
          <button
            className="preference-button theme-button"
            type="button"
            aria-label={theme === 'light' ? content.themeLabel : content.themeDarkLabel}
            title={theme === 'light' ? content.themeLabel : content.themeDarkLabel}
            aria-pressed={theme === 'dark'}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-shell" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              {content.eyebrow}
              <span className="eyebrow-separator">/</span> {content.cybersecurity}
            </p>
            <h1>
              {content.heroTitleFirst}
              <br />
              <span>{content.heroTitleSecond}</span>
              <br />
              {content.heroTitleThird}
            </h1>
            <p className="hero-description">{content.heroDescription}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#expertises">
                {content.discoverExpertise}
                <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="#apropos">
                {content.learnMore} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-art" role="img" aria-label={content.heroArtLabel}>
            <div className="art-grid" aria-hidden="true" />
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="art-core">
              <span className="art-core-mark" aria-hidden="true">
                BT
              </span>
              <span className="art-core-caption">{content.trustedTechnology}</span>
            </div>
            <span className="art-label art-label-top">{content.build}</span>
            <span className="art-label art-label-right">{content.secure}</span>
            <span className="art-label art-label-bottom">{content.evolve}</span>
          </div>
          <a className="scroll-cue" href="#apropos">
            <span className="scroll-line" aria-hidden="true" />
            {content.scroll}
          </a>
        </section>

        <section className="intro-section section-shell" id="apropos">
          <div className="section-heading">
            <p className="eyebrow">{content.aboutEyebrow}</p>
            <h2>
              {content.aboutTitleFirst}
              <br />
              <span>{content.aboutTitleSecond}</span>
            </h2>
          </div>
          <div className="intro-copy">
            <p>{content.aboutDescription}</p>
            <a className="text-link" href="#expertises">
              {content.approach} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="expertise-section" id="expertises">
          <div className="section-shell">
            <div className="section-topline">
              <div className="section-heading">
                <p className="eyebrow">{content.expertiseEyebrow}</p>
                <h2>
                  {content.expertiseTitleFirst}
                  <br />
                  <span>{content.expertiseTitleSecond}</span>
                </h2>
              </div>
              <p className="section-aside">{content.expertiseIntro}</p>
            </div>

            <div className="expertise-grid">
              {content.expertiseItems.map((item, index) => (
                <article className="expertise-card" key={item.title}>
                  <div className="card-topline">
                    <span className="card-number">0{index + 1}</span>
                    <span className="card-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul
                    className="tag-list"
                    aria-label={`${language === 'fr' ? 'Compétences' : 'Skills'}: ${item.title}`}
                  >
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section section-shell" id="projets">
          <div className="projects-heading">
            <div className="section-heading">
              <p className="eyebrow">{content.projectsEyebrow}</p>
              <h2>
                {content.projectsTitleFirst}
                <br />
                <span>{content.projectsTitleSecond}</span>
              </h2>
            </div>
            <p className="section-aside">{content.projectsIntro}</p>
          </div>
          <div className="project-placeholder">
            <span className="placeholder-index">{content.comingSoon}</span>
            <span className="placeholder-copy">{content.projectsPlaceholder}</span>
            <span className="placeholder-symbol" aria-hidden="true">
              +
            </span>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-inner">
            <div>
              <p className="eyebrow">{content.contactEyebrow}</p>
              <h2>
                {content.contactTitleFirst}
                <br />
                <span>{content.contactTitleSecond}</span>
              </h2>
            </div>
            <p className="contact-note">{content.contactNote}</p>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="brand footer-brand" href="#accueil">
          <span className="brand-mark" aria-hidden="true">
            BT
          </span>
          <span className="brand-name">Babacar Thioye</span>
        </a>
        <p>{content.footerSpecialties}</p>
        <span>© {year} Babacar Thioye</span>
      </footer>
    </div>
  )
}

export default App
