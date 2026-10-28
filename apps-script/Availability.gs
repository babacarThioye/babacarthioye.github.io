function getPublicAvailability_(input) {
  if (!input || !BOOKING_CONFIG.meetingTypes[input.meetingTypeId] || !/^\d{4}-\d{2}-\d{2}$/.test(input.date) || !isIanaTimezone_(input.timezone)) return fail_('INVALID_INPUT', 'Invalid availability request.');
  var slots = generateSlots_(input.date, input.meetingTypeId).filter(function(slot) { return isSlotAvailable_(slot.start, slot.end); });
  return { success: true, data: slots.map(function(slot) { return { start: slot.start.toISOString(), end: slot.end.toISOString() }; }) };
}

function generateSlots_(dateText, meetingTypeId) {
  var duration = BOOKING_CONFIG.meetingTypes[meetingTypeId]; var tz = BOOKING_CONFIG.timezone;
  var day = new Date(dateText + 'T00:00:00'); var weekday = Number(Utilities.formatDate(day, tz, 'u'));
  if (BOOKING_CONFIG.workingDays.indexOf(weekday) < 0 || BOOKING_CONFIG.disabledDates.indexOf(dateText) >= 0) return [];
  var now = new Date(); var latest = new Date(now.getTime() + BOOKING_CONFIG.maximumBookingDays * 86400000); if (day > latest) return [];
  var start = new Date(dateText + 'T' + BOOKING_CONFIG.workingHours.start + ':00'); var end = new Date(dateText + 'T' + BOOKING_CONFIG.workingHours.end + ':00'); var lunchStart = new Date(dateText + 'T' + BOOKING_CONFIG.lunchBreak.start + ':00'); var lunchEnd = new Date(dateText + 'T' + BOOKING_CONFIG.lunchBreak.end + ':00');
  var slots = []; for (var cursor = new Date(start); cursor.getTime() + duration * 60000 <= end.getTime(); cursor = new Date(cursor.getTime() + BOOKING_CONFIG.slotIntervalMinutes * 60000)) { var slotEnd = new Date(cursor.getTime() + duration * 60000); if (cursor < lunchEnd && slotEnd > lunchStart) continue; if (cursor.getTime() < now.getTime() + BOOKING_CONFIG.minimumNoticeHours * 3600000) continue; slots.push({ start: cursor, end: slotEnd }); }
  return slots;
}

function isSlotAvailable_(start, end) {
  var buffer = BOOKING_CONFIG.bufferMinutes * 60000; var events = confirmedCalendar_().getEvents(new Date(start.getTime() - buffer), new Date(end.getTime() + buffer)); return events.length === 0;
}
