# viem/chains support for AbstractWalletProvider

The AbstractWalletProvider requires a chain object such as `abstractTestnet` from `viem/chains`. Your project does NOT have `viem` installed, which is why importing from `viem/chains` fails and why a local object workaround does not work for all Abstract SDK internals.

## Solution
Install the official `viem` package to provide the required chain objects. This is the only supported way according to the Abstract SDK documentation and their official Next.js example.

## Install command
pnpm add viem

---
After installation, update your AbstractWalletProviderWrapper to:

```tsx
import { AbstractWalletProvider } from "@abstract-foundation/agw-react";
import { abstractTestnet } from "viem/chains";

export default function AbstractWalletProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AbstractWalletProvider chain={abstractTestnet}>
      {children}
    </AbstractWalletProvider>
  );
}
```

---
This will resolve all build errors related to missing chain support and allow the Abstract wallet to function correctly in all environments.
