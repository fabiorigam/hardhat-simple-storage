import { ethers, run, network } from "hardhat"

async function main() {
    // deploy the contract
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage",
    )
    console.log("Deploying contract...")
    const simpleStorage = await SimpleStorageFactory.deploy()
    const deploymentTransaction = await simpleStorage.deploymentTransaction()
    //console.log("Simple Storage deployed to:", simpleStorage.address)
    console.log(deploymentTransaction)
    
    // get the current value
    let currentValue = await simpleStorage.retrieve()
    console.log(`Current value: ${currentValue}`)

    // update the value
    console.log("Updating contract...")
    let transactionResponse = await simpleStorage.store(7)
    await transactionResponse.wait() // returns transaction receipt
    currentValue = await simpleStorage.retrieve()
    console.log(`Current value: ${currentValue}`)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
