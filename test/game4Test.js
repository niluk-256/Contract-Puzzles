const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");
const { ethers } = require("hardhat");

describe("Game4", function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory("Game4");
    const game = await Game.deploy();
    const [signer, signer2] = await ethers.getSigners();

    return { game, signer, signer2 };
  }
  it("should be a winner", async function () {
    const { game, signer, signer2 } = await loadFixture(
      deployContractAndSetVariables
    );

    // nested mappings are rough :}
    await game.connect(signer).write(signer2.address);

    await game.connect(signer2).win(signer.address);

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
