/**
 * @description untuk memangill fungsi get || getter di smart contracts (web3consortium)
 */

const hre = require("hardhat");

async function main() {
  const Web3Consortium = await hre.ethers.getContractFactory("Web3Consortium");
  const web3Consortium = await Web3Consortium.attach(process.env.OWNER);

  const owner = await web3Consortium.getOwner();
  console.log({ owner });
  /**
   * @output 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
   * @description secara default didapatkan dari account ke-0 (bisa dilihat di account.txt)
   */

  const textRaw = await web3Consortium.textRaw();
  console.log(`text = ${textRaw}`);
  /**
   * @description jalankan dulu file set.js lalu jalankan file get.js || file ini
   *
   * @before runnning set.js
   * @output text =
   *
   * @after running set.js
   * @output text = 'text apa saja' || 'Sabiq Muhammad'
   */

  const todos = await web3Consortium.getTodos();
  console.log({ todos });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
