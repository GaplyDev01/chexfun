# File Tree (Chex.fun)

## 2025-04-28
- src/app/chessboard/page.tsx — Main chessboard gameplay, all status/UX logic
- src/app/bets/page.tsx — Bets table (wager, players, status, winner)
- src/app/lobby/page.tsx — Lobby, modular hooks (useGames, usePresence)
- src/app/profile/page.tsx — User profile page
- src/app/components/ — UI components (Clock, StreamerOverlay, ErrorBanner, LoadingSpinner, GameList, WalletConnectButton, ThemeToggle)
- src/app/core/escrow.ts — On-chain contract interaction utility
- src/app/core/supabaseClient.ts — Supabase client setup
- src/app/core/hooks/ — useGames, usePresence
- src/app/socket.ts — Multiplayer socket client
- .windsurf/tracking/ — All tracking and documentation files
- Supabase: public.games, public.moves (schema unchanged)

## 2025-04-25

## 2025-04-25

- src/app/chessboard.tsx — ChessGameBoard component: main chessboard UI and logic (chess.js + react-chessboard)
- src/app/socket.ts — Socket.io client singleton for multiplayer communication
- Supabase: public.games (id, white_player, black_player, fen, status, created_at, updated_at)
- Supabase: public.moves (id, game_id, move_number, move, created_at)
- src/app/lobby/page.tsx: Lobby page implementation (modular, uses useGames, usePresence, GameList; no legacy state or direct Supabase logic)
- src/app/components/Clock.tsx — Chess clock component for time control
- src/app/components/StreamerOverlay.tsx — Minimal overlay for streamers/OBS
