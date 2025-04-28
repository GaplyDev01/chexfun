import { ethers } from "ethers";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import abi from "../contracts/artifacts-zk/contracts/ChessWagerEscrow.sol/ChessWagerEscrow.json" assert { type: "json" };

dotenv.config();

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const contractAddress = process.env.CONTRACT_ADDRESS!;
const contractInterface = new ethers.Interface(abi.abi);
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);

const eventNames = [
  "GameCreated",
  "GameJoined",
  "DisputeRaised",
  "GameFinished"
];

let lastBlock = 0;

async function pollEvents() {
  try {
    const currentBlock = await provider.getBlockNumber();
    if (lastBlock === 0) {
      lastBlock = currentBlock - 10; // start from a few blocks back
    }

    for (const eventName of eventNames) {
      const eventFragment = contractInterface.getEvent(eventName);
      if (!eventFragment) continue;
      const topic = ethers.id(eventFragment.format());
      const logs = await provider.getLogs({
        address: contractAddress,
        fromBlock: lastBlock + 1,
        toBlock: currentBlock,
        topics: [topic]
      });
      for (const log of logs) {
        const parsed = contractInterface.parseLog(log);
        if (!parsed) continue;
        if (eventName === "GameCreated") {
          const [gameId, player1, player2, wager] = parsed.args;
          await supabase.from("games").upsert([
            {
              id: gameId.toString(),
              white_player: player1,
              black_player: player2,
              wager: Number(ethers.formatEther(wager)),
              status: "waiting"
            }
          ], { onConflict: "id" });
          console.log(`[backend] GameCreated indexed: ${gameId}`);
        } else if (eventName === "GameJoined") {
          const [gameId, player2] = parsed.args;
          await supabase.from("games").update({ black_player: player2, status: "active" }).eq("id", gameId.toString());
          console.log(`[backend] GameJoined indexed: ${gameId}`);
        } else if (eventName === "DisputeRaised") {
          const [gameId] = parsed.args;
          await supabase.from("games").update({ status: "dispute" }).eq("id", gameId.toString());
          console.log(`[backend] DisputeRaised indexed: ${gameId}`);
        } else if (eventName === "GameFinished") {
          const [gameId] = parsed.args;
          await supabase.from("games").update({ status: "finished" }).eq("id", gameId.toString());
          console.log(`[backend] GameFinished indexed: ${gameId}`);
        }
      }
    }
    lastBlock = currentBlock;
  } catch (err) {
    console.error("[backend] Polling error:", err);
  }
}

console.log("[backend] ChessWagerEscrow log polling indexer started.");
setInterval(pollEvents, 10000);
