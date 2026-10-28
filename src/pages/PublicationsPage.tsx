import { publications } from '../data/portfolio'
import { EmptyState } from '../features/content/EmptyState'
import { SectionLayout } from '../features/content/SectionLayout'

export function PublicationsPage() { return <SectionLayout section="publications">{(copy) => publications.length ? null : <EmptyState label={copy.empty} text={copy.emptyText} />}</SectionLayout> }
