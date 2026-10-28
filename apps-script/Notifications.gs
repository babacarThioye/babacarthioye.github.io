function ownerEmail_() { return requiredProperty_('OWNER_EMAIL'); }
function formatRequestTime_(request) { return Utilities.formatDate(new Date(request.start), request.timezone || BOOKING_CONFIG.timezone, "EEEE, d MMMM yyyy HH:mm z"); }
function notifyBookingConfirmed_(requestId, request) {
  var time = formatRequestTime_(request);
  MailApp.sendEmail(ownerEmail_(), 'Confirmed booking ' + requestId, request.name + ' (' + request.email + ') booked ' + request.meetingTypeId + ' at ' + time + '. Subject: ' + request.subject + '.');
  MailApp.sendEmail(request.email, request.language === 'fr' ? 'Rendez-vous confirmé' : 'Meeting confirmed', request.language === 'fr' ? 'Votre rendez-vous est confirmé pour le ' + time + '. Référence : ' + requestId + '.' : 'Your meeting is confirmed for ' + time + '. Reference: ' + requestId + '.');
}
