# Superfluid NFT Billboard 

Learn how to insert and make use of additional metadata within your super agreements.

In this tutorial, you'll use Superfluid UserData to pay to post a message on an NFT billboard. We'll use scaffold-eth, hardhat, and react to get the job done โ

Note: this code has not been audited and is for example purposes only. 

We're exited to see what you build ๐ป

Usage

1) Go get some test DAIx tokens at app.superfluid.finance
2) Add your own private key and rpc URL for Mumbai inside of a .env file using the format in ```packages/hardhat/example.env```
3) Set Ethereum address with the test tokens to the _sender variable inside of the ```createFlow.js```, ```updateFlow.js```, and ```deleteFlow```.js scripts inside of the hardhat package
4) Add one of your Ethereum addresses as the owner within the deployment script ```00_deploy_tradeable_cashflow.js```
5) Add your own custom message inside of each of the scripts as the value that is encoded and set to the ```userData``` variable



For initial setup and contract deployment:

```yarn install
yarn deploy```

To run the react app
```yarn start```

To create flows and set an initial message
```npx hardhat run scripts/createFlow.js```

To update flows and change the message
```npx hardhat run scripts/updateFlow.js```

To delete flows
```npx hardhat run scripts/deleteFlow.js```

To read data and see userData logged in the console
```npx hardhat run scripts/readData.js```


NOTE: be careful with your private keys! Do not publish them to github. 



# ๐ Scaffold-ETH

> everything you need to build on Ethereum! ๐

๐งช Quickly experiment with Solidity using a frontend that adapts to your smart contract:

![image](https://user-images.githubusercontent.com/2653167/124158108-c14ca380-da56-11eb-967e-69cde37ca8eb.png)


# ๐โโ๏ธ Quick Start

Prerequisites: [Node](https://nodejs.org/en/download/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)

> clone/fork ๐ scaffold-eth:

```bash
git clone https://github.com/austintgriffith/scaffold-eth.git
```

> install and start your ๐ทโ Hardhat chain:

```bash
cd scaffold-eth
yarn install
yarn chain
```

> in a second terminal window, start your ๐ฑ frontend:

```bash
cd scaffold-eth
yarn start
```

> in a third terminal window, ๐ฐ deploy your contract:

```bash
cd scaffold-eth
yarn deploy
```

๐ Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`

๐ Edit your frontend `App.jsx` in `packages/react-app/src`

๐ผ Edit your deployment scripts in `packages/hardhat/deploy`

๐ฑ Open http://localhost:3000 to see the app

# ๐ Documentation

Documentation, tutorials, challenges, and many more resources, visit: [docs.scaffoldeth.io](https://docs.scaffoldeth.io)

# ๐ญ Learning Solidity

๐ Read the docs: https://docs.soliditylang.org

๐ Go through each topic from [solidity by example](https://solidity-by-example.org) editing `YourContract.sol` in **๐ scaffold-eth**

- [Primitive Data Types](https://solidity-by-example.org/primitives/)
- [Mappings](https://solidity-by-example.org/mapping/)
- [Structs](https://solidity-by-example.org/structs/)
- [Modifiers](https://solidity-by-example.org/function-modifier/)
- [Events](https://solidity-by-example.org/events/)
- [Inheritance](https://solidity-by-example.org/inheritance/)
- [Payable](https://solidity-by-example.org/payable/)
- [Fallback](https://solidity-by-example.org/fallback/)

๐ง Learn the [Solidity globals and units](https://solidity.readthedocs.io/en/v0.6.6/units-and-global-variables.html)

# ๐? Buidl

Check out all the [active branches](https://github.com/austintgriffith/scaffold-eth/branches/active), [open issues](https://github.com/austintgriffith/scaffold-eth/issues), and join/fund the ๐ฐ [BuidlGuidl](https://BuidlGuidl.com)!

  
 - ๐ค  [Follow the full Ethereum Speed Run](https://medium.com/@austin_48503/%EF%B8%8Fethereum-dev-speed-run-bd72bcba6a4c)


 - ๐  [Create your first NFT](https://github.com/austintgriffith/scaffold-eth/tree/simple-nft-example)
 - ๐ฅฉ  [Build a staking smart contract](https://github.com/austintgriffith/scaffold-eth/tree/challenge-1-decentralized-staking)
 - ๐ต  [Deploy a token and vendor](https://github.com/austintgriffith/scaffold-eth/tree/challenge-2-token-vendor)
 - ๐ซ  [Extend the NFT example to make a "buyer mints" marketplace](https://github.com/austintgriffith/scaffold-eth/tree/buyer-mints-nft)
 - ๐ฒ  [Learn about commit/reveal](https://github.com/austintgriffith/scaffold-eth/tree/commit-reveal-with-frontend)
 - โ๏ธ  [Learn how ecrecover works](https://github.com/austintgriffith/scaffold-eth/tree/signature-recover)
 - ๐ฉโ๐ฉโ๐งโ๐ง  [Build a multi-sig that uses off-chain signatures](https://github.com/austintgriffith/scaffold-eth/tree/meta-multi-sig)
 - โณ  [Extend the multi-sig to stream ETH](https://github.com/austintgriffith/scaffold-eth/tree/streaming-meta-multi-sig)
 - โ๏ธ  [Learn how a simple DEX works](https://medium.com/@austin_48503/%EF%B8%8F-minimum-viable-exchange-d84f30bd0c90)
 - ๐ฆ  [Ape into learning!](https://github.com/austintgriffith/scaffold-eth/tree/aave-ape)

# ๐ฌ Support Chat

Join the telegram [support chat ๐ฌ](https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA) to ask questions and find others building with ๐ scaffold-eth!

---

๐ Please check out our [Gitcoin grant](https://gitcoin.co/grants/2851/scaffold-eth) too!
