const { verify } = require("../utils/verify")
const { developmentChains, networkConfig } = require("../helper.hardhat.config");
const { network } = require("hardhat");


const main = async({ getNamedAccounts, deployments }) => {
        const { deploy, log } = deployments;
        const { deployer } = await getNamedAccounts();

        log("deploying...")
        const botak = await deploy("BotakToken", {
            from: deployer,
            args: [5000000],
            log: true
        })

        if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
            await verify(botak.address, [5000000])
        }

        log("deployed at", botak.address)
}

module.exports = main