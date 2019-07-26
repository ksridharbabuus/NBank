let BankWallet = artifacts.require("./BankWallet.sol");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(BankWallet);
};