import { awards } from '../data/portfolio'
import { EmptyState } from '../features/content/EmptyState'
import { SectionLayout } from '../features/content/SectionLayout'

export function AwardsPage() { return <SectionLayout section="awards">{(copy) => awards.length ? null : <EmptyState label={copy.empty} text={copy.emptyText} />}</SectionLayout> }
