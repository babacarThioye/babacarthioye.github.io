import { BarChart3, BookOpen, FolderKanban, UsersRound } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { publications, projects, researchMetrics, supervisedStudents } from '../../data/portfolio'

export function PortfolioMetrics() {
  const { t } = useTranslation()
  const metrics = [
    { label: t('content.projectsMetric'), value: projects.length, icon: FolderKanban },
    { label: t('content.publicationsMetric'), value: publications.length, icon: BookOpen },
    { label: t('content.citationsMetric'), value: researchMetrics.citations, icon: BarChart3 },
    { label: t('content.studentsMetric'), value: supervisedStudents.length, icon: UsersRound },
  ]

  return <section className="metrics-section" aria-label={t('content.metricsTitle')}>
    <div className="metrics-section-heading"><p className="page-eyebrow">{t('content.activityLabel')}</p><h2>{t('content.metricsTitle')}</h2></div>
    <div className="metrics-grid">
      {metrics.map(({ label, value, icon: Icon }) => <article className="metric-card" key={label}>
        <Icon size={20} aria-hidden="true" /><strong>{value ?? '—'}</strong><span>{label}</span>
        {value === undefined && <small>{t('content.unavailable')}</small>}
      </article>)}
    </div>
    <p className="metrics-note">{t('content.calculatedFrom')}</p>
  </section>
}
