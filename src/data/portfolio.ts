export type Status = 'In progress' | 'Selected work' | 'Open for collaboration'

export const profile = {
  name: 'Babacar Thioye',
  title: 'Software Engineer · Cybersecurity Researcher',
  affiliation: 'Academic & professional portfolio',
  email: undefined,
  location: 'Luxembourg · Available remotely',
  bio: 'I build dependable digital systems and explore the security questions that shape their use. My work connects software engineering, cybersecurity, and applied research.',
  interests: ['Secure software systems', 'Mobile money security', 'Fraud detection', 'AI & LLM security', 'Digital identity'],
  social: [],
}

export const researchAreas = [
  { fr: ['Sécurité du mobile money', 'Étude de la confiance, de la fraude, de l’authentification et de la résilience des services financiers numériques.'], en: ['Mobile money security', 'Understanding trust, fraud, authentication, and resilience in digital financial services.'] },
  { fr: ['Détection de la fraude', 'Analyse des schémas suspects et des signaux de risque dans les systèmes financiers.'], en: ['Fraud detection', 'Data-informed analysis of suspicious patterns and risk signals in financial systems.'] },
  { fr: ['LLM pour la sécurité', 'Évaluation d’applications utiles et robustes des modèles de langage en cybersécurité.'], en: ['LLMs for security', 'Evaluating useful, robust applications of language models in cybersecurity.'] },
  { fr: ['Identité & authentification', 'Étude des mécanismes qui concilient sécurité, confidentialité et facilité d’usage.'], en: ['Identity & authentication', 'Studying authentication mechanisms that balance security, privacy, and usability.'] },
] as const

export interface Project { title: string; description: string; category: string; stack: string[]; year: string; status: Status; github?: string; demo?: string }
// Populate only with verified work that may be published publicly.
export const projects: Project[] = []

export const publications = [] as { title: string; authors: string; venue: string; year: string; type: string; abstract: string }[]
export const awards = [] as { title: string; institution: string; year: string; category: string }[]

export const timeline = {
  experiences: [{ title: 'Professional experience', org: 'To be added', period: 'Current', description: 'Add a verified role, responsibilities, outcomes, and technologies from the portfolio data file.' }],
  education: [{ title: 'Academic background', org: 'To be added', period: 'Ongoing', description: 'Add verified degrees, institutions, thesis work, and relevant academic achievements.' }],
  teaching: [{ title: 'Teaching activities', org: 'To be added', period: 'Academic year', description: 'Add courses, level, teaching format, hours, and learning resources when available.' }],
}

export const services = [
  ['Software development', 'Design and implementation of reliable web applications and technical foundations.', ['Frontend development', 'REST APIs', 'Technical architecture']],
  ['Cybersecurity', 'Security-minded design, application review, and architecture discussions.', ['Secure development', 'Code review', 'Threat modelling']],
  ['Research collaboration', 'Applied research conversations at the intersection of security and digital financial services.', ['Research framing', 'Technical reports', 'Open collaboration']],
  ['Technical training', 'Practical workshops and mentoring around software engineering and secure systems.', ['Programming', 'Web development', 'Security awareness']],
] as const
