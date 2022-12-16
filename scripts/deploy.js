const hre = require("hardhat");

async function main() {
  const TMVToken = await hre.ethers.getContractFactory("TMVToken");
  const TMVToken = await TMVToken.deploy(100000000, 50);

  await TMVToken.deployed();

  console.log("TMVToken deployed: ", TMVToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});