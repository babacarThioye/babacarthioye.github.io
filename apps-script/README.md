# Booking service deployment

This directory is a Google Apps Script project. It is deliberately separate
from the static GitHub Pages application: it holds calendar permissions and
never exposes credentials to the browser.

## Setup

1. Create two private Google Calendars: one for confirmed appointments and one
   for pending requests.
2. Create a standalone Apps Script project owned by the portfolio owner and
   copy the `.gs` files and `appsscript.json` into it.
3. In **Project settings → Script properties**, add:
   - `OWNER_EMAIL`
   - `CONFIRMED_CALENDAR_ID`
   - `PENDING_CALENDAR_ID`
4. Review the working-hours configuration in `Config.gs`.
5. Deploy as a Web App, executing as the owner. The public deployment must
   allow anonymous access only if public booking is required.
6. First test the deployment with a non-production calendar. The `doPost`
   endpoint accepts only `text/plain` JSON so the browser request remains a
   simple request; verify browser behaviour from the deployed GitHub Pages
   origin before publishing the endpoint URL.
7. Put the resulting `/exec` URL in the GitHub Pages build environment as
   `VITE_BOOKING_API_URL`. This URL is public configuration, not a secret.

## Approval

Do not create a public approval endpoint. The owner notification includes a
request reference. To approve or reject it safely:

1. Open **Apps Script → Project settings → Script properties**.
2. Set `REQUEST_ID_TO_REVIEW` to the reference shown in the e-mail.
3. In the authenticated Apps Script editor, select and run either
   `approveConfiguredRequest_` or `rejectConfiguredRequest_`.
4. The property is deleted after the operation. The visitor receives the
   corresponding notification.

`approveConfiguredRequest_` verifies the owner identity, acquires a script
lock, and re-checks availability before creating the confirmed event.

## Operational limits

Apps Script and MailApp quotas apply. Check `MailApp.getRemainingDailyQuota()`
before bulk operations and use a dedicated test calendar before production.
Pending requests retain personal information in the private pending calendar;
set a time-driven Apps Script trigger to expire and delete/anonymize stale
requests according to your retention policy and legal review.

## Security notes

- Calendar IDs and the owner e-mail are Script Properties, never frontend code.
- Public availability only returns slot times; it never returns event details.
- A honeypot, validation, idempotency keys, and `LockService` reduce abuse and
  conflict risks, but no public Apps Script endpoint is a complete anti-bot
  solution. Monitor the endpoint and add an abuse-control layer if needed.
