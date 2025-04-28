"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../core/supabaseClient";
import { v4 as uuidv4 } from "uuid";
import { getEscrowContract } from "../core/escrow";
import { ethers } from "ethers";
import { useGlobalWalletSignerAccount } from "@abstract-foundation/agw-react";
import { usePresence } from "../core/hooks/usePresence";

import { Analytics } from "@vercel/analytics/react";
import ThemeToggle from "../components/ThemeToggle";
import GameList from "../components/GameList";
import ErrorBanner from "../components/ErrorBanner";
import LoadingSpinner from "../components/LoadingSpinner";
import BotPlayButton from "../components/BotPlayButton";
import { useGames } from "../core/hooks/useGames";

import { User } from "../core/types";

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
      const { data, error } = await supabase
        .from("users")
        .select("id, wallet_address, rating, wins, losses, total_pnl, total_wagered, created_at, last_seen")
        .eq("wallet_address", address)
        .single();
      if (error) {
        console.error(error);
        return;
      }
      if (!data) {
        // Create user if not exists
        const { data: newUser } = await supabase
          .from("users")
          .insert({ wallet_address: address })
          .select()
          .single();
        if (newUser) {
          setUser(newUser);
        }
      } else {
        setUser(data);
      }
    }
    fetchUser();
  }, [address]);

  async function createGame(): Promise<void> {
    if (!user) return;
    const id = uuidv4();
    // On-chain escrow contract call
    if (window.ethereum && address) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = getEscrowContract(signer);
        // Prompt for opponent address (for demo, user must enter)
        const opponent = window.prompt('Enter opponent wallet address for escrow game:');
        if (!opponent) return;
        const wagerWei = ethers.parseEther(wager.toString());
        const tx = await contract.createGame(opponent, { value: wagerWei });
        const receipt = await tx.wait();
        // Find GameCreated event
        const event = receipt.logs?.find((log: any) => log.eventName === "GameCreated");
        const gameId = event?.args?.gameId?.toString() ?? id;
        alert('On-chain game created! Game ID: ' + gameId);
        // Insert into Supabase for off-chain tracking
        await supabase.from("games").insert([
          {
            id: gameId,
            white_player: user.wallet_address,
            white_player_id: user.id,
            black_player: opponent,
            black_player_id: null,
            fen: "startpos",
            status: "waiting",
            wager: wager,
            white_player_rating: user.rating
          }
        ]);
        router.push(`/chessboard?gameId=${gameId}`);
        return;
      } catch (err) {
        alert('Failed to create on-chain game: ' + (err as Error).message);
      }
    }
    // Fallback: off-chain only
    await supabase.from("games").insert([
      {
        id,
        white_player: user.wallet_address,
        white_player_id: user.id,
        black_player: null,
        black_player_id: null,
        fen: "startpos",
        status: "waiting",
        wager: wager,
        white_player_rating: user.rating
      }
    ]);
    router.push(`/chessboard?gameId=${id}`);
  }

  // Keyboard shortcuts: N = new game, J = join
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.target && (e.target as HTMLElement).tagName === 'INPUT') return;
      if (e.key === 'n' || e.key === 'N') {
        createGame();
      } else if ((e.key === 'j' || e.key === 'J') && games.length) {
        const first = games.find(g => !g.black_player);
        if (first) {
          router.push(`/chessboard?gameId=${first.id}`);
        }
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [games, user]);

  return (
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh'}}>
      <div className="card" style={{width: 500, maxWidth: '100%', margin: '2em 0'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <h1 style={{fontSize: '2em', fontWeight: 700, marginBottom: '1em'}}>Game Lobby</h1>
          <ThemeToggle />
        </div>
        <div style={{marginBottom: 16}}>
          <label style={{marginRight: 8}}>Wager (ETH): </label>
          <input type="number" min={0.01} step={0.01} value={wager} onChange={e => setWager(Number(e.target.value))} style={{width: 80, marginRight: 16}} />
          <label style={{marginRight: 8}}>Min Rating: </label>
          <input type="number" min={0} max={maxRating} value={minRating} onChange={e => setMinRating(Number(e.target.value))} style={{width: 60, marginRight: 8}} />
          <label style={{marginRight: 8}}>Max Rating: </label>
          <input type="number" min={minRating} max={3000} value={maxRating} onChange={e => setMaxRating(Number(e.target.value))} style={{width: 60, marginRight: 16}} />
        </div>
        {/* Game creation and sharing UI is now modular and handled elsewhere */}
        {loading && <LoadingSpinner label="Loading games..." />}
        <ErrorBanner message={error} />
        <BotPlayButton onPlay={async () => {
          if (!user) return;
          const id = uuidv4();
          await supabase.from("games").insert([
            {
              id,
              white_player: user.wallet_address,
              white_player_id: user.id,
              black_player: "BOT",
              black_player_id: "bot",
              fen: "startpos",
              status: "active",
              wager: 0,
              white_player_rating: user.rating
            }
          ]);
          router.push(`/chessboard?gameId=${id}`);
        }} />
        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
          <GameList
            games={games}
            onlineUsers={onlineUsers}
            loading={loading}
            onCreateGame={createGame}
            onJoin={async (game) => {
              if (!address) {
                alert('Please connect your wallet before joining a game.');
                return;
              }
              if (game.white_player === address) {
                alert('You cannot join your own game.');
                return;
              }
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
