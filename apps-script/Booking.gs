function createPendingRequest_(request) {
  var invalid = validateRequest_(request); if (invalid) return invalid;
  var lock = LockService.getScriptLock(); if (!lock.tryLock(10000)) return fail_('RATE_LIMITED', 'Please try again shortly.');
  try {
    var existing = properties_().getProperty('idempotency:' + request.idempotencyKey); if (existing) return { success: true, data: { requestId: existing, status: 'pending' } };
    var start = new Date(request.start); var end = new Date(start.getTime() + BOOKING_CONFIG.meetingTypes[request.meetingTypeId] * 60000); if (!isSlotAvailable_(start, end)) return fail_('SLOT_UNAVAILABLE', 'This time is no longer available.');
    var requestId = Utilities.getUuid(); var event = pendingCalendar_().createEvent('[PENDING] ' + requestId, start, end, { description: JSON.stringify({ requestId: requestId, request: request, status: 'pending', createdAt: new Date().toISOString() }) }); event.setTransparency(CalendarApp.EventTransparency.TRANSPARENT);
    properties_().setProperty('idempotency:' + request.idempotencyKey, requestId); notifyNewRequest_(requestId, request); return { success: true, data: { requestId: requestId, status: 'pending' } };
  } finally { lock.releaseLock(); }
}

function approveRequest_(requestId) {
  assertOwner_(); var lock = LockService.getScriptLock(); lock.waitLock(30000);
  try { var pending = findPending_(requestId); if (!pending || pending.status !== 'pending') throw new Error('Request unavailable.'); var request = pending.request; var start = new Date(request.start); var end = new Date(start.getTime() + BOOKING_CONFIG.meetingTypes[request.meetingTypeId] * 60000); if (!isSlotAvailable_(start, end)) { rejectRequest_(requestId, 'slot_unavailable'); return; } confirmedCalendar_().createEvent(request.subject, start, end, { description: 'Booking reference: ' + requestId + '\nMeeting type: ' + request.meetingTypeId + '\nVisitor: ' + request.name + ' <' + request.email + '>' }); pending.status = 'approved'; savePending_(requestId, pending); notifyApproved_(requestId, request); } finally { lock.releaseLock(); }
}

function rejectRequest_(requestId, reason) { assertOwner_(); var pending = findPending_(requestId); if (!pending || pending.status !== 'pending') throw new Error('Request unavailable.'); pending.status = 'rejected'; pending.reason = reason || 'owner_rejected'; savePending_(requestId, pending); notifyRejected_(requestId, pending.request); }
