import type { Language } from './types'

export const translations = {
  fr: {
    brand: 'Portfolio',
    sidebarDescription: 'Ingénierie logicielle · Cybersécurité',
    navigationLabel: 'Navigation principale',
    menuLabel: 'Ouvrir le menu',
    closeMenuLabel: 'Fermer le menu',
    languageLabel: 'Passer le site en anglais',
    themeLabel: 'Activer le mode sombre',
    lightThemeLabel: 'Activer le mode clair',
    overview: 'Vue d’ensemble',
    research: 'Recherche',
    projects: 'Projets',
    publications: 'Publications',
    teaching: 'Enseignement',
    services: 'Services',
    awards: 'Prix & distinctions',
    experiences: 'Expériences',
    education: 'Formation',
    contacts: 'Contacts',
    overviewEyebrow: 'Ingénierie logicielle · Cybersécurité',
    overviewTitle: 'Bonjour, je suis Babacar Thioye.',
    overviewIntro:
      'Ingénieur logiciel et chercheur en cybersécurité, je m’intéresse aux technologies utiles, robustes et sécurisées.',
    overviewDetails:
      'Ce portfolio rassemble mes travaux, mes recherches, mes expériences et mon parcours. Il évoluera au fil des projets et des contenus ajoutés.',
    overviewFocusTitle: 'Domaines d’intérêt',
    overviewFocusIntro:
      'Une approche qui associe conception logicielle, sécurité et recherche.',
    softwareEngineering: 'Ingénierie logicielle',
    softwareDescription:
      'Concevoir et développer des applications utiles, accessibles et pensées pour durer.',
    cybersecurity: 'Cybersécurité',
    cybersecurityDescription:
      'Intégrer la sécurité dès la conception et réduire les risques tout au long du cycle de vie.',
    researchAndDiscovery: 'Recherche & veille',
    researchDescription:
      'Explorer les nouvelles pratiques et transformer les découvertes en solutions concrètes.',
    sectionEyebrow: 'Portfolio',
    addContentLabel: 'Contenu à compléter',
    researchPlaceholder:
      'Présente ici tes axes de recherche, travaux en cours, méthodologies et collaborations.',
    projectsPlaceholder:
      'Ajoute ici tes projets, avec leur contexte, ton rôle, les technologies utilisées et leurs résultats.',
    publicationsPlaceholder:
      'Ajoute ici tes articles, publications scientifiques, rapports ou autres contributions.',
    teachingPlaceholder:
      'Présente ici tes cours, interventions, supports pédagogiques et activités d’encadrement.',
    servicesPlaceholder:
      'Décris ici les services, expertises ou accompagnements que tu proposes.',
    awardsPlaceholder:
      'Ajoute ici tes prix, distinctions, bourses et reconnaissances.',
    experiencesPlaceholder:
      'Présente ici tes expériences professionnelles, responsabilités et principales réalisations.',
    educationPlaceholder:
      'Ajoute ici tes diplômes, formations, certifications et établissements.',
    contactsPlaceholder:
      'Ajoute ici les moyens par lesquels les visiteurs peuvent te contacter ou suivre ton travail.',
    footer: 'Conçu avec soin.',
    notFound: 'Page introuvable',
    backToOverview: 'Retour à la vue d’ensemble',
    pageTitles: {
      overview: 'Vue d’ensemble',
      research: 'Recherche',
      projects: 'Projets',
      publications: 'Publications',
      teaching: 'Enseignement',
      services: 'Services',
      awards: 'Prix & distinctions',
      experiences: 'Expériences',
      education: 'Formation',
      contacts: 'Contacts',
    },
  },
  en: {
    brand: 'Portfolio',
    sidebarDescription: 'Software engineering · Cybersecurity',
    navigationLabel: 'Main navigation',
    menuLabel: 'Open menu',
    closeMenuLabel: 'Close menu',
    languageLabel: 'Switch the site to French',
    themeLabel: 'Enable dark mode',
    lightThemeLabel: 'Enable light mode',
    overview: 'Overview',
    research: 'Research',
    projects: 'Projects',
    publications: 'Publications',
    teaching: 'Teaching',
    services: 'Services',
    awards: 'Awards',
    experiences: 'Experience',
    education: 'Education',
    contacts: 'Contact',
    overviewEyebrow: 'Software engineering · Cybersecurity',
    overviewTitle: 'Hello, I’m Babacar Thioye.',
    overviewIntro:
      'I’m a software engineer and cybersecurity researcher interested in useful, resilient, and secure technologies.',
    overviewDetails:
      'This portfolio brings together my work, research, experience, and background. It will grow as new projects and content are added.',
    overviewFocusTitle: 'Areas of interest',
    overviewFocusIntro:
      'An approach that brings together software design, security, and research.',
    softwareEngineering: 'Software engineering',
    softwareDescription:
      'Designing and building useful, accessible applications made to last.',
    cybersecurity: 'Cybersecurity',
    cybersecurityDescription:
      'Building in security from the start and reducing risk throughout the lifecycle.',
    researchAndDiscovery: 'Research & discovery',
    researchDescription:
      'Exploring new practices and turning discoveries into practical solutions.',
    sectionEyebrow: 'Portfolio',
    addContentLabel: 'Content to add',
    researchPlaceholder:
      'Add your research areas, current work, methodologies, and collaborations here.',
    projectsPlaceholder:
      'Add your projects, including their context, your role, technologies, and outcomes.',
    publicationsPlaceholder:
      'Add your articles, research publications, reports, and other contributions here.',
    teachingPlaceholder:
      'Share your courses, talks, teaching materials, and mentoring activities here.',
    servicesPlaceholder:
      'Describe the services, expertise, or support you offer here.',
    awardsPlaceholder:
      'Add your awards, distinctions, scholarships, and recognitions here.',
    experiencesPlaceholder:
      'Share your professional experience, responsibilities, and key achievements here.',
    educationPlaceholder:
      'Add your degrees, training, certifications, and institutions here.',
    contactsPlaceholder:
      'Add the ways visitors can contact you or follow your work here.',
    footer: 'Made with care.',
    notFound: 'Page not found',
    backToOverview: 'Back to overview',
    pageTitles: {
      overview: 'Overview',
      research: 'Research',
      projects: 'Projects',
      publications: 'Publications',
      teaching: 'Teaching',
      services: 'Services',
      awards: 'Awards',
      experiences: 'Experience',
      education: 'Education',
      contacts: 'Contact',
    },
  },
} as const satisfies Record<Language, object>
