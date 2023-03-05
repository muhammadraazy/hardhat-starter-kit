# Hardhat Starter Kit
## _my journey to become a blockchain developer is begin here_
### _this hardhat starter kit would help you to start building blockchain app quickyly_  

## Step to run locally
### *Clone this repository
```shell
   git clone <this repo url>
```

### *Installing all required packages
```shell
   npm install
```
### *Compile Your Contract
- compile your smart contract after you write it
```shell
  npx hardhat compile
```

### *Deploy Your Contract
- deploy it when you're done writing it
```shell
    npx hardhat deploy
```
- you can also provide the **--network** flag
```shell
  npx hardhat deploy --network <localhost> | <testnet> | <mainnet>
```

### *Testing Smart Contract
- after writing test, run this _command_
```shell
  npx hardhat test
```
