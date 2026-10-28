import { profile } from '../data/portfolio'
import { ContactForm } from '../features/content/ContactForm'
import { SectionLayout } from '../features/content/SectionLayout'

export function ContactsPage() {
  return <SectionLayout section="contacts">{(copy) => <div className="contact-layout">
    <section>
      <p className="page-eyebrow">{copy.available}</p><h3>{copy.contactTitle}</h3><p>{profile.location}</p>
      {profile.email ? <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a> : <p className="contact-note">{copy.emptyText}</p>}
      <p className="contact-note">{copy.contactText}</p>
    </section>
    {profile.email && <ContactForm copy={copy} />}
  </div>}</SectionLayout>
}
