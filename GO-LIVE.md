# GO LIVE — Beluga (after API practice)

## Important hosting choice

This site now has a **Next.js API**: `POST /api/contact`.

| Goal | Host |
|------|------|
| Practice APIs like Pelagic | **Vercel** + DreamHost domain/DNS |
| Old static FileZilla `out/` upload | Does **not** run `/api/*` on DreamHost shared |

Recommended after boss yes:
1. Deploy Beluga GitHub repo to **Vercel**
2. Add Supabase env vars in Vercel
3. Point `belugaeducorp.com` from Wix → Vercel (careful with email MX)

Details: `API-PRACTICE.md`

---

## Local API test first

```powershell
cd C:\Users\Admin\Projects\beluga-educorp
npm.cmd run dev
```

Open http://localhost:3000/contact/ and submit the form.
