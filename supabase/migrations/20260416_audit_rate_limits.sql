-- Migration: Create audit_rate_limits table for Edge Function IP rate limiting
-- Run this in Supabase SQL Editor before deploying the submit-audit Edge Function.

create table if not exists public.audit_rate_limits (
  id          bigserial primary key,
  ip_address  text        not null,
  created_at  timestamptz not null default now()
);

-- Index to make the rate-limit query fast (filter by ip + created_at range)
create index if not exists idx_audit_rate_limits_ip_created
  on public.audit_rate_limits (ip_address, created_at desc);

-- Row-level security: deny all direct access from frontend clients.
-- Only the Edge Function (service_role key) can insert/select.
alter table public.audit_rate_limits enable row level security;

-- Auto-purge rows older than 2 hours to keep the table small.
-- Requires pg_cron extension (enabled in Supabase by default on paid plans).
-- On free plan, rows will accumulate but the query still filters by window correctly.
-- Optional: uncomment if pg_cron is available.
/*
select cron.schedule(
  'purge-audit-rate-limits',
  '0 * * * *',  -- every hour
  $$
    delete from public.audit_rate_limits
    where created_at < now() - interval '2 hours';
  $$
);
*/
