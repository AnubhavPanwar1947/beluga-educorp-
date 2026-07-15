# Deploy Beluga to DreamHost (Next.js static export)

Build the site with Next.js, then upload the **`out/`** folder to DreamHost.

---

## Before you upload (IMPORTANT)

1. **Backup the current live site**
2. Confirm with boss: **replacing the site is OK**
3. Confirm **email must keep working** — do not change MX records unless you know how
4. Do **not** paste DreamHost passwords in chat

---

## Step 1 — Build locally

```powershell
cd C:\Users\Admin\Projects\beluga-educorp
copy .env.example .env.local
# Fill Supabase URL + anon key, run supabase/contact_messages.sql in Supabase
npm install
npm run build
```

This creates an `out/` folder (HTML/CSS/JS). That is what DreamHost serves.

---

## Step 2 — Log into DreamHost

1. Open https://panel.dreamhost.com
2. Sign in with the login your boss gave you

---

## Step 3 — Find the website folder

1. Panel → **Websites** → **Manage Websites**
2. Click **belugaeducorp.com**
3. Note the **web directory** (example):
   - `/home/USERNAME/belugaeducorp.com/`

This folder is what the world sees.

---

## Step 4 — Enable HTTPS (if not already)

1. Panel → **Secure Hosting** / **SSL**
2. Turn on **Let’s Encrypt** for `belugaeducorp.com` and `www.belugaeducorp.com`
3. Enable **Force HTTPS** if available

---

## Step 5 — Connect with FileZilla (SFTP)

1. Download **FileZilla Client**
2. DreamHost panel → **FTP / SFTP users** → create or view SFTP user
3. In FileZilla:
   - **Host:** DreamHost server hostname from the panel
   - **Username / password:** SFTP user
   - **Port:** `22`
   - **Protocol:** SFTP

---

## Step 6 — Backup old files

1. Download everything from the Beluga web folder to `beluga-backup-YYYY-MM-DD`
2. Only continue after backup is done

---

## Step 7 — Upload the new site

Upload **everything inside `out/`** into the Beluga web root:

- `index.html`
- `about/`, `programs/`, `admissions/`, `contact/`
- `_next/` (required — do not skip)
- other generated assets

**Rules:**
- `index.html` must be in the **web root**
- Keep the `_next` folder
- If an old Wix export / redirect file exists, remove only after backup

---

## Step 8 — Test live

- https://belugaeducorp.com
- https://belugaeducorp.com/about/
- https://belugaeducorp.com/programs/
- https://belugaeducorp.com/admissions/
- https://belugaeducorp.com/contact/

Also test on phone. Submit the contact form and confirm a row in Supabase.

---

## Step 9 — Fix common live errors

| Problem | Fix |
|---------|-----|
| Blank page | Wrong folder, or `_next` missing |
| 404 on `/about/` | Trailing-slash folders not uploaded |
| Old site still shows | Hard refresh / wait / clear CDN cache |
| SSL warning | Enable Let’s Encrypt |
| Email stopped | You changed DNS/MX — restore MX |
| Contact form fails after upload | Rebuild with real `.env.local` then re-upload `out/` |

DreamHost logs: Panel → **Logs** → error log for the domain.

---

## Step 10 — GitHub (recommended)

```powershell
cd C:\Users\Admin\Projects\beluga-educorp
git remote add origin https://github.com/YOUR_USERNAME/beluga-educorp.git
git add .
git commit -m "Rebuild Beluga site in Next.js with Supabase contact form."
git push -u origin main
```

---

## DreamHost vs Pelagic

| | Beluga | Pelagic |
|---|---|---|
| App | Next.js **static export** on DreamHost | Next.js on **Vercel** |
| Domain/email | DreamHost | Can use DreamHost DNS/email later |
| Supabase | Contact form practice | Same pattern for real forms/auth |

**Do not paste DreamHost passwords in chat.**
