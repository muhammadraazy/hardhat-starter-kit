
const { ethers } = require("hardhat");

async function main() {
    // const contract = await ethers.getContractFactory("Practice");
    const myToken = await ethers.getContractFactory("MyToken");
    // const practiceContract = await contract.deploy();
    const myTokenContract = await myToken.deploy();

    console.log('contract deployed')
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
