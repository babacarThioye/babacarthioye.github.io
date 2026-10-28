import { describe, expect, it } from 'vitest'
import { isBookableDate, overlaps, respectsNotice } from './availabilityRules'

const rules = { workingDays: [1, 2, 3, 4, 5], minimumNoticeHours: 24, maximumBookingDays: 30, disabledDates: ['2026-11-11'] }
const now = new Date('2026-10-28T09:00:00')

describe('booking availability rules', () => {
  it('accepts a working day inside the booking horizon', () => expect(isBookableDate('2026-10-30', now, rules)).toBe(true))
  it('rejects weekends, past dates, disabled dates, and dates outside the horizon', () => {
    expect(isBookableDate('2026-10-25', now, rules)).toBe(false)
    expect(isBookableDate('2026-10-27', now, rules)).toBe(false)
    expect(isBookableDate('2026-11-11', now, rules)).toBe(false)
    expect(isBookableDate('2026-12-01', now, rules)).toBe(false)
  })
  it('detects occupied and buffered overlaps', () => {
    const busyStart = new Date('2026-10-30T10:00:00'); const busyEnd = new Date('2026-10-30T10:30:00')
    expect(overlaps(new Date('2026-10-30T10:15:00'), new Date('2026-10-30T10:45:00'), busyStart, busyEnd)).toBe(true)
    expect(overlaps(new Date('2026-10-30T10:30:00'), new Date('2026-10-30T11:00:00'), busyStart, busyEnd, 15)).toBe(true)
    expect(overlaps(new Date('2026-10-30T11:00:00'), new Date('2026-10-30T11:30:00'), busyStart, busyEnd, 15)).toBe(false)
  })
  it('enforces the minimum notice period', () => {
    expect(respectsNotice(new Date('2026-10-29T08:59:00'), now, 24)).toBe(false)
    expect(respectsNotice(new Date('2026-10-29T09:00:00'), now, 24)).toBe(true)
  })
})
