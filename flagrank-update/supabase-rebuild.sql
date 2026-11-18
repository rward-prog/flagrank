-- FlagRank: complete database setup for a NEW, EMPTY Supabase project.
-- Built from every table and column the game's code actually uses.
-- Run once: Supabase dashboard > SQL Editor > New query > paste all of this > Run.
-- Safe to run again; it only adds things and never deletes data.

-- =====================================================================
-- 1) Solo mode: the leaderboard and the visitor counter
-- =====================================================================
create table if not exists solo_scores (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  score       int  not null,
  mode        text not null,          -- for example easy, hard, blitz
  name_color  text,                   -- the color a student bought in the store
  played_at   timestamptz not null default now()
);

create table if not exists visitors (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now()
);

-- =====================================================================
-- 2) Classroom Mode: rooms, players, and the class high scores
-- =====================================================================
create table if not exists rooms (
  id               uuid primary key default gen_random_uuid(),
  code             text unique not null,
  host_id          text,
  status           text not null default 'lobby',   -- lobby | active | round_result | finished
  current_round    int  not null default 0,
  countries_json   text,
  timer_deadline   bigint,                           -- unix milliseconds, used to sync the clock
  cash_locked      boolean not null default false,
  cash_winner_json text,
  created_at       timestamptz not null default now()
);

create table if not exists players (
  id           uuid primary key default gen_random_uuid(),
  room_id      uuid not null references rooms(id) on delete cascade,
  name         text not null,
  scores_json  text not null default '[]',
  cash         int  not null default 0,
  joined_at    timestamptz not null default now()
);

create table if not exists classroom_highscores (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  total_score  int  not null,
  room_code    text,
  played_at    timestamptz not null default now()
);

-- =====================================================================
-- 3) Live updates, so students see the teacher's rounds change instantly
-- =====================================================================
do $$
begin
  if not exists (select 1 from pg_publication_tables
                 where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'rooms') then
    alter publication supabase_realtime add table public.rooms;
  end if;
  if not exists (select 1 from pg_publication_tables
                 where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'players') then
    alter publication supabase_realtime add table public.players;
  end if;
end $$;

-- =====================================================================
-- 4) Who can do what (row level security)
--    Leaderboards and the counter: anyone can read and add, nobody can edit or delete.
--    Rooms and players: the game has to update them while a round is running.
-- =====================================================================
alter table solo_scores          enable row level security;
alter table visitors             enable row level security;
alter table classroom_highscores enable row level security;
alter table rooms                enable row level security;
alter table players              enable row level security;

drop policy if exists "read solo scores"       on solo_scores;
drop policy if exists "add solo scores"        on solo_scores;
create policy "read solo scores" on solo_scores for select using (true);
create policy "add solo scores"  on solo_scores for insert with check (true);

drop policy if exists "read visitors"          on visitors;
drop policy if exists "add visitors"           on visitors;
create policy "read visitors" on visitors for select using (true);
create policy "add visitors"  on visitors for insert with check (true);

drop policy if exists "read class highscores"  on classroom_highscores;
drop policy if exists "add class highscores"   on classroom_highscores;
create policy "read class highscores" on classroom_highscores for select using (true);
create policy "add class highscores"  on classroom_highscores for insert with check (true);

drop policy if exists "allow all rooms"        on rooms;
drop policy if exists "allow all players"      on players;
create policy "allow all rooms"   on rooms   for all using (true) with check (true);
create policy "allow all players" on players for all using (true) with check (true);

-- =====================================================================
-- 5) Indexes, so the top 10 lists stay fast
-- =====================================================================
create index if not exists solo_scores_mode_score_idx on solo_scores (mode, score);
create index if not exists solo_scores_played_at_idx  on solo_scores (played_at);
create index if not exists players_room_id_idx        on players (room_id);
create index if not exists classroom_scores_idx       on classroom_highscores (total_score);

-- =====================================================================
-- Optional housekeeping (not run automatically): clear out old classroom rooms.
-- Their players are removed with them. Run this by hand now and then.
-- =====================================================================
-- delete from rooms where created_at < now() - interval '7 days';
