# Beluga Education Corp

Next.js rebuild of **[belugaeducorp.com](https://www.belugaeducorp.com/)**, ready to static-export and host on DreamHost.

## Stack

- **Next.js** (App Router) + TypeScript + Tailwind
- **Static export** → upload `out/` to DreamHost shared hosting
- **Supabase** contact form (`contact_messages`) — practice for Pelagic

## Pages

1. Home — `/`
2. About — `/about/`
3. Programs — `/programs/`
4. Admissions — `/admissions/`
5. Contact — `/contact/` (writes to Supabase)

## Local setup

```powershell
cd C:\Users\Admin\Projects\beluga-educorp
npm install
copy .env.example .env.local
```

Fill Supabase values in `.env.local`, then in Supabase SQL Editor run:

`supabase/contact_messages.sql`

```powershell
npm run dev
```

Open http://localhost:3000

## Build for DreamHost

```powershell
npm run build
```

Upload the contents of the `out/` folder to the Beluga web root on DreamHost.  
See `DREAMHOST-DEPLOY.md`.

## Supabase practice (for Pelagic later)

Contact form errors are written in plain English in the UI (missing env, bad key, RLS, missing table). Fix those here first — same patterns will show up on Pelagic.

Details: `SUPABASE.md`

## Legacy HTML

Previous static HTML scaffold is in `legacy-static/` (reference only).
