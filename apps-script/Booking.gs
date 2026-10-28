function createConfirmedBooking_(request) {
  var invalid = validateRequest_(request); if (invalid) return invalid;
  var lock = LockService.getScriptLock(); if (!lock.tryLock(10000)) return fail_('RATE_LIMITED', 'Please try again shortly.');
  try {
    var existing = properties_().getProperty('idempotency:' + request.idempotencyKey); if (existing) return { success: true, data: { requestId: existing, status: 'approved' } };
    var start = new Date(request.start); var end = new Date(start.getTime() + BOOKING_CONFIG.meetingTypes[request.meetingTypeId] * 60000); if (!isSlotAvailable_(start, end)) return fail_('SLOT_UNAVAILABLE', 'This time is no longer available.');
    var requestId = Utilities.getUuid(); confirmedCalendar_().createEvent(request.subject, start, end, { description: 'Booking reference: ' + requestId + '\nMeeting type: ' + request.meetingTypeId + '\nVisitor: ' + request.name + ' <' + request.email + '>' + (request.organization ? '\nOrganization: ' + request.organization : '') + '\nTimezone: ' + request.timezone + '\nDescription: ' + request.description });
    properties_().setProperty('idempotency:' + request.idempotencyKey, requestId);
    try { notifyBookingConfirmed_(requestId, request); } catch (mailError) { console.error(mailError); }
    return { success: true, data: { requestId: requestId, status: 'approved' } };
  } finally { lock.releaseLock(); }
}

