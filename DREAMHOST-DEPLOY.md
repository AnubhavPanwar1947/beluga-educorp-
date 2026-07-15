# Deploy Beluga to DreamHost (step-by-step)

Use this after your HTML files are ready in this folder.

---

## Before you upload (IMPORTANT)

1. **Backup the current live site** (today it is on Wix-style hosting via DreamHost domain)
2. Confirm with boss: **replacing the site is OK**
3. Confirm **email must keep working** — do not change MX records unless you know how

---

## Step 1 — Log into DreamHost

1. Open https://panel.dreamhost.com
2. Sign in with the login your boss gave you

---

## Step 2 — Find the website folder

1. Panel → **Websites** → **Manage Websites**
2. Click **belugaeducorp.com**
3. Note the **web directory** (example):
   - `/home/USERNAME/belugaeducorp.com/`
   - or `public_html` under that domain

This folder is what the world sees.

---

## Step 3 — Enable HTTPS (if not already)

1. Panel → **Secure Hosting** / **SSL**
2. Turn on **Let&apos;s Encrypt** for `belugaeducorp.com` and `www.belugaeducorp.com`
3. Enable **Force HTTPS** if available

---

## Step 4 — Connect with FileZilla (SFTP)

1. Download **FileZilla Client** (free)
2. DreamHost panel → **FTP / SFTP users** → create or view SFTP user
3. In FileZilla:
   - **Host:** your DreamHost server (panel shows it, often `servername.dreamhost.com`)
   - **Username:** SFTP username
   - **Password:** SFTP password
   - **Port:** `22`
   - **Protocol:** SFTP

---

## Step 5 — Backup old files

1. In FileZilla, open the Beluga web folder on the server
2. Download everything to a folder on your PC named `beluga-backup-YYYY-MM-DD`
3. Only continue after backup is done

---

## Step 6 — Upload your new site

Upload **these files** from `C:\Users\Admin\Projects\beluga-educorp`:

```
index.html
about.html
programs.html
admissions.html
contact.html
styles.css
```

Optional later: `images/` folder for logo photos.

**Rules:**
- `index.html` must be in the **web root** folder
- Keep filenames lowercase exactly as above

---

## Step 7 — Test live

Open in browser:

- https://belugaeducorp.com
- https://belugaeducorp.com/about.html
- https://belugaeducorp.com/programs.html
- https://belugaeducorp.com/admissions.html
- https://belugaeducorp.com/contact.html

Test on **phone** too.

---

## Step 8 — Fix common live errors

| Problem | Fix |
|---------|-----|
| Blank page | `index.html` missing or wrong folder |
| 404 on pages | File not uploaded or wrong name |
| No CSS styling | `styles.css` not uploaded or wrong path |
| Old site still shows | Clear cache (Ctrl+F5) or wait a few minutes |
| SSL warning | Enable Let&apos;s Encrypt in panel |
| Email stopped | You changed DNS/MX — restore from backup notes |

DreamHost logs: Panel → **Logs** → error log for the domain.

---

## Step 9 — Contact form (later)

Current form uses simple `mailto:` — works for testing only.

Better options after go-live:
- DreamHost form mail script
- Formspree / similar
- Boss confirms destination email first

---

## Step 10 — GitHub (recommended)

Create repo `beluga-educorp` on GitHub, then:

```powershell
cd C:\Users\Admin\Projects\beluga-educorp
git remote add origin https://github.com/YOUR_USERNAME/beluga-educorp.git
git add .
git commit -m "Copy live Beluga content into static 5-page site."
git push -u origin main
```

---

## What this teaches you for Pelagic

| Skill | Beluga on DreamHost | Pelagic |
|-------|---------------------|---------|
| Upload files | Yes | App stays on Vercel |
| DNS / domain | Yes | DreamHost can hold domain later |
| SSL | Yes | Vercel handles SSL |
| Live debugging | Yes | Vercel logs + browser |
| Node/Next.js app | No (static only) | Vercel |

**Do not paste DreamHost passwords in chat.** Use them only in FileZilla / panel yourself.
