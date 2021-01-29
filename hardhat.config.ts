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
      4: "0xEae2De7Ba52298a535C59D37BAe409cCeCaDE234"
    }
  },
  networks,
}
