# 🧪 ARIO SimpleStorage — Test Plan

## Test Environment
- Remix IDE
- Remix VM
- Solidity ^0.8.20

## Test Cases

### 1. Initial Value
Expected result: `getValue()` returns `0`.

### 2. Store a Value
Action: Call `setValue(42)`.
Expected result: Transaction succeeds.

### 3. Retrieve the Stored Value
Action: Call `getValue()`.
Expected result: Returns `42`.

### 4. Update the Stored Value
Action: Call `setValue(100)`.
Expected result: `getValue()` returns `100`.

## Current Results

- [x] Initial value verified.
- [x] Stored value `42` successfully.
- [x] Retrieved value `42` successfully.
- [ ] Automated tests implemented.

## ⚠️ Disclaimer
This project is educational and has not been independently audited.
