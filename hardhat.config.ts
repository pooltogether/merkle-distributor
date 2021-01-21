import '@nomiclabs/hardhat-waffle'
import 'hardhat-deploy'
import 'hardhat-deploy-ethers'

import { networks } from './hardhat.networks'

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.6.11',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: 'istanbul',
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    pool: {
      4: "0xdD1cba915Be9c7a1e60c4B99DADE1FC49F67f80D"
    }
  },
  networks,
}
