function isEmail_(value) { return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254; }
function isIanaTimezone_(timezone) {
  try { Utilities.formatDate(new Date(), timezone, 'yyyy-MM-dd'); return true; } catch (_) { return false; }
}
function validateRequest_(request) {
  if (!request || request.website) return fail_('INVALID_INPUT', 'Invalid request.');
  if (!BOOKING_CONFIG.meetingTypes[request.meetingTypeId]) return fail_('INVALID_INPUT', 'Unknown meeting type.');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(request.date) || !/^\d{4}-\d{2}-\d{2}T/.test(request.start)) return fail_('INVALID_INPUT', 'Invalid date or time.');
  if (!isIanaTimezone_(request.timezone) || !isEmail_(request.email) || !request.consent) return fail_('INVALID_INPUT', 'Invalid contact details or consent.');
  if (![request.name, request.subject, request.description, request.idempotencyKey].every(function(v) { return typeof v === 'string' && v.length > 0; })) return fail_('INVALID_INPUT', 'Required details are missing.');
  if (request.name.length > 100 || request.subject.length > 160 || request.description.length > 2000 || (request.organization || '').length > 120 || request.idempotencyKey.length > 80) return fail_('INVALID_INPUT', 'One or more fields are too long.');
  return null;
}
