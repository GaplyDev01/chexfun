import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export function usePresence(address: string | null) {
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

  useEffect(() => {
    if (!address) return;
    let interval: NodeJS.Timeout | undefined = undefined;
    let onlineInterval: NodeJS.Timeout | undefined = undefined;
    async function updatePresence() {
      await supabase.from('users').update({ last_seen: new Date().toISOString() }).eq('wallet_address', address);
    }
    async function fetchOnlineUsers() {
      const { data } = await supabase.from('users').select('wallet_address,last_seen');
      const now = Date.now();
      const online = (data || []).filter((u: { last_seen: string }) => u.last_seen && (now - new Date(u.last_seen).getTime()) < 2 * 60 * 1000).map((u: { wallet_address: string }) => u.wallet_address);
      setOnlineUsers(online);
    }
    updatePresence();
    fetchOnlineUsers();
    interval = setInterval(updatePresence, 30000);
    onlineInterval = setInterval(fetchOnlineUsers, 30000);
    return () => {
      clearInterval(interval);
      clearInterval(onlineInterval);
    };
  }, [address]);

  return onlineUsers;
}
