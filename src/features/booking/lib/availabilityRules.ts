export interface AvailabilityRules {
  workingDays: number[]
  minimumNoticeHours: number
  maximumBookingDays: number
  disabledDates: string[]
}

export function isBookableDate(date: string, now: Date, rules: AvailabilityRules) {
  const candidate = new Date(`${date}T00:00:00`)
  const day = candidate.getDay()
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const latest = new Date(startOfToday.getTime() + rules.maximumBookingDays * 86400000)
  return !Number.isNaN(candidate.getTime()) && candidate >= startOfToday && candidate <= latest && rules.workingDays.includes(day) && !rules.disabledDates.includes(date)
}

export function overlaps(start: Date, end: Date, busyStart: Date, busyEnd: Date, bufferMinutes = 0) {
  const buffer = bufferMinutes * 60000
  return start.getTime() < busyEnd.getTime() + buffer && end.getTime() > busyStart.getTime() - buffer
}

export function respectsNotice(start: Date, now: Date, minimumNoticeHours: number) {
  return start.getTime() >= now.getTime() + minimumNoticeHours * 3600000
}
