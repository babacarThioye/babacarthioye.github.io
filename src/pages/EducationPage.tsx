import { SectionLayout } from '../features/content/SectionLayout'
import { Timeline } from '../features/content/Timeline'

export function EducationPage() { return <SectionLayout section="education">{() => <Timeline kind="education" />}</SectionLayout> }
