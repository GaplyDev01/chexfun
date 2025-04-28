import "@matterlabs/hardhat-zksync";
import { HardhatUserConfig } from "hardhat/config";
const config: HardhatUserConfig = {
  defaultNetwork: "abstractTestnet",
  networks: {
    abstractTestnet: {
      url: "https://api.testnet.abs.xyz",
      zksync: true,
      chainId: 11124
    }
  },
  solidity: { version: "0.8.20" },
  paths: {
    sources: "./contracts", 
    artifacts: "./artifacts"
  }
};
export default config;