function createConfirmedBooking_(request) {
  var invalid = validateRequest_(request); if (invalid) return invalid;
  var lock = LockService.getScriptLock(); if (!lock.tryLock(10000)) return fail_('RATE_LIMITED', 'Please try again shortly.');
  try {
    var existing = properties_().getProperty('idempotency:' + request.idempotencyKey); if (existing) return { success: true, data: { requestId: existing, status: 'approved' } };
    var rateKey = 'last-submit:' + request.email.toLowerCase(); var lastSubmit = Number(properties_().getProperty(rateKey) || 0);
    if (Date.now() - lastSubmit < 60000) return fail_('RATE_LIMITED', 'Please wait before submitting another request.');
    var start = new Date(request.start); var end = new Date(start.getTime() + BOOKING_CONFIG.meetingTypes[request.meetingTypeId] * 60000);
    var allowedSlot = generateSlots_(request.date, request.meetingTypeId).some(function(slot) { return slot.start.getTime() === start.getTime(); });
    if (!allowedSlot || !isSlotAvailable_(start, end)) return fail_('SLOT_UNAVAILABLE', 'This time is no longer available.');
    var requestId = Utilities.getUuid(); confirmedCalendar_().createEvent(request.subject, start, end, { description: 'Booking reference: ' + requestId + '\nMeeting type: ' + request.meetingTypeId + '\nVisitor: ' + request.name + ' <' + request.email + '>' + (request.organization ? '\nOrganization: ' + request.organization : '') + '\nTimezone: ' + request.timezone + '\nDescription: ' + request.description });
    properties_().setProperties({ ['idempotency:' + request.idempotencyKey]: requestId, [rateKey]: String(Date.now()) });
    try { notifyBookingConfirmed_(requestId, request); } catch (mailError) { console.error(mailError); }
    return { success: true, data: { requestId: requestId, status: 'approved' } };
  } finally { lock.releaseLock(); }
}

