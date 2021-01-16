import BalanceTree from '../src/balance-tree'
const chalk = require('chalk')
const rinkebyDistribution = require('../rinkeby.distribution.json')

// @ts-ignore
module.exports = async (hardhat) => {
  const { getNamedAccounts, deployments, ethers } = hardhat
  const { deploy } = deployments
  const { deployer, pool } = await getNamedAccounts()

  const sortedAddresses = Object.keys(rinkebyDistribution).sort()
  const tree = new BalanceTree(
    sortedAddresses.map((address) => ({ account: address, amount: rinkebyDistribution[address] }))
  )

  // @ts-ignore
  const claims = sortedAddresses.reduce((map, address, index) => {
    // @ts-ignore
    map[address] = {
      index,
      amount: rinkebyDistribution[address],
      // @ts-ignore
      proof: tree.getProof(index, address, rinkebyDistribution[address])
    }
    return map
  }, {})

  console.log(JSON.stringify(claims))

  const distributorResult = await deploy('MerkleDistributor', {
    args: [
      pool,
      tree.getHexRoot()  
    ],
    from: deployer,
    skipIfAlreadyDeployed: true
  })

  console.log(chalk.green(`Deployed MerkleDistributor: ${distributorResult.address}`))
};
