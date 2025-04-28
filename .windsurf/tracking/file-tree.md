# File Tree (Chex.fun)

## 2025-04-25

- src/app/chessboard.tsx — ChessGameBoard component: main chessboard UI and logic (chess.js + react-chessboard)
- src/app/socket.ts — Socket.io client singleton for multiplayer communication
- Supabase: public.games (id, white_player, black_player, fen, status, created_at, updated_at)
- Supabase: public.moves (id, game_id, move_number, move, created_at)
- src/app/lobby/page.tsx: Lobby page implementation (modular, uses useGames, usePresence, GameList; no legacy state or direct Supabase logic)
- src/app/components/Clock.tsx — Chess clock component for time control
- src/app/components/StreamerOverlay.tsx — Minimal overlay for streamers/OBS
