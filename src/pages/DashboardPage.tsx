import { BarChart3, BookOpen, FolderKanban, UsersRound } from 'lucide-react'
import { publications, projects, researchMetrics, supervisedStudents } from '../data/portfolio'
import { SectionLayout } from '../features/content/SectionLayout'

export function DashboardPage() {
  return <SectionLayout section="dashboard">{(copy) => {
    const metrics = [
      { label: copy.projectsMetric, value: projects.length, icon: FolderKanban },
      { label: copy.publicationsMetric, value: publications.length, icon: BookOpen },
      { label: copy.citationsMetric, value: researchMetrics.citations, icon: BarChart3 },
      { label: copy.studentsMetric, value: supervisedStudents.length, icon: UsersRound },
    ]

    return <>
      <section className="metrics-grid" aria-label={copy.dashboard[0]}>
        {metrics.map(({ label, value, icon: Icon }) => <article className="metric-card" key={label}>
          <Icon size={20} aria-hidden="true" />
          <strong>{value ?? '—'}</strong>
          <span>{label}</span>
          {value === undefined && <small>{copy.unavailable}</small>}
        </article>)}
      </section>
      <p className="metrics-note">{copy.calculatedFrom}</p>
    </>
  }}</SectionLayout>
}
