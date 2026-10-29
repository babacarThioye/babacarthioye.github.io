import type { Language } from './types'

export const translations = {
  fr: {
    brand: 'Portfolio', sidebarDescription: 'Ingénierie logicielle · Cybersécurité', navigationLabel: 'Navigation principale', menuLabel: 'Ouvrir le menu', closeMenuLabel: 'Fermer le menu', languageLabel: 'Passer le site en anglais', themeLabel: 'Activer le mode sombre', lightThemeLabel: 'Activer le mode clair',
    overview: 'Vue d’ensemble', research: 'Recherche', projects: 'Projets', publications: 'Publications', teaching: 'Enseignement', students: 'Étudiants encadrés', services: 'Services', awards: 'Prix & distinctions', experiences: 'Expériences', education: 'Formation', contacts: 'Contacts',
    footer: 'Conçu avec soin.', notFound: 'Page introuvable', backToOverview: 'Retour à la vue d’ensemble', siteDescription: 'Ingénierie logicielle, cybersécurité et recherche appliquée.',
    pageTitles: { overview: 'Vue d’ensemble', research: 'Recherche', projects: 'Projets', publications: 'Publications', teaching: 'Enseignement', students: 'Étudiants encadrés', services: 'Services', awards: 'Prix & distinctions', experiences: 'Expériences', education: 'Formation', contacts: 'Contacts' },
  },
  en: {
    brand: 'Portfolio', sidebarDescription: 'Software engineering · Cybersecurity', navigationLabel: 'Main navigation', menuLabel: 'Open menu', closeMenuLabel: 'Close menu', languageLabel: 'Switch the site to French', themeLabel: 'Enable dark mode', lightThemeLabel: 'Enable light mode',
    overview: 'Overview', research: 'Research', projects: 'Projects', publications: 'Publications', teaching: 'Teaching', students: 'Supervised students', services: 'Services', awards: 'Awards', experiences: 'Experience', education: 'Education', contacts: 'Contact',
    footer: 'Made with care.', notFound: 'Page not found', backToOverview: 'Back to overview', siteDescription: 'Software engineering, cybersecurity, and applied research.',
    pageTitles: { overview: 'Overview', research: 'Research', projects: 'Projects', publications: 'Publications', teaching: 'Teaching', students: 'Supervised students', services: 'Services', awards: 'Awards', experiences: 'Experience', education: 'Education', contacts: 'Contact' },
  },
} as const satisfies Record<Language, object>
