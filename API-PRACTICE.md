# Practice: Next.js API on Beluga (for Pelagic later)

## What we added

Contact form now calls:

`POST /api/contact`

Flow (same idea as Pelagic):

Browser form → **Next.js API route** → Supabase `contact_messages`

File: `src/app/api/contact/route.ts`

---

## Why this matters for hosting

| Host | Does `/api/contact` work? |
|------|-----------------------------|
| `npm run dev` (localhost) | Yes |
| Vercel | Yes (best practice, like Pelagic) |
| DreamHost **shared** (upload HTML/`out`) | **No** — no Node server for API routes |

So with this API enabled, Beluga go-live should be:

1. Deploy app to **Vercel** (push GitHub → import project)
2. Add env vars in Vercel: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Point `belugaeducorp.com` DNS to Vercel (DreamHost can still hold the domain)

DreamHost Fully Hosted + FileZilla `out/` upload was for **static-only** mode (no API).

---

## Test locally (do this now)

1. Restart server:

```powershell
cd C:\Users\Admin\Projects\beluga-educorp
npm.cmd run dev
```

2. Open http://localhost:3000/contact/
3. Send a message
4. You should see thank-you text
5. Supabase → Table Editor → `contact_messages` → new row

Optional: open DevTools → Network → confirm request to `/api/contact` returns 200.

---

## Pelagic lesson

Same pattern you’ll use on Pelagic:
- Keep secrets / validation in **API routes** when possible
- Host on **Vercel** (or similar Node host)
- DreamHost is fine for **domain + email DNS**, not for running Next APIs on shared hosting
