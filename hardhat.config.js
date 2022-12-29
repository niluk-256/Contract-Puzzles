// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("dotenv").config();

// const coinmarketcapkey = process.env.COINMARKETCAP;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  // gasReporter: {
  //   enabled: true,
  //   // outputFile: "gas-report.txt",
  //   currency: "USD",
  //   coinmarketcap: coinmarketcapkey,
  // },
};
