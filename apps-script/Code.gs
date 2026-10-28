/** Public Apps Script web-app entry point. Deploy as “execute as me”. */
function doPost(e) {
  try {
    if (!e.postData || e.postData.length > 12000) return json_(fail_('INVALID_INPUT', 'Request payload is invalid.'));
    var payload = JSON.parse((e.postData && e.postData.contents) || '{}');
    var result = payload.action === 'availability'
      ? getPublicAvailability_(payload)
      : payload.action === 'submit'
        ? createConfirmedBooking_(payload.request)
        : fail_('INVALID_INPUT', 'Unsupported operation.');
    return json_(result);
  } catch (error) {
    console.error(error);
    return json_(fail_('INTERNAL_ERROR', 'The request could not be processed.'));
  }
}

function doGet() {
  return json_({ success: false, error: { code: 'METHOD_NOT_ALLOWED', message: 'Use POST.' } });
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}

function fail_(code, message) { return { success: false, error: { code: code, message: message } }; }
