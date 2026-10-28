var BOOKING_CONFIG = {
  timezone: 'Europe/Luxembourg',
  workingDays: [1, 2, 3, 4, 5],
  workingHours: { start: '09:00', end: '17:00' },
  lunchBreak: { start: '12:00', end: '13:00' },
  slotIntervalMinutes: 30,
  bufferMinutes: 15,
  minimumNoticeHours: 24,
  maximumBookingDays: 30,
  maximumMeetingsPerDay: 4,
  disabledDates: [],
  meetingTypes: {
    'research-collaboration': 30,
    'technical-discussion': 30,
    'professional-opportunity': 30,
    'consulting': 45,
    'general-meeting': 20,
  },
};

function properties_() { return PropertiesService.getScriptProperties(); }
function requiredProperty_(name) {
  var value = properties_().getProperty(name);
  if (!value) throw new Error('Missing Script Property: ' + name);
  return value;
}
function confirmedCalendar_() { return CalendarApp.getCalendarById(requiredProperty_('CONFIRMED_CALENDAR_ID')); }
