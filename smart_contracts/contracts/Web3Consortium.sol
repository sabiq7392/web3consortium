//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Web3Consortium {
  string public textRaw;
  address private owner;
  uint256 public number;

  // struct Todo {
  //   string text;
  //   bool completed;
  // }

  // Todo[] public todos;
  string[] public todos;

  constructor() {
    // @owner isinya adalah address dari yang buat transaction || yang deploy smart contracts
    owner = msg.sender;
  }

  
  function create(string calldata _text) public {
    todos.push(_text);
    // todos.push(Todo({
    //   text: _text,
    //   completed: false
    // }));
  }

  function getTodos() public view returns (string[] memory) {
    return todos;
  }

  // function update(uint _index, string calldata _text) external {
  //   todos[_index].text = _text;
  // }

  // function get(uint _index) external view returns (string memory, bool) {
  //   Todo memory todo = todos[_index];
  //   return (todo.text, todo.completed);
  // }

  // function toggleCompleted(uint _index) external {
  //   todos[_index].completed = !todos[_index].completed;
  // }

  // @paramter string - tidak bisa hanya tipe datanya saja tapi juga harus kasih tipe
  // @modifier external - hanya bisa dipanggil diluar contracts
  function setText(string calldata _text) external {
    textRaw = _text;
  }

  // function inc() external {
  //   require(msg.sender == owner, "NOT_OWNER");
    
  //   number++;
  // }


  function getOwner() public view returns(address) {
    return owner;
  }
}
