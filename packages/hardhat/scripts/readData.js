require("dotenv");
const Web3 = require("web3");

//all addresses hardcoded for mumbai
const hostJSON = require("../artifacts/@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol/ISuperfluid.json")
const hostABI = hostJSON.abi;
const hostAddress = "0xEB796bdb90fFA0f28255275e16936D25d3418603";

const cfaJSON = require("../artifacts/@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol/IConstantFlowAgreementV1.json")
const cfaABI = cfaJSON.abi;
const cfaAddress = "0x49e565Ed1bdc17F3d220f72DF0857C26FA83F873";

const tradeableCashflowJSON = require("../artifacts/contracts/TradeableCashflow.sol/TradeableCashflow.json");
const tradeableCashflowABI = tradeableCashflowJSON.abi; 

  //temporarily hardcode contract address 
const tradeableCashflowAddress = "0xF15819d207f910AeaD64447288D6273816F26530";

//read flowData
async function main() {

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.MUMBAI_ALCHEMY_URL));

  //create contract instances for each of these
  const host = new web3.eth.Contract(hostABI, hostAddress);
  const cfa = new web3.eth.Contract(cfaABI, cfaAddress);
  const tradeableCashflow = new web3.eth.Contract(tradeableCashflowABI, tradeableCashflowAddress)

  //get data
  const check = await tradeableCashflow.methods.uData().call();
  const decoded = web3.eth.abi.decodeParameter('string', check.userData);
  console.log(check)
  console.log(decoded)
  
  //get jail info
  const jailed = await host.methods.getAppManifest(tradeableCashflowAddress).call()
  console.log(jailed)
  const isJailed = await host.methods.isAppJailed(tradeableCashflowAddress).call();
  console.log(`is jailed: ${isJailed}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });