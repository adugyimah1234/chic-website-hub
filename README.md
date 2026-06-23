# WCM Ghana Contact Email Setup

Use a local `.env` file for the real SMTP password. Do not put secrets in `.env.example`.

## SMTP values

```env
CONTACT_TO_EMAILS=ghanawcm@gmail.com
SITE_URL=https://your-domain.example
EMAIL_LOGO_URL=https://your-domain.example/email-logo.png

SMTP_HOST=mail.wcmgh.org
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=wcmghana@wcmgh.org
SMTP_PASS=your_real_mailbox_password
SMTP_FROM_EMAIL="WCM Ghana <wcmghana@wcmgh.org>"
```

## Notes

- `CONTACT_TO_EMAILS` can be a comma-separated list if you want multiple inboxes.
- `SMTP_USER` must be the full mailbox address.
- `SMTP_PASS` must be the mailbox password from cPanel, not the cPanel login password.
- If SMTP is unavailable, the app can still fall back to Resend when those env vars are present.
