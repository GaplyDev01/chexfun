import "dotenv/config";
import { Wallet, Provider, ContractFactory } from "zksync-web3";
import * as fs from "fs";

async function main() {
  const provider = new Provider(process.env.ABSTRACT_RPC_URL || "https://api.testnet.abs.xyz");
  const privateKey = process.env.DEPLOYER_PRIVATE_KEY;
  if (!privateKey) throw new Error("Set DEPLOYER_PRIVATE_KEY in your environment");
  const wallet = new Wallet(privateKey, provider);

  // Load ABI and bytecode
  const artifact = JSON.parse(fs.readFileSync("artifacts-zk/contracts/ChessWagerEscrow.sol/ChessWagerEscrow.json", "utf-8"));
  console.log('Loaded artifact:', Object.keys(artifact));
  if (!artifact.abi || !artifact.bytecode) throw new Error('Artifact missing abi or bytecode');
  const factory = new ContractFactory(artifact.abi, artifact.bytecode, wallet);

  // Set constructor args
  const arbitrator = wallet.address;
  const initialOwner = wallet.address;

  const contract = await factory.deploy(arbitrator, initialOwner);
  await contract.deployed();
  console.log("ChessWagerEscrow deployed at:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
