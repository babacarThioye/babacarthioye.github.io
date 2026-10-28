export const bookingConfig = {
  // This is public configuration only. Never add secrets here.
  endpoint: import.meta.env.VITE_BOOKING_API_URL?.trim() ?? '',
  ownerTimezone: 'Europe/Luxembourg',
  maximumBookingDays: 30,
}
