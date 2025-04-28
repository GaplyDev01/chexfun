import { ethers } from "ethers";

// ChessWagerEscrow ABI wired from zkSync artifact for robust integration
import ChessWagerEscrowArtifact from "../../../contracts/artifacts-zk/contracts/ChessWagerEscrow.sol/ChessWagerEscrow.json";

export const CHESS_WAGER_ESCROW_ABI = ChessWagerEscrowArtifact.abi;
export const CHESS_WAGER_ESCROW_ADDRESS = process.env.NEXT_PUBLIC_CHESS_WAGER_ESCROW_ADDRESS!;

export function getEscrowContract(signerOrProvider: ethers.Signer | ethers.Provider) {
  return new ethers.Contract(
    CHESS_WAGER_ESCROW_ADDRESS,
    CHESS_WAGER_ESCROW_ABI,
    signerOrProvider
  );
}
