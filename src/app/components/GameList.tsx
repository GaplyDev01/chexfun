import React from "react";
import { Game } from "../core/types";

interface GameListProps {
  games: Game[];
  onlineUsers: string[];
  onJoin: (game: Game) => void;
}

export default function GameList({ games, onlineUsers, onJoin }: GameListProps) {
  if (!games.length) {
    return <li style={{color: 'var(--foreground)', textAlign: 'center', padding: '2em 0'}}>No games available. Create one to get started!</li>;
  }
  return (
    <>
      {games.map(game => (
        <li key={game.id} className="card" style={{marginBottom: '1.5em', padding: '1em 1.5em', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--card-bg)', border: '1px solid var(--accent)', boxShadow: '0 0 12px #4f8cff33'}}>
          <div>
            <span style={{fontWeight: 600, color: 'var(--accent-2)'}}>Game ID:</span> <span style={{fontFamily: 'var(--font-mono)', fontSize: '1.1em'}}>{game.id.slice(0, 8)}...</span>
            <br />
            <span style={{color: 'var(--foreground)', fontSize: '0.95em'}}>White: <b>{game.white_player}</b> {game.white_player && onlineUsers.includes(game.white_player) ? '🟢' : '⚪'} {game.black_player ? `vs ${game.black_player}` : ''} {game.black_player ? (onlineUsers.includes(game.black_player) ? '🟢' : '⚪') : ''}</span>
          </div>
          <button
            style={{background: 'var(--accent-2)', color: '#0d1117', minWidth: 100}}
            onClick={() => onJoin(game)}
            disabled={!!game.black_player}
          >Join</button>
        </li>
      ))}
    </>
  );
}
