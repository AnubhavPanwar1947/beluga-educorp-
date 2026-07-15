# GO LIVE NOW — DreamHost upload checklist

Boss permission: YES  
Build folder ready after `npm run build` → **`out/`**

Do **not** paste DreamHost passwords in chat.

---

## A. Backup first (mandatory)

1. Open **FileZilla**
2. Connect with SFTP (from DreamHost panel):
   - Host: your DreamHost server (panel shows it)
   - Username / password: SFTP user
   - Port: **22**
3. On the **server** side, open the Beluga folder  
   (example: `/home/USERNAME/belugaeducorp.com/`)
4. Download **everything** to your PC into a folder named:

```
C:\Users\Admin\Backups\beluga-backup-2026-07-15
```

Only continue after backup finishes.

---

## B. Build files (already done locally)

Folder to upload:

```
C:\Users\Admin\Projects\beluga-educorp\out
```

Inside `out` you must see:
- `index.html`
- `about/`
- `programs/`
- `contact/`
- `blog/`
- `_next/`  ← required, do not skip

If you need to rebuild again:

```powershell
cd C:\Users\Admin\Projects\beluga-educorp
npm.cmd run build
```

---

## C. Upload new site

1. In FileZilla, still in Beluga web root
2. Delete or move old Wix/site files **only after backup**
3. Upload **all contents of `out/`** into the web root  
   (so `index.html` is directly in the domain folder, not in a nested `out` folder)
4. Wait until upload completes

---

## D. Test live (do this next)

Open:
- https://belugaeducorp.com/
- https://belugaeducorp.com/about/
- https://belugaeducorp.com/programs/
- https://belugaeducorp.com/contact/
- https://belugaeducorp.com/blog/

Also:
1. Hard refresh (Ctrl+F5)
2. Submit contact form
3. Confirm row in Supabase Table Editor → `contact_messages`
4. Check phone view

---

## E. Do NOT touch

- DNS MX records (email)
- Domain nameservers
- Billing settings

---

## If something breaks

| Symptom | Fix |
|---------|-----|
| Blank page | Wrong folder / missing `index.html` |
| CSS/js broken | `_next/` not uploaded |
| Old Wix still shows | Clear cache / wait / confirm correct web root |
| Email broken | You changed MX — restore from DNS backup |

Rollback: re-upload the backup folder from Step A.

---

## Tell me when stuck

Reply with:
1. Can you open FileZilla and see the Beluga folder? (yes/no)
2. Exact error or screenshot description if live test fails

Then I’ll guide the next click.
