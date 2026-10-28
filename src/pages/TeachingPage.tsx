import { SectionLayout } from '../features/content/SectionLayout'
import { Timeline } from '../features/content/Timeline'

export function TeachingPage() { return <SectionLayout section="teaching">{() => <Timeline kind="teaching" />}</SectionLayout> }
