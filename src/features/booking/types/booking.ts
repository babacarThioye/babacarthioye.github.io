export type BookingStatus = 'pending' | 'approved' | 'rejected' | 'cancelled' | 'expired'

export interface MeetingType {
  id: string
  title: Record<'en' | 'fr', string>
  description: Record<'en' | 'fr', string>
  durationMinutes: number
  enabled: boolean
}

export interface TimeSlot {
  start: string
  end: string
}

export interface BookingRequest {
  meetingTypeId: string
  date: string
  start: string
  timezone: string
  name: string
  email: string
  organization?: string
  subject: string
  description: string
  language: 'en' | 'fr'
  consent: boolean
  website?: string
  idempotencyKey: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: { code: string; message: string }
}
