require("hardhat-gas-reporter")
require('@nomiclabs/hardhat-etherscan')
require("solidity-coverage")
require("hardhat-deploy")
// @nomiclabs/hardhat-waffle used for for enabling testing smart contract with chai
require("@nomiclabs/hardhat-waffle")
const dotenv = require("dotenv")

dotenv.config()

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
     goerli: {
        url: GOERLI_RPC_URL,
        accounts: [PRIVATE_KEY],
        chainId: 5, 
        blockConfirmations: 6
     },
     localhost: {
        url: "http://127.0.0.1:8545/",
        chainId: 31337
     }
  },
  solidity: {
    compilers: [
      { version: "0.8.7" },
      { version: "0.6.5" }
    ]
  },
  namedAccounts: {
      deployer: {
        default: 0
      }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
};
