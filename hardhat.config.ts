import "@nomiclabs/hardhat-waffle"
import 'hardhat-deploy'
import 'hardhat-deploy-ethers'

import { networks } from './hardhat.networks'

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.6.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "istanbul"
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  namedAccounts: {
    deployer: {
      default: 0
    },
    pool: {
      default: "0x4CF566d201eF144e09d2f8ABE1cC0E451D79De53"
    }
  },
  networks
};