# Hosting notes — DreamHost only

Beluga is configured as:

1. Static HTML/CSS/JS (`next build` → `out/`)
2. Contact mail via DreamHost PHP (`public/send-mail.php`)

No Vercel / Formspree / Supabase required for go-live.

## Email requirement

Create DreamHost mailbox: `info@belugaeducorp.com`  
PHP sends From that address (DreamHost sender policy).

## Security in send-mail.php

- POST only
- Honeypot field
- Minimum form fill time
- Per-IP rate limit
- Header injection cleanup
- Length limits
- Admin mail + visitor auto-reply
