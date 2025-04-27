"use client";
import { useEffect, useState } from "react";
import { supabase } from "../core/supabaseClient";
import { useGlobalWalletSignerAccount } from "@abstract-foundation/agw-react";

type User = {
  id: string;
  wallet_address: string;
  rating: number;
  wins: number;
  losses: number;
  total_pnl: string;
  total_wagered: string;
  created_at: string;
};

export default function Profile() {
  const { address } = useGlobalWalletSignerAccount();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!address) return;
    async function fetchOrCreateUser() {
      const { data: user } = await supabase
        .from("users")
        .select("*")
        .eq("wallet_address", address)
        .single();
      if (!user) {
        const { data: newUser } = await supabase
          .from("users")
          .insert({ wallet_address: address })
          .select()
          .single();
        setUser(newUser);
      } else {
        setUser(user);
      }
      setLoading(false);
    }
    fetchOrCreateUser();
  }, [address]);

  if (loading) return <div>Loading profile...</div>;
  if (!user) return <div>No profile found.</div>;

  return (
    <section style={{ maxWidth: 480, margin: "2em auto", padding: 24 }}>
      <h2 style={{ fontWeight: 700, fontSize: 28, marginBottom: 16 }}>Profile</h2>
      <div style={{ fontSize: 18, marginBottom: 8 }}>Wallet: <b>{user.wallet_address}</b></div>
      <div style={{ fontSize: 18, marginBottom: 8 }}>Rating: <b>{user.rating}</b></div>
      <div style={{ fontSize: 18, marginBottom: 8 }}>Wins: <b>{user.wins}</b></div>
      <div style={{ fontSize: 18, marginBottom: 8 }}>Losses: <b>{user.losses}</b></div>
      <div style={{ fontSize: 18, marginBottom: 8 }}>Total Wagered: <b>{user.total_wagered}</b></div>
      <div style={{ fontSize: 18, marginBottom: 8 }}>Total PnL: <b>{user.total_pnl}</b></div>
    </section>
  );
}
