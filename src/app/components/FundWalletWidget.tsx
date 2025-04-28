import { createThirdwebClient } from "thirdweb";
import { PayEmbed, darkTheme } from "thirdweb/react";
import { base } from "thirdweb/chains";

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "YOUR_CLIENT_ID_HERE",
});

export default function FundWalletWidget() {
  return (
    <PayEmbed
      client={client}
      payOptions={{
        metadata: {
          name: "Pawns.fun",
          image:
            "https://pawnsfun-aeb77o923-gaply-labs.vercel.app/chessboard?gameId=2eb2426a-bd05-425a-ac42-32495626f064",
        },
        mode: "fund_wallet",
        prefillBuy: {
          chain: base,
          amount: "0.01",
        },
      }}
      theme={darkTheme({
        colors: {
          accentText: "hsl(170, 99%, 49%)",
          separatorLine: "hsl(228, 2%, 33%)",
          borderColor: "hsl(36, 100%, 50%)",
          primaryButtonBg: "hsl(240, 1%, 42%)",
          primaryButtonText: "hsl(34, 100%, 50%)",
          secondaryButtonText: "hsl(187, 100%, 50%)",
          accentButtonBg: "hsl(28, 100%, 50%)",
          accentButtonText: "hsl(240, 1%, 53%)",
          connectedButtonBg: "hsl(192, 96%, 50%)",
          connectedButtonBgHover: "hsl(43, 80%, 71%)",
        },
      })}
    />
  );
}
