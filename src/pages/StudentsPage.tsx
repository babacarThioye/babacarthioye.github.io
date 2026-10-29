import { GraduationCap } from 'lucide-react'
import { supervisedStudents } from '../data/portfolio'
import { EmptyState } from '../features/content/EmptyState'
import { SectionLayout } from '../features/content/SectionLayout'

export function StudentsPage() {
  return <SectionLayout section="students">{(copy) => {
    if (!supervisedStudents.length) {
      return <EmptyState label={copy.studentEmpty} text={copy.studentEmptyText} />
    }

    return <div className="students-grid">
      {supervisedStudents.map((student) => <article className="student-card" key={`${student.name}-${student.period}`}>
        <GraduationCap size={20} aria-hidden="true" />
        <div className="student-card-heading"><h3>{student.name}</h3><span>{student.status === 'current' ? copy.current : copy.completed}</span></div>
        <p>{student.level} · {student.period}</p>
        <strong>{student.topic}</strong>
      </article>)}
    </div>
  }}</SectionLayout>
}
