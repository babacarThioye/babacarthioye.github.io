/**
 * Owner-only approval helpers.
 *
 * Set REQUEST_ID_TO_REVIEW in Script Properties to the reference from the
 * owner notification, then run one of these functions from the Apps Script
 * editor. Only an Apps Script editor with the owner identity can do this.
 */
function approveConfiguredRequest_() {
  assertOwner_();
  var requestId = requiredProperty_('REQUEST_ID_TO_REVIEW');
  approveRequest_(requestId);
  properties_().deleteProperty('REQUEST_ID_TO_REVIEW');
}

function rejectConfiguredRequest_() {
  assertOwner_();
  var requestId = requiredProperty_('REQUEST_ID_TO_REVIEW');
  rejectRequest_(requestId, 'owner_rejected');
  properties_().deleteProperty('REQUEST_ID_TO_REVIEW');
}

function listPendingRequests_() {
  assertOwner_();
  var events = pendingCalendar_().getEvents(new Date(0), new Date('2100-01-01'));
  return events.map(function(event) {
    try {
      var data = JSON.parse(event.getDescription());
      return data.status === 'pending' ? { requestId: data.requestId, start: event.getStartTime(), name: data.request.name, email: data.request.email, meetingType: data.request.meetingTypeId } : null;
    } catch (_) { return null; }
  }).filter(Boolean);
}
