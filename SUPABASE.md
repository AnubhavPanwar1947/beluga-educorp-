# Supabase on Beluga (practice for Pelagic)

Small feature only: the **Contact** form inserts into `contact_messages`.

When you host Pelagic, you’ll hit the same class of errors. Use Beluga to learn them safely.

## One-time setup

1. Create a free project at https://supabase.com  
2. Project Settings → API → copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` `public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Copy `.env.example` → `.env.local` and paste the values  
4. SQL Editor → run `supabase/contact_messages.sql`  
5. Restart `npm run dev`  
6. Submit the Contact form → check Table Editor → `contact_messages`

Never put the **service_role** key in the browser or in `NEXT_PUBLIC_*`.

## Errors you will see (and what they mean)

| What you see | Cause | Fix |
|---|---|---|
| Supabase is not configured | Missing `.env.local` or forgot restart | Add env vars, restart `npm run dev` |
| Invalid API key / JWT | Wrong anon key | Re-copy anon key from API settings |
| Failed to fetch / network | Wrong URL or offline | Check `NEXT_PUBLIC_SUPABASE_URL` |
| RLS / row-level security | No insert policy for `anon` | Re-run the SQL file (insert policy) |
| Could not find the table / schema cache | Table not created | Run `contact_messages.sql` |
| Works locally, empty on DreamHost | Env baked at **build** time | Rebuild with env set, then re-upload `out/` |

## DreamHost note

Static export bakes `NEXT_PUBLIC_*` into the JS at **build** time.  
Before `npm run build`, make sure `.env.local` (or CI env) has the real Supabase values.

## Same pattern for Pelagic later

1. Table + RLS  
2. Browser client with anon key  
3. Form insert  
4. Read friendly errors if insert fails  

Pelagic can stay on Vercel; Beluga stays on DreamHost as static files. Supabase is cloud either way.
