// SPDX-License-Identifier: UNLICESED

pragma solidity ^0.8.0;

// contracts itu seperti class di oop
contract Transactions {
  // ini adalah variable
  // variable yang berfungsi menamnpung jumlah transaksi
  uint256 transactionCount;

  // ini adalah function yang akan kita panggil nanti
  event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

  struct TransferStruct {
    address sender;
    address receiver;
    uint amount;
    string message;
    uint256 timestamp;
    string keyword;
  }

  TransferStruct[] transactions;

  function addToBlockChain(address payable receiver, uint amount, string memory message, string memory keyword) public {
    transactionCount += 1;
    transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

    emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
  }

  function getAllTransaction() public view returns (TransferStruct[] memory) {
    return transactions;
  }

  function getTransactionCount() public view returns (uint256) {
    return transactionCount;
  }
}

