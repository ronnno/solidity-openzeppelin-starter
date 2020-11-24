// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract MyContract {

    uint value = 0xDEADBEEF;

    function setValue(uint v) external {
        value = v;
    }

    function getValue() external view returns (uint) {
        return value;
    }

}