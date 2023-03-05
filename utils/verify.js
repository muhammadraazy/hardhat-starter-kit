const { run } = require("hardhat")

const verify = async(contractAddress, args) => {
     console.log("verifying...")
     try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args
        })
     } catch (error) {
        console.log(error.message)
     }
}

module.exports = { verify }