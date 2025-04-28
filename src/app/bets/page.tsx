"use client";
import { useEffect, useState } from "react";
import { supabase } from "../core/supabaseClient";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorBanner from "../components/ErrorBanner";

interface BetGame {
  id: string;
  white_player: string;
  black_player: string;
  wager: number;
  status: string;
  winner?: string;
}

export default function BetsPage() {
  const [bets, setBets] = useState<BetGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBets() {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from("games")
        .select("id,white_player,black_player,wager,status,winner")
        .order("wager", { ascending: false });
      if (error) {
        setError("Failed to load bets.");
        setLoading(false);
        return;
      }
      setBets(data || []);
      setLoading(false);
    }
    fetchBets();
  }, []);

  return (
    <section style={{ maxWidth: 700, margin: "2em auto", padding: 24 }}>
      <h1 style={{ fontSize: "2em", fontWeight: 700, marginBottom: 24 }}>Game Bets</h1>
      {loading && <LoadingSpinner label="Loading bets..." />}
      {error && <ErrorBanner message={error} />}
      <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--card-bg)" }}>
        <thead>
          <tr style={{ background: "var(--accent)", color: "#fff" }}>
            <th style={{ padding: 8, textAlign: "left" }}>Game ID</th>
            <th style={{ padding: 8 }}>White</th>
            <th style={{ padding: 8 }}>Black</th>
            <th style={{ padding: 8 }}>Wager (ETH)</th>
            <th style={{ padding: 8 }}>Status</th>
            <th style={{ padding: 8 }}>Winner</th>
          </tr>
        </thead>
        <tbody>
          {bets.map((bet) => (
            <tr key={bet.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: 8, fontFamily: 'var(--font-mono)' }}>{bet.id.slice(0, 8)}...</td>
              <td style={{ padding: 8 }}>{bet.white_player}</td>
              <td style={{ padding: 8 }}>{bet.black_player}</td>
              <td style={{ padding: 8 }}>{bet.wager}</td>
              <td style={{ padding: 8 }}>{bet.status}</td>
              <td style={{ padding: 8 }}>{bet.winner || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!loading && bets.length === 0 && (
        <div style={{ color: 'var(--foreground)', textAlign: 'center', marginTop: 32 }}>
          No bets found.
        </div>
      )}
    </section>
  );
}
