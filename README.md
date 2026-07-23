# Beluga Education Corp

Static Next.js site for **DreamHost shared hosting** (no paid third-party form APIs).

## Stack

- Next.js → **static export** (`out/`)
- Beautiful UI with Cormorant + Inter
- Contact form → DreamHost **`send-mail.php`**
  - Email to `info@belugaeducorp.com`
  - Auto-reply to visitor: “we received your message”
  - Honeypot + rate limit + header sanitizing

## Local preview (design)

```powershell
cd C:\Users\Admin\Projects\beluga-educorp
npm.cmd run dev
```

Open http://localhost:3000  
(Contact email send works after DreamHost upload — PHP is not available in `next dev`.)

## Build for DreamHost

```powershell
npm.cmd run build
```

Upload **everything inside `out/`** to the Beluga web root.

## Go live

Follow **`GO-LIVE-TODAY.md`** (Fully Hosted → FileZilla → DNS away from Wix).
