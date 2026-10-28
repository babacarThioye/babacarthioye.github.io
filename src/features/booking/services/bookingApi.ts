import { bookingConfig } from '../config/bookingConfig'
import type { ApiResponse, BookingRequest, TimeSlot } from '../types/booking'

const unavailable = <T>(): ApiResponse<T> => ({ success: false, error: { code: 'BOOKING_NOT_CONFIGURED', message: 'The booking service has not been configured yet.' } })

async function request<T>(payload: Record<string, unknown>): Promise<ApiResponse<T>> {
  if (!bookingConfig.endpoint) return unavailable<T>()
  try {
    const response = await fetch(bookingConfig.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    })
    if (!response.ok) return { success: false, error: { code: 'SERVICE_UNAVAILABLE', message: 'The booking service is currently unavailable.' } }
    return await response.json() as ApiResponse<T>
  } catch {
    return { success: false, error: { code: 'SERVICE_UNAVAILABLE', message: 'Unable to contact the booking service.' } }
  }
}

export function getAvailableSlots(date: string, meetingTypeId: string, timezone: string) {
  return request<TimeSlot[]>({ action: 'availability', date, meetingTypeId, timezone })
}

export function submitBooking(requestData: BookingRequest) {
  return request<{ requestId: string; status: 'pending' }>({ action: 'submit', request: requestData })
}
