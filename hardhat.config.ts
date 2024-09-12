import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config()
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    "kiichain": {
      chainId: 123454321,
      url: "https://a.sentry.testnet.kiivalidator.com:8645/",
      accounts: [`0x${process.env.SECRET_KEY}`]
    }
  }
};

export default config;
