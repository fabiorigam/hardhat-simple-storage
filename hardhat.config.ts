import { HardhatUserConfig, task } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"

task(
    "block-number",
    "Prints the current block number",
    async (_taskArgs, hre) => {
        await hre.ethers.provider
            .getBlockNumber()
            .then((blockNumber: number) => {
                console.log(`Current block number: ${blockNumber}`)
            })
    },
)

const config: HardhatUserConfig = {
    solidity: "0.8.18",
}

export default config
