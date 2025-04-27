"use client";
import { useLoginWithAbstract, useGlobalWalletSignerAccount } from "@abstract-foundation/agw-react";

export default function WalletConnectButton() {
  const { login, logout } = useLoginWithAbstract();
  const { address, status } = useGlobalWalletSignerAccount();

  if (status === "connecting" || status === "reconnecting") {
    return <button style={{background: 'var(--accent-2)', color: '#0d1117'}} disabled>Connecting...</button>;
  }

  if (status === "connected" && address) {
    return (
      <button style={{background: 'var(--success)', color: '#0d1117'}} onClick={logout}>
        {address.slice(0, 6)}...{address.slice(-4)} (Disconnect)
      </button>
    );
  }

  return (
    <button style={{background: 'var(--accent-2)', color: '#0d1117'}} onClick={login}>
      Connect Wallet
    </button>
  );
}
