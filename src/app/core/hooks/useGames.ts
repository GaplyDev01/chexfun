import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Game } from "../../core/types";
import { ethers } from "ethers";
import { CHESS_WAGER_ESCROW_ABI, CHESS_WAGER_ESCROW_ADDRESS } from "../escrow";

export function useGames(filters: { status?: string; minRating?: number; maxRating?: number; wager?: number }, userId?: string) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let query = supabase.from("games").select("*");
    if (filters.status) query = query.eq("status", filters.status);
    if (filters.wager) {
      query = query.gte("wager", filters.wager * 0.8).lte("wager", filters.wager * 1.2);
    }
    query.then((res: { data: Game[] | null; error: { message: string } | null }) => {
      const { data, error } = res;
      if (error) setError(error.message);
      else {
        let filtered = (data || []) as Game[];
        if (filters.minRating !== undefined && filters.maxRating !== undefined) {
          filtered = filtered.filter((g: Game) =>
            (g.white_player_rating === null || (g.white_player_rating >= filters.minRating! && g.white_player_rating <= filters.maxRating!))
          );
        }
        setGames(filtered);
      }
      setLoading(false);
    });

    // --- Ethers.js event listeners for live updates ---
    const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_ABSTRACT_RPC_URL || "https://api.testnet.abs.xyz");
    const contract = new ethers.Contract(
      CHESS_WAGER_ESCROW_ADDRESS,
      CHESS_WAGER_ESCROW_ABI,
      provider
    );

    function handleGameCreated(gameId: ethers.BigNumberish, player1: string, player2: string, wager: ethers.BigNumberish) {
      setGames(prev => [
        ...prev,
        {
          id: gameId.toString(),
          white_player: player1,
          black_player: player2,
          wager: Number(ethers.formatEther(wager)),
          status: "waiting",
          white_player_rating: null
        } as Game
      ]);
    }

    function handleGameFinished(gameId: ethers.BigNumberish) {
      setGames(prev => prev.map(g => g.id === gameId.toString() ? { ...g, status: "finished" } : g));
    }

    // Error-resilient event registration helper
    function resilientOn(event: string, handler: (...args: any[]) => void) {
      let errorCount = 0;
      const wrapped = (...args: any[]) => {
        try {
          handler(...args);
        } catch (err: any) {
          errorCount++;
          // Detect filter error or ethers.js UNKNOWN_ERROR and re-register
          const message = err?.message || String(err);
          if (message.includes("Filter not found") || message.includes("UNKNOWN_ERROR")) {
            if (errorCount < 3) {
              console.warn(`[eth_getFilterChanges] Filter not found or unknown error for event '${event}', re-registering listener`);
              contract.off(event, wrapped);
              contract.on(event, wrapped);
            } else {
              console.error(`[eth_getFilterChanges] Suppressing repeated filter errors for event '${event}' after 3 attempts.`);
            }
          } else {
            console.error(`[eth_getFilterChanges] Unhandled error in event '${event}':`, err);
            throw err;
          }
        }
      };
      contract.on(event, wrapped);
      return () => contract.off(event, wrapped);
    }

    // Register listeners with error handling
    const cleanups = [
      resilientOn("GameCreated", handleGameCreated),
      resilientOn("GameFinished", handleGameFinished),
      resilientOn("GameJoined", handleGameJoined),
      resilientOn("DisputeRaised", handleDisputeRaised),
    ];

    async function handleGameJoined(gameId: ethers.BigNumberish, player2: string) {
      setGames(prev => prev.map(g => g.id === gameId.toString() ? { ...g, black_player: player2, status: "active" } : g));
      // Persist to Supabase
      await supabase.from("games").update({ black_player: player2, status: "active" }).eq("id", gameId.toString());
    }

    async function handleDisputeRaised(gameId: ethers.BigNumberish) {
      setGames(prev => prev.map(g => g.id === gameId.toString() ? { ...g, status: "dispute" } : g));
      // Persist to Supabase
      await supabase.from("games").update({ status: "dispute" }).eq("id", gameId.toString());
    }

    return () => {
      cleanups.forEach(fn => fn());
    };
  }, [filters.status, filters.minRating, filters.maxRating, filters.wager, userId]);

  return { games, loading, error };
}
