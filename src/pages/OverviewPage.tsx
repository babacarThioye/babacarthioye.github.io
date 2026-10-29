import { usePortfolioPreferences } from '../app/preferences'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { PortfolioMetrics } from '../features/content/PortfolioMetrics'
import { publicAsset } from '../lib/assets'

const copy = {
  fr: { role: 'Doctorant · Ingénierie logicielle & cybersécurité', thesisLabel: 'Sujet de thèse', thesis: 'Analysis and Prevention of Security Threats to Mobile Money Applications', institution: 'Université du Luxembourg', faculty: 'Faculté des Sciences, des Technologies et de Médecine', photoAlt: 'Portrait de Babacar Thioye' },
  en: { role: 'PhD Researcher · Software Engineering & Cybersecurity', thesisLabel: 'PhD research topic', thesis: 'Analysis and Prevention of Security Threats to Mobile Money Applications', institution: 'University of Luxembourg', faculty: 'Faculty of Science, Technology and Medicine', photoAlt: 'Portrait of Babacar Thioye' },
} as const

export function OverviewPage() {
  const { language } = usePortfolioPreferences()
  const { t: translate } = useTranslation()
  const t = copy[language]
  return <>
    <section className="institutional-overview" aria-labelledby="profile-name"><div className="institutional-person"><img className="profile-portrait" src={publicAsset('assets/img/me.jpeg')} alt={t.photoAlt} /><div className="institutional-copy"><p className="institutional-role">{t.role}</p><h2 id="profile-name">Babacar Thioye</h2><div className="thesis-topic"><span>{t.thesisLabel}</span><p>{t.thesis}</p></div></div></div><div className="unilux-lockup" aria-label={t.institution}><img className="snt-logo snt-logo-light" src={publicAsset('assets/img/SnT_Official_Blue_RGB.png')} alt="Interdisciplinary Centre for Security, Reliability and Trust" /><img className="snt-logo snt-logo-dark" src={publicAsset('assets/img/SnT_Official_White_RGB.png')} alt="Interdisciplinary Centre for Security, Reliability and Trust" /></div></section>
    <div className="overview-content"><PortfolioMetrics /><section className="presentation-section" aria-labelledby="presentation-title"><p className="page-eyebrow">{translate('content.presentationLabel')}</p><h2 id="presentation-title">{translate('content.presentationTitle')}</h2><div className="presentation-copy"><p>{translate('content.presentationFirst')}</p><p>{translate('content.presentationSecond')}</p></div><div className="presentation-tags">{['Software Engineering', 'Cybersecurity', 'Mobile Money Security'].map((tag) => <span key={tag}>{tag}</span>)}</div><div className="presentation-links"><a href="https://www.uni.lu/en/" target="_blank" rel="noreferrer">{translate('content.universityLink')} <ExternalLink size={14} aria-hidden="true" /></a><a href="https://www.uni.lu/snt-en/" target="_blank" rel="noreferrer">{translate('content.sntLink')} <ExternalLink size={14} aria-hidden="true" /></a></div></section></div>
  </>
}
