const assert = require("assert");
const ganache = require("ganache-cli");
const fs = require("fs");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const bytecode = fs.readFileSync('./build/__contracts_lottery_sol_Lottery.bin');
const abi = JSON.parse(fs.readFileSync('./build/__contracts_lottery_sol_Lottery.abi'));
var accounts;
var lottery;
beforeEach(async () => {
accounts = await web3.eth.getAccounts()
lottery = await
new web3.eth.Contract(abi)
.deploy({
data: '0x'+bytecode,

}).send({
from: accounts[0],
gas:'1000000'
});

console.log(accounts);
});
describe('Lottery',() => {
it('deploys a lottery contract', () => {
    //console.log(accounts);
    console.log("contract address:  "+ lottery.options.address);
assert.ok(lottery.options.address);
});

});