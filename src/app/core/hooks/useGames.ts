import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Game } from "../../core/types";

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
  }, [filters.status, filters.minRating, filters.maxRating, filters.wager, userId]);

  return { games, loading, error };
}
