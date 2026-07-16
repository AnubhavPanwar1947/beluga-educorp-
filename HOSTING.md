# Hosting Beluga — DreamHost vs reality

## How we know the live site is on Wix (not DreamHost files)

We checked public DNS for `belugaeducorp.com`:

| Record | What we found |
|--------|----------------|
| **Nameservers** | `ns12.wixdns.net`, `ns13.wixdns.net` |
| **www** | CNAME → `cdn1.wixdns.net` |
| **A records** | IPs in Wix’s range (e.g. `185.230.63.x`) |

That means browsers load the site from **Wix’s servers**.  
DreamHost currently holds the **domain / DNS view**, but the **website files** are on Wix.

You also saw in DreamHost: Beluga domain = **nameserver only** (no web folder / Fully Hosted site). That matches the DNS check.

---

## DreamHost hosting steps (if you still want DreamHost for files)

**Only works fully if you remove the Next.js API** and use static export again  
(`output: "export"` → upload `out/`). With `/api/contact`, DreamHost **shared hosting cannot run the API**.

### A. Prepare DreamHost
1. Panel → Domains → `belugaeducorp.com`
2. Switch to **Fully Hosted** (creates a web folder)
3. Create SFTP user pointed at that folder
4. Connect FileZilla (port 22)

### B. Build static site (API off)
1. Put back `output: "export"` in `next.config.ts`
2. Point contact form to browser Supabase again (or Formspree)
3. `npm run build` → upload everything inside `out/`

### C. Point DNS away from Wix
1. Note DreamHost nameservers (e.g. `ns1.dreamhost.com`)
2. Change Beluga nameservers from Wix → DreamHost  
   **or** keep DreamHost as DNS and set A/CNAME to DreamHost hosting
3. **Do not break MX** (email)
4. Wait for DNS (minutes to hours)
5. Test https://belugaeducorp.com

---

## Recommended (because Beluga has `/api/contact`)

Same as Pelagic:

1. Deploy GitHub repo to **Vercel**
2. Add Supabase env vars in Vercel
3. Keep domain at DreamHost; point DNS/nameservers to Vercel
4. Leave email MX alone unless you know what you’re doing

Vercel runs the API. DreamHost can still own the domain.
