"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../core/supabaseClient";
import { v4 as uuidv4 } from "uuid";
import { useGlobalWalletSignerAccount } from "@abstract-foundation/agw-react";

interface Game {
  id: string;
  white_player: string | null;
  white_player_id: string | null;
  black_player: string | null;
  black_player_id: string | null;
  fen: string;
  status: string;
  wager: number;
  white_player_rating: number | null;
}

export default function Lobby() {
  const router = useRouter();
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [createdGameId, setCreatedGameId] = useState<string | null>(null);
  const [wager, setWager] = useState<number>(0.01);
  const [finding, setFinding] = useState(false);
  const [user, setUser] = useState<null | { id: string; wallet_address: string; rating: number }>(null);
  const { address } = useGlobalWalletSignerAccount();

  useEffect(() => {
    // Initial fetch
    supabase
      .from("games")
      .select("*")
      .eq("status", "waiting")
      .then(({ data, error }) => {
        if (error) setError(error.message);
        else setGames(data || []);
        setLoading(false);
      });
    // Fetch user profile
    async function fetchUser() {
      if (!address) return;
      const { data: user } = await supabase
        .from("users")
        .select("*")
        .eq("wallet_address", address)
        .single();
      if (!user) {
        // Create user if not exists
        const { data: newUser } = await supabase
          .from("users")
          .insert({ wallet_address: address })
          .select()
          .single();
        setUser(newUser);
      } else {
        setUser(user);
      }
    }
    fetchUser();
    // Real-time subscription
    function isGame(obj: unknown): obj is Game {
      if (typeof obj !== 'object' || obj === null) return false;
      const o = obj as Record<string, unknown>;
      return (
        typeof o.id === 'string' &&
        (typeof o.white_player === 'string' || o.white_player === null) &&
        (typeof o.black_player === 'string' || o.black_player === null) &&
        (typeof o.white_player_id === 'string' || o.white_player_id === null) &&
        (typeof o.black_player_id === 'string' || o.black_player_id === null) &&
        typeof o.fen === 'string' &&
        typeof o.status === 'string' &&
        typeof o.wager === 'number' &&
        (typeof o.white_player_rating === 'number' || o.white_player_rating === null)
      );
    }
    const sub = supabase
      .channel('public:games')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'games' }, payload => {
        if (payload.eventType === 'INSERT' && isGame(payload.new) && payload.new.status === 'waiting') {
          const newGame: Game = payload.new;
          setGames(prev => prev.some(g => g.id === newGame.id) ? prev : [...prev, newGame]);
        }
        if (payload.eventType === 'UPDATE' && isGame(payload.new)) {
          const updatedGame: Game = payload.new;
          setGames(prev => prev.map(g => g.id === updatedGame.id ? updatedGame : g));
        }
        if (payload.eventType === 'DELETE' && isGame(payload.old)) {
          const deletedGame: Game = payload.old;
          setGames(prev => prev.filter(g => g.id !== deletedGame.id));
        }
      })
      .subscribe();
    return () => { supabase.removeChannel(sub); };
  }, [address]);

  async function createGame() {
    setError(null);
    setCreating(true);
    if (!user) { setError("User not loaded"); setCreating(false); return; }
    const id = uuidv4();
    try {
      const { error } = await supabase.from("games").insert([
        {
          id,
          white_player: null,
          white_player_id: null,
          black_player: null,
          black_player_id: null,
          fen: "startpos",
          status: "waiting",
          wager: wager,
          white_player_rating: null
        }
      ]);
      if (error) {
        setError("Supabase error: " + error.message);
        setCreating(false);
        return;
      }
      setCreatedGameId(id);
      try {
        await router.push(`/chessboard?gameId=${id}`);
      } catch (navError) {
        setError("Navigation error: " + (navError instanceof Error ? navError.message : "Unknown error"));
        setCreating(false);
      }
    } catch (e) {
      setError("Unexpected error: " + (e instanceof Error ? e.message : "Unknown error"));
      setCreating(false);
    }
  }

  async function findMatch() {
    setFinding(true);
    setError(null);
    if (!user) { setError("User not loaded"); setFinding(false); return; }
    // Find open game within 200 ELO and similar wager
    const { data: openGames } = await supabase
      .from("games")
      .select("*")
      .eq("status", "waiting")
      .gte("wager", wager * 0.8)
      .lte("wager", wager * 1.2)
      .filter("white_player_id", "neq", user.id);
    let matched = null;
    if (openGames && openGames.length > 0) {
      matched = openGames.find(g => user.rating >= (g.white_player_rating - 200) && user.rating <= (g.white_player_rating + 200));
    }
    if (matched) {
      // Join this game
      await supabase.from("games").update({ black_player: user.wallet_address, black_player_id: user.id, status: "active" }).eq("id", matched.id);
      router.push(`/chessboard?gameId=${matched.id}`);
      setFinding(false);
      return;
    }
    // No match, create new
    await createGame();
    setFinding(false);
  }

  return (
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh'}}>
      <div className="card" style={{width: 500, maxWidth: '100%', margin: '2em 0'}}>
        <h1 style={{fontSize: '2em', fontWeight: 700, marginBottom: '1em'}}>Game Lobby</h1>
        <div style={{marginBottom: 16}}>
          <label style={{marginRight: 8}}>Wager (ETH): </label>
          <input type="number" min={0.01} step={0.01} value={wager} onChange={e => setWager(Number(e.target.value))} style={{width: 80, marginRight: 16}} />
          <button onClick={createGame} disabled={creating} style={{marginRight: 8, opacity: creating ? 0.6 : 1, cursor: creating ? 'not-allowed' : 'pointer'}}>
            {creating ? 'Creating...' : '+ Create New Game'}
          </button>
          <button onClick={findMatch} disabled={finding || creating} style={{opacity: finding ? 0.6 : 1, cursor: finding ? 'not-allowed' : 'pointer'}}>
            {finding ? 'Finding...' : 'Find Match'}
          </button>
        </div>
        {createdGameId && !creating && !error && (
          <div style={{color: 'var(--accent-2)', marginBottom: '1em'}}>Game created! If you are not redirected, <a href={`/chessboard?gameId=${createdGameId}`}>click here</a>.</div>
        )}
        {loading && <div style={{color: 'var(--accent)'}}>Loading...</div>}
        {error && <div className="error" style={{marginBottom: '1em'}}>{error}</div>}
        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
          {games.length === 0 && !loading && (
            <li style={{color: 'var(--foreground)', textAlign: 'center', padding: '2em 0'}}>No games available. Create one to get started!</li>
          )}
          {games.map(game => (
            <li key={game.id} className="card" style={{marginBottom: '1.5em', padding: '1em 1.5em', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--card-bg)', border: '1px solid var(--accent)', boxShadow: '0 0 12px #4f8cff33'}}>
              <div>
                <span style={{fontWeight: 600, color: 'var(--accent-2)'}}>Game ID:</span> <span style={{fontFamily: 'var(--font-mono)', fontSize: '1.1em'}}>{game.id.slice(0, 8)}...</span>
                <br />
                <span style={{color: 'var(--foreground)', fontSize: '0.95em'}}>White: <b>{game.white_player}</b> {game.black_player ? `vs ${game.black_player}` : ''}</span>
              </div>
              <button
                style={{background: 'var(--accent-2)', color: '#0d1117', minWidth: 100}}
                onClick={async () => {
                  if (!game.black_player) {
                    await supabase.from("games").update({ black_player: `guest_${Math.floor(Math.random()*10000)}`, status: "active" }).eq("id", game.id);
                    router.push(`/chessboard?gameId=${game.id}`);
                  }
                }}
              >Join</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
