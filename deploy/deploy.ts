import BalanceTree from '../src/balance-tree'
const chalk = require('chalk')
const distribution = require('../merkle_root.json')

// @ts-ignore
module.exports = async (hardhat) => {
  console.log("Deploying MerkleDistributor")
  const { getNamedAccounts, deployments, ethers } = hardhat
  const { deploy } = deployments
  const { deployer, pool } = await getNamedAccounts()

   const sortedAddresses = Object.keys(distribution.claims).sort()
  const tree = new BalanceTree(
    sortedAddresses.map((address) => ({ account: address, amount: distribution.claims[address].amount }))
  )

  // @ts-ignore
  // const claims = sortedAddresses.reduce((map, address, index) => {
  //   // @ts-ignore
  //   map[address] = {
  //     index,
  //     amount: distribution[address],
  //     // @ts-ignore
  //     proof: tree.getProof(index, address, distribution[address]),
  //   }
  //   return map
  // }, {})

  // console.log(JSON.stringify(claims))

  const distributorResult = await deploy('MerkleDistributor', {
    args: [pool, tree.getHexRoot()],
    from: deployer,
    skipIfAlreadyDeployed: false,
  })

  console.log(chalk.green(`Deployed MerkleDistributor: ${distributorResult.address}`))
}
