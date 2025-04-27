-- Users table
create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  wallet_address text unique not null,
  rating integer not null default 1200,
  wins integer not null default 0,
  losses integer not null default 0,
  total_pnl numeric not null default 0,
  total_wagered numeric not null default 0,
  created_at timestamptz not null default now()
);

-- Games table updates
alter table games
  add column if not exists white_player_id uuid references users(id),
  add column if not exists black_player_id uuid references users(id),
  add column if not exists wager numeric not null default 0;
