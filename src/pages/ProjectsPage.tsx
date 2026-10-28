import { ProjectGallery } from '../features/content/ProjectGallery'
import { SectionLayout } from '../features/content/SectionLayout'

export function ProjectsPage() { return <SectionLayout section="projects">{(copy) => <ProjectGallery copy={copy} />}</SectionLayout> }
