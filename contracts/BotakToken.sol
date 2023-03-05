pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BotakToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Botak", "BT") {
        _mint(msg.sender, initialSupply);
    }
}
