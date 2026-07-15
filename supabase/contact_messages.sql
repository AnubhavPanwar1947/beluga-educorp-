-- Run this in Supabase → SQL Editor (Beluga practice project).
-- Same pattern you will use for Pelagic contact form.

create table if not exists public.contact_messages (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Needed when "Automatically expose new tables" is OFF during project create.
grant insert on table public.contact_messages to anon, authenticated;

alter table public.contact_messages enable row level security;

-- Allow anonymous visitors to submit the contact form (browser / publishable or anon key).
create policy "Anyone can insert contact messages"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);

-- Do NOT allow public reads — view rows in Supabase Table Editor (or service role later).
-- Optional: only allow reading when signed in as yourself:
-- create policy "Authenticated can read contact messages"
--   on public.contact_messages
--   for select
--   to authenticated
--   using (true);
