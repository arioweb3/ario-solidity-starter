const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
  async function deployContract() {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const storage = await SimpleStorage.deploy();

    return storage;
  }

  it("should start with value 0", async function () {
    const storage = await deployContract();

    expect(await storage.getValue()).to.equal(0n);
  });

  it("should store and return 42", async function () {
    const storage = await deployContract();

    await storage.setValue(42);

    expect(await storage.getValue()).to.equal(42n);
  });

  it("should update the stored value", async function () {
    const storage = await deployContract();

    await storage.setValue(42);
    await storage.setValue(100);

    expect(await storage.getValue()).to.equal(100n);
  });
});
