# MultiversX Token Claimer

This project provides a script to claim tokens on the MultiversX blockchain using accounts generated in a previous challenge. The script interacts with the MultiversX network to send claim transactions from multiple accounts.

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (Node package manager)

## Setup

1. **Clone the Repository**

   Clone the GitHub repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/multiversx-token-claimer.git
   cd multiversx-token-claimer
Install Dependencies

Navigate to the project directory and install the required Node.js packages:

npm install
Configuration
Update Script

Open src/index.js and make the following updates:

Replace CLAIM_CONTRACT_ADDRESS with the actual contract address that handles token claims on the MultiversX blockchain.
Replace the placeholder addresses and mnemonics in the accounts array with the actual accounts you generated from challenge #1.
Gas Limit and Payload

Ensure that the GAS_LIMIT and transaction payload match the requirements of your specific smart contract:

GAS_LIMIT: Adjust if necessary based on the complexity of the transaction.
payload: Ensure the payload string 'claim' matches what the smart contract expects for processing claims.
Usage
Run the script to execute the token claim process:

bash
Copy
npm start
Script Workflow
The script initializes a connection to the MultiversX devnet using a proxy provider.
It iterates over each account in the provided list, sending a claim transaction to the specified contract.
Each transaction is signed and submitted to the network, with the transaction hash logged for verification.
Verification
You can verify the transactions by:

Contract Transactions: Use the MultiversX explorer to view transactions sent to the contract address.
Account History: Check the transaction history of each account to ensure the claim transactions have been processed successfully.
Error Handling
The script includes basic error handling to log any issues during execution. Check the console output for any error messages.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributing
If you wish to contribute to this project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.