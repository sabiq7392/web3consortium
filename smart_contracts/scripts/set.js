/**
 * @description untuk memangill fungsi set || setter di smart contracts (web3consortium)
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

  const textRaw = await web3Consortium.setText("Sabiq Muhammad Antebing Mame");
  console.log(`text = ${textRaw}`);
  /**
   * @output text = [object Object]
   * @description setelah menjalankan file set.js => kemudian jalankan file get.js
   */

  const createTodo = await web3Consortium.create("todo-1");
  console.log({ createTodo });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
