# Beluga Edu Corp

Simple multi-page website for **[belugaeducorp.com](https://belugaeducorp.com)**.

- **Stack:** static HTML + CSS (DreamHost-friendly)
- **Hosting plan:** build here → upload to DreamHost shared hosting
- **Pelagic Marine:** stays on Vercel; DreamHost can still hold the Pelagic **domain/email/DNS** later

## Pages (5)

1. Home — `index.html`
2. About — `about.html`
3. Programs — `programs.html`
4. Contact — `contact.html`
5. Admissions — `admissions.html`

## Local preview

Open `index.html` in a browser, or from this folder:

```powershell
npx --yes serve .
```

## Deploy to DreamHost (short)

1. Get DreamHost access from boss (see `BOSS-ASK-LIST.md`)
2. Backup current Beluga site
3. Upload these files into the `belugaeducorp.com` web folder
4. Confirm `https://belugaeducorp.com` loads
5. Fix live errors using logs + checklist in `BOSS-ASK-LIST.md`

## GitHub remote

Create an empty repo named `beluga-educorp` under your GitHub account, then:

```powershell
cd C:\Users\Admin\Projects\beluga-educorp
git remote add origin https://github.com/YOUR_USERNAME/beluga-educorp.git
git add .
git commit -m "Initial Beluga Edu Corp static site scaffold."
git push -u origin main
```
