-- RidgeRise Media — website lead capture
-- Paste in Supabase SQL Editor (https://data.ridgerisemedia.com) and run once.

create table if not exists public.rrm_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  role text not null check (role in ('buyer', 'publisher', 'other')),
  full_name text not null,
  email text not null,
  phone text not null,
  company text not null,
  company_ein text not null,
  vertical_slug text,
  vertical_name text,
  message text not null,
  user_agent text,
  source text not null default 'website'
);

create index if not exists rrm_leads_created_at_idx on public.rrm_leads (created_at desc);
create index if not exists rrm_leads_email_idx on public.rrm_leads (email);

alter table public.rrm_leads enable row level security;

-- Website form may INSERT only (anon key). No public read/update/delete.
drop policy if exists "rrm_leads_anon_insert" on public.rrm_leads;
create policy "rrm_leads_anon_insert"
  on public.rrm_leads
  for insert
  to anon
  with check (true);

-- Optional: service role / dashboard has full access by default.

comment on table public.rrm_leads is 'Contact form submissions from ridgerisemedia.com';
