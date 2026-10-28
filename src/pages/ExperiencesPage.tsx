import { SectionLayout } from '../features/content/SectionLayout'
import { Timeline } from '../features/content/Timeline'

export function ExperiencesPage() { return <SectionLayout section="experiences">{() => <Timeline kind="experiences" />}</SectionLayout> }
