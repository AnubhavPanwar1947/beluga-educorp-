# Beluga + Supabase — click-by-click guide

Do every step in order.  
**Never paste passwords, secret keys, or service_role keys into Cursor chat.**

---

# PART 0 — What you need open

Keep these 3 things open:

1. **Chrome / Edge** → https://supabase.com/dashboard  
2. **File Explorer** → folder  
   `C:\Users\Admin\Projects\beluga-educorp`  
3. **PowerShell** (or Cursor terminal)

---

# PART 1 — Open the correct Supabase project

### 1.1 Go to dashboard
1. Open browser  
2. Type: `https://supabase.com/dashboard`  
3. Press Enter  
4. Log in if asked

### 1.2 Pick organization
1. You should see **Organizations** / project list  
2. Click the **same organization** where you created Beluga (can be same as Pelagic)  
3. You will see a list of projects

### 1.3 Open Beluga project
1. Find the project name you created (example: `beluga-practice` / `beluga-educorp`)  
2. **Click the project card / row**  
3. Wait until the project **Home** page loads  
4. Left side should show a **vertical sidebar** with icons/labels like:
   - Home / Project overview  
   - Table Editor  
   - SQL Editor  
   - Database  
   - Authentication  
   - Storage  
   - …  
   - near bottom: **Project Settings** (gear icon ⚙️)

If you still see “Setting up project…” wait 1–2 minutes and refresh.

✅ Checkpoint: you are inside **one** Beluga project, not the org list.

---

# PART 2 — Copy Project URL + public API key

You need **2 values only**:
- Project URL  
- Public key (**Publishable** or **anon**)

## Path A — Connect button (try this first)

### 2A.1 Find Connect
1. Look at the **top bar** of the project page (near the project name)  
2. Find a button labeled **Connect**  
3. **Click Connect**

### 2A.2 Pick app type if asked
1. If a panel opens asking framework / client:
   - Click **App Frameworks** or **Next.js** or **JavaScript** if shown  
2. If you see tabs like `ORMs`, `Mobile`, `Connection String` — stay on the **app / client library** side  
3. Avoid pure “Database connection string” for this step (that is for Postgres password login, not the website form)

### 2A.3 Copy Project URL
1. Find a field labeled something like:
   - **Project URL**  
   - **API URL**  
   - **Supabase URL**  
2. It looks like: `https://abcdefghijklmnop.supabase.co`  
3. Click the **copy** icon beside it (two overlapping squares)  
4. Paste into Notepad temporarily if you want (your PC only)

### 2A.4 Copy public key
1. Find a field labeled one of these:
   - **Publishable key** → starts with `sb_publishable_` ✅ use this  
   - **anon** / **anon public** → long text starting with `eyJ` ✅ use this  
2. Click **copy**  
3. **Do NOT copy**:
   - Secret key (`sb_secret_...`) ❌  
   - service_role ❌  
   - Database password ❌

If Connect is confusing, use Path B.

---

## Path B — Project Settings → API Keys

### 2B.1 Open Settings
1. Look at the **left sidebar**  
2. Scroll to the **bottom**  
3. Click the **gear icon** labeled **Project Settings**

### 2B.2 Open API keys page
1. Inside Settings left menu, click:
   - **API Keys**  
   - or **API** (older layout)  
2. Page title should mention API / API Keys

### 2B.3 Copy URL
1. Find **Project URL** / **URL**  
2. Click copy  
3. Value like `https://xxxxx.supabase.co`

### 2B.4 Copy public key
1. Look for tabs/sections:
   - **Publishable and secret API keys**  
   - and/or **Legacy anon / service_role keys**
2. Copy **Publishable** key **OR** legacy **anon** key  
3. Never secret / service_role

✅ Checkpoint: you have URL + one public key copied (on your PC only).

---

# PART 3 — Create `.env.local` on your computer

### 3.1 Open project folder
1. Press `Windows key`  
2. Type `File Explorer` → open  
3. Go to address bar and paste:

```
C:\Users\Admin\Projects\beluga-educorp
```

4. Press Enter  
5. You should see files like `package.json`, `.env.example`, `SETUP.md`, folder `src`

### 3.2 Create `.env.local` from example
Open PowerShell:

1. In that folder, click address bar → type `powershell` → Enter  
   **OR** open Cursor terminal and make sure path is `beluga-educorp`

Run exactly:

```powershell
cd C:\Users\Admin\Projects\beluga-educorp
copy .env.example .env.local
notepad .env.local
```

### 3.3 What Notepad should show
You should see something like:

```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_publishable_or_anon_key_here
```

### 3.4 Paste your real values
1. Replace the URL after `=` with your Project URL  
2. Replace the key after `=` with your Publishable or anon key  
3. No quotes, no spaces around `=`

**Correct example shape:**

```
NEXT_PUBLIC_SUPABASE_URL=https://abcdxyz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_xxxxxxxx
```

or

```
NEXT_PUBLIC_SUPABASE_URL=https://abcdxyz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

4. Click **File → Save** in Notepad  
5. Close Notepad

✅ Checkpoint: file exists at  
`C:\Users\Admin\Projects\beluga-educorp\.env.local`

---

# PART 4 — Create table in SQL Editor (click by click)

### 4.1 Open SQL Editor
1. Go back to browser Supabase project  
2. Left sidebar → click **SQL Editor**  
   - Icon often looks like a terminal / `>_`  
   - Label: **SQL Editor**  
3. If you only see **Database**, click **Database**, then click **SQL Editor** under it

### 4.2 New blank query
1. Click **New query** (top/left area)  
2. A big empty code box appears in the middle

### 4.3 Open the SQL file on your PC
1. File Explorer → `C:\Users\Admin\Projects\beluga-educorp`  
2. Open folder **`supabase`**  
3. Double-click **`contact_messages.sql`**  
   - If Windows asks which app: choose **Notepad**  
4. Press `Ctrl + A` (select all)  
5. Press `Ctrl + C` (copy)

### 4.4 Paste and run in Supabase
1. Click inside the Supabase SQL box  
2. Press `Ctrl + V` (paste)  
3. You should see SQL starting with:

```sql
create table if not exists public.contact_messages (
```

4. Bottom-right (or top-right) click the green **Run** button  
   - Shortcut often `Ctrl + Enter`  
5. Wait for result panel

### 4.5 Success look
You want something like:
- **Success. No rows returned**  
- or green check / “Success”

If red error:
- Make sure you are in the **Beluga** project (not Pelagic)  
- Re-copy the full file and run again  
- Tell me only the error message text (no keys)

✅ Checkpoint: SQL ran successfully.

---

# PART 5 — Confirm table in Table Editor

### 5.1 Open Table Editor
1. Left sidebar → click **Table Editor**  
   - Icon often looks like a grid/table  
2. Page shows schemas/tables on the left

### 5.2 Find the table
1. Under schema **`public`** look for **`contact_messages`**  
2. **Click `contact_messages`**

### 5.3 What you should see
Column headers roughly:
- `id`  
- `name`  
- `email`  
- `subject`  
- `message`  
- `created_at`

Rows can be **empty** — that is normal.

### 5.4 Optional: confirm RLS is on
1. Still on this table  
2. Look near top for badges/text like **RLS enabled**  
3. Or open table menu `...` → **Edit table** / **View policies**  
4. RLS should be enabled

✅ Checkpoint: table exists and is visible.

---

# PART 6 — Restart Beluga website locally

`.env.local` is read only when the server starts, so restart is required.

### 6.1 Stop old server (if running)
In the terminal where `npm run dev` is running:
1. Click that terminal  
2. Press `Ctrl + C`  
3. If it asks to confirm, type `Y` and Enter

### 6.2 Start again

```powershell
cd C:\Users\Admin\Projects\beluga-educorp
npm run dev
```

### 6.3 Read the Local link
In terminal output, find a line like:

```
- Local: http://localhost:3000
```

or

```
- Local: http://localhost:3001
```

Use **exactly that Local URL**.

### 6.4 Open Contact page
In browser address bar open one of these (match your port):

- `http://localhost:3000/contact/`  
- `http://localhost:3001/contact/`

✅ Checkpoint: Contact page loads with the form.

---

# PART 7 — Send a test message

### 7.1 Fill form
1. **Your name** → e.g. `Test User`  
2. **Your email** → e.g. `test@example.com`  
3. **Subject** → e.g. `Supabase test`  
4. **Message** → e.g. `Hello from Beluga local`

### 7.2 Click Send
1. Click the **Send** button  
2. Wait a second

### 7.3 Success on website
You want green text like:
- Message sent… check Table Editor…

If red error appears, copy **only that error sentence** to me (no keys).

### 7.4 Confirm row in Supabase
1. Browser → Supabase → **Table Editor** → **contact_messages**  
2. Click refresh / reload page if needed  
3. You should see 1 new row with your name/email/subject/message

✅ DONE when the row appears.

---

# PART 8 — If it failed (what to click)

| Where you are | What it says | What to do |
|---|---|---|
| Contact form | Supabase is not configured | Re-check `.env.local` names/values, then restart `npm run dev` |
| Contact form | Invalid API key / JWT | Settings → API Keys → copy Publishable or anon again (not secret) |
| Contact form | Failed to fetch | Check Project URL; wait until project is ready |
| Contact form | RLS / policy | SQL Editor → re-run full `contact_messages.sql` |
| Contact form | Could not find the table | Wrong project, or SQL not run → Table Editor should show table |
| Contact form | permission / not exposed | Auto-expose was off → re-run SQL (it has `GRANT INSERT`) |

---

# PART 9 — After this works (later, not now)

Boss content (separate):
- logo file → put in `public/images/logo.png`  
- real email / phone  
- final course names  

DreamHost go-live comes **after** local + Supabase work.

---

# Quick “where do I click?” map

| Goal | Click path |
|------|------------|
| Open project | Dashboard → org → Beluga project |
| Get URL/key | Top **Connect** OR bottom **Project Settings → API Keys** |
| Make env file | PC folder → PowerShell → `copy .env.example .env.local` → Notepad |
| Create table | Left **SQL Editor** → New query → paste file → **Run** |
| See table | Left **Table Editor** → `contact_messages` |
| Test form | `npm run dev` → `/contact/` → Send → check Table Editor |

You’re done with Supabase when one test row appears in **Table Editor → contact_messages**.
