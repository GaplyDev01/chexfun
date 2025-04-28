import { ethers } from "ethers";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import fs from "fs";
import express from "express";
import bridgeRoutes from "./bridgeRoutes";

function logToFile(msg: string) {
  const logPath = "backend.log";
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  try {
    fs.appendFileSync(logPath, line);
  } catch {}
}

dotenv.config();

const app = express();
app.use(express.json());
app.use(bridgeRoutes);

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
          logToFile(`GameCreated indexed: ${gameId}`);
        } else if (eventName === "GameJoined") {
          const [gameId, player2] = parsed.args;
          await supabase.from("games").update({ black_player: player2, status: "active" }).eq("id", gameId.toString());
          console.log(`[backend] GameJoined indexed: ${gameId}`);
          logToFile(`GameJoined indexed: ${gameId}`);
        } else if (eventName === "DisputeRaised") {
          const [gameId] = parsed.args;
          await supabase.from("games").update({ status: "dispute" }).eq("id", gameId.toString());
          console.log(`[backend] DisputeRaised indexed: ${gameId}`);
          logToFile(`DisputeRaised indexed: ${gameId}`);
        } else if (eventName === "GameFinished") {
          const [gameId] = parsed.args;
          await supabase.from("games").update({ status: "finished" }).eq("id", gameId.toString());
          console.log(`[backend] GameFinished indexed: ${gameId}`);
          logToFile(`GameFinished indexed: ${gameId}`);
        }
      }
    }
    lastBlock = currentBlock;
  } catch (err) {
    console.error("[backend] Polling error:", err);
    logToFile(`Polling error: ${err instanceof Error ? err.message : String(err)}`);
  }
}

console.log("[backend] ChessWagerEscrow log polling indexer started.");
setInterval(pollEvents, 10000);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`[bridge] Universal Bridge API proxy running on port ${PORT}`);
});
