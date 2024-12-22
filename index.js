import { UserWallet, TransactionPayload, Transaction, NetworkConfig, ProxyProvider } from '@multiversx/sdk-core';
import axios from 'axios';

// Constants
const PROXY_URL = 'https://devnet-gateway.multiversx.com'; // The URL of the MultiversX network proxy for devnet
const GAS_LIMIT = 50000; // The maximum amount of gas to be used for the transaction
const CLAIM_CONTRACT_ADDRESS = 'erd1...'; // Placeholder for the actual contract address where tokens are claimed

// Function to claim tokens for a single account
async function claimTokens(account) {
  // Create a provider to interact with the MultiversX blockchain
  const provider = new ProxyProvider(PROXY_URL);

  // Load the network configuration (such as chain ID and gas price)
  const networkConfig = await NetworkConfig.getDefault();

  // Create a transaction payload with the action 'claim' (this should match the contract's expectations)
  const payload = new TransactionPayload('claim');

  // Create a new transaction object with necessary details
  const transaction = new Transaction({
    nonce: await provider.getAccountNonce(account.address), // Get the current nonce for the account
    value: 0, // No value transfer, just claiming tokens
    receiver: CLAIM_CONTRACT_ADDRESS, // Address of the smart contract handling claims
    gasLimit: GAS_LIMIT, // The gas limit for the transaction
    data: payload, // The payload containing the action to be performed
    sender: account.address, // The address sending the transaction
  });

  // Sign the transaction with the account's credentials
  await transaction.sign(account);

  // Send the transaction to the blockchain and get the transaction hash
  const txHash = await provider.sendTransaction(transaction);
  console.log(`Claim transaction sent for ${account.address}: ${txHash}`);
}

// Function to claim tokens for all accounts in all shards
async function claimTokensForAllAccounts(accounts) {
  // Iterate over each shard
  for (let shard = 0; shard < accounts.length; shard++) {
    // Iterate over each account in the shard
    for (let account of accounts[shard]) {
      // Execute the claimTokens function for each account
      await claimTokens(account);
    }
  }
}

// Main function to orchestrate claiming of tokens
async function main() {
  // Define the generated accounts from challenge #1 (replace with actual accounts)
  const accounts = [
    [
      { address: 'erd1...', mnemonic: '...' }, // Account in shard 0
      { address: 'erd1...', mnemonic: '...' },
      { address: 'erd1...', mnemonic: '...' },
    ],
    [
      { address: 'erd1...', mnemonic: '...' }, // Account in shard 1
      { address: 'erd1...', mnemonic: '...' },
      { address: 'erd1...', mnemonic: '...' },
    ],
    [
      { address: 'erd1...', mnemonic: '...' }, // Account in shard 2
      { address: 'erd1...', mnemonic: '...' },
      { address: 'erd1...', mnemonic: '...' },
    ],
  ];

  // Call the function to claim tokens for all generated accounts
  await claimTokensForAllAccounts(accounts);
}

// Execute the main function and handle any potential errors
main().catch((error) => {
  console.error('Error:', error); // Log any errors that occur during the execution
});