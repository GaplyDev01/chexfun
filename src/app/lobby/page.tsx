"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../core/supabaseClient";
import { v4 as uuidv4 } from "uuid";
import { useGlobalWalletSignerAccount } from "@abstract-foundation/agw-react";
import { usePresence } from "../core/hooks/usePresence";
import {
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  XIcon,
} from "react-share";
import { Analytics } from "@vercel/analytics/react";
import GameList from "../components/GameList";
import { useGames } from "../core/hooks/useGames";

import { User, Game } from "../core/types";

export default function Lobby() {
  const router = useRouter();
  const [wager, setWager] = useState<number>(0.01);
  const [minRating, setMinRating] = useState<number>(0);
  const [maxRating, setMaxRating] = useState<number>(3000);
  const [user, setUser] = useState<User | null>(null);

  const { address } = useGlobalWalletSignerAccount();
  const onlineUsers = usePresence(address ?? null);
  const { games, loading, error } = useGames({ status: "waiting", minRating, maxRating, wager }, user?.id);

  useEffect(() => {
    if (user) {
      setMinRating(Math.max(0, user.rating - 200));
      setMaxRating(user.rating + 200);
    }
  }, [user]);

  useEffect(() => {
    async function fetchUser() {
      if (!address) return;
      const { data: user } = await supabase
        .from("users")
        .select("id, wallet_address, rating, wins, losses, total_pnl, total_wagered, created_at, last_seen")
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
  }, [address]);

  return (
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh'}}>
      <div className="card" style={{width: 500, maxWidth: '100%', margin: '2em 0'}}>
        <h1 style={{fontSize: '2em', fontWeight: 700, marginBottom: '1em'}}>Game Lobby</h1>
        <div style={{marginBottom: 16}}>
          <label style={{marginRight: 8}}>Wager (ETH): </label>
          <input type="number" min={0.01} step={0.01} value={wager} onChange={e => setWager(Number(e.target.value))} style={{width: 80, marginRight: 16}} />
          <label style={{marginRight: 8}}>Min Rating: </label>
          <input type="number" min={0} max={maxRating} value={minRating} onChange={e => setMinRating(Number(e.target.value))} style={{width: 60, marginRight: 8}} />
          <label style={{marginRight: 8}}>Max Rating: </label>
          <input type="number" min={minRating} max={3000} value={maxRating} onChange={e => setMaxRating(Number(e.target.value))} style={{width: 60, marginRight: 16}} />
        </div>
        {/* Game creation and sharing UI is now modular and handled elsewhere */}
        {loading && <div style={{color: 'var(--accent)'}}>Loading...</div>}
        {error && <div className="error" style={{marginBottom: '1em'}}>{error}</div>}
        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
          <GameList
            games={games}
            onlineUsers={onlineUsers}
            onJoin={async (game) => {
              if (!game.black_player) {
                await supabase.from("games").update({ black_player: `guest_${Math.floor(Math.random()*10000)}`, status: "active" }).eq("id", game.id);
                router.push(`/chessboard?gameId=${game.id}`);
              }
            }}
          />
        </ul>
      </div>
      <Analytics />
    </section>
  );
}
