# Booking service deployment

This directory is a Google Apps Script project. It is deliberately separate
from the static GitHub Pages application: it holds calendar permissions and
never exposes credentials to the browser.

## Setup

1. Create a private Google Calendar for confirmed appointments.
2. Create a standalone Apps Script project owned by the portfolio owner and
   copy the `.gs` files and `appsscript.json` into it.
3. In **Project settings → Script properties**, add:
   - `OWNER_EMAIL`
   - `CONFIRMED_CALENDAR_ID`
4. Review the working-hours configuration in `Config.gs`.
5. Deploy as a Web App, executing as the owner. The public deployment must
   allow anonymous access only if public booking is required.
6. First test the deployment with a non-production calendar. The `doPost`
   endpoint accepts only `text/plain` JSON so the browser request remains a
   simple request; verify browser behaviour from the deployed GitHub Pages
   origin before publishing the endpoint URL.
7. Put the resulting `/exec` URL in the GitHub Pages build environment as
   `VITE_BOOKING_API_URL`. This URL is public configuration, not a secret.

## Immediate confirmation

The public endpoint confirms a booking immediately. In the same `LockService`
critical section, it rechecks availability and creates the event. It then sends
one confirmation e-mail to the owner and one to the visitor. A conflict returns
`SLOT_UNAVAILABLE` and no event is created.

## Operational limits

Apps Script and MailApp quotas apply. Check `MailApp.getRemainingDailyQuota()`
before bulk operations and use a dedicated test calendar before production.
Confirmed calendar events retain personal information. Define a retention and
deletion policy appropriate for your organisation and legal obligations.

## Security notes

- Calendar IDs and the owner e-mail are Script Properties, never frontend code.
- Public availability only returns slot times; it never returns event details.
- A honeypot, validation, idempotency keys, and `LockService` reduce abuse and
  conflict risks, but no public Apps Script endpoint is a complete anti-bot
  solution. Monitor the endpoint and add an abuse-control layer if needed.
