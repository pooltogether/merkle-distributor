import '@nomiclabs/hardhat-waffle'
import 'hardhat-deploy'
import 'hardhat-deploy-ethers'
import '@nomiclabs/hardhat-etherscan'


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
      default: "0x77511319482F9dcc77C6eba1aF964423f965f5f0",
      4: '0x8C219D7CFC4C3646b09b644d4eAa103E23f2eE30',
    },
  },
  networks,
}
