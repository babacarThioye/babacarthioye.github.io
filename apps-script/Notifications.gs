function ownerEmail_() { return requiredProperty_('OWNER_EMAIL'); }
function notifyNewRequest_(requestId, request) { MailApp.sendEmail(ownerEmail_(), 'New pending booking request ' + requestId, request.name + ' (' + request.email + ') requested ' + request.meetingTypeId + ' at ' + request.start + '. Review it in the Apps Script owner environment.'); }
function notifyApproved_(requestId, request) { MailApp.sendEmail(request.email, 'Meeting request approved', 'Your meeting request ' + requestId + ' has been approved. Timezone: ' + request.timezone + '.'); }
function notifyRejected_(requestId, request) { MailApp.sendEmail(request.email, 'Meeting request update', 'Your meeting request ' + requestId + ' could not be approved.'); }
