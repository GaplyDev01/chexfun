import { ethers } from "ethers";

// ChessWagerEscrow ABI (minimal, only required functions)
export const CHESS_WAGER_ESCROW_ABI = [
  "function createGame(address _opponent) payable returns (uint256)",
  "function joinGame(uint256 gameId) payable",
  "function reportResult(uint256 gameId, uint8 _result)",
  "function raiseDispute(uint256 gameId)",
  "function resolveDispute(uint256 gameId, uint8 _result)",
  "function claimTimeout(uint256 gameId)",
  "function refundUnjoinedGame(uint256 gameId)",
  "event GameCreated(uint256 indexed gameId, address indexed player1, address indexed player2, uint256 wager)",
  "event GameJoined(uint256 indexed gameId, address indexed player2)",
  "event GameFinished(uint256 indexed gameId, uint8 result, address winner)",
  "event DisputeRaised(uint256 indexed gameId, address indexed raiser)",
  "event DisputeResolved(uint256 indexed gameId, uint8 result, address winner)",
  "event GameRefunded(uint256 indexed gameId, address indexed player1)"
];

// Replace with deployed contract address
export const CHESS_WAGER_ESCROW_ADDRESS = process.env.NEXT_PUBLIC_CHESS_WAGER_ESCROW_ADDRESS!;

export function getEscrowContract(signerOrProvider: ethers.Signer | ethers.Provider) {
  return new ethers.Contract(
    CHESS_WAGER_ESCROW_ADDRESS,
    CHESS_WAGER_ESCROW_ABI,
    signerOrProvider
  );
}
