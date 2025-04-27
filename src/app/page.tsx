import Link from "next/link";

export default function Home() {
  return (
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh'}}>
      <div className="card" style={{maxWidth: 600, textAlign: 'center'}}>
        <h1 style={{fontSize: '2.5em', marginBottom: '0.5em'}}>Welcome to Chex.fun</h1>
        <p style={{fontSize: '1.3em', color: 'var(--foreground)', marginBottom: '1.5em'}}>
          The next-generation Web3 chess platform. Play, wager, and win in a secure, decentralized environment. Challenge friends, join public games, or create your own lobby. Powered by Abstract and Supabase.
        </p>
        <Link href="/lobby" style={{textDecoration: 'none'}}>
          <button style={{fontSize: '1.2em', padding: '1em 2em'}}>Enter Lobby</button>
        </Link>
      </div>
    </section>
  );
}
