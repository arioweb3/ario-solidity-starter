// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title ARIO Simple Storage
/// @notice A simple contract to store and retrieve a number.
/// @dev Educational project — not audited for production use.
contract SimpleStorage {
    uint256 private storedValue;

    event ValueUpdated(
        uint256 oldValue,
        uint256 newValue,
        address indexed updatedBy
    );

    function setValue(uint256 newValue) external {
        uint256 oldValue = storedValue;
        storedValue = newValue;

        emit ValueUpdated(oldValue, newValue, msg.sender);
    }

    function getValue() external view returns (uint256) {
        return storedValue;
    }
}
