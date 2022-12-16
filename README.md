# ERC20 Token - TMV
This is a **Solidity** contract for an **ERC-20** token called **"TMVToken"**, with the symbol "TMV". Solidity is used to write and deploy the smart contract to the **Ethereum blockchain**, where it will be stored and replicated across the network.

The contract has a single constructor, which takes two arguments: a cap on the total supply of the token and a reward for mining new blocks. When the contract is deployed, the constructor initializes the owner of the contract to be the account that deployed it, and mints 70000000 tokens to the owner's account. The blockReward variable is also initialized to the value of the reward argument, multiplied by the number of decimals used by the token.

Once the smart contract is **deployed**, it can be used to create and manage the ERC20 tokens. The smart contract includes functions for transferring and managing the tokens, as well as for tracking the total supply of tokens in circulation.

Users can interact with the smart contract and the ERC20 tokens using an Ethereum wallet, such as **MyEtherWallet** or **MetaMask**. These wallets allow users to send and receive ERC20 tokens, as well as to view their balance and transaction history.
