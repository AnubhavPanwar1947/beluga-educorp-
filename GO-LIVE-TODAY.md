# Go live today — Beluga on DreamHost (leave Wix)

Stack: **static HTML/CSS/JS** + **DreamHost PHP mail** (no Vercel, no paid form APIs).

---

## Before you start (5 minutes)

1. DreamHost panel → **Mail** → **Manage Email**
2. Create / confirm mailbox: **`info@belugaeducorp.com`**
3. You need this mailbox so PHP `mail()` can send as Beluga (DreamHost rule)
4. Keep this password private (not in chat)

Build folder on your PC:
`C:\Users\Admin\Projects\beluga-educorp\out`

Must include:
- `index.html`
- `send-mail.php`
- `_next/`
- `contact/`, `about/`, `programs/`, `blog/`
- `.htaccess`

---

## Part A — Turn Beluga into Fully Hosted on DreamHost

1. Login: https://panel.dreamhost.com
2. **Domains** → **Manage Domains**
3. Click **`belugaeducorp.com`**
4. Change hosting from **DNS only** → **Fully Hosted**
   - If button says **Add hosting** / **Fully host this domain**, use that
5. Wait until DreamHost creates a web folder (1–10 minutes)
6. Note the path, example: `/home/USERNAME/belugaeducorp.com`

Also: **Websites** → **Manage Websites** → open Beluga → confirm web directory.

---

## Part B — SFTP user + FileZilla

1. Panel → **SFTP Users** / **FTP Users** → **Add user**
2. Point user directory to Beluga folder (`belugaeducorp.com`)
3. Save username + password yourself
4. Open FileZilla
5. Host = DreamHost server hostname from panel  
   Username / Password = SFTP user  
   Port = **22** → Quickconnect

---

## Part C — Upload new site

1. Left side (PC): open  
   `C:\Users\Admin\Projects\beluga-educorp\out`
2. Right side: Beluga web root
3. Upload **everything inside `out`** (including `send-mail.php`, `_next`, `.htaccess`)
4. Do **not** nest an extra `out` folder
5. Wait until 100% done

---

## Part D — Point domain from Wix → DreamHost (this puts you on Google)

Right now DNS/nameservers point to **Wix**. Change them to DreamHost.

### Option 1 — Nameservers (most common)

1. DreamHost panel → Domains → Beluga → note DreamHost nameservers  
   (often like `ns1.dreamhost.com` and `ns2.dreamhost.com`)
2. If domain registrar is DreamHost:
   - Domains → Beluga → set nameservers to DreamHost hosting nameservers
3. If still using Wix nameservers (`ns12.wixdns.net` etc.):
   - Change nameservers to DreamHost’s nameservers

### Option 2 — Keep DNS at current place, change A record
Only if boss prefers not to change nameservers:
- Point `A` record for `@` to DreamHost server IP (panel shows it)
- Point `www` CNAME/A to DreamHost as instructed

### Email safety
- **Do not delete MX records**
- If email already works on DreamHost, leave MX alone
- After switch, send a test email to `info@belugaeducorp.com`

DNS can take **15 minutes to a few hours** (sometimes up to 24–48h).

---

## Part E — Test live

Open:
- https://belugaeducorp.com/
- https://belugaeducorp.com/contact/

Then:
1. Hard refresh (Ctrl+F5)
2. Submit contact form with **your real email**
3. You should get:
   - Thank-you on page
   - Confirmation email to you
   - Enquiry email to `info@belugaeducorp.com`

If mail fails:
- Confirm `info@belugaeducorp.com` mailbox exists on DreamHost
- Confirm `send-mail.php` is in web root
- Check DreamHost mail logs / spam folder

---

## What not to do today

- Don’t pay for Formspree/Vercel for Beluga
- Don’t change MX unless boss confirms
- Don’t delete Wix until new site is confirmed live (keep Wix as backup a few days)

---

## Rollback

If something breaks: put Wix nameservers back, or re-upload old backup files.
