import BalanceTree from '../src/balance-tree'
const chalk = require('chalk')
const distribution = require('../merkle_tree.json')

// @ts-ignore
module.exports = async (hardhat) => {
  console.log('Deploying MerkleDistributor')
  const { getNamedAccounts, deployments, ethers } = hardhat
  const { deploy } = deployments
  const { deployer, pool } = await getNamedAccounts()

  console.log('deployer is ', deployer)

  const sortedAddresses = Object.keys(distribution.claims).sort()
  const tree = new BalanceTree(
    sortedAddresses.map((address) => ({ account: address, amount: distribution.claims[address].amount }))
  )
  console.log("POOL token at : ", pool)
  const distributorResult = await deploy('MerkleDistributor', {
    args: [pool, tree.getHexRoot()],
    from: deployer,
    skipIfAlreadyDeployed: false,
  })

  console.log(chalk.green(`Deployed MerkleDistributor: ${distributorResult.address}`))
}
