import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '../../data/portfolio'
import type { ContentCopy } from './pageCopy'

export function ContactForm({ copy }: { copy: ContentCopy }) {
  const [notice, setNotice] = useState('')

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = String(form.get('subject') || 'Portfolio enquiry')
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const message = String(form.get('message') || '')
    const body = `${name}\n${email}\n\n${message}`

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setNotice(copy.sent)
  }

  return <form className="contact-form" onSubmit={submit}>
    <label>{copy.name}<input name="name" autoComplete="name" required /></label>
    <label>{copy.email}<input name="email" type="email" autoComplete="email" required /></label>
    <label>{copy.subject}<input name="subject" required /></label>
    <label className="full-width">{copy.message}<textarea name="message" rows={6} required placeholder={copy.messagePlaceholder} /></label>
    <button className="primary-button" type="submit"><Mail size={15} aria-hidden="true" />{copy.send}<ArrowUpRight size={15} aria-hidden="true" /></button>
    {notice && <p className="form-notice" role="status">{notice}</p>}
  </form>
}
