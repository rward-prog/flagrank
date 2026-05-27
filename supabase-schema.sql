-- Run this in your Supabase SQL Editor to set up the database

create table if not exists rooms (
  id          uuid primary key default gen_random_uuid(),
  code        text unique not null,
  host_id     text,
  status      text not null default 'lobby',  -- lobby | active | round_result | finished
  current_round int not null default 0,
  countries_json text,
  timer_deadline bigint,  -- unix ms timestamp for client-side sync
  created_at  timestamptz not null default now()
);

create table if not exists players (
  id          uuid primary key default gen_random_uuid(),
  room_id     uuid not null references rooms(id) on delete cascade,
  name        text not null,
  scores_json text not null default '[]',
  joined_at   timestamptz not null default now()
);

create table if not exists classroom_highscores (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  total_score int not null,
  room_code   text,
  played_at   timestamptz not null default now()
);

-- Enable realtime for rooms and players tables
alter publication supabase_realtime add table rooms;
alter publication supabase_realtime add table players;

-- RLS: allow anonymous reads/writes (suitable for a classroom game)
alter table rooms enable row level security;
alter table players enable row level security;
alter table classroom_highscores enable row level security;

create policy "allow all rooms" on rooms for all using (true) with check (true);
create policy "allow all players" on players for all using (true) with check (true);
create policy "allow all highscores" on classroom_highscores for all using (true) with check (true);
