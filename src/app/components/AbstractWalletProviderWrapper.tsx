"use client";
import { ReactNode } from "react";
import { AbstractWalletProvider } from "@abstract-foundation/agw-react";
import { abstractTestnet } from "viem/chains";

export default function AbstractWalletProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <AbstractWalletProvider chain={abstractTestnet}>
      {children}
    </AbstractWalletProvider>
  );
}
