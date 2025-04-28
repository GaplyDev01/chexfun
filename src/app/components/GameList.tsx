import React from "react";
import { Game } from "../core/types";

interface GameListProps {
  games: Game[];
  onlineUsers: string[];
  onJoin: (game: Game) => void;
  onCreateGame?: () => void;
  loading?: boolean;
}

import React, { useState, useMemo } from "react";

const AVATAR_COLORS = ["#4f8cff","#a259ff","#f24e1e","#43b97f","#fbbc05","#ff6d00"];
function getInitials(name: string | null | undefined) {
  if (!name) return "?";
  const parts = name.split(" ");
  if (parts.length > 1) return parts[0][0] + parts[1][0];
  return name.slice(0, 2).toUpperCase();
}
function Avatar({ name }: { name: string | null | undefined }) {
  const initials = getInitials(name);
  const color = AVATAR_COLORS[(name?.charCodeAt(0) ?? 0) % AVATAR_COLORS.length];
  return <span style={{display:'inline-block',width:28,height:28,borderRadius:'50%',background:color,color:'#fff',textAlign:'center',lineHeight:'28px',fontWeight:600,marginRight:8}}>{initials}</span>;
}

const GameList: React.FC<GameListProps> = React.memo(({ games, onlineUsers, onJoin, onCreateGame, loading }) => {
  const [sort, setSort] = useState<'wager'|'rating'|'status'>('wager');
  const sortedGames = useMemo(() => {
    if (!games) return [];
    switch (sort) {
      case 'rating': return [...games].sort((a,b) => (b.white_player_rating||0) - (a.white_player_rating||0));
      case 'status': return [...games].sort((a,b) => a.status.localeCompare(b.status));
      default: return [...games].sort((a,b) => b.wager - a.wager);
    }
  }, [games, sort]);
  if (loading) return <li style={{textAlign:'center',padding:'2em 0'}} aria-busy="true">Loading games...</li>;
  if (!sortedGames.length) {
    return <li style={{color: 'var(--foreground)', textAlign: 'center', padding: '2em 0'}}>
      No games available.<br/>
      {onCreateGame && <button onClick={onCreateGame} style={{marginTop:12,background:'var(--accent-2)',color:'#0d1117',fontWeight:600,padding:'8px 20px',borderRadius:6}} aria-label="Create new game" title="Create a new game">+ Create Game</button>}
    </li>;
  }
  return (
    <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
      <div style={{display:'flex',alignItems:'center',margin:'8px 0 16px 0'}}>
        <label htmlFor="sort-games" style={{marginRight:8}}>Sort by:</label>
        <select id="sort-games" value={sort} onChange={e=>setSort(e.target.value as any)} style={{marginRight:16}} aria-label="Sort games">
          <option value="wager">Wager</option>
          <option value="rating">Rating</option>
          <option value="status">Status</option>
        </select>
      </div>
      {sortedGames.map(game => (
        <li key={game.id} className="card" tabIndex={0} style={{marginBottom: '1.5em', padding: '1em 1.5em', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--card-bg)', border: '1px solid var(--accent)', boxShadow: '0 0 12px #4f8cff33'}}>
          <div style={{display:'flex',alignItems:'center'}}>
            <Avatar name={game.white_player} />
            <span style={{fontWeight: 600, color: 'var(--accent-2)'}}>Game ID:</span> <span style={{fontFamily: 'var(--font-mono)', fontSize: '1.1em'}}>{game.id.slice(0, 8)}...</span>
            <br />
            <span style={{color: 'var(--foreground)', fontSize: '0.95em',marginLeft:8}}>White: <b>{game.white_player}</b> {game.white_player && onlineUsers.includes(game.white_player) ? '🟢' : '⚪'} {game.black_player ? `vs ` : ''}</span>
            {game.black_player && <><Avatar name={game.black_player} /><span style={{fontSize:'0.95em'}}><b>{game.black_player}</b> {onlineUsers.includes(game.black_player) ? '🟢' : '⚪'}</span></>}
          </div>
          <button
            style={{background: 'var(--accent-2)', color: '#0d1117', minWidth: 100}}
            onClick={() => onJoin(game)}
            disabled={!!game.black_player}
            aria-label={game.black_player ? 'Game already joined' : 'Join this game'}
            title={game.black_player ? 'This game already has two players.' : 'Join this game'}
          >Join</button>
        </li>
      ))}
    </ul>
  );
});

export default GameList;
            <br />
            <span style={{color: 'var(--foreground)', fontSize: '0.95em'}}>White: <b>{game.white_player}</b> {game.white_player && onlineUsers.includes(game.white_player) ? '🟢' : '⚪'} {game.black_player ? `vs ${game.black_player}` : ''} {game.black_player ? (onlineUsers.includes(game.black_player) ? '🟢' : '⚪') : ''}</span>
          </div>
          <button
            style={{background: 'var(--accent-2)', color: '#0d1117', minWidth: 100}}
            onClick={() => onJoin(game)}
            disabled={!!game.black_player}
            aria-label={game.black_player ? 'Game already joined' : 'Join this game'}
            title={game.black_player ? 'This game already has two players.' : 'Join this game'}
          >Join</button>
        </li>
      ))}
    </>
  );
}
