# What to ask your boss (Beluga + DreamHost)

Copy this list into WhatsApp / email and tick what he can share.

---

## A. DreamHost account access

- [ ] DreamHost panel login URL (usually https://panel.dreamhost.com)
- [ ] Username / email for DreamHost
- [ ] Password (or temporary invite so you can set your own)
- [ ] Is 2FA / OTP enabled? Who receives the codes?
- [ ] Are you allowed your **own** DreamHost user (safer than sharing his master password)?

## B. Domain & DNS (belugaeducorp.com)

- [ ] Confirm exact domain: `belugaeducorp.com` and `www.belugaeducorp.com`
- [ ] Who manages DNS? DreamHost nameservers, or GoDaddy / Cloudflare / other?
- [ ] Screenshot or access to DNS records (A, CNAME, MX, TXT)
- [ ] Should email stay working on this domain while we rebuild the site? (**Ask this first**)
- [ ] Any other subdomains? (`school.`, `portal.`, `mail.`, etc.)

## C. Current website backup

- [ ] Is there already a live site on belugaeducorp.com?
- [ ] Permission to download a full backup before replacing anything
- [ ] Preferred go-live date / can we use a staging subdomain first? (`staging.belugaeducorp.com` or `new.belugaeducorp.com`)

## D. FTP / SFTP / SSH (how you upload files)

- [ ] SFTP host (often `belugaeducorp.com` or a DreamHost server hostname)
- [ ] FTP/SFTP username
- [ ] FTP/SFTP password
- [ ] Web root folder path (example: `/home/USER/belugaeducorp.com/`)
- [ ] SSH access allowed? (helpful for logs; not always needed)

## E. SSL / HTTPS

- [ ] Is Let’s Encrypt / HTTPS already enabled for belugaeducorp.com?
- [ ] Force HTTPS preferred? (almost always yes)

## F. Email (do not break this)

- [ ] Which emails exist? (`info@`, `admissions@`, `admin@`, etc.)
- [ ] Where is mail hosted? DreamHost mail, Google Workspace, Microsoft 365?
- [ ] Contact form should send to which address?
- [ ] Can we change website files **without** touching MX DNS records?

## G. Website content (he said content discussion is later — still ask basics)

- [ ] Company full legal name
- [ ] One-line tagline / what Beluga does
- [ ] City / country / address for footer
- [ ] Phone numbers to show
- [ ] Emails to show
- [ ] Logo file (PNG/SVG) + brand colors if any
- [ ] Any social links (LinkedIn, Instagram, YouTube, Facebook)
- [ ] Temporary placeholder text OK until full content meeting?

## H. Page list confirmation (keep to 4–5 pages)

Suggested starter set — confirm or edit:

1. Home
2. About
3. Programs / Courses
4. Admissions
5. Contact

- [ ] Approve these 5 pages?
- [ ] Remove / rename any page?
- [ ] Any must-have section on Home? (hero text, CTA, phone)

## I. Permissions & safety rules

- [ ] Who approves going live (you / boss)?
- [ ] Allowed to take site offline briefly for upload?
- [ ] Keep a backup for rollback for how many days?
- [ ] Any banned changes (billing pages, login portals, payments)?

## J. Later: Pelagic + DreamHost (clarify expectation)

Explain this to him and get a decision:

> Pelagic app stays on **Vercel** (best for Next.js).  
> DreamHost can hold **domain + email + DNS** for cost savings.  
> Full Pelagic hosting on DreamHost shared hosting is not a good fit; VPS would be needed if everything must live only on DreamHost.

Ask:

- [ ] For now: Beluga only on DreamHost — OK?
- [ ] Later for Pelagic: Vercel + DreamHost DNS/email — OK?
- [ ] Or does he want Pelagic fully moved onto DreamHost VPS later?

---

## Minimum you need **before coding deploy**

You can start building the site with only logo + basic text.  
You **must not upload over the live site** until you have:

1. DreamHost login **or** SFTP access  
2. Confirmation email/DNS must not break  
3. Permission to backup + replace files  
4. Web root folder path  

---

## Live error checklist (after launch)

When the boss says “site is broken”:

1. Note exact URL + what he sees (blank, 404, 500, SSL warning)
2. DreamHost panel → domain still points to correct folder?
3. SSL still active?
4. `index.html` exists in web root?
5. Check DreamHost error / access logs
6. Re-upload the missing/broken file
7. Hard refresh (Ctrl+F5) and retest phone + desktop
8. Write: error → cause → fix (your learning log)
