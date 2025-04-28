// Centralized shared types for Supabase and app models

export interface User {
  id: string;
  wallet_address: string;
  rating: number;
  wins: number;
  losses: number;
  total_pnl: string;
  total_wagered: string;
  created_at: string;
  last_seen?: string;
}

export interface Game {
  id: string;
  white_player: string | null;
  white_player_id: string | null;
  black_player: string | null;
  black_player_id: string | null;
  fen: string;
  status: string;
  wager: number | null;
  white_player_rating: number | null;
}
