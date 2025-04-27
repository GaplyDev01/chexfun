import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pawns.fun | Challenge Chess",
  description: "You up for a chellenge or are yo a pawn? Put your skills to the test, new on Abstract. Pawns.fun",
  openGraph: {
    title: "Pawns.fun | Challenge Chess",
    description: "You up for a chellenge or are yo a pawn? Put your skills to the test, new on Abstract. Pawns.fun",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "You up for a chellenge or are yo a pawn? Put your skills to the test, new on Abstract. Pawns.fun",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawns.fun | Challenge Chess",
    description: "You up for a chellenge or are yo a pawn? Put your skills to the test, new on Abstract. Pawns.fun",
    images: ["/og-image.png"],
  },
};

import AbstractWalletProviderWrapper from "./components/AbstractWalletProviderWrapper";
import Link from "next/link";
import WalletConnectButton from "./components/WalletConnectButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0d1117" />
        <meta property="og:title" content="Pawns.fun | Challenge Chess" />
        <meta property="og:description" content="You up for a chellenge or are yo a pawn? Put your skills to the test, new on Abstract. Pawns.fun" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pawns.fun | Challenge Chess" />
        <meta name="twitter:description" content="You up for a chellenge or are yo a pawn? Put your skills to the test, new on Abstract. Pawns.fun" />
        <meta name="twitter:image" content="/og-image.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AbstractWalletProviderWrapper>
          <header style={{
            background: 'linear-gradient(90deg, #0d1117 70%, #4f8cff 100%)',
            borderBottom: '1px solid #23272f',
            padding: '1.5em 2em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '64px',
          }}>
            <div style={{fontWeight: 700, fontSize: '1.5em', color: 'var(--accent)'}}>
              <span role="img" aria-label="chess">♟️</span> Chex.fun
            </div>
            <nav style={{display: 'flex', gap: '2em'}}>
              <Link href="/" style={{color: 'var(--foreground)', textDecoration: 'none', fontWeight: 500}}>Lobby</Link>
              <Link href="/chessboard" style={{color: 'var(--foreground)', textDecoration: 'none', fontWeight: 500}}>Play</Link>
              <Link href="/bets" style={{color: 'var(--foreground)', textDecoration: 'none', fontWeight: 500}}>Bets</Link>
            </nav>
            <div>
              {/* Abstract Global Wallet Connect Button */}
              <WalletConnectButton />
            </div>
          </header>
          <main style={{maxWidth: 1200, margin: '2em auto', padding: '0 2em'}}>
            {children}
          </main>
        </AbstractWalletProviderWrapper>
      </body>
    </html>
  );
}
