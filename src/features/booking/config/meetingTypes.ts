import type { MeetingType } from '../types/booking'

export const meetingTypes: MeetingType[] = [
  { id: 'research-collaboration', durationMinutes: 30, enabled: true, title: { en: 'Research collaboration', fr: 'Collaboration de recherche' }, description: { en: 'Discuss a research idea, proposal, or academic collaboration.', fr: 'Échanger autour d’une idée, d’un projet ou d’une collaboration scientifique.' } },
  { id: 'technical-discussion', durationMinutes: 30, enabled: true, title: { en: 'Technical discussion', fr: 'Discussion technique' }, description: { en: 'Explore a software, systems, or cybersecurity topic.', fr: 'Explorer un sujet logiciel, systèmes ou cybersécurité.' } },
  { id: 'professional-opportunity', durationMinutes: 30, enabled: true, title: { en: 'Professional opportunity', fr: 'Opportunité professionnelle' }, description: { en: 'Discuss a relevant professional opportunity.', fr: 'Échanger autour d’une opportunité professionnelle pertinente.' } },
  { id: 'consulting', durationMinutes: 45, enabled: true, title: { en: 'Consulting', fr: 'Conseil' }, description: { en: 'Discuss a scoped technical or security consulting need.', fr: 'Échanger sur un besoin précis de conseil technique ou sécurité.' } },
  { id: 'general-meeting', durationMinutes: 20, enabled: true, title: { en: 'General meeting', fr: 'Rendez-vous général' }, description: { en: 'A short introductory conversation.', fr: 'Un bref échange de prise de contact.' } },
]
