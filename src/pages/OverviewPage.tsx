import { usePortfolioPreferences } from '../app/preferences'

const copy = {
  fr: { role: 'Doctorant · Ingénierie logicielle & cybersécurité', thesisLabel: 'Sujet de thèse', thesis: 'À renseigner', institution: 'Université du Luxembourg', faculty: 'Faculté des Sciences, des Technologies et de Médecine', photoAlt: 'Portrait de Babacar Thioye' },
  en: { role: 'PhD Researcher · Software Engineering & Cybersecurity', thesisLabel: 'PhD research topic', thesis: 'To be provided', institution: 'University of Luxembourg', faculty: 'Faculty of Science, Technology and Medicine', photoAlt: 'Portrait of Babacar Thioye' },
} as const

export function OverviewPage() {
  const { language } = usePortfolioPreferences()
  const t = copy[language]
  return <section className="institutional-overview" aria-labelledby="profile-name"><div className="institutional-person"><img className="profile-portrait" src="/assets/img/me.jpeg" alt={t.photoAlt} /><div className="institutional-copy"><p className="institutional-role">{t.role}</p><h2 id="profile-name">Babacar Thioye</h2><div className="thesis-topic"><span>{t.thesisLabel}</span><p>{t.thesis}</p></div></div></div><div className="unilux-lockup" aria-label={t.institution}><img className="snt-logo snt-logo-light" src="/assets/img/SnT_Official_Blue_RGB.png" alt="Interdisciplinary Centre for Security, Reliability and Trust" /><img className="snt-logo snt-logo-dark" src="/assets/img/SnT_Official_White_RGB.png" alt="Interdisciplinary Centre for Security, Reliability and Trust" /></div></section>
}
