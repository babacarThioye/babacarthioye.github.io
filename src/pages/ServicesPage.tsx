import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/portfolio'
import { SectionLayout } from '../features/content/SectionLayout'

export function ServicesPage() {
  return <SectionLayout section="services">{(copy) => <div className="service-grid">
    {services.map(([service, description, deliverables]) => <article className="service-card" key={service}>
      <ArrowUpRight size={18} aria-hidden="true" /><h3>{service}</h3><p>{description}</p>
      <ul>{deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
      <Link to="/contacts">{copy.collaboration} <ArrowUpRight size={13} /></Link>
    </article>)}
  </div>}</SectionLayout>
}
